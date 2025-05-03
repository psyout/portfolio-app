import React from 'react'

type SocialProps = {
  color?: string // Optional prop to define the text color
  backgroundColor?: string // Optional prop to define the background color
}

const navigation = [
  { name: 'in', href: 'https://www.linkedin.com/in/felipegonzalezcare/' },
  { name: 'git', href: 'https://github.com/psyout' }
]

const Social: React.FC<SocialProps> = ({
  color = 'text-gray-700',
  backgroundColor = 'bg-neutral-600'
}) => {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold transition-colors duration-200 ${color} ${backgroundColor}`}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Social
