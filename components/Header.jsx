import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { Navbar } from "flowbite-react";


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
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Hello Koding
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

  );
};

export default Header;
