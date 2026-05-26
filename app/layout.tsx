import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AIS Machine | AI-Powered Lead Generation Platform',
  description: 'Transform your website into a 24/7 AI sales machine. Capture leads, qualify prospects, and convert customers automatically.',
  generator: 'v0.app',
  openGraph: {
    title: 'AIS Machine | AI-Powered Lead Generation Platform',
    description: 'Transform your website into a 24/7 AI sales machine. Capture leads, qualify prospects, and convert customers automatically.',
    url: 'https://ais-machine.com',
    siteName: 'AIS Machine',
    images: [
      {
        url: 'https://ais-machine.com/og-image.png', // Replace with actual OG image URL later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIS Machine | AI-Powered Lead Generation Platform',
    description: 'Transform your website into a 24/7 AI sales machine.',
    images: ['https://ais-machine.com/og-image.png'], // Replace with actual OG image URL later
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
