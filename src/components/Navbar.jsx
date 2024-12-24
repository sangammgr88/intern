import React from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="p-4 lg:mb-16 sm:mb-0">
      {/* Top Section */}
      <div className="flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-6" src={logo} alt="" />
          <h1 className="font-bold text-sm sm:text-lg">Destinize</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center border border-gray-400 gap-2 rounded-3xl bg-slate-200 px-4 py-2 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition">
          <CiSearch className="text-gray-600 text-xl" />
          <input
            className="w-96 h-6 bg-slate-200 focus:outline-none placeholder-gray-500 text-gray-800"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Language Selector */}
        <div className="hidden sm:flex gap-2 text-slate-600">
          <TbWorld className="mt-1" />
          <h1 className="text-sm">Bahasa Indonesia</h1>
          <IoMdArrowDropdown className="mt-1" />
        </div>

        {/* Location */}
        <div className="hidden sm:flex items-center gap-2">
          <ImLocation className="h-6 w-6 bg-blue-300 text-white p-1 rounded-full" />
          <div>
            <h1 className="text-slate-600 text-sm">Lokasi</h1>
            <h1 className="text-blue-800 font-bold text-sm">Indonesia, Yogyakarta</h1>
          </div>
          <IoMdArrowDropdown />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      {/* Divider */}
      <hr className="border-t border-slate-200" />

      {/* Bottom Section */}
      <div
        className={`${
          showMenu ? 'block' : 'hidden'
        } sm:flex flex-wrap justify-between px-4 mt-4 text-slate-500`}
      >
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {['Gunung', 'Pantai', 'Kuliner', 'Outbond', 'Sejarah', 'Edukasi', 'Romantis', 'Alam'].map(
            (item) => (
              <div className="flex items-center text-sm" key={item}>
                <h1>{item}</h1>
                <IoMdArrowDropdown className="ml-1" />
              </div>
            )
          )}
        </div>

        {/* Profile & Delete Icon */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <MdDelete className="border rounded-full bg-blue-600 text-white p-2" size={40} />
          <CgProfile size={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
