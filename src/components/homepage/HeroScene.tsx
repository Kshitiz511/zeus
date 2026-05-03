"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Shield, Zap, Users, BarChart3, Brain, Target, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraphCard } from "./GraphCard";
import { useMediaQuery, useReducedMotion } from "@/hooks";

gsap.registerPlugin(ScrollTrigger);

const NeuralNetwork3D = dynamic(
  () => import("./NeuralNetwork3D").then((m) => m.NeuralNetwork3D),
  { ssr: false }
);

/**
 * Seeded PRNG — produces identical values on server & client.
 * Avoids React hydration mismatch from Math.random().
 */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const _r1 = seededRandom(42);
const HERO_DOTS = Array.from({ length: 60 }, () => ({
  cx: 80 + _r1() * 300,
  cy: 30 + _r1() * 440,
  r: 1 + _r1() * 2,
  o: 0.3 + _r1() * 0.5,
}));
const _r2 = seededRandom(99);
const HERO_LINES = Array.from({ length: 20 }, () => {
  const x1 = 100 + _r2() * 260;
  const y1 = 50 + _r2() * 400;
  return {
    x1,
    y1,
    x2: x1 + (_r2() - 0.5) * 120,
    y2: y1 + (_r2() - 0.5) * 100,
  };
});

const STAGES = [
  {
    eyebrow: "01 \u2014 Diagnose",
    title: "Where the business actually leaks value.",
    body: "We start with an unsentimental audit of your operating model \u2014 revenue, retention, ops drag, and the AI-readiness of every workflow. No theatre. Just findings.",
    metric: "30-day diagnostic",
  },
  {
    eyebrow: "02 \u2014 Architect",
    title: "A strategy that compounds \u2014 not a slide deck.",
    body: "We design the operating system: priorities, capital allocation, the AI stack, and the org accountability needed to actually move the numbers across four quarters.",
    metric: "12-month roadmap",
  },
  {
    eyebrow: "03 \u2014 Operate",
    title: "Sit in the seat until it works.",
    body: "Fractional CXO horsepower drives execution against the plan \u2014 weekly cadence, KPI accountability, and AI deployment that ships, not stalls.",
    metric: "Embedded leadership",
  },
] as const;

/**
 * MiniGraphCard \u2014 Smaller premium analytics tile with gradient background
 * and "breaking the frame" positioning.
 */
