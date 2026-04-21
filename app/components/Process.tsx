"use client";

interface ProcessProps {
  t: any;
}

export default function Process({ t }: ProcessProps) {
  const steps = [
    {
      number: "01",
      title: t.processStep1,
      description: "We begin with a complimentary phone conversation to understand your vision, timeline, and budget.",
      icon: "📞"
    },
    {
      number: "02",
      title: t.processStep2,
      description: "An in-person meeting at your space to assess the environment, discuss possibilities, and establish goals.",
      icon: "🏠"
    },
    {
      number: "03",
      title: t.processStep3,
      description: "Creation of comprehensive design concepts, material selections, and detailed project plans tailored to your vision.",
      icon: "🎨"
    },
    {
      number: "04",
      title: t.processStep4,
      description: "Coordination of all project elements, from furniture delivery to contractor management, ensuring seamless execution.",
      icon: "🔨"
    },
    {
      number: "05",
      title: t.processStep5,
      description: "The moment of transformation—revealing your beautifully designed space, ready for you to enjoy.",
      icon: "✨"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-navy mb-4">
          {t.processTitle}
        </h2>
        <div className="gold-accent mb-6"></div>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto">
          Our structured approach ensures every project is executed with precision, transparency, and exceptional results
        </p>
      </div>
      
      {/* Desktop timeline */}\n      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brass/30 to-transparent"></div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left side content for even steps, right side for odd steps */}\n              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                <div className={`inline-block ${index % 2 === 0 ? 'text-right' : 'text-left'} max-w-md`}>
                  <div className="text-5xl mb-4 opacity-20">{step.icon}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-brass font-serif font-bold text-2xl">{step.number}</div>
                    <h3 className="text-xl font-serif font-light text-navy">{step.title}</h3>
                  </div>
                  <p className="text-navy/70">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Center timeline dot */}\n              <div className="relative z-10">
                <div className="w-8 h-8 border-2 border-brass bg-ivory rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-brass rounded-full"></div>
                </div>
              </div>
              
              {/* Right side content for even steps, left side for odd steps */}\n              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile timeline */}\n      <div className="lg:hidden space-y-12">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start gap-6">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-brass bg-ivory rounded-full flex items-center justify-center text-brass font-serif font-bold text-xl">
                {step.number}
              </div>
              {step.number !== "05" && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brass/30 to-transparent"></div>
              )}
            </div>
            <div className="flex-1 pt-1">
              <div className="text-3xl mb-2 opacity-30">{step.icon}</div>
              <h3 className="text-lg font-serif font-light text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-navy/70 text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-20">
        <div className="bg-gradient-to-r from-neutral to-greige border border-gray-100 p-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-light text-navy mb-4">
            Ready to begin your design journey?
          </h3>
          <p className="text-navy/70 mb-8 max-w-2xl mx-auto">
            Schedule your complimentary discovery call today and take the first step toward transforming your space.
          </p>
          <a 
            href="#contact" 
            className="cta-button px-10 py-4 text-sm tracking-widest uppercase"
          >
            SCHEDULE DISCOVERY CALL
          </a>
        </div>
      </div>
    </div>
  );
}