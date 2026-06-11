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
  { icon: 'LEAD', title: 'Intelligent Lead Qualification', desc: 'Conversational flows that ask the right questions, score intent in real time, and route hot prospects to sales — while nurturing the rest automatically.', wide: false },
  { icon: 'BOOK', title: 'Appointment & Calendar Booking', desc: 'Native integration with Calendly, Google Calendar, and CRM calendars. AI assistants book, reschedule, and send reminders without human intervention.', wide: false },
  { icon: 'OMNI', title: 'Omnichannel Presence', desc: 'One AI brain deployed across website chat, WhatsApp, SMS, email, and in-app messaging — consistent answers and unified conversation history everywhere.', wide: true },
  { icon: 'CTX', title: 'Context-Aware Memory', desc: 'Assistants remember past interactions, purchase history, and preferences — delivering personalized responses that feel human, not scripted.', wide: false },
  { icon: 'HAND', title: 'Smart Human Handoff', desc: 'Seamless escalation to live agents with full conversation context, sentiment score, and recommended next actions — zero repetition for your team.', wide: false },
  { icon: 'GUARD', title: 'Guardrails & Compliance', desc: 'Topic boundaries, PII redaction, audit logs, and industry-specific compliance (HIPAA, GDPR, SOC 2) built into every deployment.', wide: false },
];

const useCases = [
  { num: '01', title: 'Sales & SDR Teams', desc: 'Qualify inbound leads, answer product questions, schedule demos, and sync every interaction to Salesforce or HubSpot automatically.' },
  { num: '02', title: 'Healthcare & Clinics', desc: 'HIPAA-aware assistants that triage symptoms, book appointments, send pre-visit forms, and reduce front-desk call volume by 50%+.' },
  { num: '03', title: 'E-Commerce & Retail', desc: 'Product recommendations, order tracking, returns processing, and upsell conversations that increase average order value.' },
  { num: '04', title: 'Professional Services', desc: 'Intake questionnaires, fee estimates, document collection, and consultation booking for law firms, agencies, and consultancies.' },
];

const timeline = [
  { num: '01', title: 'Discovery & Persona', desc: 'Define assistant personality, conversation goals, and success metrics with your team.' },
  { num: '02', title: 'Knowledge Base Build', desc: 'Ingest FAQs, product docs, CRM data, and SOPs into a structured knowledge layer.' },
  { num: '03', title: 'Flow Design & Train', desc: 'Design conversation flows, train on real transcripts, and tune response quality.' },
  { num: '04', title: 'Integrate & Deploy', desc: 'Connect CRM, calendar, and channels — launch with phased rollout and monitoring.' },
  { num: '05', title: 'Optimize & Scale', desc: 'Analyze conversation logs, improve intent detection, and expand to new channels.' },
];

const stack = ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Twilio', 'WhatsApp API', 'Salesforce', 'HubSpot', 'Calendly', 'Zapier', 'AWS', 'PostgreSQL'];

const faqs = [
  { q: 'How is an AI assistant different from a basic chatbot?', a: 'AI assistants use large language models with memory, context, and reasoning — they handle open-ended questions, adapt to conversation flow, and learn from interactions. Basic chatbots follow rigid decision trees with limited flexibility.' },
  { q: 'Can the assistant integrate with our CRM?', a: 'Yes. We build deep integrations with Salesforce, HubSpot, Pipedrive, Zoho, and custom CRMs — syncing leads, updating records, and triggering workflows from every conversation.' },
  { q: 'What happens when the AI cannot answer?', a: 'Smart handoff routes the conversation to a live agent with full context, sentiment analysis, and suggested responses. You define escalation rules by topic, sentiment, or customer tier.' },
  { q: 'How long does deployment take?', a: 'A focused assistant for one use case (e.g., lead qualification): 4–6 weeks. Full omnichannel deployment with CRM integration: 8–12 weeks depending on complexity.' },
  { q: 'Is conversation data secure?', a: 'All data is encrypted in transit and at rest. We support on-premise deployment, private cloud, and SOC 2-compliant infrastructure. PII can be automatically redacted from logs.' },
];

export default function AiAssistants() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">AI Assistants | LogicWorks — Intelligent Virtual Agents</title>
        <meta head-key="description" name="description" content="LogicWorks builds AI assistants that qualify leads, answer questions, and book appointments 24/7 — omnichannel virtual agents with CRM integration and smart human handoff." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ai-assistants" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="assistants-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="assistants-title">AI<br /><span>ASSISTANTS</span></h1>
          <p className="ai-tech-hero-sub">Intelligent virtual agents that qualify leads, answer questions, and book appointments around the clock — so your team focuses on high-value conversations, not repetitive inquiries.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Every missed inquiry is lost revenue. Every repetitive question drains your team. AI assistants handle unlimited conversations simultaneously — qualifying leads, resolving queries, and booking meetings while your team sleeps.</p>
              <div className="ai-tech-check-list">
                {['Instant response to every inbound inquiry', 'Lead qualification with CRM auto-sync', 'Appointment booking without back-and-forth', 'Smart escalation to humans when it matters'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Lead Qualification', 'Booking', 'Omnichannel', 'CRM Sync', 'Handoff'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '⚡', title: '12-Second Response', desc: 'Every visitor gets instant engagement — no wait times, no abandoned forms.' },
                { icon: '↑', title: '4.2x Lead Qualification', desc: 'AI asks the right questions and scores intent before routing to sales.' },
                { icon: '◎', title: '68% Auto-Resolution', desc: 'Most inquiries handled end-to-end without human intervention.' },
                { icon: '🌙', title: 'True 24/7 Coverage', desc: 'Nights, weekends, holidays — your assistant never clocks out.' },
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
            <p className="sec-desc">Six core modules that turn AI assistants from novelty into revenue-generating team members.</p>
          </div>
          <div className="ai-tech-bento">
            {bento.map((b) => (
              <article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}>
                <div className="ai-tech-bento-icon">{b.icon}</div>
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
            <p className="sec-desc">From sales qualification to patient scheduling — proven deployments across industries.</p>
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
            <p className="sec-desc">From discovery to deployment — a structured rollout with measurable milestones at every step.</p>
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

      <AiTechFaq id="assistants-faq" title={<>AI Assistant<br /><em>QUESTIONS ANSWERED</em></>} desc="What business leaders ask before deploying intelligent virtual agents." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Scale Without Headcount" title={<>YOUR NEXT TEAM MEMBER<br /><em>NEVER SLEEPS</em>.</>} sub="Book a free strategy session and see a custom AI assistant prototype built for your use case." btnText="Build Your AI Assistant" note="FREE STRATEGY SESSION · CUSTOM PROTOTYPE · NO COMMITMENT" />
    </div>
  );
}
