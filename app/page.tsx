import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';

const content = {
  heroTitle: "Thoughtfully designed spaces for the way you live",
  heroSubtitle: "MODERN. CLASSIC. REFINED.",
  heroCtaBooking: "VIEW OUR WORK",
  heroCtaContact: "GET IN TOUCH",
    aboutTitle: "Meet Amy",
    aboutCopy: "I think I first fell in love with design in sixth grade, when my older brother built me a dollhouse for Christmas. I spent hours wallpapering tiny rooms, searching carpet stores for remnants, and carefully decorating each space down to the smallest detail. Looking back, it was probably the beginning of what would one day become Amy Jackson Design.\n\nAround 2009, I launched Amy Jackson Interior Design, now rebranded as Amy Jackson Design. Since then, I’ve had the privilege of helping clients create homes that feel polished, welcoming, and uniquely personal. I’m drawn to design that is modern, classic, and refined—spaces that feel fresh and beautiful today while remaining warm and inviting for years to come.\n\nI believe great design should not only look aesthetically pleasing, but should also help people feel more at home in the spaces they live in every day. My goal is to create rooms that feel comfortable, collected, and effortlessly livable.",
    aboutQuote: "",
  servicesTitle: "Design Services",
  service1Title: "Full-Service Interior Design",
  service1Copy: "Comprehensive design from concept to completion, managing every detail of your project.",
  service2Title: "Design Consultation",
  service2Copy: "Expert advice and direction for your space with actionable recommendations and sourcing.",
  service3Title: "Room Refresh",
  service3Copy: "Transform a single room with updated furnishings, lighting, and decor while keeping existing layout.",
  portfolioTitle: "Featured Projects",
  processTitle: "Our Design Process",
  processStep1: "1. Discovery Call",
  processStep2: "2. Initial Consultation",
  processStep3: "3. Design Development",
  processStep4: "4. Installation",
  processStep5: "5. Final Reveal",
  contactTitle: "Begin Your Transformation",
  contactCopy: "Ready to fall in love with your space? Schedule a complimentary initial consultation.",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactPhone: "Phone Number",
  contactMessage: "Tell us about your project...",
  contactSubmit: "Request Consultation",
  contactSending: "Sending...",
  contactSuccess: "Thank You! Your request has been sent successfully.",
  footer: "© 2026 Amy Jackson Design. All rights reserved."
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header t={content} />
      
      <main>
        <Hero t={content} />
        
        <section id="about" className="py-16 md:py-20 px-6 sm:px-8 md:px-20 bg-ivory">
          <About t={content} />
        </section>
        
        <section id="services" className="py-16 md:py-20 px-6 sm:px-8 md:px-20 bg-greige">
          <Services t={content} />
        </section>
        
        <section id="portfolio" className="py-16 md:py-20 px-6 sm:px-8 md:px-20 bg-ivory">
          <Portfolio t={content} />
        </section>
        
        <section id="process" className="py-16 md:py-20 px-6 sm:px-8 md:px-20 bg-greige">
          <Process t={content} />
        </section>
        
        <section id="contact" className="py-16 md:py-20 px-6 sm:px-8 md:px-20 bg-ivory">
          <Contact t={content} />
        </section>
      </main>
      
      <footer className="py-6 md:py-8 px-6 sm:px-8 md:px-20 border-t border-gray-200 bg-greige">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-10 w-36 md:h-12 md:w-44">
              <img
                src="/amy-logo-spell.png"
                alt="Amy Jackson Design Logo"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </div>
          <div className="text-xs text-navy opacity-60 text-center md:text-left">{content.footer}</div>
        </div>
      </footer>
    </div>
  );
}