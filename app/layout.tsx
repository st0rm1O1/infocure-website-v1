import type React from "react"
import type { Metadata } from "next"
import { Geist, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Infocure Technologies - Driving Innovation with Trust and Technology",
  description:
    "Since 2014, Infocure Technologies has helped businesses solve complex challenges, rethink how they work, and prepare for the future with SAP, Oracle, Salesforce, AI, and custom software solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geist.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
