import React from 'react'

import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaWordpressSimple,
  FaSass,
  FaNode,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa6'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { BsFiletypeJson } from 'react-icons/bs'

const SkillsIcon = [
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  SiNextdotjs,
  FaSass,
  FaNode,
  SiExpress,
  FaWordpressSimple,
  FaGitAlt,
  BsFiletypeJson,
  FaFigma
]

const Skills = () => {
  return (
    <section className='container w-full max-w-none py-24'>
      <h1 className='title font-extrabold'>What I can do</h1>
      <div className='mt-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
        {/* Icons Section */}
        <div className='py-6'>
          <ul className='grid grid-cols-4 gap-6 text-6xl sm:grid-cols-4'>
            {SkillsIcon.map((Icon, index) => (
              <li
                key={index}
                className='icon-color transform text-center transition-transform duration-300 hover:scale-110'
              >
                <Icon />
              </li>
            ))}
          </ul>
        </div>

        {/* Text Section */}
        <div className='text flex flex-col gap-5 text-lg lg:text-right'>
          <p>
            Proficient across front end languages such as{' '}
            <span className='font-bold'>HTML, CSS, JavaScript & React</span> as
            well as Back-End experience using{' '}
            <span className='font-bold'>Axios</span> and{' '}
            <span className='font-bold'> NodeJS.</span>
          </p>
          <p>
            Alongside my development skills, I am also very experienced with a
            broad range of design software such as{' '}
            <span className='font-bold'>Figma, Sketch</span> and
            <span className='font-bold'> Adobe XD</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
