import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '200+', lbl: 'AI Roadmaps Built' },
  { val: '3.5x', lbl: 'Avg. ROI Multiple' },
  { val: '2wk', lbl: 'Strategy Delivery' },
  { val: '92%', lbl: 'Client Implementation Rate' },
];

const bento = [
  { icon: 'AUDIT', title: 'AI readiness assessment', desc: 'A comprehensive evaluation of your data infrastructure, team capabilities, technology stack, and organizational readiness, with an honest score rather than a sales pitch', wide: false },
  { icon: 'MAP', title: 'Strategic AI roadmap', desc: 'A prioritized 12 to 24 month implementation plan with use cases ranked by ROI potential, feasibility, and strategic alignment, the blueprint your board can approve', wide: true },
  { icon: 'ROI', title: 'Business case and ROI modeling', desc: 'Financial models quantify AI investment returns, including cost savings, revenue uplift, and efficiency gains, across conservative, base, and optimistic scenarios', wide: false },
  { icon: 'VEND', title: 'Vendor and tool selection', desc: 'An unbiased evaluation of build versus buy decisions, platform comparisons, and vendor negotiations, with no partnerships biasing our recommendations', wide: false },
  { icon: 'GOV', title: 'AI governance framework', desc: 'Policies covering responsible AI use, data privacy, model ethics, bias prevention, and compliance documentation for regulated industries', wide: false },
  { icon: 'CHANGE', title: 'Change management and training', desc: 'Workforce readiness programs, AI literacy training, and organizational change plans that ensure adoption rather than just deployment', wide: false },
];

const useCases = [
  { num: '01', title: 'Enterprise AI transformation', desc: 'Company wide AI strategy for organizations ready to embed intelligence across operations, products, and customer experience' },
  { num: '02', title: 'Startup AI product strategy', desc: 'AI native product features, MVP scoping, and technical architecture defined for startups building AI into their core value proposition' },
  { num: '03', title: 'Department level AI adoption', desc: 'Focused AI strategy for sales, marketing, operations, or finance teams, built around quick wins that create momentum for broader adoption' },
  { num: '04', title: 'AI due diligence', desc: 'A technical and strategic assessment of AI capabilities for M&A, investment decisions, and partnership evaluations' },
];

const timeline = [
  { num: '01', title: 'Discovery', desc: 'Executive interviews, a data audit, process mapping, and a competitive AI landscape analysis' },
  { num: '02', title: 'Assess', desc: 'Readiness scoring, use case identification, and feasibility analysis across your operation' },
  { num: '03', title: 'Prioritize', desc: 'An ROI ranked use case portfolio with quick wins, medium term bets, and strategic bets clearly defined' },
  { num: '04', title: 'Roadmap', desc: 'A detailed implementation plan with timelines, budgets, team requirements, and success metrics' },
  { num: '05', title: 'Execute', desc: 'Optional hands on implementation support, since we do not just advise, we build when you are ready' },
];

const stack = ['OpenAI', 'Anthropic', 'Google AI', 'AWS', 'Azure AI', 'Databricks', 'Snowflake', 'LangChain', 'Hugging Face', 'MLflow', 'Notion', 'Miro'];

const faqs = [
  { q: 'What does an AI consulting engagement typically involve?', a: 'AI consulting usually starts with an assessment of current processes and data, followed by recommendations on where AI can realistically add value, then guidance through implementation.' },
  { q: 'Do we need existing AI infrastructure before working with an AI consulting team?', a: 'No. Most businesses start AI consulting engagements from scratch, with the consulting process itself identifying what infrastructure and tools are actually needed.' },
  { q: 'How does AI consulting differ from simply hiring an AI development team?', a: 'Consulting focuses on strategy and roadmap first, identifying the right opportunities before any building begins, which often prevents costly missteps later in development.' },
  { q: 'What\'s a realistic budget range for a small business exploring AI consulting?', a: 'Initial assessments and strategy engagements are often the most affordable entry point, with costs scaling significantly once full development and implementation begin.' },
  { q: 'Can AI consulting help identify which business processes shouldn\'t be automated?', a: 'Yes, and this is often just as valuable. Good AI consulting identifies where automation makes sense and explicitly flags areas where human judgment should remain central.' },
];

