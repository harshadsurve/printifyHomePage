import React from 'react'
import Button from './Button'

function Intro() {
  return (
    <div className='w-full  h-[500px] flex'>
        <div className=' w-full '>
            <div className='w-[600px]'>
            <h1 className='text-6xl pl-20 mt-[40px] font-semibold'>
            Create and sell custom products
            </h1>
            <ul className="main-banner__advantages mt-5 ml-28 gap-10 ">
                <li>100% Free to use</li>
                <li>900+ High-Quality Products</li>
                <li>Largest global print network</li>
                </ul>
                <div className='flex items-center justify-start '>
                <Button name="Start for free" customStyles="w-[140px]  mt-10  ml-28 bg-green-400 hover:bg-green-500 text-white " />
                <Button icon={<i class="ri-play-circle-line"></i>} name="How it works?" customStyles="w-[160px]  mt-10 ml-16 hover:text-[#6be772]" />
                </div>
        </div>
        </div>

        <div className='w-full bg-pink-500'></div>
    </div>
  )
}

export default Intro