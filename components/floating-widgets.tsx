"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp click handler with custom formatted message
  const whatsappUrl = `https://wa.me/916381248055?text=${encodeURIComponent(
    `Hello VEXARIA TECHNOLOGIES! I am interested in building a digital product/project with your team.`
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* 1. WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with VEXARIA TECHNOLOGIES"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 border-2 border-white/20 focus:outline-none"
      >
        {/* Animated Radial Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Chat on WhatsApp 💬
        </span>
      </a>

      {/* 2. Scroll To Top ("Go to Top") Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 hover:bg-blue-600 border border-white/20 text-cyan-400 hover:text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 animate-fadeIn focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />

          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
            Go to Top ⬆️
          </span>
        </button>
      )}

    </div>
  );
}
