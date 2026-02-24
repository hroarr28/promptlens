import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Prompt',
}

export default function NewPromptLayout({ children }: { children: React.ReactNode }) {
  return children
}
