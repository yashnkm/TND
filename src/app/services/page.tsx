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
                    color: link.href === "/services" ? "#F2F2F2" : "rgba(242,242,242,0.7)",
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
// SERVICES DATA
// =============================================================================
const services = [
  {
    title: "Website Development",
    description:
      "Smart, functional, and beautifully designed. We create websites that look sharp, work hard, and drive results. From custom builds to CMS implementations, we deliver digital experiences that convert.",
    features: [
      "Custom Website Design",
      "E-Commerce Solutions",
      "CMS Development",
      "Performance Optimization",
      "SEO Integration",
      "Analytics Setup",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Application Development",
    description:
      "Powerful, intuitive applications built for performance. From web apps to mobile solutions, we create digital products that solve real problems and deliver exceptional user experiences.",
    features: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "Progressive Web Apps",
      "API Development",
      "Cloud Integration",
      "Maintenance & Support",
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Branding & Identity",
    description:
      "Designed to elevate. We craft impeccable visual and verbal identities that reflect who you are today and where you're headed next - whether refining your brand or redefining it entirely.",
    features: [
      "Brand Strategy",
      "Visual Identity Design",
      "Logo Design",
      "Brand Guidelines",
      "Messaging Framework",
      "Brand Collateral",
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Content Strategy & Marketing",
    description:
      "Strategic content that tells your story and connects with your audience. We develop comprehensive content frameworks that drive engagement and build lasting relationships.",
    features: [
      "Content Strategy",
      "Social Media Marketing",
      "Email Campaigns",
      "SEO Content",
      "Video Production",
      "Performance Analytics",
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
];

// =============================================================================
// SERVICES PAGE
// =============================================================================
export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    // Animate services
    const services = servicesRef.current;
    if (services) {
      gsap.fromTo(
        services.children,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: services,
            start: "top 80%",
          },
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
            padding: "0 24px 80px",
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
            Our Services
          </p>
          <h1
            style={{
              color: "#F2F2F2",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Full-service digital solutions for modern businesses
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
            Working at the intersection of strategy & creativity, we develop
            high-growth brands that not only lead today but inspire the
            possibilities of tomorrow.
          </p>
        </div>

        {/* Services List */}
        <div
          ref={servicesRef}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                paddingTop: "60px",
                paddingBottom: "60px",
                borderTop: "1px solid rgba(242,242,242,0.1)",
              }}
            >
              {/* Left - Image */}
              <div
                style={{
                  aspectRatio: "4/3",
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Right - Content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2
                  style={{
                    color: "#F2F2F2",
                    fontSize: "32px",
                    fontWeight: 300,
                    marginBottom: "20px",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    color: "rgba(242,242,242,0.6)",
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  {service.description}
                </p>

                {/* Features Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(242,242,242,0.4)",
                        }}
                      />
                      <span
                        style={{
                          color: "rgba(242,242,242,0.5)",
                          fontSize: "13px",
                          fontWeight: 300,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div
          style={{
            backgroundColor: "#F5F5F0",
            marginTop: "80px",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                color: "rgba(10,10,10,0.4)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              Our Process
            </p>
            <h2
              style={{
                color: "#0A0A0A",
                fontSize: "32px",
                fontWeight: 300,
                marginBottom: "60px",
              }}
            >
              How we work
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "40px",
              }}
            >
              {[
                { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and challenges through in-depth research." },
                { step: "02", title: "Strategy", desc: "Developing a comprehensive plan that aligns with your business objectives." },
                { step: "03", title: "Creation", desc: "Bringing ideas to life with meticulous attention to detail and craft." },
                { step: "04", title: "Launch", desc: "Deploying your solution and providing ongoing support for success." },
              ].map((item, index) => (
                <div key={index}>
                  <p
                    style={{
                      color: "rgba(10,10,10,0.3)",
                      fontSize: "48px",
                      fontWeight: 200,
                      marginBottom: "16px",
                    }}
                  >
                    {item.step}
                  </p>
                  <h3
                    style={{
                      color: "#0A0A0A",
                      fontSize: "20px",
                      fontWeight: 400,
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(10,10,10,0.6)",
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          style={{
            backgroundColor: "#0A0A0A",
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
              Ready to start your project?
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
              Get in touch
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
