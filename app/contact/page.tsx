'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Files, CircleCheck } from 'lucide-react' // Import the Check icon
import Form from '@/components/ui/form'
import Link from 'next/link'
import Social from '@/components/ui/social'
import { usePathname } from 'next/navigation'

const Contact = () => {
   const [copied, setCopied] = useState<string | null>(null) // Track which item was copied
   const titleRef = useRef<HTMLHeadingElement>(null)
   const pathname = usePathname()

   useEffect(() => {
      // Only scroll to the title if the current route is "/contact"
      if (pathname === '/contact') {
         const timer = setTimeout(() => {
            if (titleRef.current) {
               titleRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
               })
            }
         }, 200)

         return () => clearTimeout(timer)
      }
   }, [pathname])
   const copyToClipboard = (text: string) => {
      navigator.clipboard
         .writeText(text)
         .then(() => {
            setCopied(text) // Set the copied state to the text
            setTimeout(() => setCopied(null), 1500) // Reset after 2 seconds
         })
         .catch(err => {
            console.error('Failed to copy', err)
         })
   }

   return (
      <section id='contact' className='container mx-auto max-w-6xl py-20 pt-40'>
         <h1 ref={titleRef} className='title mb-10 scroll-mt-10'>
            Contact Me
         </h1>
         <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
            {/* Contact Info */}
            <div>
               <div className='grid grid-cols-1 gap-4'>
                  {/* Email Section */}
                  <div className='flex flex-col'>
                     <h3 className='text text-lg font-bold'>Email</h3>
                     <div className='flex gap-3'>
                        <Link className='text' href='mailto:hello@felipegonzalez.io'>
                           hello@felipegonzalez.dev
                        </Link>
                        {copied === 'hello@felipegonzalez.dev' ? (
                           <CircleCheck aria-label='Copied' className='text-[var(--primary)]' />
                        ) : (
                           <Files
                              onClick={() => copyToClipboard('hello@felipegonzalez.io')}
                              aria-label='Copy email'
                              className='scale-150 cursor-pointer rounded-full py-1 transition-all hover:rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
                           />
                        )}
                     </div>
                  </div>

                  {/* Phone Section */}
                  <div className='flex flex-col'>
                     <h3 className='text text-lg font-bold'>Phone</h3>
                     <div className='flex gap-3'>
                        <Link href='callto:+17786977909' className='text'>
                           +1 (778) 697-7909
                        </Link>
                        {copied === '+17786977909' ? (
                           <CircleCheck aria-label='Copied' className='text-[var(--primary)]' />
                        ) : (
                           <Files
                              onClick={() => copyToClipboard('+17786977909')}
                              aria-label='Copy phone number'
                              className='scale-150 cursor-pointer rounded-full py-1 transition-all hover:rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
                           />
                        )}
                     </div>
                  </div>

                  {/* Social Section */}
                  <div className='flex flex-col gap-3'>
                     <h3 className='text text-lg font-bold'>Social</h3>
                     <Social
                        backgroundColor='bg-[var(--primary)]'
                        color='text-[var(--button-text)]'
                        hoverBackgroundColor='hover:bg-green-900'
                        hoverColor='hover:text-white'
                     />
                  </div>
               </div>
            </div>
            <Form />
         </div>
      </section>
   )
}

export default Contact
