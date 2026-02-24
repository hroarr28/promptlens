'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, Zap, FileText, Upload, Palette, ClipboardCopy } from 'lucide-react'
import { format } from 'date-fns'

interface Profile {
  monthly_prompt_count: number
  monthly_prompt_limit: number
  subscription_tier: string
}

interface Prompt {
  id: string
  name: string
  export_format: string
  created_at: string
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileRes, promptsRes] = await Promise.all([
          fetch('/api/prompts?limit=0'),
          fetch('/api/prompts?limit=5'),
        ])
        if (promptsRes.ok) {
          const data = await promptsRes.json() as { prompts: Prompt[]; profile: Profile }
          setPrompts(data.prompts || [])
          setProfile(data.profile || null)
        }
        if (profileRes.ok && !profile) {
          const data = await profileRes.json() as { profile: Profile }
          if (data.profile) setProfile(data.profile)
        }
      } catch {
        // Graceful fallback for placeholder credentials
        setProfile({ monthly_prompt_count: 0, monthly_prompt_limit: 3, subscription_tier: 'free' })
        setPrompts([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const used = profile?.monthly_prompt_count ?? 0
  const limit = profile?.monthly_prompt_limit ?? 3
  const remaining = Math.max(0, limit - used)
  const isPro = profile?.subscription_tier === 'pro'

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
        <Skeleton className="h-64" />
      </div>
    )
  }

  // First-run onboarding
  if (prompts.length === 0 && !loading) {
    return (
      <div className="space-y-6">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-bold text-slate-900">Welcome to PromptLens!</h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Turn design screenshots into perfect AI prompts in three easy steps.
              </p>

              <div className="mx-auto mb-8 grid max-w-2xl gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Upload className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">1. Upload</p>
                    <p className="text-sm text-muted-foreground">Upload a design screenshot</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Palette className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">2. AI Extracts</p>
                    <p className="text-sm text-muted-foreground">Colours, typography &amp; spacing</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl border bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ClipboardCopy className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">3. Export</p>
                    <p className="text-sm text-muted-foreground">Copy tool-specific prompts</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="min-h-[44px] px-8 text-lg">
                <Link href="/dashboard/new">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create Your First Prompt →
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sample output preview */}
        <Card>
          <CardHeader>
            <CardTitle>What you&apos;ll get</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-slate-50 p-4 font-mono text-sm text-slate-700">
              <p className="text-muted-foreground"># Extracted Design Tokens</p>
              <p className="mt-1">
                <span className="inline-block h-3 w-3 rounded-full mr-1" style={{ backgroundColor: '#3B82F6' }} />
                Primary: <span className="text-blue-600">#3B82F6</span>
              </p>
              <p>
                <span className="inline-block h-3 w-3 rounded-full mr-1" style={{ backgroundColor: '#1E293B' }} />
                Text: <span className="text-slate-800">#1E293B</span>
              </p>
              <p className="mt-2 text-muted-foreground"># Typography</p>
              <p>Heading: Inter, 32px, Bold</p>
              <p>Body: Inter, 16px, Regular</p>
              <p className="mt-2 text-muted-foreground">...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button asChild className="min-h-[44px]">
          <Link href="/dashboard/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Prompt
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Prompts This Month</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {used}{isPro ? '' : `/${limit}`}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Prompts Remaining</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isPro ? '∞' : remaining}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent prompts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Prompts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {prompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/dashboard/prompts/${prompt.id}`}
                className="flex items-center justify-between rounded-lg border p-3 min-h-[44px] transition-colours hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium">{prompt.name}</span>
                  <Badge variant="secondary">{prompt.export_format}</Badge>
                </div>
                <span className="text-sm text-muted-foreground">
                  {format(new Date(prompt.created_at), 'd MMM yyyy')}
                </span>
              </Link>
            ))}
            <div className="pt-2 text-center">
              <Button variant="ghost" asChild className="min-h-[44px]">
                <Link href="/dashboard/prompts">View all prompts</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
