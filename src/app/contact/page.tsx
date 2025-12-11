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
                    color: link.href === "/contact" ? "#F2F2F2" : "rgba(242,242,242,0.7)",
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
// CONTACT PAGE
// =============================================================================
export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

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
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "80px" }}>
            <p
              style={{
                color: "rgba(242,242,242,0.4)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              Contact Us
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
              Let&apos;s create something extraordinary together
            </h1>
          </div>

          {/* Main Content Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "80px",
              paddingBottom: "100px",
            }}
          >
            {/* Left - Contact Info */}
            <div>
              {/* TechView AI */}
              <div style={{ marginBottom: "48px" }}>
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
                    marginBottom: "12px",
                  }}
                >
                  Technology & Development
                  <br />
                  Web Apps, Mobile Apps, AI Solutions
                </p>
                <a
                  href="https://techviewai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(242,242,242,0.8)",
                    fontSize: "14px",
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  techviewai.com →
                </a>
              </div>

              {/* Diraav */}
              <div style={{ marginBottom: "48px" }}>
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
                    marginBottom: "12px",
                  }}
                >
                  Marketing & Branding
                  <br />
                  Content Strategy, Digital Marketing
                </p>
                <a
                  href="https://diraav.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(242,242,242,0.8)",
                    fontSize: "14px",
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  diraav.com →
                </a>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "48px" }}>
                <p
                  style={{
                    color: "rgba(242,242,242,0.4)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@techviewai.com"
                  style={{
                    color: "#F2F2F2",
                    fontSize: "18px",
                    fontWeight: 300,
                    textDecoration: "none",
                  }}
                >
                  hello@techviewai.com
                </a>
              </div>

              {/* Social */}
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
                  Connect
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["LinkedIn", "Instagram", "Twitter", "GitHub"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{
                        color: "rgba(242,242,242,0.7)",
                        fontSize: "14px",
                        fontWeight: 300,
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
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
                Send us a message
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(242,242,242,0.2)",
                      padding: "16px 0",
                      color: "#F2F2F2",
                      fontSize: "14px",
                      fontWeight: 300,
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(242,242,242,0.2)",
                      padding: "16px 0",
                      color: "#F2F2F2",
                      fontSize: "14px",
                      fontWeight: 300,
                      outline: "none",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(242,242,242,0.2)",
                      padding: "16px 0",
                      color: "#F2F2F2",
                      fontSize: "14px",
                      fontWeight: 300,
                      outline: "none",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(242,242,242,0.2)",
                      padding: "16px 0",
                      color: "#F2F2F2",
                      fontSize: "14px",
                      fontWeight: 300,
                      outline: "none",
                    }}
                  />
                </div>

                <textarea
                  placeholder="Tell us about your project *"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(242,242,242,0.2)",
                    padding: "16px 0",
                    color: "#F2F2F2",
                    fontSize: "14px",
                    fontWeight: 300,
                    outline: "none",
                    resize: "none",
                    marginBottom: "32px",
                  }}
                />

                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#F2F2F2",
                    color: "#0A0A0A",
                    border: "none",
                    padding: "16px 32px",
                    fontSize: "14px",
                    fontWeight: 400,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid rgba(242,242,242,0.1)",
            padding: "24px",
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
                color: "rgba(242,242,242,0.4)",
                fontSize: "12px",
                fontWeight: 300,
              }}
            >
              © 2025 TechView & Diraav. All rights reserved.
            </p>
            <p
              style={{
                color: "rgba(242,242,242,0.3)",
                fontSize: "11px",
                fontWeight: 300,
              }}
            >
              Tech meets creativity.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
