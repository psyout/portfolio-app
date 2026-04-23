import React, { ReactNode } from 'react'

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      My name is <span className='signature font-bold'>Felipe</span>, and I am a{' '}
      <span className='signature font-bold'>
         Frontend / Full-Stack Developer with a background in web design
      </span>
      . I am interested in the <span className='signature font-bold'>Senior Web Developer</span>{' '}
      role at <span className='signature font-bold'>O2E Brands</span>.
   </>,
   <>
      In my freelance work, I build web applications using React, Next.js, and Node.js, delivering
      features end-to-end from planning to deployment. I have experience building data-driven
      interfaces with filtering, mapping, and real-time UI updates, with a strong focus on
      performance and usability.
   </>,
   <>
      My background in web and UI design helps me approach development with a strong focus on how
      users interact with a product. I care about building interfaces that are clear, fast, and easy
      to use.
   </>,
   <>
      I want to be transparent that my experience with{' '}
      <span className='signature font-bold'>Webflow</span> is still at a basic level. However, I am
      very comfortable with component-based systems and structured frontend architecture, and I am
      confident I can ramp up quickly.
   </>,
   <>
      I am especially interested in this role because of the focus on using the website as a growth
      tool. I enjoy working on problems that sit between design, engineering, and real business
      impact.
   </>,
   <>
      Previously, I worked at <span className='signature font-bold'>1-800-GOT-JUNK?</span>, where I
      developed strong communication and problem-solving skills while working directly with
      customers in fast-paced situations. This experience helps me think beyond code when building
      products.
   </>,
   <>
      Thank you for your time and consideration. I would welcome the opportunity to contribute to
      your team.
   </>,
   <>
      <span className='signature mt-6 font-bold'>
         Sincerely,
         <br />
         Felipe Gonzalez
      </span>
   </>
]

const CoverLetter: React.FC = () => (
   <div className='bg-background text mt-10 flex min-h-screen flex-col'>
      <header className='font-primary align text-color flex items-center justify-center'>
         <h1 className='m-0 text-3xl font-bold tracking-wide'>Cover Letter</h1>
      </header>
      <main className='text mx-auto mt-8 mb-8 max-w-2xl flex-1 rounded-2xl'>
         {paragraphs.map((text, idx) => (
            <p key={idx} className='mb-6 leading-relaxed'>
               {text}
            </p>
         ))}
      </main>
   </div>
)

export default CoverLetter
