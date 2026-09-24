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
    <section className="border-y border-white/10 bg-[#0D1627] relative overflow-hidden" style={{ padding: "clamp(0.75rem, 2vw, 1rem) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        {/* Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center" style={{ gap: "clamp(0.375rem, 1.5vw, 1.5rem)" }}>
          {siteConfig.trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon] || Boxes;
            return (
              <div
                key={badge.name}
                className="group flex items-center rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                style={{ gap: "clamp(0.25rem, 1vw, 0.625rem)", padding: "clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 1rem)" }}
              >
                <IconComponent className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-semibold text-slate-200 group-hover:text-white" style={{ fontSize: "clamp(0.6rem, 2vw, 0.875rem)" }}>
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
