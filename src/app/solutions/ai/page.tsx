"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const features = [
              { label: "AI Strategy Development" },
              { label: "Machine Learning Integration" },
              { label: "Automation Workflows" },
              { label: "Predictive Analytics" },
              { label: "Natural Language Processing" },
              { label: "AI Ethics & Governance" },
];

export default function SolutionPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" alt="AI Implementation" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <Link href="/solutions" className="section-label mb-6 hover:text-zeus-gold-light transition-colors cursor-pointer">
              <ArrowRight size={14} className="rotate-180" /> Back to Solutions
            </Link>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">AI Implementation</h1>
            <p className="section-subtitle" style={{ fontSize: "1.15rem" }}>Custom AI strategies tailored to industry-specific needs, integrating automation and predictive analytics.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="section-title mb-8">What We <span className="text-zeus-gold">Deliver</span></h2>
              <StaggerContainer className="space-y-4">
                {features.map((f) => (
                  <StaggerItem key={f.label}>
                    <div className="flex items-start gap-4 p-4 glass-card">
                      <CheckCircle2 size={22} className="text-zeus-gold flex-shrink-0 mt-0.5" />
                      <span className="text-zeus-white-soft" style={{ fontSize: "1.05rem" }}>{f.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10 h-full min-h-[400px]">
                <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" alt="AI Implementation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-20">
            <ScrollReveal>
              <h3 className="text-2xl text-zeus-white mb-6">Ready to get started?</h3>
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">Schedule a Consultation <ArrowRight size={18} /></span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
