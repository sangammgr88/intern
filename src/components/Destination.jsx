import React from 'react';
import de1 from '../assets/de1.png';
import de2 from '../assets/de2.jpg';
import de3 from '../assets/de3.jpg';
import de4 from '../assets/de4.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Destination = () => {
  return (
    <div className="mt-24 px-4 sm:px-6">
      {/* Section Header */}
      <h1 className="text-blue-700 font-bold text-center sm:text-left">DESTINASI FAVORIT</h1>
      
      {/* Subheading and Navigation */}
      <div className="flex flex-col sm:flex-row sm:justify-between mt-6">
        <h1 className="font-extrabold text-3xl text-center sm:text-left">
          ✈ • Temukan Destinasi Favoritmu
        </h1>
        <div className="flex justify-center sm:justify-start items-center mt-4 sm:mt-0">
          <p className="text-sm text-blue-700">Lihat semua</p>
          <MdOutlineKeyboardArrowRight className="text-blue-700 text-lg ml-1" />
        </div>
      </div>
      
      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-8 mt-6">
        {/* Card 1 */}
        <div className="relative rounded-xl lg:w-72 h-80 sm:h-96 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de1} alt="Raja Ampat" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-white/70 p-4 flex items-end">
            <div className="text-sm font-medium">
              <p className="font-bold">Raja Ampat</p>
              <p>Bali</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl lg:w-72 h-80 sm:h-96 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de2} alt="Labuan Bajo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-white/70 backdrop-blur-sm p-4 flex items-end">
            <div className="text-sm font-medium">
              <p className="font-bold">Labuan Bajo</p>
              <p>NTT</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-xl lg:w-72 h-80 sm:h-96 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de3} alt="Kawah Ijen" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-white/70 backdrop-blur-sm p-4 flex items-end">
            <div className="text-sm font-medium">
              <p className="font-bold">Kawah Ijen</p>
              <p>Jawa Timur</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-xl lg:w-72 h-80 sm:h-96 w-full overflow-hidden">
          <img className="h-full w-full object-cover" src={de4} alt="Bromo" />
          <div className="absolute bottom-0 left-0 w-1/2 bg-white/70 backdrop-blur-sm p-4 flex items-end">
            <div className="text-sm font-medium">
              <p className="font-bold">Bromo</p>
              <p>Jawa Timur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
