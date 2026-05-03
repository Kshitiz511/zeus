import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function StrategicPlanningPage() {
  return (
    <ServiceDetailPage
      eyebrow="STRATEGIC PLANNING"
      title="Strategy that survives contact with operating reality."
      intro="We connect strategy to cadence, KPIs, ownership, and optimization so leadership teams can execute the plan instead of revisiting it every quarter."
      primaryCtaSource="strategy_hero"
      secondaryHref="#deliverables"
      secondaryLabel="See Deliverables"
      constraintTitle="Most strategy work fails after the offsite."
      constraints={[
        "The plan is not connected to the weekly and monthly operating cadence.",
        "Owners, decision rights, and KPIs are unclear below the executive team.",
        "There is no system for adapting when markets, budgets, or capacity change.",
      ]}
      deliverables={[
        { title: "Strategic offsite design", desc: "Facilitated sessions that turn executive judgment into clear choices, tradeoffs, and priorities." },
        { title: "KPI architecture", desc: "A measurable scorecard with ownership, review rhythm, and decision triggers." },
        { title: "Operating cadence", desc: "Weekly, monthly, and quarterly routines that keep the strategy alive after launch." },
        { title: "Optimization roadmap", desc: "Process, cost-to-serve, throughput, and margin improvements sequenced by impact." },
      ]}
      methodTitle="A five-layer strategic operating system."
      method={[
        { step: "01", title: "Vision", desc: "Clarify long-range direction and the few choices that matter most." },
        { step: "02", title: "Strategy", desc: "Define positioning, growth thesis, and the moves that create advantage." },
        { step: "03", title: "Initiatives", desc: "Translate strategy into quarterly priorities with owners and milestones." },
        { step: "04", title: "Cadence", desc: "Install the meeting and reporting rhythm that keeps execution visible." },
      ]}
      proofTitle="Strategy is measured by execution."
      proof={[
        { metric: "8-16", label: "Weeks for a typical strategy and optimization sprint" },
        { metric: "90", label: "Day action plan produced from the operating system" },
        { metric: "100%", label: "Senior-led delivery model" },
      ]}
      faqs={[
        { q: "How is this different from a strategy firm?", a: "The work does not stop at the deck. We connect the plan to KPIs, cadence, owners, and implementation support." },
        { q: "What is the smallest engagement?", a: "A two-day strategic offsite is a common entry point. Many clients then move into quarterly rhythm or an embedded strategy role." },
        { q: "Do you work directly with leadership?", a: "Yes. Strategy fails when it is delegated away from decision makers. We work with the CEO and operating team." },
        { q: "Can you audit an existing strategy?", a: "Yes. We pressure-test the existing plan against vision, initiatives, cadence, outcomes, and accountability." },
      ]}
    />
  );
}
