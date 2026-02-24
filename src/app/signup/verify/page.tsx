'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Mail } from 'lucide-react'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const [resending, setResending] = useState(false)
  const { toast } = useToast()

  async function handleResend() {
    if (!email) {
      toast({ title: 'No email address found', variant: 'destructive' })
      return
    }
    setResending(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        toast({ title: 'Failed to resend', description: error.message, variant: 'destructive' })
      } else {
        toast({ title: 'Verification email resent', description: 'Check your inbox.' })
      }
    } catch {
      toast({ title: 'Something went wrong', variant: 'destructive' })
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Mail className="h-8 w-8 text-blue-600" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We&apos;ve sent a verification link to{' '}
            {email ? <strong>{email}</strong> : 'your email address'}.
          </p>
          <p className="text-sm text-muted-foreground">
            Click the link in the email to verify your account and get started.
          </p>
          <div className="pt-2">
            <p className="mb-2 text-sm text-muted-foreground">Didn&apos;t receive it?</p>
            <Button
              variant="outline"
              onClick={handleResend}
              disabled={resending || !email}
              className="min-h-[44px]"
              aria-label="Resend verification email"
            >
              {resending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Resend Verification Email
            </Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            Back to sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  )
}
