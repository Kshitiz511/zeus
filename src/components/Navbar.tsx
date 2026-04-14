"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  BarChart3,
  Shield,
  Users,
  Brain,
  Rocket,
  GraduationCap,
  TrendingUp,
  Cpu,
  Building2,
  Stethoscope,
  ShoppingCart,
  Landmark,
  Factory,
  Wifi,
} from "lucide-react";

const serviceItems = [
  { label: "Marketing & Branding", href: "/services/marketing", icon: Zap, desc: "Brand positioning & digital strategy" },
  { label: "Finance", href: "/services/finance", icon: BarChart3, desc: "Financial modeling & capital strategy" },
  { label: "Tax Strategy", href: "/services/tax", icon: Shield, desc: "Optimized planning & compliance" },
  { label: "Human Resources", href: "/services/hr", icon: Users, desc: "Talent acquisition & retention" },
  { label: "Cybersecurity", href: "/services/cybersecurity", icon: Shield, desc: "Security assessments & protection" },
  { label: "Business Development", href: "/services/business-dev", icon: Brain, desc: "Market expansion playbooks" },
];

const solutionItems = [
  { label: "Business Startup", href: "/solutions/startup", icon: Rocket, desc: "Strategic planning for new ventures" },
  { label: "Training & Development", href: "/solutions/training", icon: GraduationCap, desc: "Expert-led cohort programs" },
  { label: "Business Optimization", href: "/solutions/optimization", icon: TrendingUp, desc: "Efficiency & profitability" },
  { label: "AI Implementation", href: "/solutions/ai", icon: Cpu, desc: "Custom AI strategies & automation" },
];

