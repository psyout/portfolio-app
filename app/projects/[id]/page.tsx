'use client'

import React from 'react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { projects } from '../../../components/projectData'
import ProjectCard from '@/components/ui/projects'

interface Project {
  // Basic Info
  title: string
  subtitle: string
  description: string
  fullDescription?: string
  tags: string[]
  skills?: string[]

  // Links & Buttons
  buttonLink: string
  buttonText?: string
  buttonVisit?: string

  // Media
  imageUrl: string
  imageCaption1?: string
  imageCaption2?: string
  imageCaption3?: string
  imageCaption4?: string

  // Paragraph Sections
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  paragraph4?: string

  // List
  list1?: string[]
  list2?: string[]

  // Section Titles
  title1?: string
  title2?: string
  title3?: string
  subtitle1?: string
  subtitle2?: string
  subtitle3?: string
}

const ProjectPage = () => {
  const params = useParams()
  const index = parseInt(params?.id as string)

  const [visibleCount, setVisibleCount] = useState(2) // Initially show 2 projects

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2) // Load 2 more projects on each click
  }

  if (isNaN(index) || index < 0 || index >= projects.length) {
    return notFound()
  }

  const project: Project = projects[index]
  return (
    <section className='text mx-auto max-w-6xl pt-34'>
      <div className='flex flex-col md:flex-row md:gap-20'>
        <div className='flex-1'>
          <h1 className='mb-1 text-4xl font-bold md:text-5xl'>
            {project.title}
          </h1>
          <h4 className='mb-4 text-xl font-light'>{project.subtitle}</h4>
          <p className='mb-6 text-lg md:justify-end lg:w-120'>
            {project.fullDescription}
          </p>
        </div>

        {project.skills && (
          <section className='mb-8 md:mt-23 md:flex-1'>
            <h3 className='mb-2 text-xl font-semibold'>Skills Used</h3>
            <ul className='flex list-inside gap-3 space-y-1'>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className='mb-10'>
        <Link
          href={project.buttonLink}
          className='inline-block rounded bg-blue-600 px-6 py-2 font-light text-white transition hover:bg-blue-700'
        >
          {project.buttonVisit || 'View Site'}
        </Link>
      </div>

      <div className='mb-10'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1200}
          height={700}
          className='h-150 rounded bg-cover shadow'
        />
        <p className='mx-auto mt-5 w-120 text-center text-sm'>
          {project.imageCaption1}
        </p>

        <div className='mx-auto my-30 w-full text-lg md:w-1/2'>
          <p className='text mt-5'>{project.paragraph1}</p>
          <ul className='ml-5 list-inside list-disc py-5'>
            {project.list1?.map((list, index) => <li key={index}>{list}</li>)}
          </ul>
          <p className='text mt-5'>
            Vestibulum faucibus eu orci ut ullamcorper duis tortor rhoncus nam.
            Velit viverra cras gravida ornare turpis commodo placerat.
          </p>
        </div>
      </div>

      {/* Example process section - You can customize this based on project */}
      <section className='mt-10 space-y-15 md:flex md:gap-10'>
        <div>
          <Image
            src='https://picsum.photos/200/300'
            alt='Process Screenshot'
            width={1000}
            height={600}
            className='h-90 rounded shadow'
          />
          <h4 className='mt-4 text-xl font-semibold'>Example Feature</h4>
          <p className='text-md'>{project.imageCaption4}</p>
        </div>
        <div>
          <Image
            src='https://picsum.photos/200/300'
            alt='Process Screenshot'
            width={1000}
            height={600}
            className='h-90 rounded shadow'
          />
          <h4 className='mt-4 text-xl font-semibold'>Example Feature</h4>
          <p className='text-md'>{project.imageCaption3}</p>
        </div>
      </section>

      <div className='mx-auto my-30 w-full text-lg md:w-1/2'>
        <p className='text mt-5'>{project.paragraph1}</p>
        <ul className='ml-5 list-inside list-disc py-5'>
          {project.list1?.map((list, index) => <li key={index}>{list}</li>)}
        </ul>
        <p className='text mt-5'>
          Vestibulum faucibus eu orci ut ullamcorper duis tortor rhoncus nam.
          Velit viverra cras gravida ornare turpis commodo placerat.
        </p>
      </div>

      <hr className='mt-10' />

      <div className='mt-10 w-full'>
        <h2 className='mb-6 text-2xl font-bold'>Browse Other Projects</h2>

        {/* Sneak Peek Container */}
        <div className='relative'>
          <div
            className={`grid grid-cols-1 transition-all duration-500 md:grid-cols-2 md:gap-10 ${
              visibleCount === 2 ? 'overflow-hidden border-b-1' : ''
            }`}
          >
            {projects
              .filter((_, i) => i !== index)
              .slice(0, visibleCount)
              .map((project, i) => (
                <div key={i}>
                  <ProjectCard
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    buttonLink={project.buttonLink}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Centered Load More Button */}
        {visibleCount === 2 && (
          <div className='my-20 text-center'>
            <button
              className='button mt-5 rounded-[0.3rem] px-6 py-2 transition-colors hover:bg-[var(--tertiary)] hover:text-white'
              onClick={handleLoadMore}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectPage
