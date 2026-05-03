"use client";

import { GraphSVG } from "./GraphSVG";
import { TrendingUp } from "lucide-react";

/**
 * GraphCard — Compact premium analytics card (white).
 * Sits ON TOP of the gradient backdrop, breaking the frame.
 */
export function GraphCard() {
  return (
    <div
      className="w-[340px] md:w-[380px] rounded-2xl shadow-2xl backdrop-blur-xl p-5 md:p-6 border border-white/40 bg-white/[0.97]"
      style={{
        boxShadow:
          "0 30px 60px -20px rgba(29,43,255,0.18), 0 18px 36px -18px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header with badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ECEFFE]">
            <TrendingUp size={16} color="#1D2BFF" strokeWidth={2.4} />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A5F73]">
            Client Performance
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          +35%
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <div className="text-[22px] md:text-[26px] font-bold text-[#000000] font-heading leading-none">
            5.0
          </div>
          <div className="text-[9px] md:text-[10px] text-[#5A5F73] mt-1.5 leading-tight">
            Average rating across all client reviews
          </div>
        </div>
        <div>
          <div className="text-[22px] md:text-[26px] font-bold text-[#000000] font-heading leading-none">
            10/10
          </div>
          <div className="text-[9px] md:text-[10px] text-[#5A5F73] mt-1.5 leading-tight">
            Median Referral Score Optimize U Graduate Survey
          </div>
        </div>
        <div>
          <div className="text-[22px] md:text-[26px] font-bold text-[#000000] font-heading leading-none">
            100%
          </div>
          <div className="text-[9px] md:text-[10px] text-[#5A5F73] mt-1.5 leading-tight">
            Implementation Rate. Graduates who applied program tools
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="h-[70px] md:h-[80px] w-full">
        <GraphSVG />
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5A5F73]/60">
          Zeus Consulting · Performance
        </span>
        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#1D2BFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1D2BFF] animate-pulse" />
          live
        </span>
      </div>
    </div>
  );
}
