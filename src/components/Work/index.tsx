"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Renewable Energy Branding & Website",
    client: "Tian Renewables",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "Prestigious Design School Brand Refresh",
    client: "School of Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Financial Services Platform",
    client: "KW Investments",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Tech Startup Identity",
    client: "The Fintech App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Media Company Rebrand",
    client: "Digital Media Co",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-20 bg-[#0A0A0A]"
    >
      {/* Section spacer */}
      <div style={{ height: '80px', width: '100%' }}></div>
      <div style={{ height: '1px', width: '100%', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'rgba(242,242,242,0.2)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex items-center justify-between">
          <div />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
          >
            View All Work
            <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Projects Grid - 3 columns */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider border border-white/30">
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[#F2F2F2] text-base font-light mb-1">
                {project.title}
              </h3>
              <p className="text-[#F2F2F2]/50 text-xs font-light">
                {project.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

