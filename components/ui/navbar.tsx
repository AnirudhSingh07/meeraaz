'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
          <img src="/Mlogo.png" alt="" className='h-[13vw] w-[13vw]'  />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition font-medium">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-indigo-600 transition font-medium">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 transition font-medium">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
