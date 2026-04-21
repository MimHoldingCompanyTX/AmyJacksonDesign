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
      {/* Logo section with AJ monogram */}
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 md:w-12 md:h-12 border border-brass flex items-center justify-center">
          <div className="text-navy font-serif font-bold text-xl md:text-2xl tracking-tight">AJ</div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brass"></div>
        </div>
        <div className="flex flex-col">
          <div className="text-navy font-serif font-bold text-lg md:text-xl tracking-widest">AMY JACKSON</div>
          <div className="text-xs md:text-sm text-navy opacity-70 font-sans font-light tracking-widest flex items-center gap-2">
            <span className="h-px w-4 bg-brass"></span>
            DESIGN
            <span className="h-px w-4 bg-brass"></span>
          </div>
        </div>
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