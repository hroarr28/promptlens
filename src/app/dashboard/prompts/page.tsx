'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PlusCircle, FileText, Search } from 'lucide-react'
import { format } from 'date-fns'

interface Prompt {
  id: string
  name: string
  export_format: string
  created_at: string
  images: string[]
}

export default function PromptsPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    async function fetchPrompts() {
      try {
        const res = await fetch(`/api/prompts?search=${encodeURIComponent(search)}&sort=${sort}`)
        if (res.ok) {
          const data = await res.json() as { prompts: Prompt[] }
          setPrompts(data.prompts || [])
        }
      } catch {
        setPrompts([])
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    fetchPrompts()
  }, [search, sort])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Prompts</h1>
        <Button asChild className="min-h-[44px]">
          <Link href="/dashboard/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Prompt
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            placeholder="Search prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-[44px] pl-9"
            aria-label="Search prompts"
          />
        </div>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="min-h-[44px] w-full sm:w-48" aria-label="Sort prompts">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
            <SelectItem value="name">Name (A-Z)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Prompts grid */}
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
              <p className="text-lg font-medium">No prompts yet</p>
              <p className="text-sm text-muted-foreground">Create your first one!</p>
            </div>
            <Button asChild className="min-h-[44px]">
              <Link href="/dashboard/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Your First Prompt
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt) => (
            <Link key={prompt.id} href={`/dashboard/prompts/${prompt.id}`}>
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
                  <div className="mt-2 flex items-center justify-between">
                    <Badge variant="secondary">{prompt.export_format}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(prompt.created_at), 'd MMM yyyy')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
