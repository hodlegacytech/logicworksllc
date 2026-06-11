import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '70%', lbl: 'Cost Reduction' },
  { val: '40hrs', lbl: 'Saved Weekly' },
  { val: '99%', lbl: 'Automation Accuracy' },
  { val: '4wk', lbl: 'First Automation Live' },
];

const bento = [
  { icon: 'RPA', title: 'Robotic Process Automation', desc: 'Software bots that replicate repetitive human actions — data entry, form filling, report generation — across any application with zero errors.', wide: false },
  { icon: 'FLOW', title: 'Intelligent Workflow Orchestration', desc: 'Multi-step business processes automated end-to-end with conditional logic, human-in-the-loop approvals, and exception handling.', wide: false },
  { icon: 'DOC', title: 'Document Intelligence', desc: 'AI-powered extraction, classification, and routing of invoices, contracts, forms, and emails — eliminating manual document processing entirely.', wide: true },
  { icon: 'API', title: 'System Integration Automation', desc: 'Connect disconnected tools — CRM, ERP, accounting, HRIS — with real-time bi-directional data sync and event-triggered workflows.', wide: false },
  { icon: 'BOT', title: 'Email & Communication Bots', desc: 'Automated email triage, response drafting, scheduling, and follow-up sequences that handle routine communication at scale.', wide: false },
  { icon: 'MON', title: 'Monitoring & Self-Healing', desc: 'Automated error detection, retry logic, and alerting — workflows that fix themselves before humans need to intervene.', wide: false },
];

const useCases = [
  { num: '01', title: 'Finance & Accounting', desc: 'Automate invoice processing, expense approvals, reconciliation, and month-end reporting — cutting close time by 60%.' },
  { num: '02', title: 'HR & Onboarding', desc: 'Employee onboarding workflows, document collection, benefits enrollment, and offboarding checklists triggered automatically.' },
  { num: '03', title: 'Operations & Logistics', desc: 'Order processing, inventory updates, shipping notifications, and supplier communication automated across systems.' },
  { num: '04', title: 'Marketing Operations', desc: 'Lead routing, campaign reporting, content approval workflows, and multi-platform data aggregation on autopilot.' },
];

const timeline = [
  { num: '01', title: 'Process Mining', desc: 'Map current workflows, identify bottlenecks, and quantify automation ROI potential.' },
  { num: '02', title: 'Design', desc: 'Architect automated workflows with exception handling and human approval gates.' },
  { num: '03', title: 'Build', desc: 'Develop bots, integrations, and orchestration logic in staging environment.' },
  { num: '04', title: 'Test', desc: 'Parallel run against manual process, accuracy validation, and edge case testing.' },
  { num: '05', title: 'Scale', desc: 'Production deployment, team training, and continuous optimization roadmap.' },
];

const stack = ['Python', 'n8n', 'Zapier', 'Make', 'UiPath', 'Power Automate', 'AWS Lambda', 'OpenAI', 'PostgreSQL', 'REST APIs', 'Webhooks', 'Docker'];

const faqs = [
  { q: 'Which processes should we automate first?', a: 'We start with high-volume, rule-based, repetitive tasks — data entry, report generation, email routing. Our process mining phase identifies the highest-ROI automation candidates in your operation.' },
  { q: 'Will automation replace our employees?', a: 'Automation eliminates tasks, not roles. Your team shifts from repetitive work to high-value activities. Most clients redeploy saved hours into growth initiatives rather than reducing headcount.' },
  { q: 'How fast can we see the first automation live?', a: 'Simple single-process automations go live in 2–4 weeks. Complex multi-system workflows typically take 6–10 weeks including testing and parallel validation.' },
  { q: 'What if our systems don\'t have APIs?', a: 'We use RPA (robotic process automation) to interact with legacy systems through UI automation when APIs aren\'t available — no system replacement required.' },
  { q: 'How do you handle errors in automated workflows?', a: 'Every automation includes error handling, retry logic, fallback paths, and human escalation triggers. You receive alerts only when intervention is genuinely needed.' },
];

