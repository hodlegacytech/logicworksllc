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
  { icon: 'IVR', title: 'AI powered IVR replacement', desc: 'Frustrating phone trees get replaced with natural voice conversation, where callers speak freely and AI understands intent, routing or resolving without a single button press', wide: false },
  { icon: 'AGENT', title: 'Voice AI agents', desc: 'Outbound and inbound voice agents handle appointment reminders, payment collections, lead follow ups, and customer surveys with genuinely human like speech', wide: false },
  { icon: 'REAL', title: 'Real time speech processing', desc: 'Sub 800 millisecond latency through streaming speech to text, LLM reasoning, and text to speech synthesis makes conversations feel natural rather than robotic', wide: true },
  { icon: 'MULTI', title: 'Multilingual voice support', desc: 'Automatic language detection and response across more than 40 languages serve global customers on a single phone line, without separate IVR branches', wide: false },
  { icon: 'SENT', title: 'Sentiment and emotion detection', desc: 'Real time analysis of caller tone, frustration, and urgency triggers priority routing, supervisor alerts, or more empathetic response adjustments', wide: false },
  { icon: 'REC', title: 'Call analytics and transcription', desc: 'Every call gets transcribed, summarized, and tagged automatically, building searchable archives, compliance records, and coaching insights for your team', wide: false },
];

const useCases = [
  { num: '01', title: 'Customer service hotlines', desc: 'Tier 1 phone support gets replaced by AI voice agents handling order status, billing inquiries, and account changes, escalating only the complex cases' },
  { num: '02', title: 'Healthcare scheduling', desc: 'HIPAA compliant voice AI handles appointment booking, prescription refill requests, and pre visit screening, dramatically cutting front desk call volume' },
  { num: '03', title: 'Sales and lead qualification', desc: 'Outbound voice campaigns qualify leads, book demos, and nurture prospects, scaling SDR outreach without scaling headcount' },
  { num: '04', title: 'Smart devices and IoT', desc: 'Embedded voice interfaces for products, kiosks, and smart environments offer hands free control with custom wake words and domain specific vocabulary' },
];

const timeline = [
  { num: '01', title: 'Call flow audit', desc: 'Analyze call recordings, IVR paths, and agent scripts to map automation opportunities' },
  { num: '02', title: 'Voice persona design', desc: 'Define voice tone, personality, conversation scripts, and escalation rules' },
  { num: '03', title: 'Build and train', desc: 'Configure speech to text and text to speech pipelines, train on domain vocabulary, and benchmark latency' },
  { num: '04', title: 'Telephony integration', desc: 'Connect to Twilio, Vonage, or SIP trunks, then deploy directly onto existing phone numbers' },
  { num: '05', title: 'Monitor and tune', desc: 'Review call analytics, improve recognition accuracy, and expand conversation coverage over time' },
];

const stack = ['Twilio', 'Deepgram', 'ElevenLabs', 'OpenAI Realtime', 'Amazon Polly', 'Vonage', 'WebRTC', 'Python', 'Node.js', 'AWS Connect', 'Genesys', 'Five9'];

const faqs = [
  { q: 'What can voice AI actually be used for in a business setting?', a: 'Common applications include automated phone answering, appointment scheduling, customer support triage, and voice-activated internal tools for hands-free workflows.' },
  { q: 'How natural do voice AI conversations sound compared to a few years ago?', a: 'Significantly more natural. Modern voice AI handles tone, pacing, and conversational flow far better than older robotic-sounding systems.' },
  { q: 'Can voice AI integrate with our existing phone systems?', a: 'Yes. Most voice AI solutions are built to integrate with standard business phone systems and call routing software without requiring new hardware.' },
  { q: 'Will customers be able to tell they\'re speaking with voice AI instead of a person?', a: 'Often not immediately, though most businesses disclose this upfront for transparency, particularly in industries where that disclosure is expected or required.' },
  { q: 'How long does it take to deploy a voice AI system for customer service?', a: 'Most deployments take 6 to 10 weeks, covering call flow design, voice training, integration, and testing against real customer scenarios.' },
];

export default function VoiceAi() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Voice AI Solutions | AI Phone Agents & IVR Replacement | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Transform customer calls with LogicWorks LLC Voice AI. Replace IVR systems with natural voice agents that handle inquiries, route calls, and deliver 24/7 support." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/voice-ai" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="voice-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="voice-title">VOICE <span>AI</span></h1>
          <p className="ai-tech-hero-sub">We replace rigid phone trees with natural conversations that understand, resolve, and route intelligently, so callers stop pressing buttons and start actually getting answers.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Press 1, press 2, hold for 20 minutes, legacy IVR systems frustrate callers and burn agent time on repetitive inquiries that should never have reached a person in the first place. Voice AI replaces those rigid phone trees with natural conversations that actually understand intent.</p>
              <div className="ai-tech-check-list">
                {['Natural language IVR with no button pressing required', 'Sub 800 millisecond response latency for real conversation', 'Multilingual support running on a single phone line', 'Automatic transcription and call analytics'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['IVR replacement', 'voice agents', 'STT and TTS', 'multilingual', 'analytics'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '↓', title: '65% call deflection', desc: 'Tier 1 inquiries get resolved by voice AI without ever reaching an agent' },
                { icon: '⚡', title: 'Sub 800ms latency', desc: 'Real time speech processing that feels genuinely like talking to a person' },
                { icon: '🎯', title: '98% recognition accuracy', desc: 'Fine tuned speech to text handles accents, jargon, and domain vocabulary' },
                { icon: '📞', title: '24/7 phone coverage', desc: 'No more closed signs, every call gets answered, every time' },
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
            <p className="sec-desc">Six modules power natural voice experiences from phone lines all the way to smart devices.</p>
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
            <h2 className="sec-title">VOICE AI FOR<br /><em>EVERY INDUSTRY</em></h2>
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
            <h2 className="sec-title">WORKS WITH<br /><em>YOUR PHONE STACK</em></h2>
            <p className="sec-desc">Telephony providers, contact center platforms, and speech engines — connected seamlessly.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="voice-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Answer Every Call" title={<>YOUR PHONE LINE<br /><em>NEVER CLOSES</em>.</>} sub="Book a free voice AI demo and hear a custom voice agent handle your top call scenarios live." btnText="Build Voice AI" note="" />
    </div>
  );
}
