"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download } from "lucide-react";

/**
 * Scene 6 — FINAL CTA
 * Dark editorial card on a white section.
 * ALL text colors are inline `style={{ color: "#FFFFFF" }}` so they
 * cannot be overridden by any global heading rules.
 */
export function CTAScene() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        paddingBlock: "clamp(6rem, 11vw, 10rem)",
        isolation: "isolate",
        zIndex: 2,
      }}
    >
      <div className="z-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "#000000",
            padding: "clamp(2.5rem, 5vw, 5rem)",
          }}
        >
          {/* Ambient blue glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(29,43,255,0.45) 0%, rgba(29,43,255,0) 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(29,43,255,0.25) 0%, rgba(29,43,255,0) 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
            {/* LEFT — Headline + body */}
            <div>
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-4">
                <span
                  className="inline-block h-px w-12"
                  style={{ background: "#1D2BFF" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#FFFFFF", opacity: 0.8 }}
                >
                  Begin the work
                </span>
              </div>

              <h2
                className="font-heading"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                }}
              >
                Ready to build a business that{" "}
                <span style={{ color: "#1D2BFF" }}>compounds?</span>
              </h2>

              <p
                className="mt-8 max-w-xl text-lg"
                style={{ color: "#FFFFFF", opacity: 0.78, lineHeight: 1.65 }}
              >
                Book a strategy call or download the free Business Growth Audit. We&apos;ll
                show you exactly where the leverage is — before you spend a dollar.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/book-a-call"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ background: "#1D2BFF", color: "#FFFFFF !important" }}
                >
                  <Calendar className="h-4 w-4" strokeWidth={2.2} />
                  Book a strategy call
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.2}
                  />
                </Link>

                <Link
                  href="/audit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-colors duration-200"
                  style={{
                    background: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Download className="h-4 w-4" strokeWidth={2.2} />
                  Download free audit
                </Link>
              </div>
            </div>

            {/* RIGHT — Trust column */}
            <div className="lg:pl-8">
              <div
                className="border-l pl-8"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#C9A646" }}
                >
                  Credentials
                </div>

                <ul className="mt-6 space-y-5">
                  {[
                    "State of Florida — Approved Vendor",
                    "60+ enterprise engagements",
                    "Fractional CXO operating depth",
                    "AI-readiness diagnostics",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#FFFFFF", opacity: 0.85 }}
                    >
                      <span
                        className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "#1D2BFF" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-10 text-xs"
                  style={{ color: "#FFFFFF", opacity: 0.55 }}
                >
                  No obligation. No sales theatre. Just a real conversation about
                  whether Zeus is the right operator for your next chapter.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
