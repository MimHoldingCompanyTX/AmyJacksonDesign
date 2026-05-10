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
    <header className="fixed top-0 w-full z-50 bg-[rgba(245,241,235,0.98)] backdrop-blur-md border-b border-brass/40 shadow-sm"
      style={{
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-20">
          {/* Logo section */}
          <div className="flex items-center flex-1 min-w-0 pr-2 md:flex-none md:pr-0 md:max-w-[50%] lg:max-w-[56%]">
            <div className="relative h-12 w-56 max-w-[14rem] sm:h-16 sm:w-72 sm:max-w-[18rem] md:h-20 md:w-84 md:max-w-[21rem] lg:h-24 lg:w-96 lg:max-w-[24rem] flex-shrink-0">
              <Image
                src="/amy-logo-spell.png"
                alt="Amy Jackson Design Logo"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 336px, 384px"
              />
            </div>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-brass hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brass/50 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Backdrop overlay for better contrast */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu container */}
        <div 
          className={`absolute inset-x-0 top-16 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          style={{ top: '56px' }}
        >
          <div className="px-4 py-6 bg-navy/95 backdrop-blur-lg border-t border-brass/40 shadow-xl">
          <nav className="space-y-2">
            <a 
              href="#about" 
              className="block px-5 py-4 text-lg font-semibold text-ivory hover:text-brass hover:bg-navy/80 rounded-xl transition-all duration-200 active:scale-[0.98] border border-navy/30"
              onClick={closeMenu}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="block px-5 py-4 text-lg font-semibold text-ivory hover:text-brass hover:bg-navy/80 rounded-xl transition-all duration-200 active:scale-[0.98] border border-navy/30"
              onClick={closeMenu}
            >
              SERVICES
            </a>
            <a 
              href="#portfolio" 
              className="block px-5 py-4 text-lg font-semibold text-ivory hover:text-brass hover:bg-navy/80 rounded-xl transition-all duration-200 active:scale-[0.98] border border-navy/30"
              onClick={closeMenu}
            >
              PORTFOLIO
            </a>
            <a 
              href="#process" 
              className="block px-5 py-4 text-lg font-semibold text-ivory hover:text-brass hover:bg-navy/80 rounded-xl transition-all duration-200 active:scale-[0.98] border border-navy/30"
              onClick={closeMenu}
            >
              PROCESS
            </a>
            <a 
              href="#contact" 
              className="block px-5 py-4 text-lg font-semibold text-ivory hover:text-brass hover:bg-navy/80 rounded-xl transition-all duration-200 active:scale-[0.98] border border-navy/30"
              onClick={closeMenu}
            >
              CONTACT
            </a>
          </nav>
        </div>
        </div>
      </div>

      {/* Desktop tagline */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-navy opacity-70 font-sans font-light tracking-widest whitespace-nowrap">MODERN. TIMELESS. REFINED.</div>
    </header>
  );
}