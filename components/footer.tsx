import { ImGithub } from 'react-icons/im'
import { TfiLinkedin } from 'react-icons/tfi'

const navigation = [
  { name: 'LinkedIn', href: '/', icon: TfiLinkedin },
  { name: 'GitHub', href: '/', icon: ImGithub }
]

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto max-w-5xl'>
        <div className='md:items-left flex flex-col gap-4'>
          <div>
            <p className='text-l text mt-8 md:mt-0'>
              Developed by me, Felipe, in Vancouver &#9786;
            </p>
          </div>
          <div className='flex items-center gap-3'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-muted hover:bg-primary text hover:text-foreground flex items-center justify-center rounded-full transition-colors duration-200'
              >
                <item.icon className='text-2xl' aria-hidden='true' />
                <span className='sr-only'>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
