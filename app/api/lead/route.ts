import { NextResponse } from 'next/server'

// Basic rate limiting using in-memory Map (resets on server restart)
// For production, replace with Redis or Upstash
const requestCounts = new Map<string, { count: number; resetAt: number }>()

function getRateLimitKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  return ip
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const windowMs = 60_000 // 1 minute
  const maxRequests = 5

  const entry = requestCounts.get(key)

  if (!entry || now > entry.resetAt) {
    requestCounts.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  if (entry.count >= maxRequests) {
    return true
  }

  entry.count++
  return false
}

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .trim()
    .replace(/[<>]/g, '') // strip angle brackets
    .slice(0, 256)        // max length
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  // Rate limiting
  const rateLimitKey = getRateLimitKey(request)
  if (isRateLimited(rateLimitKey)) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again in a minute.', success: false },
      { status: 429, headers: { 'Retry-After': '60' } }
    )
  }

  try {
    const body = await request.json()

    // Input validation + sanitisation
    const name = sanitize(body.name)
    const email = sanitize(body.email)
    const company = sanitize(body.company)

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: 'Please provide your name.', success: false },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.', success: false },
        { status: 400 }
      )
    }

    if (!company || company.length < 2) {
      return NextResponse.json(
        { message: 'Please provide your company or website.', success: false },
        { status: 400 }
      )
    }

    // TODO: Replace with your CRM / email notification integration
    // e.g. Resend, HubSpot Forms API, Pipedrive, etc.
    console.log('Lead captured:', { name, email, company, timestamp: new Date().toISOString() })

    // Simulate async write (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 600))

    return NextResponse.json(
      { message: 'Thank you — we will be in touch within 24 hours.', success: true },
      {
        status: 200,
        headers: {
          // Security headers
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong. Please try again or email us directly.', success: false },
      { status: 500 }
    )
  }
}
