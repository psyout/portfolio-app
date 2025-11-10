import React, { ReactNode } from 'react'

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      My name is <span className='signature font-bold'>Felipe</span>, and I am a{' '}
      <span className='signature font-bold'>Full Stack Developer</span> with a background in web
      design and a passion for building user-focused, scalable web and mobile applications. I was
      excited to come across the{' '}
      <span className='signature font-bold'>Senior Full Stack Developer</span> position at{' '}
      <span className='signature font-bold'>O2E Brands</span>. As a current team member at{' '}
      <span className='signature font-bold'>1-800-GOT-JUNK?</span>, I’ve had firsthand experience
      using the digital tools O2E develops to support daily operations and I’m eager to contribute
      to building and improving those platforms from the development side.
   </>,
   <>
      I built <span className='signature font-bold'>VanSippy</span>, a full-stack web app using the
      MERN stack (MongoDB, Express, React, Node.js), where I designed the architecture, implemented
      RESTful APIs, and deployed it to the web (now extending it to mobile). With a background in
      web design, I bring an eye for clean UI and strong user experience, complemented by solid
      technical skills in full-stack development, API design, and performance optimization. I’m also
      expanding my knowledge of CI/CD pipelines, Docker, and cloud services, and I’m eager to
      continue growing within O2E’s innovative environment.
   </>,
   <>
      I believe my passion for both UX/UI design and web development gives me a unique perspective
      on how technology can enhance user experience. I’m a self-driven, detail-oriented thinker with
      strong problem-solving skills and a commitment to delivering high-quality, maintainable code.
      While I may not yet hold a senior title, I’m fully committed to doing whatever it takes to
      grow into one continuously learning, refining my craft, and contributing real value through
      creativity, curiosity, and hard work.
   </>,
   <>
      What excites me most about this role is the opportunity to combine my{' '}
      <span className='signature font-bold'>hands-on experience using O2E’s products</span> with my{' '}
      <span className='signature font-bold'>technical expertise</span> to enhance the systems that
      support teams like mine in the field. I’m inspired by O2E’s culture of collaboration and
      innovation, and I would be proud to contribute to the company’s digital growth.
   </>,
   <>
      Thank you for your time and consideration. I look forward to the opportunity to discuss how my
      experience, dedication, and perspective can add value to your team.
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
