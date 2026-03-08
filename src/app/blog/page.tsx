import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - AI Code Generation Tips & Guides | PromptLens',
  description: 'Learn how to convert design screenshots to code with AI tools like Cursor, Stitch, and Anima. Expert guides on prompt engineering for developers.',
  openGraph: {
    title: 'PromptLens Blog - AI Code Generation Guides',
    description: 'Expert guides on converting designs to code with AI.',
    type: 'website',
  },
};

const articles = [
  {
    slug: 'design-screenshot-to-code-ai-guide',
    title: 'How to Convert Design Screenshots to Code with AI (2026 Guide)',
    description: 'Complete guide to turning design screenshots into production-ready code using AI tools. Learn prompt engineering techniques that work.',
    date: '2026-03-08',
    readTime: '8 min read',
  },
  {
    slug: 'ai-code-generators-comparison-cursor-stitch-anima',
    title: 'Best AI Code Generators 2026: Cursor vs Stitch vs Anima',
    description: 'In-depth comparison of top AI code generation tools. Features, pricing, accuracy, and which one to choose for your project.',
    date: '2026-03-08',
    readTime: '10 min read',
  },
  {
    slug: 'prompt-engineering-design-to-code',
    title: 'Design-to-Code Prompt Engineering: Complete Guide',
    description: 'Master the art of writing effective prompts for AI code generators. Techniques that produce clean, production-ready code.',
    date: '2026-03-08',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
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
              <Link href="/blog" className="text-sm font-semibold text-blue-600">
                Blog
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            PromptLens Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Guides, tips, and best practices for turning design screenshots into production-ready code with AI.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-2 flex items-center gap-3 text-sm text-slate-500">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600">
                  {article.title}
                </h2>
                <p className="mt-2 text-slate-600">{article.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                  Read article
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to turn designs into code?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Upload any design screenshot and get AI-ready prompts for Cursor, Stitch, or Anima.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
          >
            Try PromptLens Free
          </Link>
        </div>
      </section>

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
          </div>
        </div>
      </footer>
    </div>
  );
}
