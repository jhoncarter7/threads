import { ClerkProvider } from '@clerk/nextjs/app-beta'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import '../globals.css'
export const metadata: Metadata = {
  title: "Threads",
  description: "A next.js 13 meta threads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
    )
}
