"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket, GraduationCap, TrendingUp, Cpu } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const solutions = [
  { title: "Business Startup", desc: "Comprehensive planning and proposal development to establish a clear, strategic foundation for new ventures.", href: "/solutions/startup", icon: Rocket, img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80" },
  { title: "Training & Development", desc: "Expert-led cohort programs that promote collaboration, skill development, and industry-specific learning.", href: "/solutions/training", icon: GraduationCap, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { title: "Business Optimization", desc: "Advanced analytical models and methodologies designed to enhance efficiency and maximize profitability.", href: "/solutions/optimization", icon: TrendingUp, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { title: "AI Implementation", desc: "Custom AI strategies tailored to industry-specific needs, integrating automation, predictive analytics, and innovative technology.", href: "/solutions/ai", icon: Cpu, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
];

export default function SolutionsPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Solutions" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container text-center" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Industry Solutions</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              A Hands-On <span className="text-zeus-gold">Consulting Model</span>
            </h1>
            <p className="section-subtitle mx-auto" style={{ fontSize: "1.15rem" }}>
              Solutions tailored to the unique needs of each business, leveraging emerging technologies and strategic frameworks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <StaggerItem key={sol.title}>
                <Link href={sol.href} className="block group h-full cursor-pointer">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={sol.img} alt={sol.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zeus-navy/90 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-zeus-gold/10 backdrop-blur-sm flex items-center justify-center border border-zeus-gold/20">
                          <sol.icon size={24} className="text-zeus-gold" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl text-zeus-white group-hover:text-zeus-gold transition-colors mb-3">{sol.title}</h3>
                      <p className="text-zeus-text-secondary leading-relaxed mb-5" style={{ fontSize: "1rem" }}>{sol.desc}</p>
                      <div className="flex items-center gap-2 text-zeus-gold font-medium" style={{ fontSize: "0.95rem" }}>
                        Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
