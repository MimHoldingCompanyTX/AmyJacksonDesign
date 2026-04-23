"use client";

interface AboutProps {
  t: any;
}

export default function About({ t }: AboutProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-6">
            {t.aboutTitle}
          </h2>
          <div className="gold-accent mb-8"></div>
          <p className="text-lg text-navy/80 mb-8 leading-relaxed">
            {t.aboutCopy}
          </p>
          <blockquote className="border-l-4 border-brass pl-6 py-2 mb-8">
            <p className="text-xl font-serif font-semibold italic text-navy">
              {t.aboutQuote}
            </p>
            <cite className="text-sm text-navy/60 mt-2 block">— Amy Jackson</cite>
          </blockquote>
        </div>
        
        <div className="relative">
          <div className="aspect-square relative overflow-hidden">
            {/* Placeholder for Amy's portrait - you should replace this with an actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 text-navy/20">🎨</div>
                <div className="text-navy/40 font-serif text-lg">Amy Jackson Portrait</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-brass bg-ivory/80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl text-brass font-serif font-semibold">15+</div>
              <div className="text-xs text-navy font-sans tracking-widest">YEARS</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brass bg-ivory/80 p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-navy font-sans tracking-widest mb-1">FEATURED IN</div>
              <div className="text-xs text-navy/60 font-sans">Architectural Digest</div>
              <div className="text-xs text-navy/60 font-sans">Elle Decor</div>
              <div className="text-xs text-navy/60 font-sans">House Beautiful</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}