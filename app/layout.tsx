import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  // 1. Title Branding
  title: {
    default: 'Satrio Bisma Bramantyo | Personal Portfolio',
    template: '%s | Satrio Bisma Bramantyo'
  },
  description: 'An Information Systems professional specializing in Digital Banking Operations and Modern Web Development. Dedicated to crafting seamless digital experiences and driving operational excellence.',
  
  // 2. SEO Keywords
  keywords: [
    'Satrio', 
    'Bisma', 
    'Satrio Bisma', 
    'Satrio Bisma Bramantyo', 
    'Bisma Bramantyo', 
    'Portfolio Satrio Bisma', 
  ],

  // 3. Favicon (Harus file PNG transparan agar terlihat bulat)
  icons: {
    icon: '/profiletittle.png?v=2',
    apple: '/profiletittle.png?v=2',
  },

  // 4. Verifikasi Google Search Console (Perbaikan di sini)
  verification: {
    google: 'j7nRofSFp3rWSSdykInACpR19TBmP1rb7SdG0wlsuH0',
  },

  // 5. OpenGraph (Media Sosial)
  openGraph: {
    title: 'Satrio Bisma Bramantyo',
    description: 'Professional Portfolio of Satrio Bisma Bramantyo',
    url: 'https://satriobisma.my.id',
    siteName: 'Satrio Bisma Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Satrio Bisma Bramantyo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Mengubah lang ke "en" agar sesuai dengan deskripsi profesionalmu
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}