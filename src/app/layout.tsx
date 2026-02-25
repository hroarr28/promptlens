import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://promptlens.app'),
  title: {
    default: "PromptLens — Turn Design Screenshots into AI-Ready Prompts",
    template: "%s | PromptLens",
  },
  description:
    "Upload design screenshots and instantly get precise AI prompts for Google Stitch, Cursor, Anima, and more. Extract colours, typography, spacing, and layout patterns. Free to start.",
  keywords: [
    "AI design prompts",
    "design to prompt",
    "Google Stitch prompts",
    "Cursor AI prompts",
    "Anima prompts",
    "design screenshot analyzer",
    "AI prompt engineering",
    "design system extractor",
    "colour palette extractor",
    "typography extractor",
    "CSS extractor from screenshot",
    "UI design to code",
    "prompt generator",
    "design prompt tool",
    "Seedream",
    "AI design tool",
    "visual prompt engineering",
  ],
  authors: [{ name: "PromptLens" }],
  creator: "PromptLens",
  publisher: "PromptLens",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "PromptLens — Turn Design Screenshots into AI-Ready Prompts",
    description:
      "Upload design screenshots and instantly get precise AI prompts for Google Stitch, Cursor, Anima, and more. Extract colours, typography, spacing, and layout patterns.",
    type: "website",
    siteName: "PromptLens",
    locale: "en_GB",
    url: "https://promptlens.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptLens — Turn Design Screenshots into AI-Ready Prompts",
    description:
      "Upload design screenshots and instantly get AI prompts for Stitch, Cursor, Anima. Extract colours, fonts, spacing in seconds.",
    creator: "@promptlens",
  },
  alternates: {
    canonical: "https://promptlens.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://promptlens.app" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
