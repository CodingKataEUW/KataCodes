'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="bg-white dark:bg-gray-900 border-b-[1px] border-b-[#333] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
                MySite
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
          className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 fixed top-16 left-0 w-3/4 h-full z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="px-4 pt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>

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
