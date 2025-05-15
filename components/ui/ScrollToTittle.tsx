'use client'

import { useEffect, useRef } from 'react'

const ScrollToTitle: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <h1
      ref={titleRef}
      className='title scroll-mt-10 font-extrabold no-underline'
    >
      {children}
    </h1>
  )
}

export default ScrollToTitle
