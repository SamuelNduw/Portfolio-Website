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
            I am a software engineer with a strong proficiency in Python and React JS. I am currently in my third year of Computer Science at university, where I am constantly expanding my knowledge and skills in programming.
            <br /> <br />
            I enjoy building web apps using React and Django Rest Framework.
            With great interest in AI, I have developed projects that leverage closed and open source AI models, though Ollama and APIs.
            <br /> <br />
            My aim is to become an AI engineer and/or researcher.
            </p>
          </Fade>
        </div>

    </div>
    </Element>
  )
}

export default About