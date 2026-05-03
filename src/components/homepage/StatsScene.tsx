"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/Animations";
import { useReducedMotion } from "@/hooks";
import { TrendingUp, Star, Users, Percent, Shield, CheckCircle2 } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "%",
    label: "Top documented revenue gain across portfolio",
    icon: TrendingUp,
    color: "#1D2BFF",
    bg: "linear-gradient(135deg, rgba(29,43,255,0.15), rgba(29,43,255,0.08))",
    graphPoints: [30, 28, 24, 20, 16, 12, 8, 5, 3, 2],
  },
  {
    value: 109,
    suffix: "%",
    label: "YoY sales growth, mid-market client",
    icon: Users,
    color: "#1D2BFF",
    bg: "linear-gradient(135deg, rgba(29,43,255,0.15), rgba(29,43,255,0.08))",
    graphPoints: [28, 26, 28, 22, 18, 14, 10, 7, 4, 3],
  },
  {
    value: 5.0,
    suffix: "/5",
    label: "Average client satisfaction rating",
    isStatic: true,
    icon: Star,
    color: "#1D2BFF",
    bg: "linear-gradient(135deg, rgba(29,43,255,0.15), rgba(29,43,255,0.08))",
    graphPoints: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  },
  {
    value: 100,
    suffix: "%",
    label: "Implementation rate · Optimize U program",
    icon: Percent,
    color: "#1D2BFF",
    bg: "linear-gradient(135deg, rgba(29,43,255,0.15), rgba(29,43,255,0.08))",
    graphPoints: [20, 18, 16, 14, 12, 10, 8, 8, 8, 8],
  },
];

function MiniGraph({ points, color }: { points: number[]; color: string }) {
  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * (100 / (points.length - 1))} ${p}`).join(" ");
  return (
    <svg viewBox="0 0 100 34" className="h-8 w-full" aria-hidden>
      <defs>
        <linearGradient id={`stat-grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${pathData} L 100 34 L 0 34 Z`} fill={`url(#stat-grad-${color.replace("#", "")})`} />
      <path d={pathData} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={100} cy={points[points.length - 1]} r="2.5" fill={color} className="animate-pulse" />
    </svg>
  );
}

export function StatsScene() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden" style={{
  background: `
    radial-gradient(circle at 20% 20%, rgba(29,43,255,0.12) 0%, transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(29,43,255,0.08) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(29,43,255,0.06) 0%, transparent 45%),
    linear-gradient(180deg, #04050D 0%, #060816 35%, #0A0A14 70%, #05060D 100%)
  `,
}}>
      {/* Blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,43,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29,43,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(29,43,255,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(201,166,70,0.06) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12" style={{ paddingTop: "clamp(120px, 12vw, 200px)", paddingBottom: "clamp(120px, 12vw, 200px)" }}>
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-14 bg-[#1D2BFF]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1D2BFF]">
              Performance Validation
            </span>
            <Shield size={12} className="text-[#1D2BFF]" />
          </div>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "#FFFFFF",
            }}
          >
            What our clients{" "}
            <span className="text-[#1D2BFF]">report.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-[#7A7F93]">
            Verified outcomes from real engagements. Not projections — documented results.
          </p>
        </motion.div>

        {/* Stats Dashboard Grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={reduced ? false : { opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] p-7 md:p-8 transition-all duration-500 hover:border-white/[0.12] hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Glassmorphism inner glow */}
                <div
                  className="absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${stat.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Icon + verified badge */}
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                    style={{ background: stat.bg }}
                  >
                    <Icon size={18} color={stat.color} strokeWidth={2.2} />
                  </div>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
                    style={{ background: `${stat.color}15`, color: stat.color }}
                  >
                    <CheckCircle2 size={10} />
                    verified
                  </span>
                </div>

                {/* Big number */}
                <div
                  className="relative z-10 mt-6 font-extrabold tracking-[-0.04em]"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(2.6rem, 4.5vw, 3.4rem)",
                    lineHeight: 1,
                  }}
                >
                  {stat.isStatic ? (
                    <>
                      {stat.value}
                      <span className="text-[#7A7F93]">{stat.suffix}</span>
                    </>
                  ) : (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <p className="relative z-10 mt-3 text-[13px] leading-snug font-medium"
  style={{ color: "#FFFFFF" }}>
                  {stat.label}
                </p>

                {/* Graph */}
                <div className="relative z-10 mt-5">
                  <MiniGraph points={stat.graphPoints} color={stat.color} />
                </div>

                {/* Bottom edge glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Trust footer */}
        <motion.div
          className="mt-16 flex flex-wrap items-center gap-6 justify-center"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#4A4F63] font-medium">
            State of Florida Approved Vendor
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#4A4F63] font-medium">
            Fortune 200 Executive Experience
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#4A4F63] font-medium">
            Implementation-First Methodology
          </span>
        </motion.div>
      </div>
    </section>
  );
}
