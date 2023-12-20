import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF,FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import profilePic from '../assets/profilePic.jpg';
import { Element } from 'react-scroll';


const Hero = () => {
  return (
    <>
    <Element name='main'>
    <div className="w-full sm:h-[500px] h-[500px] bg-gray-100 font-body" id='main'>
        
        <div className="bg-blue-500 w-full h-full flex sm:flex-row flex-col-reverse justify-center items-center">
          <div className='sm:w-1/2 w-full px-2 sm:h-3/5 h-2/5 flex flex-col sm:items-end items-center justify-center'>
              <h1 className='font-bold text-gray-200 md:text-5xl text-4xl'>
                I'm Samuel Nduw
              </h1>
              <h2 className='flex md:text-3xl text-2xl pt-4 text-gray-800'>
                I'm a 
                <TypeAnimation 
                  sequence={[
                    'Developer',
                    1000,
                    'Coder',
                    2000,
                    'Software Engineer',
                    2000
                    
                  ]}
                  wrapper='div'
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', paddingLeft: '5px'}}
                />
              </h2>
              <div className='w-full mt-2 flex gap-5 justify-center'>
                  <FaGithub fill='white' size={25} className='shadow-gray-100 hover:scale-105 ease-in duration-150 cursor-pointer'/>
                  <FaLinkedinIn fill='white' size={25} className='shadow-gray-100 hover:scale-105 ease-in duration-150 cursor-pointer'/>
                  <FaTwitter fill='white' size={25} className='shadow-gray-100 hover:scale-105 ease-in duration-150 cursor-pointer'/>
              </div>
          </div>
          <div className='sm:w-1/2 w-full sm:h-4/5 h-2/5 px-2 flex justify-center items-center'>
            
              <img src={profilePic} alt="Profile Picture"  className='object-cover sm:h-96 sm:w-96 h-48 w-48 rounded-full'/>
            
          </div>
          
        </div>
    </div>
    </Element>
    </>
  )
}

export default Hero