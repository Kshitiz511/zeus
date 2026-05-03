"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, CheckCircle2, Target, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const pillars = [
  {
    icon: Users,
    title: "Training & Development",
    href: "/services/training-development",
    overview: "Build leaders who can execute the strategy you are paying for.",
    deliverables: ["Leadership academies", "Executive coaching", "Custom curriculum", "Strategic offsites"],
    model: "6-12 month cohorts or coaching retainers",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    href: "/services/strategic-planning",
    overview: "Turn planning into an operating cadence with KPIs, owners, and review rhythm.",
    deliverables: ["Growth thesis", "KPI architecture", "Operating cadence", "Process optimization"],
    model: "2-day offsites through 16-week implementation sprints",
  },
  {
    icon: BrainCircuit,
    title: "AI Readiness & Implementation",
    href: "/services/ai-readiness",
    overview: "Move from AI curiosity to AI capability with roadmaps, pilots, and governance.",
    deliverables: ["Readiness assessment", "AI roadmap", "Pilot deployment", "Governance framework"],
    model: "3-4 week diagnostic through 24-week implementation",
  },
  {
    icon: BriefcaseBusiness,
    title: "Fractional CXO",
    href: "/services/fractional-cxo",
    overview: "Embed senior operating leadership where the business needs accountable ownership.",
    deliverables: ["Fractional COO", "Chief Strategy Officer", "Chief AI Officer", "Transformation lead"],
    model: "1-3 days per week for 6+ months",
  },
];

const engagementModels = [
  {
    title: "Project",
    desc: "Fixed scope, fixed outcome, and clear implementation milestones.",
    best: "A defined initiative with a clear finish line.",
  },
  {
    title: "Retainer",
    desc: "Ongoing advisory plus quarterly operating intensives.",
    best: "Leadership teams that need rhythm and accountability.",
  },
  {
    title: "Fractional",
    desc: "Embedded executive ownership for a role the business cannot yet hire full time.",
    best: "Growth, transformation, and operating capacity gaps.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--zeus-navy)] py-[var(--space-xl)]">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85"
          alt="Consulting team mapping business priorities"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.26]"
        />
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.66)]" aria-hidden="true" />
        <div className="z-container relative z-10">
          <ScrollReveal className="max-w-4xl">
            <span className="eyebrow text-[var(--zeus-gold-light)]">SERVICES</span>
            <h1 className="mt-5 text-white">One ecosystem for strategy, leadership, AI, and operating capacity.</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Each practice can stand alone. Together they create the business sustainability system executive teams need when growth depends on execution.
            </p>
            <Link href="/book-a-call?source=services_hero" className="btn-gold mt-8">
              Book a Strategy Call
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="z-container">
          <StaggerContainer className="grid gap-5">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <Link href={pillar.href} className="card-interactive z-card grid gap-8 lg:grid-cols-[0.75fr_1.1fr_0.75fr] lg:items-center">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--zeus-sky)] text-[var(--zeus-blue)]">
                      <pillar.icon size={24} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h2 className="text-2xl">{pillar.title}</h2>
                      <p className="mt-2 text-sm">{pillar.overview}</p>
                    </div>
                  </div>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {pillar.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[var(--zeus-slate)]">
                        <CheckCircle2 size={16} className="text-[var(--zeus-green)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:text-right">
                    <p className="text-sm font-bold text-[var(--zeus-blue)]">{pillar.model}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--zeus-blue)]">
                      Explore
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-muted">
        <div className="z-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal>
              <span className="eyebrow">WHY INTEGRATION WINS</span>
              <h2 className="mt-4">The practice areas are separate only on paper.</h2>
              <p className="mt-5 text-lg">
                Strategy without leadership development stalls. AI without governance creates risk. Fractional leadership without operating cadence becomes another meeting. Zeus connects the pieces before they become separate workstreams.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid gap-4 md:grid-cols-3">
                {engagementModels.map((model) => (
                  <div key={model.title} className="z-card h-full">
                    <h3>{model.title}</h3>
                    <p className="mt-3 text-sm">{model.desc}</p>
                    <p className="mt-5 text-sm font-bold text-[var(--zeus-slate)]">Best for: {model.best}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="z-container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">NEXT STEP</span>
            <h2 className="mt-4">Start with the business constraint, then choose the service.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg">
              A 20-minute call is enough to identify whether the next move is strategy, leadership, AI, fractional support, or no consulting at all.
            </p>
            <Link href="/book-a-call?source=services_cta" className="btn-gold mt-8">
              Book a Strategy Call
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
