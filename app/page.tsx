import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStrip from "@/components/tech-strip";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Solutions from "@/components/solutions";
import Showcase from "@/components/showcase";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import Portfolio from "@/components/portfolio";
import CaseStudy from "@/components/case-study";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWidgets from "@/components/floating-widgets";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col selection:bg-cyan-500 selection:text-slate-950 relative">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TechStrip />
        <Services />
        <Industries />
        <Solutions />
        <Showcase />
        <WhyUs />
        <Process />
        <TechStack />
        <Portfolio />
        <CaseStudy />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  );
}
