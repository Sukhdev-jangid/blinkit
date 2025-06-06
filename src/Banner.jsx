import React from 'react'
import banner from './assets/banner.jpg'
import banner1 from './assets/banner1.jpg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'

export default function Banner() {
  return (
    <div>
      <div className='lg:w-[85%] mx-auto'>
        <img src={banner} alt="" className='w-full' />
      </div>
      <div className='lg:w-[85%] mx-auto flex gap-5 p-5'>
            <div className='w-[335px]'>
                <img src={banner1} alt="" />
            </div>
            <div className='w-[335px]'>
                <img src={banner2} alt="" />
            </div>
            <div className='w-[335px]'>
                <img src={banner3} alt="" />
            </div>
      </div>
    </div>
  )
}
