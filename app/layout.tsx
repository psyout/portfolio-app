import type { Metadata } from 'next'
import { Ubuntu, Aleo } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { GoogleAnalytics } from '@next/third-parties/google'

const ubuntu = Ubuntu({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700'],
   variable: '--font-sans'
})
const aleo = Aleo({
   subsets: ['latin'],
   variable: '--font-serif',
   weight: '400'
})
export const metadata: Metadata = {
   title: 'Felipe Gonzalez Full-Stack Developer',
   description: 'Helping you look good on the internet',
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
               'font-lato flex min-h-screen flex-col antialiased',
               ubuntu.variable,
               aleo.variable
            )}
         >
            <Providers>
               <Header />
               <main className='grow'>{children}</main>
               <Footer />
            </Providers>
         </body>
         <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      </html>
   )
}
