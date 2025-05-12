'use client'

import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef<HTMLFormElement>(null)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    setLoading(true)

    emailjs
      .sendForm(
        'service_2jerfrk',
        'template_tdtj0wf',
        form.current,
        'YEEOb0VOHWhUjqWIu'
      )
      .then(
        () => {
          console.log('Message sent')
          form.current?.reset()

          setEmailSent(true)
          setError(false)
          setLoading(false)
        },
        error => {
          console.error(error.text)
          setError(true)
          setLoading(false)
        }
      )
  }

  useEffect(() => {
    if (emailSent || error) {
      const timer = setTimeout(() => {
        setEmailSent(false)
        setError(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [emailSent, error])

  return (
    <div className='relative'>
      <form ref={form} onSubmit={sendEmail}>
        <h3 className='title mb-6 text-lg font-semibold'>
          or use the form below
        </h3>
        <div className='grid grid-cols-1 gap-3'>
          <input
            placeholder='Name'
            aria-label='Name'
            type='text'
            name='user_name'
            className='focus:ring-secondary input w-full p-4 focus:ring-2 focus:outline-none'
            required
          />
          <input
            placeholder='Email address'
            type='email'
            aria-label='Email'
            name='user_email'
            className='focus:ring-secondary input w-full p-4 focus:ring-2 focus:outline-none'
            required
          />
        </div>
        <textarea
          placeholder='Write your message here...'
          name='message'
          rows={5}
          aria-label='Comment'
          className='focus:ring-secondary form-input input mt-3 w-full p-4 focus:ring-2 focus:outline-none'
          required
        ></textarea>

        <button
          type='submit'
          disabled={loading}
          className='button mt-5 w-1/3 cursor-pointer rounded-[0.3rem] px-6 py-4 transition-colors hover:bg-[var(--primary)] hover:text-white dark:hover:bg-[var(--button-bg)]'
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {emailSent && (
        <div className='mt-4 px-2 py-1 text-sm font-bold text-green-600'>
          Email sent successfully!
        </div>
      )}

      {error && <div>Failed to send email. Please try again.</div>}
    </div>
  )
}

export default Form
