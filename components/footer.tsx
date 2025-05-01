import { ImGithub } from 'react-icons/im'
import { TfiLinkedin } from 'react-icons/tfi'

const navigation = [
  { name: 'LinkedIn', href: '/', icon: TfiLinkedin },
  { name: 'GitHub', href: '/', icon: ImGithub }
]

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto max-w-3xl'>
        <div className='md:items-left flex flex-col gap-4'>
          <div>
            <p className='text-l mt-8 text-gray-400 md:mt-0'>
              Developed by me, Felipe, in Vancouver &#9786;
            </p>
          </div>
          <div className='flex items-center space-x-6'>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
