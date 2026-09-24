"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Boxes, Atom, FileCode, Palette, Server, Database, Cpu, Cloud, Sparkles, Filter } from "lucide-react";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, any> = {
    Boxes,
    Atom,
    FileCode,
    Palette,
    Server,
    Database,
    Cpu,
    Cloud,
    Sparkles,
  };

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud"];

  const filteredTech =
    selectedCategory === "All"
      ? siteConfig.techStack
      : siteConfig.techStack.filter((item) => item.category === selectedCategory);

  return (
    <section id="tech-stack" className="bg-[#090F1B] border-t border-white/10 relative" style={{ padding: "clamp(1.25rem, 3vw, 2.5rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Engineering Stack</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.2rem, 4vw, 2.5rem)" }}>
            Built With <span className="text-gradient-brand">Modern Technology</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base">
            We build exclusively on production-proven frameworks that offer speed, security, and scalability.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto">
          {filteredTech.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Boxes;
            return (
              <div
                key={tech.name}
                className="group p-2.5 sm:p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-2.5 sm:gap-3 hover:-translate-y-0.5 shadow-md overflow-hidden"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400 transition-all shrink-0">
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 truncate">
                    {tech.name}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider block truncate">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
