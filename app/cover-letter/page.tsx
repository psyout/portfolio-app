import React, { ReactNode } from 'react'

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      My name is <span className='signature font-bold'>Felipe</span>, and I am a{' '}
      <span className='signature font-bold'>
         Web Developer with a strong background in UI design
      </span>
      . I was excited to come across the{' '}
      <span className='signature font-bold'>Web Experience Designer</span> role at{' '}
      <span className='signature font-bold'>O2E Brands</span>. As a current team member at{' '}
      <span className='signature font-bold'>1-800-GOT-JUNK?</span>, I already use the digital
      experiences your team creates, which gives me a unique perspective on how these tools support
      real users in day-to-day operations.
   </>,
   <>
      My experience sits at the intersection of design and implementation. I have a background in
      web design, where I create high-fidelity mockups in tools like Figma, and I bring those
      designs to life using modern front-end technologies such as React, HTML, and CSS. I understand
      how to structure clean, reusable components and build responsive interfaces that are both
      visually consistent and functional.
   </>,
   <>
      I recently built <span className='signature font-bold'>VanSippy</span>, a full-stack web
      application where I handled both the UI design and development. This strengthened my ability
      to think not just about how a page looks, but how it performs, scales, and supports user
      interaction. While my implementation has been mostly in code, I’m very interested in applying
      the same structured approach to tools like Webflow, treating it as a visual development
      platform rather than just a design tool.
   </>,
   <>
      I’m comfortable collaborating with cross-functional teams and working from briefs to deliver
      polished, user-focused solutions. I value feedback, pay attention to detail, and aim to create
      clean, consistent experiences that align with both user needs and business goals.
   </>,
   <>
      I want to be transparent that I am continuing to grow my experience with Webflow specifically,
      but I bring a strong foundation in layout systems, responsive design, and front-end logic that
      allows me to learn quickly and contribute effectively. I’m especially interested in building
      reusable components and improving design consistency across platforms.
   </>,
   <>
      What excites me most about this role is the opportunity to work closely with design,
      marketing, and development teams to build real, user-facing experiences, and to continue
      growing in UX, accessibility, and design systems within O2E’s collaborative environment.
   </>,
   <>
      Thank you for your time and consideration. I would welcome the opportunity to contribute to
      your team and continue developing my skills in this space.
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
