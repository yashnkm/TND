"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import { BeamsBackground } from "@/components/UI/beams-background";

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
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: "rgba(242,242,242,0.7)",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "1px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,242,242,0.7)")}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay */}
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
              <a
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
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// =============================================================================
// SECTION WRAPPER - Standardized container for all sections
// =============================================================================
interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: "dark" | "light";
  className?: string;
  showDivider?: boolean;
  fullHeight?: boolean;
}

function Section({
  children,
  id,
  background = "dark",
  className = "",
  showDivider = true,
  fullHeight = false,
}: SectionProps) {
  const bgColor = background === "dark" ? "#0A0A0A" : "#F5F5F0";
  const dividerColor = background === "dark" ? "rgba(242,242,242,0.15)" : "rgba(10,10,10,0.1)";

  return (
    <section
      id={id}
      style={{
        backgroundColor: bgColor,
        position: "relative",
        zIndex: 20,
        minHeight: fullHeight ? "100vh" : "auto",
      }}
    >
      {/* Divider at top */}
      {showDivider && (
        <div style={{ paddingTop: "60px" }}>
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                height: "1px",
                backgroundColor: dividerColor,
                width: "100%",
              }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: showDivider ? "60px 24px 80px" : "80px 24px",
        }}
        className={className}
      >
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// SECTION HEADER - Consistent header for each section
// =============================================================================
interface SectionHeaderProps {
  label: string;
  description?: string;
  dark?: boolean;
  rightContent?: ReactNode;
}

function SectionHeader({ label, description, dark = true, rightContent }: SectionHeaderProps) {
  const labelColor = dark ? "rgba(242,242,242,0.4)" : "rgba(10,10,10,0.4)";
  const descColor = dark ? "rgba(242,242,242,0.7)" : "rgba(10,10,10,0.7)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginBottom: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <p
          style={{
            color: labelColor,
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 400,
          }}
        >
          {label}
        </p>
        {rightContent}
      </div>
      {description && (
        <p
          style={{
            color: descColor,
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "600px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// =============================================================================
// HERO SECTION
// =============================================================================
function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Animate content elements with stagger on load
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
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated beams background */}
      <BeamsBackground intensity="medium" />

      {/* Content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          ref={contentRef}
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Tagline */}
          <p
            style={{
              color: "rgba(242,242,242,0.5)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "32px",
            }}
          >
            Tech meets creativity
          </p>

          {/* Main headline */}
          <h1
            style={{
              color: "#F2F2F2",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            We build <em style={{ fontStyle: "italic" }}>applications</em>, craft{" "}
            <em style={{ fontStyle: "italic" }}>content</em>, and drive{" "}
            <em style={{ fontStyle: "italic" }}>growth</em> through marketing.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(242,242,242,0.6)",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 300,
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            TechView AI × Diraav — A fusion of technology and creative marketing
            to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// VIDEO PARALLAX SECTION
// =============================================================================
function VideoParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    if (!section || !videoContainer) return;

    // Parallax effect - video moves slower than scroll
    gsap.to(videoContainer, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* Video Container with Parallax */}
      <div
        ref={videoContainerRef}
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          height: "140%",
          zIndex: 1,
        }}
      >
        {/* Replace with actual video - using placeholder image for now */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          {/* Add your video source here */}
          <source src="/video/showreel.mp4" type="video/mp4" />
        </video>

        {/* Fallback background image if video doesn't load */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(10,10,10,0.4)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <p
          style={{
            color: "rgba(242,242,242,0.6)",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "24px",
          }}
        >
          Watch Our Showreel
        </p>

        {/* Play Button */}
        <button
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "1px solid rgba(242,242,242,0.5)",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          className="hover:bg-white/10 hover:border-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F2F2F2"
            strokeWidth="1.5"
          >
            <polygon points="5 3 19 12 5 21 5 3" fill="#F2F2F2" stroke="none" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// =============================================================================
// SERVICES SECTION
// =============================================================================
const services = [
  {
    title: "Website",
    subtitle: "Development",
    description:
      "Smart, functional, and beautifully designed. Websites that look sharp, work hard, and drive results.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Application",
    subtitle: "Development",
    description:
      "Powerful, intuitive applications built for performance. From web apps to mobile solutions.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Branding",
    subtitle: "& Identity",
    description:
      "We craft impeccable visual and verbal identities that reflect who you are today.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Content Strategy",
    subtitle: "& Marketing",
    description:
      "Strategic content that tells your story and connects with your audience.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !horizontal) return;

    // Horizontal scroll animation
    const scrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${horizontal.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        backgroundColor: "#0A0A0A",
        position: "relative",
        zIndex: 20,
        overflow: "hidden",
      }}
    >
      {/* Header - Fixed at top during scroll */}
      <div
        style={{
          padding: "80px 24px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
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
          Expertise
        </p>
        <p
          style={{
            color: "rgba(242,242,242,0.7)",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "600px",
          }}
        >
          Working at the intersection of strategy & creativity, developing
          high-growth corporate brands that not only lead today but inspire the
          possibilities of tomorrow.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        style={{
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        <div
          ref={horizontalRef}
          style={{
            display: "flex",
            gap: "24px",
            paddingLeft: "24px",
            paddingRight: "100px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                width: "500px",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: "24px",
                  borderRadius: "4px",
                }}
              />
              {/* Content */}
              <h3
                style={{
                  color: "#F2F2F2",
                  fontSize: "24px",
                  fontWeight: 300,
                  marginBottom: "4px",
                }}
              >
                {service.title}
              </h3>
              <h4
                style={{
                  color: "rgba(242,242,242,0.5)",
                  fontSize: "24px",
                  fontWeight: 300,
                  marginBottom: "16px",
                }}
              >
                {service.subtitle}
              </h4>
              <p
                style={{
                  color: "rgba(242,242,242,0.5)",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: "400px",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// WORK SECTION
// =============================================================================
const projects = [
  {
    title: "Law Firm Branding & Website",
    client: "Pallas Partners",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Renewable Energy Platform",
    client: "Tian Renewables",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "Design School Brand Refresh",
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

function WorkSection() {
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
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Section id="work" background="dark" showDivider={true}>
      <SectionHeader
        label="Selected Work"
        dark={true}
        rightContent={
          <a
            href="#"
            style={{
              color: "rgba(242,242,242,0.8)",
              fontSize: "14px",
              fontWeight: 300,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            View All Work
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid rgba(242,242,242,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              →
            </span>
          </a>
        }
      />

      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {projects.map((project, index) => (
          <div key={index} style={{ cursor: "pointer" }}>
            {/* Image */}
            <div
              style={{
                aspectRatio: "4/3",
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "16px",
              }}
            />
            {/* Content */}
            <h3
              style={{
                color: "#F2F2F2",
                fontSize: "16px",
                fontWeight: 300,
                marginBottom: "4px",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: "rgba(242,242,242,0.5)",
                fontSize: "13px",
                fontWeight: 300,
              }}
            >
              {project.client}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// =============================================================================
// STUDIO SECTION
// =============================================================================
function StudioSection() {
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
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Section id="about" background="dark" showDivider={true}>
      <SectionHeader
        label="Our Studio"
        description="The dynamic TechView & Diraav collective brings together far more than just great talent. Thriving in our energetic, collaborative environment."
        dark={true}
      />

      <div
        ref={imagesRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            height: "400px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            height: "400px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Section>
  );
}

// =============================================================================
// CLIENTS SECTION
// =============================================================================
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

function ClientsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Section id="clients" background="light" showDivider={false}>
      <SectionHeader
        label="Our Clients"
        description="Partnering with progressive businesses to uncover their true purpose, helping them drive meaningful change & move the world forward."
        dark={false}
      />

      <div
        ref={gridRef}
        style={{
          display: "grid",
          gap: "1px",
          backgroundColor: "rgba(10,10,10,0.1)",
        }}
        className="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {clients.map((client, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F5F5F0",
              padding: "32px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "150px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="hover:bg-white group"
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 300,
                textAlign: "center",
                letterSpacing: "0.5px",
                transition: "color 0.3s ease",
              }}
              className="text-[#0A0A0A]/60 group-hover:text-[#0A0A0A]"
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// =============================================================================
// TESTIMONIALS SECTION
// =============================================================================
function TestimonialsSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Section id="testimonials" background="light" showDivider={true}>
      <div
        ref={contentRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "500px",
        }}
      >
        {/* Left - Quote */}
        <div
          style={{
            backgroundColor: "#0A0A0A",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "rgba(242,242,242,0.9)",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            &ldquo;Working with the team at TechView & Diraav has been one of
            the highlights of setting up Pallas. They were able to effortlessly
            articulate what we have set out to achieve into a truly exceptional
            & stunning brand identity.&rdquo;
          </p>
          <div style={{ marginTop: "40px" }}>
            <p
              style={{
                color: "#F2F2F2",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Natasha Harrison
            </p>
            <p
              style={{
                color: "rgba(242,242,242,0.5)",
                fontSize: "12px",
                fontWeight: 300,
                marginTop: "4px",
              }}
            >
              Founder & Managing Partner, Pallas Partners
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Section>
  );
}

// =============================================================================
// FOOTER SECTION (with parallax reveal effect)
// =============================================================================
function FooterSection() {
  const footerHeight = "600px"; // Fixed height for the footer

  return (
    <div
      style={{
        height: footerHeight,
        position: "relative",
      }}
    >
      <footer
        id="contact"
        style={{
          backgroundColor: "#0A0A0A",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          height: footerHeight,
          padding: "60px 24px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "60px",
          }}
        >
          {/* Left - Info */}
          <div>
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  color: "rgba(242,242,242,0.4)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                TechView AI
              </p>
              <p
                style={{
                  color: "rgba(242,242,242,0.7)",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Technology & Development
                <br />
                Web Apps, Mobile Apps, AI Solutions
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  color: "rgba(242,242,242,0.4)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                Diraav
              </p>
              <p
                style={{
                  color: "rgba(242,242,242,0.7)",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Marketing & Branding
                <br />
                Content Strategy, Digital Marketing
              </p>
            </div>

            <div>
              <p
                style={{
                  color: "rgba(242,242,242,0.4)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                Contact
              </p>
              <p
                style={{
                  color: "rgba(242,242,242,0.7)",
                  fontSize: "14px",
                  fontWeight: 300,
                }}
              >
                hello@techviewai.com
              </p>
            </div>
          </div>

          {/* Right - Form placeholder */}
          <div>
            <p
              style={{
                color: "rgba(242,242,242,0.4)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "32px",
              }}
            >
              Get in Touch
            </p>
            <p
              style={{
                color: "rgba(242,242,242,0.6)",
                fontSize: "14px",
                fontWeight: 300,
              }}
            >
              Contact form will be here...
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(242,242,242,0.1)",
            marginTop: "60px",
            paddingTop: "24px",
          }}
        >
          <p
            style={{
              color: "rgba(242,242,242,0.4)",
              fontSize: "12px",
              fontWeight: 300,
            }}
          >
            © 2025 TechView & Diraav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================
export default function Home2() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <VideoParallaxSection />
        <ServicesSection />
        <WorkSection />
        <StudioSection />
        <ClientsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </>
  );
}
