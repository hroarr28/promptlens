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
        error: 'Stripe is not configured yet. Set STRIPE_SECRET_KEY in .env.local to enable billing management.',
        url: null,
      }, { status: 503 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (!profile?.stripe_customer_id) {
      return NextResponse.json({ error: 'No billing account found' }, { status: 404 })
    }

    const stripe = (await import('stripe')).default
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!)

    const session = await stripeClient.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 })
  }
}
