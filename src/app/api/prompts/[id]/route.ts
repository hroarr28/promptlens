import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const { data: prompt, error } = await supabase
      .from('prompts')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .single()

    if (error || !prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    return NextResponse.json({ prompt })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch prompt' }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const body = await request.json() as Record<string, unknown>
    const updates: Record<string, unknown> = {}

    if (body.generated_prompt !== undefined) updates.generated_prompt = body.generated_prompt
    if (body.name !== undefined) updates.name = body.name
    if (body.export_format !== undefined) updates.export_format = body.export_format
    if (body.is_public !== undefined) updates.is_public = body.is_public
    updates.updated_at = new Date().toISOString()

    const { data: prompt, error } = await supabase
      .from('prompts')
      .update(updates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select('id')
      .single()

    if (error || !prompt) {
      return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
    }

    return NextResponse.json({ prompt })
  } catch {
    return NextResponse.json({ error: 'Failed to update prompt' }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const { error } = await supabase
      .from('prompts')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id)

    if (error) {
      return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete prompt' }, { status: 500 })
  }
}
