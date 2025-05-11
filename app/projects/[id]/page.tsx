'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { TbBrandGithub } from 'react-icons/tb'

import { projects } from '../../../components/projectData'
import ProjectCard from '@/components/ui/projects'

interface Project {
  title: string
  subtitle: string
  description: string
  fullDescription?: string
  tags: string[]
  skills?: string[]
  buttonLink: string
  buttonText?: string
  buttonVisit?: string
  imageUrl: string
  imageCaption1?: string
  imageCaption2?: string
  imageCaption3?: string
  imageCaption4?: string
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  paragraph4?: string
  list1?: string[]
  list2?: string[]
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
  const [visibleCount, setVisibleCount] = useState(2)

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2)
  }

  if (isNaN(index) || index < 0 || index >= projects.length) {
    return notFound()
  }

  const project: Project = projects[index]

  return (
    <section className='text mx-auto max-w-6xl py-40'>
      {/* Title & Description */}
      <div className='flex flex-col md:flex-row md:gap-20'>
        <div className='flex-1'>
          <h1 className='logo mb-1 text-4xl font-bold md:text-5xl'>
            {project.title}
          </h1>
          <h4 className='mb-4 text-xl font-light'>{project.subtitle}</h4>
          <p className='mb-6 text-lg md:justify-end lg:w-120'>
            {project.fullDescription}
          </p>
        </div>

        {/* Skills */}
        {project.skills && (
          <section className='mb-8 md:mt-23 md:flex-1'>
            <h3 className='logo mb-2 text-xl font-semibold'>Skills Used</h3>
            <ul className='flex list-inside gap-3 space-y-1'>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Buttons */}
      <div className='mb-10 flex items-center gap-3'>
        <Button
          asChild
          variant='ghost'
          size='lg'
          className='button w-1/3 cursor-pointer rounded-[0.3rem] px-6 py-4 transition-colors hover:bg-[var(--tertiary)] hover:text-white md:w-1/6'
        >
          <Link href={project.buttonLink}>
            {project.buttonVisit || 'View Site'}
          </Link>
        </Button>

        <Link href='https://github.com/psyout' target='_blank'>
          <TbBrandGithub className='p-1.5 text-5xl transition-all hover:rounded-full hover:bg-gray-200 dark:hover:bg-gray-700' />
        </Link>
      </div>

      {/* Project Main Image */}
      <div className='mb-10'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1200}
          height={700}
          className='h-100 rounded bg-cover shadow md:h-150'
        />
        <p className='mx-auto mt-5 w-full text-center text-sm md:w-120'>
          {project.imageCaption1}
        </p>

        {/* Paragraph */}
        <div className='mx-auto my-20 w-full text-lg md:w-1/2'>
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

      {/* Features Section */}
      <section className='mt-10 space-y-15 md:flex md:gap-10'>
        {[project.imageCaption3, project.imageCaption4].map((caption, i) => (
          <div key={i}>
            <Image
              src='https://picsum.photos/200/300'
              alt={`Feature ${i + 1}`}
              width={1000}
              height={600}
              className='h-90 rounded shadow'
            />
            <h4 className='subtitle mt-4 text-xl font-semibold'>
              Example Feature
            </h4>
            <p className='text-md'>{caption}</p>
          </div>
        ))}
      </section>

      {/* Repeat Paragraph */}
      <div className='mx-auto my-20 w-full text-lg md:w-1/2'>
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

      {/* Sneak Peek Section */}
      <div className='mt-10 w-full'>
        <h2 className='mb-6 text-2xl font-bold'>Browse Other Projects</h2>

        {/* Sneak Peek Wrapper */}
        <div className='relative'>
          {/* Cards Container - initially limited height */}
          <div
            className={`grid grid-cols-1 gap-10 transition-all duration-500 md:grid-cols-2 ${
              visibleCount === 2 ? 'max-h-[600px] overflow-hidden' : ''
            }`}
          >
            {projects
              .filter((_, i) => i !== index)
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

          {/* Fade gradient only if not all cards are shown */}
          {visibleCount === 2 && (
            <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent dark:from-black'></div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount === 2 && (
          <div className='relative z-20 mt-6 text-center'>
            {/* <button
              className='rounded bg-gray-800 px-6 py-2 text-white hover:bg-gray-700'
              onClick={handleLoadMore}
            >
              Load More
            </button> */}
            <Button
              variant='ghost'
              size='lg'
              className='button mt-5 rounded-[0.3rem] transition-colors hover:bg-[var(--tertiary)] hover:text-white'
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectPage
