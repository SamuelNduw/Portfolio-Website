import {React} from 'react';
import {Fade} from 'react-awesome-reveal';

const ProjectItem = ({children, img, title, codeURL, pageLink}) => {


  return (
            <>
            <Fade cascade={false} delay={400} direction='up' triggerOnce={true}>
                <div className='px-2 h-full flex justify-center items-center'>
                    <div className='bg-slate-800 max-w-md  w-full '>
                        <div className='bg-slate-800 w-full max-h-56 shadow-md shadow-gray-400 overflow-hidden '>
                            <img src={img} className='w-full hover:scale-105 ease-in-out duration-300 object-contain'/>
                        </div>
                        <div className='bg-slate-800 w-full h-2/5 shadow-md shadow-gray-400 flex flex-col pb-5'>
                            <div className='w-full  h-1/3 py-2'>
                                <h1 className='text-2xl pl-5 text-white'>{title}</h1>
                            </div>
                            <div className='w-full  h-1/3 flex justify-start pl-5 gap-5'>
                                {children}
                            </div>
                            <div className='w-full  h-1/3 flex  justify-around pt-5'>
                                {
                                    codeURL ?
                                    <button className=' bg-blue-700 px-4 py-2 xs:w-36 w-24 text-white capitalize text-base'>
                                        <a href={codeURL} target="_blank" rel="noopener noreferrer">CODE</a>
                                    </button> :
                                    null
                                }
                                {
                                    pageLink ?
                                    <button className='capitalize bg-gray-300 px-4 py-2 xs:w-36 w-24'>
                                        <a href={pageLink} target='_blank'>VIEW</a>
                                    </button> :
                                    null
                                }
                            </div>
                            
                        </div>
                    </div>  
                </div>
                </Fade>
            </>
  )
}

export default ProjectItem