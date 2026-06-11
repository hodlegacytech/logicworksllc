import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '65%', lbl: 'Call Volume Deflection' },
  { val: '<800ms', lbl: 'Response Latency' },
  { val: '98%', lbl: 'Speech Recognition Accuracy' },
  { val: '24/7', lbl: 'Phone Line Coverage' },
];

const bento = [
  { icon: 'IVR', title: 'AI-Powered IVR Replacement', desc: 'Replace frustrating phone trees with natural voice conversations — callers speak freely, AI understands intent, and routes or resolves without pressing a single button.', wide: false },
  { icon: 'AGENT', title: 'Voice AI Agents', desc: 'Outbound and inbound voice agents that handle appointment reminders, payment collections, lead follow-ups, and customer surveys with human-like speech.', wide: false },
  { icon: 'REAL', title: 'Real-Time Speech Processing', desc: 'Sub-800ms latency with streaming STT, LLM reasoning, and TTS synthesis — conversations feel natural, not robotic, even on complex multi-turn dialogues.', wide: true },
  { icon: 'MULTI', title: 'Multilingual Voice Support', desc: 'Automatic language detection and response in 40+ languages — serve global customers on a single phone line without separate IVR branches.', wide: false },
  { icon: 'SENT', title: 'Sentiment & Emotion Detection', desc: 'Real-time analysis of caller tone, frustration, and urgency — triggering priority routing, supervisor alerts, or empathetic response adjustments.', wide: false },
  { icon: 'REC', title: 'Call Analytics & Transcription', desc: 'Every call transcribed, summarized, and tagged automatically — searchable archives, compliance records, and coaching insights for your team.', wide: false },
];

const useCases = [
  { num: '01', title: 'Customer Service Hotlines', desc: 'Replace tier-1 phone support with AI voice agents that handle order status, billing inquiries, and account changes — escalating only complex cases.' },
  { num: '02', title: 'Healthcare Scheduling', desc: 'HIPAA-compliant voice AI for appointment booking, prescription refill requests, and pre-visit screening — reducing front-desk call volume dramatically.' },
  { num: '03', title: 'Sales & Lead Qualification', desc: 'Outbound voice campaigns that qualify leads, book demos, and nurture prospects — scaling SDR outreach without scaling headcount.' },
  { num: '04', title: 'Smart Devices & IoT', desc: 'Embedded voice interfaces for products, kiosks, and smart environments — hands-free control with custom wake words and domain-specific vocabulary.' },
];

const timeline = [
  { num: '01', title: 'Call Flow Audit', desc: 'Analyze call recordings, IVR paths, and agent scripts to map automation opportunities.' },
  { num: '02', title: 'Voice Persona Design', desc: 'Define voice tone, personality, conversation scripts, and escalation rules.' },
  { num: '03', title: 'Build & Train', desc: 'Configure STT/TTS pipelines, train on domain vocabulary, and benchmark latency.' },
  { num: '04', title: 'Telephony Integration', desc: 'Connect to Twilio, Vonage, or SIP trunks — deploy on existing phone numbers.' },
  { num: '05', title: 'Monitor & Tune', desc: 'Review call analytics, improve recognition accuracy, and expand conversation coverage.' },
];

const stack = ['Twilio', 'Deepgram', 'ElevenLabs', 'OpenAI Realtime', 'Amazon Polly', 'Vonage', 'WebRTC', 'Python', 'Node.js', 'AWS Connect', 'Genesys', 'Five9'];

