import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "PromptLens — Turn Design Screenshots into AI-Ready Prompts for Stitch, Cursor & Anima",
  description:
    "Upload a design screenshot and instantly get precise AI prompts with extracted colours, typography, spacing, and layout. Works with Google Stitch, Cursor, Anima, and more. Free to start — no credit card required.",
  alternates: {
    canonical: "https://promptlens.app",
  },
  openGraph: {
    title: "PromptLens — Turn Design Screenshots into AI-Ready Prompts",
    description: "Upload design screenshots → AI extracts colours, fonts, spacing → Copy prompts for Stitch, Cursor, Anima. Free to start.",
    url: "https://promptlens.app",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PromptLens",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  description: "Upload design screenshots and get AI-ready prompts for Google Stitch, Cursor, Anima, and other AI design tools. Extracts colours, typography, spacing, borders, shadows, and layout patterns.",
  url: "https://promptlens.app",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "GBP",
      description: "3 AI design prompts per month",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "7.00",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "7.00",
        priceCurrency: "GBP",
        billingDuration: "P1M",
      },
      description: "Unlimited AI design prompts",
    },
  ],
  featureList: [
    "Colour palette extraction with hex codes",
    "Typography detection (fonts, sizes, weights)",
    "Spacing and layout pattern analysis",
    "Export prompts for Google Stitch",
    "Export prompts for Cursor AI",
    "Export prompts for Anima",
    "Claude Vision AI-powered analysis",
    "Save and organise prompt library",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PromptLens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PromptLens is an AI-powered tool that turns design screenshots into precise, tool-specific prompts for AI design tools like Google Stitch, Cursor, and Anima. Upload a screenshot, and it extracts colours, typography, spacing, borders, shadows, and layout patterns automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How does PromptLens extract styles from screenshots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PromptLens uses Claude Vision AI to analyse your design screenshots. It identifies colour palettes (with hex codes), typography (font families, sizes, weights), spacing values, border styles, shadow definitions, and layout patterns like flexbox or grid structures.",
      },
    },
    {
      "@type": "Question",
      name: "What AI design tools does PromptLens support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PromptLens generates optimised prompts for Google Stitch, Cursor AI, Anima, and a generic plain text format that works with any AI design or coding tool. Each export is tailored to the specific tool's syntax and preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Is PromptLens free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The free plan includes 3 AI design prompts per month with all export formats. The Pro plan at £7/month gives you unlimited prompts. No credit card required to start.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats does PromptLens accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PromptLens accepts PNG, JPEG, and WEBP images up to 10MB each. You can upload up to 3 screenshots per prompt. Works great with Figma exports, browser screenshots, mockup tools, or even photos of whiteboard sketches.",
      },
    },
  ],
}

