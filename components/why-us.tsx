"use client";

import { siteConfig } from "@/config/site";
import { CheckCircle2, TrendingUp, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export default function WhyUs() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="bg-[#090E1A] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span>Our Advantage</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3rem)" }}>
            Built for Businesses That <br />
            <span className="text-gradient-brand">Want to Move Faster</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We bridge the gap between creative product design and enterprise software engineering.
          </p>
        </div>

        {/* 4 Large Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(1rem, 3vw, 2rem)" }}>
          {siteConfig.whyUs.map((item) => (
            <div
              key={item.number}
              onClick={scrollToContact}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/10 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
              style={{ padding: "clamp(0.625rem, 2.5vw, 2rem)" }}
            >
              <div>
                {/* Number Accent Badge */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="font-mono font-bold text-xs sm:text-sm text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded-md shrink-0">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-base sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-white pt-4 border-t border-white/10">
                <span>Learn How We Execute</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



