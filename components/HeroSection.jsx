import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'


const HeroSection = () => {

  return (
    <div className='flex lg:flex-row flex-col items-center justify-center'>
      <div className='lg:w-96'>
        <img src="/coding.gif" className="h-100 w-full object-cover" />
      </div>
        <div className='lg:text-start text-center lg:mr-20 lg:text-6xl text-2xl'>
          <h1 className="font-semibold">BELAJAR NGODING</h1>
          <h1 className="mb-16 font-semibold text-blue-500 mt-3">DI <span className='bg-blue-500 text-white rounded py-1 px-4 shadow-md'>HELLO KODING</span></h1>
        </div>
    </div>
  );
};

export default HeroSection;