export default function AiConsulting() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">AI Strategy Consulting Services | AI Roadmaps & ROI Planning | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Accelerate AI adoption with LogicWorks LLC AI strategy consulting. Build a clear roadmap, identify high-ROI use cases, and implement AI solutions with confidence." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/ai-consulting" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="consult-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />AI Technology</div>
          <h1 className="ai-tech-hero-title" id="consult-title">AI STRATEGY<br /><span>CONSULTING</span></h1>
          <p className="ai-tech-hero-sub">We build a clear, actionable AI roadmap that aligns technology investment with measurable business outcomes, from readiness assessment through implementation, guided by practitioners who actually build rather than just advise.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Book Strategy Session{arrowIcon}</Link>
            <Link href="/ai-powered-crm" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Explore AI Products</Link>
          </div>
        </div>
      </section>

      <section className="ai-tech-metrics">
        <div className="con">
          <div className="ai-tech-metrics-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ai-tech-metric">
                <div className="ai-tech-metric-val">{m.val}</div>
                <div className="ai-tech-metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-split">
            <div className="reveal-l">
              <div className="sec-label">Strategy Before Spend</div>
              <h2 className="sec-title">DO NOT BUILD AI<br /><em>WITHOUT A MAP</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Roughly 90% of AI projects fail, not because the technology fails to work, but because organizations skip strategy entirely and chase shiny tools instead. A rigorous AI roadmap prevents wasted investment and accelerates time to value considerably.</p>
              <div className="ai-tech-check-list">
                {['Vendor agnostic recommendations with zero commission bias', 'ROI models your CFO and board will actually approve', 'A roadmap delivered in as little as 2 weeks', 'Strategy grounded in what our engineers genuinely build'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Roadmap', 'ROI model', 'governance', 'vendor selection', 'training'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Consulting Deliverables</div>
              {[
                { icon: '01', title: 'AI readiness score', desc: 'An honest assessment of data, team, and infrastructure readiness, complete with gap analysis' },
                { icon: '02', title: 'Prioritized use case portfolio', desc: 'ROI ranked AI opportunities with quick wins identified for immediate momentum' },
                { icon: '03', title: 'A 12 to 24 month roadmap', desc: 'A phased implementation plan with budgets, timelines, and success metrics' },
                { icon: '04', title: 'Implementation option', desc: 'A seamless handoff to our engineering team, strategy that ships rather than sits on a shelf' },
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
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Consulting Services</div>
            <h2 className="sec-title">CLARITY BEFORE<br /><em>CODE</em></h2>
            <p className="sec-desc">Six consulting disciplines turn AI ambition into an executable, board approved strategy.</p>
          </div>
          <div className="ai-tech-bento">
            {bento.map((b) => (
              <article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}>
                {/* <div className="ai-tech-bento-icon">{b.icon}</div> */}
                <h3 className="ai-tech-bento-title">{b.title}</h3>
                <p className="ai-tech-bento-desc">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--mesh">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Engagement Types</div>
            <h2 className="sec-title">CONSULTING FOR<br /><em>EVERY STAGE</em></h2>
          </div>
          <div className="ai-tech-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="ai-tech-use-card">
                <div className="ai-tech-use-num">{u.num}</div>
                <div><h3 className="ai-tech-use-title">{u.title}</h3><p className="ai-tech-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Our Approach</div>
            <h2 className="sec-title">FROM QUESTIONS TO<br /><em>ROADMAP IN 5 STEPS</em></h2>
            <p className="sec-desc">A structured consulting methodology that produces actionable strategy rather than a hundred page deck that gathers dust.</p>
          </div>
          <div className="ai-tech-timeline">
            {timeline.map((s) => (
              <div key={s.num} className="ai-tech-timeline-step">
                <div className="ai-tech-timeline-dot">{s.num}</div>
                <h3 className="ai-tech-timeline-title">{s.title}</h3>
                <p className="ai-tech-timeline-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">AI Ecosystem</div>
            <h2 className="sec-title">VENDOR-NEUTRAL<br /><em>EXPERTISE</em></h2>
            <p className="sec-desc">Deep knowledge across the AI landscape — we evaluate everything and recommend what fits your strategy.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="consult-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Start With Strategy" title={<>THE RIGHT AI STRATEGY<br /><em>SAVES MILLIONS</em>.</>} sub="Book a complimentary AI strategy session with our senior consultants and leave with clarity on your highest impact opportunities." btnText="Book Strategy Session" note="" />
    </div>
  );
}