export default function LandingPage() {
  return (
    <>
      <Script
        id="jsonld-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="font-sans">
        {/* Nav */}
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Main navigation">
            <Link href="/" className="text-xl font-bold text-blue-600">
              PromptLens
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/explore" className="inline-flex min-h-[44px] items-center rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-100">
                Explore Prompts
              </Link>
              <Link href="/login" className="inline-flex min-h-[44px] items-center rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-100">
                Sign In
              </Link>
              <Link href="/signup" className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700">
                Get Started Free
              </Link>
            </div>
          </nav>
        </header>

        <main>
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
                Turn design screenshots into precise, tool-specific prompts for{' '}
                <strong className="text-white">Google Stitch</strong>,{' '}
                <strong className="text-white">Cursor</strong>,{' '}
                <strong className="text-white">Anima</strong>, and more.
                Extract colours, typography, spacing, and layout in seconds.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/signup" className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700">
                  Start Free — No Credit Card
                </Link>
                <Link href="#how-it-works" className="inline-flex min-h-[44px] items-center rounded-lg border border-white/20 px-8 py-3 text-lg font-medium text-white hover:bg-white/10">
                  See How It Works
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                3 free prompts per month. Upgrade to Pro for unlimited.
              </p>
            </div>
          </section>

          {/* Social Proof / Use Cases */}
          <section className="border-b bg-slate-50 px-4 py-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Works with the tools you already use</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-lg font-semibold text-slate-400">
                <span>Google Stitch</span>
                <span aria-hidden="true">·</span>
                <span>Cursor AI</span>
                <span aria-hidden="true">·</span>
                <span>Anima</span>
                <span aria-hidden="true">·</span>
                <span>Any AI Tool</span>
              </div>
            </div>
          </section>

          {/* Problem / Solution */}
          <section className="bg-white px-4 py-20">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">The Problem</h2>
                  <p className="text-slate-600">
                    You describe a design to an AI tool: <em>&quot;Make it look like Stripe.&quot;</em> The result?
                    Wrong colours, wrong fonts, wrong spacing. Vague prompts produce vague results.
                  </p>
                  <div className="mt-4 rounded-lg bg-red-50 p-4 font-mono text-sm text-red-700">
                    &quot;Make a card with a modern look, similar to Stripe&quot;
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">The PromptLens Fix</h2>
                  <p className="text-slate-600">
                    Upload a screenshot. PromptLens extracts the exact design tokens — hex colours,
                    font sizes, border radii, shadow values — and generates a prompt your AI tool
                    can actually use.
                  </p>
                  <div className="mt-4 rounded-lg bg-green-50 p-4 font-mono text-sm text-green-700">
                    &quot;White card (#FFFFFF), 8px radius, shadow 0 4px 6px rgba(0,0,0,0.1), Inter 16px medium, 24px padding, bg #F6F9FC&quot;
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="bg-slate-50 px-4 py-20">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">How It Works</h2>
              <p className="mb-12 text-center text-slate-600">Three steps. Under 30 seconds. No design skills required.</p>
              <div className="grid gap-8 md:grid-cols-3">
                <article className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600" aria-hidden="true">1</div>
                  <h3 className="mb-2 text-lg font-semibold">Upload Your Design</h3>
                  <p className="text-sm text-slate-600">
                    Drop any design screenshot — Figma exports, browser captures, mockups, even whiteboard photos. PNG, JPEG, or WEBP up to 10MB.
                  </p>
                </article>
                <article className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600" aria-hidden="true">2</div>
                  <h3 className="mb-2 text-lg font-semibold">AI Extracts Style DNA</h3>
                  <p className="text-sm text-slate-600">
                    Claude Vision analyses your design and extracts the colour palette, typography, spacing, borders, shadows, and layout patterns — all with exact CSS values.
                  </p>
                </article>
                <article className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600" aria-hidden="true">3</div>
                  <h3 className="mb-2 text-lg font-semibold">Copy Your Prompt</h3>
                  <p className="text-sm text-slate-600">
                    Get a prompt optimised for your tool — Google Stitch, Cursor, Anima, or generic. One click to copy. Edit before exporting if you want.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Features detail */}
          <section className="bg-white px-4 py-20">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">What PromptLens Extracts</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Colour Palette", desc: "Every colour identified with hex codes, names, and usage context (primary, background, accent)." },
                  { title: "Typography", desc: "Font families, sizes, weights, and line heights — mapped to heading, body, and label roles." },
                  { title: "Spacing & Layout", desc: "Padding, margins, gaps, and grid/flexbox patterns with exact pixel values." },
                  { title: "Borders & Radius", desc: "Border widths, colours, and corner radii for cards, buttons, and inputs." },
                  { title: "Shadows", desc: "Box shadows in CSS format — offset, blur, spread, and colour for depth layers." },
                  { title: "Component Patterns", desc: "Cards, navigation, forms, and layout structures identified and described." },
                ].map((feature) => (
                  <article key={feature.title} className="rounded-xl border p-6">
                    <h3 className="mb-2 font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="bg-slate-50 px-4 py-20">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
              <p className="mb-12 text-center text-slate-600">Start free. Upgrade when you need more.</p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border bg-white p-8">
                  <h3 className="text-lg font-semibold">Free</h3>
                  <div className="my-4"><span className="text-4xl font-bold">£0</span><span className="text-slate-600">/month</span></div>
                  <ul className="mb-8 space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> 3 design prompts per month</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> All export formats (Stitch, Cursor, Anima)</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> Colour, typography &amp; spacing extraction</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> Save prompts to your library</li>
                  </ul>
                  <Link href="/signup" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-slate-300 px-4 text-sm font-medium hover:bg-slate-50">
                    Get Started Free
                  </Link>
                </div>
                <div className="relative rounded-xl border-2 border-blue-600 bg-white p-8">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">Most Popular</div>
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <div className="my-4"><span className="text-4xl font-bold">£7</span><span className="text-slate-600">/month</span></div>
                  <ul className="mb-8 space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> <strong>Unlimited</strong> design prompts</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> All export formats (Stitch, Cursor, Anima)</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> Priority AI analysis</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> Public prompt sharing</li>
                    <li className="flex items-center gap-2"><span className="text-green-500" aria-hidden="true">✓</span> Email support</li>
                  </ul>
                  <Link href="/signup" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700">
                    Start Pro — Cancel Anytime
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
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    What is PromptLens and who is it for?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    PromptLens is a visual prompt engineering tool for designers, developers, and anyone using AI design tools. Upload a design screenshot — from Figma, a website, or even a whiteboard photo — and PromptLens uses AI to extract the exact styles and generate a prompt you can paste into tools like Google Stitch, Cursor, or Anima.
                  </p>
                </details>
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    How does the AI design analysis work?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    PromptLens uses Claude Vision AI to analyse your screenshots pixel by pixel. It identifies colour palettes (with hex codes), typography (font families, sizes, weights), spacing values, border styles, shadow definitions, and layout patterns like flexbox or grid structures. The analysis typically takes 10-15 seconds.
                  </p>
                </details>
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    What AI design tools does PromptLens work with?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    PromptLens generates optimised prompts for Google Stitch, Cursor AI, Anima, and a generic format that works with any AI coding or design tool. Each export format is tailored to the tool&apos;s specific syntax and preferences for the best results.
                  </p>
                </details>
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    What image formats and sizes are supported?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    PNG, JPEG, and WEBP images up to 10MB each. You can upload up to 3 screenshots per prompt. Higher resolution images produce more accurate style extraction.
                  </p>
                </details>
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    Is PromptLens free?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Yes — the free plan gives you 3 AI design prompts per month with all export formats included. No credit card required. The Pro plan at £7/month unlocks unlimited prompts and priority analysis. Cancel anytime.
                  </p>
                </details>
                <details className="group rounded-lg border p-4">
                  <summary className="flex min-h-[44px] cursor-pointer items-center text-lg font-medium">
                    Is my design data secure?
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Absolutely. Your uploads are stored securely in encrypted cloud storage and are only accessible to you. We never share, sell, or use your designs for training. You can delete your data at any time. See our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> for details.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 text-center text-white">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold">Ready to get perfect AI prompts?</h2>
              <p className="mb-8 text-lg text-blue-100">
                Join designers and developers who use PromptLens to turn screenshots into pixel-perfect AI prompts.
              </p>
              <Link href="/signup" className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50">
                Start Free — 3 Prompts/Month
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-slate-900 px-4 py-12 text-slate-400">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-lg font-bold text-white">PromptLens</h3>
                <p className="text-sm">Turn design screenshots into AI-ready prompts for Google Stitch, Cursor, Anima, and more.</p>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                  <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link href="/explore" className="hover:text-white">Explore Prompts</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Account</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/signup" className="hover:text-white">Sign Up Free</Link></li>
                  <li><Link href="/login" className="hover:text-white">Sign In</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/support" className="hover:text-white">Support</Link></li>
                  <li><a href="mailto:hello@promptlens.app" className="hover:text-white">hello@promptlens.app</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} PromptLens. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
