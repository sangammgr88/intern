import React from 'react';
import person1 from '../assets/person1.jpg';
import Star from '../components/Star';
import picture2 from '../assets/picture2.png';
import picture3 from '../assets/picture3.jpg';

const Review = () => {
  return (
    <div className='mt-48 px-4 sm:px-6'>
      <div className='text-center'>
        <h1 className='text-blue-700'>TESTIMONIAL DESTINIZE</h1>
        <h1 className='text-4xl font-bold'>💬 • Apa Kata Mereka Tentang Kami</h1>
        <p>Penasaran apa saja review dari pengguna yang memakai aplikasi dan website Destinize buat <br />nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!</p>
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border bg-white rounded-lg p-6'>
          <img className='rounded-full h-36 mx-auto' src={person1} alt="Person 1" />
          <div className='mt-8'>
            <p className='text-slate-700 text-center'>
              Destinize membantu saya Mencari spot <br /> tempat wisata baru di Indonesia dengan Mudah
            </p>
            <Star stars={Star} />
            <p className='text-blue-700 text-center'>Sandhika Galih</p>
            <p className='font-bold text-center'>Dosen di WPU</p>
          </div>
        </div>
        <div className='border bg-white rounded-lg p-6'>
          <img className='rounded-full h-36 mx-auto' src={picture2} alt="Person 2" />
          <div className='mt-8'>
            <p className='text-slate-700 text-center'>
              Destinize membantu saya Mencari spot <br /> tempat wisata baru di Indonesia dengan Mudah
            </p>
            <Star stars={Star} />
            <p className='text-blue-700 text-center'>Syauqizaidan Khairan Khalaf</p>
            <p className='font-bold text-center'>Mahasiswa di WPU</p>
          </div>
        </div>
        <div className='border bg-white rounded-lg p-6'>
          <img className='rounded-full h-36 mx-auto' src={picture3} alt="Person 3" />
          <div className='mt-8'>
            <p className='text-slate-700 text-center'>
              Bikini Bottom menjadi sangat ramai dikunjungi <br /> saat saya memasukkannya di Destinize
            </p>
            <Star stars={Star} />
            <p className='text-blue-700 text-center'>Petrik Sesat</p>
            <p className='font-bold text-center'>Warga di Bikini Bottom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
