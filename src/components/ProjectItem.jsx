import {React, useState} from 'react';

const ProjectItem = ({img, title, lang1, lang2, lang3}) => {

    const [language, setLanguage] = useState(null);
    

  return (
                <div className='px-2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 sm:w-[450px] lg:h-auto lg:max-w-2xl max-w-none  w-full h-auto'>
                        <div className='bg-slate-800 w-full h-3/5 shadow-md shadow-gray-400 overflow-hidden '>
                            <img src={img} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>{title}</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5'>
                                <FaJava size={30} fill='red' className='shadow-gray-800'/>
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white capitalize text-base'>
                                    CODE
                                </button>
                                <button className='capitalize bg-gray-300 px-4 py-2 xs:w-36 w-24 hidden'>
                                    LINK
                                </button>
                            </div>
                            
                        </div>
                    </div>  
                </div>
  )
}

export default ProjectItem