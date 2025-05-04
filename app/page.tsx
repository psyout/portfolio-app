import React from 'react'
import Intro from '@/components/intro'
import Anchor from '@/components/ui/anchor'
import Contact from './contact/page'
import Skills from '@/components/skills'
import ProjectCard from '@/components/ui/projects'
import { projects } from '@/components/projectData'
import { links } from '@/components/links'

export default function Home() {
  return (
    <section className='py-10'>
      <div className='container mx-auto max-w-5xl'>
        <Intro />
        <Anchor links={links} />
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <Skills />
        <Contact />
        <hr />
      </div>
    </section>
  )
}
