"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { ArrowRight, Sparkles, Terminal, Smartphone, LayoutDashboard, Cpu, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "code" | "mobile">("dashboard");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const headlinePhrases = [
    "Built Better.",
    "Scale Faster.",
    "Designed Right.",
  ];

  useEffect(() => {
    const targetPhrase = headlinePhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedText === targetPhrase) {
      // Pause at end of sentence
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && typedText === "") {
      // Move to next phrase after deletion
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % headlinePhrases.length);
    } else {
      // Type or erase character by character
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting
            ? targetPhrase.substring(0, prev.length - 1)
            : targetPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, headlinePhrases]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0B1220] bg-tech-grid" style={{ paddingTop: "clamp(5rem, 12vw, 7rem)", paddingBottom: "clamp(1.5rem, 4vw, 3rem)" }}>
      {/* Background Radial Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-hero-glow pointer-events-none rounded-full blur-3xl opacity-80" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left" style={{ gap: "clamp(0.75rem, 2.5vw, 1.5rem)" }}>
            
            {/* Small Badge */}
            <div className="max-w-full inline-flex items-center gap-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 font-semibold shadow-inner shadow-blue-500/10 backdrop-blur-md" style={{ padding: "0.25rem clamp(0.5rem, 2vw, 0.875rem)", fontSize: "clamp(0.6rem, 2.5vw, 0.75rem)" }}>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
              <span className="truncate">{siteConfig.heroBadge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
            </div>

            {/* Main Dynamic Animated Typewriter Heading */}
            <h1 className="font-heading font-extrabold text-white tracking-tight leading-[1.15]" style={{ fontSize: "clamp(1.25rem, 6vw, 3.75rem)", minHeight: "clamp(3rem, 10vw, 7.5rem)" }}>
              Digital Products. <br />
              <span className="text-gradient-brand inline-flex items-center">
                <span>{typedText}</span>
                <span className="text-cyan-400 font-normal animate-pulse ml-1">|</span>
              </span>
            </h1>

            {/* Subheading & Paragraph */}
            <p className="text-slate-300 font-normal leading-relaxed max-w-xl" style={{ fontSize: "clamp(0.75rem, 2.8vw, 1.25rem)" }}>
              We build high-performance websites, web applications, and mobile apps that help businesses grow. From idea to launch, we design and develop modern digital experiences for startups, businesses, and growing brands.
            </p>

            {/* Quick Value Props */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-x-3 gap-y-1.5 w-full max-w-lg border-y border-white/10 text-slate-300 py-2.5 text-[10.5px] sm:text-xs">
              <div className="flex items-center gap-1 font-medium shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>90+ Lighthouse</span>
              </div>
              <div className="flex items-center gap-1 font-medium shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-1 font-medium shrink-0">
                <Zap className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <div className="relative group w-full sm:w-auto block sm:inline-block">
                {/* Multi-layered Glowing Background Aura */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse-slow" />
                
                {/* Animated Ring Accent */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-60 group-hover:opacity-90 transition-opacity animate-gradient-flow" />

                {/* Main Animated Project Inquiry Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-[length:200%_auto] animate-gradient-flow shadow-2xl shadow-blue-500/40 hover:shadow-cyan-400/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden border border-white/20 whitespace-nowrap"
                  style={{ padding: "clamp(0.625rem, 2.5vw, 1rem) clamp(0.875rem, 4vw, 2rem)", fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}
                >
                  {/* Continuous Light Sweep Beam */}
                  <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-light-sweep" />

                  {/* Sparkle Icon & Pulse Indicator */}
                  <span className="relative flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />
                  </span>

                  <span className="relative font-heading tracking-wide uppercase drop-shadow-sm">
                    Project Inquiry
                  </span>

                  {/* Animated Arrow Icon */}
                  <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                  </div>
                </button>
              </div>

              <button
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm whitespace-nowrap"
                style={{ padding: "clamp(0.625rem, 2.5vw, 1rem) clamp(0.875rem, 4vw, 1.75rem)", fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <p className="text-slate-400 flex items-start gap-2 leading-snug" style={{ fontSize: "clamp(0.6rem, 2.5vw, 0.75rem)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 mt-0.5" />
              <span>Based in South India (Tamil Nadu) — Engineering Products Globally</span>
            </p>
          </div>

          {/* Right Column: High-Tech Visual Interactive Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Glowing Accent Ring Behind Visual */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 opacity-30 blur-xl animate-pulse-slow" />

            {/* Card Container */}
            <div className="relative rounded-2xl bg-[#0F172A]/90 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden" style={{ padding: "clamp(0.375rem, 2vw, 1.25rem)" }}>
              
              {/* Window Controls Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                    alvora-architecture.ts
                  </span>
                </div>

                {/* Visual Tab Selector */}
                <div className="flex items-center gap-0.5 bg-slate-900/90 p-0.5 rounded-lg border border-white/10">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium transition-all ${
                      activeTab === "dashboard"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={{ fontSize: "clamp(0.55rem, 2vw, 0.75rem)" }}
                  >
                    <LayoutDashboard className="w-3 h-3" />
                    <span>App</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium transition-all ${
                      activeTab === "code"
                        ? "bg-cyan-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={{ fontSize: "clamp(0.55rem, 2vw, 0.75rem)" }}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("mobile")}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium transition-all ${
                      activeTab === "mobile"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={{ fontSize: "clamp(0.55rem, 2vw, 0.75rem)" }}
                  >
                    <Smartphone className="w-3 h-3" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Dashboard Visual */}
              {activeTab === "dashboard" && (
                <div className="space-y-3 animate-fadeIn">
                  {/* Top Analytics Widgets */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-slate-900/80 border border-white/10" style={{ padding: "clamp(0.5rem, 2vw, 0.75rem)" }}>
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Performance</span>
                      <span className="text-lg font-bold text-cyan-400 font-heading">99.8%</span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[98%]" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 border border-white/10" style={{ padding: "clamp(0.5rem, 2vw, 0.75rem)" }}>
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Latency</span>
                      <span className="text-lg font-bold text-violet-400 font-heading">42ms</span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-violet-500 h-full w-[92%]" />
                      </div>
                    </div>
                  </div>

                  {/* Connected Nodes Map Concept */}
                  <div className="rounded-xl bg-slate-950/80 border border-white/10 relative overflow-hidden" style={{ padding: "clamp(0.5rem, 2vw, 1rem)" }}>
                    <div className="text-xs text-slate-400 font-mono mb-3 flex items-center justify-between">
                      <span>SYSTEM NODES DISPATCH</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ONLINE
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 text-center py-2">
                      <div className="rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 font-semibold leading-tight flex items-center justify-center text-[9px] min-[360px]:text-[10px] sm:text-xs hover:border-blue-400 transition-colors py-1.5 px-1 truncate">
                        WEB APP
                      </div>
                      <div className="rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-semibold leading-tight flex items-center justify-center text-[9px] min-[360px]:text-[10px] sm:text-xs hover:border-cyan-400 transition-colors py-1.5 px-1 truncate">
                        MOBILE APPS
                      </div>
                      <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold leading-tight flex items-center justify-center text-[9px] min-[360px]:text-[10px] sm:text-xs hover:border-emerald-400 transition-colors py-1.5 px-1 truncate">
                        CLOUD ENGINE
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Snippet Visual */}
              {activeTab === "code" && (
                <div className="rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto" style={{ padding: "clamp(0.5rem, 2vw, 1rem)" }}>
                  <div className="text-slate-500">// ALVORA TECHNOLOGIES Product Builder</div>
                  <div>
                    <span className="text-purple-400">import</span> &#123; <span className="text-cyan-300">AlvoraProduct</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@alvora/core&quot;</span>;
                  </div>
                  <div className="pt-1">
                    <span className="text-blue-400">export default async function</span> <span className="text-yellow-300">BuildApp</span>() &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-purple-400">const</span> product = <span className="text-blue-400">await</span> AlvoraProduct.<span className="text-cyan-300">engineer</span>(&#123;
                  </div>
                  <div className="pl-8 text-cyan-200">
                    client: <span className="text-emerald-300">&quot;Global Business&quot;</span>,<br />
                    architecture: [<span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;Mobile&quot;</span>, <span className="text-emerald-300">&quot;Cloud&quot;</span>],<br />
                    performance: <span className="text-emerald-300">&quot;Optimal&quot;</span>,<br />
                    delivery: <span className="text-emerald-300">&quot;On Time&quot;</span>
                  </div>
                  <div className="pl-4">&#125;);</div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> product.<span className="text-cyan-300">deployToProduction</span>();
                  </div>
                  <div>&#125;</div>
                </div>
              )}

              {/* Tab 3: Mobile View Visual */}
              {activeTab === "mobile" && (
                <div className="flex justify-center items-center py-2">
                  <div className="w-56 rounded-3xl bg-slate-950 border-4 border-slate-800 p-3 shadow-xl space-y-3">
                    <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto" />
                    <div className="p-3 rounded-xl bg-blue-600 text-white text-xs font-bold font-heading">
                      Mobile App Dashboard
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between text-[10px]">
                        <span>Realtime Sync</span>
                        <span className="text-cyan-400 font-bold">100%</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between text-[10px]">
                        <span>Offline Storage</span>
                        <span className="text-emerald-400 font-bold">Active</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between text-[10px]">
                        <span>Push Notifications</span>
                        <span className="text-violet-400 font-bold">Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating UI Elements Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 p-0.5 rounded-xl shadow-lg hidden sm:block">
                <div className="bg-[#0F172A] px-3 py-1.5 rounded-[10px] text-xs font-mono text-white flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>Cloud & System Architecture Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
