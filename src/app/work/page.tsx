"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// NAVIGATION
// =============================================================================
const navLinks = [
  { name: "WORK", href: "/work" },
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT", href: "/contact" },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            <Link
              href="/home2"
              style={{
                color: "#F2F2F2",
                fontSize: "20px",
                fontWeight: 300,
                textDecoration: "none",
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ fontWeight: 500 }}>TechView</span>
              <span style={{ color: "rgba(242,242,242,0.5)", margin: "0 4px" }}>&</span>
              <span style={{ fontWeight: 500 }}>Diraav</span>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    color: link.href === "/work" ? "#F2F2F2" : "rgba(242,242,242,0.7)",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "1px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                padding: "8px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F2F2F2"
                strokeWidth="1.5"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "#0A0A0A",
            paddingTop: "80px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#F2F2F2",
                  fontSize: "28px",
                  fontWeight: 300,
                  letterSpacing: "2px",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// =============================================================================
// PROJECTS DATA
// =============================================================================
const projects = [
  {
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
    category: "Branding & Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    description: "Complete brand identity and website redesign for a prestigious international law firm.",
  },
  {
    title: "Renewable Energy Platform",
    client: "Tian Renewables",
    category: "Web Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop",
    description: "Digital platform showcasing sustainable energy solutions and investor relations.",
  },
  {
    title: "Design School Brand Refresh",
    client: "School of Design",
    category: "Branding",
    year: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "Modern brand refresh for a leading design institution.",
  },
  {
    title: "Financial Services Platform",
    client: "KW Investments",
    category: "Web Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "Secure investment platform with real-time portfolio tracking.",
  },
  {
    title: "Tech Startup Identity",
    client: "The Fintech App",
    category: "Branding & App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Brand identity and mobile app design for an innovative fintech startup.",
  },
  {
    title: "Media Company Rebrand",
    client: "Digital Media Co",
    category: "Branding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop",
    description: "Complete rebrand for a digital-first media company.",
  },
  {
    title: "E-Commerce Platform",
    client: "Urban Retail",
    category: "Web Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    description: "Full-stack e-commerce solution with custom inventory management.",
  },
  {
    title: "Healthcare App Design",
    client: "MedTech Solutions",
    category: "App Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Patient-focused healthcare application with telemedicine features.",
  },
];

// =============================================================================
// WORK PAGE
// =============================================================================
export default function WorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Animate projects grid
    const grid = gridRef.current;
    if (grid) {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main
        style={{
          backgroundColor: "#0A0A0A",
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <p
            style={{
              color: "rgba(242,242,242,0.4)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "24px",
            }}
          >
            Our Work
          </p>
          <h1
            style={{
              color: "#F2F2F2",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
              maxWidth: "800px",
            }}
          >
            Selected projects that showcase our expertise
          </h1>
          <p
            style={{
              color: "rgba(242,242,242,0.6)",
              fontSize: "16px",
              fontWeight: 300,
              marginTop: "24px",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            From brand identities to digital platforms, we craft experiences that
            resonate with audiences and drive measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px 100px",
          }}
        >
          <div
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "40px",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                }}
                className="group"
              >
                {/* Image */}
                <div
                  style={{
                    aspectRatio: "16/10",
                    overflow: "hidden",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.7s ease",
                    }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#F2F2F2",
                        fontSize: "20px",
                        fontWeight: 400,
                        marginBottom: "4px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(242,242,242,0.5)",
                        fontSize: "14px",
                        fontWeight: 300,
                      }}
                    >
                      {project.client}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        color: "rgba(242,242,242,0.4)",
                        fontSize: "12px",
                        fontWeight: 300,
                      }}
                    >
                      {project.category}
                    </p>
                    <p
                      style={{
                        color: "rgba(242,242,242,0.3)",
                        fontSize: "12px",
                        fontWeight: 300,
                      }}
                    >
                      {project.year}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    color: "rgba(242,242,242,0.5)",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div
          style={{
            borderTop: "1px solid rgba(242,242,242,0.1)",
            padding: "60px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "rgba(242,242,242,0.6)",
                fontSize: "16px",
                fontWeight: 300,
              }}
            >
              Have a project in mind?
            </p>
            <Link
              href="/contact"
              style={{
                color: "#F2F2F2",
                fontSize: "14px",
                fontWeight: 300,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Let&apos;s talk
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "1px solid rgba(242,242,242,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
