import Link from 'next/link'
import ThemeToggle from './theme-toggle'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-gray-800 p-4 text-white'>
      <Link href='/' className='text-lg font-bold'>
        Fe
      </Link>
      <nav className='flex items-center space-x-4'>
        <Link href='/about' className='hover:text-gray-400'>
          About
        </Link>
        <Link href='/contact' className='hover:text-gray-400'>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
