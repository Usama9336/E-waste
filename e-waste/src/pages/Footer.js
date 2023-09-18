import React from 'react'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import tiktok from './tiktok.png'

function Footer() {
  return (
    <div className='bg-[#1B5F3A] flex flex-col md:flex  md:flex-row h-auto'>
        <div className='w-[30%]  lg:mx-[2rem]'>
    <p className='text-[white] text-[40px] md:text-[35px] font-[Merriweather] pl-[3rem] pt-[2rem] md:pt-[3rem]'>Environmental Health</p>
    <div className='flex mx-[4rem] w-[30%] gap-[1rem] pt-[1rem]'>
    <img src={facebook} alt="" />
    <img src={instagram} alt="" />
    <img src={twitter} alt="" />
    <img src={tiktok} alt="" />
    </div>
    </div>
    <div className='flex md:w-[40%] gap-[1rem] px-[1rem] text-[white] mx-auto pr-[2rem] py-[1rem] md:py-[4rem] md:justify-between'>
<div className=''>
<p className='text-[18px]'>Products</p>
<div className='text-[#C5C5C5] text-[13px]'>
<p >Ervas</p>
<p>Flores</p>
<p>Cactos</p>
</div>
</div>

<div>
<p className='text-[18px]'>Trabalhe com a gente</p>
<div className='text-[#C5C5C5] text-[13px]'>
<p >Entre em contato com nosso email</p>
<p>EnvironmentalHealth@hv.sistem.com</p>
<p>Cactos</p>
</div>
</div>
    </div>
    <div className='py-[0.7rem]  lg:pr-[1rem] md:py-[3rem] w-[90%] md:w-auto mx-auto'>
<p className='text-[white] text-[2rem]'>
  Contact us
</p>
<div className='flex gap-[1rem]'>
<p className='text-[red] text-[0.8rem] lg:text-[1.2rem]'>
Email:
</p>
<p className='text-[0.8rem] lg:text-[1.1rem] text-[white]'>
t3trashtotreasure@gmail.com
</p>
</div>
<div className='flex gap-[1rem]'>
<p className='text-[red] text-[0.8rem] lg:text-[1.2rem]'>
Mobile No:
</p>
<p className='text-[0.8rem] lg:text-[1.2rem] text-[white]'>
+918800805969
</p>
</div>
    </div>
    </div>
  )
}

export default Footer