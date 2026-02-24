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
    default: "PromptLens — Upload designs. Get perfect AI prompts.",
    template: "%s — PromptLens",
  },
  description:
    "Upload design screenshots and get tool-specific AI prompts for Stitch, Cursor, Anima, and more. Stop describing — start showing.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PromptLens — Upload designs. Get perfect AI prompts.",
    description:
      "Upload design screenshots and get tool-specific AI prompts for Stitch, Cursor, Anima, and more.",
    type: "website",
    siteName: "PromptLens",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptLens — Upload designs. Get perfect AI prompts.",
    description:
      "Upload design screenshots and get tool-specific AI prompts for Stitch, Cursor, Anima, and more.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
