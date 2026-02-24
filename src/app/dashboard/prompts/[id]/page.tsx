'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Skeleton } from '@/components/ui/skeleton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft, Copy, Download, Trash2, CopyPlus, Loader2 } from 'lucide-react'
import { formatForStitch, formatForCursor, formatForAnima, formatGeneric } from '@/lib/export-formats'
import type { ExtractedStyles } from '@/lib/export-formats'

interface PromptData {
  id: string
  name: string
  description: string | null
  images: string[]
  extracted_styles: ExtractedStyles | null
  generated_prompt: string
  export_format: string
  created_at: string
}

export default function PromptDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [prompt, setPrompt] = useState<PromptData | null>(null)
  const [editedPrompt, setEditedPrompt] = useState('')
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [saving, setSaving] = useState(false)

  const fetchPrompt = useCallback(async () => {
    try {
      const res = await fetch(`/api/prompts/${params.id}`)
      if (res.ok) {
        const data = await res.json() as { prompt: PromptData }
        setPrompt(data.prompt)
        setEditedPrompt(data.prompt.generated_prompt)
      }
    } catch {
      toast({ title: 'Failed to load prompt', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }, [params.id, toast])

  useEffect(() => {
    fetchPrompt()
  }, [fetchPrompt])

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(`/api/prompts/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generated_prompt: editedPrompt }),
      })
      if (res.ok) {
        toast({ title: 'Prompt saved' })
      } else {
        toast({ title: 'Failed to save', variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Failed to save', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    setDeleting(true)
    try {
      const res = await fetch(`/api/prompts/${params.id}`, { method: 'DELETE' })
      if (res.ok) {
        toast({ title: 'Prompt deleted' })
        router.push('/dashboard/prompts')
      } else {
        toast({ title: 'Failed to delete', variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Failed to delete', variant: 'destructive' })
    } finally {
      setDeleting(false)
    }
  }

  async function handleDuplicate() {
    if (!prompt) return
    try {
      const res = await fetch('/api/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${prompt.name} (copy)`,
          images: prompt.images,
          extracted_styles: prompt.extracted_styles,
          generated_prompt: editedPrompt,
          export_format: prompt.export_format,
        }),
      })
      if (res.ok) {
        const data = await res.json() as { prompt: { id: string } }
        toast({ title: 'Prompt duplicated' })
        router.push(`/dashboard/prompts/${data.prompt.id}`)
      }
    } catch {
      toast({ title: 'Failed to duplicate', variant: 'destructive' })
    }
  }

  function handleExport(format: string) {
    if (!prompt?.extracted_styles) return
    const styles = prompt.extracted_styles
    let formatted: string
    switch (format) {
      case 'stitch':
        formatted = formatForStitch(editedPrompt, styles)
        break
      case 'cursor':
        formatted = formatForCursor(editedPrompt, styles)
        break
      case 'anima':
        formatted = formatForAnima(editedPrompt, styles)
        break
      default:
        formatted = formatGeneric(editedPrompt, styles)
    }
    navigator.clipboard.writeText(formatted)
    toast({ title: `Copied ${format} format to clipboard` })
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!prompt) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <p className="text-lg">Prompt not found</p>
        <Button asChild className="min-h-[44px]">
          <a href="/dashboard/prompts">Back to prompts</a>
        </Button>
      </div>
    )
  }

  const styles = prompt.extracted_styles

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()} className="min-h-[44px]" aria-label="Go back">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">{prompt.name}</h1>
      </div>

      {/* Images */}
      {prompt.images.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Images</CardTitle>
          </CardHeader>
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

      {/* Extracted styles */}
      {styles && (
        <Card>
          <CardHeader>
            <CardTitle>Extracted Styles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Colours */}
            {styles.colours?.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Colour Palette</h3>
                <div className="flex flex-wrap gap-3">
                  {styles.colours.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border p-2">
                      <div
                        className="h-8 w-8 rounded border"
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

            {/* Typography */}
            {styles.typography?.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Typography</h3>
                <div className="flex flex-wrap gap-2">
                  {styles.typography.map((t, i) => (
                    <Badge key={i} variant="secondary">
                      {t.font} · {t.size} · {t.weight}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Spacing */}
            {styles.spacing?.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium">Spacing</h3>
                <div className="flex flex-wrap gap-2">
                  {styles.spacing.map((s, i) => (
                    <Badge key={i} variant="outline">
                      {s.usage}: {s.value}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Generated prompt */}
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
                <DropdownMenuItem onClick={() => handleExport('stitch')} className="min-h-[44px]">
                  Google Stitch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('cursor')} className="min-h-[44px]">
                  Cursor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('anima')} className="min-h-[44px]">
                  Anima
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('generic')} className="min-h-[44px]">
                  Generic (plain text)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              className="min-h-[44px]"
              onClick={() => {
                navigator.clipboard.writeText(editedPrompt)
                toast({ title: 'Copied to clipboard' })
              }}
              aria-label="Copy prompt"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={editedPrompt}
            onChange={(e) => setEditedPrompt(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
            aria-label="Edit generated prompt"
          />
          <Button onClick={handleSave} disabled={saving} className="min-h-[44px]">
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={handleDuplicate} className="min-h-[44px]">
          <CopyPlus className="mr-2 h-4 w-4" />
          Duplicate
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="min-h-[44px]">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete prompt?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete &quot;{prompt.name}&quot;.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={handleDelete} disabled={deleting} className="min-h-[44px]">
                {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
