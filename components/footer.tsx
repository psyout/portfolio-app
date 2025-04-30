import { ImGithub } from 'react-icons/im'
import { TfiLinkedin } from 'react-icons/tfi'

const navigation = [
  { name: 'LinkedIn', href: '/', icon: TfiLinkedin },
  { name: 'GitHub', href: '/', icon: ImGithub }
]

const Footer = () => {
  return (
    <footer className='p-5 py-8'>
      <div className='container mx-auto max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors duration-200'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' />
              </a>
            ))}
          </div>
          <div>
            <p className='mt-8 text-sm text-gray-400 md:order-1 md:mt-0'>
              &copy; {new Date().getFullYear()} Felipe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
