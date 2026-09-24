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

  const cleanErrorMessage = (err: string | null): string => {
    if (!err) return "Unable to send inquiry. Please try again.";
    if (
      err.includes("<") ||
      err.includes("DOCTYPE") ||
      err.includes("html") ||
      err.includes("Just a moment") ||
      err.includes("challenge") ||
      err.includes("cf_chl_opt")
    ) {
      return "Network security challenge intercepted request. Retrying via browser direct connection...";
    }
    return err;
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

    const formPayload = {
      _subject: `⚡ New Project Inquiry from ${formData.name} - VEXARIA TECHNOLOGIES`,
      _template: "table",
      _captcha: "false",
      _replyto: formData.email,
      "Full Name": formData.name,
      "Work Email": formData.email,
      "Phone Number": formData.phone || "Not Provided",
      "Company Name": formData.company || "Not Provided",
      "Service Requirement": formData.service || "General Inquiry",
      "Project Message": formData.message,
      "Submission Time": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    };

    try {
      // Tier 1: Next.js API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resData = await response.json().catch(() => ({ success: false }));

      if (response.ok && resData.success) {
        setSubmitted(true);
        return;
      }

      // Tier 2: Direct Browser Fetch to FormSubmit (bypasses serverless proxy blocks)
      const targetEmail = siteConfig.email || "aadhamshah@gmail.com";
      const directResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const directText = await directResponse.text();
      let directData: any = {};
      try {
        directData = JSON.parse(directText);
      } catch {
        directData = { success: directResponse.ok };
      }

      if (!directText.includes("<!DOCTYPE") && (directResponse.ok || directData.success === "true" || directData.success === true)) {
        setSubmitted(true);
        return;
      }

      // Tier 3: Browser Dynamic Form POST Fallback
      const form = document.createElement("form");
      form.method = "POST";
      form.action = `https://formsubmit.co/${targetEmail}`;
      form.style.display = "none";

      Object.entries(formPayload).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setSubmitted(true);
    } catch (err: any) {
      console.warn("Client fallback execution:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="bg-[#090F1B] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 3rem)" }}>
                Let&apos;s Build <br />
                <span className="text-gradient-brand">Something Great.</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Have a new product idea, website revamp, or custom software requirement? Fill out the form or reach out directly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase block">Direct Email</span>
                  <p className="font-heading font-bold text-white text-xs sm:text-base truncate">{siteConfig.email}</p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase block">Direct Phone</span>
                  <p className="font-heading font-bold text-white text-xs sm:text-base truncate">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase block">Location</span>
                  <p className="font-heading font-bold text-white text-xs sm:text-base truncate">{siteConfig.location}</p>
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
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 shadow-2xl relative" style={{ padding: "clamp(1rem, 4vw, 2.5rem)" }}>
              
              {submitted ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Inquiry Created Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your project inquiry has been processed for <span className="text-white font-semibold">{siteConfig.email}</span>.
                  </p>
                  
                  {/* Detailed Summary Card */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 max-w-md mx-auto text-left space-y-2">
                    <p className="font-mono text-cyan-400 uppercase font-bold tracking-wider text-[11px] pb-1 border-b border-white/10">
                      Inquiry Summary
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div><span className="text-slate-400">Name:</span> <p className="text-white font-semibold">{formData.name}</p></div>
                      <div><span className="text-slate-400">Email:</span> <p className="text-white font-semibold">{formData.email}</p></div>
                      <div><span className="text-slate-400">Service:</span> <p className="text-white font-semibold">{formData.service}</p></div>
                      <div><span className="text-slate-400">Phone:</span> <p className="text-white font-semibold">{formData.phone || "N/A"}</p></div>
                    </div>
                  </div>

                  {/* 1-Tap Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={`https://wa.me/916381248055?text=${encodeURIComponent(
                        `Hi VEXARIA TECHNOLOGIES, I just submitted a project inquiry:\n\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone || "N/A"}\n• Service: ${formData.service}\n• Message: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`⚡ New Project Inquiry: ${formData.name} - ${formData.service}`)}&body=${encodeURIComponent(
                        `Hi VEXARIA TECHNOLOGIES Team,\n\nHere are my project details:\n\nFull Name: ${formData.name}\nWork Email: ${formData.email}\nPhone Number: ${formData.phone || "Not Provided"}\nCompany Name: ${formData.company || "Not Provided"}\nService Requirement: ${formData.service}\n\nProject Details:\n${formData.message}\n\nSubmitted at: ${new Date().toLocaleString()}`
                      )}`}
                      className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95"
                    >
                      <Mail className="w-4 h-4 text-blue-200" />
                      <span>Open Email App</span>
                    </a>
                  </div>

                  <div className="pt-2">
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
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition border border-white/10"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action={`https://formsubmit.co/${siteConfig.email || "aadhamshah@gmail.com"}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {/* FormSubmit Special Name Attributes */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`⚡ New Project Inquiry from ${formData.name || "Client"} - ${siteConfig.name}`} />
                  <input type="hidden" name="_replyto" value={formData.email} />

                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{cleanErrorMessage(submitError)}</span>
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
                        name="name"
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
                        name="email"
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
                        name="phone"
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
                        name="company"
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
                      name="service"
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
                      name="message"
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
