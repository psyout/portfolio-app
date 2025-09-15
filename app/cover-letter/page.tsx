import React, { ReactNode } from 'react'

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      I&apos;m excited to apply for the{' '}
      <span className='signature font-bold'>Junior Software Engineer</span> position at{' '}
      <span className='signature font-bold'>WOW 1 DAY PAINTING</span>. With over four years of
      experience building responsive, user-focused web applications using HTML, CSS, JavaScript and
      React, I have a strong foundation in front-end development and full-stack project work.
   </>,
   <>
      As the founder and developer of <span className='signature font-bold'>VanSippy</span>, a
      Full-Stack web app built with the MERN stack, I designed and implemented dynamic API calls,
      managed MongoDB databases, and deployed the application through web hosting. This experience
      has strengthened my understanding of application architecture, feature development and
      collaborating with design-focused workflows.
   </>,
   <>
      What excites me even more about this role is that WOW 1 DAY PAINTING is part of the same group
      as <span className='signature font-bold'>1-800-GOT-JUNK</span>, whose apps I&apos;ve used
      extensively in my daily work. This gives me a unique perspective on the user experience,
      workflows, and opportunities for improvement, allowing me to contribute not only as a
      developer but also with practical insights that can enhance the application&apos;s
      functionality and usability.
   </>,
   <>
      I&apos;m particularly drawn to this role because of the opportunity to contribute to a
      greenfield Next.js application. I have experience with React and JavaScript and am eager to
      expand my skills in TypeScript, Next.js, and cloud-based development. I thrive in fast-paced,
      collaborative environments, enjoy learning from experienced team members and I&apos;m
      committed to writing clean, maintainable code that aligns with best practices.
   </>,
   <>
      I would love the chance to bring my experience, curiosity, and unique user perspective to WOW
      1 DAY PAINTING and help build high-quality software from the ground up.
   </>,
   <>
      Thank you for considering my application. I look forward to the opportunity to discuss how I
      can support your team.
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
         <h1 className='m-0 text-3xl font-bold tracking-wide drop-shadow'>Cover Letter</h1>
      </header>
      <main className='text rounded-2xl\\ mx-auto mt-8 mb-8 max-w-2xl flex-1'>
         {paragraphs.map((text, idx) => (
            <p key={idx} className='mb-6 leading-relaxed'>
               {text}
            </p>
         ))}
      </main>
   </div>
)

export default CoverLetter
