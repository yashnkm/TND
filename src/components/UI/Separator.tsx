"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SeparatorProps {
  variant?: "dark" | "light";
}

export default function Separator({ variant = "dark" }: SeparatorProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const bgColor = variant === "dark" ? "bg-[#0A0A0A]" : "bg-[#F5F5F0]";
  const lineColor = variant === "dark" ? "bg-[#F2F2F2]/20" : "bg-[#0A0A0A]/10";

  return (
    <div className={`relative z-20 ${bgColor} py-12 md:py-16 lg:py-20`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div
          ref={lineRef}
          className={`h-px ${lineColor} origin-left`}
        />
      </div>
    </div>
  );
}
