import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const footerSections = {
  Services: [
    { label: "Training & Development", href: "/services/training-development" },
    { label: "Strategic Planning", href: "/services/strategic-planning" },
    { label: "AI Readiness", href: "/services/ai-readiness" },
    { label: "Fractional CXO", href: "/services/fractional-cxo" },
  ],
  Company: [
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Call", href: "/book-a-call" },
  ],
};

const accolades = [
  { src: "/accolades/accolade-1.png", alt: "Pinnacle Taxx Solutions" },
  { src: "/accolades/accolade-2.png", alt: "Black Business Investment Corporation" },
  { src: "/accolades/accolade-3.png", alt: "Emerge Business Accelerator" },
  { src: "/accolades/accolade-4.png", alt: "Minerva Tech" },
];

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="z-container py-[var(--space-xl)]">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1.15fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Zeus home">
              <Image src="/brand/image.png" alt="Zeus logo" width={126} height={62} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm">
              Executive consulting for strategy, leadership development, AI readiness, and fractional operating leadership.
            </p>
            <Link href="/book-a-call" className="btn-gold mt-6 min-h-11 px-4 text-sm">
              Book a Call
              <ArrowRight size={15} />
            </Link>
          </div>

          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h2 className="font-heading text-sm font-bold text-white/50">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-heading text-sm font-bold text-white/50">Get in Touch</h2>
            <div className="mt-4 space-y-3">
              <a href="tel:888-448-0748" className="flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white">
                <Phone size={15} />
                888-448-0748
              </a>
              <a
                href="mailto:info@zeusconsultingservices.com"
                className="flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
              >
                <Mail size={15} />
                info@zeusconsultingservices.com
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/75">
                <MapPin size={15} className="mt-1 shrink-0" />
                <span>
                  515 North Flagler Dr.
                  <br />
                  West Palm Beach, FL 33401
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-bold text-white/40">Selected partner and accelerator ecosystems</p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {accolades.map((item) => (
              <div key={item.src} className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-4">
                <Image src={item.src} alt={item.alt} width={210} height={72} className="h-auto max-h-12 w-auto opacity-[0.82]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Zeus Consulting Services Corporation. All rights reserved.</p>
          <p>State of Florida Approved Vendor.</p>
        </div>
      </div>
    </footer>
  );
}
