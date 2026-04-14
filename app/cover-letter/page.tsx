import React, { ReactNode } from 'react'

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      My name is <span className='signature font-bold'>Felipe</span>, and I am a{' '}
      <span className='signature font-bold'>
         Frontend Developer with a background in web design
      </span>
      . I am interested in the <span className='signature font-bold'>Web Developer (Liquid)</span>{' '}
      role at <span className='signature font-bold'>Versapay</span>, as it combines frontend
      development with problem solving and client interaction.
   </>,
   <>
      I do not have a formal Computer Science degree, but I bring several years of hands-on
      experience with HTML and CSS, along with over three years working as a developer. My
      background in design helps me build solutions that are both practical and user-focused.
   </>,
   <>
      In my freelance work, I build and customize web interfaces using HTML, CSS, and JavaScript,
      integrating APIs and dynamic data. I regularly troubleshoot issues and work directly with
      clients to deliver clear, reliable solutions.
   </>,
   <>
      Previously, I worked at <span className='signature font-bold'>1-800-GOT-JUNK?</span>, where I
      developed strong communication and problem-solving skills by working directly with customers
      in fast-paced situations. This experience shapes how I approach development today.
   </>,
   <>
      I have also built projects like <span className='signature font-bold'>VanSippy</span>, a
      data-driven app with filtering, maps, and API integration. I have basic experience with
      Shopify and Liquid templating, and I recently completed an online Shopify course focused on
      template and app development. I can quickly grow in this area.
   </>,
   <>
      I’m comfortable working in team environments, using Git and Agile workflows, and writing
      clean, maintainable code. I’m especially interested in roles where I can solve problems and
      keep improving my frontend skills.
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
