"use client";

import { siteConfig } from "@/config/site";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B1220] relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span>Client Feedback</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3rem)" }}>
            What Founders & Leaders <span className="text-gradient-brand">Say</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Hear from business leaders who built and scaled their software products with THIRAN LABS.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(1rem, 3vw, 2rem)" }}>
          {siteConfig.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              style={{ padding: "clamp(1rem, 3vw, 2rem)" }}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold font-heading flex items-center justify-center text-sm shadow-md`}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">{t.name}</h3>
                  <p className="text-xs text-slate-400">{t.role} · <span className="text-cyan-400">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
