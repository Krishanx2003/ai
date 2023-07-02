import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">AihubPro</span>
          </Link>
        </div>
        <Link href="/contact">
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Contact</span>
          </Link>
        <div className="hidden md:float-left md:contents">
          <Link href="/about">
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">About</span>
          </Link>
          <Link href="/courses">
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Courses</span>
          </Link>
          <Link href="/Blog">
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Blog</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
