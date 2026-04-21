"use client";

interface HeaderProps {
  t: any;
}

export default function Header({ t }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 px-4 py-3 md:px-10 md:py-5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0"
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="logo font-serif text-lg md:text-xl font-bold tracking-widest text-primary text-left">
        Amy Jackson Design
      </div>
      <div className="nav-controls flex flex-col md:flex-row items-center gap-3 md:gap-8 w-full md:w-auto">
        <ul className="flex list-none gap-2 md:gap-6 m-0 p-0 justify-center flex-wrap">
          <li>
            <a href="#story" className="no-underline text-primary font-lato text-xs md:text-sm uppercase tracking-widest md:tracking-widest font-normal relative pb-1 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-accent after:transition-width after:duration-300 hover:after:w-full whitespace-nowrap">
              {t.navStory}
            </a>
          </li>
          <li>
            <a href="#transformations" className="no-underline text-primary font-lato text-xs md:text-sm uppercase tracking-widest md:tracking-widest font-normal relative pb-1 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-accent after:transition-width after:duration-300 hover:after:w-full whitespace-nowrap">
              {t.navTransformations}
            </a>
          </li>
          <li>
            <a href="#services" className="no-underline text-primary font-lato text-xs md:text-sm uppercase tracking-widest md:tracking-widest font-normal relative pb-1 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-accent after:transition-width after:duration-300 hover:after:w-full whitespace-nowrap">
              {t.navServices}
            </a>
          </li>
          <li>
            <a href="#contact" className="no-underline text-primary font-lato text-xs md:text-sm uppercase tracking-widest md:tracking-widest font-normal relative pb-1 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-accent after:transition-width after:duration-300 hover:after:w-full whitespace-nowrap">
              {t.navContact}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}