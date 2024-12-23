import React from 'react'
import logo from '../assets/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPrint } from "react-icons/io";

const Footer = () => {
  return (
    <div className='p-40'>
      <div className='flex gap-8'>
      <div>
        <img className='h-10 w-10' src={logo} alt="" />
        <h1 className='font-extrabold text-2xl'>Destinize</h1>
        <p className='text-sm   text-slate-600'>Destinize adalah website atau layanan aplikasi yang membantu kamu <br /> memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar <br /> lebih dikenal dan ramai  Baca Selengkapnya</p>
        <p className='flex gap-2 mt-4  text-slate-600'> <FaPhoneAlt className='mt-1' />
        0851-5616-2840</p>
        <p className='flex gap-2 mt-2  text-slate-600'><CiMail className='mt-1' />
        syaokay@gmail.com</p>
        <p className='flex gap-2 mt-2  text-slate-600'> <FaLocationDot className='mt-1'/>
        Ciamis, Jawa Barat. Indonesia</p>
        <p className='flex gap-2 mt-2  text-slate-600'><IoIosPrint className='mt-1'/>
        +1-212-9876543</p>
      </div>
      <div className='flex gap-40'>
      <div className='p-2'>
        <h1 className='font-extrabold text-2xl'>Tentang</h1>
        <div className='mt-3 '>
        <p className='mt-2 text-slate-600'>Tentang Kami</p>
        <p className='mt-2 text-slate-600'>Blog</p>
        <p className='mt-2 text-slate-600'>Karir</p>
        <p className='mt-2 text-slate-600'>Pekerjaan</p>
        <p className='mt-2 text-slate-600'>Berita</p>
        <p className='mt-2 text-slate-600'>Galeri</p>
        <p className='mt-2 text-slate-600'>Afiliasi</p>
        </div>
      </div>
      <div className='p-2'>
        <h1  className='font-extrabold text-2xl'>Support</h1>
        <p className='mt-3  text-slate-600 text-slate-600'>Kontak  Kami</p>
        <p className='mt-2 text-slate-600 '>Online Chat</p>
        <p className='mt-2 text-slate-600 '>Whatsapp</p>
        <p className='mt-2 text-slate-600 '>Telegram</p>
        <p className='mt-2 text-slate-600 '>Tiket</p>
        <p className='mt-2 text-slate-600 '>Call Center</p>
        <p className='mt-2 text-slate-600 '>Bantuan</p>
      </div>
      <div className='p-2'>
        <h1 className='font-extrabold text-2xl'>FAQ</h1>
        <p className='mt-3  text-slate-600'>Akun</p>
        <p className='mt-2  text-slate-600'>Organisir</p>
        <p className='mt-2  text-slate-600'>Order</p>
        <p className='mt-2  text-slate-600'>Pembayaran</p>
        <p className='mt-2  text-slate-600'>Pengembalian</p>
        <p className='mt-2  text-slate-600'>Copyright</p>
        <p className='mt-2  text-slate-600'>Bahasa</p>
      </div>
      </div>
      </div>
      <div className='flex gap-64 text-slate-600 '>
        <div>
          <h1>© 2021-2022, All Rights Reserved</h1>
        </div>
        <div className='flex gap-14'>
          <p>Tentang Kami</p>
          <p>Kontak</p>
          <p>Privasi & policy</p>
          <p>Sitemap</p>
          <p>Panduan Pengunaan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer