"use client";

import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0B1220] relative overflow-hidden" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Glow Container */}
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#111B2E] via-[#0D1628] to-[#17233D] border border-white/15 text-center shadow-2xl overflow-hidden" style={{ padding: "clamp(1.5rem, 5vw, 4rem)" }}>
          
          {/* Animated Glow Backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-violet-600/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="font-heading font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3.75rem)" }}>
              Have an Idea? <br />
              <span className="text-gradient-brand">Let&apos;s Build It.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll help turn your idea into a production-ready digital product.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
                style={{ padding: "clamp(0.75rem, 2.5vw, 1rem) clamp(1.25rem, 4vw, 2rem)", fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}
              >
                <span>Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                style={{ padding: "clamp(0.75rem, 2.5vw, 1rem) clamp(1.25rem, 4vw, 2rem)", fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}
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
