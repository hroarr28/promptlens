import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

function isStripeConfigured(): boolean {
  const key = process.env.STRIPE_SECRET_KEY
  return !!key && key !== 'placeholder' && key.length > 10
}

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    if (!isStripeConfigured()) {
      return NextResponse.json({
        error: 'Stripe is not configured yet. Set STRIPE_SECRET_KEY in .env.local to enable payments.',
        url: null,
      }, { status: 503 })
    }

    const stripe = (await import('stripe')).default
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!)

    const session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'PromptLens Pro',
            description: 'Unlimited AI design prompts per month',
          },
          unit_amount: 700, // £7.00
          recurring: { interval: 'month' },
        },
        quantity: 1,
      }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?cancelled=true`,
      client_reference_id: user.id,
      customer_email: user.email,
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
