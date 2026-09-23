"use me";
"use client";

import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow Container */}
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#111B2E] via-[#0D1628] to-[#17233D] border border-white/15 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Animated Glow Backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-violet-600/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <br />
              <span className="text-gradient-brand">Let&apos;s Build It.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll help turn your idea into a production-ready digital product.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
              >
                <span>Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Talk to Us</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
