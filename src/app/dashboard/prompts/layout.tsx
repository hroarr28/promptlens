import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Prompts',
}

export default function PromptsLayout({ children }: { children: React.ReactNode }) {
  return children
}
