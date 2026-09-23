"use me";
"use client";

import { siteConfig } from "@/config/site";
import { Boxes, Atom, FileCode, Palette, Server, Database, Cloud, Sparkles } from "lucide-react";

export default function TechStrip() {
  const iconMap: Record<string, any> = {
    Boxes,
    Atom,
    FileCode,
    Palette,
    Server,
    Database,
    Cloud,
    Sparkles,
  };

  return (
    <section className="border-y border-white/10 bg-[#0D1627] py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono tracking-widest uppercase text-slate-400 mb-6">
          Technology that powers modern digital products
        </p>

        {/* Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {siteConfig.trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon] || Boxes;
            return (
              <div
                key={badge.name}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <IconComponent className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                  {badge.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
