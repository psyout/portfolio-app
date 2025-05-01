'use client'

import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <section className='flex flex-col items-start justify-between gap-x-10 gap-y-4 py-24'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey there, I&#39;m Felipe</h1>
        <TypeAnimation
          sequence={['Front-end Developer', 'Web Designer', 'Enthusiast']}
          speed={50}
          repeat={Infinity}
          className='font-serif text-xl'
        />
        <p className='text-muted-foreground text-md mt-3 font-light sm:w-2xl sm:text-lg'>
          With over 4 years of experience as a
          <span style={{ fontWeight: '700' }}> Front-End Developer</span> and
          additional years as a Web Designer, I am skilled in HTML, CSS,
          JavaScript, React, and Git. I have a strong focus on writing clean,
          maintainable code and optimizing performance to build efficient,
          user-friendly web applications.
        </p>
      </div>
      <div className='relative'>
        <Image
          src='https://picsum.photos/200/300'
          alt='Intro Image'
          width={500}
          height={500}
          className='hidden flex-1 grayscale'
          priority
        />
      </div>
    </section>
  )
}

export default Intro
