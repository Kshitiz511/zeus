"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Shield, FileText, Users, BarChart3, Building2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, Counter } from "@/components/Animations";

const capabilities = [
  "Strategic Planning & Policy Advisory",
  "Procurement & Contract Compliance",
  "Operational Efficiency & Cost Reduction",
  "Technology Modernization & Digital Transformation",
  "Cybersecurity & Risk Management",
  "Workforce Development & Training Programs",
  "Data Analytics & Performance Reporting",
  "Grant & Funding Strategy",
];

const trustPoints = [
  {
    icon: Award,
    title: "State of Florida Approved Vendor",
    desc: "Zeus is an officially approved consulting vendor for the State of Florida, meeting rigorous procurement standards for public-sector engagements.",
  },
  {
    icon: Shield,
    title: "Compliance-First Approach",
    desc: "Every engagement is built around regulatory compliance, audit readiness, and transparent reporting — the non-negotiables of government work.",
  },
  {
    icon: FileText,
    title: "Procurement-Ready Documentation",
    desc: "Our team delivers RFP-ready proposals, SOWs, and compliance documentation that meet federal, state, and local requirements.",
  },
  {
    icon: Users,
    title: "Cross-Sector Expertise",
    desc: "We bring private-sector efficiency and innovation to public-sector challenges, bridging the gap between enterprise best practices and government operations.",
  },
];

export default function GovernmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&q=80"
            alt="Government building"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <Link
              href="/industries"
              className="section-label mb-6 hover:text-zeus-gold-light transition-colors cursor-pointer"
            >
              <ArrowRight size={14} className="rotate-180" /> Back to Industries
            </Link>
            <h1
              style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
              className="text-zeus-white mb-6"
            >
              Government & <span className="text-zeus-gold">Public Sector</span>
            </h1>
            <p className="section-subtitle" style={{ fontSize: "1.15rem" }}>
              State-approved consulting that brings Fortune 500-level strategy, operational
              efficiency, and technology modernization to public-sector agencies and government
              contractors.
            </p>

            {/* Trust Badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zeus-gold/25 bg-zeus-gold/10 backdrop-blur-sm">
              <Award size={22} className="text-zeus-gold" />
              <span className="text-zeus-white text-sm font-medium tracking-wide">
                State of Florida Approved Consulting Vendor
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* Impact Stats */}
      <section className="py-16 bg-zeus-navy">
        <div className="z-container">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { target: 17, suffix: "%", label: "Avg Efficiency Gain" },
                { target: 98, suffix: "%", label: "Compliance Rate" },
                { target: 40, suffix: "+", label: "Government Engagements" },
                { target: 3.2, suffix: "x", label: "Avg Cost Savings" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="font-bold text-zeus-gold"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  />
                  <p className="text-zeus-text-secondary uppercase text-xs tracking-[0.12em] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Zeus for Government */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">Why Zeus</span>
              <h2 className="section-title mt-4">
                Trusted by <span className="text-zeus-gold">Government</span>
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                We combine private-sector innovation with public-sector accountability to deliver
                consulting that meets the highest standards of compliance and performance.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {trustPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="glass-card p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center mb-5">
                    <point.icon size={26} className="text-zeus-gold" />
                  </div>
                  <h3 className="text-zeus-white text-xl mb-3">{point.title}</h3>
                  <p
                    className="text-zeus-text-secondary leading-relaxed"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {point.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="gold-line" />

      {/* Capabilities */}
      <section
        className="relative bg-zeus-navy"
        style={{ paddingBlock: "var(--space-section)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="section-label mb-4">Our Capabilities</span>
              <h2 className="section-title mb-6">
                How We Serve the{" "}
                <span className="text-zeus-gold">Public Sector</span>
              </h2>
              <p
                className="text-zeus-text-secondary leading-relaxed mb-8"
                style={{ fontSize: "1.05rem" }}
              >
                From strategic advisory to technology modernization, Zeus delivers
                end-to-end consulting that helps government agencies operate more
                efficiently, serve constituents better, and modernize their operations.
              </p>
              <StaggerContainer className="space-y-5">
                {capabilities.map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-center gap-4 px-6 py-5 glass-card">
                      <CheckCircle2
                        size={22}
                        className="text-zeus-gold flex-shrink-0 mt-0.5"
                      />
                      <span
                        className="text-zeus-white-soft"
                        style={{ fontSize: "1.05rem" }}
                      >
                        {f}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10 h-[550px]">
                <Image
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&q=80"
                  alt="Government building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight/50 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Private + Public Sector Bridge */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label justify-center mb-4">Enterprise Meets Government</span>
              <h2 className="section-title mb-6">
                Bridging <span className="text-zeus-gold">Private &amp; Public</span> Sector Excellence
              </h2>
              <p
                className="text-zeus-text-secondary leading-relaxed mx-auto mb-8"
                style={{ fontSize: "1.1rem", maxWidth: "700px" }}
              >
                Zeus&apos;s experience spans Fortune 500 enterprises and public agencies alike.
                We bring the speed, innovation, and results-driven mindset of the private sector
                to government engagements — while maintaining the compliance rigor, transparency,
                and accountability that public-sector work demands.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: BarChart3, label: "Data-Driven Decision Making" },
                  { icon: Shield, label: "Audit-Ready Compliance" },
                  { icon: Building2, label: "Cross-Sector Best Practices" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card p-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zeus-gold/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon size={24} className="text-zeus-gold" />
                    </div>
                    <p className="text-zeus-white font-medium text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <div className="gold-line" />
      <section
        className="relative overflow-hidden"
        style={{ paddingBlock: "var(--space-section)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="relative z-container text-center"
          style={{ maxWidth: "800px" }}
        >
          <ScrollReveal>
            <h2 className="section-title mb-6">
              Ready to Partner With a{" "}
              <span className="text-zeus-gold">State-Approved</span> Consulting Firm?
            </h2>
            <p
              className="text-zeus-text-secondary mb-10"
              style={{ fontSize: "1.15rem" }}
            >
              Let&apos;s discuss how Zeus Consulting can support your agency&apos;s
              mission with proven strategy and measurable results.
            </p>
            <Link href="/contact" className="btn-zeus-lg">
              <span className="flex items-center gap-2">
                Schedule a Consultation <ArrowRight size={18} />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
