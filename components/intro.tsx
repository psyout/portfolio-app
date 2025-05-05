'use client'

import React from 'react'

import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
  return (
    <section className='grid grid-cols-1 items-center justify-center sm:grid-cols-1 md:grid-cols-1'>
      {/* Content Section */}
      <div className='col-span-1 mx-auto flex flex-col items-start gap-1'>
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
          speed={40}
          repeat={Infinity}
          className='font-serif text-xl sm:text-2xl'
        />
        <p className='text text-md mt-3 font-light sm:text-lg'>
          With over 4 years of experience as a
          <span className='font-bold'> Front-End Developer</span> and additional
          years as a Web Designer, I am skilled in HTML, CSS, JavaScript and
          React. I have a strong focus on writing clean, maintainable code and
          performance to build efficient, user-friendly web applications.
        </p>
      </div>
    </section>
  )
}

export default Intro
