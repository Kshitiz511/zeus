"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Briefcase,
  GraduationCap,
  Compass,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { useReducedMotion } from "@/hooks";

/* ─── Practice Data ─── */
const PRACTICES = [
  {
    number: "01",
    tag: "Strategic Blueprint",
    title: "The blueprint your board signs off on.",
    body: "Quantitative diagnostics, market positioning, and a four-quarter operating roadmap that compounds into sustainable enterprise value.",
    href: "/services/strategic-planning",
    stat: "500%",
    statLabel: "Avg Documented ROI",
    statSub: "Enterprise impact realized",
    graphPoints: [28, 26, 22, 18, 14, 10, 8, 6, 4, 2],
    dark: true,
  },
  {
    number: "02",
    tag: "Execution Engine",
    title: "Executive horsepower, embedded in your business.",
    body: "Senior operators who sit in the seat — driving execution against the plan, week after week, quarter after quarter.",
    href: "/services/fractional-cxo",
    stat: "109%",
    statLabel: "YoY Sales Growth",
    statSub: "Average client outcome",
    graphPoints: [30, 28, 24, 26, 20, 16, 12, 8, 5, 3],
    dark: false,
  },
  {
    number: "03",
    tag: "AI + Optimization",
    title: "Ship AI that moves the P&L — not pilots.",
    body: "Workflow audit, deployment roadmap, and governance scaffolding to make AI a lasting competitive moat.",
    href: "/services/ai-readiness",
    stat: "10x",
    statLabel: "Workflow Efficiency",
    statSub: "Average improvement",
    graphPoints: [30, 28, 30, 24, 18, 12, 8, 5, 3, 2],
    dark: false,
  },
  {
    number: "04",
    tag: "Operator Enablement",
    title: "Optimize U — the operator's curriculum.",
    body: "100% implementation rate. Live cohorts, applied tooling, and the muscle memory teams keep using.",
    href: "/services/training-development",
    stat: "100%",
    statLabel: "Implementation Rate",
    statSub: "Across all engagements",
    graphPoints: [20, 18, 16, 14, 12, 10, 8, 8, 8, 8],
    dark: true,
  },
] as const;

/* ─── Decorative Card Illustrations ─── */
function ChipIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden>
      {/* Board traces */}
      {[20, 40, 60, 80, 100].map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="120" y2={y} stroke="rgba(107,123,255,0.08)" strokeWidth="0.5" />
      ))}
      {[20, 40, 60, 80, 100].map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="120" stroke="rgba(107,123,255,0.08)" strokeWidth="0.5" />
      ))}
      {/* Chip body */}
      <rect x="30" y="30" width="60" height="60" rx="8" fill="rgba(29,43,255,0.15)" stroke="rgba(107,123,255,0.3)" strokeWidth="1.5" />
      <rect x="38" y="38" width="44" height="44" rx="4" fill="rgba(29,43,255,0.1)" stroke="rgba(107,123,255,0.2)" strokeWidth="1" />
      {/* Chip pins */}
      {[40, 52, 64, 76].map((x) => (
        <g key={`pin-${x}`}>
          <line x1={x} y1="30" x2={x} y2="18" stroke="rgba(107,123,255,0.3)" strokeWidth="1.5" />
          <line x1={x} y1="90" x2={x} y2="102" stroke="rgba(107,123,255,0.3)" strokeWidth="1.5" />
        </g>
      ))}
      {[40, 52, 64, 76].map((y) => (
        <g key={`pin-h-${y}`}>
          <line x1="30" y1={y} x2="18" y2={y} stroke="rgba(107,123,255,0.3)" strokeWidth="1.5" />
          <line x1="90" y1={y} x2="102" y2={y} stroke="rgba(107,123,255,0.3)" strokeWidth="1.5" />
        </g>
      ))}
      {/* Inner glow */}
      <circle cx="60" cy="60" r="12" fill="rgba(29,43,255,0.2)" />
      <circle cx="60" cy="60" r="5" fill="rgba(107,123,255,0.5)" />
    </svg>
  );
}

function LightningIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="36" stroke="rgba(29,43,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="40" cy="40" r="24" stroke="rgba(29,43,255,0.12)" strokeWidth="1" />
      <path d="M44 18L32 42h10L36 62l16-26H42L44 18z" fill="rgba(29,43,255,0.15)" stroke="#1D2BFF" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function AIChipIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden>
      {/* Radiating lines */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={angle}
            x1={60 + Math.cos(rad) * 28} y1={60 + Math.sin(rad) * 28}
            x2={60 + Math.cos(rad) * 52} y2={60 + Math.sin(rad) * 52}
            stroke="rgba(29,43,255,0.12)" strokeWidth="1" />
        );
      })}
      {/* Outer ring */}
      <rect x="24" y="24" width="72" height="72" rx="12" stroke="rgba(29,43,255,0.15)" strokeWidth="1.5" fill="none" />
      {/* Inner chip */}
      <rect x="36" y="36" width="48" height="48" rx="6" fill="rgba(29,43,255,0.08)" stroke="rgba(29,43,255,0.2)" strokeWidth="1" />
      {/* AI brain pattern */}
      <circle cx="52" cy="52" r="4" fill="rgba(29,43,255,0.2)" />
      <circle cx="68" cy="52" r="4" fill="rgba(29,43,255,0.2)" />
      <circle cx="60" cy="65" r="4" fill="rgba(29,43,255,0.2)" />
      <line x1="52" y1="52" x2="68" y2="52" stroke="rgba(29,43,255,0.2)" strokeWidth="1" />
      <line x1="52" y1="52" x2="60" y2="65" stroke="rgba(29,43,255,0.2)" strokeWidth="1" />
      <line x1="68" y1="52" x2="60" y2="65" stroke="rgba(29,43,255,0.2)" strokeWidth="1" />
    </svg>
  );
}

function UserOrbitIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      <circle cx="50" cy="50" r="38" stroke="rgba(107,123,255,0.12)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="50" cy="50" r="22" stroke="rgba(107,123,255,0.15)" strokeWidth="1" />
      {/* Center user */}
      <circle cx="50" cy="44" r="7" fill="rgba(107,123,255,0.15)" stroke="rgba(107,123,255,0.3)" strokeWidth="1" />
      <path d="M38 62a12 12 0 0124 0" stroke="rgba(107,123,255,0.3)" strokeWidth="1" fill="rgba(107,123,255,0.08)" />
      {/* Orbit users */}
      {[0, 120, 240].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + Math.cos(rad - Math.PI / 2) * 38;
        const cy = 50 + Math.sin(rad - Math.PI / 2) * 38;
        return (
          <g key={angle}>
            <circle cx={cx} cy={cy} r="10" fill="rgba(107,123,255,0.08)" stroke="rgba(107,123,255,0.2)" strokeWidth="1" />
            <circle cx={cx} cy={cy - 2} r="3" fill="rgba(107,123,255,0.2)" />
          </g>
        );
      })}
    </svg>
  );
}

const ILLUSTRATIONS = [ChipIllustration, LightningIllustration, AIChipIllustration, UserOrbitIllustration];

