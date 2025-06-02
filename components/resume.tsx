import React from 'react'
import { Download } from 'lucide-react'
import Link from 'next/link'

const Resume = () => {
   return (
      <>
         <Link
            className='group mt-6 flex items-center gap-3'
            href={'https://www.felipegonzalez.io/felipe-gonzalez-resume.pdf'}
            target='_blank'
         >
            <Download className='text animate-bounce transition-transform duration-500' />
            <span className='text group-hover:text-primary font-bold underline transition-colors duration-300'>
               Download Resume
            </span>
         </Link>
      </>
   )
}

export default Resume
