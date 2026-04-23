"use client";

interface ServicesProps {
  t: any;
}

export default function Services({ t }: ServicesProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
          {t.servicesTitle}
        </h2>
        <div className="gold-accent mb-6"></div>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto">
          Tailored design solutions to transform your space with elegance and purpose
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Full-Service Interior Design */}
        <div className="service-card group relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-brass bg-ivory flex items-center justify-center text-brass font-serif font-semibold text-lg">
            01
          </div>
          <h3 className="text-xl font-serif font-semibold text-navy mb-4">
            {t.service1Title}
          </h3>
          <div className="h-px w-12 bg-brass mb-6"></div>
          <p className="text-navy/70 mb-6">
            {t.service1Copy}
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Initial consultation & space assessment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Custom furniture plans & layouts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Material selection & sourcing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Project management & installation</span>
            </li>
          </ul>
          <a href="#contact" className="text-brass font-medium text-sm tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
            LEARN MORE
            <span className="text-brass">→</span>
          </a>
        </div>
        
        {/* Design Consultation */}
        <div className="service-card group relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-brass bg-ivory flex items-center justify-center text-brass font-serif font-semibold text-lg">
            02
          </div>
          <h3 className="text-xl font-serif font-semibold text-navy mb-4">
            {t.service2Title}
          </h3>
          <div className="h-px w-12 bg-brass mb-6"></div>
          <p className="text-navy/70 mb-6">
            {t.service2Copy}
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">2-hour in-depth consultation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Color palette & material recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Furniture layout optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Vendor & sourcing guidance</span>
            </li>
          </ul>
          <a href="#contact" className="text-brass font-medium text-sm tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
            LEARN MORE
            <span className="text-brass">→</span>
          </a>
        </div>
        
        {/* Room Refresh */}
        <div className="service-card group relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-brass bg-ivory flex items-center justify-center text-brass font-serif font-semibold text-lg">
            03
          </div>
          <h3 className="text-xl font-serif font-semibold text-navy mb-4">
            {t.service3Title}
          </h3>
          <div className="h-px w-12 bg-brass mb-6"></div>
          <p className="text-navy/70 mb-6">
            {t.service3Copy}
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Single room transformation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Updated decor & accessories</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Lighting & textile updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brass mt-1">✓</span>
              <span className="text-navy/80">Art & styling recommendations</span>
            </li>
          </ul>
          <a href="#contact" className="text-brass font-medium text-sm tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
            LEARN MORE
            <span className="text-brass">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}