"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BriefcaseBusiness, CheckCircle2, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const credentials = [
  "State of Florida Approved Consulting Vendor",
  "20+ years executive operating experience",
  "$1B+ in operating decisions advised",
  "100% senior-led delivery model",
];

const values = [
  {
    title: "Implementation over advice",
    desc: "A strategy is not finished until it is connected to owners, cadence, and measurable operating behavior.",
  },
  {
    title: "Integration over isolation",
    desc: "Leadership, AI, and strategy are designed as one system so the work compounds instead of fragmenting.",
  },
  {
    title: "Senior-led by default",
    desc: "Clients work with operators who have owned decisions inside real businesses, not junior teams recycling slides.",
  },
  {
    title: "Long horizon decisions",
    desc: "We optimize for durable growth, governance, and resilience instead of short-term activity that looks busy.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--zeus-navy)] py-14 sm:py-[var(--space-xl)]">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85"
          alt="Senior consultant in an executive setting"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.66)]" aria-hidden="true" />
        <div className="z-container relative z-10">
          <ScrollReveal className="max-w-4xl">
            <span className="eyebrow text-[var(--zeus-gold-light)]">ABOUT ZEUS</span>
            <h1 className="mt-4 !text-white sm:mt-5">Built by operators for executive teams that need the work to land.</h1>
            <p className="mt-5 max-w-2xl text-base !text-white sm:mt-6 sm:text-lg">
              Zeus Consulting Services was created for leaders who need more than advice. We build the operating conditions that make strategy, leadership, and AI executable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <ScrollReveal>
              <span className="eyebrow">OUR ORIGIN</span>
              <h2 className="mt-4">We have sat in the seat, owned the P&L, and led the change.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-base sm:space-y-5 sm:text-lg">
                <p className="text-[var(--zeus-slate)]">
                  Zeus was built by leaders who spent their careers inside the operating companies they now advise. That experience changes the work. When we build a strategy, we know where execution will break. When we develop leaders, we know what the role actually demands.
                </p>
                <p className="text-[var(--zeus-slate)]">
                  When we implement AI, we connect governance, adoption, and measurable business outcomes from the start. The result is consulting that behaves like an operating system, not a temporary workshop.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="z-container">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <ScrollReveal>
              <span className="eyebrow">CREDENTIALS</span>
              <h2 className="mt-4 max-w-3xl">Trust signals that matter before the work begins.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/results" className="btn-secondary">
                See Results
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => (
              <StaggerItem key={credential}>
                <div className="z-card h-full">
                  {index === 0 ? (
                    <ShieldCheck size={26} className="text-[var(--zeus-green)]" />
                  ) : index === 1 ? (
                    <BriefcaseBusiness size={26} className="text-[var(--zeus-blue)]" />
                  ) : index === 2 ? (
                    <Award size={26} className="text-[var(--zeus-gold)]" />
                  ) : (
                    <CheckCircle2 size={26} className="text-[var(--zeus-green)]" />
                  )}
                  <p className="mt-4 font-heading text-base font-bold text-[var(--zeus-ink)] sm:mt-5 sm:text-lg">{credential}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow justify-center">OPERATING BELIEFS</span>
            <h2 className="mt-4">The principles behind every engagement.</h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="z-card h-full">
                  <h3>{value.title}</h3>
                  <p className="mt-3">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-dark">
        <div className="z-container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">WORK WITH ZEUS</span>
            <h2 className="mt-4">Bring operator judgment into the room before the next major initiative.</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8">
              <Link href="/book-a-call?source=about" className="btn-gold">
                Book a Call
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary btn-on-dark">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
