import React from 'react'
import {FaMoon,FaSun} from 'react-icons/fa'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {MdSpaceDashboard} from 'react-icons/md'
const Header = ({darkMode}) => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b 
     border-gray-200 dark:bg-gray-800 dark:bg-gray-700'>
      
<div className='px-3 py-3 lg:px-5 lg: pl-3'>
  <div className='flex items-center justify-between'>
    <div className='flex items-center justify-start rtl:justify-end'>
      <button ><HiOutlineMenuAlt2 className='text-2xl' /></button>
      <a href="#" className='flex ms-3 md:me-24'>
<MdSpaceDashboard className="h-8 text-xl  me-3 text-violet-500 " />
<span className='text-xl self-center font-semibold 
sm:text-2xl whitespace-nowrap dark:text-white '>ECC-ILS</span>
      </a>
    </div>
    <button>
      {darkMode ? <FaSun /> : 
      <FaMoon  />}</button>
  </div>
  
</div>

    </nav>
  )
}

export default Header