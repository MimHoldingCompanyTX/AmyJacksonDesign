"use client";

import Image from 'next/image';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Amy Jackson Design - Modern kitchen interior"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-8 md:px-20 py-32 max-w-6xl mx-auto text-left">
        <div className="mb-8">
          <div className="gold-accent mb-6"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            {t.heroTitle}
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-12 bg-brass"></span>
            <p className="text-lg md:text-xl text-white/90 font-sans font-normal tracking-widest uppercase">
              {t.heroSubtitle}
            </p>
            <span className="h-px w-12 bg-brass"></span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="#portfolio" 
            className="cta-button text-center md:w-auto px-10 py-4 text-sm tracking-widest uppercase"
          >
            {t.heroCtaBooking}
          </a>
          <a 
            href="#contact" 
            className="cta-button-secondary text-center md:w-auto px-10 py-4 text-sm tracking-widest uppercase"
          >
            {t.heroCtaContact}
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-xs text-white/60 tracking-widest mb-2">SCROLL</div>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </section>
  );
}