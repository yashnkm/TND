"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Working with the team at TechView & Diraav has been one of the highlights of setting up Pallas. Right from the outset, the team immediately understood our vision and mission for the new firm. More importantly, they were able to effortlessly articulate what we have set out to achieve into a truly exceptional & stunning brand identity, website & materials, adding immeasurable value to the overall project. The process was not just effortless but enormous fun & the commitment of the whole team unsurpassed. We are very excited to continue working with TechView & Diraav through this next phase of our firm's growth.",
    author: "Natasha Harrison",
    role: "Founder & Managing Partner, Pallas Partners",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    quote:
      "From start to finish, TechView & Diraav were outstanding. We were taken aback by the depth of the research phases, which led to the formation of a truly unique brand strategy and messaging framework. They clearly understood our objectives and delivered our rebrand and website project with grace and poise throughout. The team has been exemplary, and as a result it's my honour to highly recommend TechView & Diraav.",
    author: "Christoph Sherrer",
    role: "Co-CEO, Tian Renewables",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[#F5F5F0]"
    >
      {/* Section spacer */}
      <div style={{ height: '80px', width: '100%' }}></div>
      <div style={{ height: '1px', width: '100%', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'rgba(10,10,10,0.15)' }}></div>

      <div className="py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Quote */}
        <div className="bg-[#0A0A0A] p-10 md:p-16 lg:p-20 flex flex-col justify-between min-h-[500px]">
          <div>
            <p className="text-[#F2F2F2]/90 text-sm md:text-base font-light leading-relaxed italic">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>
          </div>
          <div className="mt-12">
            <p className="text-[#F2F2F2] text-sm font-light">
              {currentTestimonial.author}
            </p>
            <p className="text-[#F2F2F2]/50 text-xs font-light mt-1">
              {currentTestimonial.role}
            </p>

            {/* Navigation Dots */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-8 h-8 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center hover:border-[#F2F2F2]/60 transition-colors"
              >
                <svg
                  className="w-3 h-3 text-[#F2F2F2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-8 h-8 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center hover:border-[#F2F2F2]/60 transition-colors"
              >
                <svg
                  className="w-3 h-3 text-[#F2F2F2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${currentTestimonial.image}')` }}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