export default function AiAutomation() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Helmet>
        <title>AI Automation | LogicWorks — Intelligent Workflow & Process Automation</title>
        <meta name="description" content="LogicWorks AI automation — replace repetitive tasks with intelligent systems that work 24/7, make zero errors, and scale without adding headcount. RPA, workflows, and document AI." />
        <link rel="canonical" href="https://logicworks.com/ai-automation" />
      </Helmet>

      <section className="ai-tech-hero" aria-labelledby="auto-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />AI Technology</div>
          <h1 className="ai-tech-hero-title" id="auto-title">AI<br /><span>AUTOMATION</span></h1>
          <p className="ai-tech-hero-sub">Replace repetitive tasks with intelligent systems that work 24/7, make zero errors, and scale without headcount — freeing your team for work that actually moves the needle.</p>
          <div className="ai-tech-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Automation Audit{arrowIcon}</Link>
            <Link to="/machine-learning-systems" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>ML Systems</Link>
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
              <div className="sec-label">The Opportunity</div>
              <h2 className="sec-title">STOP PAYING PEOPLE<br /><em>TO DO ROBOT WORK</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Knowledge workers spend 40% of their time on repetitive, rule-based tasks that machines handle better — faster, cheaper, and without errors. AI automation recaptures that capacity instantly.</p>
              <div className="ai-tech-check-list">
                {['First automation live in as little as 4 weeks', '99% accuracy on rule-based process execution', 'Works with legacy systems — no replacement needed', 'Self-healing workflows with automated error recovery'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['RPA', 'Workflows', 'Document AI', 'Integration', 'n8n'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Automation Impact</div>
              {[
                { icon: '↓', title: '70% Operational Cost Cut', desc: 'Eliminate manual processing costs for high-volume repetitive tasks.' },
                { icon: '⚡', title: '40+ Hours Saved Weekly', desc: 'Per team, per week — redirected to strategic and creative work.' },
                { icon: '✓', title: '99% Execution Accuracy', desc: 'Zero typos, missed steps, or forgotten follow-ups — ever.' },
                { icon: '∞', title: 'Infinite Scale', desc: 'Handle 10x volume spikes without hiring temporary staff.' },
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
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Automation Modules</div><h2 className="sec-title">INTELLIGENT SYSTEMS<br /><em>FOR EVERY PROCESS</em></h2><p className="sec-desc">From document processing to cross-system orchestration — modular automation that scales with your operation.</p></div>
          <div className="ai-tech-bento">{bento.map((b) => (<article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}><div className="ai-tech-bento-icon">{b.icon}</div><h3 className="ai-tech-bento-title">{b.title}</h3><p className="ai-tech-bento-desc">{b.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--mesh">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Industry Applications</div><h2 className="sec-title">AUTOMATION ACROSS<br /><em>EVERY DEPARTMENT</em></h2><p className="sec-desc">High-ROI automation patterns proven across finance, HR, operations, and marketing teams.</p></div>
          <div className="ai-tech-use-grid">{useCases.map((u) => (<article key={u.title} className="ai-tech-use-card"><div className="ai-tech-use-num">{u.num}</div><div><h3 className="ai-tech-use-title">{u.title}</h3><p className="ai-tech-use-desc">{u.desc}</p></div></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">AUTOMATED IN<br /><em>5 PHASES</em></h2><p className="sec-desc">Structured discovery-to-deployment methodology with ROI validation at every stage.</p></div>
          <div className="ai-tech-timeline">{timeline.map((s) => (<div key={s.num} className="ai-tech-timeline-step"><div className="ai-tech-timeline-dot">{s.num}</div><h3 className="ai-tech-timeline-title">{s.title}</h3><p className="ai-tech-timeline-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Technology</div><h2 className="sec-title">BEST-IN-CLASS<br /><em>AUTOMATION TOOLS</em></h2><p className="sec-desc">Enterprise-grade platforms and custom code — chosen for reliability, scalability, and integration depth.</p></div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="auto-faq" title={<>AUTOMATION<br /><em>QUESTIONS ANSWERED</em></>} desc="What operations leaders ask before automating business processes." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Eliminate Manual Work" title={<>YOUR TEAM DESERVES<br /><em>MEANINGFUL WORK</em>.</>} sub="Get a free automation audit — we'll map your highest-ROI processes and show exactly what can be automated." btnText="Get Automation Audit" note="FREE AUDIT · ROI PROJECTION · FIRST AUTOMATION IN 4 WEEKS" />
    </div>
  );
}
