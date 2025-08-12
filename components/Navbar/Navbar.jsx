'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Enso from '../Logo/Logo';
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className=" fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex gap-2 ">
            <Link className='flex' href="/">
<Enso className="stroke-gray-900 dark:stroke-white" />
      <div className='flex flex-col gap-[1px]'>
        <p className={`${specialElite.className}`}>KataCodes</p>
        <span className='text-xs '>(GLTdotNS)</span>
      </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div onClick={toggleMenu} className={`md:hidden ${isOpen ? 'absolute bg-black/10 fixed w-full h-full' : 'relative'}`}>
        <div
          className={`mobile-menu fixed top-16 left-0 w-3/4 h-full z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="px-4 flex items-start flex-col pt-4 pb-4 space-y-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>

            {/* Theme toggle button in mobile menu */}
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
