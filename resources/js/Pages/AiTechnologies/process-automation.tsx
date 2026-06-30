import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '70%', lbl: 'Cost Reduction' },
  { val: '95%', lbl: 'Process Accuracy' },
  { val: '500+', lbl: 'Hours Saved Monthly' },
  { val: '3x', lbl: 'Throughput Increase' },
];

const bento = [
  { icon: 'RPA', title: 'Robotic Process Automation', desc: 'Software bots replicate human actions, including data entry, form processing, report generation, and system navigation, running continuously with zero errors', wide: false },
  { icon: 'FLOW', title: 'Intelligent Workflow Orchestration', desc: 'Multi step business processes automate end to end, covering approvals, notifications, data syncs, and exception handling through AI driven decision branches', wide: false },
  { icon: 'DOC', title: 'Document Processing Automation', desc: 'OCR combined with AI extraction pulls data from invoices, contracts, purchase orders, and forms, validating and routing it into ERP and CRM systems automatically', wide: true },
  { icon: 'API', title: 'System Integration & Sync', desc: 'Disconnected applications connect through bi directional API integrations, eliminating manual copy paste between Salesforce, QuickBooks, SAP, and custom systems', wide: false },
  { icon: 'AI', title: 'AI-Enhanced Decision Steps', desc: 'ML classification, validation rules, and anomaly detection get embedded into automated workflows, building bots that think rather than just click', wide: false },
  { icon: 'MON', title: 'Process Monitoring & Optimization', desc: 'Real time dashboards track bot performance, exception rates, and process bottlenecks, driving continuous improvement with every automated run', wide: false },
];

const useCases = [
  { num: '01', title: 'Finance & Accounting', desc: 'Invoice processing, expense report validation, reconciliation, and month end close automation cut AP processing time by 80%' },
  { num: '02', title: 'HR & Onboarding', desc: 'Employee onboarding workflows, benefits enrollment, payroll data sync, and offboarding checklists run with zero manual handoffs' },
  { num: '03', title: 'Sales Operations', desc: 'Lead routing, CRM data enrichment, quote generation, contract creation, and commission calculation become a fully automated pipeline' },
  { num: '04', title: 'Customer Service', desc: 'Ticket categorization, SLA monitoring, automated responses for common issues, and escalation workflows keep CSAT high without added headcount' },
];

const timeline = [
  { num: '01', title: 'Process Discovery', desc: 'Map current workflows, identify bottlenecks, and prioritize the highest ROI automation candidates' },
  { num: '02', title: 'Feasibility & Design', desc: 'Assess technical feasibility, design bot architecture, and define exception handling rules' },
  { num: '03', title: 'Build & Test', desc: 'Develop bots and workflows in staging, then validate against real data through UAT cycles' },
  { num: '04', title: 'Deploy & Monitor', desc: 'Roll out to production with monitoring dashboards, alerting, and rollback procedures in place' },
  { num: '05', title: 'Scale & Optimize', desc: 'Expand to additional processes, tune performance, and measure ROI against the original baseline' },
];

const stack = ['UiPath', 'Power Automate', 'Zapier', 'Make', 'Python', 'Node.js', 'Salesforce', 'SAP', 'QuickBooks', 'SharePoint', 'AWS Lambda', 'PostgreSQL'];

const faqs = [
  { q: 'What is process automation in a business context?', a: 'Process automation uses software to handle repetitive, rules-based business processes, things like approvals, data transfers, and notifications, without manual intervention at each step.' },
  { q: 'Which business processes are typically the easiest to automate first?', a: 'Processes with clear, repeatable steps, like invoice approvals or new employee onboarding, are usually the easiest and fastest to automate with strong early ROI.' },
  { q: 'Does process automation require significant upfront investment?', a: 'Costs vary by complexity, but many automations pay for themselves within months through reduced labor hours and fewer manual errors.' },
  { q: 'Can process automation work alongside our existing software tools?', a: 'Yes. Most automation platforms are designed to connect across multiple existing systems rather than requiring a complete software replacement.' },
  { q: 'How do we know if a business process is a good candidate for automation?', a: 'If a process is repetitive, rules-based, and currently consuming significant staff time, it\'s almost always a strong candidate for automation.' },
];

export default function ProcessAutomation() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Process Automation | LogicWorks — RPA & Intelligent Workflows</title>
        <meta head-key="description" name="description" content="RPA and intelligent workflow automation eliminate bottlenecks, cut operational overhead by as much as 70%, and scale throughput without scaling headcount alongside it." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/process-automation" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="automation-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Data Intelligence</div>
          <h1 className="ai-tech-hero-title" id="automation-title">PROCESS<br /><span>AUTOMATION</span></h1>
          <p className="ai-tech-hero-sub">RPA and intelligent workflow automation eliminate bottlenecks, cut operational overhead by as much as 70%, and scale throughput without scaling headcount alongside it.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Automate Your Processes{arrowIcon}</Link>
            <Link href="/ai-solutions" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All AI Services</Link>
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
              <div className="sec-label">The Problem</div>
              <h2 className="sec-title">MANUAL PROCESSES<br /><em>DO NOT SCALE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Your team spends hours on data entry, copying information between systems, and processing documents that software should be handling instead. Every manual step is an error waiting to happen and a bottleneck quietly limiting growth. Intelligent automation removes that repetitive work so your people can focus on what actually matters.</p>
              <div className="ai-tech-check-list">
                {['RPA bots for both legacy and modern systems', 'End to end workflow orchestration', 'AI powered document extraction and routing', 'Real time monitoring with exception handling'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['RPA', 'Workflows', 'Document AI', 'Integrations', 'Monitoring'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↓', title: '70% Cost Reduction', desc: 'Automated processes cost a fraction of manual labor at scale' },
                { icon: '◎', title: '95% Accuracy', desc: 'Bots do not typo, skip steps, or forget follow ups' },
                { icon: '⏱', title: '500+ Hours Saved Monthly', desc: 'Time reclaimed across finance, ops, and admin teams' },
                { icon: '↑', title: '3x Throughput', desc: 'The same volume processes faster, or triples without hiring' },
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
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">AUTOMATION THAT<br /><em>ACTUALLY WORKS</em></h2>
            <p className="sec-desc">Six modules range from RPA bots to AI enhanced decision workflows.</p>
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
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">AUTOMATION FOR<br /><em>EVERY DEPARTMENT</em></h2>
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
            <div className="sec-label">Implementation</div>
            <h2 className="sec-title">LIVE IN<br /><em>5 PHASES</em></h2>
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
            <div className="sec-label">Technology</div>
            <h2 className="sec-title">WORKS WITH<br /><em>YOUR SYSTEMS</em></h2>
            <p className="sec-desc">RPA platforms, integration tools, and enterprise systems — connected seamlessly.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="automation-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Stop Doing Bots' Work" title={<>AUTOMATE THE REPETITIVE.<br /><em>SCALE THE STRATEGIC</em>.</>} sub="Book a free process audit and identify your highest ROI automation opportunities." btnText="Automate Your Processes" note="" />
    </div>
  );
}
