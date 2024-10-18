"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-20'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-20">
        <a href="#" className="text-2xl font-bold text-gray-800 flex items-center">
          <Image
            src="/logo-fmsbd.png"
            alt="Logo"
            width={100}  
            height={100}  
            className="object-contain"
          />
        </a>
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a onClick={() => scrollToSection('about-us')} className="cursor-pointer hover:text-gray-800">About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('join-us')} className="cursor-pointer hover:text-gray-800">Join Us</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact-us')} className="cursor-pointer hover:text-gray-800">Contact</a>
          </li>
        </ul>
        <a href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
