import React from 'react'
 import search from './search.png'
 import user from './user.png'
 import cycle from './cycle.png'
function Firstpage() {
  return (
    <div className='bg-[#1B5F3A] shadow-2xl shadow-[black] py-[1rem] md:py-[0rem] h-auto'>
<div className="text-[#E1E1E1]   md:flex justify-between gap-[4px] mx-auto w-[95%] py-[1rem] text-center items-center">
    <p className=' text-[1.7rem] lg:text-[2rem] font-[Merriweather] hover:shadow-2xl hover:shadow-[black]'>Trash to Treasure</p>
    <div className='md:flex lg:justify-between text-center items-center  text-[#ACACAC] gap-[5rem] '>
    <p className='hover:text-[white]  hover:cursor-pointer '>Home</p>
    <p className='hover:text-[white] hover:cursor-pointer '>About us</p>
    <p className='hover:text-[white] hover:cursor-pointer '>Contact Us</p>
    <p className='hover:text-[white] hover:cursor-pointer '>Login / Sign Up</p>
    </div>
    <div className='hidden hover:cursor-pointer md:flex justify-between gap-[14px] '>
    <img src={search} alt=""  className='w-[1.5rem] h-[1.5rem]'/>
    <img src={user} alt="" className='w-[1.5rem] h-[1.5rem]' />
    </div>
  </div>

<div className='md:flex'>

<div className='w-[90%] shadow-2xl shadow-[black] mx-auto py-[-1rem] md:py-[3rem]  lg:w-[60%] px-[3rem] lg:py-[8rem]'>
<p className='text-[2rem] md:text-[4rem] text-[white]'>Don't trash it, recycle your e-waste and make a difference</p>
</div>
<div className='py-[-1rem] md:py-[4rem] flex justify-center items-center '>
<img src={cycle} alt=""  className='w-[20rem] h-[20rem] lg:w-[28rem] lg:h-[28rem]'/>
</div>


</div>


    </div>
    
  )
}

export default Firstpage