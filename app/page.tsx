import React from 'react'
import Intro from '@/components/intro'
import Anchor from '@/components/ui/anchor'
import Contact from './contact/page'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <section className='py-10'>
      <div className='container mx-auto max-w-5xl'>
        <Intro />
        <Anchor
          links={[
            { href: '#', label: 'Work' },
            { href: './about', label: 'About' },
            { href: './contact', label: 'Contact' }
          ]}
        />
        <Skills />
        <Contact />
      </div>
    </section>
  )
}
