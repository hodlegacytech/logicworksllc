import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '90%', lbl: 'CSAT Improvement' },
  { val: '73%', lbl: 'Ticket Deflection' },
  { val: '5x', lbl: 'Concurrent Users' },
  { val: '48hrs', lbl: 'Avg. Launch Time' },
];

const bento = [
  { icon: 'NLP', title: 'Natural Language Understanding', desc: 'LLM-powered intent detection handles typos, slang, and multi-turn conversations — not just keyword matching from legacy bots.', wide: false },
  { icon: 'BRAND', title: 'Brand-Voice Training', desc: 'Fine-tuned on your tone guidelines, product vocabulary, and support transcripts so every response sounds authentically on-brand.', wide: false },
  { icon: 'KB', title: 'Dynamic Knowledge Retrieval', desc: 'RAG architecture pulls answers from your docs, help center, and product catalog in real time — always current, never stale training data.', wide: true },
  { icon: 'WIDGET', title: 'Embeddable Widget & API', desc: 'Drop-in website widget, mobile SDK, and REST API for custom deployments. White-label ready with your colors, logo, and domain.', wide: false },
  { icon: 'ANLY', title: 'Conversation Analytics', desc: 'Track resolution rates, sentiment trends, top unanswered questions, and conversion impact — dashboards your support and product teams actually use.', wide: false },
  { icon: 'LIVE', title: 'Live Chat Coexistence', desc: 'Runs alongside existing live chat tools — AI handles tier-1, agents get escalations with full context and suggested replies.', wide: false },
];

const useCases = [
  { num: '01', title: 'Customer Support', desc: 'Deflect 70%+ of tier-1 tickets — order status, returns, account issues, and FAQs — with instant, accurate responses around the clock.' },
  { num: '02', title: 'SaaS Product Help', desc: 'In-app chatbots that guide users through features, troubleshoot errors, and reduce churn by resolving friction before users leave.' },
  { num: '03', title: 'Lead Generation', desc: 'Engage website visitors proactively, capture contact info, qualify interest, and push hot leads to sales in real time.' },
  { num: '04', title: 'Internal Helpdesk', desc: 'Employee-facing bots for IT, HR, and policy questions — reducing internal ticket volume and onboarding time for new hires.' },
];

const timeline = [
  { num: '01', title: 'Audit & Scope', desc: 'Analyze support tickets, FAQs, and chat logs to identify highest-impact automation opportunities.' },
  { num: '02', title: 'Knowledge Ingestion', desc: 'Index help docs, product manuals, and historical conversations into a searchable knowledge base.' },
  { num: '03', title: 'Bot Build & Tune', desc: 'Design conversation flows, train brand voice, and benchmark response quality against real queries.' },
  { num: '04', title: 'Channel Deploy', desc: 'Launch on website, app, or messaging platforms with monitoring and fallback rules.' },
  { num: '05', title: 'Measure & Improve', desc: 'Weekly analytics review, gap analysis on unanswered questions, and continuous model refinement.' },
];

const stack = ['OpenAI GPT-4', 'Claude', 'Pinecone', 'Weaviate', 'Intercom', 'Zendesk', 'Freshdesk', 'Drift', 'HubSpot', 'Slack', 'React SDK', 'Node.js'];

const faqs = [
  { q: 'Will the chatbot replace our support team?', a: 'No — it handles repetitive tier-1 inquiries so your team focuses on complex, high-value cases. Most clients see 60–75% ticket deflection while improving CSAT scores.' },
  { q: 'How do you keep answers accurate and up to date?', a: 'We use RAG (Retrieval-Augmented Generation) — the bot searches your live knowledge base before answering. When you update docs, answers update automatically without retraining.' },
  { q: 'Can we customize the look and feel?', a: 'Fully white-label — your colors, logo, avatar, greeting messages, and widget placement. We also provide a JavaScript SDK and React component for deep integration.' },
  { q: 'What if the bot gives a wrong answer?', a: 'Guardrails limit responses to verified knowledge sources. Confidence thresholds trigger human handoff. Every conversation is logged for review and continuous improvement.' },
  { q: 'How fast can we go live?', a: 'Simple FAQ bot with existing documentation: 2–3 weeks. Full support bot with CRM integration and multi-channel deployment: 6–8 weeks.' },
];

export default function AiChatbots() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Helmet>
        <title>AI Chatbot Development | LogicWorks — Intelligent Customer Engagement</title>
        <meta name="description" content="LogicWorks builds AI chatbots that deliver instant, accurate, brand-consistent support at infinite scale — 73% ticket deflection with LLM-powered natural language understanding." />
        <link rel="canonical" href="https://logicworks.com/ai-chatbots" />
      </Helmet>

      <section className="ai-tech-hero" aria-labelledby="chatbots-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="chatbots-title">AI CHATBOT<br /><span>DEVELOPMENT</span></h1>
          <p className="ai-tech-hero-sub">Deploy AI chatbots that deliver instant, accurate, brand-consistent support at infinite scale — deflecting tickets, capturing leads, and delighting customers 24/7.</p>
          <div className="ai-tech-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Launch Your Chatbot{arrowIcon}</Link>
            <Link to="/ai-solutions" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All AI Services</Link>
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
              <h2 className="sec-title">LEGACY BOTS<br /><em>FRUSTRATE USERS</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Rule-based chatbots with "I don't understand" loops damage brand trust. Modern AI chatbots powered by LLMs understand intent, retrieve accurate answers, and escalate gracefully — turning support from cost center to competitive advantage.</p>
              <div className="ai-tech-check-list">
                {['LLM-powered natural language understanding', 'Real-time knowledge retrieval from your docs', 'Brand-voice fine-tuning for on-tone responses', 'Analytics dashboard with deflection and CSAT metrics'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['RAG', 'White-Label', 'Multi-Channel', 'Analytics', 'Handoff'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↓', title: '73% Ticket Deflection', desc: 'Tier-1 inquiries resolved instantly without agent involvement.' },
                { icon: '★', title: '90% CSAT Lift', desc: 'Instant, accurate answers beat wait times every time.' },
                { icon: '∞', title: 'Unlimited Scale', desc: 'Handle 5x concurrent users with zero additional headcount.' },
                { icon: '📊', title: 'Actionable Insights', desc: 'Discover product gaps and content needs from conversation analytics.' },
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
            <h2 className="sec-title">CHATBOTS BUILT FOR<br /><em>REAL CONVERSATIONS</em></h2>
            <p className="sec-desc">Six modules that separate enterprise-grade AI chatbots from frustrating legacy bots.</p>
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
            <h2 className="sec-title">CHATBOTS FOR<br /><em>EVERY CHANNEL</em></h2>
            <p className="sec-desc">Support, sales, product help, and internal helpdesk — one AI engine, multiple deployments.</p>
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
            <p className="sec-desc">From ticket audit to production deployment — fast, structured, and measurable.</p>
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
            <h2 className="sec-title">PLUGS INTO<br /><em>YOUR TOOLS</em></h2>
            <p className="sec-desc">Help desks, CRMs, messaging platforms, and custom apps — connected out of the box.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="chatbots-faq" title={<>AI Chatbot<br /><em>QUESTIONS ANSWERED</em></>} desc="What support and product leaders ask before deploying AI chatbots." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Support at Infinite Scale" title={<>STOP LOSING CUSTOMERS<br /><em>TO WAIT TIMES</em>.</>} sub="Book a free chatbot strategy session and see a working prototype trained on your knowledge base." btnText="Launch Your Chatbot" note="FREE STRATEGY SESSION · LIVE PROTOTYPE · NO COMMITMENT" />
    </div>
  );
}
