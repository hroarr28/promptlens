'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, Zap, FileText } from 'lucide-react'
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
            {loading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {used}{isPro ? '' : `/${limit}`}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Prompts Remaining</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {isPro ? '∞' : remaining}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent prompts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Prompts</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : prompts.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <FileText className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="text-lg font-medium">No prompts yet</p>
                <p className="text-sm text-muted-foreground">
                  Upload a design screenshot to generate your first AI prompt.
                </p>
              </div>
              <Button asChild className="min-h-[44px]">
                <Link href="/dashboard/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Your First Prompt
                </Link>
              </Button>
            </div>
          ) : (
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
              {prompts.length > 0 && (
                <div className="pt-2 text-center">
                  <Button variant="ghost" asChild className="min-h-[44px]">
                    <Link href="/dashboard/prompts">View all prompts</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
