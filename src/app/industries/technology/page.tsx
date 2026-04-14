"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function IndustryPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Technology" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <Link href="/industries" className="section-label mb-6 hover:text-zeus-gold-light transition-colors cursor-pointer">
              <ArrowRight size={14} className="rotate-180" /> Back to Industries
            </Link>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">Technology</h1>
            <p className="section-subtitle" style={{ fontSize: "1.15rem" }}>Scaling technology companies from startup to enterprise with strategic guidance and operational excellence.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="section-title mb-6">How We Help <span className="text-zeus-gold">Technology</span></h2>
              <p className="text-zeus-text-secondary leading-relaxed mb-8" style={{ fontSize: "1.1rem" }}>
                Our team of specialists brings deep industry knowledge combined with cross-sector expertise to deliver transformative strategies tailored to the unique challenges of technology.
              </p>
              <StaggerContainer className="space-y-5">
                {["Strategic Planning & Roadmap", "Digital Transformation", "Operational Excellence", "Compliance & Risk Management", "Technology Integration", "Growth & Scaling Strategy"].map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-center gap-4 px-6 py-5 glass-card">
                      <CheckCircle2 size={22} className="text-zeus-gold flex-shrink-0 mt-0.5" />
                      <span className="text-zeus-white-soft" style={{ fontSize: "1.05rem" }}>{f}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10 h-[500px]">
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Technology" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight/50 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-20">
            <ScrollReveal>
              <h3 className="text-2xl text-zeus-white mb-6">Ready to transform your technology business?</h3>
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
