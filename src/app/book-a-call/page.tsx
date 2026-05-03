"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const expectations = [
  "A working diagnostic of the actual business constraint.",
  "A direct recommendation on whether Zeus is the right next step.",
  "A scoped follow-up within five business days when there is a fit.",
];

const testimonials = [
  {
    quote: "Zeus Consulting goes above and beyond to help my company be successful.",
    name: "Lascelles Brown",
    company: "LIG Logistics",
  },
  {
    quote: "A truly exceptional team and a smart partner across every aspect of business growth.",
    name: "Antwan Foster",
    company: "Client Review",
  },
  {
    quote: "The tools provided can help you become better in your business. An investment worth making.",
    name: "Lynn Watson",
    company: "Client Review",
  },
];

export default function BookACallPage() {
  return (
    <div>
      <section className="page-hero section-muted">
        <div className="z-container">
          <ScrollReveal className="max-w-3xl">
            <span className="eyebrow">BOOK A CALL</span>
            <h1 className="mt-5">Book a 20-minute strategy call.</h1>
            <p className="mt-5 max-w-2xl text-lg">
              This is a working conversation about what you are trying to solve, whether Zeus is the right fit, and what the practical next step should be.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <ScrollReveal>
              <aside className="space-y-5">
                <div className="z-card">
                  <div className="flex items-center gap-3">
                    <Clock size={22} className="text-[var(--zeus-blue)]" />
                    <h2 className="text-2xl">What to expect</h2>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {expectations.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold text-[var(--zeus-slate)]">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--zeus-green)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="z-card bg-[var(--zeus-sky)]">
                  <div className="flex items-center gap-4">
                    <div className="image-panel h-20 w-20 shrink-0 rounded-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                        alt="Senior Zeus consultant"
                        fill
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg">Senior consultant only</h3>
                      <p className="mt-1 text-sm text-[var(--zeus-slate)]">No sales rep handoff.</p>
                    </div>
                  </div>
                </div>
              </aside>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="z-card bg-[var(--zeus-paper)]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--zeus-sky)] text-[var(--zeus-blue)]">
                    <CalendarDays size={24} />
                  </span>
                  <div>
                    <h2 className="text-2xl">Calendar Booking</h2>
                    <p className="text-sm">Select a time that works for you.</p>
                  </div>
                </div>
                <div className="flex min-h-[360px] items-center justify-center rounded-lg border border-[var(--zeus-line)] bg-white p-8 text-center">
                  <div>
                    <CalendarDays size={34} className="mx-auto text-[var(--zeus-blue)]" />
                    <p className="mt-4 font-heading font-bold text-[var(--zeus-ink)]">GHL Calendar Widget</p>
                    <p className="mt-2 text-sm">Embed the production calendar here.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="z-container">
          <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
            <span className="eyebrow justify-center">SOCIAL PROOF</span>
            <h2 className="mt-4">A short call can clarify the right operating move.</h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <figure className="z-card h-full bg-white">
                  <div className="mb-4 flex gap-1" aria-label="Five star review">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={15} className="fill-[var(--zeus-gold-light)] text-[var(--zeus-gold)]" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-[var(--zeus-slate)]">&quot;{testimonial.quote}&quot;</blockquote>
                  <figcaption className="mt-5">
                    <p className="font-heading text-sm font-bold text-[var(--zeus-ink)]">{testimonial.name}</p>
                    <p className="text-xs">{testimonial.company}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-secondary">
              Send a Message Instead
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
