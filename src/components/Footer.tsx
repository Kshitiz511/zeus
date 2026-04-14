import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, LinkIcon } from "lucide-react";

const footerSections = {
  Company: [
    { label: "About Zeus", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Results", href: "/#results" },
    { label: "Contact Us", href: "/contact" },
  ],
  Services: [
    { label: "Marketing & Branding", href: "/services/marketing" },
    { label: "Finance", href: "/services/finance" },
    { label: "Tax Strategy", href: "/services/tax" },
    { label: "Human Resources", href: "/services/hr" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Business Development", href: "/services/business-dev" },
  ],
  Solutions: [
    { label: "Business Startup", href: "/solutions/startup" },
    { label: "Training & Development", href: "/solutions/training" },
    { label: "Business Optimization", href: "/solutions/optimization" },
    { label: "AI Implementation", href: "/solutions/ai" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Financial Services", href: "/industries/financial" },
    { label: "Retail & E-Commerce", href: "/industries/retail" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Government", href: "/industries/government" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-zeus-navy border-t border-zeus-gold/10">
      <div className="gold-line" />

      <div className="z-container" style={{ paddingBlock: "var(--space-xl) var(--space-lg)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zeus-gold to-zeus-gold-dark flex items-center justify-center">
                <span className="text-zeus-midnight font-bold text-lg">Z</span>
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-zeus-white tracking-tight block text-lg">ZEUS</span>
                <span className="text-zeus-gold font-medium block text-[0.6rem] tracking-[0.15em] uppercase -mt-0.5">Clarity. Strategy. Execution.</span>
              </div>
            </div>
            <p className="text-zeus-text-secondary leading-relaxed max-w-sm mb-6" style={{ fontSize: "0.95rem" }}>
              Clarity. Strategy. Execution. — We deliver Fortune 500-level consulting that drives measurable results for businesses ready to scale.
            </p>
            <div className="space-y-3">
              <a href="tel:888-448-0748" className="flex items-center gap-3 text-zeus-text-secondary hover:text-zeus-gold transition-colors cursor-pointer" style={{ fontSize: "0.95rem" }}>
                <Phone size={16} className="text-zeus-gold flex-shrink-0" /> 888-448-0748
              </a>
              <a href="mailto:info@zeusconsultingservices.com" className="flex items-center gap-3 text-zeus-text-secondary hover:text-zeus-gold transition-colors cursor-pointer" style={{ fontSize: "0.95rem" }}>
                <Mail size={16} className="text-zeus-gold flex-shrink-0" /> info@zeusconsultingservices.com
              </a>
              <a href="https://maps.app.goo.gl/7jjrYDCqntiJBxAg7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zeus-text-secondary hover:text-zeus-gold transition-colors cursor-pointer" style={{ fontSize: "0.95rem" }}>
                <MapPin size={16} className="text-zeus-gold flex-shrink-0" /> 515 N Flagler Dr, West Palm Beach, FL 33401
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-zeus-gold text-xs tracking-[0.15em] uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zeus-text-secondary hover:text-zeus-white transition-colors duration-200 flex items-center gap-1.5 group cursor-pointer" style={{ fontSize: "0.9rem" }}>
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-zeus-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zeus-gold/15 bg-zeus-gold/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeus-gold"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            <span className="text-zeus-text-secondary" style={{ fontSize: "0.85rem" }}>
              <span className="text-zeus-gold font-medium">State of Florida Approved</span> Consulting Vendor
            </span>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zeus-muted" style={{ fontSize: "0.8rem" }}>
            &copy; {new Date().getFullYear()} Zeus Consulting Services Corp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-zeus-muted hover:text-zeus-gold transition-colors cursor-pointer" style={{ fontSize: "0.8rem" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-zeus-muted hover:text-zeus-gold transition-colors cursor-pointer" style={{ fontSize: "0.8rem" }}>Terms of Service</Link>
            <a href="https://www.linkedin.com/company/zeus-consulting-services" target="_blank" rel="noopener noreferrer" className="text-zeus-muted hover:text-zeus-gold transition-colors flex items-center justify-center w-11 h-11 cursor-pointer" aria-label="LinkedIn">
              <LinkIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
