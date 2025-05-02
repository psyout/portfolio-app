'use client'

import React from 'react'
import { Files } from 'lucide-react'
import Form from '@/components/ui/form'

const navigation = [
  { name: 'in', href: 'https://linkedin.com' },
  { name: 'git', href: 'https://github.com' }
]

const Contact = () => {
  return (
    <section className='container mx-auto max-w-5xl py-34'>
      <h1 className='title mb-10'>Contact Me</h1>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {/* Contact Info */}
        <div>
          <div className='grid grid-cols-1 gap-8'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-bold'>Email</h3>
              <div className='flex gap-3'>
                <p className='text'>hello@felipegonzalez.io</p>
                <Files className='z-100 scale-80 cursor-pointer' />
              </div>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-lg font-bold'>Phone</h3>
              <div className='flex gap-3'>
                <p className='text'>+1 (778) 697-7909</p>
                <Files className='z-100 scale-80 cursor-pointer' />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className='text-lg font-bold'>Social</h3>
              <div className='flex flex-wrap items-center gap-3'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-15 w-15 items-center justify-center rounded-full bg-blue-800 text-lg font-semibold text-white transition-colors duration-200'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
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
