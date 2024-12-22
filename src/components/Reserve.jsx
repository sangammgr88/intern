import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import flag from '../assets/flag.jpg'
import re1 from '../assets/re1.jpg'
import { FaLeaf } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";


const Reserve = () => {
  return (
    <div className='p-40'>
      <h1 className='text-blue-700 font-bold'>RESERVASI TEMPAT</h1>
      <div className='flex gap-52'>
        <div>
        <h1 className='text-4xl font-bold'>Gak mau ngantri? <br /> reservasi aja! 🤙🏻</h1>
        <div className='flex gap-x-3 mt-7'>
        <CiSearch size={30} className='mt-3 border rounded-xl h-10 bg-fuchsia-300 w-10' />
        <div>
        <h1 className='font-bold'>Cari tempat yang kamu mau</h1>
        <p>Temukan destinasi selanjutnya yang akan kamu <br /> kunjungi dengan Destinize</p>
        </div>
        </div>
        <div className='flex gap-x-3 mt-7'>
        <FaPencilAlt         size={30} className='mt-3 border rounded-xl h-10 bg-fuchsia-300 w-10' />
        <div>
        <h1 className='font-bold'>Isi data dan konfirmasi pembayaran</h1>
        <p>Tulis dan lengkapi data kamu untuk keperluan <br /> data booking</p>
        </div>
        </div>
        <div className='flex gap-x-3 mt-7'>
        <CiFaceSmile size={30} className='mt-3 border rounded-xl h-10 bg-fuchsia-300 w-10' />
        <div>
        <h1 className='font-bold'>Tinggal masuk dan enjoy!</h1>
        <p>Kamu bisa langsung masuk dan enjoy liburan <br /> kamu tanpa hambatan</p>
        </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div>
        <img className="w-full h-48 object-cover" src={re1}  alt="" />
      </div>

      {/* Details Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          Liburan ke Bali <span className="ml-2">🚗</span>
        </h3>
        <p className="text-gray-500 text-sm">
          14–29 Juni   |   by Shandika
        </p>

        {/* Icons Section */}
<div className='flex gap-8 mt-3'>
  <div><FaLeaf />  </div>
  <div><IoMapOutline />  </div>
  <div><FaTelegramPlane />
  </div>
</div>
<div className='flex gap-4 mt-3'>
  <div className='mt-2'><HiOutlineBuildingOffice2 />
  </div>
  <div><h1>12 Orang pergi bersama</h1></div>
  <div className='mt-2 ml-8'><FaRegHeart />
  </div>
</div>

        {/* Progress Section */}
        <div className="flex items-center mt-4 bg-gray-100 rounded-lg p-2">
          <img
            src={flag}
            alt="Flag"
            className="w-6 h-6 rounded-full"
          />
          <div className="ml-2 flex-grow">
            <p className="text-gray-800 text-sm font-medium">Jelajah Indonesia</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          <p className="ml-2 text-sm text-blue-500 font-medium">40% completed</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Reserve