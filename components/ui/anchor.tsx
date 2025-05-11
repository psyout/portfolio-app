import React from 'react'
import Link from 'next/link'

type AnchorProps = {
  links: { href: string; label: string }[]
}

const Anchor: React.FC<AnchorProps> = ({ links }) => {
  return (
    <div className='text bg-primary my-30 mb-20 w-full text-2xl sm:mt-30'>
      <ul className='list-none'>
        <li className='flex flex-col gap-10 font-sans font-medium'>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-teal-400 after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 ${link.label === 'Work' ? 'font-bold' : 'font-normal'} `}
            >
              {link.label}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Anchor
