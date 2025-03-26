import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

// Update the font import to ensure we're using a monospace font
import { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
})

export const metadata: Metadata = {
  title: "Muhammad Irvan Hermawan | Full-Stack Developer",
  description: "Personal portfolio and CV of Muhammad Irvan Hermawan, a Full-Stack Developer",
  other: {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Update the body class to use the monospace font */}
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

