import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import flag from "../assets/flag.jpg";
import re1 from "../assets/re1.jpg";
import { FaLeaf } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const Reserve = () => {
  return (
    <div className="p-5 lg:p-40 gap-60">
      {/* Header Section */}
      <h1 className="text-blue-700 font-bold text-sm lg:text-lg">
        RESERVASI TEMPAT
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-52 mt-5">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">
            Gak mau ngantri? <br /> reservasi aja! 🤙🏻
          </h1>
          {/* Steps Section */}
          <div className="mt-7 space-y-7">
            {/* Step 1 */}
            <div className="flex items-start gap-x-3">
              <CiSearch
                size={30}
                className="mt-1 border rounded-xl h-10 bg-fuchsia-300 w-10"
              />
              <div>
                <h1 className="font-bold text-sm lg:text-base">
                  Cari tempat yang kamu mau
                </h1>
                <p className="text-sm text-gray-600">
                  Temukan destinasi selanjutnya yang akan kamu <br />
                  kunjungi dengan Destinize
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-x-3">
              <FaPencilAlt
                size={30}
                className="mt-1 border rounded-xl h-10 bg-fuchsia-300 w-10"
              />
              <div>
                <h1 className="font-bold text-sm lg:text-base">
                  Isi data dan konfirmasi pembayaran
                </h1>
                <p className="text-sm text-gray-600">
                  Tulis dan lengkapi data kamu untuk keperluan <br />
                  data booking
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-x-3">
              <CiFaceSmile
                size={30}
                className="mt-1 border rounded-xl h-10 bg-fuchsia-300 w-10"
              />
              <div>
                <h1 className="font-bold text-sm lg:text-base">
                  Tinggal masuk dan enjoy!
                </h1>
                <p className="text-sm text-gray-600">
                  Kamu bisa langsung masuk dan enjoy liburan <br />
                  kamu tanpa hambatan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-md overflow-hidden bg-white">
          <img className="w-full h-48 object-cover" src={re1} alt="Destination" />
          <div className="p-4">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 flex items-center">
              Liburan ke Bali <span className="ml-2">🚗</span>
            </h3>
            <p className="text-gray-500 text-xs lg:text-sm mt-1">
              14–29 Juni | by Shandika
            </p>

            {/* Icons Section */}
            <div className="flex gap-6 mt-3 text-gray-500">
              <FaLeaf />
              <IoMapOutline />
              <FaTelegramPlane />
            </div>

            {/* Additional Info Section */}
            <div className="flex items-center gap-4 mt-4 text-gray-500">
              <HiOutlineBuildingOffice2 className="text-sm lg:text-lg" />
              <p className="text-xs lg:text-sm flex-grow">
                12 Orang pergi bersama
              </p>
              <FaRegHeart className="text-gray-400 text-sm lg:text-lg" />
            </div>

            {/* Progress Section */}
            <div className="flex items-center mt-6 bg-gray-100 rounded-lg p-3">
              <img className="w-8 h-8 rounded-full object-cover" src={flag} alt="" />
              <div className="ml-3 flex-grow">
                <p className="text-gray-800 text-xs lg:text-sm font-medium">
                  Jelajah Indonesia
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <p className="ml-3 text-xs lg:text-sm text-blue-500 font-medium">
                40% completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
