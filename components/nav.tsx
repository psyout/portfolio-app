'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { useState } from 'react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  const menuClasses = menuOpen
    ? 'translate-x-0 opacity-100'
    : 'translate-x-full opacity-0'

  return (
    <nav className='mx-auto flex max-w-7xl items-center justify-between'>
      {/* Logo */}
      <Link
        href='/'
        onClick={closeMenu}
        className={`logo ${menuOpen ? 'relative z-50' : ''}`}
      >
        Fe<span className='span'>_</span>
      </Link>

      <div className='flex items-center'>
        {/* Theme Toggle */}
        <div className={`ml-1 ${menuOpen ? 'relative z-50' : ''}`}>
          <ThemeToggle />
        </div>
        {/* Animated Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''} sm:hidden`}
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <span className='bar z-50'></span>
          <span className='bar z-50'></span>
          <span className='bar z-50'></span>
        </div>

        {/* Navigation Menu */}
        <div
          className={`bg-social--color fixed inset-0 z-40 transform backdrop-blur-xs transition-all duration-300 ease-in-out sm:static sm:flex sm:translate-x-0 sm:bg-transparent sm:opacity-100 ${menuClasses}`}
        >
          <ul className='text-muted-foreground mt-30 mr-7 flex h-full flex-col items-end gap-6 justify-self-end font-medium sm:hidden'>
            {['About', 'Contact'].map(item => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className='cursor-pointer text-2xl'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
