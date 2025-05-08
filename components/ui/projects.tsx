'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

type ProjectCardProps = {
  imageUrl: string
  tags: string[]
  title: string
  subtitle: string
  description: string
  buttonLink: string
}

export default function ProjectCard({
  imageUrl,
  tags,
  title,
  subtitle,
  description,
  buttonLink
}: ProjectCardProps) {
  return (
    <section id='projects' className='mt-10 mb-15 w-full scroll-mt-24'>
      <div className='group relative'>
        {/* Tags ABOVE the image wrapper so they aren't cut */}
        <div className='absolute -top-3 left-3 z-10 flex flex-wrap gap-2 font-serif'>
          {tags.map((tag, index) => {
            const isNew = tag.trim().toLowerCase() === 'new'
            return (
              <span
                key={index}
                className={`card-border px-4 py-2 text-xs ${
                  isNew
                    ? 'bg-amber-500 text-white'
                    : 'bg-[var(--text-color)] text-[var(--social-color)] dark:bg-[var(--social-color)] dark:text-[var(--text-color)]'
                }`}
              >
                {tag}
              </span>
            )
          })}
        </div>

        <div className='overflow-hidden'>
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={200}
            className='card-border h-48 max-h-50 w-full transform object-cover transition duration-500 ease-in-out group-hover:scale-115'
          />
        </div>
      </div>

      <div className='py-4'>
        <h2 className='text text-2xl font-bold'>{title}</h2>
        <h3 className='text mt-1 text-sm font-normal tracking-wide uppercase'>
          {subtitle}
        </h3>
        <p className='sm:text-md mt-3 font-light'>{description}</p>
        <Button
          asChild
          variant='ghost'
          size='lg'
          className='button mt-5 rounded-md transition-colors hover:bg-[var(--tertiary)] hover:text-white'
        >
          <Link href={buttonLink}>Go to Project</Link>
        </Button>
      </div>
    </section>
  )
}
