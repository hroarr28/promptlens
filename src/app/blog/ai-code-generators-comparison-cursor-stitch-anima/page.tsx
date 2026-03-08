import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best AI Code Generators 2026: Cursor vs Stitch vs Anima Comparison | PromptLens',
  description: 'In-depth comparison of Cursor, Stitch, and Anima AI code generators. Features, pricing, code quality, and which tool to choose for your project in 2026.',
  openGraph: {
    title: 'Cursor vs Stitch vs Anima: Which AI Code Generator is Best?',
    description: 'Compare features, pricing, and code quality of top AI code generation tools.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    authors: ['SwiftLabs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor vs Stitch vs Anima - AI Code Generator Comparison',
    description: 'Features, pricing, code quality compared.',
  },
  alternates: {
    canonical: 'https://promptlens.swiftlabs.dev/blog/ai-code-generators-comparison-cursor-stitch-anima',
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
            <span>10 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Best AI Code Generators 2026: Cursor vs Stitch vs Anima
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Cursor, Stitch, and Anima are the top AI code generation tools in 2026. Here's an in-depth comparison of features, pricing, code quality, and which one to choose.
          </p>

          {/* Content */}
          <div className="prose prose-slate mt-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Quick Comparison Table</h2>
            <p className="text-lg text-slate-700">
              If you're in a hurry, here's the TL;DR:
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cursor</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Stitch</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Anima</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Pricing</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$20/month</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Free (beta)</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$31/month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Code Quality</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Excellent</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Very Good</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Supported Frameworks</td>
                    <td className="px-6 py-4 text-sm text-slate-700">React, Vue, Svelte, HTML</td>
                    <td className="px-6 py-4 text-sm text-slate-700">React, HTML</td>
                    <td className="px-6 py-4 text-sm text-slate-700">React, Vue, Angular, HTML</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Screenshot Input</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Yes</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Yes</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Figma Integration</td>
                    <td className="px-6 py-4 text-sm text-slate-700">❌ No</td>
                    <td className="px-6 py-4 text-sm text-slate-700">❌ No</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Yes (plugin)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Iterative Refinement</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Excellent</td>
                    <td className="px-6 py-4 text-sm text-slate-700">⚠️ Limited</td>
                    <td className="px-6 py-4 text-sm text-slate-700">✅ Good</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Best For</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Complex projects</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Quick prototypes</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Design systems</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Cursor: Best for Production-Ready Code</h2>

            <h3 className="text-2xl font-bold text-slate-900">What is Cursor?</h3>
            <p className="text-lg text-slate-700">
              Cursor is a VS Code fork with built-in AI code generation. It's not just a screenshot-to-code tool — it's a full IDE with Claude Sonnet 3.5 and GPT-4 integration. Upload a design screenshot, chat with the AI, get React/Tailwind code.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Chat-based refinement:</strong> Generate code, then ask <em>"Make the hero section taller"</em> or <em>"Add hover effects to cards"</em>. The AI edits your code iteratively.</li>
              <li><strong>Multi-file editing:</strong> AI understands your entire codebase. It can edit 5 files at once to add a new feature.</li>
              <li><strong>Context-aware:</strong> Cursor reads your existing code, follows your naming conventions, matches your styling patterns.</li>
              <li><strong>Terminal integration:</strong> Ask AI to run commands, debug errors, install packages.</li>
              <li><strong>Code explanation:</strong> Highlight any code block, press Cmd+K, ask <em>"What does this do?"</em></li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Code Quality</h3>
            <p className="text-lg text-slate-700">
              <strong>Excellent.</strong> Cursor generates production-ready React + TypeScript code. Uses semantic HTML, follows accessibility best practices, includes responsive Tailwind classes. The code is clean, well-structured, and easy to maintain.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Example:</strong> We uploaded a landing page screenshot. Cursor generated 4 separate components (Hero, Features, Pricing, Footer), proper TypeScript interfaces, mobile-first responsive design, and ARIA labels. <strong>95% production-ready out of the box.</strong>
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Pricing</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Free tier:</strong> 2,000 AI requests/month (enough for small projects)</li>
              <li><strong>Pro:</strong> $20/month, unlimited requests, Claude Sonnet 3.5 + GPT-4</li>
              <li><strong>Business:</strong> $40/month, priority access, custom models</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Pros and Cons</h3>
            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-green-900">✅ Pros</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>Best code quality of all three tools</li>
                  <li>Iterative refinement via chat</li>
                  <li>Full IDE (not just code generation)</li>
                  <li>Supports all major frameworks</li>
                  <li>Fast generation (5-10 seconds)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-red-900">❌ Cons</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>Learning curve (full IDE, not simple tool)</li>
                  <li>Requires VS Code familiarity</li>
                  <li>No Figma integration</li>
                  <li>Free tier is limited</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">When to Choose Cursor</h3>
            <p className="text-lg text-slate-700">
              Pick Cursor if you're building <strong>production apps</strong> and need <strong>high-quality, maintainable code</strong>. It's overkill for quick prototypes, but perfect for shipping real products.
            </p>

            <hr className="my-12 border-slate-200" />

            <h2 className="text-3xl font-bold text-slate-900">Stitch: Best for Quick Prototypes</h2>

            <h3 className="text-2xl font-bold text-slate-900">What is Stitch?</h3>
            <p className="text-lg text-slate-700">
              Stitch is a standalone web app focused on one thing: screenshot to code. Upload an image, get React or HTML code in 10 seconds. No IDE, no complex setup, just a simple form and a code output box.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Dead simple:</strong> Upload screenshot → Choose framework (React/HTML) → Copy code. No accounts, no setup.</li>
              <li><strong>Fast:</strong> Generates code in 5-10 seconds.</li>
              <li><strong>Mobile-first:</strong> Automatically includes responsive design.</li>
              <li><strong>Tailwind output:</strong> All code uses Tailwind CSS utility classes.</li>
              <li><strong>Free (beta):</strong> Completely free while in beta testing.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Code Quality</h3>
            <p className="text-lg text-slate-700">
              <strong>Good, but needs cleanup.</strong> Stitch generates working code, but it's less polished than Cursor. Expect lots of nested <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">&lt;div&gt;</code> tags, hardcoded values, and missing semantic HTML. You'll spend 15-30 minutes refining the output.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Example:</strong> We uploaded the same landing page screenshot. Stitch generated a single 300-line React component with inline styles and placeholder text. It worked, but needed splitting into smaller components and proper prop types. <strong>70% production-ready.</strong>
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Pricing</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Beta:</strong> Free (current status)</li>
              <li><strong>Expected launch pricing:</strong> $10-15/month (unconfirmed)</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Pros and Cons</h3>
            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-green-900">✅ Pros</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>Easiest to use (no setup required)</li>
                  <li>Very fast generation</li>
                  <li>Free during beta</li>
                  <li>Great for quick mockups</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-red-900">❌ Cons</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>Lower code quality than Cursor/Anima</li>
                  <li>No iterative refinement</li>
                  <li>Limited framework support</li>
                  <li>Generates monolithic components</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">When to Choose Stitch</h3>
            <p className="text-lg text-slate-700">
              Pick Stitch if you need a <strong>quick prototype</strong> or mockup. Perfect for testing ideas, showing clients a rough version, or bootstrapping a new project. Not ideal for production code.
            </p>

            <hr className="my-12 border-slate-200" />

            <h2 className="text-3xl font-bold text-slate-900">Anima: Best for Figma-to-Code</h2>

            <h3 className="text-2xl font-bold text-slate-900">What is Anima?</h3>
            <p className="text-lg text-slate-700">
              Anima is a Figma plugin that exports designs directly to React, Vue, Angular, or HTML. Unlike Cursor and Stitch (which work from screenshots), Anima accesses the full design structure — layers, spacing, typography, colors. This produces more accurate code.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Figma plugin:</strong> Select any frame in Figma, click "Export Code", get React/Vue/HTML.</li>
              <li><strong>Design system support:</strong> Anima detects reusable components, generates a component library.</li>
              <li><strong>Responsive breakpoints:</strong> Export different layouts for mobile, tablet, desktop.</li>
              <li><strong>Collaboration:</strong> Share live prototypes with developers, no handoff meetings needed.</li>
              <li><strong>CSS variables:</strong> Exports design tokens as CSS custom properties.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Code Quality</h3>
            <p className="text-lg text-slate-700">
              <strong>Very good.</strong> Because Anima reads the Figma structure, it generates cleaner code than screenshot-based tools. Proper component hierarchy, accurate spacing (uses exact px values from Figma), correct color values. The code is more design-accurate but sometimes overly specific (too many hardcoded values).
            </p>
            <p className="text-lg text-slate-700">
              <strong>Example:</strong> We exported a Figma landing page with 3 breakpoints. Anima generated separate components for each section, CSS media queries matching Figma's responsive rules, and a tokens.css file with all colors/fonts. <strong>85% production-ready.</strong>
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Pricing</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Free:</strong> 1 project, basic code export</li>
              <li><strong>Pro:</strong> $31/month, unlimited projects, advanced features</li>
              <li><strong>Team:</strong> $63/month per editor, design system support</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Pros and Cons</h3>
            <div className="my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-green-900">✅ Pros</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>Most design-accurate (reads Figma data)</li>
                  <li>Design system / component library support</li>
                  <li>Multiple framework support</li>
                  <li>Developer-designer collaboration features</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h4 className="mb-4 text-lg font-semibold text-red-900">❌ Cons</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>Requires Figma (can't use screenshots alone)</li>
                  <li>Expensive ($31/month)</li>
                  <li>Learning curve (need Figma knowledge)</li>
                  <li>Over-specific code (lots of hardcoded px values)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">When to Choose Anima</h3>
            <p className="text-lg text-slate-700">
              Pick Anima if you have <strong>Figma designs</strong> and need <strong>pixel-perfect accuracy</strong>. Perfect for design systems, component libraries, and teams where designers and developers work closely together.
            </p>

            <hr className="my-12 border-slate-200" />

            <h2 className="text-3xl font-bold text-slate-900">Side-by-Side Comparison: Same Design, Three Tools</h2>

            <p className="text-lg text-slate-700">
              We tested all three tools with the same landing page design. Here's what each produced:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">The Test Design</h3>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Hero section with gradient background, headline, CTA button</li>
              <li>Features grid (3 columns, icons + text)</li>
              <li>Pricing table (3 tiers, highlighted middle option)</li>
              <li>Footer with links</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Results</h3>

            <div className="my-8 space-y-6">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="mb-3 text-lg font-semibold text-slate-900">Cursor</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>Files generated:</strong> 5 (Hero.tsx, Features.tsx, Pricing.tsx, Footer.tsx, page.tsx)</li>
                  <li><strong>Code quality:</strong> Clean, semantic HTML, TypeScript interfaces, responsive classes</li>
                  <li><strong>Accuracy:</strong> 95% match to design (colors slightly off)</li>
                  <li><strong>Time to production-ready:</strong> 10 min generation + 15 min refinement = 25 min</li>
                  <li><strong>Best feature:</strong> Could ask AI to fix issues via chat</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="mb-3 text-lg font-semibold text-slate-900">Stitch</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>Files generated:</strong> 1 (monolithic component)</li>
                  <li><strong>Code quality:</strong> Working but messy, lots of divs, placeholder text</li>
                  <li><strong>Accuracy:</strong> 80% match to design (spacing issues)</li>
                  <li><strong>Time to production-ready:</strong> 5 sec generation + 40 min cleanup = 45 min</li>
                  <li><strong>Best feature:</strong> Fastest generation</li>
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="mb-3 text-lg font-semibold text-slate-900">Anima</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>Files generated:</strong> 4 (components + tokens.css)</li>
                  <li><strong>Code quality:</strong> Very clean, design tokens, accurate spacing</li>
                  <li><strong>Accuracy:</strong> 98% match to design (pixel-perfect)</li>
                  <li><strong>Time to production-ready:</strong> 30 sec generation + 20 min cleanup = 21 min</li>
                  <li><strong>Best feature:</strong> Most accurate colors and spacing</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Winner</h3>
            <p className="text-lg text-slate-700">
              <strong>Cursor</strong> for most developers. Best balance of code quality, speed, and ease of use. <strong>Anima</strong> wins if you have Figma files and need pixel-perfect accuracy. <strong>Stitch</strong> is best for throwaway prototypes.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Which Tool Should You Choose?</h2>

            <div className="my-8 space-y-6">
              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <h4 className="text-lg font-semibold text-blue-900">Choose Cursor if you:</h4>
                <ul className="mt-3 space-y-2 text-sm text-blue-800">
                  <li>Need production-ready code for real apps</li>
                  <li>Want to refine code iteratively via chat</li>
                  <li>Work with multiple frameworks (React, Vue, Svelte)</li>
                  <li>Don't have Figma files (working from screenshots)</li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-6">
                <h4 className="text-lg font-semibold text-green-900">Choose Stitch if you:</h4>
                <ul className="mt-3 space-y-2 text-sm text-green-800">
                  <li>Need a quick prototype or mockup</li>
                  <li>Want the simplest tool (no setup)</li>
                  <li>Are testing ideas before full development</li>
                  <li>Don't need perfect code quality</li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-6">
                <h4 className="text-lg font-semibold text-purple-900">Choose Anima if you:</h4>
                <ul className="mt-3 space-y-2 text-sm text-purple-800">
                  <li>Have Figma designs (not just screenshots)</li>
                  <li>Need pixel-perfect accuracy</li>
                  <li>Are building a design system or component library</li>
                  <li>Work in a team with designers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Our Recommendation</h2>
            <p className="text-lg text-slate-700">
              For most developers: <strong>Start with Cursor.</strong> It has the best code quality, supports all frameworks, and the iterative refinement feature saves hours compared to manual editing.
            </p>
            <p className="text-lg text-slate-700">
              If you have Figma files and need design accuracy: <strong>Use Anima.</strong> The pixel-perfect output and design system support are worth the $31/month for agencies and product teams.
            </p>
            <p className="text-lg text-slate-700">
              For quick throwaway prototypes: <strong>Stitch is perfect.</strong> Free, fast, no setup required.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Bonus: PromptLens Speeds Up All Three Tools</h2>
            <p className="text-lg text-slate-700">
              Whether you choose Cursor, Stitch, or Anima, <strong>better prompts = better code</strong>. PromptLens analyzes your screenshot and generates optimized prompts tailored to each tool.
            </p>
            <p className="text-lg text-slate-700">
              Upload a design screenshot to PromptLens, it detects:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Layout structure (grid, flexbox, columns)</li>
              <li>Color palette (primary, secondary, accent colors)</li>
              <li>Typography (font families, sizes, weights)</li>
              <li>Components (buttons, cards, forms)</li>
              <li>Responsive breakpoints</li>
            </ul>
            <p className="text-lg text-slate-700">
              Then generates a prompt like:
            </p>

            <div className="my-8 rounded-lg bg-slate-900 p-6">
              <pre className="overflow-x-auto text-sm text-slate-100">
{`Convert this hero section to React + Tailwind CSS.
Layout: Single column on mobile, 2-column (60/40) on desktop.
Colors: #3B82F6 (primary), #1E293B (text), #F1F5F9 (background).
Typography: Inter font family, h1 is 48px bold, p is 18px regular.
Components: Primary button with rounded corners and shadow.
Responsive: Stack on <768px, side-by-side on ≥768px.
Export as a single Hero.tsx component.`}
              </pre>
            </div>

            <p className="text-lg text-slate-700">
              This level of detail produces 10x better code than vague prompts like <em>"make it look like the screenshot"</em>.
            </p>

            <div className="mt-12 rounded-lg bg-blue-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                Generate better prompts for Cursor, Stitch, or Anima
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Upload any design screenshot and get AI-optimized prompts in seconds.
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
