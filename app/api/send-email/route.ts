import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
   console.error('RESEND_API_KEY is not set in environment variables')
}

const resend = new Resend(apiKey)

export async function POST(request: NextRequest) {
   try {
      const body = await request.json()
      const { name, email, message } = body

      if (!name || !email || !message) {
         return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }

      const { data, error } = await resend.emails.send({
         from: 'onboarding@resend.dev',
         to: 'hello@felipegonzalez.dev',
         subject: `New contact form submission from ${name}`,
         html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
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
