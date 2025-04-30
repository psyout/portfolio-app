import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
  return (
    <header className='bg-background fixed inset-x-0 top-0 z-50 p-5 py-6'>
      <nav className='container mx-auto flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='text-lg font-bold'>
            Felipe
          </Link>
        </div>

        <ul className='text-muted-foreground sm flex items-center gap-6 text-sm font-light'>
          <li className='hover:text-foreground text-sky-950 transition-colors duration-200'>
            <Link href='/about' className='text-sm'>
              About
            </Link>
          </li>
          <li className='hover:text-foreground text-sky-950 transition-colors duration-200'>
            <Link href='/projects' className='text-sm'>
              Projects
            </Link>
          </li>
          <li className='hover:text-foreground text-sky-950 transition-colors duration-200'>
            <Link href='/contact' className='text-sm'></Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
