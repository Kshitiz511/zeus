"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue, useMotionValueEvent } from "framer-motion";

/**
 * NeuralNetwork3D — Full-section background with scroll-driven ZEUS formation.
 *
 * Progress stages (0 → 1) — aligned with HeroScene's expanded scroll:
 *   0.00–0.65: Floating network — bright, dense, interconnected nodes
 *   0.65–0.72: Gathering — nodes begin migrating toward letter clusters (Z first)
 *   0.72–0.80: Staggered clustering — each letter draws in at different times
 *   0.80–0.90: Letter formation — nodes settle into ZEUS positions with glow
 *   0.90–0.96: Connected — lines appear, halos pulse
 *   0.96–1.00: Locked — ZEUS fully visible, gentle breathing
 *
 * IMPORTANT: Formation is intentionally slow, cinematic, and staggered per letter.
 */

const LETTER_POINTS: Record<string, [number, number][]> = {
  Z: [
    [-1, 1], [-0.5, 1], [0, 1], [0.5, 1], [1, 1],
    [0.6, 0.5], [0.2, 0], [-0.2, -0.5], [-0.6, -0.8],
    [-1, -1], [-0.5, -1], [0, -1], [0.5, -1], [1, -1],
  ],
  E: [
    [-0.6, 1], [0, 1], [0.6, 1],
    [-0.6, 0.6], [-0.6, 0.2],
    [-0.6, 0], [0, 0], [0.4, 0],
    [-0.6, -0.2], [-0.6, -0.6],
    [-0.6, -1], [0, -1], [0.6, -1],
  ],
  U: [
    [-0.7, 1], [-0.7, 0.5], [-0.7, 0],
    [-0.7, -0.5], [-0.4, -0.9], [0, -1],
    [0.4, -0.9], [0.7, -0.5],
    [0.7, 0], [0.7, 0.5], [0.7, 1],
  ],
  S: [
    [0.6, 0.9], [0.2, 1], [-0.2, 1], [-0.6, 0.9],
    [-0.6, 0.5], [-0.3, 0.2], [0.3, -0.2], [0.6, -0.5],
    [0.6, -0.9], [0.2, -1], [-0.2, -1], [-0.6, -0.9],
  ],
};

const LETTERS = ["Z", "E", "U", "S"];
const LETTER_SPACING = 3.5;
const TOTAL_WIDTH = (LETTERS.length - 1) * LETTER_SPACING;
const NODE_COUNT = 200; // Dense, rich field of nodes
const AMBIENT_COUNT = 80; // Extra ambient particles for depth

// Stagger offsets for each letter (Z arrives first, S last)
const LETTER_STAGGER = [0.0, 0.04, 0.08, 0.12];

type NodeSpec = {
  chaos: THREE.Vector3;
  cluster: THREE.Vector3;
  resolved: THREE.Vector3;
  letterIdx: number;
  size: number;
  speed: number;
  delay: number;
};

type AmbientSpec = {
  position: THREE.Vector3;
  size: number;
  speed: number;
  phase: number;
  depth: number; // z-depth layer
};

function generateNodes(): NodeSpec[] {
  const nodes: NodeSpec[] = [];
  for (let li = 0; li < LETTERS.length; li++) {
    const letter = LETTERS[li];
    const pts = LETTER_POINTS[letter];
    const letterX = -TOTAL_WIDTH / 2 + li * LETTER_SPACING;
    const nodesPerLetter = Math.floor(NODE_COUNT / LETTERS.length);
    const extra = li < NODE_COUNT % LETTERS.length ? 1 : 0;
    const count = nodesPerLetter + extra;

    for (let i = 0; i < count; i++) {
      const t = (i / Math.max(1, count - 1)) * (pts.length - 1);
      const idx = Math.floor(t);
      const frac = t - idx;
      const p1 = pts[Math.min(idx, pts.length - 1)];
      const p2 = pts[Math.min(idx + 1, pts.length - 1)];
      const lx = p1[0] + (p2[0] - p1[0]) * frac;
      const ly = p1[1] + (p2[1] - p1[1]) * frac;

      const resolved = new THREE.Vector3(letterX + lx * 1.2, ly * 1.5, 0);
      const cluster = new THREE.Vector3(
        letterX + (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 2.5
      );
      const chaos = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6
      );

      nodes.push({
        chaos,
        cluster,
        resolved,
        letterIdx: li,
        size: 0.04 + Math.random() * 0.05, // Bigger nodes
        speed: 0.12 + Math.random() * 0.2,
        delay: (i / count) * 0.06 + LETTER_STAGGER[li],
      });
    }
  }
  return nodes;
}

function generateAmbient(): AmbientSpec[] {
  return Array.from({ length: AMBIENT_COUNT }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 28,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 10
    ),
    size: 0.015 + Math.random() * 0.03,
    speed: 0.05 + Math.random() * 0.15,
    phase: Math.random() * Math.PI * 2,
    depth: Math.random(),
  }));
}

