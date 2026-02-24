import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support',
}

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">Need help?</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Contact Us</h2>
          <p className="text-slate-600">
            Email us at{' '}
            <a
              href="mailto:hello@promptlens.app"
              className="text-blue-600 hover:underline"
            >
              hello@promptlens.app
            </a>{' '}
            and we&apos;ll get back to you as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="rounded-lg border p-4">
              <summary className="min-h-[44px] flex items-center cursor-pointer font-medium">
                What image formats are supported?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                PNG, JPEG, and WEBP. Up to 3 images per prompt, 10MB each.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="min-h-[44px] flex items-center cursor-pointer font-medium">
                How do I export my prompt?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                After analysis, use the Export dropdown to copy your prompt in Stitch, Cursor, Anima, or generic format.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="min-h-[44px] flex items-center cursor-pointer font-medium">
                Can I edit prompts after generation?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes! You can edit the generated prompt text directly and save your changes.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">Report a Bug</h2>
          <p className="text-slate-600">
            Found something broken? Email{' '}
            <a
              href="mailto:hello@promptlens.app?subject=Bug%20Report"
              className="text-blue-600 hover:underline"
            >
              hello@promptlens.app
            </a>{' '}
            with a description of what happened and we&apos;ll investigate.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t pt-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
