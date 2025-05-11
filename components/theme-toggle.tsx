'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <Button
      className='z-100 mr-1 transition-all hover:rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
      variant='ghost'
      size='icon'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BsSunFill className='size-7 text-orange-300' />
      ) : (
        <FaMoon className='text-primary size-6' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
