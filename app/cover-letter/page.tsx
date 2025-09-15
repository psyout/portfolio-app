import React, { ReactNode } from 'react'

const styles = {
   body: {
      fontFamily: 'system-ui, Arial, sans-serif',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh',
      color: 'var(--text-color)'
   } as React.CSSProperties,
   header: {
      color: 'white',
      padding: '2rem',
      textAlign: 'center' as const,
      borderBottomLeftRadius: '2rem',
      borderBottomRightRadius: '2rem'
   } as React.CSSProperties,
   main: {
      padding: '2rem 3rem',
      lineHeight: 1.6,
      maxWidth: 800,
      margin: '2rem auto'
   } as React.CSSProperties,
   footer: {
      background: 'linear-gradient(90deg, #232946 0%, #6a7efc 100%)',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center' as const,
      borderTopLeftRadius: '1.2rem',
      borderTopRightRadius: '1.2rem'
   } as React.CSSProperties,
   h1: {
      margin: 0,
      fontSize: '2.2rem',
      color: 'var(--text-color)',
      fontWeight: 'bold',
      letterSpacing: '0.04em',
      textShadow: '0 2px 8px rgba(0,0,0,0.08)'
   } as React.CSSProperties,
   paragraph: {
      marginBottom: '1.5rem'
   } as React.CSSProperties,
   bold: {
      color: 'var(--span)',
      fontWeight: 'bold'
   } as React.CSSProperties,
   signature: {
      fontWeight: 700,
      fontSize: '1.1rem',
      color: 'var(--span)',
      marginTop: '1.5rem',
      letterSpacing: '0.03em'
   } as React.CSSProperties
}

const paragraphs: ReactNode[] = [
   'Dear Hiring Manager,',
   <>
      I’m excited to apply for the <span style={styles.bold}>Junior Software Engineer</span>{' '}
      position at <span style={styles.bold}>WOW 1 DAY PAINTING</span>. With over four years of
      experience building responsive, user-focused web applications using HTML, CSS, JavaScript and
      React, I have a strong foundation in front-end development and full-stack project work.
   </>,
   <>
      As the founder and developer of <span style={styles.bold}>VanSippy</span>, a Full-Stack web
      app built with the MERN stack, I designed and implemented dynamic API calls, managed MongoDB
      databases, and deployed the application through web hosting. This experience has strengthened
      my understanding of application architecture, feature development and collaborating with
      design-focused workflows.
   </>,
   <>
      What excites me even more about this role is that WOW 1 DAY PAINTING is part of the same group
      as <span style={styles.bold}>1-800-GOT-JUNK</span>, whose apps I’ve used extensively in my
      daily work. This gives me a unique perspective on the user experience, workflows, and
      opportunities for improvement, allowing me to contribute not only as a developer but also with
      practical insights that can enhance the application’s functionality and usability.
   </>,
   <>
      I’m particularly drawn to this role because of the opportunity to contribute to a greenfield
      Next.js application. I have experience with React and JavaScript and am eager to expand my
      skills in TypeScript, Next.js, and cloud-based development. I thrive in fast-paced,
      collaborative environments, enjoy learning from experienced team members and I'm committed to
      writing clean, maintainable code that aligns with best practices.
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
      <span style={styles.signature}>
         Sincerely,
         <br />
         Felipe Gonzalez
      </span>
   </>
]

const CoverLetter: React.FC = () => (
   <div style={styles.body}>
      <header style={styles.header}>
         <h1 style={styles.h1}>Cover Letter</h1>
      </header>
      <main style={styles.main}>
         {paragraphs.map((text, idx) => (
            <p key={idx} style={styles.paragraph}>
               {text}
            </p>
         ))}
      </main>
   </div>
)

export default CoverLetter
