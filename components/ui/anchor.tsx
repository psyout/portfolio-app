import React from 'react'
import Link from 'next/link'

type AnchorProps = {
  links: { href: string; label: string }[]
}

const Anchor: React.FC<AnchorProps> = ({ links }) => {
  return (
    <div className='bg-primary w-full text-2xl'>
      <ul className='list-none'>
        <li className='flex flex-col gap-10 font-sans font-medium'>
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Anchor
