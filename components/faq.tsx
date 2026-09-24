"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#090F1B] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-4xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)" }}>
            Got Questions? We Have <span className="text-gradient-brand">Answers</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about starting a web, mobile app, or software project with {siteConfig.name}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-cyan-400/50 shadow-lg shadow-cyan-900/10"
                    : "bg-slate-900/50 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-xs min-[360px]:text-sm sm:text-base text-white leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
