'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

type ProjectCardProps = {
  imageThumb: string
  tags: string[]
  title: string
  subtitle: string
  description: string
  buttonLink: string
}

export default function ProjectCard({
  imageThumb,
  tags,
  title,
  subtitle,
  description,
  buttonLink
}: ProjectCardProps) {
  return (
    <section id='projects' className='mt-10 w-full scroll-mt-24'>
      <div className='group relative'>
        <div className='absolute -top-3 left-3 z-10 flex flex-wrap gap-2 font-semibold'>
          {tags.map((tag, index) => {
            const isNew = tag.trim().toLowerCase() === 'new'
            return (
              <span
                key={index}
                className={`card-tag px-4 py-2 text-xs ${
                  isNew
                    ? 'bg-amber-300 text-white'
                    : 'bg-[var(--tertiary)] text-[var(--social-color)] dark:bg-[var(--social-color)] dark:text-[var(--text-color)]'
                }`}
              >
                {tag}
              </span>
            )
          })}
        </div>

        <div className='card-border group h-60 max-h-50 overflow-hidden shadow-sm md:max-h-40 lg:max-h-50'>
          <Image
            src={imageThumb}
            alt={title}
            width={800}
            height={300}
            className='transform object-contain transition-transform duration-500 ease-in-out group-hover:scale-115'
          />
        </div>
      </div>

      <div className='py-4'>
        <h2 className='text text-2xl font-bold'>{title}</h2>
        <h3 className='text mt-1 font-serif text-sm font-normal tracking-wide text-pretty uppercase'>
          {subtitle}
        </h3>
        <p className='text sm:text-md mt-3 text-sm font-light text-pretty'>
          {description}
        </p>
        <Button
          asChild
          variant='ghost'
          size='lg'
          className='button mt-5 rounded-[0.3rem] transition-colors hover:bg-[var(--primary)] hover:text-white dark:hover:bg-[var(--button-bg)]'
        >
          <Link href={buttonLink}>Go to Project</Link>
        </Button>
      </div>
    </section>
  )
}
