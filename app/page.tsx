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
    <main className='pt-40 pb-10'>
      <div className='container mx-auto max-w-6xl'>
        {/* Intro and Anchor */}
        <section className='flex flex-col gap-20 md:flex-row md:items-start'>
          <div className='w-full space-y-8 md:w-1/2'>
            <Intro />
            <Anchor links={links} />
          </div>

          {/* Projects */}
          <div id='projects' className='w-full scroll-mt-24 space-y-8 md:w-1/2'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        {/* Skills */}
        <Skills />
        <hr />
        {/* Contact */}
        <Contact />
        <hr />
      </div>
    </main>
  )
}
