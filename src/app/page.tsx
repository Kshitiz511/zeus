"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Zap, Shield, TrendingUp, Users, Brain, BarChart3,
  ChevronDown, CheckCircle2, Sparkles, Building2, Target, Award,
  Lightbulb, Cpu, GraduationCap, Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ScrollReveal, Parallax, StaggerContainer, StaggerItem, Counter,
} from "@/components/Animations";
import { useState } from "react";

/* ═══ HERO ═══ */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern city skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zeus-midnight/95 via-zeus-midnight/80 to-zeus-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zeus-midnight via-transparent to-zeus-midnight/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-zeus-gold/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative z-10 z-container" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-label mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-zeus-gold animate-pulse" />
              <span>Strategic Consulting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-zeus-white"
              style={{ fontSize: "clamp(3rem, 6vw + 1rem, 5.5rem)", lineHeight: 1.05 }}
            >
              Guide Your Next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zeus-gold to-zeus-gold-light">
                Big Move
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-zeus-text-secondary max-w-xl leading-relaxed mt-8 mb-10"
              style={{ fontSize: "clamp(1.1rem, 1rem + 0.3vw, 1.35rem)" }}
            >
              Forward-thinking, data-driven strategies and expert guidance to help 
              businesses scale, innovate, and achieve sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-zeus-lg">
                <span className="flex items-center gap-2">
                  Work With Us <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="/approach" className="btn-outline" style={{ minHeight: "58px", padding: "1rem 2.75rem" }}>
                Our Approach
              </Link>
            </motion.div>
          </div>

          {/* Right — floating glass cards */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <Parallax speed={0.5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative"
              >
                <div className="space-y-4">
                  {[
                    { label: "Efficiency Increase", value: "17%", icon: TrendingUp },
                    { label: "Client Satisfaction", value: "98%", icon: CheckCircle2 },
                    { label: "Strategic Projects", value: "500+", icon: BarChart3 },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                      className="glass-card flex items-center gap-5 p-5"
                    >
                      <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center flex-shrink-0">
                        <stat.icon size={24} className="text-zeus-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-zeus-white text-2xl">{stat.value}</p>
                        <p className="text-zeus-text-secondary uppercase text-xs tracking-[0.1em]">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-zeus-gold/5 rounded-full blur-[120px]" />
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-2 text-zeus-muted">
          <span className="text-[0.7rem] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══ TRUST BAR ═══ */
function TrustBar() {
  const stats = [
    { number: "17%", label: "Avg Efficiency Increase" },
    { number: "100+", label: "Businesses Served" },
    { number: "50+", label: "Industry Sectors" },
    { number: "24/7", label: "Strategic Support" },
  ];
  return (
    <section className="py-16">
      <div className="z-container">
        <ScrollReveal>
          <div className="glass-card-static grid grid-cols-2 md:grid-cols-4 p-6 md:p-8">
            {stats.map((item, i) => (
              <div key={item.label} className={`text-center py-4 ${i < stats.length - 1 ? "md:border-r md:border-zeus-gold/10" : ""}`}>
                <p className="font-bold text-zeus-gold" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>{item.number}</p>
                <p className="text-zeus-text-secondary uppercase text-xs tracking-[0.1em] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══ ABOUT PREVIEW — McKinsey style ═══ */
function AboutPreview() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="z-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="section-label">The Zeus Way</span>
              <h2 className="section-title mt-4 mb-6">
                Transforming Businesses With <span className="text-zeus-gold">Expert Strategy</span>
              </h2>
              <p className="text-zeus-text-secondary leading-relaxed mb-6" style={{ fontSize: "1.1rem" }}>
                Zeus Consulting Services is a forward-thinking consultancy that partners with businesses 
                to unlock their full potential. We bring together specialists across key disciplines to 
                deliver transformative, Fortune 500-level strategies to organizations of every size.
              </p>
              <p className="text-zeus-text-secondary leading-relaxed mb-8" style={{ fontSize: "1.1rem" }}>
                By leveraging in-depth industry analysis, operational assessments, and emerging technologies, 
                Zeus constructs frameworks that foster efficiency, adaptability, and long-term growth.
              </p>
              <Link href="/about" className="btn-outline">
                <span className="flex items-center gap-2">Learn More About Zeus <ArrowRight size={16} /></span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-zeus-gold/10">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Business team collaborating"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                />
              </div>
              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-[280px]">
                <p className="text-zeus-gold font-bold text-3xl mb-1">500+</p>
                <p className="text-zeus-white text-sm font-medium">Projects delivered across 40+ industries</p>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-zeus-gold/10 rounded-full blur-[60px]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ SERVICES — Bento grid ═══ */
const services = [
  { icon: Zap, title: "Marketing & Branding", desc: "Brand positioning, growth campaigns, and digital marketing strategy that drives measurable results.", href: "/services/marketing" },
  { icon: BarChart3, title: "Finance", desc: "Financial modeling, capital strategy, and funding guidance to fuel sustainable business growth.", href: "/services/finance" },
  { icon: Shield, title: "Tax Strategy", desc: "Optimized planning and compliance strategies to maximize your financial assets.", href: "/services/tax" },
  { icon: Users, title: "Human Resources", desc: "Talent acquisition, culture design, and team retention programs that build winning teams.", href: "/services/hr" },
  { icon: Shield, title: "Cybersecurity", desc: "Comprehensive security assessments, compliance frameworks, and advanced threat protection.", href: "/services/cybersecurity" },
  { icon: Brain, title: "Business Development", desc: "Market expansion, revenue diversification, and strategic partnership playbooks.", href: "/services/business-dev" },
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(212,168,83,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label justify-center">Comprehensive Expertise</span>
            <h2 className="section-title mt-4">Key Business Disciplines</h2>
            <p className="section-subtitle mx-auto mt-4">
              Bringing together specialists across key business disciplines, offering a centralized approach to complex challenges.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block h-full cursor-pointer">
                <div className="glass-card h-full group p-8">
                  <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center mb-5 group-hover:bg-zeus-gold/20 transition-colors duration-300">
                    <service.icon size={26} className="text-zeus-gold" />
                  </div>
                  <h3 className="text-zeus-white text-xl group-hover:text-zeus-gold transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zeus-text-secondary leading-relaxed mb-5" style={{ fontSize: "0.95rem" }}>
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-zeus-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontSize: "0.9rem" }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══ SOLUTIONS — with images ═══ */
const solutions = [
  { title: "Business Startup", desc: "Comprehensive planning and proposal development to establish a clear, strategic foundation for new ventures.", href: "/solutions/startup", tag: "Launch", icon: Rocket, img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80" },
  { title: "Training & Development", desc: "Expert-led cohort programs that promote collaboration, skill development, and industry-specific learning.", href: "/solutions/training", tag: "Grow", icon: GraduationCap, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
  { title: "Business Optimization", desc: "Advanced analytical models and methodologies designed to enhance efficiency and maximize profitability.", href: "/solutions/optimization", tag: "Optimize", icon: TrendingUp, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { title: "AI Implementation", desc: "Custom AI strategies tailored to industry-specific needs, integrating automation and predictive analytics.", href: "/solutions/ai", tag: "Innovate", icon: Cpu, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" },
];

function Solutions() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="relative z-container">
        <ScrollReveal>
          <div className="mb-16">
            <span className="section-label">Our Solutions</span>
            <h2 className="section-title mt-4">A Hands-On Consulting Model</h2>
            <p className="section-subtitle mt-4">Solutions tailored to the unique needs of each business.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {solutions.map((sol) => (
            <StaggerItem key={sol.title}>
              <Link href={sol.href} className="block group h-full cursor-pointer">
                <div className="glass-card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={sol.img}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zeus-navy/90 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block font-semibold text-zeus-gold border border-zeus-gold/20 bg-zeus-midnight/60 backdrop-blur-sm rounded-full text-xs px-3 py-1 tracking-[0.12em] uppercase">{sol.tag}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-zeus-white text-xl group-hover:text-zeus-gold transition-colors duration-300 mb-3">{sol.title}</h3>
                    <p className="text-zeus-text-secondary leading-relaxed mb-4" style={{ fontSize: "0.95rem" }}>{sol.desc}</p>
                    <div className="flex items-center gap-2 text-zeus-gold font-medium" style={{ fontSize: "0.9rem" }}>
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══ RESULTS ═══ */
function Results() {
  const results = [
    { target: 17, suffix: "%", label: "Avg Efficiency Gain" },
    { target: 500, suffix: "+", label: "Projects Delivered" },
    { target: 98, suffix: "%", label: "Client Retention" },
    { target: 40, suffix: "+", label: "Industries Served" },
  ];

  return (
    <section id="results" className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zeus-navy/90" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-label justify-center">Our Results</span>
            <h2 className="section-title mt-4">Measurable Impact</h2>
            <p className="section-subtitle mx-auto mt-4">
              An average increase of 17% in efficiency, profitability, and overall business performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {results.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="font-bold text-zeus-gold"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
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
  );
}

/* ═══ ACCOLADES ═══ */
const accolades = [
  { src: "/accolades/accolade-1.png", alt: "Zeus Consulting Accolade 1" },
  { src: "/accolades/accolade-2.png", alt: "Zeus Consulting Accolade 2" },
  { src: "/accolades/accolade-3.png", alt: "Zeus Consulting Accolade 3" },
  { src: "/accolades/accolade-4.png", alt: "Zeus Consulting Accolade 4" },
];

function Accolades() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-xl)" }}>
      <div className="z-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label justify-center">Recognition</span>
            <h2 className="section-title mt-4">Our Accolades</h2>
            <p className="section-subtitle mx-auto mt-4">
              Trusted and recognized for delivering excellence in consulting and business strategy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {accolades.map((item, i) => (
              <div
                key={i}
                className="relative group transition-all duration-500 hover:scale-105"
                style={{ maxWidth: "200px" }}
              >
                <div className="p-5 rounded-2xl bg-white/5 border border-zeus-gold/10 group-hover:border-zeus-gold/25 group-hover:bg-white/8 transition-all duration-500">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={100}
                    className="object-contain w-full h-auto opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══ WHY ZEUS ═══ */
function WhyZeus() {
  const points = [
    { icon: Target, title: "Precision", desc: "Every strategy is tailored with meticulous attention to your unique challenges and objectives." },
    { icon: Users, title: "Partnership", desc: "We work alongside you—not above you. Your success is our mission, every step of the way." },
    { icon: Award, title: "Excellence", desc: "Fortune 500-level expertise accessible to businesses of every size and stage." },
    { icon: Lightbulb, title: "Innovation", desc: "From AI to analytics, we leverage cutting-edge tools to drive measurable results." },
  ];

  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="z-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-zeus-gold/10">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Team strategy session"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-zeus-gold/10 rounded-full blur-[80px]" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <span className="section-label">Why Zeus</span>
              <h2 className="section-title mt-4 mb-8">The Zeus Difference</h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {points.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zeus-gold/15 transition-colors">
                      <point.icon size={24} className="text-zeus-gold" />
                    </div>
                    <div>
                      <h3 className="text-zeus-white text-lg mb-1.5">{point.title}</h3>
                      <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "0.95rem" }}>{point.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
const faqs = [
  { q: "How can Zeus help my business grow?", a: "We provide strategic, data-driven guidance across marketing, finance, operations, and technology — tailoring solutions to your unique challenges and goals." },
  { q: "Is Zeus a good fit for my industry?", a: "Zeus works across 40+ industries. Our specialists bring cross-sector expertise with industry-specific insight to deliver targeted results." },
  { q: "What kind of support does Zeus provide?", a: "From strategy through implementation — business planning, financial modeling, AI integration, team development, and continuous optimization." },
  { q: "How does Zeus approach AI for businesses?", a: "We create custom AI strategies integrating automation, predictive analytics, and innovative technology for measurable ROI." },
  { q: "Does Zeus help secure funding?", a: "Yes — capital strategy, investor pitch development, financial modeling, and guidance through funding rounds are core services." },
  { q: "How do I get started?", a: "Request an appointment through our contact page. We'll schedule a discovery call tailored to your needs." },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-zeus-navy" style={{ paddingBlock: "var(--space-section)" }}>
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-container" style={{ maxWidth: "900px" }}>
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label justify-center">FAQ</span>
            <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.04}>
              <div className="glass-card overflow-hidden" style={{ borderRadius: "16px" }}>
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                  style={{ minHeight: "68px", padding: "1.25rem 1.75rem" }}
                >
                  <span className="text-zeus-white font-medium pr-6" style={{ fontSize: "1.05rem" }}>{faq.q}</span>
                  <div className="w-9 h-9 rounded-full bg-zeus-gold/10 flex items-center justify-center flex-shrink-0">
                    <ChevronDown size={16} className={`text-zeus-gold transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIdx === idx ? "auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "1rem", padding: "0 1.75rem 1.5rem 1.75rem" }}>{faq.a}</div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: "var(--space-section)" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="Office meeting"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-zeus-midnight/80" />
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-container text-center" style={{ maxWidth: "800px" }}>
        <ScrollReveal>
          <h2 className="text-zeus-white mb-6" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            Empowering Organizations to Achieve{" "}
            <span className="text-zeus-gold">Fortune 500-Level Success</span>
          </h2>
          <p className="text-zeus-text-secondary mx-auto mb-10" style={{ fontSize: "1.15rem", maxWidth: "560px" }}>
            Ready to transform your business? Let&apos;s start a conversation about your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-zeus-lg">
              <span className="flex items-center gap-2">Request an Appointment <ArrowRight size={18} /></span>
            </Link>
            <Link href="/about" className="btn-outline" style={{ minHeight: "58px", padding: "1rem 2.75rem" }}>
              Learn About Zeus
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══ PAGE EXPORT ═══ */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <div className="gold-line" />
      <AboutPreview />
      <Services />
      <Solutions />
      <div className="gold-line" />
      <Results />
      <Accolades />
      <div className="gold-line" />
      <WhyZeus />
      <FAQ />
      <CTA />
    </>
  );
}
