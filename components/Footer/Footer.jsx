import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-8 px-4 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </p>
        
        <nav className="flex space-x-6 text-sm">
          <Link href="/" style={{ textDecoration: 'none' }}>Home</Link>
          <Link href="/services" style={{ textDecoration: 'none' }}>Services</Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
        </nav>

        <div className="flex space-x-4">
          {/* Пример социални икони, можеш да сложиш иконки ако искаш */}
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            Twitter
          </Link>
          <Link href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
