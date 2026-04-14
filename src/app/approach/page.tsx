"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight, Search, Target, LineChart, Cog, Rocket, CheckCircle2,
  Shield, Zap, Users, Brain, Award, Sparkles, BarChart3, TrendingUp,
  Building2, Lightbulb, Clock, Handshake, ChevronRight, ChevronDown,
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

/* ═══ APPLE-STYLE SCROLL STORYTELLING ═══ */

/* ═══ NODE NETWORK ECOSYSTEM ═══ */

const ZEUS_BITMAP: Record<string, number[][]> = {
  Z: [[1,1,1,1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,1,1,1]],
  E: [[1,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0],[1,1,1,1]],
  U: [[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],
  S: [[0,1,1,1],[1,0,0,0],[0,1,1,0],[0,0,0,1],[1,1,1,0]],
};

function buildZeusTargets(): [number, number][] {
  const result: [number, number][] = [];
  const letters = ["Z", "E", "U", "S"];
  const cpl = 4, gap = 3;
  const tw = letters.length * cpl + (letters.length - 1) * gap;
  letters.forEach((letter, li) => {
    const bm = ZEUS_BITMAP[letter];
    const ox = li * (cpl + gap);
    bm.forEach((row, ri) => {
      row.forEach((cell, ci) => {
        if (cell) {
          result.push([
            0.15 + ((ox + ci) / tw) * 0.70,
            0.32 + (ri / 4) * 0.36,
          ]);
        }
      });
    });
  });
  return result;
}

const ZEUS_TARGETS = buildZeusTargets();
const TOTAL_NODES = ZEUS_TARGETS.length + 6;

function prand(s: number): number {
  return ((Math.sin(s * 127.1 + 311.7) * 43758.5453) % 1 + 1) % 1;
}

function getTarget(idx: number, stage: number): [number, number, number] {
  if (stage >= 4) {
    if (idx < ZEUS_TARGETS.length) return [ZEUS_TARGETS[idx][0], ZEUS_TARGETS[idx][1], 1];
    return [0.5 + prand(idx * 7) * 0.6 - 0.3, 0.5 + prand(idx * 13) * 0.4 - 0.2, 0.08];
  }
  const cx = 0.62, cy = 0.48, s = idx;
  if (stage === 0) {
    if (idx >= 10) return [cx + prand(s * 3) * 0.3 - 0.15, cy + prand(s * 7) * 0.3 - 0.15, 0];
    const a = (idx / 10) * Math.PI * 2;
    const r = idx === 0 ? 0 : 0.015 + prand(s) * 0.04;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r, 1];
  }
  if (stage === 1) {
    if (idx >= 22) return [cx + prand(s * 5) * 0.4 - 0.2, cy + prand(s * 11) * 0.3 - 0.15, 0];
    const a = (idx / 22) * Math.PI * 2 + prand(s + 10) * 0.7;
    const r = 0.025 + prand(s + 20) * 0.10;
    return [cx + Math.cos(a) * r * 1.3, cy + Math.sin(a) * r, 1];
  }
  if (stage === 2) {
    if (idx >= 38) return [0.5 + prand(s * 3) * 0.5 - 0.25, cy + prand(s * 7) * 0.4 - 0.2, 0];
    const a = (idx / 38) * Math.PI * 2 + prand(s + 30) * 1.2;
    const r = 0.04 + prand(s + 40) * 0.18;
    return [0.55 + Math.cos(a) * r * 1.5, cy + Math.sin(a) * r * 1.1, 1];
  }
  const a = (idx / TOTAL_NODES) * Math.PI * 2 + prand(s + 50) * 1.5;
  const r = 0.06 + prand(s + 60) * 0.26;
  return [0.50 + Math.cos(a) * r * 1.4, 0.48 + Math.sin(a) * r, 1];
}

interface NState { x: number; y: number; o: number; tx: number; ty: number; to: number; sz: number }

function ProcessScrollStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progRef = useRef(0);
  const nodesRef = useRef<NState[]>([]);
  const frameRef = useRef(0);
  const [activePhase, setActivePhase] = useState(0);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progRef.current = v;
    setActivePhase(v < 0.04 ? 0 : v < 0.24 ? 0 : v < 0.48 ? 1 : v < 0.72 ? 2 : v < 0.91 ? 3 : 4);
  });

  const phaseTextIdx = activePhase >= 4 ? -1 : activePhase;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (nodesRef.current.length === 0) {
      for (let i = 0; i < TOTAL_NODES; i++) {
        const [tx, ty, to] = getTarget(i, 0);
        nodesRef.current.push({ x: 0.62, y: 0.48, o: 0, tx, ty, to, sz: 2.5 + prand(i * 17) * 2 });
      }
    }

    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;
    function resize() {
      if (!canvas) return;
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;
      const p = progRef.current;

      let stage: number;
      if (p < 0.04) stage = 0;
      else if (p < 0.24) stage = 0;
      else if (p < 0.48) stage = 1;
      else if (p < 0.72) stage = 2;
      else if (p < 0.91) stage = 3;
      else stage = 4;

      for (let i = 0; i < TOTAL_NODES; i++) {
        const [tx, ty, to] = getTarget(i, stage);
        nodes[i].tx = tx; nodes[i].ty = ty; nodes[i].to = to;
      }

      const lerpF = 0.045;
      for (const n of nodes) {
        n.x += (n.tx - n.x) * lerpF;
        n.y += (n.ty - n.y) * lerpF;
        n.o += (n.to - n.o) * lerpF;
      }

      const thresholds = [0.055, 0.085, 0.11, 0.135, 0.065];
      const ct = thresholds[Math.min(stage, 4)];

      for (let i = 0; i < TOTAL_NODES; i++) {
        if (nodes[i].o < 0.08) continue;
        for (let j = i + 1; j < TOTAL_NODES; j++) {
          if (nodes[j].o < 0.08) continue;
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < ct) {
            const a = (1 - dist / ct) * Math.min(nodes[i].o, nodes[j].o) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * w, nodes[i].y * h);
            ctx.lineTo(nodes[j].x * w, nodes[j].y * h);
            ctx.strokeStyle = `rgba(212,168,83,${a})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      t += 0.016;
      for (let i = 0; i < TOTAL_NODES; i++) {
        const n = nodes[i];
        if (n.o < 0.04) continue;
        const pulse = 0.7 + Math.sin(t * 2 + i * 0.8) * 0.3;
        const bsz = n.sz * (stage === 4 ? 1.3 : 1);

        const g = ctx.createRadialGradient(n.x * w, n.y * h, 0, n.x * w, n.y * h, bsz * 5);
        g.addColorStop(0, `rgba(212,168,83,${0.25 * n.o * pulse})`);
        g.addColorStop(1, "rgba(212,168,83,0)");
        ctx.fillStyle = g;
        ctx.fillRect(n.x * w - bsz * 5, n.y * h - bsz * 5, bsz * 10, bsz * 10);

        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, bsz * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,168,83,${n.o * 0.9})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, bsz * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,230,180,${n.o * 0.7})`;
        ctx.fill();
      }

      if (stage === 4) {
        const lp = Math.min((p - 0.91) / 0.09, 1);
        if (lp > 0.4) {
          const ta = Math.min((lp - 0.4) * 1.8, 1) * 0.12;
          ctx.font = `600 ${w * 0.018}px sans-serif`;
          ctx.letterSpacing = `${w * 0.008}px`;
          ctx.fillStyle = `rgba(212,168,83,${ta})`;
          ctx.textAlign = "center";
          ctx.fillText("CONSULTING SERVICES", w * 0.5, h * 0.82);
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frameRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div ref={wrapRef} style={{ height: `${(steps.length + 1.8) * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-zeus-midnight">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-zeus-midnight/30 via-transparent to-zeus-midnight/50 pointer-events-none" />

        {/* ── Phase text content ── */}
        <div className="relative z-10 h-full flex items-center pointer-events-none">
          <div className="z-container">
            <div className="max-w-lg relative">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.phase}
                    className="absolute top-0 left-0"
                    animate={{
                      opacity: phaseTextIdx === i ? 1 : 0,
                      y: phaseTextIdx === i ? 0 : phaseTextIdx > i ? -60 : 60,
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ pointerEvents: phaseTextIdx === i ? "auto" : "none" }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-zeus-gold/10 border border-zeus-gold/20 flex items-center justify-center">
                        <Icon size={22} className="text-zeus-gold" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zeus-gold/5 border border-zeus-gold/15">
                        <Clock size={12} className="text-zeus-gold/70" />
                        <span className="text-zeus-gold/80 font-semibold uppercase tracking-[0.2em]" style={{ fontSize: "0.7rem" }}>{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-zeus-gold/40 font-bold text-sm tracking-[0.2em] uppercase mb-2">Phase {step.phase}</p>
                    <h3 className="text-zeus-white mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}>{step.title}</h3>
                    <p className="text-zeus-text-secondary leading-relaxed mb-6" style={{ fontSize: "1.05rem" }}>{step.desc}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {step.details.map((detail) => (
                        <span key={detail} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zeus-gold/15 bg-zeus-gold/[0.04] backdrop-blur-sm">
                          <CheckCircle2 size={14} className="text-zeus-gold flex-shrink-0" />
                          <span className="text-zeus-white-soft text-sm">{detail}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              {/* ZEUS formation finale text */}
              <motion.div
                className="absolute top-0 left-0"
                animate={{ opacity: activePhase >= 4 ? 1 : 0, y: activePhase >= 4 ? 0 : 40 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-zeus-gold font-bold text-sm tracking-[0.25em] uppercase mb-3">The Zeus Ecosystem</p>
                <h3 className="text-zeus-white mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}>
                  Every Node Connected.<br />
                  <span className="text-zeus-gold">Every Outcome Measured.</span>
                </h3>
                <p className="text-zeus-text-secondary leading-relaxed" style={{ fontSize: "1.05rem" }}>
                  From a single discovery point to a fully connected network — four phases build an ecosystem
                  that compounds your advantages quarter after quarter.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Phase progress sidebar ── */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              className="flex items-center gap-3"
              animate={{ opacity: activePhase === i ? 1 : activePhase >= 4 ? 0.15 : 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence>
                {activePhase === i && (
                  <motion.span
                    className="text-zeus-gold text-xs font-medium tracking-wide whitespace-nowrap"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.span>
                )}
              </AnimatePresence>
              <div
                className={`rounded-full flex items-center justify-center transition-all duration-500 ${
                  activePhase === i
                    ? "w-10 h-10 bg-zeus-gold/15 border-2 border-zeus-gold"
                    : activePhase >= 4
                      ? "w-7 h-7 bg-zeus-gold/10 border border-zeus-gold/30"
                      : "w-7 h-7 bg-white/5 border border-white/10"
                }`}
              >
                <span className={`text-xs font-bold ${activePhase === i ? "text-zeus-gold" : activePhase >= 4 ? "text-zeus-gold/50" : "text-zeus-muted"}`}>
                  {step.phase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom progress bar ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-[2px] bg-white/5">
            <motion.div className="h-full bg-gradient-to-r from-zeus-gold to-zeus-gold-light" style={{ width: progressWidth }} />
          </div>
          <div className="z-container">
            <div className="flex justify-between py-4">
              {steps.map((step, i) => (
                <motion.span
                  key={step.phase}
                  className="text-[0.65rem] tracking-[0.12em] uppercase hidden sm:block"
                  animate={{
                    color: activePhase >= i || activePhase >= 4 ? "rgb(212,168,83)" : "rgba(255,255,255,0.15)",
                    fontWeight: activePhase === i ? 600 : 400,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ opacity: activePhase === 0 ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-zeus-muted text-[0.6rem] tracking-[0.25em] uppercase">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={14} className="text-zeus-muted" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ApproachPage() {

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

      {/* ═══ SCROLL-STORYTELLING PROCESS ═══ */}
      <section className="relative bg-zeus-navy">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Header — always visible */}
        <div className="relative z-10 pt-24 pb-12">
          <div className="z-container">
            <ScrollReveal>
              <div className="text-center">
                <span className="section-label justify-center">Our Process</span>
                <h2 className="section-title mt-4">Four Phases, <span className="text-zeus-gold">Zero Guesswork</span></h2>
                <p className="section-subtitle mx-auto mt-4">
                  A proven methodology that has transformed 500+ businesses across 40+ industries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll-driven phases */}
        <ProcessScrollStory />
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
                  <span className="flex justify-center">
                    {point.others ? (
                      <CheckCircle2 size={18} className="text-zeus-muted" />
                    ) : (
                      <span className="text-zeus-muted text-lg">✕</span>
                    )}
                  </span>
                  <span className="flex justify-center">
                    <CheckCircle2 size={18} className="text-zeus-gold" />
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
