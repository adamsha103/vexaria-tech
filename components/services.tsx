"use client";

import { siteConfig } from "@/config/site";
import { Globe, LayoutDashboard, Smartphone, PenTool, Code2, Sparkles, Cloud, TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";

export default function Services() {
  const iconMap: Record<string, any> = {
    Globe,
    LayoutDashboard,
    Smartphone,
    PenTool,
    Code2,
    Sparkles,
    Cloud,
    TrendingUp,
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#0B1220] relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span>Capabilities</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3rem)" }}>
            What We <span className="text-gradient-brand">Build</span>
          </h2>

          <p className="text-slate-300 text-base font-normal">
            From websites to complete digital products, we build technology around your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}>
          {siteConfig.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                onClick={scrollToContact}
                className="group relative rounded-2xl bg-gradient-to-b from-[#111B2E] to-[#0D1524] border border-white/10 flex flex-col justify-between hover:border-blue-500/50 hover:bg-[#15223A] transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-600/10 overflow-hidden"
                style={{ padding: "clamp(0.625rem, 2.5vw, 1.5rem)" }}
              >
                {/* Top Subtle Gradient Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon + Service Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-2 mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                      {service.badge}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-white/10">
                    {service.features.map((feat) => (
                      <li key={feat} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Row: CTA Link Arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-medium text-slate-300 group-hover:text-white">
                  <span>Inquire Service</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
