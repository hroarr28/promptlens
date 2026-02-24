import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import type { ExtractedStyles } from '@/lib/export-formats'

const MOCK_STYLES: ExtractedStyles = {
  colours: [
    { hex: '#3B82F6', name: 'Primary Blue', usage: 'Primary buttons, links, accents' },
    { hex: '#1E293B', name: 'Dark Slate', usage: 'Headings, primary text' },
    { hex: '#64748B', name: 'Slate Grey', usage: 'Secondary text, descriptions' },
    { hex: '#F8FAFC', name: 'Light Background', usage: 'Page background, cards' },
    { hex: '#E2E8F0', name: 'Border Grey', usage: 'Borders, dividers' },
    { hex: '#10B981', name: 'Success Green', usage: 'Success states, confirmations' },
  ],
  typography: [
    { font: 'Inter', size: '36px', weight: '700', usage: 'H1 headings' },
    { font: 'Inter', size: '24px', weight: '600', usage: 'H2 headings' },
    { font: 'Inter', size: '16px', weight: '400', usage: 'Body text' },
    { font: 'Inter', size: '14px', weight: '500', usage: 'Labels, captions' },
  ],
  spacing: [
    { value: '4px', usage: 'Tight spacing (inline elements)' },
    { value: '8px', usage: 'Default gap' },
    { value: '16px', usage: 'Card padding' },
    { value: '24px', usage: 'Section spacing' },
    { value: '48px', usage: 'Major section gaps' },
  ],
  borders: [
    { value: '1px solid #E2E8F0', usage: 'Card borders' },
    { value: 'border-radius: 8px', usage: 'Card corners' },
    { value: 'border-radius: 6px', usage: 'Button corners' },
  ],
  shadows: [
    { value: '0 1px 3px rgba(0,0,0,0.1)', usage: 'Card shadow' },
    { value: '0 4px 6px rgba(0,0,0,0.1)', usage: 'Elevated elements' },
  ],
  layout: 'Responsive grid layout with a max-width container. Uses CSS Grid for card layouts and Flexbox for navigation and inline elements. Mobile-first approach with breakpoints at 640px, 768px, and 1024px.',
}

const MOCK_PROMPT = `Build a modern web interface with a clean, professional design system.

**Layout:** Use a responsive grid layout with a centred max-width container (1200px). Navigation bar at the top with logo left and actions right. Main content uses a 12-column grid that collapses to single column on mobile.

**Colour Scheme:** Primary blue (#3B82F6) for interactive elements and CTAs. Dark slate (#1E293B) for headings. Slate grey (#64748B) for secondary text. Light background (#F8FAFC) for the page. Success green (#10B981) for positive states.

**Typography:** Inter font family throughout. Bold 36px for H1, semibold 24px for H2, regular 16px for body, medium 14px for labels. Line height 1.5 for body text.

**Components:** Cards with 1px borders (#E2E8F0), 8px border-radius, subtle shadow (0 1px 3px rgba(0,0,0,0.1)), and 16px padding. Buttons with 6px border-radius, 44px minimum height for touch targets. Form inputs with clear labels and focus rings.

**Spacing:** 4-8-16-24-48px spacing scale. Consistent padding within cards and sections. 24px gap between cards in grid layouts.

**Interactions:** Hover states on all interactive elements. Focus-visible rings for keyboard navigation. Smooth transitions (150ms ease). Loading skeletons for async content.`

