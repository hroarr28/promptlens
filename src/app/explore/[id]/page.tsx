'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft, Copy, Download } from 'lucide-react'
import { formatForStitch, formatForCursor, formatForAnima, formatGeneric } from '@/lib/export-formats'
import type { ExtractedStyles } from '@/lib/export-formats'

interface PublicPromptData {
  id: string
  name: string
  images: string[]
  extracted_styles: ExtractedStyles | null
  generated_prompt: string
  export_format: string
  created_at: string
}

export default function PublicPromptDetailPage() {
  const params = useParams()
  const { toast } = useToast()
  const [prompt, setPrompt] = useState<PublicPromptData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrompt() {
      try {
        const res = await fetch(`/api/prompts/public/${params.id}`)
        if (res.ok) {
          const data = await res.json() as { prompt: PublicPromptData }
          setPrompt(data.prompt)
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false)
      }
    }
    fetchPrompt()
  }, [params.id])

  function handleExport(format: string) {
    if (!prompt?.extracted_styles || !prompt.generated_prompt) return
    const styles = prompt.extracted_styles
    let formatted: string
    switch (format) {
      case 'stitch': formatted = formatForStitch(prompt.generated_prompt, styles); break
      case 'cursor': formatted = formatForCursor(prompt.generated_prompt, styles); break
      case 'anima': formatted = formatForAnima(prompt.generated_prompt, styles); break
      default: formatted = formatGeneric(prompt.generated_prompt, styles)
    }
    navigator.clipboard.writeText(formatted)
    toast({ title: `Copied ${format} format to clipboard` })
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!prompt) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <p className="text-lg">Prompt not found or is not public</p>
        <Button asChild className="min-h-[44px]">
          <Link href="/explore">Back to explore</Link>
        </Button>
      </div>
    )
  }

  const styles = prompt.extracted_styles

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild className="min-h-[44px]" aria-label="Back to explore">
          <Link href="/explore"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-2xl font-bold">{prompt.name}</h1>
        <Badge variant="secondary">{prompt.export_format}</Badge>
      </div>

      {/* Images */}
      {prompt.images.length > 0 && (
        <Card>
          <CardHeader><CardTitle>Design Images</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {prompt.images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-lg border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`Design upload ${i + 1}`} className="h-48 w-full object-cover" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Styles */}
      {styles && (
        <Card>
          <CardHeader><CardTitle>Extracted Styles</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {styles.colours?.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Colour Palette</h3>
                <div className="flex flex-wrap gap-3">
                  {styles.colours.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border p-2">
                      <div
                        className="h-8 w-8 rounded-full border"
                        style={{ backgroundColor: c.hex }}
                        aria-label={`Colour: ${c.name} (${c.hex})`}
                      />
                      <div>
                        <p className="text-sm font-medium">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {styles.typography?.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Typography</h3>
                <div className="space-y-2">
                  {styles.typography.map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Badge variant="secondary">{t.usage}</Badge>
                      <span className="text-sm" style={{ fontWeight: t.weight === 'Bold' || t.weight === '700' ? 700 : 400 }}>
                        {t.font}, {t.size}, {t.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Prompt */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Generated Prompt</CardTitle>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-h-[44px]">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleExport('stitch')} className="min-h-[44px]">Google Stitch</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('cursor')} className="min-h-[44px]">Cursor</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('anima')} className="min-h-[44px]">Anima</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('generic')} className="min-h-[44px]">Generic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              className="min-h-[44px]"
              onClick={() => {
                navigator.clipboard.writeText(prompt.generated_prompt)
                toast({ title: 'Copied to clipboard' })
              }}
              aria-label="Copy prompt"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-4 font-mono text-sm">
            {prompt.generated_prompt}
          </pre>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
          <p className="text-lg font-semibold">Want to create your own?</p>
          <p className="text-sm text-muted-foreground">
            Upload your designs and get AI-generated prompts in seconds.
          </p>
          <Button asChild className="min-h-[44px]">
            <Link href="/signup">Sign up free</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
