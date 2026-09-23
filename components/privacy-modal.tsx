"use me";
"use client";

import { X, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
          <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white">Privacy Policy</h2>
            <p className="text-xs text-slate-400 font-mono">Last Updated: January 1, 2026 · {siteConfig.name}</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <h3 className="font-heading font-bold text-white text-base">1. Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide to us when expressing interest in our services, such as your name, email address, phone number, company name, and project scope details.
          </p>

          <h3 className="font-heading font-bold text-white text-base">2. How We Use Your Information</h3>
          <p>
            Your information is used strictly to respond to project inquiries, provide service proposals, manage client communications, and improve our website performance. We do not sell or trade your data to third parties.
          </p>

          <h3 className="font-heading font-bold text-white text-base">3. Data Security</h3>
          <p>
            {siteConfig.name} implements robust administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, disclosure, or alteration.
          </p>

          <h3 className="font-heading font-bold text-white text-base">4. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact our privacy compliance team at {siteConfig.email}.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-semibold text-white shadow-md"
          >
            Acknowledge Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}
