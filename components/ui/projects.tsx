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
   const getTagClass = (tag: string) => {
      const isNew = tag.trim().toLowerCase() === 'new'
      return `card-tag px-4 py-2 text-xs ${
         isNew
            ? 'tagFontColor bg-amber-400 uppercase dark:bg-[var(--primary)]'
            : 'bg-[var(--highlight-color)] font-normal text-[var(--social-color)] dark:bg-[var(--social-color)] dark:text-[var(--text-color)]'
      }`
   }

   return (
      <section id='projects' className='mt-10 w-full scroll-mt-24'>
         <div className='group relative'>
            {/* Tags */}
            {tags.length > 0 && (
               <div className='absolute -top-3 left-3 z-10 flex flex-wrap gap-2 font-semibold'>
                  {tags.map((tag, index) => (
                     <span key={index} className={getTagClass(tag)}>
                        {tag}
                     </span>
                  ))}
               </div>
            )}

            {/* Image */}
            <div className='card-border group h-60 max-h-50 overflow-hidden shadow-sm md:max-h-40 lg:max-h-50'>
               <Image
                  src={imageThumb}
                  alt={title}
                  priority
                  width={800}
                  height={300}
                  className='transform object-contain transition-transform duration-500 ease-in-out group-hover:scale-115'
               />
            </div>
         </div>

         {/* Content */}
         <div className='py-4'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <h3 className='mt-1 font-serif text-sm tracking-wide text-pretty uppercase'>
               {subtitle}
            </h3>
            <p className='sm:text-md mt-3 text-sm font-light text-pretty'>{description}</p>
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
