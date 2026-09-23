"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Development",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const servicesList = [
    "Website Development",
    "Web Application",
    "Mobile Application",
    "Other / General Inquiry",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message details are required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
      } else {
        setSubmitError(resData.error || "Failed to deliver inquiry to mailbox. Please try again.");
      }
    } catch (err: any) {
      setSubmitError(err?.message || "An unexpected network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090F1B] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Let&apos;s Build <br />
                <span className="text-gradient-brand">Something Great.</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Have a new product idea, website revamp, or custom software requirement? Fill out the form or reach out directly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</span>
                  <p className="font-heading font-bold text-white text-sm sm:text-base">{siteConfig.email}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Phone</span>
                  <p className="font-heading font-bold text-white text-sm sm:text-base">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Location</span>
                  <p className="font-heading font-bold text-white text-sm sm:text-base">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{siteConfig.responseNotice}</span>
            </div>
          </div>

          {/* Right Panel: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Inquiry Sent to Your Mailbox!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been dispatched directly to <span className="text-cyan-400 font-semibold">{siteConfig.email}</span>.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-xs text-slate-300 max-w-md mx-auto text-left space-y-1">
                    <p className="font-semibold text-cyan-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Inbox Confirmation Tip:
                    </p>
                    <p className="text-slate-300 leading-normal">
                      If this is your first submission, check your Gmail inbox (or Spam folder) for a <strong>FormSubmit Activation Email</strong> and click <em>&ldquo;Activate Form&rdquo;</em> to ensure future inquiries land straight in your Primary Inbox.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/916381248055?text=${encodeURIComponent(`Hi VEXARIA TECHNOLOGIES, I just submitted a project inquiry for ${formData.service}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                    >
                      <span>Also Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "Website Development",
                          message: "",
                        });
                      }}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your work email address"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company Name (Optional)
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-slate-900 text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your project requirements, goals, or timelines..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
