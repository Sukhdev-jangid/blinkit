import React from 'react'
export default function Category() {
    let images=['./public/Slice.jpeg','./public/Slice-2.png','./public/Slice-3.png','./public/Slice-4.png','./public/Slice-5.png','./public/Slice-6.png','./public/Slice-7.png','./public/Slice-8.png','./public/Slice-9.png','./public/Slice-10.png','./public/Slice-11.png','./public/Slice-12.png','./public/Slice-13.png','./public/Slice-14.png','./public/Slice-15.png','./public/Slice-16.png','./public/Slice-17.png','./public/Slice-18.png','./public/Slice-19.png','./public/Slice-20.png']
  return (
    <div className='lg:w-[85%] mx-auto grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10'>
        {images.map((imgpath,index) => {
          return (
            <div>
            <img src={imgpath} alt=""/>
           </div>
            )
        })}
    </div>
  )
}
