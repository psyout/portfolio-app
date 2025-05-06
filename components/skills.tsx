import React from 'react'

import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaWordpressSimple,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa6'
import { SiNextdotjs, SiExpress, SiTailwindcss } from 'react-icons/si'
import { BsFiletypeJson } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa6'

const SkillsIcon = [
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNodeJs,
  SiExpress,
  BsFiletypeJson,
  FaWordpressSimple,
  FaGitAlt,
  FaFigma
]

const Skills = () => {
  return (
    <section className='ml-auto w-full py-24'>
      <h1 className='title font-extrabold'>What I can do</h1>

      <div className='mt-10 flex flex-col gap-8'>
        {/* Text Section */}
        <div className='text flex flex-col gap-5 text-lg font-light'>
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
            <span className='font-bold'>Figma, Photoshop</span> and
            <span className='font-bold'> Illustrator</span>.
          </p>
        </div>

        {/* Icons Section */}
        <div>
          <ul className='sm:grid-col-4 grid grid-cols-4 gap-6 text-5xl sm:grid-cols-6 sm:text-5xl md:grid-cols-5 lg:grid-cols-6'>
            {SkillsIcon.map((Icon, index) => (
              <li
                key={index}
                className='transform text-center text-[color:var(--iconColor)] transition-colors duration-300 hover:text-[#81e6d9]'
              >
                <Icon />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
