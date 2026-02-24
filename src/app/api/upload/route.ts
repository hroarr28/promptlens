import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp']
const MAX_SIZE = 10 * 1024 * 1024 // 10MB

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    // Rate limit: 30 uploads per minute per user
    const { allowed } = rateLimit(`upload:${user.id}`, 30, 60_000)
    if (!allowed) {
      return NextResponse.json({ error: 'Too many uploads. Please wait a moment.' }, { status: 429 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Accepted: PNG, JPEG, WEBP' }, { status: 400 })
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File too large. Maximum 10MB' }, { status: 400 })
    }

    const ext = file.name.split('.').pop() || 'png'
    const fileName = `${user.id}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('design-uploads')
      .upload(fileName, file, { contentType: file.type })

    if (uploadError) {
      // Graceful fallback for placeholder credentials
      if (uploadError.message?.includes('not found') || uploadError.message?.includes('placeholder')) {
        return NextResponse.json({
          url: `https://placeholder.supabase.co/storage/v1/object/public/design-uploads/${fileName}`,
          note: 'Using placeholder URL — configure Supabase to enable real uploads',
        })
      }
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    const { data: signedUrlData } = await supabase.storage
      .from('design-uploads')
      .createSignedUrl(fileName, 60 * 60 * 24 * 365) // 1 year

    return NextResponse.json({
      url: signedUrlData?.signedUrl || `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/design-uploads/${fileName}`,
    })
  } catch {
    return NextResponse.json({ error: 'Upload failed — Supabase may not be configured' }, { status: 500 })
  }
}
