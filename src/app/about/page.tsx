"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Users, Award, Lightbulb, CheckCircle2, Globe, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, Counter } from "@/components/Animations";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Modern office" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/80" />
        </div>
        <div className="page-hero-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-label mb-6">About Zeus</span>
              <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
                We Accelerate <span className="text-zeus-gold">Sustainable Growth</span>
              </h1>
              <p className="text-zeus-text-secondary leading-relaxed mb-8" style={{ fontSize: "1.15rem" }}>
                Zeus Consulting Services is a forward-thinking consultancy that partners with businesses to unlock their full potential. We bring together specialists across key disciplines to deliver transformative, Fortune 500-level strategies to organizations of every size.
              </p>
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">Start Your Journey <ArrowRight size={18} /></span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-10 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-zeus-gold/10 to-transparent rounded-bl-3xl" />
                <blockquote className="relative">
                  <span className="text-7xl text-zeus-gold/20 absolute -top-4 -left-2 font-serif">&ldquo;</span>
                  <p className="text-xl text-zeus-white-soft leading-relaxed mb-6 relative z-10 pl-6 font-serif italic">
                    Transforming and empowering organizations with the tools, systems, and knowledge to achieve Fortune 500-level success.
                  </p>
                  <div className="gold-line mb-4" />
                  <p className="text-sm text-zeus-gold uppercase tracking-[0.15em]">Zeus Consulting Mission</p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* Impact Stats */}
      <section className="py-20 bg-zeus-navy">
        <div className="z-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { target: 120, suffix: "M+", prefix: "$", label: "Cost Savings Delivered" },
              { target: 40, suffix: "+", label: "Industries Transformed" },
              { target: 98, suffix: "%", label: "Client Retention" },
              { target: 17, suffix: "%", label: "Avg Efficiency Gain" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <Counter target={stat.target} suffix={stat.suffix} className="font-bold text-zeus-gold" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} />
                  <p className="text-zeus-text-secondary uppercase text-xs tracking-[0.12em] mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" width={800} height={600} className="object-cover w-full h-[450px]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="section-label mb-4">Our Impact</span>
              <h2 className="section-title mb-6">Driving Economic Growth & Fostering Equity</h2>
              <p className="text-zeus-text-secondary leading-relaxed mb-6" style={{ fontSize: "1.05rem" }}>
                We are committed to transforming and empowering organizations with the tools, systems, and knowledge to achieve Fortune 500-level success while driving economic growth and fostering equity in underrepresented communities.
              </p>
              <div className="space-y-4">
                {[
                  "Cross-disciplinary specialists under one roof",
                  "Data-driven decision making at every stage",
                  "Hands-on implementation, not just advice",
                  "Focus on underrepresented communities & equity",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-zeus-gold flex-shrink-0 mt-0.5" />
                    <span className="text-zeus-white-soft" style={{ fontSize: "1rem" }}>{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">What Drives Us</span>
              <h2 className="section-title mt-4">Our Core Values</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Precision", desc: "Every strategy is tailored with meticulous attention to your unique challenges." },
              { icon: Users, title: "Partnership", desc: "We work alongside you—not above you. Your success is our mission." },
              { icon: Award, title: "Excellence", desc: "Fortune 500-level expertise for businesses of every size and stage." },
              { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge tools and emerging technologies drive measurable results." },
            ].map((val) => (
              <StaggerItem key={val.title}>
                <div className="glass-card p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-xl bg-zeus-gold/10 flex items-center justify-center mx-auto mb-6">
                    <val.icon size={28} className="text-zeus-gold" />
                  </div>
                  <h3 className="text-xl text-zeus-white mb-3">{val.title}</h3>
                  <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "0.95rem" }}>{val.desc}</p>
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
            <h2 className="section-title mb-6">
              Ready to Transform Your <span className="text-zeus-gold">Business</span>?
            </h2>
            <p className="text-zeus-text-secondary mb-10" style={{ fontSize: "1.15rem" }}>
              Let&apos;s discuss how Zeus Consulting can accelerate your growth.
            </p>
            <Link href="/contact" className="btn-zeus-lg">
              <span className="flex items-center gap-2">Schedule a Consultation <ArrowRight size={18} /></span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
