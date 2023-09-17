import React from 'react'
 import search from './search.png'
 import user from './user.png'
 import cycle from './cycle.png'
function Firstpage() {
  return (
    <div className='bg-[#1B5F3A] shadow-4xl shadow-black h-[100vh]'>
<div className="text-[#E1E1E1]  flex justify-between gap-[4px] mx-auto w-[95%] py-[1rem] text-center items-center">
    <p className=' text-[2rem] font-[Merriweather]'>Trash to Treasure</p>
    <div className='flex justify-between text-center items-center text-[#ACACAC] gap-[5rem] '>
    <p className=''>Home</p>
    <p className=''>About us</p>
    <p className=''>Contact Us</p>
    <p className=''>Login / Sign Up</p>
    </div>
    <div className='flex justify-between gap-[14px] '>
    <img src={search} alt=""  className='w-[1.5rem] h-[1.5rem]'/>
    <img src={user} alt="" className='w-[1.5rem] h-[1.5rem]' />
    </div>
  </div>

<div className='flex'>

<div className='w-[60%] px-[3rem] py-[8rem]'>
<p className='text-[4rem] text-[white]'>Don't trash it, recycle your e-waste and make a difference</p>
</div>
<div className='py-[4rem]'>
<img src={cycle} alt=""  className='w-[28rem] h-[28rem]'/>
</div>


</div>


    </div>
    
  )
}

export default Firstpage