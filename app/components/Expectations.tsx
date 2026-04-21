"use client";

interface ExpectationsProps {
  t: any;
}

export default function Expectations({ t }: ExpectationsProps) {
  const steps = [
    t.expectationsStep1,
    t.expectationsStep2,
    t.expectationsStep3,
    t.expectationsStep4,
    t.expectationsStep5,
  ];

  return (
    <section className="py-16 px-5 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">
          {t.expectationsTitle}
        </h2>
        
        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Circle on timeline */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white z-10"></div>
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-light p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="inline-block w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-primary">
                      {step.split(': ')[0]}
                    </h3>
                  </div>
                  <p className="text-dark pl-9">
                    {step.split(': ')[1] || step}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}