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
  <div className='p-8'>
      <h3 className="text-2xl font-semibold pb-4 mt-10">MAU BELAJAR APA?</h3>
      <div className="pb-12 mb-8">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <button className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 text-5xl font-semibold bg-blue-500 rounded text-white p-3`}>{category.name}</button>
          </Link>
        ))}
      </div>
  </div>
  );
};

export default Categories;
