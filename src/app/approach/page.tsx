"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Target, LineChart, Cog, Rocket, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const steps = [
  { icon: Search, phase: "01", title: "Discovery & Assessment", desc: "Deep-dive into your business operations, market position, and growth objectives through comprehensive analysis and stakeholder interviews.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
  { icon: Target, phase: "02", title: "Strategy Development", desc: "Create tailored strategic frameworks leveraging industry analysis, competitive intelligence, and emerging technologies to chart your path forward.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
  { icon: Cog, phase: "03", title: "Implementation", desc: "Execute the strategy with hands-on support, deploying systems, processes, and technologies that drive measurable change across your organization.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" },
  { icon: LineChart, phase: "04", title: "Optimization & Growth", desc: "Continuously monitor performance, refine approaches, and scale successes for long-term sustainable growth and competitive advantage.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
];

export default function ApproachPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80" alt="Strategy session" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/80" />
        </div>
        <div className="page-hero-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-container text-center" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Our Approach</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              From Insight to <span className="text-zeus-gold">Impact</span>
            </h1>
            <p className="text-zeus-text-secondary max-w-2xl mx-auto" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Our structured methodology transforms businesses through data-driven strategy, hands-on execution, and continuous optimization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* Process Steps — alternating layout like McKinsey */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <ScrollReveal key={step.phase} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-bold text-zeus-gold/15 font-serif">{step.phase}</span>
                      <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center">
                        <step.icon size={28} className="text-zeus-gold" />
                      </div>
                    </div>
                    <h3 className="text-3xl text-zeus-white mb-4">{step.title}</h3>
                    <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "1.1rem" }}>{step.desc}</p>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10">
                      <Image src={step.img} alt={step.title} width={600} height={400} className="object-cover w-full h-[350px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight/40 to-transparent" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zeus */}
      <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">Why Zeus</span>
              <h2 className="section-title mt-4">The Zeus Difference</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cross-disciplinary specialists under one roof",
              "Fortune 500-level strategy for every business size",
              "Data-driven decision making at every stage",
              "Hands-on implementation, not just advice",
              "Emerging technology integration (AI, analytics)",
              "Focus on underrepresented communities & equity",
            ].map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-4 p-5 glass-card">
                  <CheckCircle2 size={22} className="text-zeus-gold flex-shrink-0 mt-0.5" />
                  <span className="text-zeus-white-soft" style={{ fontSize: "1rem" }}>{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-container text-center" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <h2 className="section-title mb-6">Ready for Your <span className="text-zeus-gold">Next Big Move</span>?</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">Work With Us <ArrowRight size={18} /></span>
              </Link>
              <Link href="/about" className="btn-outline" style={{ minHeight: "58px", padding: "1rem 2.75rem" }}>About Zeus</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
