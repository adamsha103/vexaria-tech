"use client";

import { siteConfig } from "@/config/site";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function CaseStudy() {
  const { caseStudy } = siteConfig;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="case-study" className="bg-[#090E1A] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Container */}
        <div className="rounded-3xl bg-gradient-to-br from-[#111B2E] via-[#0D1524] to-[#151D30] border border-white/15 shadow-2xl relative overflow-hidden" style={{ padding: "clamp(1rem, 4vw, 3rem)" }}>
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{caseStudy.subtitle}</span>
            </div>
            <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)" }}>
              {caseStudy.title}
            </h2>
            <p className="text-xs font-mono text-slate-400">
              Industry Focus: <span className="text-cyan-400 font-semibold">{caseStudy.clientIndustry}</span>
            </p>
          </div>

          {/* Grid Layout: Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-3">
              <h3 className="font-heading text-lg font-bold text-red-400 uppercase tracking-wide text-xs">
                The Business Challenge
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-3">
              <h3 className="font-heading text-lg font-bold text-emerald-400 uppercase tracking-wide text-xs">
                The Engineered Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Metrics Results Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 pt-6 border-t border-white/10">
            {caseStudy.results.map((res) => (
              <div key={res.label} className="p-2.5 sm:p-4 rounded-xl bg-slate-950/90 border border-white/10 text-center flex flex-col justify-center min-w-0">
                <span className="font-heading font-bold text-gradient-brand block mb-1 leading-tight text-xs min-[360px]:text-sm sm:text-xl lg:text-2xl truncate">
                  {res.value}
                </span>
                <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono text-slate-400 uppercase leading-snug truncate">
                  {res.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}




