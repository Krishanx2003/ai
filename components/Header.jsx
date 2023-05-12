import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Blog', slug: 'blog' },
  { name: 'Courses', slug: 'courses' },
  { name: 'Tools', slug: 'tools' },
  { name: 'Contact', slug: 'contact' }
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">AiHubPro</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span>
            </Link>
          ))}
          <Link href="/about">
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">About</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .md\:float-left {
            float: none;
          }
          .md\:contents {
            display: block;
            text-align: center;
          }
          .md\:float-right {
            float: none;
          }
          .ml-4 {
            margin-left: 0;
          }
          .text-4xl {
            font-size: 3xl;
          }
        }
        @media (max-width: 480px) {
          .text-4xl {
            font-size: 2xl;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
