import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/amul.avif"
export default function Dairy() {

    let dairyData = [
        {
            img: "./public/dairyimg/d1.jpg",
            title: "Amul Taaza Toned Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d2.jpg",
            title: "Amul Masti Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d3.jpg",
            title: "Amul Moti Toned Milk (90 Days Shelf Life)",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d4.jpg",
            title: "Amul Masti Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d5.jpg",
            title: "Amul Gold Full Cream Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d6.jpg",
            title: "Vijay Stone Ground Wheat Brown Bread",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d7.jpg",
            title: "Saras Toned Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d8.jpg",
            title: "Saras Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d9.jpg",
            title: "Saras Gold Full Cream Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d10.jpg",
            title: "Amul Salted Butter",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d11.jpg",
            title: "amEgg First Protein White Eggsul",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d12.jpg",
            title: "amVijay Soft White Breadul",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d13.jpg",
            title: "Vijay Jumbo Sandwich Bread",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d14.jpg",
            title: "Amul Taaza Homogenised Toned",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/dairyimg/d15.jpg",
            title: "Amul Blend Diced Cheese",
            size: "500ml",
            pirce: "26"
        },
        
       
    ]

    let rollingData = [
        {
            img: "./public/rollingimg/r1.jpg",
            title: "Amul Taaza Toned Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r2.jpg",
            title: "Amul Masti Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r3.jpg",
            title: "Amul Moti Toned Milk (90 Days Shelf Life)",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r4.jpg",
            title: "Amul Masti Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r5.jpg",
            title: "Amul Gold Full Cream Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r6.jpg",
            title: "Vijay Stone Ground Wheat Brown Bread",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r7.jpg",
            title: "Saras Toned Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r8.jpg",
            title: "Saras Curd",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r9.jpg",
            title: "Saras Gold Full Cream Fresh Milk",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r10.jpg",
            title: "Amul Salted Butter",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r11.jpg",
            title: "amEgg First Protein White Eggsul",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r12.jpg",
            title: "amVijay Soft White Breadul",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r13.jpg",
            title: "Vijay Jumbo Sandwich Bread",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r14.jpg",
            title: "Amul Taaza Homogenised Toned",
            size: "500ml",
            pirce: "26"
        },
        {
            img: "./public/rollingimg/r15.jpg",
            title: "Amul Blend Diced Cheese",
            size: "500ml",
            pirce: "26"
        },
        
       
    ]


    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <div>
            <h3 className='lg:w-[85%] mx-auto text-3xl font-medium p-4'>Dairy, Bread & Eggs</h3>
            <div className='px-[120px] mx-auto' id='dairyslider'>
                {/* <Slider {...settings} >
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3 bg-white'>
                        <div className='border rounded-lg shadow-md'>
                            <img src={img1} alt="" className='rounded-lg' />
                            <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                            <p className='mx-4 text-[14px] font-medium'>Amul Taaza Toned Fresh Milk</p>
                            <span className='mx-4 text-[12px]'>500 ml</span>
                            <div className='flex justify-between m-4'>
                                <div>Rs 26</div>
                                <div>
                                    <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>








                </Slider> */}
                <Slider {...settings}>
                    {dairyData.map((v, index) => {
                        return (
                            <div>
                                <div className='px-3 bg-white'>
                                    <div className='border rounded-lg shadow-md'>
                                        <img src={v.img} alt="" className='rounded-lg' />
                                        <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                                        <p className='mx-4 text-[14px] font-medium'>{v.title}</p>
                                        <span className='mx-4 text-[12px]'>500 ml</span>
                                        <div className='flex justify-between m-4'>
                                            <div>Rs 26</div>
                                            <div>
                                                <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <h3 className='lg:w-[85%] mx-auto mt-3 text-3xl font-medium p-4'>Rolling paper & tobacco</h3>
            <div className='px-[120px] mx-auto' id='dairyslider'>
                <Slider {...settings}>
                    {rollingData.map((v, index) => {
                        return (
                            <div>
                                <div className='px-3 bg-white'>
                                    <div className='border rounded-lg shadow-md'>
                                        <img src={v.img} alt="" className='rounded-lg' />
                                        <span className='text-[9px] font-bold ms-4 rounded-sm p-1 bg-slate-200'>19 MINS</span>
                                        <p className='mx-4 text-[14px] font-medium'>{v.title}</p>
                                        <span className='mx-4 text-[12px]'>500 ml</span>
                                        <div className='flex justify-between m-4'>
                                            <div>Rs 26</div>
                                            <div>
                                                <button className='border border-[green] rounded-md px-4 py-1 bg-slate-50 text-[green] font-bold'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
