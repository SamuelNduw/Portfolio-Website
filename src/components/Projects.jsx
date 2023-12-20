import React from 'react';
import Coding from '../assets/workspace _ man, guy, person, desk, table, furniture, laptop, computer, sheld, speakers.png';
import GamingSite from '../assets/Screenshot 2023-12-15 210035.png';
import SafariSite from '../assets/Screenshot 2023-12-15 210309.png';
import SchoolSite from '../assets/Screenshot 2023-12-15 210645.png';
import ClassRoomManagement from '../assets/Screenshot 2023-10-23 061654.png';
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';


const Projects = () => {
  return (
    <Element name='projects'>
    <div className='w-full  bg-[#e4e4e4] font-body' id='projects'>
        
        <div>
            <Fade triggerOnce={true}>
            <div className='w-full md:pl-20 pl-16 pt-10'>
                <h1 className='font-semibold text-5xl'>
                    Projects
                </h1>
            </div>
            </Fade>
            
            <Fade triggerOnce={true}>
            <div className='w-full h-[500px] mt-5 flex flex-row-reverse'>
                {/* first card */}
                <div className='px-2 w-full md:w-1/2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 sm:w-[450px] lg:h-auto lg:max-w-2xl max-w-none  w-full h-auto'>
                        <div className='bg-slate-800 w-full h-3/5 shadow-md shadow-gray-400 overflow-hidden '>
                            <img src={GamingSite} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>Games Store</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5 py-2'>
                                <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                                <FaCss3Alt size={30} fill='#264de4' />
                                <FaHtml5 size={30} fill='#f06529' />
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white capitalize'>
                                    <a href="https://github.com/SamuelNduw/my-first-project" target='_blank'>CODE</a>
                                </button>
                                <button className='capitalize bg-gray-300 px-4 py-2 xs:w-36 w-24'>
                                    <a href="https://samuelnduw.github.io/my-first-project/index.html" target='_blank'>LINK</a>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                {/* illutstration */}
                <div className='w-0 md:w-1/2 h-full flex justify-center items-center'>
                    <img src={Coding} alt="" className='w-96 h-96 transform -scale-x-100 hidden md:block'/>
                </div>
            </div>
            </Fade>
            

            
            <div className='w-full pb-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-0 gap-14'>

                {/* second card */}
                <Fade cascade={false} delay={200} direction='up' triggerOnce={true}>
                <div className='px-2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 sm:w-[450px] lg:h-auto lg:max-w-2xl max-w-none  w-full h-auto'>
                        <div className='bg-slate-800 w-full h-3/5 shadow-md shadow-gray-400 overflow-hidden '>
                            <img src={SafariSite} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>Safari Agency</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5'>
                                <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                                <SiTailwindcss size={30} fill='#38BDF8' />
                                <FaHtml5 size={30} fill='#f06529' />
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white capitalize text-base'>
                                    <a href="https://github.com/SamuelNduw/Safari-Agency-1" target="_blank" >CODE</a>
                                </button>
                                <button className='capitalize bg-gray-300 px-4 py-2 xs:w-36 w-24'>
                                    <a href="https://sammy-safari-agency.netlify.app/" target="_blank">LINK</a>
                                </button>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                </Fade>
                {/* third card */}
                <Fade cascade={false} delay={300} direction='up' triggerOnce={true}>
                <div className='px-2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 sm:w-[450px] lg:h-auto lg:max-w-2xl max-w-none  w-full h-auto'>
                        <div className='bg-slate-800 w-full h-3/5 shadow-md shadow-gray-400 overflow-hidden'>
                            <img src={SchoolSite} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>Friendly Private School</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5'>
                                <FaReact size={30} fill='#38BDF8' className='shadow-gray-800'/>
                                <SiTailwindcss size={30} fill='#38BDF8' />
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white  capitalize text-base'>
                                    <a href="https://github.com/Friendly-Private-School/fps-web" target="_blank" >CODE</a>
                                </button>
                                <button className='capitalize bg-gray-300 text-black px-4 py-2 xs:w-36 w-24  '>
                                    <a href="https://friendlyprivateschool.org/" target="_blank">LINK</a>
                                </button>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                </Fade>
                {/* fourth card */}
                <Fade cascade={false} delay={400} direction='up' triggerOnce={true}>
                <div className='px-2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 sm:w-[450px] lg:h-auto lg:max-w-2xl max-w-none  w-full h-auto'>
                        <div className='bg-slate-800 w-full h-3/5 shadow-md shadow-gray-400 overflow-hidden '>
                            <img src={ClassRoomManagement} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>Classroom Management</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5'>
                                <FaJava size={30} fill='red' className='shadow-gray-800'/>
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white capitalize text-base'>
                                    <a href="https://github.com/SamuelNduw/Classroom_Management_System" target="_blank" >CODE</a>
                                </button>
                                <button className='capitalize bg-gray-300 px-4 py-2 xs:w-36 w-24 hidden'>
                                    <a href="" target="_blank">LINK</a>
                                </button>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                </Fade>

            </div>
            
        </div>
        
    </div>
    </Element>
    
  )
}

export default Projects