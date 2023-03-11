import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { getCategories } from '../services';

  
  
const HeroSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div>
      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <div className='lg:w-96'>
          <img src="/coding.gif" className="h-100 w-full object-cover" />
        </div>
          <div className='lg:text-start text-center lg:mr-20 lg:text-6xl text-3xl'>
            <h1 className="font-semibold">BELAJAR NGODING</h1>
            <h1 className="mb-16 font-semibold text-blue-500 mt-3"><span className='bg-blue-500 text-white rounded py-1 px-4 shadow-md'> DI HELLO KODING</span></h1>
          </div>
      </div>
      <div className='mb-10 mx-10'>
        <h3 className="lg:text-3xl text-2xl text-center font-semibold pb-5">MAU BELAJAR APA?</h3>
        <div className="p-2 flex justify-center rounded mb-8">
          {categories.map((category, index) => (
            index < 4 &&
            <Link key={index} href={`/category/${category.slug}`}>
              <button className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 lg:text-5xl font-semibold bg-blue-500 rounded text-white p-2 mx-1 shadow-xl hover:-translate-y-2 transition duration-500 ease transform hover:bg-blue-800`}>{category.name}</button>
            </Link>
          ))}
        </div>
        <h3 className="lg:text-3xl text-2xl text-center font-semibold pb-5">MAU LIAT CONTOH PROJECT?</h3>
        <div className="p-2 flex justify-center rounded mb-8">
            <Link key={4} href={`/category/sourcecode`}>
              <button className={`cursor-pointer block mb-3 lg:text-5xl font-semibold bg-gray-200 rounded text-black p-3 mx-2 shadow-xl hover:-translate-y-2 transition duration-500 ease transform hover:bg-gray-400 flex`}>SOURCE CODE <span><img className='ml-6 lg:w-10 w-5' src="source-code-icon.svg"/></span></button>
            </Link>
        </div>
        </div>
    </div>
  );
};

export default HeroSection;
