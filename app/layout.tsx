import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Infocure Technologies - Driving Innovation with Trust and Technology",
  description:
    "Since 2014, Infocure Technologies has helped businesses solve complex challenges, rethink how they work, and prepare for the future with SAP, Oracle, Salesforce, AI, and custom software solutions.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}