const faqs = [
  { q: 'Will callers know they are talking to AI?', a: 'We recommend transparent disclosure — "Hi, I\'m LogicWorks AI assistant" — which builds trust. Voice quality is natural enough that many callers prefer AI for quick tasks over hold times with human agents.' },
  { q: 'Can voice AI handle accents and background noise?', a: 'Modern STT engines achieve 95–98% accuracy across accents with noise cancellation. We fine-tune on your specific caller demographics and test extensively before launch.' },
  { q: 'How does it integrate with our phone system?', a: 'We integrate via Twilio, Vonage, SIP trunks, or directly with platforms like Genesys, Five9, and AWS Connect. Your existing phone numbers stay the same — AI handles calls before or instead of human queues.' },
  { q: 'Is voice AI HIPAA or PCI compliant?', a: 'Yes. We implement encrypted call streams, PII redaction in transcripts, audit logging, and BAA agreements for healthcare. Payment card data is never processed by voice AI — callers are routed to secure payment lines.' },
  { q: 'What is the typical ROI timeline?', a: 'Most clients see positive ROI within 3–4 months through call deflection savings. A 100-agent call center saving 30% of tier-1 volume typically recovers implementation cost in under 90 days.' },
];

export default function VoiceAi() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Voice AI Solutions | LogicWorks — Intelligent Voice Interfaces</title>
        <meta head-key="description" name="description" content="LogicWorks builds Voice AI solutions — IVR replacement, voice agents, real-time speech processing, and multilingual phone automation with sub-800ms latency." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/voice-ai" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="voice-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="voice-title">VOICE AI<br /><span>SOLUTIONS</span></h1>
          <p className="ai-tech-hero-sub">Frictionless voice interfaces for customer service, IVR replacement, and smart device integration — natural conversations with sub-800ms latency, 24/7 phone coverage, and enterprise-grade compliance.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Build Voice AI{arrowIcon}</Link>
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
              <h2 className="sec-title">PHONE TREES<br /><em>KILL CUSTOMER TRUST</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Press 1, press 2, hold for 20 minutes — legacy IVR systems frustrate callers and burn agent time on repetitive inquiries. Voice AI replaces rigid phone trees with natural conversations that understand, resolve, and route intelligently.</p>
              <div className="ai-tech-check-list">
                {['Natural language IVR — no button pressing', 'Sub-800ms response latency for real conversations', 'Multilingual support on a single phone line', 'Automatic transcription and call analytics'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['IVR Replacement', 'Voice Agents', 'STT/TTS', 'Multilingual', 'Analytics'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↓', title: '65% Call Deflection', desc: 'Tier-1 inquiries resolved by voice AI without reaching an agent.' },
                { icon: '⚡', title: 'Sub-800ms Latency', desc: 'Real-time speech processing that feels like talking to a person.' },
                { icon: '🎯', title: '98% Recognition Accuracy', desc: 'Fine-tuned STT handles accents, jargon, and domain vocabulary.' },
                { icon: '📞', title: '24/7 Phone Coverage', desc: 'No more closed signs — every call answered, every time.' },
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
            <h2 className="sec-title">VOICE AI THAT<br /><em>SOUNDS HUMAN</em></h2>
            <p className="sec-desc">Six modules powering natural voice experiences from phone lines to smart devices.</p>
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
            <h2 className="sec-title">VOICE AI FOR<br /><em>EVERY INDUSTRY</em></h2>
            <p className="sec-desc">From call centers to smart devices — voice interfaces that scale without scaling staff.</p>
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
            <p className="sec-desc">From call audit to production voice agents — structured rollout on your existing phone infrastructure.</p>
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
            <h2 className="sec-title">WORKS WITH<br /><em>YOUR PHONE STACK</em></h2>
            <p className="sec-desc">Telephony providers, contact center platforms, and speech engines — connected seamlessly.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="voice-faq" title={<>Voice AI<br /><em>QUESTIONS ANSWERED</em></>} desc="What contact center and operations leaders ask before deploying voice AI." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Answer Every Call" title={<>YOUR PHONE LINE<br /><em>NEVER CLOSES</em>.</>} sub="Book a free voice AI demo and hear a custom voice agent handle your top call scenarios live." btnText="Build Voice AI" note="FREE VOICE DEMO · CUSTOM AGENT · NO COMMITMENT" />
    </div>
  );
}
