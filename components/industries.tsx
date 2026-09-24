"use client";

import Image from "next/image";
import {
  Stethoscope,
  ShoppingBag,
  Building2,
  Armchair,
  Gem,
  Shirt,
  Smartphone,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Industries() {
  const scrollToContact = (industryName: string) => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const industryList = [
    {
      id: "grocery",
      title: "Grocery & Fresh Vegetable Shops",
      tag: "Kirana & Vegetable Stores",
      desc: "Online fresh vegetable & grocery delivery mobile apps, item weight stock management, Indian Rupee (₹) billing, and WhatsApp order notifications.",
      image: "/images/industry-grocery.webp",
      icon: ShoppingBag,
      features: ["Live Stock & Weight Pricing (₹)", "Express Local Store Delivery", "Direct WhatsApp Order Dispatch"],
    },
    {
      id: "medical",
      title: "Medical, Hospitals & Clinics",
      tag: "Healthcare & Diagnostics",
      desc: "Hospital management portals, online doctor appointment scheduling, telemedicine consultation, patient health records, and pharmacy EHR.",
      image: "/images/industry-medical.webp",
      icon: Stethoscope,
      features: ["Online Doctor Appointment Booking", "Patient Health & Lab Diagnostics", "Pharmacy Billing & EHR Records"],
    },
    {
      id: "realestate",
      title: "Real Estate & Housing Portals",
      tag: "Plots, Flats & Housing",
      desc: "Property listing portals, apartment & plot sales, virtual property tours, lead management CRMs, and real estate agent dashboards across Tamil Nadu.",
      image: "/images/industry-realestate.webp",
      icon: Building2,
      features: ["Interactive Map Property Search", "Lead Management & Inquiry CRM", "360° Virtual Property Tour Viewer"],
    },
    {
      id: "furniture",
      title: "Furniture, Bedding & Home Decor",
      tag: "Furniture & Bedding",
      desc: "Custom e-commerce platforms for furniture manufacturers, mattress shops, and bedding stores with custom sizing and home delivery tracking.",
      image: "/images/industry-furniture.webp",
      icon: Armchair,
      features: ["Custom Dimension & Wood Selector", "HD 3D Product Furniture Gallery", "Doorstep Delivery & Assembly Scheduler"],
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Digital Storefronts",
      tag: "E-Commerce & Marketplaces",
      desc: "Custom online shopping storefronts, multi-vendor marketplace platforms, instant checkout, Indian Rupee (₹) payment gateway integration, and inventory management.",
      image: "/images/portfolio-novastore.webp",
      icon: ShoppingBag,
      features: ["Razorpay & PhonePe Payment Integration (₹)", "Multi-Vendor Seller Dashboard", "Order Tracking & WhatsApp Invoices"],
    },
    {
      id: "textiles",
      title: "Textiles, Sarees & Garment Stores",
      tag: "Silk Sarees & Garments",
      desc: "E-commerce web apps for silk saree showrooms, clothing boutiques, and garment retail shops with dynamic size charts and coupon codes.",
      image: "/images/industry-textiles.webp",
      icon: Shirt,
      features: ["Filter by Fabric, Color & Occasion", "Custom Saree Draping Previews", "Pan-India Shipping & Order Tracking"],
    },
    {
      id: "electronics",
      title: "Electronics & Mobile Retail Shops",
      tag: "Mobiles & Appliances",
      desc: "Digital storefronts for mobile phone shops and electronic showrooms with EMI calculators, brand filters, and warranty tracking.",
      image: "/images/industry-electronics.webp",
      icon: Smartphone,
      features: ["Instant No-Cost EMI Calculator", "Product Specs Comparison Tool", "Store Pickup & Express Delivery"],
    },
  ];

  return (
    <section id="industries" className="bg-[#0B1220] border-t border-white/10 relative" style={{ padding: "clamp(1.5rem, 4vw, 3rem) 0" }}>
      <div className="max-w-7xl mx-auto relative z-10" style={{ padding: "0 clamp(0.375rem, 2.5vw, 2rem)" }}>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>7 Core Business Sectors</span>
          </div>

          <h2 className="font-heading font-extrabold text-white tracking-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 2.75rem)" }}>
            Engineered For <span className="text-gradient-brand">Every Indian Business Sector</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            From vegetable shops and medical hospitals to real estate, furniture, gold jewelry, and saree showrooms across Tamil Nadu & India — we build custom web & mobile solutions with Indian Rupee (₹) integration.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="h-48 relative overflow-hidden bg-slate-950/80">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-contain p-1.5 object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1524] via-transparent to-black/30 z-10" />

                    {/* Top Badges */}
                    <div className="relative z-20 p-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 border border-white/20 text-[11px] font-mono font-bold text-cyan-300 backdrop-blur-md shadow-md">
                        <IconComponent className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{ind.tag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2.5">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {ind.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {ind.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1 pt-2.5 border-t border-white/10">
                      {ind.features.map((feat) => (
                        <li key={feat} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="px-4 py-3 bg-slate-950/60 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors">
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
