"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { ScrollReveal } from "@/components/Animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="page-hero section-muted">
        <div className="z-container">
          <ScrollReveal className="max-w-3xl">
            <span className="eyebrow">CONTACT</span>
            <h1 className="mt-5">Tell us what you are trying to build, fix, or scale.</h1>
            <p className="mt-5 max-w-2xl text-lg">
              Your message goes to a senior consultant for review. We respond to every inbound within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr] lg:items-start">
            <ScrollReveal>
              {submitted ? (
                <div className="z-card bg-[var(--zeus-mint)]">
                  <CheckCircle2 size={36} className="text-[var(--zeus-green)]" />
                  <h2 className="mt-5 text-3xl">Message received.</h2>
                  <p className="mt-3">We will review the details and respond within one business day.</p>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="z-card grid gap-5 bg-[var(--zeus-paper)] md:grid-cols-2"
                >
                  <div>
                    <label htmlFor="first-name" className="form-label">
                      First name
                    </label>
                    <input id="first-name" type="text" required className="form-input" autoComplete="given-name" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="form-label">
                      Last name
                    </label>
                    <input id="last-name" type="text" required className="form-input" autoComplete="family-name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Work email
                    </label>
                    <input id="email" type="email" required className="form-input" autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="company" className="form-label">
                      Company
                    </label>
                    <input id="company" type="text" className="form-input" autoComplete="organization" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <input id="role" type="text" className="form-input" autoComplete="organization-title" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="form-label">
                      What are you working on?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Describe the business constraint, opportunity, or initiative."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full md:col-span-2">
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <aside className="space-y-5">
                <div className="z-card">
                  <h2 className="text-2xl">Direct contact</h2>
                  <div className="mt-5 space-y-4">
                    <a href="tel:888-448-0748" className="flex items-center gap-3 font-semibold text-[var(--zeus-slate)] transition-colors hover:text-[var(--zeus-blue)]">
                      <Phone size={18} className="text-[var(--zeus-blue)]" />
                      888-448-0748
                    </a>
                    <a
                      href="mailto:info@zeusconsultingservices.com"
                      className="flex items-center gap-3 font-semibold text-[var(--zeus-slate)] transition-colors hover:text-[var(--zeus-blue)]"
                    >
                      <Mail size={18} className="text-[var(--zeus-blue)]" />
                      info@zeusconsultingservices.com
                    </a>
                    <p className="flex items-start gap-3 font-semibold text-[var(--zeus-slate)]">
                      <MapPin size={18} className="mt-1 text-[var(--zeus-blue)]" />
                      <span>
                        515 North Flagler Dr.
                        <br />
                        West Palm Beach, FL 33401
                      </span>
                    </p>
                  </div>
                </div>

                <div className="z-card bg-[var(--zeus-sky)]">
                  <h3 className="text-xl">Prefer a working conversation?</h3>
                  <p className="mt-3 text-sm text-[var(--zeus-slate)]">
                    Book a 20-minute strategy call and talk directly with a senior consultant.
                  </p>
                  <Link href="/book-a-call?source=contact_card" className="btn-primary mt-5 w-full">
                    Book a Call
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
