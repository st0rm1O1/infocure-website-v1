import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
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
  keywords: "SAP, Oracle, Salesforce, Digital Transformation, AI, RPA, Custom Software Development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}