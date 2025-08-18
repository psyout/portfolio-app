import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type AnchorProps = {
   links: { href: string; label: string; icon: React.ReactNode }[]
}

const Anchor: React.FC<AnchorProps> = ({ links }) => {
   const [visible, setVisible] = useState(false)
   const listRef = useRef<HTMLLIElement>(null)

   useEffect(() => {
      const timer = setTimeout(() => setVisible(true), 200)
      return () => clearTimeout(timer)
   }, [])

   return (
      <div className='text my-30 mb-20 w-full text-2xl sm:mt-30'>
         <ul className='list-none'>
            <li
               ref={listRef}
               className={`fade-in flex flex-col gap-8 font-sans font-medium transition-all duration-700 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
               }`}
            >
               {links.map(link => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className={`relative flex w-fit items-center pb-1 after:absolute after:bottom-0 after:block after:h-[3.5px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--primary)] after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 ${
                        link.label === 'Work' ? 'font-bold' : 'font-normal'
                     }`}
                  >
                     <span className='flex items-center gap-3'>
                        {link.icon}
                        {link.label}
                     </span>
                  </Link>
               ))}
            </li>
         </ul>
      </div>
   )
}

export default Anchor
