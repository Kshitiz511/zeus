"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardCheck,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

const chapters = ["Signal", "Constraint", "System", "Proof", "Next"];

const metrics = [
  { value: "500%", label: "Top documented revenue increase" },
  { value: "109%", label: "Year over year sales growth case result" },
  { value: "5.0", label: "Average client rating" },
  { value: "10/10", label: "Median referral score" },
];

const ecosystem = [
  {
    icon: Users,
    title: "Training & Development",
    body: "Leaders trained for the execution burden strategy creates.",
    href: "/services/training-development",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    body: "Plans translated into KPI architecture, cadence, and ownership.",
    href: "/services/strategic-planning",
  },
  {
    icon: BrainCircuit,
    title: "AI Readiness",
    body: "Roadmaps, pilots, governance, and adoption tied to business value.",
    href: "/services/ai-readiness",
  },
  {
    icon: BriefcaseBusiness,
    title: "Fractional CXO",
    body: "Senior operators embedded where momentum is constrained.",
    href: "/services/fractional-cxo",
  },
];

const constraints = [
  "Strategy is visible, but not connected to operating rhythm.",
  "Leadership capacity is stretched across too many priorities.",
  "AI tools are active, but governance and ROI are not.",
];

function ZeusThreeScene({ activeStep }: { activeStep: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(activeStep);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const mount = mountRef.current;
    const storyRoot = document.querySelector<HTMLElement>("[data-zeus-story-root]");
    if (!mount || !storyRoot) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches || Boolean(prefersReducedMotion);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    gsap.registerPlugin(ScrollTrigger);

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.6));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.dataset.zeusThree = "true";
    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.25, isMobile ? 7.2 : 6.1);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 4, 5);
    const goldLight = new THREE.PointLight(0xf2c94c, 42, 18);
    goldLight.position.set(-3.5, 2, 3.5);
    const blueLight = new THREE.PointLight(0x0ea5e9, 34, 16);
    blueLight.position.set(3.5, -2, 3);
    scene.add(ambientLight, keyLight, goldLight, blueLight);

    const storyGroup = new THREE.Group();
    const nodeGroup = new THREE.Group();
    const ringGroup = new THREE.Group();
    scene.add(storyGroup);
    storyGroup.add(ringGroup, nodeGroup);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      roughness: 0.36,
      metalness: 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.18,
      transmission: 0.18,
      thickness: 0.6,
      emissive: 0x0f172a,
      emissiveIntensity: 0.08,
    });
    const blueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0369a1,
      roughness: 0.42,
      metalness: 0.12,
      clearcoat: 0.6,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.08,
    });
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf2c94c,
      roughness: 0.32,
      metalness: 0.2,
      clearcoat: 0.7,
      emissive: 0xb7791f,
      emissiveIntensity: 0.1,
    });
    const slateMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x334155,
      roughness: 0.58,
      metalness: 0.1,
      clearcoat: 0.35,
    });

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(isMobile ? 0.88 : 1.14, 4), coreMaterial);
    storyGroup.add(core);

    const zBarA = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.16, 0.16), goldMaterial);
    const zBarB = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.16, 0.16), goldMaterial);
    const zSlash = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.15, 0.17), goldMaterial);
    zBarA.position.set(0, 0.38, 0.94);
    zBarB.position.set(0, -0.38, 0.94);
    zSlash.position.set(0, 0, 0.95);
    zSlash.rotation.z = -0.72;
    core.add(zBarA, zBarB, zSlash);

    const torusA = new THREE.Mesh(new THREE.TorusGeometry(isMobile ? 1.9 : 2.38, 0.012, 16, 180), blueMaterial);
    const torusB = new THREE.Mesh(new THREE.TorusGeometry(isMobile ? 2.55 : 3.05, 0.01, 16, 180), slateMaterial);
    const torusC = new THREE.Mesh(new THREE.TorusGeometry(isMobile ? 1.4 : 1.78, 0.008, 16, 180), goldMaterial);
    torusA.rotation.x = Math.PI / 2.8;
    torusB.rotation.y = Math.PI / 2.4;
    torusC.rotation.x = Math.PI / 2;
    torusC.rotation.z = Math.PI / 5;
    ringGroup.add(torusA, torusB, torusC);

    const nodePositions = [
      new THREE.Vector3(-2.55, 1.05, 0.15),
      new THREE.Vector3(2.35, 0.95, -0.1),
      new THREE.Vector3(-1.9, -1.55, 0.35),
      new THREE.Vector3(2.05, -1.45, 0.1),
    ];
    const nodeMaterials = [blueMaterial, goldMaterial, slateMaterial, blueMaterial];
    const nodes = nodePositions.map((position, index) => {
      const node = new THREE.Mesh(new THREE.SphereGeometry(isMobile ? 0.15 : 0.2, 32, 32), nodeMaterials[index]);
      node.position.copy(position.multiplyScalar(isMobile ? 0.66 : 1));
      nodeGroup.add(node);
      return node;
    });

    nodes.forEach((node) => {
      const points = [new THREE.Vector3(0, 0, 0), node.position.clone()];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x8ecae6, transparent: true, opacity: 0.42 }));
      nodeGroup.add(line);
    });

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = isMobile ? 70 : 130;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 10;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xe0f2fe, size: 0.015, transparent: true, opacity: 0.55 })
    );
    scene.add(particles);

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", resize);

    let frameId = 0;
    const render = () => {
      const step = activeStepRef.current;
      if (!reduceMotion) {
        storyGroup.rotation.y += 0.002 + step * 0.00055;
        ringGroup.rotation.z += 0.0014;
        particles.rotation.y -= 0.0008;
        nodes.forEach((node, index) => {
          node.scale.setScalar(1 + Math.sin(Date.now() * 0.0015 + index) * 0.045);
        });
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };
    render();

    const triggers: ScrollTrigger[] = [];
    let ctx: gsap.Context | undefined;

    if (!reduceMotion && !isMobile) {
      ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: storyRoot,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        timeline
          .to(storyGroup.rotation, { x: 0.52, y: Math.PI * 0.85, z: -0.12, ease: "none" }, 0)
          .to(camera.position, { x: -0.65, y: 0.4, z: 5.2, ease: "none" }, 0)
          .to(core.scale, { x: 0.82, y: 0.82, z: 0.82, ease: "none" }, 0.12)
          .to(ringGroup.scale, { x: 1.22, y: 1.22, z: 1.22, ease: "none" }, 0.18)
          .to(nodeGroup.rotation, { z: Math.PI * 0.26, x: -0.18, ease: "none" }, 0.28)
          .to(camera.position, { x: 0.72, y: -0.2, z: 4.6, ease: "none" }, 0.46)
          .to(storyGroup.rotation, { x: -0.15, y: Math.PI * 1.62, z: 0.18, ease: "none" }, 0.48)
          .to(core.scale, { x: 1.18, y: 1.18, z: 1.18, ease: "none" }, 0.7)
          .to(ringGroup.rotation, { x: Math.PI * 0.75, y: Math.PI * 0.55, ease: "none" }, 0.72)
          .to(camera.position, { x: 0, y: 0.1, z: 5.8, ease: "none" }, 0.82);

        gsap.utils.toArray<HTMLElement>("[data-story-step]").forEach((section, index) => {
          const trigger = ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              activeStepRef.current = index;
            },
            onEnterBack: () => {
              activeStepRef.current = index;
            },
          });
          triggers.push(trigger);
        });
      }, storyRoot);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      triggers.forEach((trigger) => trigger.kill());
      ctx?.revert();
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
          object.geometry?.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material?.dispose();
          }
        }
      });
      renderer.domElement.remove();
    };
  }, [prefersReducedMotion]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}

