import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '200+', lbl: 'AI Roadmaps Built' },
  { val: '3.5x', lbl: 'Avg. ROI Multiple' },
  { val: '2wk', lbl: 'Strategy Delivery' },
  { val: '92%', lbl: 'Client Implementation Rate' },
];

const bento = [
  { icon: 'AUDIT', title: 'AI Readiness Assessment', desc: 'Comprehensive evaluation of your data infrastructure, team capabilities, technology stack, and organizational readiness for AI adoption — with an honest score, not a sales pitch.', wide: false },
  { icon: 'MAP', title: 'Strategic AI Roadmap', desc: 'Prioritized 12–24 month AI implementation plan with use cases ranked by ROI potential, feasibility, and strategic alignment — the blueprint your board can approve.', wide: true },
  { icon: 'ROI', title: 'Business Case & ROI Modeling', desc: 'Financial models that quantify AI investment returns — cost savings, revenue uplift, and efficiency gains with conservative, base, and optimistic scenarios.', wide: false },
  { icon: 'VEND', title: 'Vendor & Tool Selection', desc: 'Unbiased evaluation of build vs. buy decisions, platform comparisons, and vendor negotiations — we have no partnerships that bias our recommendations.', wide: false },
  { icon: 'GOV', title: 'AI Governance Framework', desc: 'Policies for responsible AI use — data privacy, model ethics, bias prevention, and compliance documentation for regulated industries.', wide: false },
  { icon: 'CHANGE', title: 'Change Management & Training', desc: 'Workforce readiness programs, AI literacy training, and organizational change plans that ensure adoption — not just deployment.', wide: false },
];

const useCases = [
  { num: '01', title: 'Enterprise AI Transformation', desc: 'Company-wide AI strategy for organizations ready to embed intelligence across operations, products, and customer experience.' },
  { num: '02', title: 'Startup AI Product Strategy', desc: 'Define AI-native product features, MVP scoping, and technical architecture for startups building AI into their core value proposition.' },
  { num: '03', title: 'Department-Level AI Adoption', desc: 'Focused AI strategy for sales, marketing, operations, or finance teams — quick wins that build momentum for broader adoption.' },
  { num: '04', title: 'AI Due Diligence', desc: 'Technical and strategic assessment of AI capabilities for M&A, investment decisions, and partnership evaluations.' },
];

const timeline = [
  { num: '01', title: 'Discovery', desc: 'Executive interviews, data audit, process mapping, and competitive AI landscape analysis.' },
  { num: '02', title: 'Assess', desc: 'Readiness scoring, use case identification, and feasibility analysis across your operation.' },
  { num: '03', title: 'Prioritize', desc: 'ROI-ranked use case portfolio with quick wins, medium-term, and strategic bets clearly defined.' },
  { num: '04', title: 'Roadmap', desc: 'Detailed implementation plan with timelines, budgets, team requirements, and success metrics.' },
  { num: '05', title: 'Execute', desc: 'Optional hands-on implementation support — we don\'t just advise, we build when you\'re ready.' },
];

const stack = ['OpenAI', 'Anthropic', 'Google AI', 'AWS', 'Azure AI', 'Databricks', 'Snowflake', 'LangChain', 'Hugging Face', 'MLflow', 'Notion', 'Miro'];

const faqs = [
  { q: 'We\'re not sure where to start with AI — can you help?', a: 'That\'s exactly what AI consulting is for. Our readiness assessment identifies your highest-impact starting points — often simpler automations that build confidence before complex ML projects.' },
  { q: 'How is this different from hiring an AI vendor?', a: 'We\'re vendor-agnostic strategists. We evaluate all options — build, buy, or partner — and recommend what\'s genuinely best for your business, not what earns us a commission.' },
  { q: 'Do you implement or just advise?', a: 'Both. Many clients start with strategy and engage us for implementation. Our consulting team and engineering team work together — strategy that\'s grounded in what\'s actually buildable.' },
  { q: 'How long does an AI strategy engagement take?', a: 'AI readiness assessment: 1–2 weeks. Full strategic roadmap with ROI modeling: 3–4 weeks. Enterprise-wide transformation planning: 6–8 weeks.' },
  { q: 'What if our data isn\'t ready for AI?', a: 'Data readiness is part of every assessment. We include a data infrastructure roadmap as part of the strategy — fixing foundations before building on them.' },
];

