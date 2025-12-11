"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website",
    subtitle: "Development",
    description:
      "Smart, functional, and beautifully designed. Websites that look sharp, work hard, and drive results. We design and build digital brand experiences, seamlessly blending form and function.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    hasButton: false,
  },
  {
    title: "Application",
    subtitle: "Development",
    description:
      "Powerful, intuitive applications built for performance. From web apps to mobile solutions, we create digital products that solve real problems and deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
    hasButton: true,
  },
  {
    title: "Branding",
    subtitle: "& Identity",
    description:
      "Designed to elevate, we craft impeccable visual and verbal identities that reflect who you are today and where you're headed next - whether refining your brand or redefining it entirely.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop",
    hasButton: false,
  },
  {
    title: "Content Strategy",
    subtitle: "& Marketing",
    description:
      "Strategic content that tells your story and connects with your audience. We develop comprehensive content frameworks that drive engagement and build lasting relationships.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    hasButton: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    gsap.fromTo(
      cards.children,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 bg-[#0A0A0A]"
    >
      {/* Section spacer */}
      <div style={{ height: '80px', width: '100%' }}></div>
      <div style={{ height: '1px', width: '100%', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'rgba(242,242,242,0.2)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px]">
            Expertise
          </p>
          <p className="text-[#F2F2F2]/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Working at the intersection of strategy & creativity, developing high-growth corporate brands
            that not only lead today but inspire the possibilities of tomorrow.
          </p>
        </div>

        {/* Services Grid - 4 columns with images */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {service.hasButton && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]/20">
                    <button className="px-8 py-3 rounded-full bg-[#F2F2F2]/90 backdrop-blur-sm text-[#0A0A0A] text-xs uppercase tracking-[2px] font-light hover:bg-[#F2F2F2] transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#F2F2F2] text-lg md:text-xl font-light mb-1">
                  {service.title}
                </h3>
                <h4 className="text-[#F2F2F2]/50 text-lg md:text-xl font-light mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-[#F2F2F2]/50 text-xs font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