function getAnthropicApiKey(): string | null {
  // Use PROMPTLENS_ANTHROPIC_KEY first (app-specific, avoids system env conflicts)
  // Fall back to ANTHROPIC_API_KEY if it's a real api key (not oat01 OAuth token)
  const appKey = process.env.PROMPTLENS_ANTHROPIC_KEY
  if (appKey && appKey !== 'placeholder' && appKey.length > 10) return appKey

  const key = process.env.ANTHROPIC_API_KEY
  if (!key || key === 'placeholder' || key.length < 10) return null
  // oat01 tokens are OpenClaw OAuth tokens — can't be used for direct API calls
  if (key.includes('-oat01-')) return null
  return key
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    // Rate limit: 10 analyses per minute per user (expensive Claude API calls)
    const { allowed } = rateLimit(`analyze:${user.id}`, 10, 60_000)
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
    }

    const body = await request.json() as { images: string[]; name: string }
    const { images, name } = body

    if (!images?.length || !name?.trim()) {
      return NextResponse.json({ error: 'Images and name are required' }, { status: 400 })
    }

    // Validate image count
    if (images.length > 3) {
      return NextResponse.json({ error: 'Maximum 3 images allowed' }, { status: 400 })
    }

    // Check usage limits
    const { data: profile } = await supabase
      .from('profiles')
      .select('monthly_prompt_count, monthly_prompt_limit, subscription_tier')
      .eq('id', user.id)
      .single()

    if (profile && profile.subscription_tier !== 'pro') {
      if (profile.monthly_prompt_count >= profile.monthly_prompt_limit) {
        return NextResponse.json({
          error: 'Monthly prompt limit reached. Upgrade to Pro for unlimited prompts.',
        }, { status: 402 })
      }
    }

    let styles: ExtractedStyles
    let prompt: string

    const resolvedKey = getAnthropicApiKey()

    if (!resolvedKey) {
      // Mock data fallback
      styles = MOCK_STYLES
      prompt = MOCK_PROMPT
    } else {
      // Real Claude Vision API call
      try {
        // Fetch images and convert to base64 (more reliable than URL source)
        const imageContents = await Promise.all(images.map(async (url) => {
          const imgRes = await fetch(url)
          if (!imgRes.ok) throw new Error(`Failed to fetch image: ${url}`)
          const buffer = await imgRes.arrayBuffer()
          const base64 = Buffer.from(buffer).toString('base64')
          const contentType = imgRes.headers.get('content-type') || 'image/png'
          return {
            type: 'image' as const,
            source: {
              type: 'base64' as const,
              media_type: contentType as 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif',
              data: base64,
            },
          }
        }))

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': getAnthropicApiKey()!,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 4096,
            messages: [{
              role: 'user',
              content: [
                ...imageContents,
                {
                  type: 'text',
                  text: `Analyse this design screenshot. Return your response in EXACTLY this format — a JSON code block followed by a prompt section:

\`\`\`json
{
  "colours": [{ "hex": "#...", "name": "...", "usage": "..." }],
  "typography": [{ "font": "...", "size": "...", "weight": "...", "usage": "..." }],
  "spacing": [{ "value": "...", "usage": "..." }],
  "borders": [{ "value": "...", "usage": "..." }],
  "shadows": [{ "value": "...", "usage": "..." }],
  "layout": "description of layout approach"
}
\`\`\`

---PROMPT---
[Write a detailed natural language prompt that an AI design tool could use to recreate this design. Include specific CSS values, colours, fonts, spacing. Use British English.]`,
                },
              ],
            }],
          }),
        })

        if (!response.ok) throw new Error('Claude API error')
        const result = await response.json() as { content: Array<{ text: string }> }
        const text = result.content[0].text

        // Parse JSON from code block
        const jsonBlockMatch = text.match(/```json\s*([\s\S]*?)```/)
        const promptSectionMatch = text.match(/---PROMPT---\s*([\s\S]*)/)

        if (jsonBlockMatch) {
          try {
            styles = JSON.parse(jsonBlockMatch[1].trim()) as ExtractedStyles
          } catch {
            // Fallback: try to find any JSON object
            const fallbackMatch = text.match(/\{[\s\S]*\}/)
            styles = fallbackMatch ? JSON.parse(fallbackMatch[0]) as ExtractedStyles : MOCK_STYLES
          }
        } else {
          // No code block — try raw JSON
          const fallbackMatch = text.match(/\{[\s\S]*\}/)
          styles = fallbackMatch ? JSON.parse(fallbackMatch[0]) as ExtractedStyles : MOCK_STYLES
        }

        prompt = promptSectionMatch
          ? promptSectionMatch[1].trim()
          : text.replace(/```json[\s\S]*?```/, '').replace(/---PROMPT---/, '').trim() || text
      } catch (err) {
        console.error('Claude Vision API error:', err)
        // Return error instead of silently falling back to mock
        return NextResponse.json({
          error: 'AI analysis failed. Check API key configuration.',
          detail: err instanceof Error ? err.message : 'Unknown error',
        }, { status: 500 })
      }
    }

    // Save to database
    let promptId = crypto.randomUUID()
    try {
      const { data: savedPrompt, error: insertError } = await supabase
        .from('prompts')
        .insert({
          user_id: user.id,
          name: name.trim(),
          images,
          extracted_styles: styles,
          generated_prompt: prompt,
          export_format: 'generic',
        })
        .select('id')
        .single()

      if (!insertError && savedPrompt) {
        promptId = savedPrompt.id
      }

      // Increment usage
      await supabase
        .from('profiles')
        .update({ monthly_prompt_count: (profile?.monthly_prompt_count ?? 0) + 1 })
        .eq('id', user.id)
    } catch {
      // Continue even if DB save fails with placeholder credentials
    }

    return NextResponse.json({ prompt, styles, promptId })
  } catch {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 })
  }
}
