import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const sort = searchParams.get('sort') || 'newest'
    const limitParam = searchParams.get('limit')
    const limit = limitParam !== null ? parseInt(limitParam, 10) : 50

    // Fetch profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('monthly_prompt_count, monthly_prompt_limit, subscription_tier')
      .eq('id', user.id)
      .single()

    if (limit === 0) {
      return NextResponse.json({ prompts: [], profile: profile || { monthly_prompt_count: 0, monthly_prompt_limit: 3, subscription_tier: 'free' } })
    }

    let query = supabase
      .from('prompts')
      .select('id, name, description, images, export_format, created_at')
      .eq('user_id', user.id)

    if (search) {
      query = query.ilike('name', `%${search}%`)
    }

    switch (sort) {
      case 'oldest':
        query = query.order('created_at', { ascending: true })
        break
      case 'name':
        query = query.order('name', { ascending: true })
        break
      default:
        query = query.order('created_at', { ascending: false })
    }

    query = query.limit(limit)

    const { data: prompts, error } = await query

    if (error) {
      return NextResponse.json({
        prompts: [],
        profile: profile || { monthly_prompt_count: 0, monthly_prompt_limit: 3, subscription_tier: 'free' },
      })
    }

    return NextResponse.json({
      prompts: prompts || [],
      profile: profile || { monthly_prompt_count: 0, monthly_prompt_limit: 3, subscription_tier: 'free' },
    })
  } catch {
    return NextResponse.json({
      prompts: [],
      profile: { monthly_prompt_count: 0, monthly_prompt_limit: 3, subscription_tier: 'free' },
    })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const body = await request.json() as {
      name: string
      images: string[]
      extracted_styles: Record<string, unknown>
      generated_prompt: string
      export_format?: string
      description?: string
    }

    const { data: prompt, error } = await supabase
      .from('prompts')
      .insert({
        user_id: user.id,
        name: body.name,
        description: body.description || null,
        images: body.images,
        extracted_styles: body.extracted_styles,
        generated_prompt: body.generated_prompt,
        export_format: body.export_format || 'generic',
      })
      .select('id')
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ prompt })
  } catch {
    return NextResponse.json({ error: 'Failed to create prompt' }, { status: 500 })
  }
}
