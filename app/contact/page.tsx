'use client'

import React from 'react'
import { Files } from 'lucide-react'
import Form from '@/components/ui/form'
import Link from 'next/link'
import Social from '@/components/ui/social'

const Contact = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`${text} copied to clipboard!`)
      })
      .then(() => {
        alert('Copied')
      })
      .catch(err => {
        console.error('Failed to copy', err)
      })
  }

  return (
    <section id='contact' className='container mx-auto max-w-6xl py-20'>
      <h1 className='title mb-10'>Contact Me</h1>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {/* Contact Info */}
        <div>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex flex-col'>
              <h3 className='text text-lg font-bold'>Email</h3>
              <div className='flex gap-3'>
                <Link className='text' href='mailto:hello@felipegonzalez.io'>
                  hello@felipegonzalez.io
                </Link>
                <Files
                  onClick={() => copyToClipboard('hello@felipegonzalez.io')}
                  aria-label='Copy email'
                  className='z-100 cursor-pointer'
                />
              </div>
            </div>

            <div className='flex flex-col'>
              <h3 className='text text-lg font-bold'>Phone</h3>
              <div className='flex gap-3'>
                <Link href='callto:+17786977909' className='text'>
                  +1 (778) 697-7909
                </Link>
                <Files
                  onClick={() => copyToClipboard('+17786977909')}
                  className='z-100 cursor-pointer'
                />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className='text text-lg font-bold'>Social</h3>
              <Social backgroundColor='bg-blue-400' color='text-white' />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Form />
      </div>
    </section>
  )
}

export default Contact
