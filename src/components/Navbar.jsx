import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

function Navbar() {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log("You have clicked the button")
  }
  return (
    <div className='font-body'>
        <AiOutlineMenu onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden" />
        {
          nav ? (
              <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                <a onClick={handleNav} href="#main" className="w-[45%] flex justify-center items-center rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150">
                  <AiOutlineHome size={20} />
                  <span className="pl-4">HOME</span>
                </a>
                <a onClick={handleNav} href="#projects" className="w-[45%] flex justify-center items-center rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150">
                  <GrProjects size={20} />
                  <span className="pl-4">PROJECTS</span>
                </a>
                <a onClick={handleNav} href="#skills" className="w-[45%] flex justify-center items-center rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150">
                  <AiOutlineProject size={20} />
                  <span className="pl-4">SKILLS</span>
                </a>
                <a onClick={handleNav} href="#contact" className="w-[45%] flex justify-center items-center rounded-lg font-medium shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-150">
                  <AiOutlineMail size={20} />
                  <span className="pl-4">CONTACT</span>
                </a>
              </div>
          ) 
          : (
            ' '
          )
        }

        <div className='md:block hidden fixed top-[20%] z-10'> 
            <div className='flex flex-col ml-2 group'>
              <a href="#main" className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineHome  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  HOME
                </span>
              </a>
              <a href="#projects" className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <GrProjects  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  PROJECTS
                </span>
              </a>
              <a href="#skills" className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineProject  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  SKILLS
                </span>
              </a>
              {/* <a href="#resume" className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <BsPerson  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>

                </span>
              </a> */}
              <a href="#mail" className='flex rounded-lg shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 opacity-50 hover:opacity-100'>
                <AiOutlineMail  size={20}/>
                <span className='hidden group-hover:block px-2 font-medium'>
                  CONTACT
                </span>
              </a>
            </div>
        </div>

    </div>
  )
}

export default Navbar