"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, ArrowRight, ExternalLink, X, CheckCircle2, Sparkles } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof siteConfig.portfolioProjects[0] | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Top Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span>Featured Portfolio</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-brand">Work</span>
            </h2>
            <p className="text-slate-300 text-base">
              A collection of digital products, web applications, and high-performance websites engineered for startups and enterprise clients.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolioProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/20"
            >
              <div>
                {/* Abstract UI Preview Mockup Banner */}
                <div className={`h-48 bg-gradient-to-tr ${project.accentColor} p-4 relative flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />

                  {/* Top Bar inside abstract preview */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/20 text-[10px] font-mono text-cyan-300 uppercase">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-bold text-emerald-300">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Simulated Abstract Code/Dashboard snippet inside banner */}
                  <div className="relative z-10 p-3 rounded-xl bg-slate-950/80 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{project.title.toLowerCase().replace(/\s+/g, "-")}.app</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-cyan-400 font-bold text-xs truncate">
                      STATUS: PRODUCTION READY (99.8% SCORE)
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors">
                <span>View Architecture Case</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Interactive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase">
                {selectedProject.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase text-cyan-400 font-mono">
                Key Performance Metrics & Tech Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{selectedProject.metrics}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Sub-second Load Times</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  scrollToContact();
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-lg"
              >
                Request Similar System →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
