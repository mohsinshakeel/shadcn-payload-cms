import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
// import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '@/styles/global.css'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: 'Task Todo App',
  description: 'Task Todo App',
}

// Corrected Inter usage
// const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
