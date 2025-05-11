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
          className='focus:ring-secondary input w-full p-4 focus:ring-3 focus:outline-none'
        />
        <input
          placeholder='Email address'
          type='email'
          className='focus:ring-secondary input w-full p-4 focus:ring-2 focus:outline-none'
        />
      </div>
      <textarea
        placeholder='Write your message here...'
        rows={5}
        className='focus:ring-secondary form-input input mt-3 w-full p-4 focus:ring-2 focus:outline-none'
      ></textarea>
      <Button
        asChild
        variant='ghost'
        size='lg'
        className='button mt-5 w-1/3 cursor-pointer rounded-[0.3rem] px-6 py-4 transition-colors hover:bg-[var(--tertiary)] hover:text-white'
      >
        <Link href={'./'}>Send</Link>
      </Button>
    </form>
  )
}

export default Form
