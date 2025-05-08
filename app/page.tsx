'use client'

import React from 'react'

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
  return (
    <main className='pb-10'>
      <div className='container mx-auto max-w-6xl pt-40'>
        {/* Intro and Anchor */}
        <section className='flex flex-col gap-20 md:flex-row md:items-start'>
          <div className='0 w-full space-y-8 md:w-1/2'>
            <Intro />
            <Anchor links={links} />
          </div>

          <div className='w-full space-y-8 md:w-1/2 md:pr-6 md:pl-6'>
            {/* Projects Section */}
            <div id='projects' className='scroll-mt-10'>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
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
