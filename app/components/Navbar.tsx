'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-white/10 rounded-full p-1.5 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Terhapist Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              Leanne Horvitz
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-indigo-300 transition-colors"
            >
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 