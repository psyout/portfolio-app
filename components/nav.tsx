'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { useState, useEffect, useCallback } from 'react'
import LogoIcon from './ui/logo'
import { links } from '@/components/links'

const Nav = () => {
   const [menuOpen, setMenuOpen] = useState(false)

   useEffect(() => {
      if (menuOpen) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'auto'
      }
      // Close menu on Escape key
      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === 'Escape') setMenuOpen(false)
      }
      window.addEventListener('keydown', handleEsc)
      return () => window.removeEventListener('keydown', handleEsc)
   }, [menuOpen])

   const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])
   const closeMenu = useCallback(() => setMenuOpen(false), [])

   return (
      <nav role='navigation' className='mx-auto flex max-w-6xl items-center justify-between'>
         {/* Logo */}
         <Link
            title='Home'
            aria-label='Home'
            href='/'
            onClick={closeMenu}
            className={`logo ${menuOpen ? 'relative z-50' : ''}`}
         >
            <LogoIcon
               aria-label='Home'
               className='h-16 w-16'
               fill='var(--highlight-color)' // Change color using fill
            />
            <span className='sr-only'>Felipe Gonzalez</span>
         </Link>

         <div className='flex items-center'>
            <ul className='hidden items-center gap-6 font-sans font-medium text-[var(--text-color)] sm:flex'>
               {links.map(link => (
                  <li key={link.label}>
                     <Link
                        href={link.href}
                        onClick={closeMenu}
                        className='group relative flex w-fit items-center pb-0.5 text-[var(--text-color)] transition-colors duration-200 ease-out hover:text-[var(--primary)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:outline-none'
                     >
                        <span className='flex items-center gap-1 transition-colors duration-200 ease-out group-hover:text-[var(--primary)]'>
                           {link.icon}
                           {link.label}
                        </span>
                        <span className='absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-200 ease-out group-hover:scale-x-100' />
                     </Link>
                  </li>
               ))}
            </ul>
            {/* Theme Toggle */}
            <div className={`ml-3 ${menuOpen ? 'relative z-50' : ''}`}>
               <ThemeToggle />
            </div>
            {/* Animated Hamburger Icon */}
            <div
               className={`hamburger ${menuOpen ? 'active' : ''} sm:hidden`}
               onClick={toggleMenu}
               aria-label='Toggle menu'
               aria-expanded={menuOpen}
               aria-controls='main-menu'
               tabIndex={0}
               role='button'
            >
               <span className='bar z-50'></span>
               <span className='bar z-50'></span>
               <span className='bar z-50'></span>
            </div>

            {menuOpen && (
               <div
                  id='main-menu'
                  className='bg-social--color fixed inset-0 z-40 backdrop-blur-xs sm:hidden'
               >
                  <div className='mt-30 mr-7 flex h-full flex-col items-end gap-6 justify-self-end font-sans font-medium text-[var(--text-color)]'>
                     {links.map(link => (
                        <Link
                           key={link.label}
                           href={link.href}
                           onClick={closeMenu}
                           className='group relative flex w-fit items-center pb-0.5 text-2xl text-[var(--text-color)] transition-colors duration-200 ease-out hover:text-[var(--primary)] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:outline-none'
                        >
                           <span className='flex items-center gap-3 transition-colors duration-200 ease-out group-hover:text-[var(--primary)]'>
                              {link.icon}
                              {link.label}
                           </span>
                           <span className='absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-200 ease-out group-hover:scale-x-100' />
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </nav>
   )
}

export default Nav
