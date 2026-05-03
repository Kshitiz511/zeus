"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

type Faq = {
  q: string;
  a: string;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCtaSource: string;
  secondaryHref: string;
  secondaryLabel: string;
  constraintTitle: string;
  constraints: string[];
  deliverables: { title: string; desc: string }[];
  methodTitle: string;
  method: { step: string; title: string; desc: string }[];
  proofTitle: string;
  proof: { metric: string; label: string }[];
  faqs: Faq[];
};

export function ServiceDetailPage({
  eyebrow,
  title,
  intro,
  primaryCtaSource,
  secondaryHref,
  secondaryLabel,
  constraintTitle,
  constraints,
  deliverables,
  methodTitle,
  method,
  proofTitle,
  proof,
  faqs,
}: ServiceDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="page-hero section-muted">
        <div className="z-container">
          <ScrollReveal className="max-w-4xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/book-a-call?source=${primaryCtaSource}`} className="btn-primary">
                Book a Call
                <ArrowRight size={16} />
              </Link>
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal>
              <span className="eyebrow">THE CONSTRAINT</span>
              <h2 className="mt-4">{constraintTitle}</h2>
            </ScrollReveal>
            <StaggerContainer className="grid gap-4">
              {constraints.map((constraint) => (
                <StaggerItem key={constraint}>
                  <div className="z-card flex gap-4">
                    <ShieldCheck size={22} className="mt-1 shrink-0 text-[var(--zeus-blue)]" />
                    <p className="font-semibold text-[var(--zeus-slate)]">{constraint}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section id="deliverables" className="section section-muted">
        <div className="z-container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow justify-center">WHAT WE DELIVER</span>
            <h2 className="mt-4">Practical outputs that change operating behavior.</h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <StaggerItem key={item.title}>
                <div className="z-card h-full bg-white">
                  <CheckCircle2 size={24} className="text-[var(--zeus-green)]" />
                  <h3 className="mt-4">{item.title}</h3>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ScrollReveal>
              <span className="eyebrow">METHOD</span>
              <h2 className="mt-4">{methodTitle}</h2>
            </ScrollReveal>
            <StaggerContainer className="grid gap-4 md:grid-cols-2">
              {method.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="h-full border-l-2 border-[var(--zeus-blue)] bg-[var(--zeus-paper)] p-5">
                    <p className="font-heading text-sm font-bold text-[var(--zeus-blue)]">{item.step}</p>
                    <h3 className="mt-4 text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="z-container">
          <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
            <span className="eyebrow justify-center">PROOF POINTS</span>
            <h2 className="mt-4">{proofTitle}</h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {proof.map((item) => (
              <StaggerItem key={item.label}>
                <div className="metric-tile z-card h-full bg-white text-center">
                  <p className="number">{item.metric}</p>
                  <p className="label">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container max-w-[860px]">
          <ScrollReveal className="mb-10 text-center">
            <span className="eyebrow justify-center">FAQ</span>
            <h2 className="mt-4">Questions leaders ask before scoping.</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="z-card p-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-heading font-bold text-[var(--zeus-ink)]">{faq.q}</span>
                  <ChevronDown size={19} className={`shrink-0 text-[var(--zeus-blue)] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="px-5 pb-5 text-sm text-[var(--zeus-slate)]">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="z-container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">NEXT STEP</span>
            <h2 className="mt-4">Pressure-test the fit before you scope the work.</h2>
            <Link href={`/book-a-call?source=${primaryCtaSource}_cta`} className="btn-gold mt-8">
              Book a Strategy Call
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
