"use client";

interface PortfolioProps {
  t: any;
}

export default function Portfolio({ t }: PortfolioProps) {
  const projects = [
    {
      id: 1,
      title: "Uptown Penthouse",
      category: "Residential",
      type: "Full Renovation",
      imageColor: "from-blue-100/20 to-teal-100/20",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Lakehouse Retreat",
      category: "Residential",
      type: "Interior Design",
      imageColor: "from-amber-100/20 to-orange-100/20",
      accentColor: "bg-amber-500"
    },
    {
      id: 3,
      title: "Urban Loft",
      category: "Residential",
      type: "Space Planning",
      imageColor: "from-purple-100/20 to-pink-100/20",
      accentColor: "bg-purple-500"
    },
    {
      id: 4,
      title: "Heritage Restoration",
      category: "Historic",
      type: "Preservation",
      imageColor: "from-green-100/20 to-emerald-100/20",
      accentColor: "bg-green-500"
    },
    {
      id: 5,
      title: "Modern Kitchen",
      category: "Residential",
      type: "Kitchen Design",
      imageColor: "from-gray-100/20 to-slate-100/20",
      accentColor: "bg-ivory0"
    },
    {
      id: 6,
      title: "Corporate Office",
      category: "Commercial",
      type: "Office Design",
      imageColor: "from-cyan-100/20 to-sky-100/20",
      accentColor: "bg-cyan-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
          {t.portfolioTitle}
        </h2>
        <div className="gold-accent mb-6"></div>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto mb-10">
          Explore our curated portfolio of thoughtfully designed spaces
        </p>
        
        {/* Filter tabs */}\n        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-brass text-white text-sm tracking-widest uppercase">ALL</button>
          <button className="px-6 py-2 border border-navy/20 text-navy text-sm tracking-widest uppercase hover:border-brass transition-colors">RESIDENTIAL</button>
          <button className="px-6 py-2 border border-navy/20 text-navy text-sm tracking-widest uppercase hover:border-brass transition-colors">COMMERCIAL</button>
          <button className="px-6 py-2 border border-navy/20 text-navy text-sm tracking-widest uppercase hover:border-brass transition-colors">HISTORIC</button>
          <button className="px-6 py-2 border border-navy/20 text-navy text-sm tracking-widest uppercase hover:border-brass transition-colors">KITCHEN & BATH</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden bg-ivory border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Project image placeholder */}\n            <div className={`aspect-[4/3] relative bg-gradient-to-br ${project.imageColor} flex items-center justify-center`}>
              <div className="text-center p-8">
                <div className="text-4xl mb-4 text-navy/20">🏠</div>
                <div className="text-navy/40 font-serif text-lg">{project.title}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-navy mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-navy/60 font-sans tracking-widest uppercase">{project.category}</span>
                    <span className="w-1 h-1 bg-brass rounded-full"></span>
                    <span className="text-xs text-navy/60 font-sans">{project.type}</span>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${project.accentColor}`}></div>
              </div>
              
              <p className="text-navy/70 text-sm mb-6 line-clamp-2">
                {project.category === "Residential" && "A beautifully transformed living space blending modern amenities with timeless elegance."}
                {project.category === "Historic" && "Careful preservation of original character while introducing contemporary comfort and function."}
                {project.category === "Commercial" && "A professional workspace designed for productivity, collaboration, and employee wellbeing."}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-navy/50">
                  <span className="flex items-center gap-1">
                    <span>📐</span>
                    <span>Floor Plans</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span>🎨</span>
                    <span>Material Board</span>
                  </span>
                </div>
                <button className="text-brass text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW PROJECT →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <a 
          href="#contact" 
          className="cta-button-secondary px-10 py-4 text-sm tracking-widest uppercase"
        >
          VIEW FULL PORTFOLIO
        </a>
      </div>
    </div>
  );
}