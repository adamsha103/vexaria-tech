"use me";
"use client";

import { X, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white">Terms &amp; Conditions</h2>
            <p className="text-xs text-slate-400 font-mono">Effective Date: January 1, 2026 · {siteConfig.name}</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <h3 className="font-heading font-bold text-white text-base">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the services provided by {siteConfig.name} (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;), you agree to comply with and be bound by these Terms and Conditions.
          </p>

          <h3 className="font-heading font-bold text-white text-base">2. Scope of Services</h3>
          <p>
            {siteConfig.name} provides software development services including Website Development, Web Applications, Mobile Applications, UI/UX Design, Custom Software, and Cloud Integrations. Specific deliverables are governed by individual client agreements.
          </p>

          <h3 className="font-heading font-bold text-white text-base">3. Intellectual Property Rights</h3>
          <p>
            All custom source code, documentation, and assets developed specifically for clients upon full payment shall belong to the respective client, while pre-existing framework modules remain the intellectual property of {siteConfig.name}.
          </p>

          <h3 className="font-heading font-bold text-white text-base">4. Limitation of Liability</h3>
          <p>
            {siteConfig.name} shall not be liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-md"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
}
