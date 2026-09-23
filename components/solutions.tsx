"use client";

import { siteConfig } from "@/config/site";
import { Rocket, Building2, Users, BarChart3, CalendarCheck, ShoppingBag, GraduationCap, ShieldCheck, Layers, Zap, ArrowRight } from "lucide-react";

export default function Solutions() {
  const iconMap: Record<string, any> = {
    Rocket,
    Building2,
    Users,
    BarChart3,
    CalendarCheck,
    ShoppingBag,
    GraduationCap,
    ShieldCheck,
    Layers,
    Zap,
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-[#090F1B] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <span>Custom Product Archetypes</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Technology Built Around <br />
              <span className="text-gradient-brand">Your Business Architecture</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-md">
            Whether launching a new venture or upgrading existing business operations, we engineer reliable digital products tailored to your exact industry requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteConfig.solutions.map((sol) => {
            const IconComponent = iconMap[sol.icon] || Rocket;
            return (
              <div
                key={sol.title}
                onClick={scrollToContact}
                className="group p-5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-white pt-3 border-t border-white/5">
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
