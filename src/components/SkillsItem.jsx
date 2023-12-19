import React from 'react'

const SkillsItem = ({icon, title}) => {
  return (
        <div className='sm:w-48 xs:w-36 w-28 bg-white shadow-gray-200 h-48 flex flex-col justify-center items-center'>
            {icon}
            <span>{title}</span>
        </div>
  )
}

export default SkillsItem