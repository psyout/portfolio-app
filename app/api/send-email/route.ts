import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 3
const MAX_REQUEST_SIZE_BYTES = 20_000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (!apiKey) {
   console.error('RESEND_API_KEY is not set in environment variables')
}

const resend = new Resend(apiKey)

type RateLimitEntry = {
   count: number
   resetAt: number
}

const globalForRateLimit = globalThis as typeof globalThis & {
   contactRateLimit?: Map<string, RateLimitEntry>
}

const rateLimit = globalForRateLimit.contactRateLimit ?? new Map<string, RateLimitEntry>()
globalForRateLimit.contactRateLimit = rateLimit

const escapeHtml = (value: string) =>
   value.replace(
      /[&<>"']/g,
      character =>
         ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
         })[character] as string
   )

const getClientIp = (request: NextRequest) =>
   request.headers.get('x-real-ip') ??
   request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
   'unknown'

const isRateLimited = (clientIp: string) => {
   const now = Date.now()
   const entry = rateLimit.get(clientIp)

   if (!entry || entry.resetAt <= now) {
      rateLimit.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
      return false
   }

   entry.count += 1
   return entry.count > RATE_LIMIT_MAX_REQUESTS
}

export async function POST(request: NextRequest) {
   try {
      const contentLength = Number(request.headers.get('content-length') ?? 0)
      if (contentLength > MAX_REQUEST_SIZE_BYTES) {
         return NextResponse.json({ error: 'Request is too large' }, { status: 413 })
      }

      if (isRateLimited(getClientIp(request))) {
         return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
         )
      }

      const body = await request.json()
      const { name, email, message, website } = body

      // Bots commonly fill hidden fields that people never interact with.
      if (website) {
         return NextResponse.json({ success: true })
      }

      if (
         typeof name !== 'string' ||
         typeof email !== 'string' ||
         typeof message !== 'string' ||
         !name.trim() ||
         !EMAIL_PATTERN.test(email.trim()) ||
         !message.trim() ||
         name.length > 100 ||
         email.length > 254 ||
         message.length > 5_000
      ) {
         return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 })
      }

      const safeName = escapeHtml(name.trim())
      const safeEmail = escapeHtml(email.trim())
      const safeMessage = escapeHtml(message.trim()).replace(/\r?\n/g, '<br />')

      const { data, error } = await resend.emails.send({
         from: 'hello@felipegonzalez.dev',
         to: 'hello@felipegonzalez.dev',
         replyTo: email.trim(),
         subject: `New contact form submission from ${name.trim().replace(/[\r\n]/g, ' ')}`,
         html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
      })

      if (error) {
         console.error('Resend error:', error)
         return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true, data })
   } catch (error) {
      console.error('API error:', error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
   }
}
