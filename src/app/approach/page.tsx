"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Search, Target, LineChart, Cog, Rocket, CheckCircle2,
  Shield, Zap, Users, Brain, Award, Sparkles, BarChart3, TrendingUp,
  Building2, Lightbulb, Clock, Handshake, ChevronRight,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, Counter } from "@/components/Animations";

/* ═══ DATA ═══ */
const steps = [
  {
    icon: Search, phase: "01", title: "Discovery & Assessment",
    desc: "We don't start with assumptions — we start with data. Our team conducts a 360° audit of your operations, market position, financials, and competitive landscape through stakeholder interviews and proprietary diagnostic tools.",
    details: ["Comprehensive business audit", "Market & competitor analysis", "Stakeholder interviews", "Gap identification report"],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    duration: "2-3 Weeks",
  },
  {
    icon: Target, phase: "02", title: "Strategy Architecture",
    desc: "Using insights from discovery, we architect a bespoke strategy that doesn't just address symptoms — it rewires your business for sustainable advantage. Every framework is pressure-tested against market realities.",
    details: ["Custom strategic framework", "Financial modeling & projections", "Technology roadmap", "Risk mitigation plan"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    duration: "3-4 Weeks",
  },
  {
    icon: Cog, phase: "03", title: "Hands-On Implementation",
    desc: "This is where most consultancies disappear. We stay. Our team embeds alongside yours — deploying systems, training teams, and driving the execution that turns strategy documents into measurable results.",
    details: ["On-ground execution support", "Process deployment & automation", "Team training & enablement", "Weekly progress tracking"],
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    duration: "8-16 Weeks",
  },
  {
    icon: LineChart, phase: "04", title: "Scale & Optimize",
    desc: "Growth isn't a one-time event — it's a system. We continuously monitor KPIs, refine approaches, and identify new levers for expansion so your business compounds its advantages quarter after quarter.",
    details: ["KPI dashboard & monitoring", "Continuous optimization cycles", "Scaling playbooks", "Ongoing advisory access"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    duration: "Ongoing",
  },
];

const differentiators = [
  {
    icon: Handshake, title: "We Build With You, Not For You",
    desc: "Other firms hand you a PDF and leave. We embed with your team, transfer knowledge, and build systems that outlast our engagement.",
  },
  {
    icon: Brain, title: "Cross-Disciplinary Intelligence",
    desc: "Marketing, finance, operations, AI — all under one roof. No need to coordinate 5 different agencies. One team, unified strategy.",
  },
  {
    icon: Shield, title: "Battle-Tested Frameworks",
    desc: "Our methodologies are forged from 500+ engagements across 40+ industries. We don't experiment with your business — we apply what works.",
  },
  {
    icon: Lightbulb, title: "AI-First Thinking",
    desc: "Every strategy includes an AI integration layer. We don't treat technology as an afterthought — it's woven into the foundation of every solution.",
  },
  {
    icon: TrendingUp, title: "17% Average Efficiency Gain",
    desc: "Not a vanity metric. Measurable, auditable improvement in efficiency, profitability, and operational performance — delivered consistently.",
  },
  {
    icon: Users, title: "Equity & Access",
    desc: "Fortune 500-level consulting shouldn't be reserved for Fortune 500 companies. We make world-class strategy accessible to businesses of every size.",
  },
];

const comparisonPoints = [
  { label: "Strategy Document", others: true, zeus: true },
  { label: "Implementation Support", others: false, zeus: true },
  { label: "Cross-Disciplinary Team", others: false, zeus: true },
  { label: "AI Integration Layer", others: false, zeus: true },
  { label: "Ongoing Advisory Access", others: false, zeus: true },
  { label: "Fixed Engagement Pricing", others: false, zeus: true },
  { label: "Knowledge Transfer", others: false, zeus: true },
];

export default function ApproachPage() {
  const [activeStep, setActiveStep] = useState(0);

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

        <div className="relative z-container text-center" style={{ maxWidth: "960px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Our Approach</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              Strategy Without <span className="text-zeus-gold">Execution</span> Is Just a Presentation
            </h1>
            <p className="text-zeus-text-secondary max-w-2xl mx-auto mb-10" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Most consultancies hand you a deck and walk away. We stay until the numbers move.
              Our methodology is built on one belief: <strong className="text-zeus-white">real consulting means real results.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">Start Your Transformation <ArrowRight size={18} /></span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* The Problem Statement */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container" style={{ maxWidth: "960px" }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">The Problem</span>
              <h2 className="section-title mt-4">Why Most Consulting Fails</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, stat: "68%", label: "of consulting engagements fail to deliver promised ROI" },
                { icon: BarChart3, stat: "$3.2B", label: "wasted annually on strategies that never get implemented" },
                { icon: Users, stat: "71%", label: "of businesses say their consultant didn't understand their industry" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-zeus-danger/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon size={26} className="text-zeus-danger" />
                  </div>
                  <p className="font-bold text-zeus-white text-3xl mb-2">{item.stat}</p>
                  <p className="text-zeus-text-secondary" style={{ fontSize: "0.95rem" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-center text-zeus-text-secondary mt-10 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              The consulting industry is broken. Firms charge premium prices for generic frameworks,
              disappear after the presentation, and leave you to figure out implementation on your own.
              <strong className="text-zeus-gold"> Zeus was built to be the opposite.</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* Interactive Process Steps */}
      <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">Our Process</span>
              <h2 className="section-title mt-4">Four Phases, <span className="text-zeus-gold">Zero Guesswork</span></h2>
              <p className="section-subtitle mx-auto mt-4">
                A proven methodology that has transformed 500+ businesses across 40+ industries.
              </p>
            </div>
          </ScrollReveal>

          {/* Step selector tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {steps.map((step, i) => (
                <button
                  key={step.phase}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                    activeStep === i
                      ? "bg-zeus-gold/15 border-zeus-gold/40 text-zeus-gold"
                      : "bg-white/5 border-white/10 text-zeus-text-secondary hover:text-zeus-white hover:bg-white/8"
                  } border`}
                  style={{ fontSize: "0.95rem" }}
                >
                  <span className="font-bold opacity-60">{step.phase}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-7xl font-bold text-zeus-gold/10 font-serif">{steps[activeStep].phase}</span>
                    <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center">
                      {(() => { const Icon = steps[activeStep].icon; return <Icon size={28} className="text-zeus-gold" />; })()}
                    </div>
                  </div>
                  <h3 className="text-3xl text-zeus-white mb-2">{steps[activeStep].title}</h3>
                  <div className="inline-flex items-center gap-2 text-zeus-gold/70 mb-6" style={{ fontSize: "0.85rem" }}>
                    <Clock size={14} />
                    <span className="font-medium uppercase tracking-wider">{steps[activeStep].duration}</span>
                  </div>
                  <p className="text-zeus-text-secondary leading-relaxed mb-8" style={{ fontSize: "1.1rem" }}>
                    {steps[activeStep].desc}
                  </p>
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-zeus-gold flex-shrink-0" />
                        <span className="text-zeus-white-soft" style={{ fontSize: "0.95rem" }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10">
                    <Image
                      src={steps[activeStep].img}
                      alt={steps[activeStep].title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zeus-navy/60 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Table — Zeus vs Others */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="section-label justify-center">Comparison</span>
              <h2 className="section-title mt-4">Zeus vs <span className="text-zeus-text-secondary">Traditional Consulting</span></h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card overflow-hidden" style={{ borderRadius: "20px" }}>
              {/* Header */}
              <div className="grid grid-cols-3 text-center p-5 border-b border-zeus-gold/10 bg-zeus-gold/5">
                <div className="text-zeus-text-secondary font-medium text-sm uppercase tracking-wider">Feature</div>
                <div className="text-zeus-text-secondary font-medium text-sm uppercase tracking-wider">Others</div>
                <div className="text-zeus-gold font-semibold text-sm uppercase tracking-wider">Zeus</div>
              </div>
              {/* Rows */}
              {comparisonPoints.map((point, i) => (
                <div
                  key={point.label}
                  className={`grid grid-cols-3 text-center items-center py-4 px-5 ${
                    i < comparisonPoints.length - 1 ? "border-b border-white/5" : ""
                  } ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <span className="text-zeus-white-soft text-left text-sm font-medium">{point.label}</span>
                  <span>
                    {point.others ? (
                      <CheckCircle2 size={18} className="text-zeus-muted mx-auto" />
                    ) : (
                      <span className="text-zeus-muted text-lg">✕</span>
                    )}
                  </span>
                  <span>
                    <CheckCircle2 size={18} className="text-zeus-gold mx-auto" />
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* Why Zeus — Differentiators */}
      <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 30%, rgba(212,168,83,0.04) 0%, transparent 70%)" }} />
        <div className="relative z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">Why Choose Zeus</span>
              <h2 className="section-title mt-4">Built Different, <span className="text-zeus-gold">By Design</span></h2>
              <p className="section-subtitle mx-auto mt-4">
                We didn&apos;t build Zeus to be another consulting firm. We built it to be the one you actually need.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <div className="glass-card p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-zeus-gold/10 flex items-center justify-center mb-5">
                    <d.icon size={24} className="text-zeus-gold" />
                  </div>
                  <h3 className="text-zeus-white text-lg mb-3">{d.title}</h3>
                  <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "0.95rem" }}>{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social Proof — Results band */}
      <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-xl)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Modern office" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="relative z-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { target: 500, suffix: "+", label: "Projects Delivered" },
              { target: 40, suffix: "+", label: "Industries Served" },
              { target: 17, suffix: "%", label: "Avg Efficiency Gain" },
              { target: 98, suffix: "%", label: "Client Retention" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="font-bold text-zeus-gold"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                    duration={2.5}
                  />
                  <div className="w-10 h-0.5 bg-zeus-gold/30 mx-auto my-3" />
                  <p className="text-zeus-text-secondary uppercase text-xs tracking-[0.12em]">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-container text-center" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <h2 className="section-title mb-6">
              Stop Paying for <span className="text-zeus-text-secondary">PowerPoints.</span><br />
              Start Investing in <span className="text-zeus-gold">Results.</span>
            </h2>
            <p className="text-zeus-text-secondary mx-auto mb-10" style={{ fontSize: "1.15rem", maxWidth: "560px" }}>
              Schedule a discovery call and see why 500+ businesses chose Zeus to lead their transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">Book a Discovery Call <ArrowRight size={18} /></span>
              </Link>
              <Link href="/about" className="btn-outline" style={{ minHeight: "58px", padding: "1rem 2.75rem" }}>About Zeus</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