/* ─── Sparkline ─── */
function Sparkline({ points, dark }: { points: readonly number[]; dark: boolean }) {
  const w = 100;
  const h = 24;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * (w / (points.length - 1))} ${p * (h / 34)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-20 h-5 shrink-0" preserveAspectRatio="none" aria-hidden>
      <path d={path} fill="none" stroke={dark ? "rgba(107,123,255,0.6)" : "rgba(29,43,255,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Ecosystem Diagram ─── */
function EcosystemDiagram({ reduced }: { reduced: boolean }) {
  const pillars = [
    { label: "Blueprint", icon: Compass, num: "01" },
    { label: "Execute", icon: Zap, num: "02" },
    { label: "Optimize", icon: BarChart3, num: "03" },
    { label: "Enable", icon: Users, num: "04" },
  ];
  const angles = [-90, 0, 90, 180];
  const r = 100;

  return (
    <div className="relative w-[260px] h-[260px] mx-auto lg:mx-0">
      {/* Center Z */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        style={{ width: 68, height: 68, background: "linear-gradient(135deg, #1D2BFF, #3b4fff)", boxShadow: "0 10px 32px -6px rgba(29,43,255,0.35)" }}>
        <span className="text-white text-xl font-black">Z</span>
      </div>
      {/* Orbit ring */}
      <div className="absolute inset-[18px] rounded-full" style={{ border: "1.5px solid rgba(29,43,255,0.1)" }} />
      {/* Nodes */}
      {pillars.map((p, i) => {
        const Icon = p.icon;
        const rad = (angles[i] * Math.PI) / 180;
        const cx = 130 + Math.cos(rad) * r;
        const cy = 130 + Math.sin(rad) * r;
        return (
          <motion.div key={p.label} className="absolute flex flex-col items-center"
            style={{ left: cx - 24, top: cy - 24 }}
            initial={reduced ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
              style={{ border: "1.5px solid rgba(29,43,255,0.12)", boxShadow: "0 3px 12px rgba(0,0,0,0.05)" }}>
              <Icon size={16} color="#1D2BFF" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold text-[#1D2BFF] mt-1">{p.num}</span>
            <span className="text-[11px] font-semibold text-[#0A0A0F]">{p.label}</span>
          </motion.div>
        );
      })}
      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        {angles.map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line key={i}
              x1={130 + Math.cos(rad) * 38} y1={130 + Math.sin(rad) * 38}
              x2={130 + Math.cos(rad) * 86} y2={130 + Math.sin(rad) * 86}
              stroke="rgba(29,43,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
          );
        })}
      </svg>
    </div>
  );
}

/* ─── Main Component ─── */
export function PracticesScene() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden" style={{ background: "#F5F6F8" }}>
      {/* Subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: "linear-gradient(#1D2BFF 1px, transparent 1px), linear-gradient(90deg, #1D2BFF 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative mx-auto max-w-[1440px] px-8 md:px-16 lg:px-20"
        style={{ paddingTop: "clamp(100px, 10vw, 160px)", paddingBottom: "clamp(80px, 8vw, 120px)" }}>

        {/* ═══ SPLIT LAYOUT ═══ */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:w-[340px] lg:shrink-0 flex flex-col">
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-2.5 mb-7"
              initial={reduced ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <span className="h-2 w-2 rounded-full bg-[#1D2BFF]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1D2BFF]">
                The Growth Operating System
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#0A0A0F", lineHeight: 1.08 }}>
                One operating system.
              </h2>
              <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1D2BFF", lineHeight: 1.08 }}>
                Four integrated practices.
              </h2>
            </motion.div>

            {/* Underline */}
            <div className="mt-8 h-[3px] w-10 rounded-full bg-[#0A0A0F]" />

            {/* Body */}
            <motion.p className="text-[15px] leading-[1.85] text-[#4A4F63]" style={{ marginTop: "calc(2.5rem + 2px)" }}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}>
              From diagnostic to embedded execution, our four pillars work as a single growth engine for compounding enterprise value.
            </motion.p>

            {/* Ecosystem diagram */}
            <div className="mt-16 hidden lg:block">
              <EcosystemDiagram reduced={reduced} />
            </div>

            {/* Trusted by */}
            <div className="hidden lg:block" style={{ marginTop: "calc(4rem + 5px)" }}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8A8F9F] mb-4">
                Trusted by Executive Teams
              </div>
              <div className="flex items-center gap-6 flex-wrap opacity-40">
                <span className="text-[13px] font-bold text-[#0A0A0F] tracking-tight">Fortune 500</span>
                <span className="text-[13px] font-bold text-[#0A0A0F] tracking-tight">AWS</span>
                <span className="text-[13px] font-bold text-[#0A0A0F] tracking-tight">Bain & Co</span>
                <span className="text-[13px] font-bold text-[#0A0A0F] tracking-tight">Google Cloud</span>
                <span className="text-[13px] font-bold text-[#0A0A0F] tracking-tight">Microsoft</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 2×2 CARDS ── */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {PRACTICES.map((p, i) => {
                const isDark = p.dark;
                const Illustration = ILLUSTRATIONS[i];

                return (
                  <motion.div key={p.number}
                    initial={reduced ? false : { opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                    <Link href={p.href}
                      className="group relative flex flex-col overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-1"
                      style={{
                        background: isDark
                          ? "linear-gradient(155deg, #080D28 0%, #0E1340 35%, #131952 100%)"
                          : "#FFFFFF",
                        borderColor: isDark ? "rgba(29,43,255,0.12)" : "#E4E6ED",
                        boxShadow: isDark
                          ? "0 16px 48px -12px rgba(8,13,40,0.5)"
                          : "0 2px 16px -4px rgba(0,0,0,0.05)",
                        minHeight: 410,
                      }}>

                      {/* ─ Card content with uniform padding ─ */}
                      <div className="flex-1 flex flex-col pt-20 pl-12 pr-10 pb-10 lg:pt-24 lg:pl-14 lg:pr-12 lg:pb-12">

                        {/* Number + Tag row */}
                        <div className="flex items-center justify-between mb-10">

                          <div className="flex items-center gap-3">
                            <span
                              className="inline-block text-[28px] font-black leading-none"
                              style={{ color: "#1D2BFF", paddingTop: "09px", paddingLeft: "09px" }}
                            >
                              {p.number}
                            </span>
                            <span className="h-[1.5px] w-8" style={{ background: isDark ? "rgba(255,255,255,0.15)" : "#D8DAE2" }} />
                          </div>
                          <span className="rounded-full px-3.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] leading-none"
                            style={{
                              color: isDark ? "#7B8AFF" : "#1D2BFF",
                              border: isDark ? "1px solid rgba(107,123,255,0.25)" : "1px solid #D4D8FF",
                              background: isDark ? "rgba(29,43,255,0.08)" : "#F4F5FF",
                            }}>
                            {p.tag}
                          </span>
                        </div>

                        {/* Title */}
                      <div className="relative flex-1 pt-8">
                          {/* Decorative illustration — positioned top-right, shifted left & down */}
                          <div className="absolute right-[-8px] top-[12px] hidden md:block opacity-60">
                            <Illustration />
                          </div>

                          <h3 className="relative z-10" style={{
                            color: isDark ? "#FFFFFF" : "#0A0A0F",
                            fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                            maxWidth: "72%",
                            paddingTop: "1px",
                            paddingLeft: "1px",
                          }}>
                            {p.title}
                          </h3>

                          {/* Body — below title and illustration */}
                          <p className="relative z-10 text-[13.5px] leading-[1.8] text-right"
                            style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#5A5F73", marginTop: 100 }}>
                            {p.body}
                          </p>
                        </div>
                      </div>

                      {/* ─ Stat Bar (outside main padding, own margins) ─ */}
                      <div className="mx-6 mb-6 lg:mx-7 lg:mb-7 flex items-center gap-4 rounded-[14px] px-6 py-5"
                        style={{
                          background: isDark ? "rgba(29,43,255,0.08)" : "#F6F7FA",
                          border: isDark ? "1px solid rgba(107,123,255,0.1)" : "1px solid #EDEEF2",
                        }}>
                        <span className="text-[22px] font-extrabold tracking-[-0.02em] shrink-0"
                          style={{ color: isDark ? "#FFFFFF" : "#0A0A0F" }}>
                          {p.stat}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] font-bold uppercase tracking-[0.14em]"
                            style={{ color: isDark ? "#7B8AFF" : "#1D2BFF" }}>
                            {p.statLabel}
                          </div>
                          <div className="text-[11px] mt-0.5"
                            style={{ color: isDark ? "rgba(255,255,255,0.35)" : "#8A8F9F" }}>
                            {p.statSub}
                          </div>
                        </div>
                        <Sparkline points={p.graphPoints} dark={isDark} />
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-400 group-hover:bg-[#1D2BFF]"
                          style={{ border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #E2E4EB" }}>
                          <ArrowRight size={13}
                            className="transition-colors duration-400 group-hover:text-white"
                            style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#8A8F9F" }} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM CTA BANNER ═══ */}
        <motion.div className="mt-16 rounded-[18px] overflow-hidden"
          style={{ background: "linear-gradient(135deg, #080D28 0%, #0E1340 40%, #131952 100%)", marginTop: "calc(4rem + 10px)" }}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-10 md:px-14 py-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(29,43,255,0.12)" }}>
                <Compass size={20} color="#6B7BFF" strokeWidth={1.8} />
              </div>
              <div>
                <span className="text-[16px] md:text-[18px] font-bold text-white">One system. Four practices.</span>
                <br />
                <span className="text-[15px] font-semibold" style={{ color: "#6B7BFF" }}>Compounding enterprise value.</span>
              </div>
            </div>
            <Link href="/services"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-[#6B7BFF] transition-colors">
              Explore the System
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
