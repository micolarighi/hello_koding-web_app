import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
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
  );
};

export default Categories;
