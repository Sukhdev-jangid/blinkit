import React from 'react'
import logo from '../assets/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className='lg:flex sm:p-4 lg:p-0 z-10 lg:border-b sticky left-0 top-0 bg-white'>
      <div className='w-[12%] sm:hidden lg:flex items-center border-r py-4 hover:bg-[#FCFCFC] cursor-pointer'>
       <img src={logo} alt="" className='w-[68%] mx-auto'/>
      </div>
      <div className='lg:w-[21%] py-4 lg:hover:bg-[#FCFCFC] cursor-pointer'>
        <div className='lg:w-[72%] mx-auto'>
        <h2 className='font-bold text-lg'>Delivery in 19 minutes</h2>
        <p className='flex lg:justify-center gap-2 text-sm'>HPGC+7MF, Azad nagar Sec. 3... <span className='text-xl'><IoMdArrowDropdown /></span></p>
        </div>
      </div>
      <div className='lg:w-[45%] flex items-center'>
        <div className='bg-[#F8F8F8] text-2xl h-[45px] p-3 rounded-l-lg'><IoSearchOutline /></div><input type="text" name="" id="" placeholder='Search' className='bg-[#F8F8F8] w-full h-[45px] ps-2 rounded-r-lg' />
      </div>
      <div className='text-center flex hover:bg-[#FCFCFC] cursor-pointer w-[10%] sm:hidden lg:flex justify-center items-center text-2xl'>
        Log in
      </div>
      <div className='p-4 w-[11%] sm:hidden lg:block'>
        <button className='flex items-center gap-3 font-bold bg-[#0C831F] rounded-lg text-white p-4'>
          <span className='text-2xl'><RiShoppingCartLine /></span>
          My cart
        </button>
      </div>
    </div>
  )
}
