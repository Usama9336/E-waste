
import React from 'react'
import tree from './tree.png'
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import gift from './gift.png'
import recycle from './recycle.png'
import hand from './plant.png'
import 'swiper/css/effect-cards';
import { useRef, useState } from 'react';

 import { EffectCards } from 'swiper/modules';

function Aboutus() {
  return (
    <div className='bg-[#c8c8c8] h-auto py-[1rem]'>
      <p className='text-[2rem] md:text-[3rem] text-[#2E2E2E] py-[1rem] px-[5rem]'>
        About Us

      </p>
      <div className='flex justify-between h-[45%] my-auto '>
        <div className='md:w-[60%] w-[150%] md:px-[3rem] px-[1rem] my-[2rem]'>
      <p className='md:text-[1.2rem]  shadow-2xl shadow-[black] p-[1rem] md:p-[3rem] lg:text-[1.4rem] xl:text-[1.5rem] text-[#303030]'>
      We're the link between e-waste recycling companies and eco-conscious consumers. Our platform connects clients with trusted recycling partners, streamlining the recycling process and offering rewards for sustainable choices
      </p>
      </div>
      <div className=' md:mt-[-5rem] w-auto h-auto '>
<img src={tree} alt="" className='w-auto h-auto'/>
      </div>   
      </div>
<div className='flex gap-[0.5rem] md:justify-between h-[25%]  mx-auto items-center justify-center text-white w-[90%] '>
<div className='w-auto md:w-[25%]  hover:scale-125 hover:duration-500 hover:cursor-pointer shadow-2xl shadow-black flex flex-col  h-auto  md:h-[13rem] bg-[#1B4A30]  rounded-xl text-center'>
        
<img src={recycle} alt="" className='w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] mx-auto'/>
<p className='text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] text-black font-bold pt-[0.5rem]'>E-WASTE LOCATOR</p>
<p className='text-[white] text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] px-[1rem] md:pt-[1rem]'>Locate nearby e-waste recycling spots on our website for eco-convenience</p>
</div>
<div className='w-auto md:w-[30%] hover:scale-110 hover:duration-500 hover:cursor-pointer shadow-2xl h-auto md:h-[18rem] shadow-black flex flex-col  text-center  bg-[#1B4A30] rounded-xl'>
<img src={gift} alt="" className='w-[2.8rem] h-[2.8rem] md:w-[3rem] md:h-[3rem] mx-auto '/>
<p className='text-[1.1rem] md:text-[1.5rem] text-black font-bold pt-[0.1rem] md:pt-[0.5rem]'>REWARDS</p>
<p className='text-[white] text-[0.9rem] w-[90%] mx-auto lg:text-[1.1rem] xl:text-[1.2rem] md:p-[1rem]'>Rewards await you with every succesfull e-waste disposal get credit points for every successfull disposal. Use these points to awail numerous vouchers and cashbacks! </p>
</div>
<div className='w-auto md:w-[25%] hover:scale-125  hover:duration-500 hover:cursor-pointer shadow-2xl shadow-black h-auto md:h-[13rem] flex flex-col  bg-[#1B4A30] text-center rounded-xl'>
        <img src={hand} alt="" className='w-[2.6rem] h-[2.6rem] md:w-[3rem] md:h-[3rem] mx-auto'/>
<p className='text-[1rem] md:text-[1.5rem] text-black font-bold ' >CERTIFICATE</p>
<p className='text-[white] text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem] p-[0.6rem]'>Dispose e-waste responsibly,and we'll plant a tree in your name while you track its growth with your exclusive e-certificate</p>
</div>
  </div>
      </div>
  )
}

export default Aboutus