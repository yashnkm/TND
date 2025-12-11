"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  "Tolhurst Fisher",
  "Bronzegate",
  "Wesleyan",
  "School of Design",
  "Vertical Future",
  "Pelion",
  "Travelers Haven",
  "Ocean Census",
  "Siraj Omar LLC",
  "Conrad+",
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
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
      id="clients"
      className="relative z-20 bg-[#F5F5F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#0A0A0A]/40 text-[10px] uppercase tracking-[2px] mb-6">
            Our Clients
          </p>
          <p className="text-[#0A0A0A]/70 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Partnering with progressive businesses to uncover their true purpose, helping them drive
            meaningful change & move the world forward.
          </p>
        </div>

        {/* Clients Grid - 5 columns, 2 rows */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#0A0A0A]/10"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-[#F5F5F0] p-8 md:p-12 flex items-center justify-center min-h-[120px] md:min-h-[150px] group cursor-pointer hover:bg-white transition-colors duration-300"
            >
              <span className="text-[#0A0A0A]/60 text-sm md:text-base font-light tracking-wide text-center group-hover:text-[#0A0A0A] transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
