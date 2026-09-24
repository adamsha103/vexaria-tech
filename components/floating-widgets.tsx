"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config/site";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setShowScrollTop(scrollY > 300);

    // Calculate scroll progress (0 to 1)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setScrollProgress(Math.min(scrollY / docHeight, 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp click handler with custom formatted message
  const whatsappUrl = `https://wa.me/916381248055?text=${encodeURIComponent(
    `Hello VEXARIA TECHNOLOGIES! I am interested in building a digital product/project with your team.`
  )}`;

  // SVG circle calculations for progress ring
  const circleSize = 48;
  const strokeWidth = 3;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <div className="fixed z-50 flex flex-col items-end gap-2.5 pointer-events-auto" style={{ bottom: "clamp(0.75rem, 3vw, 1.5rem)", right: "clamp(0.75rem, 3vw, 1.5rem)" }}>
      
      {/* 1. WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with VEXARIA TECHNOLOGIES"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 border-2 border-white/20 focus:outline-none"
      >
        {/* Animated Radial Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />

        {/* Hover Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Chat on WhatsApp 💬
        </span>
      </a>

      {/* 2. Scroll-To-Top: Round Circle with Scroll Progress Ring */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full animate-fadeIn focus:outline-none"
        >
          {/* Circular Scroll Progress Ring (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox={`0 0 ${circleSize} ${circleSize}`}
          >
            {/* Background track ring */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={strokeWidth}
            />
            {/* Animated progress ring */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="url(#scrollGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Circle Button */}
          <div className="absolute inset-[4px] rounded-full bg-slate-900/95 backdrop-blur-xl border border-white/15 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-xl">
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>

          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
            Go to Top ⬆️
          </span>
        </button>
      )}

    </div>
  );
}
