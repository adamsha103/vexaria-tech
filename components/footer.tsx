"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import TermsModal from "@/components/terms-modal";
import PrivacyModal from "@/components/privacy-modal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1220] border-t border-white/10 text-slate-400 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="inline-block group focus:outline-none">
              <div className="h-20 sm:h-24 md:h-28 w-auto flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={siteConfig.logoImage}
                  alt={siteConfig.name}
                  width={360}
                  height={112}
                  className="h-full w-auto object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] brightness-110"
                />
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Digital products, websites, and applications built for modern businesses. Engineering scalable tech from South India to the global stage.
            </p>
          </div>

          {/* Quick Links Column 1: Navigation */}
          <div className="space-y-3 text-xs">
            <h3 className="font-heading font-bold text-white text-sm">Company</h3>
            <ul className="space-y-2">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="hover:text-cyan-400 transition">About Us</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")} className="hover:text-cyan-400 transition">Why Choose Us</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="hover:text-cyan-400 transition">Development Process</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-cyan-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Services */}
          <div className="space-y-3 text-xs">
            <h3 className="font-heading font-bold text-white text-sm">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition">Website Development</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition">Web Applications</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition">Mobile Applications</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-cyan-400 transition">Custom Software</a></li>

            </ul>
          </div>

          {/* Quick Links Column 3: Contact Info */}
          <div className="space-y-3 text-xs">
            <h3 className="font-heading font-bold text-white text-sm">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-400 transition truncate">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-cyan-400 transition">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-tight">
                  {siteConfig.location}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-cyan-400 transition"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Modals */}
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
