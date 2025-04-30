'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { BsMoonStarsFill } from 'react-icons/bs'
import { BsSunFill } from 'react-icons/bs'
export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BsSunFill className='size-6 text-orange-300' />
      ) : (
        <BsMoonStarsFill className='size-5 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
