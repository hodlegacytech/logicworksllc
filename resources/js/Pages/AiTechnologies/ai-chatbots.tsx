import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '90%', lbl: 'CSAT Improvement' },
  { val: '73%', lbl: 'Ticket Deflection' },
  { val: '5x', lbl: 'Concurrent Users' },
  { val: '48hrs', lbl: 'Avg. Launch Time' },
];

const bento = [
  { icon: 'NLP', title: 'Natural Language Understanding', desc: 'LLM powered intent detection handles typos, slang, and multi turn conversations, well beyond simple keyword matching', wide: false },
  { icon: 'BRAND', title: 'Brand-Voice Training', desc: 'Fine tuning on your tone guidelines, product vocabulary, and support transcripts keeps every response sounding authentically on brand', wide: false },
  { icon: 'KB', title: 'Dynamic Knowledge Retrieval', desc: 'RAG architecture pulls answers from your docs, help center, and product catalog in real time, staying current rather than stale', wide: true },
  { icon: 'WIDGET', title: 'Embeddable Widget & API', desc: 'A drop in website widget, mobile SDK, and REST API support custom deployments, fully white label ready with your colors, logo, and domain', wide: false },
  { icon: 'ANLY', title: 'Conversation Analytics', desc: 'Resolution rates, sentiment trends, top unanswered questions, and conversion impact appear in dashboards your teams will actually use', wide: false },
  { icon: 'LIVE', title: 'Live Chat Coexistence', desc: 'The bot runs alongside existing live chat tools, handling tier 1 while agents receive escalations with full context and suggested replies', wide: false },
];

const useCases = [
  { num: '01', title: 'Customer Support', desc: 'Deflect over 70% of tier 1 tickets, including order status, returns, account issues, and FAQs, with instant responses around the clock' },
  { num: '02', title: 'SaaS Product Help', desc: 'In app chatbots guide users through features, troubleshoot errors, and reduce churn by resolving friction before users ever leave' },
  { num: '03', title: 'Lead Generation', desc: 'Website visitors get engaged proactively, with contact info captured, interest qualified, and hot leads pushed to sales in real time' },
  { num: '04', title: 'Internal Helpdesk', desc: 'Employee facing bots handle IT, HR, and policy questions, reducing internal ticket volume and onboarding time for new hires' },
];

const timeline = [
  { num: '01', title: 'Audit & Scope', desc: 'Analyze support tickets, FAQs, and chat logs to identify the highest impact automation opportunities' },
  { num: '02', title: 'Knowledge Ingestion', desc: 'Index help docs, product manuals, and historical conversations into a searchable knowledge base' },
  { num: '03', title: 'Bot Build & Tune', desc: 'Design conversation flows, train brand voice, and benchmark response quality against real queries' },
  { num: '04', title: 'Channel Deploy', desc: 'Launch on website, app, or messaging platforms with monitoring and fallback rules in place' },
  { num: '05', title: 'Measure & Improve', desc: 'Conduct weekly analytics reviews, run gap analysis on unanswered questions, and refine the model continuously' },
];

const stack = ['OpenAI GPT-4', 'Claude', 'Pinecone', 'Weaviate', 'Intercom', 'Zendesk', 'Freshdesk', 'Drift', 'HubSpot', 'Slack', 'React SDK', 'Node.js'];

const faqs = [
  { q: 'How are modern AI chatbots different from older rule-based chatbots?', a: 'Modern AI chatbots understand natural language and context, allowing them to handle varied phrasing and multi-turn conversations rather than relying on rigid, pre-scripted decision trees.' },
  { q: 'Can an AI chatbot be customized to match our brand\'s tone?', a: 'Yes. Chatbot responses can be trained and styled to match a specific brand voice, whether that\'s formal, casual, or somewhere in between.' },
  { q: 'Will customers know they\'re talking to an AI chatbot instead of a person?', a: 'Most businesses disclose chatbot interactions upfront, which builds trust and is increasingly expected by users and required by emerging regulations in some regions.' },
  { q: 'What happens when an AI chatbot can\'t answer a customer\'s question?', a: 'Well-designed chatbots are built with escalation paths that hand off the conversation to a human agent when a query falls outside what the bot can confidently handle.' },
  { q: 'How long does it take to launch an AI chatbot on our website?', a: 'Most chatbot deployments take 4 to 8 weeks, covering training data, integration with existing systems, and testing across common customer scenarios.' },
];

export default function AiChatbots() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">AI Chatbot Development Services | 24/7 Customer Support Bots | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Build intelligent AI chatbots with LogicWorks LLC that handle support, capture leads, and answer questions instantly. Deliver 24/7 customer engagement at scale." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/ai-chatbots" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="chatbots-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="chatbots-title">AI CHATBOT<br /><span>DEVELOPMENT</span></h1>
          <p className="ai-tech-hero-sub">We deploy AI chatbots that deliver instant, accurate, brand consistent support at essentially infinite scale, deflecting tickets, capturing leads, and keeping customers genuinely satisfied around the clock.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Launch Your Chatbot{arrowIcon}</Link>
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
              <h2 className="sec-title">LEGACY BOTS<br /><em>FRUSTRATE USERS</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Rule based chatbots stuck in endless &quot;I do not understand&quot; loops quietly damage brand trust. Modern AI chatbots powered by large language models understand intent, retrieve accurate answers, and escalate gracefully, turning support from a cost center into a real competitive advantage.</p>
              <div className="ai-tech-check-list">
                {['LLM powered natural language understanding', 'Real time knowledge retrieval from your own docs', 'Brand voice fine tuning for on tone responses', 'An analytics dashboard tracking deflection and CSAT'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['RAG', 'White Label', 'Multi Channel', 'Analytics', 'Handoff'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↓', title: '73% Ticket Deflection', desc: 'Tier 1 inquiries get resolved instantly without agent involvement' },
                { icon: '★', title: '90% CSAT Lift', desc: 'Instant, accurate answers beat long wait times every time' },
                { icon: '∞', title: 'Unlimited Scale', desc: 'Handle 5x concurrent users with zero additional headcount' },
                { icon: '📊', title: 'Actionable Insights', desc: 'Conversation analytics surface product gaps and content needs' },
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
            <p className="sec-desc">Six modules separate enterprise grade AI chatbots from the frustrating legacy bots most people remember.</p>
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
            <h2 className="sec-title">CHATBOTS FOR<br /><em>EVERY CHANNEL</em></h2>
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
            <h2 className="sec-title">PLUGS INTO<br /><em>YOUR TOOLS</em></h2>
            <p className="sec-desc">Help desks, CRMs, messaging platforms, and custom apps — connected out of the box.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="chatbots-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Support at Infinite Scale" title={<>STOP LOSING CUSTOMERS<br /><em>TO WAIT TIMES</em>.</>} sub="Book a free chatbot strategy session and see a working prototype trained on your own knowledge base." btnText="Launch Your Chatbot" note="" />
    </div>
  );
}
