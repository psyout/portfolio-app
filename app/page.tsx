'use client'

import React, { useState } from 'react'

// Components
import Intro from '@/components/intro'
import Anchor from '@/components/ui/anchor'
import ProjectCard from '@/components/ui/projects'
import Skills from '@/components/skills'
import Contact from './contact/page'

// Data
import { projects } from '@/components/projectData'
import { links } from '@/components/links'

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(2)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2)
  }

  return (
    <main className='pb-10'>
      <div className='container mx-auto max-w-6xl pt-40'>
        {/* Intro and Anchor */}
        <section className='flex flex-col gap-20 md:flex-row md:items-start'>
          <div className='w-full space-y-8 md:w-1/2'>
            <Intro />
            <Anchor links={links} />
          </div>

          <div className='w-full space-y-8 md:w-1/2 md:pr-6 md:pl-6'>
            {/* Projects Section */}
            <div id='projects' className='scroll-mt-10'>
              <div
                className={`grid grid-cols-1 gap-0 transition-all duration-500 md:grid-cols-1 ${
                  visibleCount === 2 ? 'overflow-hidden border-b-1' : ''
                }`}
              >
                {projects.slice(0, visibleCount).map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              {visibleCount < projects.length && (
                <div className='my-10 text-center'>
                  <button
                    onClick={handleLoadMore}
                    className='rounded bg-gray-800 px-6 py-2 text-white hover:bg-gray-700'
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
            <Skills />
          </div>
        </section>
        <hr className='mt-10' />
        <Contact />
      </div>
    </main>
  )
}
