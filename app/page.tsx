'use client'

import React, { useState } from 'react'

// Components
import Intro from '@/components/intro'
import Anchor from '@/components/ui/anchor'
import ProjectCard from '@/components/ui/projects'
import Skills from '@/components/skills'
import Contact from './contact/page'
import { ChevronDown } from 'lucide-react'

// Data
import { projects } from '@/components/projectData'
import { links } from '@/components/links'

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(2)

  const handleLoadMore = () => setVisibleCount(prev => prev + 2)

  return (
    <main className='pb-10'>
      <div className='container mx-auto max-w-6xl pt-40'>
        <section className='flex flex-col gap-20 border-b-1 md:flex-row md:items-start'>
          <div className='w-full space-y-8 md:w-1/2'>
            <Intro />
            <Anchor links={links} />
          </div>

          <div className='w-full space-y-8 md:w-1/2 md:px-6'>
            <div id='projects' className='scroll-mt-10'>
              <div className='grid grid-cols-1 gap-0 md:grid-cols-1'>
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

              {visibleCount < projects.length && (
                <div className='my-10 flex flex-col items-center justify-center border-t-1 leading-10'>
                  <button
                    className='text text-bold hover:text-secondary transition-colors'
                    onClick={handleLoadMore}
                  >
                    Load more
                  </button>
                  <ChevronDown className='span animate-bounce' />
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
