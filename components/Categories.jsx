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
    <div className="bg-blue-500 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-2xl font-semibold pb-4 text-white">Mau Belajar Apa?</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 text-5xl text-white font-semibold`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
