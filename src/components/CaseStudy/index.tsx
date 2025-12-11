"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    type: "video" as const,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Project Showcase",
  },
  {
    type: "content" as const,
    quote:
      "We partnered to create a brand identity that captures the essence of modern legal excellence, combining tradition with forward-thinking design.",
    projectName: "PALLAS PARTNERS",
    category: "Branding & Website",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
    ],
  },
  {
    type: "content" as const,
    quote:
      "A complete digital transformation for a renewable energy leader, building a platform that communicates their commitment to sustainable innovation.",
    projectName: "TIAN RENEWABLES",
    category: "Digital Platform",
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2000&auto=format&fit=crop",
    ],
  },
  {
    type: "content" as const,
    quote:
      "Crafting a fintech experience that balances trust and innovation, designed to make complex financial services feel accessible and intuitive.",
    projectName: "NOVA FINANCE",
    category: "App Development",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    ],
  },
];

export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[activeSlide];

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#0A0A0A]">
      <div
        className="relative h-screen"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 transition-opacity duration-500">
          {currentSlide.type === "video" ? (
            <div className="relative w-full h-full">
              <video
                key={activeSlide}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={currentSlide.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent flex items-end">
                <div className="p-10 md:p-16 lg:p-20">
                  <h2 className="text-[#F2F2F2] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                    {currentSlide.title}
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="bg-[#F5F5F0] p-10 md:p-16 lg:p-20 flex flex-col justify-between">
                <div>
                  <p className="text-[#0A0A0A]/40 text-[10px] uppercase tracking-[2px] mb-6">
                    {currentSlide.category}
                  </p>
                  <p className="text-[#0A0A0A]/70 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                    {currentSlide.quote}
                  </p>
                </div>
                <div className="mt-auto pt-16">
                  <h2 className="text-[#0A0A0A] text-2xl md:text-3xl font-light tracking-[4px] uppercase">
                    {currentSlide.projectName}
                  </h2>
                  <button className="mt-6 inline-flex items-center gap-2 text-[#0A0A0A]/70 text-sm font-light hover:text-[#0A0A0A] transition-colors group">
                    View Project
                    <span className="w-5 h-5 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center group-hover:border-[#0A0A0A]/60 transition-colors">
                      <svg
                        className="w-2.5 h-2.5"
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
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={`relative ${currentSlide.images && currentSlide.images.length > 1 ? "grid grid-cols-2" : ""}`}
              >
                {currentSlide.images && currentSlide.images.length === 1 ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${currentSlide.images[0]}')`,
                    }}
                  />
                ) : (
                  currentSlide.images?.map((img, idx) => (
                    <div key={idx} className="relative h-full min-h-[300px] lg:min-h-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-30">
          <div className="group pointer-events-auto w-24 h-40 flex items-center justify-start pl-6 md:pl-12 lg:pl-20">
            <button
              onClick={prevSlide}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-[#F2F2F2] drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="group pointer-events-auto w-24 h-40 flex items-center justify-end pr-6 md:pr-12 lg:pr-20">
            <button
              onClick={nextSlide}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-[#F2F2F2] drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-[#F2F2F2] w-12 shadow-md"
                  : "bg-[#F2F2F2]/40 hover:bg-[#F2F2F2]/60 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
