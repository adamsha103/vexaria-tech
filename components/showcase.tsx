"use client";

import { useState } from "react";
import { Monitor, Smartphone, Layers, CheckCircle2, Shield, Bell, Sparkles, BarChart, ArrowRight } from "lucide-react";

export default function Showcase() {
  const [showcaseTab, setShowcaseTab] = useState<"overview" | "analytics">("overview");

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#0B1220] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Cross-Platform Ecosystem</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            One Idea. <br />
            <span className="text-gradient-brand">Multiple Digital Experiences.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We create connected digital experiences across web, mobile, and business platforms, ensuring consistent branding, unified databases, and effortless user flows.
          </p>
        </div>

        {/* Responsive Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Large Browser Window Dashboard Mockup (Col Span 8) */}
          <div className="lg:col-span-8 rounded-2xl bg-slate-900/90 border border-white/15 p-4 sm:p-6 shadow-2xl shadow-blue-900/20 backdrop-blur-xl relative">
            
            {/* Browser Window Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="hidden sm:flex items-center gap-1 bg-slate-950 px-3 py-1 rounded-md text-[11px] font-mono text-slate-400 ml-3 border border-white/5">
                  <span>https://app.alvora-client.com/dashboard</span>
                </div>
              </div>

              {/* Showcase Tab Filter Buttons */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setShowcaseTab("overview")}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    showcaseTab === "overview" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setShowcaseTab("analytics")}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    showcaseTab === "analytics" ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Metrics
                </button>

              </div>
            </div>

            {/* Inner Simulated Dashboard Content */}
            <div className="space-y-4">
              {showcaseTab === "overview" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                      <span className="text-xs text-slate-400 font-mono">System Health</span>
                      <p className="text-2xl font-bold font-heading text-white mt-1">99.9%</p>
                      <span className="text-[10px] text-emerald-400 font-medium">100% Active & Operational</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                      <span className="text-xs text-slate-400 font-mono">Core Web Vitals</span>
                      <p className="text-2xl font-bold font-heading text-cyan-400 mt-1">99 / 100</p>
                      <span className="text-[10px] text-cyan-300 font-medium">Optimal UX Performance</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                      <span className="text-xs text-slate-400 font-mono">Server Uptime</span>
                      <p className="text-2xl font-bold font-heading text-emerald-400 mt-1">99.99%</p>
                      <span className="text-[10px] text-slate-400">Zero Planned Downtime</span>
                    </div>
                  </div>

                  {/* Visual Chart Placeholder Area */}
                  <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 flex flex-col justify-between h-44">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>USER ENGAGEMENT & CONVERSION FLOW</span>
                      <span className="text-cyan-400">LIVE FEED</span>
                    </div>
                    <div className="flex items-end justify-between gap-2 h-24 pt-4">
                      {[40, 65, 55, 80, 70, 95, 85, 100, 90, 110, 105, 120].map((h, i) => (
                        <div key={i} className="w-full bg-slate-800 rounded-t hover:bg-cyan-500 transition-colors relative group">
                          <div
                            className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t w-full"
                            style={{ height: `${(h / 120) * 100}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {showcaseTab === "analytics" && (
                <div className="p-6 rounded-xl bg-slate-950/90 border border-white/10 space-y-4">
                  <h4 className="font-heading font-bold text-white text-base">Technical Performance Benchmarks</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>First Contentful Paint (FCP)</span>
                        <span className="text-emerald-400 font-mono font-bold">0.4s (Fast)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Cumulative Layout Shift (CLS)</span>
                        <span className="text-emerald-400 font-mono font-bold">0.00 (Zero Shift)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[100%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>API Response Time</span>
                        <span className="text-blue-400 font-mono font-bold">38ms Average</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[90%]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>

            {/* Floating Web Badge */}
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5" />
              <span>Web Portal</span>
            </div>
          </div>

          {/* Right: Smartphone App Mockup (Col Span 4) */}
          <div className="lg:col-span-4 flex justify-center relative">
            
            {/* Phone Frame */}
            <div className="w-72 sm:w-80 rounded-[40px] bg-slate-950 border-8 border-slate-800 p-4 shadow-2xl relative shadow-cyan-900/30 overflow-hidden">
              
              {/* Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4" />

              {/* Mobile App Header */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">ALVORA MOBILE</span>
                  <span className="font-heading font-bold text-sm text-white">Client Portal</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                  <Bell className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Mobile UI Content Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
                  <span className="text-[10px] opacity-80 block">Project Status</span>
                  <p className="text-xl font-bold font-heading">Active & Live</p>
                  <div className="flex items-center justify-between text-[10px] mt-2 pt-2 border-t border-white/20">
                    <span>Account Active</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full font-mono">Syncing</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-2">
                  <span className="text-[11px] text-slate-300 font-semibold block">Quick Actions</span>
                  <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 font-medium hover:bg-slate-700 transition">
                      ⚡ Direct Inquiry
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800 text-blue-400 font-medium hover:bg-slate-700 transition">
                      📊 Live Status
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs space-y-2">
                  <span className="text-[11px] text-slate-300 font-semibold block">Recent Activity</span>
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Web Store Build</span>
                    <span className="text-emerald-400 font-mono">Completed</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Cloud Backup</span>
                    <span className="text-slate-400 font-mono">Completed</span>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Badge */}
              <div className="absolute top-6 -left-3 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>iOS & Android</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
