"use client";

import { siteConfig } from "@/config/site";
import { CheckCircle2, TrendingUp, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export default function WhyUs() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#090E1A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span>Our Advantage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built for Businesses That <br />
            <span className="text-gradient-brand">Want to Move Faster</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We bridge the gap between creative product design and enterprise software engineering.
          </p>
        </div>

        {/* 4 Large Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.whyUs.map((item) => (
            <div
              key={item.number}
              onClick={scrollToContact}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/10 p-8 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Large Gradient Number */}
                <div className="font-heading font-black text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-transparent group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300 mb-6">
                  {item.number}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
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



