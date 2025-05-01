'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Helper function to handle conditional z-index
  const getZIndexClass = () => (menuOpen ? 'relative z-50' : '')

  return (
    <header className='bg-background inset-x-0 top-0 z-50'>
      <nav className='container mx-auto flex max-w-3xl items-center justify-between py-4'>
        {/* Logo */}
        <Link
          href='/'
          className={`title text-2xl font-extrabold ${getZIndexClass()}`}
        >
          Felipe<span style={{ color: '#81E6D9' }}>.</span>
        </Link>

        <div className='flex items-center'>
          {/* Burger Icon */}
          <button
            onClick={toggleMenu}
            className={`order-1 cursor-pointer focus:outline-none sm:hidden ${getZIndexClass()}`}
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navigation Menu */}
          <div
            className={`bg-primary fixed inset-0 z-40 transform backdrop-blur-xs ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-200 ease-in-out sm:static sm:flex sm:translate-x-0 sm:bg-transparent`}
          >
            <ul
              className={`text-muted-foreground mt-30 mr-7 flex h-full flex-col items-end gap-6 justify-self-end font-medium sm:mt-0 sm:hidden ${
                menuOpen ? 'text-2xl' : 'text-lg'
              } sm:h-auto sm:flex-row sm:gap-6 sm:text-sm`}
            >
              <li className='hover:text-foreground transition-colors duration-200'>
                <Link
                  href='/about'
                  onClick={closeMenu}
                  className='cursor-pointer'
                >
                  About
                </Link>
              </li>

              <li className='hover:text-foreground transition-colors duration-200'>
                <Link
                  href='/contact'
                  onClick={closeMenu}
                  className='cursor-pointer'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className={`ml-1 ${getZIndexClass()}`}>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
