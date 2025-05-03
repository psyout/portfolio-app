'use client'

import React from 'react'

import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <section className='grid grid-cols-1 items-center justify-center py-24 sm:grid-cols-1 md:grid-cols-2'>
      {/* Content Section */}
      <div className='col-span-1 mx-auto flex flex-col items-start gap-4'>
        <h1 className='title font-extrabold no-underline'>
          Hey there, I&#39;m Felipe
        </h1>
        <TypeAnimation
          sequence={[
            'Front-end Developer',
            400,
            'Web Designer',
            400,
            'Enthusiast',
            400
          ]}
          speed={50}
          repeat={Infinity}
          className='font-serif text-xl sm:text-2xl'
        />
        <p className='text mt-3 font-light sm:text-lg'>
          With over 4 years of experience as a
          <span style={{ fontWeight: '800' }}> Front-End Developer</span> and
          additional years as a Web Designer, I am skilled in HTML, CSS,
          JavaScript and React. I have a strong focus on writing clean,
          maintainable code and performance to build efficient, user-friendly
          web applications.
        </p>
      </div>
    </section>
  )
}

export default Intro
