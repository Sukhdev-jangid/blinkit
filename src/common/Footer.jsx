import React from 'react'
import gplogo from '../assets/gp.png'
import aslogo from '../assets/as.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-[#F8F8F8] mt-10 py-5 sm:p-4' >
      <div className='lg:w-[85%]  grid grid-cols-[30%_auto] mx-auto  py-4 text-lg font-bold'>
        <div>Usefuls Links</div>
        <div>Categories</div>
      </div>
      <div className='lg:w-[85%] mx-auto grid lg:grid-cols-[30%_auto] text-sm '>
        <div className='grid grid-cols-3'>
        <div>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Value</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQs</li>
                <li>Security</li>
                <li>Mobile</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Partner</li>
                <li>Franchise</li>
                <li>Seller</li>
                <li>Warehouse</li>
                <li>Deliver</li>
                <li>Resources</li>
            </ul>
        </div>
        </div>
        <div className='grid grid-cols-3 sm:my-5 lg:my-0'>
        <div>
            <ul>
                <li>Vegetables & Fruits</li>
                <li>Cold Drinks & Juices</li>
                <li>Bakery & Biscuits</li>
                <li>Dry Fruits, Masala & Oil</li>
                <li>Paan Corner</li>
                <li>Pharma & Wellness</li>
                <li>Ice Creams & Frozen Desserts</li>
                <li>Beauty & Cosmetics</li>
                <li>Stationery Needs</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Dairy & Breakfast</li>
                <li>Instant & Frozen Food</li>
                <li>Sweet Tooth</li>
                <li>Sauces & Spreads</li>
                <li>Organic & Premium</li>
                <li>Cleaning Essentials</li>
                <li>Personal Care</li>
                <li>Fashion & Accessories</li>
                <li>Books</li>
                <li>Navratri Specials</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Munchies</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
                <li>Chicken, Meat & Fish</li>
                <li>Baby Care</li>
                <li>Home & Office</li>
                <li>Pet Care</li>
                <li>Electronics & Electricals</li>
                <li>Toys & Games</li>
            </ul>
        </div>
        </div>
      </div>
      <div className='lg:w-[70%] mx-auto my-10 lg:grid grid-cols-3 '>
        <div>
            <p className='text-sm sm:text-center sm:py-5 lg:py-0'>© Blink Commerce Private Limited, 2016-2024</p>
        </div>
        <div className='lg:grid grid-cols-3 gap-1'>
            <div className='font-bold sm:text-center lg:text-start sm:py-5 lg:py-0'>Download App</div>
            <div className='sm:py-5 lg:py-0'>
                <img src={gplogo} alt="" className='sm:mx-auto'/>
            </div>
            <div className='sm:py-5 lg:py-0'>
                <img src={aslogo} alt="" className='sm:mx-auto'/>
            </div>
        </div>
        <div className='flex justify-evenly sm:text-[45px] lg:text-[35px]'>
        <FaFacebook />
        <AiFillTwitterCircle />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaSquareThreads />
        </div>
      </div>
      <p className='w-[85%] sm:text-sm sm:text-justify mx-auto'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
    </div>
  )
}
