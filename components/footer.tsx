import Social from './ui/social'

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto max-w-6xl border-t-1'>
        <div className='md:items-left mt-10 flex flex-col gap-4'>
          <div>
            <p className='text-l text md:mt-0'>
              Developed by me, Felipe, in Vancouver &#9786;
            </p>
          </div>
          <Social
            backgroundColor='bg-neutral-400'
            color='font-color'
            hoverBackgroundColor='hover:bg-neutral-500'
            hoverColor='hover:text-white'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
