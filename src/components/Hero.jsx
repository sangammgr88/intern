import React from 'react'
import hero from '../assets/hero.png'
import { FaArrowRight } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-12'>
        <div className='p-8 lg:p-40 -mt-24 lg:-mt-56'>
          <p className='text-blue-600 font-bold text-center lg:text-left'>✈ • Explore the wonderful indonesia!</p>
          <h1 className='font-extrabold text-4xl lg:text-6xl mt-2 text-center lg:text-left'>
            Liburan & nikmati tempat baru di <br /> indonesia  ️🏝
          </h1>
          <p className='mt-5 text-center lg:text-left'>
            Destinize membuat kamu selalu update terkait tempat liburan <br /> baru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨
          </p>
          <div className='mt-5 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'>
            <button className='bg-blue-600 text-white border rounded-md h-12 px-6 justify-center flex'>
              <h1 className='mt-2'>mulai sekarang </h1> <FaArrowRight className='mt-3'/>
            </button>
            <div className='flex gap-1 items-center justify-center lg:justify-start'>
              <CgPlayButtonO size={40} />
              <h1 className='text-slate-500 mt-2'>Putar Demo</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img className='-mt-40 lg:-mt-64 mr-28' src={hero} alt="" />
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center lg:justify-between p-8 lg:p-40 gap-6 -mt-9'>
        <img className='h-24 w-52' src={image1} alt="" />
        <img className='h-24 w-52' src={image2} alt="" />
        <img className='h-24 w-52' src={image3} alt="" />
        <img className='h-14 w-44 mt-4' src={image4} alt="" />
        <img className='h-14 w-44 mt-4' src={image5} alt="" />
      </div>
    </div>
  )
}

export default Hero;
