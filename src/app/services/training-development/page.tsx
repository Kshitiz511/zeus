import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export default function TrainingDevelopmentPage() {
  return (
    <ServiceDetailPage
      eyebrow="TRAINING & DEVELOPMENT"
      title="Develop the leaders your strategy depends on."
      intro="Zeus builds custom leadership academies, coaching engagements, and curriculum systems for managers and executives who need to execute in real operating conditions."
      primaryCtaSource="training_hero"
      secondaryHref="#deliverables"
      secondaryLabel="See Programs"
      constraintTitle="Promotions often happen faster than preparation."
      constraints={[
        "High-potential employees move into management without the operating tools the role requires.",
        "Mid-level leaders are expected to translate strategy without enough context or decision training.",
        "Executive teams need shared language, cadence, and standards for leading change.",
      ]}
      deliverables={[
        { title: "Leadership academies", desc: "Multi-cohort programs built around your strategic priorities and competency model." },
        { title: "Executive coaching", desc: "One-to-one coaching with measurable leadership outcomes and operating context." },
        { title: "Custom curriculum", desc: "Company-specific learning journeys, assessments, facilitation materials, and sustainment plans." },
        { title: "Strategic offsites", desc: "Focused leadership intensives that combine capability building with planning decisions." },
      ]}
      methodTitle="Diagnose, design, deliver, and sustain."
      method={[
        { step: "01", title: "Diagnose", desc: "Assess current capabilities, role expectations, and business priorities." },
        { step: "02", title: "Design", desc: "Build curriculum and exercises around the behaviors the strategy requires." },
        { step: "03", title: "Deliver", desc: "Facilitate with senior practitioners and real business scenarios." },
        { step: "04", title: "Sustain", desc: "Measure progress and embed the learning into operating routines." },
      ]}
      proofTitle="Development should create observable business behavior."
      proof={[
        { metric: "+60%", label: "Average CEO thinking test gain in a matched cohort" },
        { metric: "10/10", label: "Median referral score from Optimize U graduates" },
        { metric: "6-12", label: "Month range for typical academy programs" },
      ]}
      faqs={[
        { q: "How custom are the programs?", a: "Every program starts with a diagnostic of your team, strategy, competency needs, and operating environment." },
        { q: "Can you support remote or hybrid teams?", a: "Yes. The facilitation model can be delivered in person, hybrid, or fully remote." },
        { q: "Do you assess participants?", a: "Yes. Programs can include pre and post assessment, competency scoring, and completion documentation." },
        { q: "How do you measure ROI?", a: "We connect the program to promotion readiness, retention, engagement, and operating KPIs tied to the competencies being developed." },
      ]}
    />
  );
}
