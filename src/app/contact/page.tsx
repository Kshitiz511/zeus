"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/Animations";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Office" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-zeus-midnight/85" />
        </div>
        <div className="page-hero-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-container text-center" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="section-label justify-center mb-6">Get In Touch</span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }} className="text-zeus-white mb-6">
              Work <span className="text-zeus-gold">With Us</span>
            </h1>
            <p className="text-zeus-text-secondary" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Ready to transform your business? Schedule a consultation with our team and discover how Zeus can help you scale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="gold-line" />

      {/* Contact Form + Info */}
      <section style={{ paddingBlock: "var(--space-section)" }}>
        <div className="z-container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl text-zeus-white mb-8 font-serif">Let&apos;s Start a Conversation</h2>

                <div className="space-y-8 mb-12">
                  {[
                    { icon: Phone, label: "Phone", value: "888-448-0748", href: "tel:888-448-0748" },
                    { icon: Mail, label: "Email", value: "info@zeusconsultingservices.com", href: "mailto:info@zeusconsultingservices.com" },
                    { icon: MapPin, label: "Office", value: "515 North Flagler Dr.\nWest Palm Beach, FL 33401", href: "https://maps.app.goo.gl/7jjrYDCqntiJBxAg7" },
                    { icon: Clock, label: "Hours", value: "Mon-Fri | 9:00 AM - 6:00 PM EST", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zeus-gold/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-zeus-gold" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-zeus-muted mb-1 font-semibold">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-zeus-white-soft hover:text-zeus-gold transition-colors whitespace-pre-line cursor-pointer" style={{ fontSize: "1rem" }}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-zeus-white-soft whitespace-pre-line" style={{ fontSize: "1rem" }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map embed or image */}
                <div className="rounded-2xl overflow-hidden border border-zeus-gold/10 h-[240px] relative">
                  <Image src="https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80" alt="West Palm Beach" fill className="object-cover" />
                  <div className="absolute inset-0 bg-zeus-midnight/30" />
                  <div className="absolute bottom-4 left-4 glass-card-static px-4 py-2.5 text-sm text-zeus-white flex items-center gap-2">
                    <MapPin size={14} className="text-zeus-gold" /> West Palm Beach, FL
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-14 text-center">
                    <CheckCircle2 size={56} className="text-zeus-success mx-auto mb-5" />
                    <h3 className="text-2xl text-zeus-white mb-3 font-serif">Message Received</h3>
                    <p className="text-zeus-text-secondary" style={{ fontSize: "1.05rem" }}>
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Company</label>
                        <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="form-input" placeholder="Your company" />
                      </div>
                      <div>
                        <label className="form-label">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" placeholder="(555) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Service Interest</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-input">
                        <option value="">Select a service...</option>
                        <option value="marketing">Marketing & Branding</option>
                        <option value="finance">Finance</option>
                        <option value="tax">Tax Strategy</option>
                        <option value="hr">Human Resources</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="business-dev">Business Development</option>
                        <option value="startup">Business Startup</option>
                        <option value="ai">AI Implementation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Message *</label>
                      <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="form-input resize-none" placeholder="Tell us about your business and how we can help..." />
                    </div>

                    <button type="submit" className="btn-zeus-lg cursor-pointer">
                      <span className="flex items-center gap-2">Send Message <Send size={18} /></span>
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