function ChapterShell({
  children,
  className = "",
  step,
}: {
  children: React.ReactNode;
  className?: string;
  step: number;
}) {
  return (
    <section data-story-step={step} className={`relative flex min-h-screen items-center py-28 ${className}`}>
      <div className="z-container">{children}</div>
    </section>
  );
}

export function ZeusScrollStory() {
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-story-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveStep(Number((visible.target as HTMLElement).dataset.storyStep ?? 0));
        }
      },
      { threshold: [0.35, 0.55, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div data-zeus-story-root className="story-shell bg-[var(--zeus-navy)] text-white">
      <div className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_36%,rgba(14,165,233,0.24),transparent_34%),linear-gradient(140deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
        <ZeusThreeScene activeStep={activeStep} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.26)_44%,rgba(2,6,23,0.66)_100%)]" />
      </div>

      <div className="relative z-10 -mt-[100vh]">
        <nav className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-lg border border-white/[0.15] bg-white/[0.08] px-2 py-2 text-xs font-bold text-white/70 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:flex">
          {chapters.map((chapter, index) => (
            <a
              key={chapter}
              href={`#story-${index}`}
              className={`rounded-md px-3 py-2 transition-colors ${
                activeStep === index ? "bg-white text-[var(--zeus-navy)]" : "hover:bg-white/[0.10] hover:text-white"
              }`}
            >
              {chapter}
            </a>
          ))}
        </nav>

        <ChapterShell step={0} className="pt-36" >
          <div id="story-0" className="max-w-4xl">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow text-[var(--zeus-gold-light)]">ZEUS CONSULTING SERVICES</span>
              <h1 className="mt-5 max-w-5xl text-white">Executive consulting that turns strategy into operating momentum.</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                Zeus aligns strategy, leadership development, AI readiness, and fractional executive capacity into one measurable system for sustainable business growth.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/book-a-call?source=home_story_hero" className="btn-gold">
                  Book a Strategy Call
                  <ArrowRight size={16} />
                </Link>
                <Link href="/results" className="btn-secondary btn-on-dark">
                  See Results
                  <BarChart3 size={16} />
                </Link>
              </div>
              <div className="story-glass mt-10 grid max-w-3xl gap-3 p-4 text-sm text-white/[0.78] md:grid-cols-3">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[var(--zeus-gold-light)]" />
                  State of Florida Approved Vendor
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} className="text-[var(--zeus-gold-light)]" />
                  Senior-led delivery
                </span>
                <span className="flex items-center gap-2">
                  <ClipboardCheck size={16} className="text-[var(--zeus-gold-light)]" />
                  Implementation first
                </span>
              </div>
            </motion.div>
          </div>
        </ChapterShell>

        <ChapterShell step={1}>
          <div id="story-1" className="ml-auto max-w-2xl">
            <div className="story-glass p-6 md:p-8">
              <span className="eyebrow text-[var(--zeus-gold-light)]">THE CONSTRAINT</span>
              <h2 className="mt-4 text-white">The business is not short on initiatives. It is short on a system.</h2>
              <div className="mt-7 space-y-3">
                {constraints.map((constraint) => (
                  <div key={constraint} className="story-clay flex gap-3 p-4">
                    <Target size={18} className="mt-1 shrink-0 text-[var(--zeus-gold-light)]" />
                    <p className="text-sm font-semibold text-white/80">{constraint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ChapterShell>

        <ChapterShell step={2}>
          <div id="story-2" className="max-w-5xl">
            <span className="eyebrow text-[var(--zeus-gold-light)]">THE BUSINESS SUSTAINABILITY ECOSYSTEM</span>
            <h2 className="mt-4 max-w-3xl text-white">Four practices become one operating system.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {ecosystem.map((item) => (
                <Link key={item.title} href={item.href} className="story-clay group grid min-h-[180px] gap-5 p-5 md:grid-cols-[44px_1fr]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[var(--zeus-blue)] shadow-[inset_0_-10px_18px_rgba(3,105,161,0.12)]">
                    <item.icon size={22} />
                  </span>
                  <span>
                    <span className="block font-heading text-xl font-bold text-white">{item.title}</span>
                    <span className="mt-3 block text-sm leading-6 text-white/[0.74]">{item.body}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--zeus-gold-light)]">
                      Explore
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ChapterShell>

        <ChapterShell step={3}>
          <div id="story-3" className="ml-auto max-w-4xl">
            <div className="story-glass p-6 md:p-8">
              <span className="eyebrow text-[var(--zeus-gold-light)]">PROOF OF MOTION</span>
              <h2 className="mt-4 max-w-3xl text-white">The system is judged by outcomes, not activity.</h2>
              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="story-clay p-4">
                    <p className="font-heading text-3xl font-extrabold text-[var(--zeus-gold-light)] md:text-4xl">{metric.value}</p>
                    <p className="mt-3 text-xs font-bold leading-5 text-white/[0.72]">{metric.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/results" className="btn-secondary btn-on-dark mt-8">
                Review Case Results
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ChapterShell>

        <ChapterShell step={4} className="pb-36">
          <div id="story-4" className="mx-auto max-w-3xl text-center">
            <div className="story-glass p-7 md:p-10">
              <span className="eyebrow justify-center text-[var(--zeus-gold-light)]">START HERE</span>
              <h2 className="mt-4 text-white">Find the constraint before you buy the solution.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/[0.78]">
                Book a 20-minute strategy call with a senior consultant and leave with a clearer view of the next operating move.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/book-a-call?source=home_story_final" className="btn-gold">
                  Book a Strategy Call
                  <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-secondary btn-on-dark">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </ChapterShell>
      </div>
    </div>
  );
}
