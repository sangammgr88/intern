import React from 'react';
import de1 from '../assets/de1.png';
import de2 from '../assets/de2.jpg';
import de3 from '../assets/de3.jpg';
import de4 from '../assets/de4.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Destination = () => {
  return (
    <div className='p-8 sm:p-16 lg:p-40'>
      <h1 className='text-blue-700 font-bold'>DESTINASI FAVORIT</h1>
      <div className='flex flex-col sm:flex-row sm:gap-x-96 mt-6'>
        <h1 className='font-extrabold text-3xl text-center sm:text-left'>✈ • Temukan Destinasi Favoritmu</h1>
        <div className='flex justify-center sm:justify-start mt-4 sm:mt-0'>
          <p className='text-sm text-blue-700 ml-40'>Lihat semua</p>
          <MdOutlineKeyboardArrowRight className='mt-1' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row sm:gap-x-16 gap-y-8 mt-6 sm:gap-y-0'>  
        <div className="relative border border-black rounded-xl sm:h-96 h-80 sm:w-60 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de1} alt="Raja Ampat" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 p-4 flex items-end">
            <div className="text-white text-sm font-medium">
              <p className='font-bold'>Raja Ampat</p>
              <p>Bali</p> 
            </div>
          </div>
        </div>
        <div className="relative border border-black rounded-xl sm:h-96 h-80 sm:w-60 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de2} alt="Labuan Bajo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <div className="text-white text-sm font-medium">
              <p className='font-bold'>Labuan Bajo</p>
              <p>NTT</p>
            </div>
          </div>
        </div>
        <div className="relative border border-black rounded-xl sm:h-96 h-80 sm:w-60 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de3} alt="Kawah Ijen" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <div className="text-white text-sm font-medium">
              <p className='font-bold'>Kawah Ijen</p>
              <p>Jawa Timur</p>
            </div>
          </div>
        </div>
      
        <div className="relative border border-black rounded-xl sm:h-96 h-80 sm:w-60 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de4} alt="Bromo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-black/40 backdrop-blur-sm p-4 flex items-end">
            <div className="text-white text-sm font-medium">
              <p className='font-bold'>Bromo</p>
              <p>Jawa Timur </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
