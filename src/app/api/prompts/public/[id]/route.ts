import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()

    const { data: prompt, error } = await supabase
      .from('prompts')
      .select('id, name, images, extracted_styles, generated_prompt, export_format, created_at')
      .eq('id', id)
      .eq('is_public', true)
      .single()

    if (error || !prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    return NextResponse.json({ prompt })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch prompt' }, { status: 500 })
  }
}
