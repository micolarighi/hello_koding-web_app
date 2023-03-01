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
  <div className='mt-5 mb-10 mx-5'>
      <h3 className="text-3xl text-center font-semibold pb-5 mt-10 pt-4">MAU BELAJAR APA?</h3>
      <div className="p-2 flex justify-center rounded mb-8">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <button className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 lg:text-5xl font-semibold bg-blue-500 rounded text-white p-3 mx-2 shadow-xl hover:-translate-y-2 transition duration-500 ease transform hover:bg-blue-800`}>{category.name}</button>
          </Link>
        ))}
      </div>
  </div>
  );
};

export default Categories;
