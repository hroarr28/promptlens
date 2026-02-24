'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Search, FileText } from 'lucide-react'

interface PublicPrompt {
  id: string
  name: string
  images: string[]
  export_format: string
  created_at: string
}

export default function ExplorePage() {
  const [prompts, setPrompts] = useState<PublicPrompt[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchPublicPrompts() {
      setLoading(true)
      try {
        const res = await fetch(
          `/api/prompts/public?search=${encodeURIComponent(search)}&page=${page}&limit=20`
        )
        if (res.ok) {
          const data = await res.json() as { prompts: PublicPrompt[]; total: number }
          setPrompts(data.prompts || [])
          setTotal(data.total || 0)
        }
      } catch {
        setPrompts([])
      } finally {
        setLoading(false)
      }
    }
    fetchPublicPrompts()
  }, [search, page])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-slate-900">Explore Public Prompts</h1>
          <Button asChild variant="outline" className="min-h-[44px]">
            <Link href="/">← Home</Link>
          </Button>
        </div>
        <p className="text-muted-foreground mb-6">
          Browse prompts shared by the community. Copy them or sign up to create your own.
        </p>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            placeholder="Search public prompts..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="min-h-[44px] pl-9"
            aria-label="Search public prompts"
          />
        </div>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <Skeleton className="mb-3 h-32 w-full rounded" />
                <Skeleton className="mb-2 h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : prompts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <div>
              <p className="text-lg font-medium">No public prompts yet</p>
              <p className="text-sm text-muted-foreground">
                Be the first to share a prompt with the community!
              </p>
            </div>
            <Button asChild className="min-h-[44px]">
              <Link href="/signup">Sign up to create one</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prompts.map((prompt) => (
              <Link key={prompt.id} href={`/explore/${prompt.id}`}>
                <Card className="min-h-[44px] cursor-pointer transition-shadow hover:shadow-md">
                  <CardContent className="p-4">
                    {prompt.images?.[0] && (
                      <div className="mb-3 overflow-hidden rounded bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prompt.images[0]}
                          alt={`Thumbnail for ${prompt.name}`}
                          className="h-32 w-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-medium">{prompt.name}</h3>
                    <div className="mt-2">
                      <Badge variant="secondary">{prompt.export_format}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {total > 20 && (
            <div className="mt-8 flex justify-center gap-2">
              <Button
                variant="outline"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="min-h-[44px]"
                aria-label="Previous page"
              >
                Previous
              </Button>
              <span className="flex items-center px-4 text-sm text-muted-foreground">
                Page {page} of {Math.ceil(total / 20)}
              </span>
              <Button
                variant="outline"
                disabled={page * 20 >= total}
                onClick={() => setPage((p) => p + 1)}
                className="min-h-[44px]"
                aria-label="Next page"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
