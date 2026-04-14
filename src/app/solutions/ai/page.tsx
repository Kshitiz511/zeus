"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Database, Cloud, Workflow, Lock, BarChart3, Brain, Layers } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const features = [
  { label: "AI Strategy Development" },
  { label: "Machine Learning Integration" },
  { label: "Automation Workflows" },
  { label: "Predictive Analytics" },
  { label: "Natural Language Processing" },
  { label: "AI Ethics & Governance" },
];

const techCapabilities = [
  {
    icon: Brain,
    title: "Custom LLM Deployments",
    desc: "Fine-tuned large language models deployed on private infrastructure — tailored to your industry vocabulary, compliance requirements, and use cases.",
  },
  {
    icon: Database,
    title: "RAG Pipelines",
    desc: "Retrieval-Augmented Generation architectures that ground AI responses in your proprietary data, reducing hallucinations and maximizing accuracy.",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud AI",
    desc: "End-to-end integrations with AWS SageMaker, Azure OpenAI Service, and Google Vertex AI — including MLOps pipelines for continuous model improvement.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    desc: "AI-powered workflow orchestration combining RPA, NLP, and computer vision to automate complex business processes at scale.",
  },
  {
    icon: Lock,
    title: "AI Security & Compliance",
    desc: "Guardrails, prompt injection protection, data residency compliance, and audit trails built into every deployment from day one.",
  },
  {
    icon: Layers,
    title: "Data Infrastructure",
    desc: "Vector databases, embedding pipelines, and real-time data streaming architectures that power production-grade AI systems.",
  },
];

export default function SolutionPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" alt="AI Implementation" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <Link href="/solutions" className="section-label mb-6 hover:text-zeus-gold-light transition-colors cursor-pointer">
              <ArrowRight size={14} className="rotate-180" /> Back to Solutions
            </Link>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              AI Readiness &amp; <span className="text-zeus-gold">Implementation</span>
            </h1>
            <p className="section-subtitle" style={{ fontSize: "1.15rem" }}>
              We don&apos;t just advise on AI — we architect, build, and scale production-grade AI systems tailored to your industry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* What We Deliver */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="section-title mb-8">What We <span className="text-zeus-gold">Deliver</span></h2>
              <StaggerContainer className="space-y-4">
                {features.map((f) => (
                  <StaggerItem key={f.label}>
                    <div className="flex items-start gap-4 p-4 glass-card">
                      <CheckCircle2 size={22} className="text-zeus-gold flex-shrink-0 mt-0.5" />
                      <span className="text-zeus-white-soft" style={{ fontSize: "1.05rem" }}>{f.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-zeus-gold/10 h-full min-h-[400px]">
                <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80" alt="AI Implementation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* Technology Capabilities — NEW SECTION */}
      <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label justify-center">
                <Cpu size={14} className="text-zeus-gold" />
                Technology Capabilities
              </span>
              <h2 className="section-title mt-4">
                Built for <span className="text-zeus-gold">Production</span>, Not Just Proof of Concept
              </h2>
              <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: "720px" }}>
                Zeus brings hands-on engineering expertise to every AI engagement. We architect and deploy the systems that power real business outcomes.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCapabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="glass-card p-8 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center mb-5 group-hover:bg-zeus-gold/20 transition-colors duration-300">
                    <cap.icon size={26} className="text-zeus-gold" />
                  </div>
                  <h3 className="text-zeus-white text-lg mb-3 group-hover:text-zeus-gold transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "0.95rem" }}>
                    {cap.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tech stack badges */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-zeus-muted text-xs uppercase tracking-[0.15em] mb-4">Platforms &amp; Frameworks We Deploy</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "AWS SageMaker", "Azure OpenAI", "Google Vertex AI", "LangChain",
                  "Pinecone", "Weaviate", "Hugging Face", "Kubernetes", "Docker",
                  "Apache Kafka", "Snowflake", "dbt",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-4 py-2 rounded-full border border-zeus-gold/15 bg-zeus-gold/5 text-zeus-text-secondary text-xs tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container text-center" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <h2 className="section-title mb-6">
              Ready to Move Beyond <span className="text-zeus-gold">AI Pilots</span>?
            </h2>
            <p className="text-zeus-text-secondary mb-10" style={{ fontSize: "1.15rem" }}>
              Let&apos;s architect an AI strategy that delivers production-grade results — not just a slide deck.
            </p>
            <Link href="/contact" className="btn-zeus-lg">
              <span className="flex items-center gap-2">Schedule a Technical Consultation <ArrowRight size={18} /></span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