export default function AiConsulting() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Helmet>
        <title>AI Strategy Consulting | LogicWorks — AI Roadmap & Transformation</title>
        <meta name="description" content="LogicWorks AI consulting — readiness assessments, strategic roadmaps, ROI modeling, and governance frameworks that align AI investment with measurable business outcomes." />
        <link rel="canonical" href="https://logicworks.com/ai-consulting" />
      </Helmet>

      <section className="ai-tech-hero" aria-labelledby="consult-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />AI Technology</div>
          <h1 className="ai-tech-hero-title" id="consult-title">AI STRATEGY<br /><span>CONSULTING</span></h1>
          <p className="ai-tech-hero-sub">Build a clear, actionable AI roadmap that aligns technology investment with measurable business outcomes — from readiness assessment to implementation, guided by practitioners who build, not just advise.</p>
          <div className="ai-tech-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Book Strategy Session{arrowIcon}</Link>
            <Link to="/ai-powered-crm" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Explore AI Products</Link>
          </div>
        </div>
      </section>

      <section className="ai-tech-metrics">
        <div className="con"><div className="ai-tech-metrics-grid">{metrics.map((m) => (<div key={m.lbl} className="ai-tech-metric"><div className="ai-tech-metric-val">{m.val}</div><div className="ai-tech-metric-lbl">{m.lbl}</div></div>))}</div></div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-split">
            <div className="reveal-l">
              <div className="sec-label">Strategy Before Spend</div>
              <h2 className="sec-title">DON&apos;T BUILD AI<br /><em>WITHOUT A MAP</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>90% of AI projects fail not because the technology doesn&apos;t work — but because organizations skip strategy and chase shiny tools. A rigorous AI roadmap prevents wasted investment and accelerates time-to-value.</p>
              <div className="ai-tech-check-list">
                {['Vendor-agnostic recommendations — zero commission bias', 'ROI models your CFO and board will approve', 'Roadmap delivered in as little as 2 weeks', 'Strategy grounded in what our engineers actually build'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Roadmap', 'ROI Model', 'Governance', 'Vendor Selection', 'Training'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Consulting Deliverables</div>
              {[
                { icon: '01', title: 'AI Readiness Score', desc: 'Honest assessment of data, team, and infrastructure readiness — with gap analysis.' },
                { icon: '02', title: 'Prioritized Use Case Portfolio', desc: 'ROI-ranked AI opportunities with quick wins identified for immediate momentum.' },
                { icon: '03', title: '12–24 Month Roadmap', desc: 'Phased implementation plan with budgets, timelines, and success metrics.' },
                { icon: '04', title: 'Implementation Option', desc: 'Seamless handoff to our engineering team — strategy that ships, not shelf-ware.' },
              ].map((o) => (
                <div key={o.title} className="ai-tech-outcome-item">
                  <div className="ai-tech-outcome-icon">{o.icon}</div>
                  <div className="ai-tech-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Consulting Services</div><h2 className="sec-title">CLARITY BEFORE<br /><em>CODE</em></h2><p className="sec-desc">Six consulting disciplines that transform AI ambition into an executable, board-approved strategy.</p></div>
          <div className="ai-tech-bento">{bento.map((b) => (<article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}><div className="ai-tech-bento-icon">{b.icon}</div><h3 className="ai-tech-bento-title">{b.title}</h3><p className="ai-tech-bento-desc">{b.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--mesh">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Engagement Types</div><h2 className="sec-title">CONSULTING FOR<br /><em>EVERY STAGE</em></h2><p className="sec-desc">Whether you&apos;re exploring AI for the first time or scaling existing initiatives — we meet you where you are.</p></div>
          <div className="ai-tech-use-grid">{useCases.map((u) => (<article key={u.title} className="ai-tech-use-card"><div className="ai-tech-use-num">{u.num}</div><div><h3 className="ai-tech-use-title">{u.title}</h3><p className="ai-tech-use-desc">{u.desc}</p></div></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Our Approach</div><h2 className="sec-title">FROM QUESTIONS TO<br /><em>ROADMAP IN 5 STEPS</em></h2><p className="sec-desc">A structured consulting methodology that produces actionable strategy — not 100-page decks that gather dust.</p></div>
          <div className="ai-tech-timeline">{timeline.map((s) => (<div key={s.num} className="ai-tech-timeline-step"><div className="ai-tech-timeline-dot">{s.num}</div><h3 className="ai-tech-timeline-title">{s.title}</h3><p className="ai-tech-timeline-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">AI Ecosystem</div><h2 className="sec-title">VENDOR-NEUTRAL<br /><em>EXPERTISE</em></h2><p className="sec-desc">Deep knowledge across the AI landscape — we evaluate everything and recommend what fits your strategy.</p></div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="consult-faq" title={<>AI CONSULTING<br /><em>QUESTIONS ANSWERED</em></>} desc="What executives and technology leaders ask before engaging AI strategy consulting." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Start With Strategy" title={<>THE RIGHT AI STRATEGY<br /><em>SAVES MILLIONS</em>.</>} sub="Book a complimentary AI strategy session with our senior consultants and leave with clarity on your highest-impact AI opportunities." btnText="Book Strategy Session" note="FREE STRATEGY SESSION · VENDOR-NEUTRAL · ROADMAP IN 2 WEEKS" />
    </div>
  );
}
