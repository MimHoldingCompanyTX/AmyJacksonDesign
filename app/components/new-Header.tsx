"use client";
import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  t: any;
}

export default function Header({ t }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu toggle clicked, was open:', menuOpen);
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    console.log('Menu closing');
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(245,241,235,0.98)] backdrop-blur-md border-b border-brass/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
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
            <span className="ml-2 text-[10px] sm:text-xs md:text-sm font-serif font-semibold text-navy tracking-[0.05em] truncate">
              AMY JACKSON DESIGN
            </span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">ABOUT</a>
            <a href="#services" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">SERVICES</a>
            <a href="#portfolio" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">PORTFOLIO</a>
            <a href="#process" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">PROCESS</a>
            <a href="#contact" className="text-navy hover:text-brass transition-colors duration-300 font-medium text-sm tracking-wide">CONTACT</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy bg-red-100 border-2 border-red-500"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {!menuOpen ? (
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-ivory/98 border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-3">
            <a href="#about" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all">ABOUT</a>
            <a href="#services" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all">SERVICES</a>
            <a href="#portfolio" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all">PORTFOLIO</a>
            <a href="#process" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all">PROCESS</a>
            <a href="#contact" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-navy hover:text-brass hover:bg-white/60 rounded-lg transition-all">CONTACT</a>
          </nav>
        </div>
      )}

      {/* Desktop Tagline */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-navy opacity-70 font-sans font-light tracking-widest">
        MODERN. CLASSIC. REFINED.
      </div>
    </header>
  );
}