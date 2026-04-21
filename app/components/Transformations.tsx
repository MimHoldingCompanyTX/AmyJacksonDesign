"use client";

import Image from 'next/image';

interface TransformationsProps {
  t: any;
  showBefore: boolean;
  toggleImage: () => void;
}

export default function Transformations({ t, showBefore, toggleImage }: TransformationsProps) {
  return (
    <section id="transformations" className="py-16 px-5 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary text-center">
          {t.transTitle}
        </h2>
        <p className="text-lg text-dark text-center mb-12 max-w-2xl mx-auto">
          {t.transCopy}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Transformation 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">
              {t.story1Title}
            </h3>
            <div className="comparison-box" onClick={toggleImage}>
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={
                    showBefore 
                      ? "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
                      : "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&brightness=0.8&contrast=1.2"
                  }
                  alt={showBefore ? "Before transformation" : "After transformation"}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-2 text-center">
                  {showBefore ? t.labelAfter : t.labelBefore}
                </div>
              </div>
            </div>
            <p className="text-dark">
              A forgotten corner becomes a cozy reading nook with thoughtful placement of existing furniture and warm lighting.
            </p>
          </div>
          
          {/* Transformation 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">
              {t.story2Title}
            </h3>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800"
                alt="Calm organized space"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-dark">
              A cluttered home office transforms into a serene workspace with clever storage solutions and minimalist design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}