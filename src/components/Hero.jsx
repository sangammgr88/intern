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
    <div className='sm: p-10'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-3 w-full'>
          <p className="text-blue-600  font-bold text-center lg:text-left border border-transparent rounded-lg inline-block bg-blue-100">
            ✈ • Explore the wonderful Indonesia!
          </p>
          <h1 className='font-extrabold text-4xl lg:text-7xl mt-2 text-center lg:text-left'>
            Liburan & nikmati <span className='text-blue-500'>tempat baru</span> di <br /> Indonesia ️🏝
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
        <div className='flex justify-center lg:justify-end  lg:-mt-36'>
          <img className='w-full lg:w-[900px] lg:h-[750px] object-cover' src={hero} alt="Hero Image" />
        </div>
      </div>
      
      <div className='lg:flex  lg:justify-between lg:gap-6 ml-10 mt-8'>
        <img className='h-[144.9px] w-[144.9px] mt-8 sm:ml-7' src={image1} alt="Image 1" />
        <img className='h-[122.61px] w-[192.67px] mt-12' src={image2} alt="Image 2" />
        <img className='h-[180.57px] w-[268.63px] mt-4' src={image3} alt="Image 3" />
        <img className='h-[35.67px] w-[180.57px] mt-24' src={image4} alt="Image 4" />
        <img className='h-[23.41px] w-[104.78px] mt-24' src={image5} alt="Image 5" />
      </div>
    </div>
  );
}

export default Hero;
