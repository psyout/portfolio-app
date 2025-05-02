import React from 'react'

const Form = () => {
  return (
    <form>
      <h3 className='title mb-6 text-2xl font-semibold'>
        or use the form below
      </h3>
      <div className='grid grid-cols-1 gap-6'>
        <input
          placeholder='Name'
          type='text'
          className='focus:ring-primary w-full border p-3 focus:ring-3 focus:outline-none'
        />
        <input
          placeholder='Email address'
          type='email'
          className='focus:ring-primary w-full border p-3 focus:ring-2 focus:outline-none'
        />
      </div>
      <textarea
        placeholder='Write your message here...'
        rows={5}
        className='focus:ring-primary mt-6 w-full border p-3 focus:ring-2 focus:outline-none'
      ></textarea>
      <button
        type='submit'
        className='hover:bg-primary-light text-sans button mt-6 w-1/3 cursor-pointer px-6 py-3 font-bold transition-colors'
      >
        Send
      </button>
    </form>
  )
}

export default Form
