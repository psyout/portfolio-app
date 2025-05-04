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
    <section id='projects' className='mb-15 w-full scroll-mt-24 md:max-w-lg'>
      <div className='relative'>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={300}
          className='card-border h-48 min-h-30 w-full border object-cover sm:h-60 md:h-64'
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

      <div className='py-4'>
        <h2 className='text text-2xl font-bold'>{title}</h2>
        <h3 className='text mt-1 text-sm tracking-wide uppercase'>
          {subtitle}
        </h3>
        <p className='text mt-3'>{description}</p>
        <Link
          href={buttonLink}
          className='button mt-3 inline-block bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'
        >
          Go to Project
        </Link>
      </div>
    </section>
  )
}
