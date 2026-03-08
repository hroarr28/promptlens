import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design-to-Code Prompt Engineering: Complete Guide (2026) | PromptLens',
  description: 'Master the art of writing effective prompts for AI code generators. Learn techniques that produce clean, production-ready code from design screenshots.',
  openGraph: {
    title: 'Prompt Engineering for Design-to-Code - Complete Guide',
    description: 'Write better prompts, get better code. Master techniques for AI code generation.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    authors: ['SwiftLabs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design-to-Code Prompt Engineering Guide',
    description: 'Techniques for clean, production-ready AI-generated code.',
  },
  alternates: {
    canonical: 'https://promptlens.swiftlabs.dev/blog/prompt-engineering-design-to-code',
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold text-slate-900">
              PromptLens
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900">
                Blog
              </Link>
              <Link
                href="/"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="mb-8 flex items-center gap-3 text-sm text-slate-600">
            <time dateTime="2026-03-08">8 March 2026</time>
            <span>•</span>
            <span>12 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Design-to-Code Prompt Engineering: Complete Guide
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            The difference between messy AI-generated code and production-ready code is your prompt. Here's how to write prompts that produce clean, maintainable, accessible code every time.
          </p>

          {/* Content */}
          <div className="prose prose-slate mt-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Why Prompt Quality Matters</h2>
            <p className="text-lg text-slate-700">
              AI code generation tools are powerful but literal. Give them a vague instruction like <em>"convert this to code"</em> and you'll get generic output. Give them a detailed, structured prompt and you'll get production-ready components.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
              <p className="text-lg font-medium text-red-900">
                <strong>Bad prompt:</strong> "Convert this design to React"
              </p>
              <p className="mt-2 text-sm text-red-800">
                <strong>Result:</strong> Generic code with hardcoded values, no TypeScript types, missing responsive design, poor accessibility.
              </p>
            </div>

            <div className="my-8 rounded-lg border-l-4 border-green-600 bg-green-50 p-6">
              <p className="text-lg font-medium text-green-900">
                <strong>Good prompt:</strong> "Convert this hero section to React + TypeScript + Tailwind CSS. Use semantic HTML5 tags, mobile-first responsive design with breakpoint at 768px, ARIA labels for accessibility, and export as a reusable Hero.tsx component."
              </p>
              <p className="mt-2 text-sm text-green-800">
                <strong>Result:</strong> Clean, typed, accessible, responsive code ready for production.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">The Anatomy of a Perfect Prompt</h2>
            <p className="text-lg text-slate-700">
              Every effective design-to-code prompt has 7 key sections:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">1. Framework & Language</h3>
            <p className="text-lg text-slate-700">
              Specify the exact framework, version, and language. Don't assume.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: "Use React"</p>
                <p className="mt-1 text-sm text-slate-600">Too vague. Which React? Create React App? Next.js? Vite?</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Next.js 14 app router + TypeScript"</p>
                <p className="mt-1 text-sm text-slate-600">Exact framework, version, and language.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">2. Styling Approach</h3>
            <p className="text-lg text-slate-700">
              AI can output Tailwind, styled-components, CSS modules, or inline styles. Pick one.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: "Style it nicely"</p>
                <p className="mt-1 text-sm text-slate-600">AI will guess. You might get inline styles or random CSS.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Tailwind CSS utility classes only. No custom CSS."</p>
                <p className="mt-1 text-sm text-slate-600">Clear styling constraint.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">3. Component Structure</h3>
            <p className="text-lg text-slate-700">
              Single file vs multiple components? Specify file names and exports.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: "Break it into components"</p>
                <p className="mt-1 text-sm text-slate-600">Unclear how many components or what they should be called.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Export 4 separate components: Hero.tsx, Features.tsx, Pricing.tsx, Footer.tsx. Import them in app/page.tsx."</p>
                <p className="mt-1 text-sm text-slate-600">Exact file structure and naming.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">4. Responsive Behavior</h3>
            <p className="text-lg text-slate-700">
              Define breakpoints and how layout changes at different screen sizes.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: "Make it responsive"</p>
                <p className="mt-1 text-sm text-slate-600">No breakpoints, no mobile/desktop behavior specified.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Mobile-first. Stack vertically on &lt;768px. 3-column grid on ≥768px. Use Tailwind's md: breakpoint."</p>
                <p className="mt-1 text-sm text-slate-600">Clear responsive rules and breakpoint values.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">5. Accessibility Requirements</h3>
            <p className="text-lg text-slate-700">
              AI often skips ARIA labels and semantic HTML. Explicitly request them.
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: (no mention of accessibility)</p>
                <p className="mt-1 text-sm text-slate-600">AI generates divs everywhere, no alt text, no ARIA.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Use semantic HTML5 (header, section, article). Add ARIA labels to buttons. Alt text on all images."</p>
                <p className="mt-1 text-sm text-slate-600">Specific accessibility requirements.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">6. Interactivity & State</h3>
            <p className="text-lg text-slate-700">
              Describe how users interact with the UI. Hover effects? Click handlers?
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: (no interactivity mentioned)</p>
                <p className="mt-1 text-sm text-slate-600">AI generates static UI with no event handlers.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Hover effect on cards (shadow + scale). CTA button navigates to /pricing on click."</p>
                <p className="mt-1 text-sm text-slate-600">Specific interactions defined.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">7. Data & Content</h3>
            <p className="text-lg text-slate-700">
              Hardcoded content vs props? Static vs dynamic?
            </p>

            <div className="my-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-red-600">❌ Bad: (no content instructions)</p>
                <p className="mt-1 text-sm text-slate-600">AI uses "Lorem ipsum" placeholder text everywhere.</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-green-600">✅ Good: "Accept title, description, buttonText as props. Use TypeScript interface for prop types."</p>
                <p className="mt-1 text-sm text-slate-600">Reusable component with typed props.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Complete Prompt Template</h2>
            <p className="text-lg text-slate-700">
              Here's a production-ready prompt template. Fill in the [BRACKETS]:
            </p>

            <div className="my-8 rounded-lg bg-slate-900 p-6">
              <pre className="overflow-x-auto text-sm text-slate-100">
{`Convert this [COMPONENT NAME] to [FRAMEWORK + VERSION] + [LANGUAGE].

Structure:
- Use [ROUTING APPROACH] (app router / pages / SPA)
- [SINGLE FILE / MULTIPLE COMPONENTS with names]
- [FILE STRUCTURE if multiple components]

Styling:
- [STYLING LIBRARY] (Tailwind / styled-components / CSS modules)
- [COLOR PALETTE if specific colors needed]
- [TYPOGRAPHY if specific fonts needed]

Responsive Design:
- [MOBILE-FIRST / DESKTOP-FIRST]
- Breakpoints: [sm, md, lg values]
- [MOBILE BEHAVIOR]: [stack / hide / collapse]
- [DESKTOP BEHAVIOR]: [grid / flex / columns]

Accessibility:
- Semantic HTML5 tags ([specific tags to use])
- ARIA labels on [interactive elements]
- Alt text on [images]
- [KEYBOARD NAVIGATION if needed]

Interactivity:
- [HOVER EFFECTS description]
- [CLICK HANDLERS and what they do]
- [STATE MANAGEMENT if needed]

Data:
- [HARDCODED / PROPS / API DATA]
- [TYPESCRIPT INTERFACES if using props]

Export as: [FILE NAME(S)]`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Real Examples: Before & After</h2>

            <h3 className="text-2xl font-bold text-slate-900">Example 1: Hero Section</h3>

            <div className="my-6 space-y-6">
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                <p className="mb-3 text-sm font-semibold text-red-600">❌ BEFORE (Vague Prompt)</p>
                <pre className="overflow-x-auto text-sm text-red-900">
{`Make a hero section from this screenshot.`}
                </pre>
                <p className="mt-4 text-sm font-medium text-red-900">Result:</p>
                <ul className="mt-2 space-y-1 text-xs text-red-800">
                  <li>• Generated plain HTML, no React</li>
                  <li>• Inline styles everywhere</li>
                  <li>• Not responsive</li>
                  <li>• Lorem ipsum placeholder text</li>
                  <li>• No semantic HTML (all divs)</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                <p className="mb-3 text-sm font-semibold text-green-600">✅ AFTER (Detailed Prompt)</p>
                <pre className="overflow-x-auto text-sm text-green-900">
{`Convert this hero section to Next.js 14 + TypeScript + Tailwind CSS.

Structure:
- Use app router syntax
- Single component: components/Hero.tsx
- Accept title, subtitle, ctaText, ctaLink as props

Styling:
- Tailwind CSS utility classes only
- Gradient background: from-blue-600 to-blue-800
- White text with shadow for readability

Responsive Design:
- Mobile-first
- Single column on <768px
- 60/40 split (text left, image right) on ≥768px
- Padding: px-4 on mobile, px-8 on desktop

Accessibility:
- Use <section> for wrapper
- <h1> for title, <p> for subtitle
- <button> for CTA (not div)
- ARIA label on CTA button

Interactivity:
- Hover effect on CTA: scale + shadow
- CTA button uses Next.js Link component
- Smooth scroll to #pricing section

Data:
- TypeScript interface HeroProps with required fields
- Default export function Hero({ title, subtitle, ctaText, ctaLink })

Export as: components/Hero.tsx`}
                </pre>
                <p className="mt-4 text-sm font-medium text-green-900">Result:</p>
                <ul className="mt-2 space-y-1 text-xs text-green-800">
                  <li>• Clean Next.js component with TypeScript</li>
                  <li>• Fully responsive with mobile-first approach</li>
                  <li>• Accessible with semantic HTML and ARIA labels</li>
                  <li>• Reusable with typed props</li>
                  <li>• Production-ready in 30 seconds</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Example 2: Pricing Table</h3>

            <div className="my-6 space-y-6">
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
                <p className="mb-3 text-sm font-semibold text-red-600">❌ BEFORE</p>
                <pre className="overflow-x-auto text-sm text-red-900">
{`Convert this pricing table to code.`}
                </pre>
                <p className="mt-4 text-sm font-medium text-red-900">Result:</p>
                <ul className="mt-2 space-y-1 text-xs text-red-800">
                  <li>• HTML table tag (not modern grid layout)</li>
                  <li>• Hardcoded prices in code</li>
                  <li>• No hover effects</li>
                  <li>• Breaks on mobile (horizontal scroll)</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
                <p className="mb-3 text-sm font-semibold text-green-600">✅ AFTER</p>
                <pre className="overflow-x-auto text-sm text-green-900">
{`Convert this pricing table to React + TypeScript + Tailwind CSS.

Structure:
- components/Pricing.tsx (main component)
- components/PricingCard.tsx (single tier card)
- Accept tiers array as prop

Styling:
- Tailwind CSS grid layout (not HTML table)
- Card design: white bg, rounded corners, shadow
- Highlight middle tier: blue border + "Popular" badge

Responsive Design:
- Stack vertically on <768px
- 3-column grid on ≥768px with gap-6
- Equal height cards using grid-rows-1

Accessibility:
- Each tier as <article> tag
- Price as <span> with aria-label "29 pounds per month"
- Feature list as semantic <ul>

Interactivity:
- Hover effect: lift card (translateY) + increase shadow
- CTA buttons: outline style for free tier, solid for paid
- Click navigates to /signup?plan=[tier_name]

Data:
- TypeScript interface Tier with name, price, features[]
- Accept tiers: Tier[] as prop
- Map over tiers to render PricingCard components

Export as: 
- components/Pricing.tsx (main)
- components/PricingCard.tsx (card)`}
                </pre>
                <p className="mt-4 text-sm font-medium text-green-900">Result:</p>
                <ul className="mt-2 space-y-1 text-xs text-green-800">
                  <li>• Modern grid layout, fully responsive</li>
                  <li>• Reusable with typed tier data</li>
                  <li>• Accessible semantic markup</li>
                  <li>• Smooth hover animations</li>
                  <li>• Highlighted popular tier</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Advanced Techniques</h2>

            <h3 className="text-2xl font-bold text-slate-900">1. Chain Prompts for Complex Layouts</h3>
            <p className="text-lg text-slate-700">
              For full landing pages, break into sections. Generate Hero first, then Features, then Pricing. Each gets a focused prompt. Final prompt assembles them.
            </p>

            <div className="my-6 rounded-lg border border-slate-200 bg-white p-6">
              <p className="mb-2 text-sm font-semibold text-slate-900">Prompt 1: Hero Section</p>
              <pre className="overflow-x-auto text-xs text-slate-700">
{`Generate Hero.tsx component with [detailed specs]`}
              </pre>
              <p className="mb-2 mt-4 text-sm font-semibold text-slate-900">Prompt 2: Features Section</p>
              <pre className="overflow-x-auto text-xs text-slate-700">
{`Generate Features.tsx component with [detailed specs]`}
              </pre>
              <p className="mb-2 mt-4 text-sm font-semibold text-slate-900">Prompt 3: Final Assembly</p>
              <pre className="overflow-x-auto text-xs text-slate-700">
{`Import Hero, Features, Pricing in app/page.tsx. Stack vertically with 
section gaps. Add smooth scroll navigation.`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">2. Reference Existing Code Style</h3>
            <p className="text-lg text-slate-700">
              If you have existing components, reference them in your prompt so AI matches your code style.
            </p>

            <div className="my-6 rounded-lg border border-slate-200 bg-white p-6">
              <pre className="overflow-x-auto text-sm text-slate-700">
{`Generate a ProductCard component matching the style of this existing code:

[paste example component]

Use the same naming conventions, prop structure, and Tailwind classes.`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">3. Specify Edge Cases</h3>
            <p className="text-lg text-slate-700">
              AI handles happy paths well. Edge cases need explicit instructions.
            </p>

            <div className="my-6 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">Edge Case: Long Text</p>
                <p className="text-xs text-slate-600">
                  "If title exceeds 60 characters, truncate with ellipsis. Add title attribute with full text on hover."
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">Edge Case: Missing Data</p>
                <p className="text-xs text-slate-600">
                  "If image prop is null, show a placeholder with gradient background and icon."
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">Edge Case: Loading State</p>
                <p className="text-xs text-slate-600">
                  "Add skeleton loader that shows while data is fetching. Use pulse animation."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Common Mistakes & Fixes</h2>

            <div className="my-8 space-y-6">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">Mistake 1: Assuming Context</h4>
                <p className="mt-2 text-sm text-slate-700">
                  <strong>Problem:</strong> "Make it responsive" assumes AI knows your breakpoints.
                </p>
                <p className="mt-2 text-sm font-medium text-green-700">
                  <strong>Fix:</strong> "Mobile &lt;768px (stack), tablet 768-1024px (2 columns), desktop &gt;1024px (3 columns)"
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">Mistake 2: Over-Relying on Screenshot Quality</h4>
                <p className="mt-2 text-sm text-slate-700">
                  <strong>Problem:</strong> Expecting AI to perfectly infer colors from a low-res screenshot.
                </p>
                <p className="mt-2 text-sm font-medium text-green-700">
                  <strong>Fix:</strong> "Primary color: #3B82F6, secondary: #1E293B, accent: #10B981" (exact hex values)
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">Mistake 3: No Component Boundaries</h4>
                <p className="mt-2 text-sm text-slate-700">
                  <strong>Problem:</strong> "Build this page" generates one 500-line component.
                </p>
                <p className="mt-2 text-sm font-medium text-green-700">
                  <strong>Fix:</strong> "Break into Header.tsx (nav), Hero.tsx, Features.tsx (grid of cards), Footer.tsx"
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">Mistake 4: Forgetting TypeScript Types</h4>
                <p className="mt-2 text-sm text-slate-700">
                  <strong>Problem:</strong> AI generates React with any types or no types.
                </p>
                <p className="mt-2 text-sm font-medium text-green-700">
                  <strong>Fix:</strong> "Export interface CardProps. Use strict TypeScript types (no any)."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Measuring Prompt Quality</h2>
            <p className="text-lg text-slate-700">
              How do you know if your prompt is good? Test these metrics:
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Metric</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Bad Prompt</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Good Prompt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">First-run accuracy</td>
                    <td className="px-6 py-4 text-sm text-slate-700">&lt;50%</td>
                    <td className="px-6 py-4 text-sm text-slate-700">&gt;85%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Manual edits needed</td>
                    <td className="px-6 py-4 text-sm text-slate-700">30+ minutes</td>
                    <td className="px-6 py-4 text-sm text-slate-700">&lt;10 minutes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">TypeScript errors</td>
                    <td className="px-6 py-4 text-sm text-slate-700">5-10 errors</td>
                    <td className="px-6 py-4 text-sm text-slate-700">0-1 errors</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Build warnings</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Multiple</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Zero</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Lighthouse score</td>
                    <td className="px-6 py-4 text-sm text-slate-700">&lt;70</td>
                    <td className="px-6 py-4 text-sm text-slate-700">&gt;90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Prompt Engineering Checklist</h2>
            <p className="text-lg text-slate-700">
              Before hitting "generate", verify your prompt includes:
            </p>

            <div className="my-8 space-y-2">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Framework + version (e.g., "Next.js 14 app router")</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Language (TypeScript vs JavaScript)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Styling library (Tailwind / styled-components / CSS modules)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Component structure (file names, imports, exports)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Responsive breakpoints (exact px values)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Mobile vs desktop layout behavior</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Semantic HTML tags (header, section, article)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">ARIA labels and accessibility requirements</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Hover / click / focus interactions</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">Data source (hardcoded / props / API)</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-green-600">✓</span>
                <p className="text-sm text-slate-700">TypeScript interfaces for props (if using TypeScript)</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Tools That Write Prompts For You</h2>
            <p className="text-lg text-slate-700">
              Writing detailed prompts takes time. <strong>PromptLens</strong> automates it.
            </p>
            <p className="text-lg text-slate-700">
              Upload your design screenshot to PromptLens. It analyzes:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Layout structure (grid, flexbox, columns)</li>
              <li>Color palette (extracts exact hex codes)</li>
              <li>Typography (detects font families, sizes, weights)</li>
              <li>Components (identifies buttons, cards, forms, navigation)</li>
              <li>Responsive patterns (suggests breakpoints)</li>
            </ul>
            <p className="text-lg text-slate-700">
              Then generates an optimized prompt following this entire guide. No manual checklist needed.
            </p>

            <div className="mt-12 rounded-lg bg-blue-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                Stop writing prompts manually
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Upload any design screenshot and get production-ready prompts in 10 seconds.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50"
              >
                Try PromptLens Free
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
          <p>© 2026 PromptLens by SwiftLabs. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
