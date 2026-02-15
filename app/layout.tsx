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
  // 1. Menambahkan nama lengkap di Title agar Google mudah mengenali pemilik web
  title: {
    default: 'Satrio Bisma Bramantyo | Personal Portfolio',
    template: '%s | Satrio Bisma Bramantyo'
  },
  description: 'An Information Systems professional specializing in Digital Banking Operations and Modern Web Development. Dedicated to crafting seamless digital experiences and driving operational excellence.',
  
  // 2. Optimasi Keywords agar muncul saat pencarian nama "Satrio" atau "Bisma"
  keywords: [
    'Satrio', 
    'Bisma', 
    'Satrio Bisma', 
    'Satrio Bisma Bramantyo', 
    'Bisma Bramantyo', 
    'Portfolio Satrio Bisma', 
  ],

  // 3. Menambahkan foto profile.jpg sebagai Favicon (ikon di samping judul tab)
  icons: {
    icon: '/profiletittle.png',
    apple: '/profiletittle.png', // Untuk tampilan saat di-save di iPhone/iOS
  },

  // Metadata tambahan untuk SEO Media Sosial (OpenGraph)
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
