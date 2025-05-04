'use client'
import Image from 'next/image'
import Link from 'next/link'

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
    <section id='projects' className='mb-15 max-w-lg scroll-mt-24'>
      <div className='relative'>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={500}
          className='card-border h-64 w-full border object-cover'
        />
        <div className='absolute -top-3 left-3 flex flex-wrap gap-2'>
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
      </div>

      <div className='space-y-3 py-3'>
        <h2 className='text text-2xl font-bold'>{title}</h2>
        <h3 className='text text-sm tracking-wide uppercase'>{subtitle}</h3>
        <p className='text'>{description}</p>
        <Link
          href={buttonLink}
          className='button mt-2 inline-block bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'
        >
          Go to Project
        </Link>
      </div>
    </section>
  )
}
