'use client'

import React, { useState } from 'react'

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
  const [visibleCount, setVisibleCount] = useState(2)
  const handleLoadMore = () => setVisibleCount(prev => prev + 2)

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
                  className={`grid grid-cols-1 gap-10 transition-all duration-500 md:grid-cols-1 ${
                    visibleCount === 2 ? 'max-h-[800px] overflow-hidden' : ''
                  }`}
                >
                  {projects.slice(0, visibleCount).map((project, index) => (
                    <div
                      key={index}
                      className='project-card-container'
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>

                {/* Fade gradient if not all projects are visible */}
                {visibleCount === 2 && (
                  <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent dark:from-black'></div>
                )}
              </div>

              {/* Load More Button */}
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
