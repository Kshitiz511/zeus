"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function EcosystemOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Gold particle system
  const particlePositions = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.8;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.12;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.06) * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        {/* Core orb */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 3]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#0369a1"
            emissiveIntensity={0.15}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial
            color="#020617"
            emissive="#f2c94c"
            emissiveIntensity={0.08}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Orbital ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[1.7, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#f2c94c"
            emissive="#f2c94c"
            emissiveIntensity={0.5}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Second ring */}
        <mesh rotation={[Math.PI / 3, 0, Math.PI / 6]}>
          <torusGeometry args={[2.0, 0.008, 16, 100]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
            transparent
            opacity={0.25}
          />
        </mesh>

        {/* Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particlePositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#f2c94c"
            size={0.025}
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  );
}

/**
 * Hero 3D scene — rotating ecosystem orb with gold particles and orbital rings.
 */
export default function HeroOrb() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <pointLight position={[-3, -2, 4]} intensity={0.4} color="#0ea5e9" />
        <EcosystemOrb />
      </Canvas>
    </div>
  );
}