const industryItems = [
  { label: "Healthcare", href: "/industries/healthcare", icon: Stethoscope },
  { label: "Financial Services", href: "/industries/financial", icon: Landmark },
  { label: "Retail & E-Commerce", href: "/industries/retail", icon: ShoppingCart },
  { label: "Technology", href: "/industries/technology", icon: Wifi },
  { label: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

const navLinks = [
  { label: "About Zeus", href: "/about" },
  { label: "Services", href: "/services", megaMenu: "services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Solutions", href: "/solutions", megaMenu: "solutions" },
  { label: "Industries", href: "/industries", megaMenu: "industries" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-zeus-midnight/90 backdrop-blur-sm border-b border-white/5">
        <div className="z-container flex items-center justify-between" style={{ paddingBlock: "0.5rem" }}>
          <div className="flex items-center gap-6 text-zeus-text-secondary" style={{ fontSize: "0.8rem" }}>
            <a href="tel:888-448-0748" className="flex items-center gap-2 hover:text-zeus-gold transition-colors cursor-pointer">
              <Phone size={12} className="text-zeus-gold" /> 888-448-0748
            </a>
            <a href="mailto:info@zeusconsultingservices.com" className="flex items-center gap-2 hover:text-zeus-gold transition-colors cursor-pointer">
              <Mail size={12} className="text-zeus-gold" /> info@zeusconsultingservices.com
            </a>
          </div>
          <span className="text-zeus-muted" style={{ fontSize: "0.8rem" }}>Mon–Fri | 9:00 AM – 6:00 PM EST</span>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-zeus-midnight/90 backdrop-blur-2xl border-b border-zeus-gold/10 shadow-lg shadow-black/20"
            : "bg-zeus-midnight/50 backdrop-blur-xl"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="z-container">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zeus-gold to-zeus-gold-dark flex items-center justify-center">
                  <span className="text-zeus-midnight font-bold text-lg">Z</span>
                </div>
                <div className="absolute -inset-1.5 bg-zeus-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-zeus-white tracking-tight block text-lg">ZEUS</span>
                <span className="text-zeus-gold font-medium block text-[0.65rem] tracking-[0.2em] uppercase -mt-0.5">Consulting</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <div key={link.label} className="flex items-center gap-1">
                  <div
                    className="relative"
                    onMouseEnter={() => link.megaMenu ? handleMenuEnter(link.megaMenu) : setActiveMenu(null)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 px-5 py-2 font-medium text-zeus-white-soft hover:text-zeus-gold transition-colors duration-300 cursor-pointer rounded-lg hover:bg-zeus-gold/5"
                      style={{ fontSize: "0.95rem", minHeight: "44px" }}
                    >
                      {link.label}
                      {link.megaMenu && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeMenu === link.megaMenu ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>
                  </div>
                  {idx < navLinks.length - 1 && (
                    <span className="h-4 w-px bg-zeus-gold/20 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden lg:flex btn-zeus">
                <span>Work With Us</span>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-zeus-white flex items-center justify-center w-11 h-11 cursor-pointer"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full bg-zeus-navy/95 backdrop-blur-2xl border-b border-zeus-gold/10 shadow-2xl"
              onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
              onMouseLeave={handleMenuLeave}
            >
              <div className="z-container py-8">
                {activeMenu === "services" && (
                  <div>
                    <p className="text-zeus-gold text-sm font-semibold uppercase tracking-[0.15em] mb-6">Our Services</p>
                    <div className="grid grid-cols-3 gap-4">
                      {serviceItems.map((item) => (
                        <Link key={item.label} href={item.href} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zeus-gold/5 transition-all duration-200 cursor-pointer">
                          <div className="w-11 h-11 rounded-lg bg-zeus-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zeus-gold/20 transition-colors">
                            <item.icon size={20} className="text-zeus-gold" />
                          </div>
                          <div>
                            <p className="text-zeus-white font-medium group-hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }}>{item.label}</p>
                            <p className="text-zeus-text-secondary mt-0.5" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-zeus-gold/10">
                      <Link href="/services" className="text-zeus-gold hover:text-zeus-gold-light transition-colors font-medium flex items-center gap-2 cursor-pointer" style={{ fontSize: "0.9rem" }}>
                        View all services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}

                {activeMenu === "solutions" && (
                  <div>
                    <p className="text-zeus-gold text-sm font-semibold uppercase tracking-[0.15em] mb-6">Industry Solutions</p>
                    <div className="grid grid-cols-2 gap-4">
                      {solutionItems.map((item) => (
                        <Link key={item.label} href={item.href} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zeus-gold/5 transition-all duration-200 cursor-pointer">
                          <div className="w-11 h-11 rounded-lg bg-zeus-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zeus-gold/20 transition-colors">
                            <item.icon size={20} className="text-zeus-gold" />
                          </div>
                          <div>
                            <p className="text-zeus-white font-medium group-hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }}>{item.label}</p>
                            <p className="text-zeus-text-secondary mt-0.5" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMenu === "industries" && (
                  <div>
                    <p className="text-zeus-gold text-sm font-semibold uppercase tracking-[0.15em] mb-6">Industries We Serve</p>
                    <div className="grid grid-cols-3 gap-4">
                      {industryItems.map((item) => (
                        <Link key={item.label} href={item.href} className="group flex items-center gap-3 p-4 rounded-xl hover:bg-zeus-gold/5 transition-all duration-200 cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-zeus-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zeus-gold/20 transition-colors">
                            <item.icon size={18} className="text-zeus-gold" />
                          </div>
                          <span className="text-zeus-white font-medium group-hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }}>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-zeus-gold/10">
                      <Link href="/industries" className="text-zeus-gold hover:text-zeus-gold-light transition-colors font-medium flex items-center gap-2 cursor-pointer" style={{ fontSize: "0.9rem" }}>
                        View all industries <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-zeus-midnight/98 backdrop-blur-2xl overflow-y-auto"
            style={{ top: "72px" }}
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-medium text-zeus-white-soft hover:text-zeus-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.megaMenu === "services" && (
                    <div className="pl-4 space-y-1 mb-2">
                      {serviceItems.map((child) => (
                        <Link key={child.label} href={child.href} className="block py-2 text-zeus-text-secondary hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.megaMenu === "solutions" && (
                    <div className="pl-4 space-y-1 mb-2">
                      {solutionItems.map((child) => (
                        <Link key={child.label} href={child.href} className="block py-2 text-zeus-text-secondary hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.megaMenu === "industries" && (
                    <div className="pl-4 space-y-1 mb-2">
                      {industryItems.map((child) => (
                        <Link key={child.label} href={child.href} className="block py-2 text-zeus-text-secondary hover:text-zeus-gold transition-colors" style={{ fontSize: "0.95rem" }} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" className="btn-zeus w-full justify-center" onClick={() => setMobileOpen(false)}>
                  <span>Work With Us</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
