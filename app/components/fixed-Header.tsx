"use client";
import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  t: any;
}

export default function Header({ t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu toggle clicked, was open:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log('Menu closing');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(245,241,235,0.98)] backdrop-blur-md border-b border-brass/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo section */}
          <div className="flex items-center flex-shrink-0 max-w-[70%]">
            <div className="relative h-10 w-14 md:w-24 md:h-12 flex-shrink-0">
              <Image 
                src="/amy-jackson-logo-backup-20260423.jpg" 
                alt="Amy Jackson Design Logo" 
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 56px, 96px"
              />
            </div>
            <span className="ml-2 text-[10px] sm:text-xs md:text-sm font-serif font-semibold text-navy tracking-[0.05em] leading-tight truncate">
              AMY JACKSON DESIGN
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">ABOUT</a>
            <a href="#services" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">SERVICES</a>
            <a href="#portfolio" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">PORTFOLIO</a>
            <a href="#process" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">PROCESS</a>
            <a href="#contact" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">CONTACT</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-brass focus:outline-none focus:ring-2 focus:ring-brass transition-colors duration-200 z-50"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16 M4 12h16 M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18 L12 18 M6 6 L18 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none hidden'
        }`}
      >
        <div className="px-4 py-3 bg-ivory/98 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <nav className="space-y-1">
            <a href="#about" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all duration-200">ABOUT</a>
            <a href="#services" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all duration-200">SERVICES</a>
            <a href="#portfolio" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all duration-200">PORTFOLIO</a>
            <a href="#process" onClick={closeMenu} className="block px-4 py-y text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all duration-200">PROCESS</a>
            <a href="#contact" onClick={closeMenu} className="block px-4 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all duration-200">CONTACT</a>
          </nav>
        </div>
      </div>

      {/* Desktop tagline */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-navy opacity-70 font-sans font-light tracking-widest whitespace-nowrap">
        MODERN. CLASSIC. REFINED.
      </div>
    </header>
  );
}