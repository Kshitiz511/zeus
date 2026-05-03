"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const metrics = [
  { number: "500%", label: "Top revenue increase" },
  { number: "60%", label: "Average CEO thinking test gain" },
  { number: "5.0", label: "Average client rating" },
  { number: "100%", label: "Implementation rate among graduates" },
];

const caseStudies = [
  {
    business: "LIG Logistics",
    industry: "Logistics and Trucking",
    metric: "500% revenue increase",
    detail: "+3 employees hired with systems implementation.",
    cohort: "Optimize U 2023",
  },
  {
    business: "ShopHowell",
    industry: "E-Commerce and Amazon",
    metric: "480% revenue scale-up",
    detail: "Revenue grew from $25K to $145K+ with 60% team expansion.",
    cohort: "Optimize U 2022",
  },
  {
    business: "Fix My Flyer",
    industry: "Marketing and Print",
    metric: "109% Q1 sales growth",
    detail: "Bookkeeping implementation and streamlined workflows.",
    cohort: "Optimize U 2024",
  },
  {
    business: "Optimum Legal Services",
    industry: "Law Firm",
    metric: "40% revenue increase",
    detail: "+2 staff hired with new operational systems.",
    cohort: "Optimize U 2023",
  },
  {
    business: "Dynamic Duo PT+",
    industry: "Physical Therapy",
    metric: "~30% revenue growth",
    detail: "+1 employee and new specialty service launched.",
    cohort: "Optimize U 2022",
  },
  {
    business: "Sitellight Outdoor Lighting",
    industry: "Residential Services",
    metric: "20% revenue growth",
    detail: "Sales, marketing, scaling, AI, finance, and hiring implementation.",
    cohort: "Optimize U 2023",
  },
];

const testimonials = [
  {
    quote: "Zeus Consulting goes above and beyond to help my company be successful. I have seen a 500% increase in business.",
    name: "Lascelles Brown",
    company: "LIG Logistics",
  },
  {
    quote: "Since Optimize U our revenue grew from approximately $25,000 to over $145,000 the following year.",
    name: "J. Howell",
    company: "ShopHowell",
  },
  {
    quote: "The Optimize U course has been a game-changer for our business. The strategies and tools applied directly to our day-to-day operations.",
    name: "Krissy Robbs",
    company: "Fix My Flyer LLC",
  },
  {
    quote: "Zeus Consulting is a top-tier partner for any business leader looking to elevate, optimize, and scale.",
    name: "Antwan Foster",
    company: "Client Review",
  },
];

export default function ResultsPage() {
  return (
    <div>
      <section className="page-hero section-muted">
        <div className="z-container">
          <ScrollReveal className="max-w-4xl">
            <span className="eyebrow">RESULTS</span>
            <h1 className="mt-5">Documented outcomes from named businesses.</h1>
            <p className="mt-5 max-w-2xl text-lg">
              The proof is business change: revenue movement, implementation, staff expansion, operating discipline, and client-reported transformation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light border-y border-[var(--zeus-line)] py-10">
        <div className="z-container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-tile">
                <p className="number">{metric.number}</p>
                <p className="label">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="fine-print mt-6 text-center">
            Sources: Optimize U Graduate Survey, Zeus Boss Kids Roosevelt Study, Google Reviews, and client-reported outcomes.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="z-container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <ScrollReveal>
              <span className="eyebrow">CASE RESULTS</span>
              <h2 className="mt-4 max-w-3xl">A portfolio of measurable change.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/book-a-call?source=results_top" className="btn-secondary">
                Discuss Your Situation
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <StaggerItem key={study.business}>
                <div className="z-card h-full bg-white">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[var(--zeus-muted)]">{study.industry}</p>
                      <h3 className="mt-2 text-xl">{study.business}</h3>
                    </div>
                    <BarChart3 size={22} className="shrink-0 text-[var(--zeus-blue)]" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-[var(--zeus-blue)]">{study.metric}</p>
                  <p className="mt-3 text-sm text-[var(--zeus-slate)]">{study.detail}</p>
                  <p className="mt-5 text-xs font-bold text-[var(--zeus-muted)]">{study.cohort}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow justify-center">CLIENT VOICES</span>
            <h2 className="mt-4">What clients say after implementation starts working.</h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <figure className="z-card h-full">
                  <div className="mb-4 flex gap-1" aria-label="Five star review">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={16} className="fill-[var(--zeus-gold-light)] text-[var(--zeus-gold)]" />
                    ))}
                  </div>
                  <blockquote className="text-[var(--zeus-slate)]">&quot;{testimonial.quote}&quot;</blockquote>
                  <figcaption className="mt-5 border-t border-[var(--zeus-line)] pt-4">
                    <p className="font-heading font-bold text-[var(--zeus-ink)]">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.company}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-dark">
        <div className="z-container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">YOUR RESULT</span>
            <h2 className="mt-4">Identify what result is realistic before you scope the work.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg">
              We will pressure-test the constraint, the outcome, and the conditions required to make the work measurable.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book-a-call?source=results_cta" className="btn-gold">
                Book a Strategy Call
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
