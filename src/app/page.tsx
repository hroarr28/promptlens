import Link from 'next/link'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function LandingPage() {
  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      {/* Nav */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            ShowDontTell
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex min-h-[44px] items-center rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-4 py-20 text-white md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Upload designs.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get perfect AI prompts.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            ShowDontTell analyses your design screenshots and generates precise, tool-specific prompts
            for Stitch, Cursor, Anima, and more. Stop describing — start showing.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
            >
              Start Free — 3 Prompts/Month
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-white/20 px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
        {/* Demo area */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-3xl">📸</div>
                <p className="text-sm text-slate-300">Upload your design screenshot</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-3xl">🤖</div>
                <p className="text-sm text-slate-300">AI extracts colours, typography, spacing</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 text-center">
                <div className="mb-2 text-3xl">📋</div>
                <p className="text-sm text-slate-300">Copy tool-specific prompts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold">Upload</h3>
              <p className="text-sm text-slate-600">
                Drop your design screenshots — mockups, Figma exports, or even photos of whiteboard sketches.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold">AI Extracts</h3>
              <p className="text-sm text-slate-600">
                Claude Vision analyses your design and extracts colours, typography, spacing, borders, shadows, and layout patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold">Copy Prompt</h3>
              <p className="text-sm text-slate-600">
                Get prompts optimised for your tool of choice — Google Stitch, Cursor, Anima, or generic format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Simple Pricing</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Free */}
            <div className="rounded-xl border bg-white p-8">
              <h3 className="text-lg font-semibold">Free</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">£0</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 3 prompts per month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> All export formats
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Colour, typography & spacing extraction
                </li>
              </ul>
              <Link
                href="/signup"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-slate-300 px-4 text-sm font-medium hover:bg-slate-50"
              >
                Get Started
              </Link>
            </div>
            {/* Pro */}
            <div className="relative rounded-xl border-2 border-blue-600 bg-white p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold">Pro</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">£7</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Unlimited prompts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> All export formats
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Priority AI analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Email support
                </li>
              </ul>
              <Link
                href="/signup"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
              >
                Start Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-lg font-medium min-h-[44px] flex items-center">
                What image formats are supported?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                PNG, JPEG, and WEBP. You can upload up to 3 images per prompt, each up to 10MB. Works great with Figma exports, mockup screenshots, or even photos of sketches.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-lg font-medium min-h-[44px] flex items-center">
                How accurate is the style extraction?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                ShowDontTell uses Claude Vision to analyse your designs. It extracts colours (with hex codes), typography (fonts, sizes, weights), spacing values, borders, shadows, and layout patterns with high accuracy. You can always edit the generated prompt before exporting.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-lg font-medium min-h-[44px] flex items-center">
                What tools can I export prompts for?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Currently supported: Google Stitch, Cursor, Anima, and a generic plain text format. Each export is optimised for the specific tool&apos;s syntax and preferences.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-lg font-medium min-h-[44px] flex items-center">
                Can I cancel my Pro subscription?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes, you can cancel anytime from your billing page. You&apos;ll keep Pro access until the end of your current billing period. No lock-in, no hassle.
              </p>
            </details>
            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-lg font-medium min-h-[44px] flex items-center">
                Is my data secure?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Your uploads are stored securely and are only accessible to you. We don&apos;t share your designs or prompts with anyone. See our Privacy Policy for full details.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 px-4 py-12 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">ShowDontTell</h3>
              <p className="text-sm">Upload designs. Get perfect AI prompts.</p>
            </div>
            <div>
              <h4 className="mb-4 font-medium text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/signup" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-medium text-white">Account</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/login" className="hover:text-white">Sign In</Link></li>
                <li><Link href="/signup" className="hover:text-white">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-medium text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} ShowDontTell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
