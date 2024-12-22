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
    <div className='flex'>
      <div className='p-40 -mt-56'>
        <p className='text-blue-600 font-bold'>✈ • Explore the wonderful indonesia!</p>
        <h1 className='font-extrabold text-5xl mt-2'>Liburan & nikmati <br />
tempat baru di <br />
indonesia  ️🏝</h1>
        <p className='mt-5'>Destinize membuat kamu selalu update terkait tempat liburan <br /> baru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨</p>
        <div className='mt-5 flex gap-x-6'>
          <button className='bg-blue-600 text-white border rounded-md  h-12 px-6 justify-center flex '><h1 className='mt-2 gap-x-2'>mulai sekarang </h1> <FaArrowRight className='mt-4'/>
          </button>
          <div className='flex gap-1'>
          <CgPlayButtonO size={40} />
          <h1  className='text-slate-500 mt-2'>Putar Demo</h1>
          </div>
        </div>
      </div>
      <div>
        <img className='-mt-64 h-auto' src={hero} alt="" />
      </div>
    </div>
    <div className='flex p-40 -mt-72 gap-x-7'>
      <img className='h-24 w-52' src={image1} alt="" />
      <img  className='h-24 w-52'  src={image2} alt="" />
      <img  className='h-24 w-52'  src={image3} alt="" />
      <img  className='h-20 w-60'  src={image4} alt="" />
      <img  className='h-20 w-60'  src={image5} alt="" />

    </div>
    </div>
  )
}

export default Hero