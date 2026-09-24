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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        mobileMenuOpen || isScrolled
          ? "bg-[#070C1B] border-b border-white/15 shadow-2xl shadow-black/90"
          : "bg-gradient-to-b from-[#0B1220]/95 via-[#0B1220]/80 to-transparent"
      }`}
      style={{ padding: isScrolled ? "0.5rem 0" : "0.625rem 0" }}
    >
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group focus:outline-none shrink-0"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{ height: "clamp(2rem, 5vw, 3.5rem)" }}>
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

          {/* Desktop Nav Links (xl: 1280px+) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md shadow-inner">
            {siteConfig.navLinks.map((link) => {
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

          {/* Right: Inquiry CTA + Menu Toggle */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Inquiry CTA Button */}
            <div className="relative group inline-block">
              {/* Multi-layered Glowing Background Aura */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse-slow" />
              
              {/* Animated Ring Accent */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-50 group-hover:opacity-90 transition-opacity animate-gradient-flow" />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="relative inline-flex items-center gap-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-[length:200%_auto] animate-gradient-flow shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden border border-white/20 px-2.5 py-1.5 sm:px-4 sm:py-2"
              >
                {/* Continuous Light Sweep Beam */}
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-light-sweep" />

                {/* Sparkle Icon & Pulse Indicator */}
                <span className="relative flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" />
                </span>

                <span className="relative hidden min-[360px]:inline font-heading tracking-wide uppercase drop-shadow-sm">Inquiry</span>
              </a>
            </div>

            {/* Menu Bar Toggle (visible below xl / 1280px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center rounded-xl text-cyan-300 bg-blue-950 hover:bg-blue-900 border border-cyan-400/50 focus:outline-none transition-all shadow-lg shadow-blue-950/80 active:scale-95"
              style={{ padding: "0.45rem 0.65rem" }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-300 shrink-0" />
              ) : (
                <Menu className="w-5 h-5 text-cyan-300 shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu Drawer (below xl / 1280px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#070C1B] border-b-2 border-cyan-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto animate-slideDown z-50" style={{ padding: "1.25rem clamp(0.75rem, 3vw, 1.5rem)" }}>
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3.5">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Navigation Menu</span>
            <span className="text-[11px] font-mono text-slate-400 font-semibold">{siteConfig.shortName}</span>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between shadow-md ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 border border-cyan-400 shadow-cyan-500/20"
                      : "text-slate-200 bg-slate-900/90 hover:text-white hover:bg-slate-800 hover:border-cyan-500/40 border border-white/15"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-3.5 border-t border-white/15 mt-3.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-lg text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Start Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
