import React from 'react';
import GamingSite from '../assets/gamingSite.png';
import SafariSite from '../assets/safariSite.png';
import SchoolSite from '../assets/schoolSite.png';
import AirlineRes from '../assets/airlineRes.png';
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaJs} from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from 'react-icons/si';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

import ProjectItem from './ProjectItem';


function child1(){
    return <FaHtml5 size={30} fill='red' className='shadow-gray-800'/>
}

const Projects = () => {

    const iconsCard1 = [child1]

  return (
    <Element name='projects'>
    <div className='w-full  bg-[#e4e4e4] font-body' id='projects'>
        
        <div>
            <Fade triggerOnce={true}>
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16 md:pb-16 pb-2'>
                <h1 className='font-semibold text-5xl'>
                    Projects
                </h1>
            </div>
            </Fade>
            
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center pb-16'>
                {/* first card */}
                <ProjectItem  img={GamingSite} title="Gaming Store" codeURL="https://github.com/SamuelNduw/my-first-project" pageLink="https://samuel-my-first-website.netlify.app">
                    <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                    <FaCss3Alt size={30} fill='#264de4' />
                    <FaHtml5 size={30} fill='#f06529' />
                </ProjectItem>
                {/* second card */}
                <ProjectItem  img={SafariSite} title="Safari Agency" codeURL="https://github.com/SamuelNduw/Safari-Agency-1" pageLink="https://sammy-safari-agency.netlify.app/">
                    <FaJs size={30} fill='#f0db4f' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                    <FaHtml5 size={30} fill='#f06529' />                    
                </ProjectItem>
                {/* third card */}
                <ProjectItem img={SchoolSite} title="Friendly Private School" codeURL="https://github.com/Friendly-Private-School/fps-web" pageLink="https://friendlyprivateschool.org/">
                    <FaReact size={30} fill='#38BDF8' className='shadow-gray-800'/>
                    <SiTailwindcss size={30} fill='#38BDF8' />
                </ProjectItem>
                {/* fourth card */}
                <ProjectItem img={AirlineRes} title="Airline Seat Reservation" codeURL="https://github.com/SamuelNduw/AirlineSeatReservationSystem" pageLink="">
                    <FaJava size={30} fill='red' className='shadow-gray-800'/>
                    <SiMysql size={30} fill='white' className='shadow-gray-800'/>
                </ProjectItem>

            </div>

            {/* testing */}
            
        </div>
        
    </div>
    </Element>
    
  )
}

export default Projects