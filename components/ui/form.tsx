import React from 'react'
import Link from 'next/link'
import { Button } from './button'

const Form = () => {
  return (
    <form>
      <h3 className='title mb-6 text-lg font-semibold'>
        or use the form below
      </h3>
      <div className='grid grid-cols-1 gap-3'>
        <input
          placeholder='Name'
          type='text'
          className='focus:ring-primary input w-full p-4 focus:ring-3 focus:outline-none'
        />
        <input
          placeholder='Email address'
          type='email'
          className='focus:ring-primary input w-full p-4 focus:ring-2 focus:outline-none'
        />
      </div>
      <textarea
        placeholder='Write your message here...'
        rows={5}
        className='focus:ring-primary form-input input mt-3 w-full p-4 focus:ring-2 focus:outline-none'
      ></textarea>
      <Button
        asChild
        variant='ghost'
        size='lg'
        className='ext-sans button mt-6 w-1/3 cursor-pointer px-6 py-4 transition-colors hover:bg-[var(--tertiary)] hover:text-white'
      >
        <Link href={'./'}>Send</Link>
      </Button>
    </form>
  )
}

export default Form
