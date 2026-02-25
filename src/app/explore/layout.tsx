import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore AI Design Prompts — Community Prompt Library',
  description:
    'Browse and copy AI design prompts created by the PromptLens community. Find colour palettes, typography specs, and layout patterns for Google Stitch, Cursor, Anima, and more.',
  alternates: {
    canonical: 'https://promptlens.app/explore',
  },
  openGraph: {
    title: 'Explore AI Design Prompts — PromptLens Community Library',
    description: 'Browse community-created design prompts. Copy styles for Stitch, Cursor, Anima instantly.',
  },
}

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return children
}
