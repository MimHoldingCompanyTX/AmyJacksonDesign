"use client";

interface ServicesProps {
  t: any;
}

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-16 px-5 md:px-10 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">
          {t.servicesTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service 1 - Placeholder */}
          <div className="service-card rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-10 min-h-[400px]">
            <div className="text-center">
              <div className="text-4xl text-gray-400 mb-4">+</div>
              <h3 className="text-xl font-serif font-bold text-gray-500 mb-4">
                Service 1
              </h3>
              <p className="text-gray-400 mb-6 text-center">
                New service details coming soon
              </p>
              <div className="space-y-2 mb-6 opacity-50">
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 1</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 2</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 3</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 2 - Placeholder */}
          <div className="service-card rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-10 min-h-[400px]">
            <div className="text-center">
              <div className="text-4xl text-gray-400 mb-4">+</div>
              <h3 className="text-xl font-serif font-bold text-gray-500 mb-4">
                Service 2
              </h3>
              <p className="text-gray-400 mb-6 text-center">
                New service details coming soon
              </p>
              <div className="space-y-2 mb-6 opacity-50">
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 1</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 2</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-300 mr-2">✓</span>
                  <span className="text-gray-400">Feature 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}