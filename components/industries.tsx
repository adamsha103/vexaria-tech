"use client";

import Image from "next/image";
import { Stethoscope, ShoppingBag, Building2, Armchair, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Industries() {
  const scrollToContact = (industryName: string) => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const industryList = [
    {
      id: "medical",
      title: "Medical, Hospitals & Healthcare",
      tag: "Healthcare & Hospitals",
      desc: "Custom hospital management systems, patient portals, online doctor appointment booking, telemedicine web apps, and EHR systems.",
      image: "/images/industry-medical.webp",
      icon: Stethoscope,
      accent: "from-blue-600 to-cyan-500",
      features: ["Doctor Appointment Booking", "Patient Health Records", "Pharmacy & Lab Integration"],
    },
    {
      id: "grocery",
      title: "Grocery & Vegetable Shops",
      tag: "Retail & Grocery",
      desc: "Online grocery delivery web & mobile apps, fresh produce inventory tracking, instant checkout, and local store delivery management.",
      image: "/images/industry-grocery.webp",
      icon: ShoppingBag,
      accent: "from-emerald-600 to-teal-500",
      features: ["Live Stock & Weight Catalog", "Express Local Delivery", "WhatsApp Order Notifications"],
    },
    {
      id: "realestate",
      title: "Real Estate & Property Portals",
      tag: "Real Estate & Housing",
      desc: "Property listing websites, apartment rental management portals, virtual tour integrations, lead management CRMs, and agent dashboards.",
      image: "/images/industry-realestate.webp",
      icon: Building2,
      accent: "from-violet-600 to-blue-600",
      features: ["Interactive Property Maps", "Lead Inquiry CRM", "360 Virtual Tour Viewer"],
    },
    {
      id: "furniture",
      title: "Furniture, Bedding & Home Goods",
      tag: "Furniture & Decor",
      desc: "E-commerce stores for furniture manufacturers and bedding shops with 3D product customization, bed sizing options, and delivery tracking.",
      image: "/images/industry-furniture.webp",
      icon: Armchair,
      accent: "from-amber-500 to-orange-600",
      features: ["Custom Dimension Selectors", "High-Res 3D Product Gallery", "Local Delivery Scheduler"],
    },
  ];

  return (
    <section id="industries" className="bg-[#0B1220] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tailored Industry Solutions</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 2.75rem)" }}>
            Engineered For <span className="text-gradient-brand">Every Business Sector</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            From vegetable shops and medical hospitals to real estate firms and furniture stores, we build custom digital platforms for any product or industry.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industryList.map((ind) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={ind.id}
                onClick={() => scrollToContact(ind.title)}
                className="group rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* WebP Image Banner Display */}
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1524] via-transparent to-black/30 z-10" />

                    {/* Top Badge */}
                    <div className="relative z-20 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-white/20 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-md">
                        <IconComponent className="w-4 h-4 text-cyan-400" />
                        <span>{ind.tag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {ind.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {ind.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 pt-3 border-t border-white/10">
                      {ind.features.map((feat) => (
                        <li key={feat} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="px-5 py-3.5 bg-slate-950/60 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors">
                  <span>Build Solution For My Business</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
