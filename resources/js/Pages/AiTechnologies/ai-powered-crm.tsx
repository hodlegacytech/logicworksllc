import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '87%', lbl: 'Lead Score Accuracy' },
  { val: '3.2x', lbl: 'Sales Velocity Lift' },
  { val: '40hrs', lbl: 'Saved Per Week' },
  { val: '60d', lbl: 'Avg. ROI Timeline' },
];

const bento = [
  { icon: 'AI', title: 'Predictive Lead Scoring', desc: 'ML models analyze over 50 signals, including firmographics, behavior, and engagement history, scoring every lead in real time so reps focus on deals likely to close', wide: false },
  { icon: 'AUTO', title: 'Intelligent Follow-Up Sequences', desc: 'AI triggered email, SMS, and task sequences that adapt based on prospect behavior rather than running as static drip campaigns', wide: false },
  { icon: 'PIPE', title: 'Pipeline Intelligence Dashboard', desc: 'Real time visibility into deal health, forecast accuracy, and at risk opportunities, with AI generated coaching for every rep', wide: true },
  { icon: 'SYNC', title: 'Native CRM Integrations', desc: 'Deep two way sync with Salesforce, HubSpot, Pipedrive, and Zoho, or a fully custom CRM built from scratch', wide: false },
  { icon: 'NLP', title: 'Sentiment & Intent Analysis', desc: 'Call transcripts, emails, and meeting notes get analyzed automatically to detect buying signals, objections, and churn risk', wide: false },
  { icon: 'REP', title: 'AI Sales Copilot', desc: 'Real time call coaching, automated CRM data entry, and next best action suggestions that help every rep perform like a top performer', wide: false },
];

const useCases = [
  { num: '01', title: 'B2B SaaS Sales Teams', desc: 'Score inbound leads instantly, prioritize enterprise accounts, and automate nurture for product qualified leads not yet sales ready' },
  { num: '02', title: 'Real Estate & Mortgage', desc: 'Identify high intent buyers from portal inquiries, automate follow up sequences, and predict closing probability by property type' },
  { num: '03', title: 'Financial Services', desc: 'Compliance aware lead routing, KYC triggered workflows, and AI scoring for loan and investment product suitability' },
  { num: '04', title: 'Agencies & Professional Services', desc: 'Pipeline forecasting, proposal win rate prediction, and automated client onboarding triggered by signed contracts' },
];

const timeline = [
  { num: '01', title: 'CRM Audit', desc: 'Map current sales process, assess data quality, and inventory existing integrations' },
  { num: '02', title: 'AI Model Design', desc: 'Define scoring criteria and train models on historical win and loss data' },
  { num: '03', title: 'Build & Integrate', desc: 'CRM customization, automation workflows, and API connections' },
  { num: '04', title: 'Train & Launch', desc: 'Sales team onboarding, AI copilot training, and a phased rollout' },
  { num: '05', title: 'Optimize', desc: 'Model retraining, sequence A/B testing, and ongoing pipeline analytics refinement' },
];

const stack = ['Salesforce', 'HubSpot', 'OpenAI', 'Python', 'PostgreSQL', 'Zapier', 'Twilio', 'Segment', 'Looker', 'AWS', 'LangChain', 'REST APIs'];

const faqs = [
  { q: 'What makes a CRM "AI-powered" compared to a traditional CRM?', a: 'An AI-powered CRM uses machine learning to predict customer behavior, automate data entry, score leads, and surface insights that a standard CRM would require manual analysis to find.' },
  { q: 'Can an AI-powered CRM integrate with tools we already use?', a: 'Most modern AI CRMs are built to integrate with common tools like email platforms, marketing automation software, and accounting systems through APIs.' },
  { q: 'Does adopting an AI-powered CRM require extensive staff training?', a: 'Some training is typically needed, but well-designed AI CRMs are built to simplify workflows, often reducing manual data entry rather than adding complexity for users.' },
  { q: 'How does AI improve lead scoring within a CRM?', a: 'AI analyzes historical conversion patterns across past deals to predict which current leads are most likely to close, prioritizing sales effort accordingly.' },
  { q: 'Is an AI-powered CRM worth it for a small sales team?', a: 'Yes, particularly for time savings. Even small teams benefit from automated data entry and lead prioritization, freeing up hours otherwise spent on manual CRM upkeep.' },
];

export default function AiPoweredCrm() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">AI-Powered CRM | LogicWorks — Intelligent Sales Automation</title>
        <meta head-key="description" name="description" content="Custom CRM platforms infused with machine intelligence score leads, automate follow ups, and unlock a level of sales productivity that simply was not possible before. Your team closes more deals, faster." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ai-powered-crm" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="crm-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />AI Technology</div>
          <h1 className="ai-tech-hero-title" id="crm-title">AI POWERED<br /><span>CRM SYSTEMS</span></h1>
          <p className="ai-tech-hero-sub">Custom CRM platforms infused with machine intelligence score leads, automate follow ups, and unlock a level of sales productivity that simply was not possible before. Your team closes more deals, faster.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Book AI CRM Demo{arrowIcon}</Link>
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
              <h2 className="sec-title">YOUR CRM IS A<br /><em>DATA GRAVEYARD</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Most CRMs are expensive databases that sales teams resist updating. Leads go cold, follow ups get missed, and forecasts become little more than guesswork. AI changes that entirely, turning a passive record keeper into an active revenue engine.</p>
              <div className="ai-tech-check-list">
                {['Predictive lead scoring with over 87% accuracy', 'Automated follow ups that adapt to prospect behavior', 'Real time pipeline intelligence and forecasting', 'An AI copilot that eliminates manual CRM data entry'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Salesforce', 'HubSpot', 'Custom CRM Builds', 'ML Scoring', 'Copilot Layers'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↑', title: '3.2x Sales Velocity', desc: 'Reps spend time on qualified leads rather than data entry and cold outreach' },
                { icon: '◎', title: '87% Scoring Accuracy', desc: 'ML models trained on your win and loss history outperform manual qualification' },
                { icon: '⏱', title: '40 Hours Saved Weekly', desc: 'Automated sequences, data capture, and reporting remove repetitive work' },
                { icon: '$', title: 'ROI Within 60 Days', desc: 'Most clients recover implementation cost within two months of launch' },
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
            <div className="sec-label">AI Capabilities</div>
            <h2 className="sec-title">INTELLIGENCE BUILT<br /><em>INTO EVERY DEAL</em></h2>
            <p className="sec-desc">Six modules transform how your sales team finds, qualifies, and closes opportunities.</p>
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
            <h2 className="sec-title">AI CRM FOR<br /><em>EVERY INDUSTRY</em></h2>
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
            <div className="sec-label">Integrations</div>
            <h2 className="sec-title">CONNECTS TO<br /><em>YOUR STACK</em></h2>
            <p className="sec-desc">Native integrations and open APIs to fit seamlessly into your existing sales technology ecosystem.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="crm-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Supercharge Your Sales Team" title={<>YOUR CRM SHOULD<br /><em>SELL FOR YOU</em>.</>} sub="Book a free AI CRM demo and see predictive lead scoring and automation live on your own data." btnText="Book AI CRM Demo" note="" />
    </div>
  );
}
