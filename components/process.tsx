"use client";

import { siteConfig } from "@/config/site";
import { Compass, Target, Palette, Code2, CheckCircle, Rocket, TrendingUp } from "lucide-react";

export default function Process() {
  const iconMap: Record<string, any> = {
    "01": Compass,
    "02": Target,
    "03": Palette,
    "04": Code2,
    "05": CheckCircle,
    "06": Rocket,
    "07": TrendingUp,
  };

  return (
    <section id="process" className="bg-[#0B1220] relative overflow-hidden" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <span>Execution Methodology</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3rem)" }}>
            From Idea to <span className="text-gradient-brand">Launch</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A structured 7-step engineering roadmap engineered to deliver predictable quality, speed, and continuous product evolution.
          </p>
        </div>

        {/* Desktop Process View: Horizontal Flow */}
        <div className="hidden lg:grid grid-cols-7 gap-3 relative">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 -translate-y-6 z-0 opacity-40" />

          {siteConfig.processSteps.map((step) => {
            const StepIcon = iconMap[step.number] || Compass;
            return (
              <div
                key={step.number}
                className="group relative z-10 flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-bold font-mono text-xs mb-3 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-md">
                  <StepIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  STEP {step.number}
                </span>
                <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-[11px] leading-snug">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Process View: Vertical Timeline */}
        <div className="lg:hidden space-y-3 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-500 before:to-violet-600">
          {siteConfig.processSteps.map((step) => {
            const StepIcon = iconMap[step.number] || Compass;
            return (
              <div
                key={step.number}
                className="group relative pl-11 pr-3 py-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition-all"
              >
                <div className="absolute left-2 top-3.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-bold text-[10px] font-mono">
                  {step.number}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <StepIcon className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-heading font-bold text-base text-white">{step.title}</h3>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
