"use client";

import { useState } from "react";

const footerLinks = [
  { name: "WORK", href: "#work" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
  { name: "CLIENTS", href: "#clients" },
  { name: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (e.g., API call, email service)
  };

  return (
    <footer id="contact" className="relative z-20 bg-[#0A0A0A]">
      {/* Video/Image Background Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-4 space-y-10">
            {/* TechView AI */}
            <div>
              <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-4">
                TechView AI
              </p>
              <p className="text-[#F2F2F2]/70 text-sm font-light leading-relaxed">
                Technology & Development
                <br />
                Web Apps, Mobile Apps, AI Solutions
              </p>
              <a
                href="https://techviewai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
              >
                techviewai.com
                <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Diraav */}
            <div>
              <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-4">
                Diraav
              </p>
              <p className="text-[#F2F2F2]/70 text-sm font-light leading-relaxed">
                Marketing & Branding
                <br />
                Content Strategy, Digital Marketing
              </p>
              <a
                href="https://diraav.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
              >
                diraav.com
                <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-4">
                Contact
              </p>
              <p className="text-[#F2F2F2]/70 text-sm font-light">
                hello@techviewai.com
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
              >
                Start a Project
                <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-4">
                Connect
              </p>
              <div className="space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-[#F2F2F2]/70 text-sm font-light hover:text-[#F2F2F2] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-8">
            <p className="text-[#F2F2F2]/40 text-[10px] uppercase tracking-[2px] mb-8">
              Get in Touch
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#F2F2F2]/20 py-3 text-[#F2F2F2] text-sm font-light placeholder:text-[#F2F2F2]/40 focus:outline-none focus:border-[#F2F2F2]/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#F2F2F2]/20 py-3 text-[#F2F2F2] text-sm font-light placeholder:text-[#F2F2F2]/40 focus:outline-none focus:border-[#F2F2F2]/40 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#F2F2F2]/20 py-3 text-[#F2F2F2] text-sm font-light placeholder:text-[#F2F2F2]/40 focus:outline-none focus:border-[#F2F2F2]/40 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#F2F2F2]/20 py-3 text-[#F2F2F2] text-sm font-light placeholder:text-[#F2F2F2]/40 focus:outline-none focus:border-[#F2F2F2]/40 transition-colors"
                />
              </div>
              <textarea
                placeholder="Tell us about your project*"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#F2F2F2]/20 py-3 text-[#F2F2F2] text-sm font-light placeholder:text-[#F2F2F2]/40 focus:outline-none focus:border-[#F2F2F2]/40 transition-colors resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[#F2F2F2]/80 text-sm font-light hover:text-[#F2F2F2] transition-colors group"
                >
                  Send Message
                  <span className="w-5 h-5 rounded-full border border-[#F2F2F2]/30 flex items-center justify-center group-hover:border-[#F2F2F2]/60 transition-colors">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F2F2F2]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#F2F2F2]/40 text-xs font-light">
              © 2025 TechView & Diraav. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#F2F2F2]/60 text-xs font-light hover:text-[#F2F2F2] transition-colors hidden md:block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[#F2F2F2]/30 text-[10px] font-light mt-6 text-center md:text-left">
            TechView AI — Technology & Development | Diraav — Marketing & Branding | Tech meets creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
