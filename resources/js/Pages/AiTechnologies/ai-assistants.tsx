import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '24/7', lbl: 'Always-On Availability' },
  { val: '68%', lbl: 'Query Resolution Rate' },
  { val: '4.2x', lbl: 'Lead Qualification Lift' },
  { val: '12s', lbl: 'Avg. First Response' },
];

const bento = [
  { icon: 'LEAD', title: 'Intelligent Lead Qualification', desc: 'Conversational flows ask the right questions, score intent in real time, and route hot prospects to sales while nurturing the rest automatically', wide: false },
  { icon: 'BOOK', title: 'Appointment & Calendar Booking', desc: 'Native integration with Calendly, Google Calendar, and CRM calendars lets assistants book, reschedule, and send reminders without human help', wide: false },
  { icon: 'OMNI', title: 'Omnichannel Presence', desc: 'One AI brain deployed across website chat, WhatsApp, SMS, email, and in app messaging, with consistent answers and a unified history everywhere', wide: true },
  { icon: 'CTX', title: 'Context-Aware Memory', desc: 'Assistants remember past interactions, purchase history, and preferences, delivering personalized responses that feel human rather than scripted', wide: false },
  { icon: 'HAND', title: 'Smart Human Handoff', desc: 'Seamless escalation to live agents with full conversation context, sentiment score, and recommended next actions, so your team never repeats themselves', wide: false },
  { icon: 'GUARD', title: 'Guardrails & Compliance', desc: 'Topic boundaries, PII redaction, audit logs, and industry specific compliance covering HIPAA, GDPR, and SOC 2 built into every deployment', wide: false },
];

const useCases = [
  { num: '01', title: 'Sales & SDR Teams', desc: 'Qualify inbound leads, answer product questions, schedule demos, and sync every interaction to Salesforce or HubSpot automatically' },
  { num: '02', title: 'Healthcare & Clinics', desc: 'HIPAA aware assistants that triage symptoms, book appointments, send pre visit forms, and cut front desk call volume by over 50%' },
  { num: '03', title: 'E-Commerce & Retail', desc: 'Product recommendations, order tracking, returns processing, and upsell conversations that increase average order value' },
  { num: '04', title: 'Professional Services', desc: 'Intake questionnaires, fee estimates, document collection, and consultation booking for law firms, agencies, and consultancies' },
];

const timeline = [
  { num: '01', title: 'Discovery & Persona', desc: 'Define assistant personality, conversation goals, and success metrics alongside your team' },
  { num: '02', title: 'Knowledge Base Build', desc: 'Ingest FAQs, product docs, CRM data, and SOPs into a structured knowledge layer' },
  { num: '03', title: 'Flow Design & Train', desc: 'Design conversation flows, train on real transcripts, and tune response quality' },
  { num: '04', title: 'Integrate & Deploy', desc: 'Connect CRM, calendar, and channels, then launch with a phased rollout and monitoring' },
  { num: '05', title: 'Optimize & Scale', desc: 'Analyze conversation logs, improve intent detection, and expand into new channels' },
];

const stack = ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Twilio', 'WhatsApp API', 'Salesforce', 'HubSpot', 'Calendly', 'Zapier', 'AWS', 'PostgreSQL'];

const faqs = [
  { q: 'What can a custom AI assistant actually do for a business?', a: 'AI assistants can handle customer inquiries, schedule appointments, qualify leads, and automate repetitive internal tasks, all without requiring a human to manage every interaction.' },
  { q: 'How is a custom AI assistant different from a basic chatbot?', a: 'A custom AI assistant typically understands context across a conversation and can complete multi-step tasks, while a basic chatbot usually follows rigid, scripted responses.' },
  { q: 'Can an AI assistant be trained on our specific business knowledge?', a: 'Yes. AI assistants can be trained on internal documentation, FAQs, and past customer interactions to provide accurate, business-specific responses.' },
  { q: 'Will an AI assistant replace our customer service team entirely?', a: 'Most businesses use AI assistants to handle routine questions while routing complex issues to human agents, improving efficiency rather than eliminating the team.' },
  { q: 'How long does it take to build and deploy a custom AI assistant?', a: 'Most projects take 6 to 10 weeks, depending on complexity, covering training data preparation, integration, and testing before full deployment.' },
];

export default function AiAssistants() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">AI Assistants for Business | 24/7 Lead Qualification & Automation</title>
        <meta head-key="description" name="description" content="Deploy AI assistants that qualify leads, answer queries, and book appointments 24/7. Automate customer support and sales workflows with intelligent conversational AI from LogicWorksllc." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/ai-assistants" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="assistants-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="assistants-title">AI<br /><span>ASSISTANTS</span></h1>
          <p className="ai-tech-hero-sub">Intelligent virtual agents qualify leads, answer questions, and book appointments around the clock, so your team can focus on the conversations that actually matter rather than repetitive inquiries.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Build Your AI Assistant{arrowIcon}</Link>
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
              <div className="sec-label">The Opportunity</div>
              <h2 className="sec-title">YOUR TEAM CANNOT<br /><em>SCALE 24/7</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Every missed inquiry is lost revenue, and every repetitive question drains your team&apos;s energy. AI assistants, by contrast, handle unlimited conversations simultaneously, qualifying leads, resolving queries, and booking meetings long after your team has gone home.</p>
              <div className="ai-tech-check-list">
                {['Instant response to every inbound inquiry', 'Lead qualification with CRM auto sync', 'Appointment booking without back and forth', 'Smart escalation to humans when it actually matters'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Lead Qualification', 'Booking', 'Omnichannel Presence', 'CRM Sync', 'Human Handoff'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '⚡', title: '12-Second Response', desc: 'Every visitor gets instant engagement, with no wait times and no abandoned forms' },
                { icon: '↑', title: '4.2x Lead Qualification', desc: 'AI asks the right questions and scores intent before routing to sales' },
                { icon: '◎', title: '68% Auto-Resolution', desc: 'Most inquiries get handled end to end without human intervention' },
                { icon: '🌙', title: 'True 24/7 Coverage', desc: 'Nights, weekends, and holidays, your assistant never clocks out' },
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
            <h2 className="sec-title">ASSISTANTS THAT<br /><em>ACTUALLY WORK</em></h2>
            <p className="sec-desc">Six core modules turn AI assistants from a novelty into genuinely revenue generating team members.</p>
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
            <h2 className="sec-title">AI ASSISTANTS FOR<br /><em>EVERY TEAM</em></h2>
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
            <p className="sec-desc">LLM providers, messaging channels, CRMs, and calendars — all wired together seamlessly.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="assistants-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Scale Without Headcount" title={<>YOUR NEXT TEAM MEMBER<br /><em>NEVER SLEEPS</em>.</>} sub="Book a free strategy session and see a custom AI assistant prototype built for your exact use case." btnText="Build Your AI Assistant" note="" />
    </div>
  );
}
