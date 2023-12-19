import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <div className='w-full bg-slate-500 font-body' id='skills'>

        <div className='w-full pl-16 pt-10'>
            <h1 className='font-semibold text-5xl text-white'>
                Skills
            </h1>
        </div>

        <section className='w-full  flex justify-center items-start py-10 '>
            <div className='sm:w-4/5 w-11/12   grid place-items-center md:grid-cols-3 grid-cols-2  gap-y-16'>
                <SkillsItem icon={<FaReact size={100} fill='#38BDF8'/>} title='REACT JS'/>
                <SkillsItem icon={<SiTailwindcss size={100} fill='#38BDF8'/>} title='TAILWIND CSS'/>
                <SkillsItem icon={<FaPython size={100} fill='#ffde57'/>} title='PYTHON'/>
                <SkillsItem icon={<SiMysql size={100} />} title='MYSQL'/>
                <SkillsItem icon={<DiMsqlServer size={100} />} title='SSMS'/>
                <SkillsItem icon={<FaJava size={100} fill='red'/>} title='JAVA'/>
            </div>
        </section>

    </div>
  )
}

export default Skills