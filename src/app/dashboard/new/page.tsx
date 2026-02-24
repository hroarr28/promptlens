'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToast } from '@/hooks/use-toast'
import { Upload, X, Loader2, Copy, Download, Save } from 'lucide-react'
import { formatForStitch, formatForCursor, formatForAnima, formatGeneric } from '@/lib/export-formats'
import type { ExtractedStyles } from '@/lib/export-formats'

interface AnalysisResult {
  prompt: string
  styles: ExtractedStyles
  promptId: string
}

interface PreviewFile {
  file: File
  preview: string
}

export default function NewPromptPage() {
  const [files, setFiles] = useState<PreviewFile[]>([])
  const [, setUploadedUrls] = useState<string[]>([])
  const [name, setName] = useState('')
  const [uploading, setUploading] = useState(false)
  const [analysing, setAnalysing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [editedPrompt, setEditedPrompt] = useState('')
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remaining = 3 - files.length
      if (remaining <= 0) {
        toast({ title: 'Maximum 3 images allowed', variant: 'destructive' })
        return
      }
      const newFiles = acceptedFiles.slice(0, remaining).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))
      setFiles((prev) => [...prev, ...newFiles])
    },
    [files.length, toast]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/png': [], 'image/jpeg': [], 'image/webp': [] },
    maxSize: 10 * 1024 * 1024,
    disabled: files.length >= 3,
  })

  function removeFile(index: number) {
    setFiles((prev) => {
      const newFiles = [...prev]
      URL.revokeObjectURL(newFiles[index].preview)
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  async function handleUploadAndAnalyse() {
    if (files.length === 0) {
      toast({ title: 'Please upload at least one image', variant: 'destructive' })
      return
    }
    if (!name.trim()) {
      toast({ title: 'Please name your prompt', variant: 'destructive' })
      return
    }

    // Upload files
    setUploading(true)
    const urls: string[] = []
    try {
      for (const { file } of files) {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('/api/upload', { method: 'POST', body: formData })
        if (!res.ok) {
          const data = await res.json() as { error?: string }
          throw new Error(data.error || 'Upload failed')
        }
        const data = await res.json() as { url: string }
        urls.push(data.url)
      }
      setUploadedUrls(urls)
    } catch (err) {
      toast({
        title: 'Upload failed',
        description: err instanceof Error ? err.message : 'Please try again',
        variant: 'destructive',
      })
      setUploading(false)
      return
    }
    setUploading(false)

    // Analyse
    setAnalysing(true)
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: urls, name: name.trim() }),
      })
      if (res.status === 402) {
        const data = await res.json() as { error: string }
        toast({ title: 'Limit reached', description: data.error, variant: 'destructive' })
        setAnalysing(false)
        return
      }
      if (!res.ok) throw new Error('Analysis failed')
      const data = await res.json() as AnalysisResult
      setResult(data)
      setEditedPrompt(data.prompt)
      toast({ title: 'Analysis complete!' })
    } catch {
      toast({ title: 'Analysis failed', description: 'Please try again', variant: 'destructive' })
    } finally {
      setAnalysing(false)
    }
  }

  async function handleSave() {
    if (!result) return
    setSaving(true)
    try {
      const res = await fetch(`/api/prompts/${result.promptId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generated_prompt: editedPrompt }),
      })
      if (res.ok) {
        toast({ title: 'Prompt saved' })
        router.push(`/dashboard/prompts/${result.promptId}`)
      }
    } catch {
      toast({ title: 'Failed to save', variant: 'destructive' })
    } finally {
      setSaving(false)
    }
  }

  function handleExport(format: string) {
    if (!result?.styles) return
    let formatted: string
    switch (format) {
      case 'stitch': formatted = formatForStitch(editedPrompt, result.styles); break
      case 'cursor': formatted = formatForCursor(editedPrompt, result.styles); break
      case 'anima': formatted = formatForAnima(editedPrompt, result.styles); break
      default: formatted = formatGeneric(editedPrompt, result.styles)
    }
    navigator.clipboard.writeText(formatted)
    toast({ title: `Copied ${format} format to clipboard` })
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">New Prompt</h1>

      {/* Step 1: Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Step 1: Upload Design Screenshots</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            {...getRootProps()}
            className={`flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colours ${
              isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
            } ${files.length >= 3 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <input {...getInputProps()} aria-label="Upload design images" />
            <Upload className="mb-2 h-8 w-8 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              {isDragActive ? 'Drop your images here' : 'Drag & drop images, or click to browse'}
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPEG, WEBP · Max 3 images, 10MB each</p>
          </div>

          {files.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {files.map((f, i) => (
                <div key={i} className="relative overflow-hidden rounded-lg border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.preview} alt={`Upload preview ${i + 1}`} className="h-24 w-full object-cover" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute right-1 top-1 h-6 w-6 min-h-0"
                    onClick={() => removeFile(i)}
                    aria-label={`Remove image ${i + 1}`}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Step 2: Name */}
      <Card>
        <CardHeader>
          <CardTitle>Step 2: Name Your Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="promptName">Prompt name</Label>
            <Input
              id="promptName"
              placeholder="e.g. Homepage hero section"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-h-[44px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Analyse */}
      {!result && (
        <Button
          onClick={handleUploadAndAnalyse}
          disabled={uploading || analysing || files.length === 0 || !name.trim()}
          className="w-full min-h-[44px]"
          size="lg"
        >
          {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {analysing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {uploading ? 'Uploading...' : analysing ? 'Analysing your design...' : 'Analyse Design'}
        </Button>
      )}

      {/* Step 4: Results */}
      {result && (
        <>
          {/* Colour palette */}
          {result.styles.colours?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Colour Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {result.styles.colours.map((c, i) => (
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
              </CardContent>
            </Card>
          )}

          {/* Typography */}
          {result.styles.typography?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.styles.typography.map((t, i) => (
                    <Badge key={i} variant="secondary">
                      {t.font} · {t.size} · {t.weight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Spacing */}
          {result.styles.spacing?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Spacing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.styles.spacing.map((s, i) => (
                    <Badge key={i} variant="outline">
                      {s.usage}: {s.value}
                    </Badge>
                  ))}
                </div>
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
                <Save className="mr-2 h-4 w-4" />
                Save Prompt
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