function MiniGraphCard({
  title,
  value,
  change,
  icon: Icon,
  gradient,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  gradient: string;
}) {
  return (
    <div
      className="w-[220px] md:w-[240px] rounded-2xl shadow-2xl p-5 border border-white/20 backdrop-blur-xl"
      style={{
        background: gradient,
        boxShadow: "0 24px 48px -16px rgba(0,0,0,0.2), 0 8px 24px -8px rgba(29,43,255,0.15)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
          <Icon size={13} color="#fff" strokeWidth={2.4} />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">
          {title}
        </span>
      </div>
      <div className="text-[28px] font-bold text-white leading-none">{value}</div>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white">
          <span className="h-1 w-1 rounded-full bg-emerald-300" />
          {change}
        </span>
      </div>
      {/* Mini sparkline */}
      <svg className="mt-3 w-full h-[32px]" viewBox="0 0 200 40" fill="none">
        <path
          d="M0 35 C30 30, 50 25, 70 20 S110 8, 140 12 S170 6, 200 3"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 35 C30 30, 50 25, 70 20 S110 8, 140 12 S170 6, 200 3 V40 H0 Z"
          fill="url(#sparkGrad)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * HeroScene \u2014 Mega pinned scroll narrative.
 *
 * Phase A (0\u20136%):    Hero copy LEFT \u00b7 Card cluster EXTREME RIGHT
 * Phase B (6\u201314%):   Hero copy pans UP & fades. Graph tiles break frame outward.
 * Phase C (14\u201322%):  Card cluster travels EXTREME RIGHT \u2192 EXTREME LEFT
 * Phase D (22\u201340%):  Stage 01 \u2014 Diagnose (18% of scroll)
 * Phase E (40\u201355%):  Stage 02 \u2014 Architect (15% of scroll)
 * Phase F (55\u201365%):  Stage 03 \u2014 Operate (10% of scroll)
 * Phase G (65\u2013100%): ZEUS letters form & lock in \u2014 SLOW, cinematic (35% of scroll)
 */
export function HeroScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardClusterRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const zeusMethodRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const float1Ref = useRef<HTMLDivElement>(null);
  const float2Ref = useRef<HTMLDivElement>(null);
  const float3Ref = useRef<HTMLDivElement>(null);
  const miniCard1Ref = useRef<HTMLDivElement>(null);
  const miniCard2Ref = useRef<HTMLDivElement>(null);

  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  // Manually-driven progress for NeuralNetwork3D — synced with GSAP ScrollTrigger
  // (NOT framer-motion's useScroll, which conflicts with GSAP's pin spacer)
  const networkProgress = useMotionValue(0);

  // Stage tracking — driven by GSAP ScrollTrigger progress in useEffect
  const [active, setActive] = useState(0);
  const [methodVisible, setMethodVisible] = useState(false);
  const activeRef = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // Drive 3D network from GSAP progress directly
            networkProgress.set(p);
            // Stages visible from 22% to 65% of scroll
            // ZEUS formation gets a generous 35% (0.65 → 1.00)
            const inMethod = p >= 0.22 && p < 0.66;
            setMethodVisible(inMethod);

            // Each stage gets more scroll room
            const stageProgress = Math.max(0, Math.min(0.999, (p - 0.24) / 0.40));
            const idx = Math.min(2, Math.max(0, Math.floor(stageProgress * 3)));
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActive(idx);
            }
          },
        },
      });

      // Phase B: Hero text pans UP and fades — slower, more cinematic
      tl.to(
        heroTextRef.current,
        { opacity: 0, y: -180, duration: 0.10, ease: "power2.in" },
        0.03
      );

      // Scroll cue out
      tl.to(scrollCueRef.current, { opacity: 0, duration: 0.03 }, 0.01);

      // Breaking the frame: floats + mini cards explode outward with rotation
      tl.to(float1Ref.current, { y: -150, x: 80, opacity: 0, rotate: 15, scale: 1.1, duration: 0.08 }, 0.03);
      tl.to(float2Ref.current, { y: 200, x: -60, opacity: 0, rotate: -12, scale: 1.1, duration: 0.08 }, 0.04);
      tl.to(float3Ref.current, { y: -100, x: 120, opacity: 0, rotate: 20, scale: 1.15, duration: 0.08 }, 0.045);
      tl.to(miniCard1Ref.current, { y: -180, x: -100, opacity: 0, rotate: -18, scale: 1.1, duration: 0.08 }, 0.035);
      tl.to(miniCard2Ref.current, { y: 220, x: 80, opacity: 0, rotate: 14, scale: 1.1, duration: 0.08 }, 0.04);

      // Phase C: Card cluster exits to the LEFT off-screen and fades
      tl.to(
        cardClusterRef.current,
        {
          x: "-110vw",
          opacity: 0,
          scale: 0.7,
          duration: 0.12,
          ease: "power2.in",
        },
        0.06
      );

      // Zeus Method + Stage Graphs fade in at 18%
      tl.fromTo(
        zeusMethodRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" },
        0.18
      );

      // Method fades out at 65%, leaving 35% for ZEUS formation
      tl.to(
        zeusMethodRef.current,
        { opacity: 0, y: -20, duration: 0.05, ease: "power2.in" },
        0.63
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  /* Reduced motion fallback */
  if (reduced || isMobile) {
    return (
      <section className="relative w-full bg-white px-5 py-16 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="text-[clamp(2rem,8vw,3.2rem)] font-bold text-black">
            Strategy that performs.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5A5F73] md:text-base">
            One operating system for sustainable business growth.
          </p>
          <div className="mt-8 sm:mt-10">
            <GraphCard />
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-a-call"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1D2BFF] px-6 text-[15px] font-semibold text-white"
            >
              Book a Strategy Call
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#E2E4EB] px-6 text-[15px] font-semibold text-[#000000]"
            >
              Explore Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="hero-gsap-wrapper">
      <section
        ref={sectionRef}
        id="hero"
        className="relative w-full h-screen overflow-hidden"
        style={{
          background: "#FFFFFF",
          isolation: "isolate",
          zIndex: 1,
        }}
      >
      {/* PINNED VIEWPORT — GSAP handles pinning + scroll spacer */}
      <div className="relative h-screen w-full overflow-hidden" style={{ background: "#FFFFFF" }}>
        {/* Background: Neural Network 3D — full viewport */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <NeuralNetwork3D progress={networkProgress} />
        </div>

        {/* Soft ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full z-[3]"
          style={{
            background:
              "radial-gradient(circle, rgba(29,43,255,0.08) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.02] z-[3]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 mx-auto h-full max-w-[1440px] px-6 md:px-12 lg:px-16">
          {/* LEFT COLUMN \u2014 holds hero text AND zeus method */}
          <div className="absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-[min(560px,46%)]">
            {/* Hero text (Phase A) */}
            <div ref={heroTextRef} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#1D2BFF]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5A5F73]">
                  Executive Consulting &middot; Est. Florida
                </span>
              </motion.div>

              <motion.h1
                className="mt-6"
                style={{ color: "#000000" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {[
                  ["Strategy that ", "performs."],
                  ["Leadership that ", "scales."],
                  ["AI that ", "ships."],
                ].map((parts, i) => (
                  <span key={i} className="block">
                    <span>{parts[0]}</span>
                    <span style={{ color: "#1D2BFF" }}>{parts[1]}</span>
                  </span>
                ))}
              </motion.h1>

              <motion.p
                className="mt-7 max-w-md text-[16px] leading-relaxed text-[#5A5F73]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                One operating system for sustainable business growth &mdash;
                diagnostic, architecture, and embedded execution.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/book-a-call"
                  className="group inline-flex h-[52px] items-center gap-2 rounded-lg px-7 text-[15px] font-semibold transition-all duration-300 hover:opacity-90 bg-[#1D2BFF] !text-white"
                >
                  Book a Strategy Call
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex h-[52px] items-center gap-2 text-[15px] font-semibold text-[#000000]"
                >
                  Explore our practice
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A646]">
                  State of Florida Approved Vendor
                </span>
                <span className="h-3 w-px bg-[#E2E4EB]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A646]">
                  Fortune 200 Operator DNA
                </span>
              </motion.div>
            </div>

            {/* Zeus Method (Phases D\u2013G) */}
            <div ref={zeusMethodRef} className="absolute inset-0 opacity-0">
              <div className="flex items-center gap-4 mb-10">
                <span className="inline-block h-px w-12 bg-[#1D2BFF]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D2BFF]">
                  The Zeus Method
                </span>
              </div>

              <div className="relative min-h-[360px]">
                {STAGES.map((stage, i) => (
                  <div
                    key={stage.eyebrow}
                    className="absolute inset-0 flex flex-col justify-start transition-all duration-700 ease-out"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform:
                        i === active
                          ? "translateY(0)"
                          : i < active
                          ? "translateY(-30px)"
                          : "translateY(30px)",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1D2BFF]">
                      {stage.eyebrow}
                    </div>
                    <h2
                      className="mt-5 max-w-xl"
                      style={{
                        color: "#000000",
                        fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      {stage.title}
                    </h2>
                    <p
                      className="mt-5 max-w-lg text-base md:text-lg text-[#5A5F73]"
                      style={{ lineHeight: 1.7 }}
                    >
                      {stage.body}
                    </p>
                    <div className="mt-7 inline-flex items-center gap-3">
                      <span className="inline-block h-px w-8 bg-[#000000]" />
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#000000]">
                        {stage.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-6">
                {STAGES.map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === active ? 36 : 12,
                      background: i === active ? "#1D2BFF" : "#E2E4EB",
                    }}
                  />
                ))}
                <span className="ml-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5A5F73]">
                  {String(active + 1).padStart(2, "0")} / 03
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Large gradient backdrop + exploding cards */}
        <div
          ref={cardClusterRef}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center center", width: "min(52vw, 680px)", height: "min(80vh, 620px)" }}
        >
          {/* ──── GRADIENT BACKDROP ──── */}
          <motion.div
            className="relative h-full w-full overflow-hidden"
            style={{
              borderRadius: "32px 0 0 32px",
              background: "linear-gradient(155deg, #070B24 0%, #0D1340 28%, #131B55 52%, #1D2BFF 100%)",
              boxShadow: "0 40px 80px -20px rgba(10,13,46,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Noise texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Radial glow accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(29,43,255,0.25) 0%, transparent 65%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 bottom-20 h-[200px] w-[200px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201,166,70,0.08) 0%, transparent 60%)" }}
            />

            {/* Dot / node pattern — like the reference (deterministic to avoid hydration mismatch) */}
            <svg
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-[0.12]"
              viewBox="0 0 400 500"
              preserveAspectRatio="xMaxYMid slice"
            >
              {HERO_DOTS.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="white" opacity={d.o} />
              ))}
              {HERO_LINES.map((l, i) => (
                <line key={`l-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="white" strokeWidth="0.5" opacity={0.15} />
              ))}
            </svg>

            {/* Backdrop text content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12 lg:p-14">
              {/* Top text */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-md"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <Shield size={12} color="#C9A646" strokeWidth={2.4} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Zeus Consulting · Dashboard
                  </span>
                </div>

                <h3
                  className="font-heading max-w-[340px]"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Clarity today.{" "}
                  <span className="block" style={{ color: "rgba(255,255,255,0.5)" }}>Growth tomorrow.</span>
                </h3>

                <p className="mt-4 max-w-[280px] text-[13px] leading-[1.65] text-white/40">
                  Real-time performance tracking across every active engagement. Every metric verified, every outcome documented.
                </p>
              </div>

              {/* Bottom: Transformation roadmap card (inside backdrop) */}
              <motion.div
                className="mt-auto rounded-2xl border border-white/[0.08] p-5 md:p-6 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  maxWidth: "420px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Transformation Roadmap
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
                    <ArrowRight size={10} color="#fff" />
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { step: "Assess", desc: "Deep dive into your business" },
                    { step: "Strategy", desc: "Design a data-driven plan" },
                    { step: "Implement", desc: "Execute with precision" },
                    { step: "Optimize", desc: "Measure and refine" },
                  ].map((item, i) => (
                    <div key={item.step} className="text-center">
                      <div
                        className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg mb-2 transition-all"
                        style={{
                          background: i === 3 ? "rgba(29,43,255,0.6)" : "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <Target size={14} color={i === 3 ? "#fff" : "rgba(255,255,255,0.5)"} strokeWidth={2} />
                      </div>
                      <div className="text-[11px] font-bold text-white/80">{item.step}</div>
                      <div className="text-[9px] text-white/35 mt-0.5 leading-tight">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ──── EXPLODING CARDS — break the gradient frame ──── */}

          {/* Main GraphCard — overlaps the left edge of the backdrop, positioned mid-height */}
          <motion.div
            className="absolute z-20"
            style={{ top: "20%", left: "-50px" }}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <GraphCard />
          </motion.div>

          {/* Mini Card 1: Revenue Growth — breaks frame top-right */}
          <motion.div
            ref={miniCard1Ref}
            className="absolute z-30"
            style={{ top: "-20px", right: "80px" }}
            initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <MiniGraphCard
              title="Revenue Growth"
              value="$2.4M"
              change="+42% YoY"
              icon={BarChart3}
              gradient="linear-gradient(135deg, #1D2BFF 0%, #6366f1 50%, #8b5cf6 100%)"
            />
          </motion.div>

          {/* Mini Card 2: AI Readiness — breaks frame bottom-right */}
          <motion.div
            ref={miniCard2Ref}
            className="absolute z-30"
            style={{ bottom: "40px", right: "10px" }}
            initial={{ opacity: 0, scale: 0.8, y: -20, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 1 }}
            transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MiniGraphCard
              title="AI Readiness"
              value="94%"
              change="+28 pts"
              icon={Brain}
              gradient="linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1D2BFF 100%)"
            />
          </motion.div>

          {/* Float 1: ROI badge — top-left corner, outside gradient */}
          <motion.div
            ref={float1Ref}
            className="absolute z-30 rounded-2xl shadow-xl backdrop-blur-md p-3.5 border border-white/40 bg-white/95"
            style={{ top: "-18px", left: "-56px", boxShadow: "0 16px 30px -12px rgba(29,43,255,0.25)" }}
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                <Zap size={14} color="#10b981" strokeWidth={2.4} />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5A5F73]">
                  ROI
                </div>
                <div className="text-base font-bold text-[#000000] leading-none mt-0.5">
                  +500%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Float 2: Florida Vendor badge — bottom-left of backdrop */}
          <motion.div
            ref={float2Ref}
            className="absolute z-30 rounded-2xl shadow-xl backdrop-blur-md p-3.5 border border-white/40 bg-[#000000]"
            style={{ bottom: "-20px", left: "-10px", boxShadow: "0 16px 30px -12px rgba(0,0,0,0.35)" }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2">
              <Shield size={14} color="#C9A646" strokeWidth={2.4} />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A646]">
                  Florida
                </div>
                <div className="text-[12px] font-bold text-white leading-none mt-0.5">
                  Approved Vendor
                </div>
              </div>
            </div>
          </motion.div>

          {/* Float 3: Engagements badge — mid-right, inside gradient */}
          <motion.div
            ref={float3Ref}
            className="absolute z-30 rounded-2xl shadow-xl backdrop-blur-md p-3 border border-white/10 bg-white/10"
            style={{ top: "52%", right: "50px", boxShadow: "0 16px 30px -12px rgba(0,0,0,0.25)" }}
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2">
              <Users size={13} color="#fff" strokeWidth={2.4} />
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Engagements
                </div>
                <div className="text-sm font-bold text-white leading-none mt-0.5">
                  60+
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Stage Graphs (progressive reveal, pinned to viewport right edge) */}
        <div
          className="absolute z-20 right-[3vw] top-1/2 -translate-y-1/2 flex flex-col gap-3 items-end transition-opacity duration-500"
          style={{ opacity: methodVisible ? 1 : 0, pointerEvents: methodVisible ? "auto" : "none" }}
        >
          {/* Graph 1: Diagnostic Accuracy — visible when stage >= 0 */}
          <div
            className="w-[240px] md:w-[280px] rounded-2xl p-4 md:p-5 border backdrop-blur-xl transition-all duration-700 ease-out"
            style={{
              opacity: active >= 0 ? 1 : 0,
              transform: active >= 0 ? "translateX(0) scale(1)" : "translateX(50px) scale(0.92)",
              background: "linear-gradient(145deg, rgba(29,43,255,0.04) 0%, rgba(255,255,255,0.97) 100%)",
              borderColor: active === 0 ? "rgba(29,43,255,0.2)" : "rgba(226,228,235,0.5)",
              boxShadow: active === 0 ? "0 20px 50px -16px rgba(29,43,255,0.18)" : "0 8px 24px -12px rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ECEFFE]">
                  <Target size={13} color="#1D2BFF" strokeWidth={2.4} />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5A5F73]">Diagnostic Accuracy</span>
              </div>
              <span className="text-[9px] font-semibold text-[#1D2BFF] bg-[#ECEFFE] px-2 py-0.5 rounded-full">5.0/5.0</span>
            </div>
            <div className="flex items-end gap-[3px] h-[40px]">
              {[55, 62, 58, 74, 80, 72, 88, 84, 93, 96, 100, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[2px] transition-all duration-500"
                  style={{
                    height: active >= 0 ? `${h * 0.40}px` : "3px",
                    background: i >= 10 ? "#1D2BFF" : `rgba(29,43,255,${0.15 + i * 0.04})`,
                    transitionDelay: `${i * 40}ms`,
                  }}
                />
              ))}
            </div>
            <p className="mt-2.5 text-[9px] text-[#5A5F73] leading-relaxed">Client satisfaction across engagements</p>
          </div>

          {/* Graph 2: Ops Efficiency — visible when stage >= 1 */}
          <div
            className="w-[240px] md:w-[280px] rounded-2xl p-4 md:p-5 border backdrop-blur-xl transition-all duration-700 ease-out"
            style={{
              opacity: active >= 1 ? 1 : 0,
              transform: active >= 1 ? "translateX(0) scale(1)" : "translateX(50px) scale(0.92)",
              background: "linear-gradient(145deg, rgba(201,166,70,0.03) 0%, rgba(255,255,255,0.97) 100%)",
              borderColor: active === 1 ? "rgba(201,166,70,0.25)" : "rgba(226,228,235,0.5)",
              boxShadow: active === 1 ? "0 20px 50px -16px rgba(201,166,70,0.15)" : "0 8px 24px -12px rgba(0,0,0,0.06)",
              transitionDelay: "100ms",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50">
                  <TrendingUp size={13} color="#C9A646" strokeWidth={2.4} />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5A5F73]">Ops Efficiency</span>
              </div>
              <span className="text-[9px] font-semibold text-[#C9A646] bg-amber-50 px-2 py-0.5 rounded-full">+67%</span>
            </div>
            <svg className="w-full h-[40px]" viewBox="0 0 240 40" fill="none">
              <path d="M0 36 C20 32, 40 30, 60 25 S100 16, 140 14 S180 7, 220 4 L240 2" stroke="#C9A646" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M0 36 C20 32, 40 30, 60 25 S100 16, 140 14 S180 7, 220 4 L240 2 V40 H0 Z" fill="url(#goldGradStage)" opacity="0.12" />
              <defs><linearGradient id="goldGradStage" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C9A646" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
            </svg>
            <p className="mt-2.5 text-[9px] text-[#5A5F73] leading-relaxed">Average ops improvement post-engagement</p>
          </div>

          {/* Graph 3: Implementation — visible when stage >= 2 */}
          <div
            className="w-[240px] md:w-[280px] rounded-2xl p-4 md:p-5 border backdrop-blur-xl transition-all duration-700 ease-out"
            style={{
              opacity: active >= 2 ? 1 : 0,
              transform: active >= 2 ? "translateX(0) scale(1)" : "translateX(50px) scale(0.92)",
              background: "linear-gradient(145deg, rgba(16,185,129,0.03) 0%, rgba(255,255,255,0.97) 100%)",
              borderColor: active === 2 ? "rgba(16,185,129,0.25)" : "rgba(226,228,235,0.5)",
              boxShadow: active === 2 ? "0 20px 50px -16px rgba(16,185,129,0.15)" : "0 8px 24px -12px rgba(0,0,0,0.06)",
              transitionDelay: "200ms",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                  <Zap size={13} color="#10b981" strokeWidth={2.4} />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5A5F73]">Execution Rate</span>
              </div>
              <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">100%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-[6px] rounded-full bg-[#E2E4EB] overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-1000 ease-out"
                  style={{ width: active >= 2 ? "100%" : "0%" }}
                />
              </div>
              <span className="text-[16px] font-bold text-[#000000] tabular-nums">100%</span>
            </div>
            <p className="mt-2.5 text-[9px] text-[#5A5F73] leading-relaxed">Graduates applying program tools to business</p>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          ref={scrollCueRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="h-8 w-px bg-[#000000]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5A5F73]">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}

