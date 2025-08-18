'use client'

import React, { useState, useMemo, useCallback } from 'react'

// Components
import Intro from '@/components/intro'
import Anchor from '@/components/ui/anchor'
import ProjectCard from '@/components/ui/projects'
import Skills from '@/components/skills'
import Contact from './contact/page'
import { Button } from '@/components/ui/button'

// Data
import { projects } from '@/components/projectData'
import { links } from '@/components/links'

export default function Home() {
   const [visibleCount, setVisibleCount] = useState(3)
   const handleLoadMore = useCallback(() => setVisibleCount(prev => prev + 1), [])
   const visibleProjects = useMemo(() => projects.slice(0, visibleCount), [visibleCount])

   return (
      <main className='pb-10'>
         <div className='container mx-auto max-w-6xl pt-40'>
            <section className='flex flex-col gap-20 border-b md:flex-row md:items-start'>
               <div className='w-full space-y-8 md:w-1/2'>
                  <Intro />
                  <Anchor links={links} />
               </div>
               <div className='w-full space-y-8 md:w-1/2 md:px-6'>
                  <div id='projects' className='scroll-mt-10'>
                     <div className='relative'>
                        <div
                           className={`grid grid-cols-1 gap-10 transition-all duration-500 md:grid-cols-1 ${visibleCount === 3 ? 'max-h-[1100px] overflow-hidden' : ''}`}
                           aria-live='polite'
                        >
                           {visibleProjects.map((project, index) => (
                              <div
                                 key={index}
                                 className='project-card-container'
                                 style={{ animationDelay: `${index * 0.5}s` }}
                              >
                                 <ProjectCard {...project} />
                              </div>
                           ))}
                        </div>
                        {visibleCount === 3 && <div className='card-gradient'></div>}
                     </div>
                     {visibleCount < projects.length && (
                        <div className='relative z-20 mt-6 flex flex-col items-center justify-center text-center'>
                           <Button
                              variant='ghost'
                              size='lg'
                              className='button mt-5 cursor-pointer rounded-[0.3rem] transition-colors hover:bg-[var(--primary)] hover:text-white dark:hover:bg-[var(--button-bg)]'
                              onClick={handleLoadMore}
                           >
                              Load more
                           </Button>
                        </div>
                     )}
                  </div>
                  <Skills />
               </div>
            </section>
            <Contact />
         </div>
      </main>
   )
}
