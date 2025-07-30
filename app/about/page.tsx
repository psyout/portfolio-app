'use client'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Resume from '@/components/resume'
import Image from 'next/image'
import ProfilePicture from '../../public/static/images/profile-picture.jpg'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const About = () => {
   const titleRef = useRef<HTMLHeadingElement>(null)
   const sectionRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const timer = setTimeout(() => {
         if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
         }
      }, 400)
      return () => clearTimeout(timer)
   }, [])

   useEffect(() => {
      const section = sectionRef.current
      if (!section) return

      const onIntersect = (entries: IntersectionObserverEntry[]) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('visible')
            }
         })
      }

      const observer = new IntersectionObserver(onIntersect, {
         threshold: 0.2
      })
      observer.observe(section)

      return () => observer.disconnect()
   }, [])

   return (
      <div className='container mx-auto max-w-6xl py-40'>
         <Head>
            <title>About Me - Felipe</title>
            <meta
               name='description'
               content='Felipe, a creative and driven developer based in Vancouver.'
            />
         </Head>
         <section
            ref={sectionRef}
            className='fade-in-on-scroll flex flex-col gap-3 sm:justify-between sm:gap-10 md:flex-row'
         >
            <div className='flex-1 md:mt-0'>
               <h1 ref={titleRef} className='title scroll-mt-10 font-extrabold no-underline'>
                  About Me
               </h1>
               <p className='text mt-3 max-w-2xl font-light sm:text-lg'>
                  I&apos;m driven by a relentless desire to learn and explore novel ideas. Presently
                  located in the vibrant city of Vancouver where I&apos;m available for full-time or
                  freelance work opportunities, as well as working remotely for clients worldwide.
               </p>
               <p className='text mt-3 max-w-2xl font-light sm:text-lg'>
                  I’m <span className='text font-semibold'>Felipe Gonzalez,</span> and I take a
                  personal and creative approach to solving my clients&apos; problems - whether
                  that&apos;s developing a web app, landing page, or managing a creative project
                  from start to finish.
               </p>
               <Resume />
               <div className='mt-10'>
                  <h3 className='subtitle my-2 font-bold'>Languages</h3>
                  <p className='text flex items-center'>
                     English<span className='span block text-2xl'>・</span>Spanish
                  </p>
               </div>
               <div className='group mt-20 hidden items-center gap-2 md:flex'>
                  <ArrowLeft className='group-hover:animate-bounce-x transition-transform' />
                  <Link href='./' className='hover:underline'>
                     <p className='hover:text-primary text text-xl font-bold underline transition-colors duration-300'>
                        Back to Work
                     </p>
                  </Link>
               </div>
            </div>
            <div className='mt-10 flex flex-1 sm:mt-0 md:justify-end'>
               <Image
                  src={ProfilePicture}
                  loading='lazy'
                  alt='Intro Image'
                  width={320}
                  height={320}
                  className='h-80 w-80 rounded-full object-cover sm:h-72 sm:w-72 md:h-80 md:w-80'
               />
            </div>
         </section>
      </div>
   )
}

export default About
