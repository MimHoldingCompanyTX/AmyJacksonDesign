"use client";

interface HeaderProps {
  t: any;
}

export default function Header({ t }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 px-8 py-5 md:px-12 md:py-6 flex justify-between items-center"
      style={{
        background: 'rgba(245, 241, 235, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(184, 134, 11, 0.2)'
      }}
    >
      {/* Logo section with Amy Jackson Design logo */}
      <div className="flex items-center">
        <img 
          src="/amy-jackson-logo.png" 
          alt="Amy Jackson Design Logo" 
          className="h-12 md:h-14 w-auto"
        />
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#portfolio" className="nav-link">PORTFOLIO</a>
        <a href="#process" className="nav-link">PROCESS</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </nav>
      
      {/* Mobile menu button */}
      <button className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-0.5 bg-navy"></span>
        <span className="w-6 h-0.5 bg-navy"></span>
        <span className="w-6 h-0.5 bg-navy"></span>
      </button>
      
      {/* Tagline (visible on desktop) */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 text-xs text-navy opacity-60 font-sans font-light tracking-widest">
        MODERN. TIMELESS. REFINED.
      </div>
    </header>
  );
}