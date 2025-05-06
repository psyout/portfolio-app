'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { projects } from '../../../components/projectData'
import ProjectCard from '@/components/ui/projects'

const Vansipy = () => {
  const vansippyProject = projects.find(
    project => project.title.toLowerCase() === 'vansippy'
  )

  if (!vansippyProject) {
    return <p className='text-center text-red-600'>Project not found.</p>
  }

  return (
    <section className='text mx-auto my-10 max-w-6xl'>
      {/* Title & Intro */}
      <h1 className='mb-1 text-4xl font-bold'>{vansippyProject.title}</h1>
      <h4 className='mb-4 text-xl font-light'>{vansippyProject.subtitle}</h4>
      <p className='mb-6 text-lg text-gray-700'>
        {vansippyProject.fullDescription}
      </p>

      {/* Skills Used */}
      {vansippyProject.skills && (
        <section className='mb-8'>
          <h3 className='mb-2 text-xl font-semibold'>Skills Used</h3>
          <ul className='flex list-inside gap-3 space-y-1 text-gray-600'>
            {vansippyProject.skills.map((skill, index) => (
              <li key={index} className='rtl-lis'>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Visit Site Button */}
      <div className='mb-10'>
        <Link
          href={vansippyProject.buttonLink}
          className='inline-block rounded bg-blue-600 px-6 py-2 font-light text-white transition hover:bg-blue-700'
        >
          {vansippyProject.buttonVisit || 'View Site'}
        </Link>
      </div>

      {/* Featured Image */}
      <div className='mb-10'>
        <Image
          src={vansippyProject.imageUrl}
          alt={`${vansippyProject.title} Hero Screenshot`}
          width={1200}
          height={700}
          className='h-70 rounded shadow'
        />
        <p className='mt-2 text-sm text-gray-500'>
          Main screen showcasing the happy hour map interface.
        </p>
        <p className='text mt-5'>
          Vestibulum faucibus eu orci ut ullamcorper duis tortor rhoncus nam.
          Velit viverra cras gravida ornare turpis commodo placerat.
        </p>
      </div>

      {/* Process Section */}
      <section className='mt-10 space-y-15'>
        <div>
          <Image
            src='https://picsum.photos/200/300'
            alt='Add a Restaurant Form'
            width={1000}
            height={600}
            className='h-70 rounded shadow'
          />
          <h4 className='mt-4 text-lg font-semibold'>User Submissions</h4>
          <p className='mb-2 text-gray-700'>
            Users can submit new restaurants through a custom form with image
            upload. Data is stored in MongoDB and approved via an admin panel.
          </p>
          <div className='mt-5 ml-5'>
            <ul className='list-inside list-disc text-gray-700'>
              <li>Custom-built restaurant submission form</li>
              <li>Image upload with preview functionality</li>
              <li>Data validation before storing in MongoDB</li>
              <li>Submissions require admin approval</li>
            </ul>
          </div>
        </div>

        <div>
          <Image
            src='https://picsum.photos/200/300'
            alt='Mapbox Integration'
            width={1000}
            height={600}
            className='h-70 rounded shadow'
          />
          <h4 className='mt-4 text-lg font-semibold'>Interactive Map</h4>
          <p className='text-gray-700'>
            Each marker on the Mapbox-powered map shows a popup with business
            info and links to more details.
          </p>
        </div>

        <div>
          <Image
            src='https://picsum.photos/200/300'
            alt='Responsive Layout'
            width={1000}
            height={600}
            className='h-70 rounded shadow'
          />
          <h4 className='mt-4 text-lg font-semibold'>Mobile Responsive</h4>
          <p className='text-gray-700'>
            Designed mobile-first using Tailwind CSS, ensuring usability across
            all devices.
          </p>
        </div>
      </section>

      <hr className='mt-10' />

      <div className='mt-10 w-full'>
        <h2 className='mb-6 text-2xl font-bold'>Browse Other Projects</h2>
        <div className='flex flex-wrap gap-6'>
          {projects
            .filter(project => project.title.toLowerCase() !== 'vansippy')
            .map((project, index) => (
              <div key={index} className='w-full md:w-[48%]'>
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
      <hr className='mb-10' />
    </section>
  )
}

export default Vansipy
