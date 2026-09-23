"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090F1B]/95 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-[#0B1220]/80 to-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo - Scaled for all viewports */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group focus:outline-none shrink-0"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src={siteConfig.logoImage}
                alt={siteConfig.name}
                width={260}
                height={70}
                className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.4)] brightness-110"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links (lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md shadow-inner">
            {siteConfig.navLinks.slice(0, 9).map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-white bg-blue-600 shadow-md shadow-blue-600/40"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mid-SM Quick Nav Pills (md to lg: 768px - 1023px) */}
          <div className="hidden md:flex lg:hidden items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            {siteConfig.navLinks.slice(0, 4).map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? "text-white bg-blue-600/90"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA & Mobile/Tablet Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Inquiry CTA Button (sm to desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md shadow-blue-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
              <span className="hidden xs:inline sm:inline">Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Menu Bar Toggle Button for Mid/SM Screens (lg:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/15 focus:outline-none transition-all flex items-center gap-1.5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono hidden sm:inline text-cyan-300">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono hidden sm:inline text-slate-300">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Menu Bar Drawer for Mid/SM Screens */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-[#090F1B]/95 backdrop-blur-2xl border-b border-white/15 px-4 py-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Navigation Menu</span>
            <span className="text-[11px] font-mono text-slate-400">{siteConfig.shortName}</span>
          </div>

          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "text-white bg-blue-600/30 border border-blue-500/40 text-cyan-300"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-cyan-400 transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Send Project Inquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

