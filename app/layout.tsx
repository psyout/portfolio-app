import type { Metadata } from 'next'
import { Sora, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora'
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})
export const metadata: Metadata = {
  title: 'Felipe',
  description: "Felipe's personal website",
  icons: {
    icon: '/favicon.ico'
  }
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'font-sora flex min-h-screen flex-col antialiased',
          sora.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
