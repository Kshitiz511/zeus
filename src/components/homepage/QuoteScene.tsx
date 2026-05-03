"use client";

import { motion } from "framer-motion";

/**
 * Scene 5 — FEATURED CLIENT QUOTE
 * Single editorial pull-quote on a calm muted background.
 * Uses `whileInView` (no scroll-driven opacity) so it never bleeds
 * into the CTA below.
 */
export function QuoteScene() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#F5F6FA",
        paddingBlock: "clamp(6rem, 12vw, 10rem)",
        isolation: "isolate",
        zIndex: 1,
      }}
    >
      <div className="z-container">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-center gap-4"
        >
          <span
            className="inline-block h-px w-12"
            style={{ background: "#1D2BFF" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#1D2BFF" }}
          >
            Client outcome
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p
              className="font-heading"
              style={{
                color: "#000000",
                fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)",
                lineHeight: 1.25,
                fontWeight: 600,
                letterSpacing: "-0.015em",
              }}
            >
              <span style={{ color: "#1D2BFF" }}>“</span>
              Zeus Consulting goes above and beyond to help my company be successful. I have seen a{" "}
              <span style={{ color: "#1D2BFF" }}>500% increase</span> in business.
              <span style={{ color: "#1D2BFF" }}>”</span>
            </p>

            <footer className="mt-10 flex items-center gap-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full font-heading text-sm font-bold"
                style={{ background: "#000000", color: "#FFFFFF" }}
              >
                LB
              </span>
              <div>
                <div
                  className="text-base font-semibold"
                  style={{ color: "#000000" }}
                >
                  Lascelles Brown
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#5A5F73" }}
                >
                  Founder, LIG Logistics
                </div>
              </div>
            </footer>
          </motion.blockquote>

          {/* Big stat callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div
              className="font-heading"
              style={{
                color: "#1D2BFF",
                fontSize: "clamp(4rem, 8vw, 7rem)",
                lineHeight: 0.95,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              500%
            </div>
            <div
              className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#5A5F73" }}
            >
              Business growth
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
