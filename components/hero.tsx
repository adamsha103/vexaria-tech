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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B1220] bg-tech-grid">
      {/* Background Radial Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-hero-glow pointer-events-none rounded-full blur-3xl opacity-80" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-inner shadow-blue-500/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{siteConfig.heroBadge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Main Dynamic Animated Typewriter Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] min-h-[90px] sm:min-h-[120px]">
              Digital Products. <br />
              <span className="text-gradient-brand inline-flex items-center">
                <span>{typedText}</span>
                <span className="text-cyan-400 font-normal animate-pulse ml-1">|</span>
              </span>
            </h1>

            {/* Subheading & Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              We build high-performance websites, web applications, and mobile apps that help businesses grow. From idea to launch, we design and develop modern digital experiences for startups, businesses, and growing brands.
            </p>

            {/* Quick Value Props */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2 w-full max-w-lg border-y border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>90+ Lighthouse</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
              >
                <span>Project Inquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <p className="text-xs text-slate-400 pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Based in South India (Tamil Nadu) — Engineering Products Globally</span>
            </p>
          </div>

          {/* Right Column: High-Tech Visual Interactive Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Glowing Accent Ring Behind Visual */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 opacity-30 blur-xl animate-pulse-slow" />

            {/* Card Container */}
            <div className="relative rounded-2xl bg-[#0F172A]/90 border border-white/15 p-4 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden">
              
              {/* Window Controls Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                    alvora-architecture.ts
                  </span>
                </div>

                {/* Visual Tab Selector */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      activeTab === "dashboard"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>App</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      activeTab === "code"
                        ? "bg-cyan-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("mobile")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      activeTab === "mobile"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Dashboard Visual */}
              {activeTab === "dashboard" && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Top Analytics Widgets */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Performance</span>
                      <span className="text-lg font-bold text-cyan-400 font-heading">99.8%</span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[98%]" />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[10px] text-slate-400 font-mono uppercase block">Latency</span>
                      <span className="text-lg font-bold text-violet-400 font-heading">42ms</span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-violet-500 h-full w-[92%]" />
                      </div>
                    </div>
                  </div>

                  {/* Connected Nodes Map Concept */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 relative overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono mb-3 flex items-center justify-between">
                      <span>SYSTEM NODES DISPATCH</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ONLINE
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center py-4">
                      <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:border-blue-400 transition-colors">
                        <span className="block text-[10px] text-slate-400">WEB</span>
                        WEB APP
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:border-cyan-400 transition-colors">
                        <span className="block text-[10px] text-slate-400">MOBILE</span>
                        MOBILE APPS
                      </div>
                      <div className="p-2.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold hover:border-violet-400 transition-colors">
                        <span className="block text-[10px] text-slate-400">AI</span>
                        AI PIPELINE
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:border-emerald-400 transition-colors">
                        <span className="block text-[10px] text-slate-400">CLOUD</span>
                        CLOUD ENGINE
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Snippet Visual */}
              {activeTab === "code" && (
                <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
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
                    architecture: [<span className="text-emerald-300">&quot;Web&quot;</span>, <span className="text-emerald-300">&quot;Mobile&quot;</span>, <span className="text-emerald-300">&quot;AI&quot;</span>],<br />
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
