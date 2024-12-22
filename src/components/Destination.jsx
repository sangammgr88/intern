import React from 'react'
import de1 from '../assets/de1.png'
import de2 from '../assets/de2.jpg'
import de3 from '../assets/de3.jpg'
import de4 from '../assets/de4.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Destination = () => {
  return (
    <div className='p-40'>
      {/* Title of the section */}
      <h1 className='text-blue-700 font-bold'>DESTINASI FAVORIT</h1>
      
      {/* Subheading and "See all" link */}
      <div className='flex gap-x-96'>
        <h1 className='font-extrabold text-3xl'>✈ • Temukan Destinasi Favoritmu</h1>
        
        {/* See All text with arrow icon */}
        <div className='flex ml-40'>
          <p className='text-sm text-blue-700'>Lihat semua</p>
          <MdOutlineKeyboardArrowRight className='mt-1'/>
        </div>
      </div>

      {/* Image Cards Section */}
      <div className='flex gap-x-16 mt-6'>
        
        {/* First Destination Card */}
        <div className="relative border border-black rounded-xl h-96 w-60 overflow-hidden">
          <img className="h-full w-full object-cover" src={de1} alt="Raja Ampat" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 p-4 flex items-end">
            <p className="text-white text-sm font-medium">
              <span className='font-bold'>Raja Ampat</span> <br /> Bali
            </p>
          </div>
        </div>
        
        {/* Second Destination Card */}
        <div className="relative border border-black rounded-xl h-96 w-60 overflow-hidden">
          <img className="h-full w-full object-cover" src={de2} alt="Labuan Bajo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <p className="text-white text-sm font-medium">
              <span className='font-bold'>Labuan Bajo</span> <br /> NTT
            </p>
          </div>
        </div>
        
        {/* Third Destination Card */}
        <div className="relative border border-black rounded-xl h-96 w-60 overflow-hidden">
          <img className="h-full w-full object-cover" src={de3} alt="Kawah Ijen" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <p className="text-white text-sm font-medium">
              <span className='font-bold'>Kawah Ijen</span> <br /> Jawa Timur
            </p>
          </div>
        </div>
        
        {/* Fourth Destination Card */}
        <div className="relative border border-black rounded-xl h-96 w-60 overflow-hidden">
          <img className="h-full w-full object-cover" src={de4} alt="Bromo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <p className="text-white text-sm font-medium">
              <span className='font-bold'>Bromo</span> <br /> Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
