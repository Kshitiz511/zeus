"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Stethoscope, ShoppingCart, Landmark, Factory, Wifi } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const industries = [
  { title: "Healthcare", desc: "Strategic consulting for healthcare organizations, from compliance to digital transformation.", href: "/industries/healthcare", icon: Stethoscope, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80" },
  { title: "Financial Services", desc: "Helping financial institutions navigate regulatory change and drive innovation.", href: "/industries/financial", icon: Landmark, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { title: "Retail & E-Commerce", desc: "Omnichannel strategy, customer experience, and digital commerce solutions.", href: "/industries/retail", icon: ShoppingCart, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { title: "Technology", desc: "Scaling tech companies from startup to enterprise with strategic guidance.", href: "/industries/technology", icon: Wifi, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { title: "Manufacturing", desc: "Operational excellence, supply chain optimization, and Industry 4.0 adoption.", href: "/industries/manufacturing", icon: Factory, img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { title: "Real Estate", desc: "Market analysis, portfolio strategy, and digital transformation for real estate.", href: "/industries/real-estate", icon: Building2, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
];

export default function IndustriesPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Industries" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container text-center" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Industries We Serve</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              Cross-Industry <span className="text-zeus-gold">Expertise</span>
            </h1>
            <p className="section-subtitle mx-auto" style={{ fontSize: "1.15rem" }}>
              Zeus works across 40+ industries, bringing cross-sector knowledge with industry-specific insight.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <Link href={ind.href} className="block group h-full cursor-pointer">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={ind.img} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zeus-navy/90 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-11 h-11 rounded-lg bg-zeus-gold/10 backdrop-blur-sm flex items-center justify-center border border-zeus-gold/20">
                          <ind.icon size={22} className="text-zeus-gold" />
                        </div>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl text-zeus-white group-hover:text-zeus-gold transition-colors mb-3">{ind.title}</h3>
                      <p className="text-zeus-text-secondary leading-relaxed mb-4" style={{ fontSize: "0.95rem" }}>{ind.desc}</p>
                      <div className="flex items-center gap-2 text-zeus-gold font-medium" style={{ fontSize: "0.9rem" }}>
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
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
