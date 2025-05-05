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
    <section
      id='projects'
      className='mt-10 mb-15 w-full scroll-mt-24 md:max-w-lg'
    >
      <div className='group relative'>
        {/* Tags ABOVE the image wrapper so they aren't cut */}
        <div className='absolute -top-3 left-3 z-10 flex flex-wrap gap-2'>
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

        <div className='overflow-hidden rounded-md'>
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
        <h3 className='text mt-1 text-sm font-semibold tracking-wide uppercase'>
          {subtitle}
        </h3>
        <p className='text mt-3 font-light sm:text-lg'>{description}</p>
        <Link
          href={buttonLink}
          className='button hover:text-whit mt-3 inline-block px-4 py-2 transition-colors hover:bg-[var(--tertiary)]'
        >
          Go to Project
        </Link>
      </div>
    </section>
  )
}
