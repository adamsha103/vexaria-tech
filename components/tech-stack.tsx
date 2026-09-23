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

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "AI"];

  const filteredTech =
    selectedCategory === "All"
      ? siteConfig.techStack
      : siteConfig.techStack.filter((item) => item.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-16 sm:py-20 md:py-28 bg-[#090F1B] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Engineering Stack</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built With <span className="text-gradient-brand">Modern Technology</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We build exclusively on production-proven frameworks that offer unparalleled speed, security, and developer productivity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {filteredTech.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Boxes;
            return (
              <div
                key={tech.name}
                className="group p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <IconComponent className={`w-6 h-6 ${tech.color}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
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
