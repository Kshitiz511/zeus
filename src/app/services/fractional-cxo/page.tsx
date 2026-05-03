import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function FractionalCXOPage() {
  return (
    <ServiceDetailPage
      eyebrow="FRACTIONAL CXO"
      title="Senior operating leadership without the full-time executive hire."
      intro="Zeus embeds experienced executive leadership for companies that need accountable ownership across operations, strategy, AI, or transformation."
      primaryCtaSource="cxo_hero"
      secondaryHref="#deliverables"
      secondaryLabel="See Roles"
      constraintTitle="Some business problems need an executive in the seat."
      constraints={[
        "Growth has outpaced the founder or management team's operating capacity.",
        "A transformation, AI program, or turnaround needs senior ownership.",
        "The company needs to define the role before committing to a full-time hire.",
      ]}
      deliverables={[
        { title: "Fractional COO", desc: "Operating rhythm, accountability, process discipline, and execution ownership." },
        { title: "Fractional Chief Strategy Officer", desc: "Growth thesis, planning cadence, strategic priorities, and leadership alignment." },
        { title: "Fractional Chief AI Officer", desc: "AI roadmap, governance, adoption, pilot oversight, and capability buildout." },
        { title: "Transformation leadership", desc: "Senior ownership for large-scale change, integration, or operating model shifts." },
      ]}
      methodTitle="Embedded leadership with clear scope and cadence."
      method={[
        { step: "01", title: "Scope", desc: "Define the role, outcomes, cadence, authority, and decision rights." },
        { step: "02", title: "Embed", desc: "Join the leadership rhythm and take ownership of the agreed priorities." },
        { step: "03", title: "Execute", desc: "Drive milestones, board-ready updates, and cross-functional accountability." },
        { step: "04", title: "Transition", desc: "Sustain the function, prepare a hire, or continue fractional support." },
      ]}
      proofTitle="Fractional work is measured by ownership, not advice."
      proof={[
        { metric: "1-3", label: "Days per week for a typical engagement" },
        { metric: "6+", label: "Months for most fractional scopes" },
        { metric: "100%", label: "Role-specific deliverables agreed in scoping" },
      ]}
      faqs={[
        { q: "How long do engagements run?", a: "Most fractional engagements run 6 to 18 months, depending on role scope and transition plan." },
        { q: "Is the fractional executive on our payroll?", a: "No. The role is engaged as consulting support, giving you leadership capacity without employment overhead." },
        { q: "Can this transition into a full-time hire?", a: "Yes. Many scopes define the role by living it, then support a more precise hire later." },
        { q: "How do you handle confidentiality?", a: "Engagements begin with confidentiality terms, and we avoid serving directly competing companies at the same time." },
      ]}
    />
  );
}
