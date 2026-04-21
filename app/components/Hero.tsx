"use client";

import Image from 'next/image';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/hero-image.jpg"
        alt="Amy Jackson Design - Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg text-center">
          {t.heroTitle}
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl mb-8 text-white drop-shadow text-center max-w-2xl">
          {t.heroSubtitle}
        </p>
        <a href="#contact" className="cta-button px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition">
          {t.heroCtaBooking}
        </a>
      </div>
    </div>
  );
}