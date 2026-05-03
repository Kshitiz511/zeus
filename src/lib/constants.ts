export const MOTION = {
  duration: {
    fast: 0.2,
    normal: 0.45,
    slow: 0.7,
  },
  stagger: {
    fast: 0.04,
    normal: 0.08,
    slow: 0.12,
  },
  ease: {
    premium: [0.22, 1, 0.36, 1] as const,
  },
} as const;
