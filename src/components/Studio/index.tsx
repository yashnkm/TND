"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imagesRef.current;
    if (!images) return;

    gsap.fromTo(
      images.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: images,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-20 bg-[#0A0A0A]"
    >
      {/* Section spacer */}
      <div style={{ height: '80px', width: '100%' }}></div>
      <div style={{ height: '1px', width: '100%', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'rgba(242,242,242,0.2)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-6">
            Our Studio
          </p>
          <p className="text-[#F2F2F2]/80 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            The dynamic TechView & Diraav collective brings together far more than just great talent. Thriving in our
            energetic, collaborative environment - we believe that this yields the high quality & consistency
            of work for which we are renowned.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
          >
            About Us
            <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Team Images Grid */}
        <div
          ref={imagesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Image */}
          <div className="relative h-[300px] md:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] md:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
