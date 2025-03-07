import React from 'react';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Element name='about'>
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-body'>
      <Fade direction='left' triggerOnce={true}>
        <h1 className='text-5xl font-semibold'>
            About
        </h1>
      </Fade>

        <div className='w-4/5 py-12'>
          <Fade triggerOnce={true}>
            <p>
            I am a web developer and software engineer with a strong proficiency in HTML, CSS, and JavaScript. I am currently in my third year of Computer Science at university, where I am constantly expanding my knowledge and skills in programming and software development.
            <br /> <br />
            I am proficient in Python, React JS, and Java with experience using SSMS and MySQL.

            My skills enable me to develop a wide range of applications, including complex and dynamic web applications and efficient desktop applications.
            </p>
          </Fade>
        </div>

    </div>
    </Element>
  )
}

export default About