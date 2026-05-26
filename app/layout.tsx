import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIS Machine',
  url: 'https://ais-machine.com',
  logo: 'https://ais-machine.com/og-image.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@ais-machine.com',
    contactType: 'sales',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AIS Machine',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI-powered lead generation platform that captures, qualifies and converts website visitors into sales opportunities.',
  url: 'https://ais-machine.com',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
  },
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'AIS Machine | AI-Powered Lead Generation Platform',
  description:
    'AIS helps businesses capture more qualified leads with AI-powered conversations. Engage visitors, qualify prospects, and grow revenue — automatically.',
  keywords: [
    'AI lead generation',
    'chatbot lead capture',
    'AI sales automation',
    'B2B lead qualification',
    'conversational marketing',
    'lead conversion rate',
  ],
  openGraph: {
    title: 'AIS Machine | AI-Powered Lead Generation Platform',
    description:
      'AIS helps businesses capture more qualified leads with AI-powered conversations. Engage visitors, qualify prospects, and grow revenue — automatically.',
    url: 'https://ais-machine.com',
    siteName: 'AIS Machine',
    images: [
      {
        url: 'https://ais-machine.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AIS Machine — AI-Powered Lead Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIS Machine | AI-Powered Lead Generation Platform',
    description:
      'Capture, qualify and convert more website visitors — automatically.',
    images: ['https://ais-machine.com/og-image.png'],
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-950 text-white`}>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-blue-600 focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, softwareSchema]),
          }}
        />

        <main id="main-content">
          {children}
        </main>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
