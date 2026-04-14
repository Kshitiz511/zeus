"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, BarChart3, Shield, Users, Brain } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const services = [
  { icon: Zap, title: "Marketing & Branding", desc: "Brand positioning, growth campaigns, and digital marketing strategy that drives measurable results and builds lasting customer relationships.", href: "/services/marketing", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { icon: BarChart3, title: "Finance", desc: "Financial modeling, capital strategy, and funding guidance to fuel sustainable business growth and secure your financial future.", href: "/services/finance", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { icon: Shield, title: "Tax Strategy", desc: "Optimized planning and compliance strategies to maximize your financial assets and minimize tax burden.", href: "/services/tax", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80" },
  { icon: Users, title: "Human Resources", desc: "Talent acquisition, culture design, and team retention programs that build winning teams and foster growth.", href: "/services/hr", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" },
  { icon: Shield, title: "Cybersecurity", desc: "Comprehensive security assessments, compliance frameworks, and advanced threat protection for your business.", href: "/services/cybersecurity", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
  { icon: Brain, title: "Business Development", desc: "Market expansion, revenue diversification, and strategic partnership playbooks for accelerated growth.", href: "/services/business-dev", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Business" fill className="object-cover opacity-12" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="relative z-container text-center" style={{ maxWidth: "900px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Our Services</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              Comprehensive <span className="text-zeus-gold">Expertise</span>
            </h1>
            <p className="section-subtitle mx-auto" style={{ fontSize: "1.15rem" }}>
              Bringing together specialists across key business disciplines, offering a centralized approach to complex challenges.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <StaggerContainer className="space-y-8">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="block group cursor-pointer">
                  <div className={`glass-card overflow-hidden grid lg:grid-cols-5 ${i % 2 === 1 ? "" : ""}`}>
                    <div className={`relative h-64 lg:h-auto lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zeus-navy/50 hidden lg:block" />
                    </div>
                    <div className={`p-8 lg:p-10 lg:col-span-3 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="w-14 h-14 rounded-xl bg-zeus-gold/10 flex items-center justify-center mb-5 group-hover:bg-zeus-gold/20 transition-colors">
                        <service.icon size={26} className="text-zeus-gold" />
                      </div>
                      <h3 className="text-2xl text-zeus-white group-hover:text-zeus-gold transition-colors mb-4">{service.title}</h3>
                      <p className="text-zeus-text-secondary leading-relaxed mb-6" style={{ fontSize: "1.05rem" }}>{service.desc}</p>
                      <div className="flex items-center gap-2 text-zeus-gold font-medium" style={{ fontSize: "0.95rem" }}>
                        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
