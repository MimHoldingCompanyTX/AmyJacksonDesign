"use client";

import Image from 'next/image';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Amy Jackson Design - Modern kitchen interior"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-navy/20 to-transparent md:from-navy/30 md:to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-20 py-24 md:py-32 max-w-6xl mx-auto text-left w-full">
        <div className="mb-6 md:mb-8">
          <div className="gold-accent mb-4 md:mb-6"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white mb-4 md:mb-6 leading-tight tracking-tight max-w-2xl">
            {t.heroTitle}
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 md:mb-10">
            <span className="hidden sm:block h-px w-8 sm:w-12 bg-brass"></span>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans font-normal tracking-widest uppercase text-center sm:text-left">
              {t.heroSubtitle}
            </p>
            <span className="hidden sm:block h-px w-8 sm:w-12 bg-brass"></span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a 
            href="#portfolio" 
            className="cta-button text-center px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest uppercase w-full sm:w-auto"
          >
            {t.heroCtaBooking}
          </a>
          <a 
            href="#contact" 
            className="cta-button-secondary text-center px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm tracking-widest uppercase w-full sm:w-auto"
          >
            {t.heroCtaContact}
          </a>
        </div>
      </div>
      
      {/* Scroll indicator - hide on mobile */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex">
        <div className="text-xs text-white/60 tracking-widest mb-2">SCROLL</div>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </section>
  );
}