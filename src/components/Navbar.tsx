"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  Menu,
  Target,
  Users,
  X,
} from "lucide-react";

const serviceItems = [
  {
    label: "Training & Development",
    href: "/services/training-development",
    desc: "Leader academies, coaching, and custom curriculum",
    icon: Users,
  },
  {
    label: "Strategic Planning",
    href: "/services/strategic-planning",
    desc: "Operating cadence, KPIs, and execution architecture",
    icon: Target,
  },
  {
    label: "AI Readiness",
    href: "/services/ai-readiness",
    desc: "Roadmaps, pilots, governance, and adoption",
    icon: BrainCircuit,
  },
  {
    label: "Fractional CXO",
    href: "/services/fractional-cxo",
    desc: "Senior operating leadership without a full-time hire",
    icon: BriefcaseBusiness,
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const desktopNavItemBase =
    "inline-flex h-11 cursor-pointer items-center rounded-xl border px-5 text-[15px] font-semibold transition-all duration-200";
  const desktopNavItemActive =
    "border-[var(--zeus-blue)] bg-[color-mix(in_srgb,var(--zeus-blue)_9%,white)] text-[var(--zeus-blue)] shadow-[0_8px_20px_rgba(29,43,255,0.12)]";
  const desktopNavItemIdle =
    "border-transparent text-[var(--zeus-black)] hover:border-[var(--zeus-line)] hover:bg-[var(--zeus-gray-100)] hover:text-[var(--zeus-blue)]";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--zeus-line)] bg-white">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 md:px-10">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Zeus home">
              <Image src="/brand/image.png" alt="Zeus logo" width={126} height={62} priority className="h-9 w-auto md:h-10" />
            </Link>

            <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <Link
                      href={link.href}
                      className={`${desktopNavItemBase} gap-1.5 ${isActive(link.href) ? desktopNavItemActive : desktopNavItemIdle
                        }`}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full w-[380px] pt-2"
                        >
                          <div className="rounded-lg border border-[var(--zeus-line)] bg-white p-2 shadow-[var(--shadow-elevated)]">
                            {serviceItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="grid grid-cols-[36px_1fr] gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-[var(--zeus-gray-100)]"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--zeus-sky)] text-[var(--zeus-blue)]">
                                  <item.icon size={16} strokeWidth={1.8} />
                                </span>
                                <span>
                                  <span className="block text-[13px] font-semibold text-[var(--zeus-black)]">{item.label}</span>
                                  <span className="block text-[11px] text-[var(--zeus-muted)]">{item.desc}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${desktopNavItemBase} ${isActive(link.href) ? desktopNavItemActive : desktopNavItemIdle
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right: CTA */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="hidden md:inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[var(--zeus-blue)] px-5 py-2 text-[14px] font-semibold transition-opacity hover:opacity-90 min-w-[110px]"
              style={{ color: "#FFFFFF" }}
            >
              Book a Call
              <ArrowRight size={14} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--zeus-black)] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white px-5 pb-8 pt-24 md:hidden"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-12 items-center rounded-xl px-4 text-[16px] font-semibold transition-colors ${isActive(link.href) ? "bg-[var(--zeus-sky)] text-[var(--zeus-blue)]" : "text-[var(--zeus-black)] hover:bg-[var(--zeus-gray-100)]"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 space-y-2 rounded-xl border border-[var(--zeus-line)] bg-[var(--zeus-gray-100)]/50 p-3">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="grid min-h-12 grid-cols-[30px_1fr] items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-[var(--zeus-slate)] hover:bg-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--zeus-sky)] text-[var(--zeus-blue)]">
                    <item.icon size={14} strokeWidth={1.9} />
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--zeus-blue)] px-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              <span className="inline-flex items-center gap-2">
                Book a Call
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}
