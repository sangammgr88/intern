import React from 'react'
import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  return (
    <div className='p-40 -mt-40'>
    <div className='flex  justify-between py-7 px-7'>
      <div className='flex gap-2'>
        <img className='h-6' src={logo} alt="" />
        <h1 className='font-bold'>Destinize</h1>
      </div>
      <div className="flex items-center border border-gray-400 gap-2 rounded-lg w-auto bg-slate-200 px-4 py-2 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition">
  <CiSearch className="text-gray-600 text-xl" />
  <input 
    className="w-96 h-6 bg-slate-200 focus:outline-none placeholder-gray-500 text-gray-800"
    type="text"
    placeholder="Search"
  />
</div>
      <div className='flex gap-2 text-slate-600'>
      <TbWorld className='mt-1'/>
        <h1>Nepal</h1>
        <IoMdArrowDropdown className='mt-1' />

      </div>
      <div className='flex gap-x-2'>
        <div>
        <ImLocation className='mt-4' />

        </div>
        <div>
       <h1 className='text-slate-600'>Lokasi</h1>
        <h1 className='text-blue-800 font-bold'>Indonesia, Yougyakart</h1>
        </div>
        <IoMdArrowDropdown className='mt-7' />
      </div>
    </div>
    <hr className="border-t border-slate-200" />
    <div className='flex  px-9 justify-between mt-4 text-slate-500' >
      <div className='flex justify-between gap-x-1' >
      <div className="flex">
        <h1>Gunung</h1>
        <IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Pantai</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Kuliner</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Outbond</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Sejarah</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Edukasi</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Romantis</h1><IoMdArrowDropdown className='mt-1' />
      </div>
      <div className="flex">
        <h1>Alam</h1>
        <IoMdArrowDropdown className='mt-1' />
      </div>
      </div>
      <div className='flex gap-3'>
  <MdDelete className='border rounded-full bg-blue-600 text-white p-2' size={40} />
  <CgProfile size={40} />
</div>

    </div>
    </div>
  )
}

export default Navbar