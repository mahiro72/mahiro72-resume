import React from 'react'
import img_github from "../../img/common/github.png";

const Footer = () => {
  return (
    <div className='text-gray-300 text-center mt-12 mb-20'>
        <div className='bg-gray-900 w-48 h-24 py-1 mx-auto rounded-lg shadow-2xl'>
            <a 
                    className='hover:text-blue-400'
                    target="_blank"
                    href="https://github.com/mahiro72/mahiro72-resume">
                <div>
                    <img src={img_github} alt="" className="h-9 w-9 mx-auto mt-4" />
                    <p>view this repository</p>
                </div>
            </a>

        </div>
        <p className='mt-2'>© 2022 mahiro yoshie</p>
    </div>
  )
}

export default Footer