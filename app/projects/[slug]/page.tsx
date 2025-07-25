'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { TbBrandGithub } from 'react-icons/tb'

import { projects } from '../../../components/projectData'
import ProjectCard from '@/components/ui/projects'

import { parseHighlightedText } from '@/components/ui/highlight'

const ProjectPage = () => {
   // Scroll to the title after a short delay
   const titleRef = useRef<HTMLHeadingElement>(null)
   useEffect(() => {
      const timer = setTimeout(() => {
         if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
         }
      }, 300)

      return () => clearTimeout(timer)
   }, [])

   // Get the slug from the URL
   const params = useParams()
   const slug = params?.slug // Use slug from the URL

   // State to manage the number of visible projects
   const [visibleCount, setVisibleCount] = useState(2)

   // Find the project by slug
   const project = projects.find(p => p.slug === slug)

   if (!project) {
      return notFound() // Show a 404 page if the project is not found
   }

   // Handle loading more projects
   // This function increases the number of visible projects by 2
   // and is called when the "Load more" button is clicked
   const handleLoadMore = () => {
      setVisibleCount(prevCount => prevCount + 2)
   }

   // Handle click event for the button
   // This function checks if the button link is valid
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!project.buttonHref || project.buttonHref === '#') {
         e.preventDefault()
         alert('No site available.')
      }
   }

   return (
      <section className='text mx-auto max-w-6xl py-40'>
         {/* Title & Description */}
         <div className='flex flex-col md:flex-row md:gap-20'>
            <div className='flex-1'>
               <h1 ref={titleRef} className='logo mb-1 scroll-mt-10 text-4xl font-bold md:text-5xl'>
                  {project.title}
               </h1>
               <h4 className='mb-4 text-xl'>{project.subtitle}</h4>
               <p className='text-md mb-6 text-left font-light md:justify-end md:text-left lg:w-120'>{parseHighlightedText(project.fullDescription)}</p>
            </div>

            {/* Skills */}
            {project.skills && (
               <section className='mb-8 md:mt-24 md:flex-1'>
                  <h3 className='logo mb-2 text-2xl font-semibold'>Skills Used</h3>
                  <ul className='flex list-inside flex-wrap'>
                     {project.skills.map((skill, index) => (
                        <li className='mr-2 mb-1 flex items-center' key={index}>
                           {skill} <span className='span text-3xl'>・</span>
                        </li>
                     ))}
                  </ul>
               </section>
            )}
         </div>

         {/* Buttons */}
         <div className='mb-10 flex items-center gap-3'>
            <Button asChild variant='ghost' size='lg' className='button w-1/3 cursor-pointer rounded-[0.3rem] px-6 py-4 hover:bg-[var(--primary)] hover:text-white md:w-1/6 dark:hover:bg-[var(--button-bg)]'>
               <Link href={project.buttonHref || '#'} target='_blank' onClick={handleClick}>
                  {project.buttonVisit || 'View Site'}
               </Link>
            </Button>

            {project.gitHub && (
               <Link href={project.gitHub} target='_blank'>
                  <TbBrandGithub className='p-1.5 text-5xl transition-all hover:rounded-full hover:bg-[var(--tertiary)] hover:text-[var(--button-text)]' />
               </Link>
            )}
         </div>

         {/* Project Main Image */}
         <div className='mb-10'>
            <Image
               src={project.imageUrl}
               alt={project.title}
               layout='intrinsic' // Let the image size adjust to its intrinsic dimensions
               priority
               width={1200}
               height={675}
               className='rounded bg-cover shadow md:h-150'
            />
            <p className='mx-auto mt-5 w-full text-justify text-sm font-light sm:text-center md:w-130'>{project.imageCaption1}</p>

            {/* Paragraph */}
            <div className='text-md mx-auto my-20 flex w-full flex-col items-center font-light md:w-2/3 md:text-lg'>
               <p className='text mt-5 text-left text-pretty sm:text-center'>{parseHighlightedText(project.paragraph1)}</p>
               {project.list1 && project.list1.length > 0 && (
                  <ul className='ml-5 flex list-disc flex-col py-5'>
                     {project.list1.map((item, index) => (
                        <li key={index}>
                           <span className='font-semibold'>{item.title.split('–')[0].trim()}</span> – {item.title.split('–')[1].trim()}
                        </li>
                     ))}
                  </ul>
               )}

               <p className='text mt-5 text-left text-pretty sm:text-center'>{project.paragraph2}</p>
            </div>

            {project.imageSmall?.[0] ? (
               <Image
                  src={project.imageSmall[0]}
                  alt={project.title}
                  layout='intrinsic' // Let the image size adjust to its intrinsic dimensions
                  width={1200}
                  height={675}
                  className='rounded bg-cover shadow md:h-150'
               />
            ) : null}
            <p className='mx-auto mt-5 mb-20 w-full text-left text-sm font-light text-pretty sm:text-center md:w-180'>{project.paragraph5}</p>
         </div>

         {/* Features Section */}
         {(project.imageSmall?.[1] || project.imageSmall?.[2] || project.title1 || project.title2) && (
            <section className='flex flex-col md:flex-row md:gap-10'>
               {/* First Image Block */}
               {project.imageSmall?.[1] && (
                  <div className='mb-10 flex flex-col items-center md:mb-0 md:w-1/2'>
                     <div className='flex gap-5'>
                        <Image src={project.imageSmall[1]} alt='Feature 1' width={400} height={100} layout='intrinsic' className='mb-5 w-60 rounded object-contain md:w-xs' />
                     </div>
                     <div className='flex flex-col items-center'>
                        <h4 className='subtitle mb-3 text-xl font-semibold'>{project.title1}</h4>
                        <p className='text-md max-w-130 text-center font-light text-pretty md:max-w-7/8'>{parseHighlightedText(project.imageCaption3)}</p>
                     </div>
                  </div>
               )}

               {/* Second Image Block */}
               {project.imageSmall?.[2] && (
                  <div className='mt-10 flex flex-col items-center md:mt-0 md:w-1/2'>
                     <div className='flex gap-5'>
                        <Image src={project.imageSmall[2]} alt='Feature 2' width={400} height={100} layout='intrinsic' className='mb-5 w-60 rounded object-contain md:w-xs' />
                     </div>
                     <div className='flex flex-col items-center'>
                        <h4 className='subtitle mb-3 text-xl font-semibold'>{project.title2}</h4>
                        <p className='text-md max-w-130 text-center font-light text-pretty md:max-w-7/8'>{parseHighlightedText(project.imageCaption4)}</p>
                     </div>
                  </div>
               )}
            </section>
         )}

         <div className='text-md mx-auto my-30 w-full font-light md:w-2/3 md:text-lg'>
            {(project.paragraph3 || project.list1?.length || project.paragraph4) && (
               <>
                  {project.paragraph3 && <p className='text mt-5 text-left text-pretty sm:text-center'>{parseHighlightedText(project.paragraph3)}</p>}

                  {project.list1 && project.list1.length > 0 && (
                     <ul className='ml-5 hidden list-inside list-disc py-5'>
                        {project.list1.map((item, index) => (
                           <li key={index}>
                              <span className='font-semibold'>{item.title.split('–')[0].trim()}</span> – {item.title.split('–')[1].trim()}
                           </li>
                        ))}
                     </ul>
                  )}

                  {project.paragraph4 && <p className='text mt-5 text-left text-pretty sm:text-center'>{parseHighlightedText(project.paragraph4)}</p>}
               </>
            )}
         </div>

         <hr className='mt-10' />

         {/* Sneak Peek Section */}
         <div className='mt-10 w-full'>
            <h2 className='mb-6 text-2xl font-bold'>Browse Other Projects</h2>

            {/* Sneak Peek Wrapper */}
            <div className='relative'>
               {/* Cards Container - initially limited height */}
               <div className={`grid grid-cols-1 gap-x-30 gap-y-10 transition-all duration-500 md:grid-cols-2 ${visibleCount === 2 ? 'max-h-[600px] overflow-hidden' : ''}`}>
                  {projects
                     .filter((_, i) => i !== projects.findIndex(p => p.slug === slug))
                     .map((project, i) => (
                        <div key={i}>
                           <ProjectCard imageThumb={project.imageUrl} tags={project.tags} title={project.title} subtitle={project.subtitle} description={project.description} buttonLink={project.buttonLink} />
                        </div>
                     ))}
               </div>

               {/* Fade gradient only if not all cards are shown */}
               {visibleCount === 2 && <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent dark:from-black'></div>}
            </div>

            {/* Load More Button */}
            {visibleCount === 2 && (
               <div className='relative z-20 mt-6 text-center'>
                  <Button variant='ghost' size='lg' className='button mt-5 cursor-pointer rounded-[0.3rem] transition-colors hover:bg-[var(--primary)] hover:text-white dark:hover:bg-[var(--button-bg)]' onClick={handleLoadMore}>
                     Load more
                  </Button>
               </div>
            )}
         </div>
      </section>
   )
}

export default ProjectPage
