import React from 'react'
import Head from 'next/head'
import Resume from '@/components/resume'
import Image from 'next/image'
import ProfilePicture from '../../public/static/images/profile-picture.jpg'

const About = () => {
  return (
    <div className='container mx-auto max-w-5xl py-34'>
      <Head>
        <title>About Me - Felipe</title>
        <meta
          name='description'
          content='Learn more about Felipe, a creative and driven developer based in Vancouver.'
        />
      </Head>
      <section className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title font-extrabold no-underline'>About Me</h1>
          <p className='text mt-3 max-w-2xl font-light sm:text-lg'>
            I&apos;m driven by a relentless desire to learn and explore novel
            ideas. Presently located in the vibrant city of Vancouver where
            I&apos;m available for full-time or freelance work opportunities, as
            well as working remotely for clients worldwide.
          </p>
          <p className='text mt-3 max-w-2xl font-light sm:text-lg'>
            I take a personal and creative approach to solving my clients&apos;
            problems - whether that&apos;s developing a web app, landing page,
            or managing a creative project from start to finish.
          </p>
          <Resume />
          <div className='mt-10'>
            <h3 className='subtitle my-2 font-bold'>Languages</h3>
            <p className='text flex items-center'>
              English<span className='span block text-2xl'>・</span>Spanish
            </p>
          </div>
        </div>
        <div className='mt-10 inline-flex flex-1 justify-end sm:mt-0 sm:items-start'>
          <Image
            src={ProfilePicture}
            alt='Intro Image'
            className='h-70 w-70 scale-100 rounded-full object-cover'
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default About
