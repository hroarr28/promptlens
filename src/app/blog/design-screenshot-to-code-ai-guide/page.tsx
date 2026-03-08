import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Convert Design Screenshots to Code with AI (2026 Guide) | PromptLens',
  description: 'Complete guide to turning design screenshots into production-ready code using AI tools like Cursor, Stitch, and Anima. Learn prompt engineering techniques that actually work.',
  openGraph: {
    title: 'Design Screenshots to Code with AI - Complete 2026 Guide',
    description: 'Turn any design screenshot into production code using AI. Step-by-step guide with real examples.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    authors: ['SwiftLabs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Design Screenshots to Code with AI',
    description: 'Complete guide with examples, tools, and best practices.',
  },
  alternates: {
    canonical: 'https://promptlens.swiftlabs.dev/blog/design-screenshot-to-code-ai-guide',
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
            <span>8 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How to Convert Design Screenshots to Code with AI (2026 Guide)
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            AI code generation has transformed how developers work. Upload a design screenshot, get production-ready code in seconds. Here's how to do it right.
          </p>

          {/* Content */}
          <div className="prose prose-slate mt-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Why Convert Screenshots to Code with AI?</h2>
            <p className="text-lg text-slate-700">
              Traditional design-to-code workflows are slow. Designers create mockups in Figma, developers manually translate them into HTML/CSS, back-and-forth iterations eat days of time.
            </p>
            <p className="text-lg text-slate-700">
              AI tools like <strong>Cursor</strong>, <strong>Stitch</strong>, and <strong>Anima</strong> skip the manual translation. Upload a screenshot, get React/Vue/Tailwind code instantly. What used to take 2 hours now takes 2 minutes.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
              <p className="text-lg font-medium text-blue-900">
                <strong>Real example:</strong> A landing page with hero section, features grid, pricing table, and footer. Manual coding: 3-4 hours. AI-generated from screenshot: 5 minutes + 15 minutes refinement = 20 minutes total. <strong>90% time saved.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">The AI Design-to-Code Workflow</h2>
            <p className="text-lg text-slate-700">Here's the proven 5-step process:</p>

            <h3 className="text-2xl font-bold text-slate-900">Step 1: Capture a Clean Design Screenshot</h3>
            <p className="text-lg text-slate-700">
              Quality matters. A blurry or cluttered screenshot produces messy code. Take a screenshot at <strong>1920×1080 or higher</strong>. Remove browser chrome, toolbars, and distractions.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Best tools for screenshots:</strong>
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>macOS:</strong> Cmd+Shift+4 (built-in, captures clean PNGs)</li>
              <li><strong>Windows:</strong> Snipping Tool or Win+Shift+S</li>
              <li><strong>Browser:</strong> Full Page Screen Capture (Chrome extension)</li>
              <li><strong>Figma/Sketch:</strong> Export frames directly as PNG</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Step 2: Generate an AI-Ready Prompt</h3>
            <p className="text-lg text-slate-700">
              This is where most people fail. A vague prompt like <em>"convert this to code"</em> produces generic output. You need specificity.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Effective prompts include:</strong>
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Framework choice (React, Vue, Svelte)</li>
              <li>Styling approach (Tailwind CSS, styled-components, CSS modules)</li>
              <li>Component structure (single file vs multiple components)</li>
              <li>Responsive behavior (mobile-first, breakpoints)</li>
              <li>Accessibility requirements (ARIA labels, semantic HTML)</li>
            </ul>

            <div className="my-8 rounded-lg bg-slate-900 p-6">
              <p className="mb-2 text-sm font-medium text-slate-400">Example prompt (good):</p>
              <pre className="overflow-x-auto text-sm text-slate-100">
{`Convert this hero section screenshot to React + Tailwind CSS.
Use Next.js 14 app router syntax. Make it responsive with 
mobile breakpoint at 768px. Include hover states on the CTA 
button. Use semantic HTML5 tags. Export as a single component.`}
              </pre>
            </div>

            <p className="text-lg text-slate-700">
              <strong>Tools that help write better prompts:</strong> PromptLens analyzes your screenshot and generates optimized prompts for Cursor, Stitch, and Anima. Saves trial-and-error guessing.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Step 3: Feed Screenshot + Prompt to AI Tool</h3>
            <p className="text-lg text-slate-700">
              Different AI tools have different strengths:
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Tool</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Best For</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Code Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Cursor</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Complex layouts, iterative refinement</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Excellent (production-ready)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Stitch</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Simple UI components, rapid prototyping</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good (needs cleanup)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Anima</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Figma integration, design systems</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Very Good (design-accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Step 4: Review and Refine the Generated Code</h3>
            <p className="text-lg text-slate-700">
              AI-generated code is rarely perfect on the first try. Common issues:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Hardcoded values:</strong> AI uses placeholder text and colors. Replace with variables.</li>
              <li><strong>Missing state management:</strong> AI generates static UI. Add React state, event handlers.</li>
              <li><strong>Non-semantic HTML:</strong> Lots of nested <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">&lt;div&gt;</code> tags. Use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">&lt;header&gt;</code>, <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">&lt;section&gt;</code>, <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">&lt;article&gt;</code>.</li>
              <li><strong>Accessibility gaps:</strong> Missing alt text, ARIA labels, keyboard navigation.</li>
            </ul>

            <p className="text-lg text-slate-700">
              <strong>Pro tip:</strong> Ask the AI to refine specific parts. <em>"Add hover animation to cards"</em> or <em>"Make this accessible with ARIA labels"</em> works better than regenerating everything.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Step 5: Test Responsiveness and Accessibility</h3>
            <p className="text-lg text-slate-700">
              AI tools focus on desktop layouts. Always test:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li><strong>Mobile:</strong> Resize browser to 375px width (iPhone SE). Does content stack properly?</li>
              <li><strong>Tablet:</strong> Test at 768px and 1024px. Check navigation collapse points.</li>
              <li><strong>Accessibility:</strong> Run Lighthouse audit in Chrome DevTools. Fix any WCAG violations.</li>
              <li><strong>Cross-browser:</strong> Test in Chrome, Firefox, Safari. Edge cases appear.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900">Common Mistakes (And How to Avoid Them)</h2>

            <h3 className="text-2xl font-bold text-slate-900">1. Using Low-Quality Screenshots</h3>
            <p className="text-lg text-slate-700">
              <strong>Problem:</strong> Blurry, pixelated, or zoomed-out screenshots confuse AI vision models.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Solution:</strong> Capture at 100% zoom, minimum 1920px wide, PNG format (not JPEG).
            </p>

            <h3 className="text-2xl font-bold text-slate-900">2. Vague Prompts</h3>
            <p className="text-lg text-slate-700">
              <strong>Problem:</strong> <em>"Convert this to code"</em> forces AI to guess framework, styling, structure.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Solution:</strong> Specify framework, styling library, component structure, responsive behavior. Use a prompt generator like PromptLens.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">3. Skipping Code Review</h3>
            <p className="text-lg text-slate-700">
              <strong>Problem:</strong> Copy-pasting AI code without reading it. Results in bugs, security issues, poor performance.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Solution:</strong> Always review generated code. Check for hardcoded API keys, inefficient loops, accessibility issues.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">4. Not Testing Mobile</h3>
            <p className="text-lg text-slate-700">
              <strong>Problem:</strong> AI generates desktop-first layouts. Mobile users see broken, overlapping UI.
            </p>
            <p className="text-lg text-slate-700">
              <strong>Solution:</strong> Test at 375px, 768px, 1024px, 1440px. Add responsive Tailwind classes or media queries.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Best Practices for Production-Ready Code</h2>

            <div className="my-8 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">✅ Use TypeScript</h4>
                <p className="mt-2 text-slate-700">
                  AI tools can generate TypeScript. Catch type errors before runtime. Add <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900">strict: true</code> in tsconfig.json.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">✅ Extract Reusable Components</h4>
                <p className="mt-2 text-slate-700">
                  AI generates monolithic components. Break them into Button, Card, Hero, Footer. Easier to maintain and test.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">✅ Add Prop Validation</h4>
                <p className="mt-2 text-slate-700">
                  Define PropTypes or TypeScript interfaces. Prevents runtime errors from invalid data.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">✅ Optimize Images</h4>
                <p className="mt-2 text-slate-700">
                  AI uses inline Base64 or placeholder URLs. Replace with Next.js Image, lazy loading, WebP format.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">✅ Run a Linter</h4>
                <p className="mt-2 text-slate-700">
                  ESLint catches unused variables, missing keys, accessibility issues. Fix before deploying.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900">Real-World Example: Converting a Landing Page</h2>

            <p className="text-lg text-slate-700">
              Let's walk through a complete example. We have a screenshot of a SaaS landing page with:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Hero section with headline, subheadline, CTA button</li>
              <li>Features grid (3 columns)</li>
              <li>Pricing table (3 tiers)</li>
              <li>Footer with links</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">The Prompt We Used:</h3>
            <div className="my-8 rounded-lg bg-slate-900 p-6">
              <pre className="overflow-x-auto text-sm text-slate-100">
{`Convert this SaaS landing page to Next.js 14 + TypeScript + Tailwind CSS.

Structure:
- Use app router (not pages)
- Separate components for Hero, Features, Pricing, Footer
- Mobile-first responsive design
- Breakpoints: sm (640px), md (768px), lg (1024px)

Styling:
- Tailwind CSS utility classes
- Blue gradient for hero background
- Card shadows on feature boxes
- Hover effects on pricing cards

Accessibility:
- Semantic HTML5 tags
- ARIA labels on buttons
- Alt text on images
- Focus states for keyboard navigation

Export as 5 files:
1. app/page.tsx (main page)
2. components/Hero.tsx
3. components/Features.tsx
4. components/Pricing.tsx
5. components/Footer.tsx`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">The Result:</h3>
            <p className="text-lg text-slate-700">
              Cursor generated clean, well-structured code in under 30 seconds. We spent 10 minutes:
            </p>
            <ul className="space-y-2 text-lg text-slate-700">
              <li>Replacing placeholder text with real copy</li>
              <li>Adding onClick handlers to CTA buttons</li>
              <li>Tweaking spacing and font sizes</li>
              <li>Testing at different screen sizes</li>
            </ul>
            <p className="text-lg text-slate-700">
              <strong>Total time:</strong> 40 minutes from screenshot to deployed code. <strong>Traditional workflow would take 4-6 hours.</strong>
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Tools to Speed Up the Workflow</h2>

            <h3 className="text-2xl font-bold text-slate-900">1. PromptLens (Prompt Generator)</h3>
            <p className="text-lg text-slate-700">
              Upload your screenshot, PromptLens analyzes layout, colors, components, and generates optimized prompts for Cursor, Stitch, or Anima. No more guessing what to include in your prompt.
            </p>
            <p className="text-lg text-slate-700">
              <Link href="/" className="font-medium text-blue-600 hover:underline">Try PromptLens free →</Link>
            </p>

            <h3 className="text-2xl font-bold text-slate-900">2. Figma to Code Plugins</h3>
            <p className="text-lg text-slate-700">
              If you have the original Figma file (not just a screenshot), plugins like Anima and Locofy export React/Vue code directly. More accurate than screenshot-based conversion.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">3. Chrome DevTools (Responsive Testing)</h3>
            <p className="text-lg text-slate-700">
              Built into Chrome. Press F12 → Toggle device toolbar → Test at different screen sizes. Faster than resizing browser manually.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>

            <h3 className="text-2xl font-bold text-slate-900">Can AI generate production-ready code from screenshots?</h3>
            <p className="text-lg text-slate-700">
              <strong>Yes, but with refinement.</strong> AI tools like Cursor produce high-quality React/Tailwind code from screenshots. You'll need to add business logic, state management, and API integration. The UI layer (80% of initial work) is automated.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Which AI tool is best for screenshot-to-code?</h3>
            <p className="text-lg text-slate-700">
              <strong>Depends on your use case:</strong> Cursor for complex layouts and iterative refinement. Stitch for quick prototypes. Anima if you have Figma files. Try all three with the same screenshot and compare.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Do I need coding knowledge to use AI code generators?</h3>
            <p className="text-lg text-slate-700">
              <strong>Basic knowledge helps.</strong> You can generate code without coding skills, but refining it (fixing responsive issues, adding interactivity) requires understanding HTML, CSS, and JavaScript basics.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Is the generated code SEO-friendly?</h3>
            <p className="text-lg text-slate-700">
              <strong>Usually not out of the box.</strong> AI generates semantic HTML, which is good for SEO. But you'll need to add meta tags, Open Graph images, structured data, and optimize images manually.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">How accurate is screenshot-to-code conversion?</h3>
            <p className="text-lg text-slate-700">
              <strong>80-95% layout accuracy.</strong> Colors, spacing, typography are very close. Hover states, animations, and complex interactions need manual coding. Overall, expect 1-2 hours of refinement for a full landing page.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Conclusion</h2>
            <p className="text-lg text-slate-700">
              AI design-to-code tools have matured. With the right screenshot, a well-crafted prompt, and 15-30 minutes of refinement, you can ship production-ready code 10x faster than manual coding.
            </p>
            <p className="text-lg text-slate-700">
              <strong>The workflow:</strong> Clean screenshot → Specific prompt → Generate code → Review and refine → Test responsiveness → Ship.
            </p>
            <p className="text-lg text-slate-700">
              Tools like PromptLens remove the guesswork from prompt writing. Upload a screenshot, get optimized prompts for your chosen AI tool. No trial and error.
            </p>

            <div className="mt-12 rounded-lg bg-blue-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                Ready to speed up your design-to-code workflow?
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Upload any design screenshot and get AI-ready prompts in seconds.
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
