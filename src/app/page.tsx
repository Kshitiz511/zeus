import {
  HeroScene,
  PracticesScene,
  StatsScene,
  QuoteScene,
  CTAScene,
} from "@/components/homepage";

/**
 * Zeus Homepage — McKinsey-inspired editorial scroll narrative.
 * Lean text, generous whitespace, pinned scroll storytelling.
 */
export default function Home() {
  return (
    <>
      {/* Scene 1 — Editorial hero */}
      <HeroScene />

      {/* Scene 3 — Four practices (image-led tiles) */}
      <PracticesScene />

      {/* Scene 4 — Numbers */}
      <StatsScene />

      {/* Scene 5 — Featured client quote */}
      <QuoteScene />

      {/* Scene 6 — Final CTA */}
      <CTAScene />
    </>
  );
}
