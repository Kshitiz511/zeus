import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function AIReadinessPage() {
  return (
    <ServiceDetailPage
      eyebrow="AI READINESS"
      title="From AI curiosity to governed business capability."
      intro="We assess where AI can create measurable value, build the roadmap, launch practical pilots, and install the governance required for adoption."
      primaryCtaSource="ai_hero"
      secondaryHref="#deliverables"
      secondaryLabel="See AI Outputs"
      constraintTitle="Most AI activity is not yet operating capability."
      constraints={[
        "Teams are testing tools without a shared roadmap, data policy, or ROI model.",
        "Use cases are selected by novelty instead of measurable business value.",
        "Governance, training, and adoption are treated as afterthoughts.",
      ]}
      deliverables={[
        { title: "AI readiness assessment", desc: "A scored diagnostic covering use cases, data, governance, talent, and operating capacity." },
        { title: "AI strategy and roadmap", desc: "Prioritized use cases with value, risk, dependencies, sequencing, and adoption path." },
        { title: "Pilot implementation", desc: "Focused pilots with success metrics, workflow design, and human-in-the-loop controls." },
        { title: "Governance framework", desc: "Policy, access standards, vendor inventory, model risk, and training expectations." },
      ]}
      methodTitle="Assess, architect, activate, and anchor."
      method={[
        { step: "01", title: "Assess", desc: "Map capability, data readiness, governance, and business use cases." },
        { step: "02", title: "Architect", desc: "Prioritize use cases and design the implementation roadmap." },
        { step: "03", title: "Activate", desc: "Launch the pilot with clear operating metrics and adoption support." },
        { step: "04", title: "Anchor", desc: "Install governance, training, and sustainment for responsible scale." },
      ]}
      proofTitle="AI work should be judged by business value and control."
      proof={[
        { metric: "3-4", label: "Weeks for a typical readiness diagnostic" },
        { metric: "6-12", label: "Weeks for a practical pilot sprint" },
        { metric: "100%", label: "Governance included before scaled rollout" },
      ]}
      faqs={[
        { q: "Are you a software vendor?", a: "No. Zeus is tool-agnostic. We select for fit, then help design and implement the operating system around the tools." },
        { q: "How do you handle privacy and security?", a: "Every engagement starts with data classification, access standards, model risk, vendor review, and relevant regulatory considerations." },
        { q: "Do you build custom models?", a: "Sometimes, but only when the use case requires it. Many organizations get better ROI from well-implemented existing tools." },
        { q: "How do you measure AI ROI?", a: "Each pilot is tied to time saved, cost reduced, revenue created, quality improved, or risk reduced before deployment begins." },
      ]}
    />
  );
}
