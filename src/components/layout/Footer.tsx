import React from 'react'
import img_github from "../../img/common/github.png";

const Footer = () => {
  return (
    <div className='text-gray-300 text-center mt-12 mb-20'>
        <div className='w-44 flex mx-auto '>
        <img src={img_github} alt="" className="h-5 w-5 mx-auto" />
        <a
            className='hover:text-blue-400'
            target="_blank"
            href="https://github.com/mahiro72/mahiro72-resume"
        >
            view this repository
        </a>
        </div>
        <p className='mt-2'>© 2022 mahiro yoshie</p>
    </div>
  )
}

export default Footer