function buildConnections(nodes: NodeSpec[]): [number, number][] {
  const links: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].letterIdx !== nodes[j].letterIdx) continue;
      const d = nodes[i].resolved.distanceTo(nodes[j].resolved);
      if (d < 2.2) links.push([i, j]);
    }
  }
  return links;
}

// Build ambient connection web — connects nearby ambient particles
function buildAmbientLinks(nodes: NodeSpec[]): [number, number][] {
  const links: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < Math.min(i + 8, nodes.length); j++) {
      const d = nodes[i].chaos.distanceTo(nodes[j].chaos);
      if (d < 6) links.push([i, j]);
    }
  }
  return links.slice(0, 100); // Cap connections for performance
}

function cinematicStep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function NetworkBody({ progress }: { progress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const glowRefs = useRef<(THREE.Mesh | null)[]>([]);
  const ambientRefs = useRef<(THREE.Mesh | null)[]>([]);
  const lineGroupRef = useRef<THREE.Group>(null);
  const ambientLineGroupRef = useRef<THREE.Group>(null);
  const tempVec = useMemo(() => new THREE.Vector3(), []);
  const tempVec2 = useMemo(() => new THREE.Vector3(), []);

  const nodes = useMemo(() => generateNodes(), []);
  const links = useMemo(() => buildConnections(nodes), [nodes]);
  const ambient = useMemo(() => generateAmbient(), []);
  const ambientLinks = useMemo(() => buildAmbientLinks(nodes), [nodes]);

  const glowGeo = useMemo(() => new THREE.RingGeometry(0.08, 0.18, 16), []);
  const glowMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#4f5fff",
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      }),
    []
  );

  const pRef = useRef(0);
  useMotionValueEvent(progress, "change", (v) => {
    pRef.current = v;
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = pRef.current;

    // --- Main ZEUS nodes ---
    for (let i = 0; i < nodes.length; i++) {
      const m = meshRefs.current[i];
      if (!m) continue;
      const n = nodes[i];

      const nodeDelay = n.delay;
      const gatherStart = 0.65 + nodeDelay;
      const gatherEnd = 0.75 + nodeDelay;
      const chaosToCluster = cinematicStep(gatherStart, gatherEnd, p);

      const formStart = 0.75 + nodeDelay;
      const formEnd = 0.88 + nodeDelay;
      const clusterToResolved = cinematicStep(formStart, formEnd, p);

      const wobbleReduction = clusterToResolved;
      const chaosWobble = (1 - wobbleReduction) * 0.4;
      const breathWobble = wobbleReduction * 0.05;

      const wx = Math.sin(t * n.speed * 0.6 + i * 0.4) * (chaosWobble + breathWobble);
      const wy = Math.cos(t * n.speed * 0.4 + i * 1.2) * (chaosWobble + breathWobble);
      const wz = Math.sin(t * n.speed * 0.3 + i * 0.9) * chaosWobble * 0.25;

      tempVec.copy(n.chaos).lerp(n.cluster, chaosToCluster);
      tempVec2.copy(tempVec).lerp(n.resolved, clusterToResolved);
      tempVec2.x += wx;
      tempVec2.y += wy;
      tempVec2.z += wz;

      m.position.copy(tempVec2);

      const breathPulse = Math.sin(t * 1.8 + i * 0.7) * 0.08;
      const formationScale = 0.6 + clusterToResolved * 0.5;
      const pulse = 1 + breathPulse * clusterToResolved;
      m.scale.setScalar(pulse * formationScale);

      // Brighter, more visible nodes
      const mat = m.material as THREE.MeshBasicMaterial;
      const baseOpacity = 0.5 + chaosToCluster * 0.15 + clusterToResolved * 0.35;
      mat.opacity = Math.min(1, baseOpacity);

      // Color: bright blue during chaos, intensifies during formation
      const r = 0.18 + clusterToResolved * 0.1;
      const g = 0.22 + clusterToResolved * 0.1;
      const b = 1.0;
      mat.color.setRGB(r, g, b);

      // Glow halos
      const glow = glowRefs.current[i];
      if (glow) {
        glow.position.copy(m.position);
        const glowReveal = cinematicStep(0.82 + nodeDelay, 0.92 + nodeDelay, p);
        const glowM = glow.material as THREE.MeshBasicMaterial;
        const glowPulse = Math.sin(t * 2.2 + i * 1.1) * 0.15 + 0.85;
        glowM.opacity = glowReveal * 0.4 * glowPulse;
        const glowScale = 1.0 + clusterToResolved * 0.8 + breathPulse * 0.3;
        glow.scale.setScalar(glowScale);
        glow.lookAt(state.camera.position);
      }
    }

    // --- Ambient floating particles (always visible, add depth) ---
    for (let i = 0; i < ambient.length; i++) {
      const m = ambientRefs.current[i];
      if (!m) continue;
      const a = ambient[i];

      // Gentle floating drift
      const driftX = Math.sin(t * a.speed + a.phase) * 0.3;
      const driftY = Math.cos(t * a.speed * 0.7 + a.phase * 1.5) * 0.2;
      const driftZ = Math.sin(t * a.speed * 0.5 + a.phase * 2) * 0.15;

      m.position.set(
        a.position.x + driftX,
        a.position.y + driftY,
        a.position.z + driftZ
      );

      // Pulsing opacity
      const mat = m.material as THREE.MeshBasicMaterial;
      const pulse = Math.sin(t * 1.5 + a.phase) * 0.25 + 0.55;
      mat.opacity = pulse * (0.3 + a.depth * 0.3);
    }

    // --- Connection lines between ZEUS nodes ---
    if (lineGroupRef.current) {
      lineGroupRef.current.children.forEach((child, idx) => {
        const ln = child as THREE.Line;
        const mat = ln.material as THREE.LineBasicMaterial;
        if (mat) {
          const lineDelay = (idx / links.length) * 0.04;
          const lineReveal = cinematicStep(0.88 + lineDelay, 0.96 + lineDelay, p);
          const pulse = Math.sin(t * 3 + idx * 0.8) * 0.15 + 0.85;
          mat.opacity = lineReveal * 0.6 * pulse;
          mat.transparent = true;
        }
      });
    }

    // --- Ambient web connections (faint, always visible) ---
    if (ambientLineGroupRef.current) {
      ambientLineGroupRef.current.children.forEach((child, idx) => {
        const ln = child as THREE.Line;
        const mat = ln.material as THREE.LineBasicMaterial;
        if (mat) {
          const pulse = Math.sin(t * 0.8 + idx * 1.2) * 0.1 + 0.15;
          mat.opacity = pulse;
          mat.transparent = true;
        }
      });
    }

    // --- Group rotation ---
    if (groupRef.current) {
      const overallFormation = cinematicStep(0.65, 0.90, p);

      if (overallFormation < 0.3) {
        const rotSpeed = 0.003 * (1 - overallFormation * 3.3);
        groupRef.current.rotation.y += rotSpeed;
        groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.05;
      } else {
        const settleStrength = (overallFormation - 0.3) / 0.7;
        const eased = settleStrength * settleStrength * (3 - 2 * settleStrength);
        const currentY = groupRef.current.rotation.y;
        const targetY = Math.round(currentY / (Math.PI * 2)) * (Math.PI * 2);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(currentY, targetY, 0.03 * eased);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.03 * eased);
      }

      if (overallFormation > 0.95) {
        const sway = Math.sin(t * 0.4) * 0.008;
        groupRef.current.rotation.y += sway;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient floating particles — always visible, fill space */}
      {ambient.map((a, i) => (
        <mesh
          key={`amb-${i}`}
          ref={(el) => { ambientRefs.current[i] = el; }}
          position={a.position}
        >
          <sphereGeometry args={[a.size, 8, 8]} />
          <meshBasicMaterial
            color={a.depth > 0.6 ? "#C9A646" : "#4f6fff"}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
      {/* Ambient web connections */}
      <group ref={ambientLineGroupRef}>
        {ambientLinks.map(([a, b], i) => (
          <Line
            key={`aweb-${i}`}
            points={[nodes[a].chaos, nodes[b].chaos]}
            color="#3b4fff"
            lineWidth={0.4}
            transparent
            opacity={0.08}
          />
        ))}
      </group>
      {/* Main ZEUS nodes */}
      {nodes.map((n, i) => (
        <mesh key={`node-${i}`} ref={(el) => { meshRefs.current[i] = el; }} position={n.chaos}>
          <sphereGeometry args={[n.size, 14, 14]} />
          <meshBasicMaterial color="#1D2BFF" transparent opacity={0.5} />
        </mesh>
      ))}
      {/* Glow halos */}
      {nodes.map((n, i) => (
        <mesh
          key={`glow-${i}`}
          ref={(el) => { glowRefs.current[i] = el; }}
          position={n.chaos}
          geometry={glowGeo}
          material={glowMat.clone()}
        />
      ))}
      {/* ZEUS connection lines */}
      <group ref={lineGroupRef}>
        {links.map(([a, b], i) => (
          <Line
            key={i}
            points={[nodes[a].resolved, nodes[b].resolved]}
            color="#3b4fff"
            lineWidth={1}
            transparent
            opacity={0}
          />
        ))}
      </group>
    </group>
  );
}

export function NeuralNetwork3D({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={1.4} />
        <NetworkBody progress={progress} />
      </Canvas>
    </div>
  );
}
