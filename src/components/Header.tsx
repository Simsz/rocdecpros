'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-bold text-xl md:text-2xl flex items-center">
            <span className="text-red-600">Rochester</span>
            <span className="ml-1">Deck Pros</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-red-500 ${
                isActive(link.href) ? 'text-red-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="tel:+15855551234" 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
          >
            (585) 555-1234
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 px-4 py-4 flex flex-col space-y-3 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-red-500 ${
                isActive(link.href) ? 'text-red-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="tel:+15855551234" 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors text-center"
          >
            (585) 555-1234
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header; 