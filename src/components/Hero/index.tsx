"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BeamsBackground } from "@/components/UI/beams-background";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
    });

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <BeamsBackground intensity="medium" />
      <div className="relative z-10 h-full flex items-center">
        <div
          ref={contentRef}
          className="w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
        >
          <p className="text-[#F2F2F2]/50 text-[10px] md:text-xs uppercase tracking-[2px] mb-8">
            Tech meets creativity
          </p>
          <h1 className="text-[#F2F2F2] text-3xl md:text-4xl lg:text-[48px] font-light leading-[1.2] tracking-[-0.5px] max-w-2xl">
            We build <span className="italic">applications</span>, craft{" "}
            <span className="italic">content</span>,
            <br className="hidden md:block" />
            and drive <span className="italic">growth</span> through marketing.
          </h1>
          <p className="text-[#F2F2F2]/60 text-sm md:text-base font-light mt-6 max-w-lg">
            TechView AI × Diraav — A fusion of technology and creative marketing
            to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
