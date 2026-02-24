import { createAdminClient } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

function isStripeConfigured(): boolean {
  const key = process.env.STRIPE_SECRET_KEY
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  return !!key && key !== 'placeholder' && !!secret && secret !== 'placeholder'
}

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({
      error: 'Stripe webhooks are not configured. Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET in .env.local.',
    }, { status: 503 })
  }

  try {
    const stripe = (await import('stripe')).default
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!)

    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const event = stripeClient.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    const supabase = createAdminClient()

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as { client_reference_id?: string; customer?: string; subscription?: string }
        if (session.client_reference_id) {
          await supabase
            .from('profiles')
            .update({
              subscription_tier: 'pro',
              subscription_status: 'active',
              stripe_customer_id: session.customer as string,
              stripe_subscription_id: session.subscription as string,
              monthly_prompt_limit: 999999,
              updated_at: new Date().toISOString(),
            })
            .eq('id', session.client_reference_id)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as { customer?: string; status?: string }
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', subscription.customer as string)
          .limit(1)

        if (profiles?.[0]) {
          const isActive = subscription.status === 'active' || subscription.status === 'trialing'
          await supabase
            .from('profiles')
            .update({
              subscription_status: subscription.status as string,
              subscription_tier: isActive ? 'pro' : 'free',
              monthly_prompt_limit: isActive ? 999999 : 3,
              updated_at: new Date().toISOString(),
            })
            .eq('id', profiles[0].id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as { customer?: string }
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', subscription.customer as string)
          .limit(1)

        if (profiles?.[0]) {
          await supabase
            .from('profiles')
            .update({
              subscription_tier: 'free',
              subscription_status: 'cancelled',
              monthly_prompt_limit: 3,
              updated_at: new Date().toISOString(),
            })
            .eq('id', profiles[0].id)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as { customer?: string }
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', invoice.customer as string)
          .limit(1)

        if (profiles?.[0]) {
          await supabase
            .from('profiles')
            .update({
              subscription_status: 'past_due',
              updated_at: new Date().toISOString(),
            })
            .eq('id', profiles[0].id)
        }
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
