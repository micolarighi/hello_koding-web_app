import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    // <div className="container mx-auto px-10 mb-8">
    //   <div className="border-b w-full inline-block border-blue-400 py-8">
    //     <div className="md:float-left block">
    //       <Link href="/">
    //         <span className="cursor-pointer font-bold text-4xl">Hello Koding</span>
    //       </Link>
    //     </div>
    //     <div className="hidden md:float-left md:contents">
    //       {categories.map((category, index) => (
    //         <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
    //       ))}
    //   </div>
    //   </div>
    // </div>

    <div className='mb-40'>
    <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <Link href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap">HELLO KODING</span>
      </Link>
      <div class="flex md:order-2">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link href="/">
             <span  class="block py-2 pl-3 pr-4 rounded md:p-0" aria-current="page">Home</span>
            </Link>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 rounded  md:p-0">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    </div>

  );
};

export default Header;
