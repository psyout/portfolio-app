'use client'

import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Intro = () => {
   const titleRef = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
      const timer = setTimeout(() => {
         if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
         }
      }, 1000)
      return () => clearTimeout(timer)
   }, [])

   return (
      <section className='fade-in grid grid-cols-1 items-center justify-center sm:grid-cols-1 md:grid-cols-1'>
         <div className='col-span-1 mx-auto flex flex-col items-start gap-1'>
            <h1
               className='title lh- scroll-mt-10 leading-10 font-extrabold text-pretty no-underline'
               ref={titleRef}
            >
               Hey there, I&#39;m Felipe
            </h1>
            <div className='type-animation-block'>
               <TypeAnimation
                  sequence={[
                     'Full-Stack Developer',
                     400,
                     'Front-End Developer',
                     400,
                     'Web Designer',
                     400,
                     'Enthusiast',
                     400
                  ]}
                  speed={40}
                  repeat={Infinity}
                  className='font-serif text-xl text-[var(--text-color)] sm:text-2xl'
               />
            </div>
            <p className='text text-md mt-3 font-light text-pretty sm:text-lg'>
               With over 4 years of experience as a
               <span className='font-bold'> Front-End Developer</span> and additional years as a Web
               Designer, I am skilled in <span className='font-bold'>HTML, CSS, JavaScript</span>{' '}
               and <span className='font-bold'>React.</span> I have a strong focus on writing clean,
               maintainable code and performance to build efficient, user-friendly web applications.
            </p>
         </div>
      </section>
   )
}

export default Intro
