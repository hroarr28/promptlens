import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 50)
    const offset = (page - 1) * limit

    const supabase = await createClient()

    let query = supabase
      .from('prompts')
      .select('id, name, images, export_format, created_at, extracted_styles', { count: 'exact' })
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (search) {
      query = query.ilike('name', `%${search}%`)
    }

    const { data: prompts, error, count } = await query

    if (error) {
      return NextResponse.json({ prompts: [], total: 0 })
    }

    return NextResponse.json({
      prompts: prompts || [],
      total: count || 0,
      page,
      limit,
    })
  } catch {
    return NextResponse.json({ prompts: [], total: 0 }, { status: 500 })
  }
}
