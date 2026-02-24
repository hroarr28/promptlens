'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/hooks/use-toast'
import { CreditCard, Zap, Loader2 } from 'lucide-react'

interface Profile {
  subscription_tier: string
  monthly_prompt_count: number
  monthly_prompt_limit: number
}

export default function BillingPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [upgrading, setUpgrading] = useState(false)
  const [managingBilling, setManagingBilling] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/prompts?limit=0')
        if (res.ok) {
          const data = await res.json() as { profile: Profile }
          setProfile(data.profile)
        }
      } catch {
        setProfile({ subscription_tier: 'free', monthly_prompt_count: 0, monthly_prompt_limit: 3 })
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  async function handleUpgrade() {
    setUpgrading(true)
    try {
      const res = await fetch('/api/stripe/checkout', { method: 'POST' })
      const data = await res.json() as { url?: string; error?: string }
      if (data.url) {
        window.location.href = data.url
      } else {
        toast({ title: 'Upgrade unavailable', description: data.error || 'Stripe is not configured yet.', variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Something went wrong', variant: 'destructive' })
    } finally {
      setUpgrading(false)
    }
  }

  async function handleManageBilling() {
    setManagingBilling(true)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json() as { url?: string; error?: string }
      if (data.url) {
        window.location.href = data.url
      } else {
        toast({ title: 'Billing portal unavailable', description: data.error || 'Stripe is not configured yet.', variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Something went wrong', variant: 'destructive' })
    } finally {
      setManagingBilling(false)
    }
  }

  const isPro = profile?.subscription_tier === 'pro'
  const used = profile?.monthly_prompt_count ?? 0
  const limit = profile?.monthly_prompt_limit ?? 3
  const percentage = isPro ? 0 : Math.round((used / limit) * 100)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Billing</h1>

      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      ) : (
        <>
          {/* Current plan */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Current Plan
                    <Badge variant={isPro ? 'default' : 'secondary'}>
                      {isPro ? 'Pro' : 'Free'}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {isPro ? 'Unlimited prompts per month' : '3 prompts per month'}
                  </CardDescription>
                </div>
                <CreditCard className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isPro && (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Usage this month</span>
                      <span>{used}/{limit} prompts</span>
                    </div>
                    <Progress value={percentage} aria-label={`${used} of ${limit} prompts used`} />
                  </div>
                  <Button onClick={handleUpgrade} disabled={upgrading} className="min-h-[44px]">
                    {upgrading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    <Zap className="mr-2 h-4 w-4" />
                    Upgrade to Pro — £7/month
                  </Button>
                </>
              )}
              {isPro && (
                <Button variant="outline" onClick={handleManageBilling} disabled={managingBilling} className="min-h-[44px]">
                  {managingBilling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Manage Subscription
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Pro features */}
          {!isPro && (
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan — £7/month</CardTitle>
                <CardDescription>Everything you need for professional design-to-prompt workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    Unlimited prompts per month
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    Priority AI analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    All export formats (Stitch, Cursor, Anima)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    Email support
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
