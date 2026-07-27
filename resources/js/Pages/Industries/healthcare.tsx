import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '62%', lbl: 'More Online Bookings' },
  { val: 'HIPAA', lbl: 'Compliant Builds' },
  { val: '3.1x', lbl: 'Patient Lead Volume' },
  { val: '40%', lbl: 'Front-Desk Call Reduction' },
];

const solutions = [
  { num: '01', title: 'HIPAA compliant websites', desc: 'Secure, accessible, conversion optimized sites with encrypted forms, SSL, and privacy first analytics' },
  { num: '02', title: 'Patient portal development', desc: 'Self service portals for records access, bill pay, messaging, and appointment management integrated with your EHR' },
  { num: '03', title: 'Online scheduling and intake', desc: 'Real time appointment booking, automated reminders, and digital intake forms that cut no shows by 35%' },
  { num: '04', title: 'Medical SEO and local domination', desc: 'Condition specific content, Google Business Profile optimization, and citation management for specialty visibility' },
  { num: '05', title: 'Healthcare AI assistants', desc: 'HIPAA aware chatbots handling FAQs, symptom triage, and appointment booking with smart human escalation' },
  { num: '06', title: 'Reputation and review management', desc: 'Automated review requests, monitoring, and response workflows that build trust and lift local rankings' },
];

const useCases = [
  { num: '01', title: 'Private practices and clinics', desc: 'Solo and group practices needing patient acquisition, online booking, and specialty SEO' },
  { num: '02', title: 'Dental and orthodontic', desc: 'High converting sites with virtual consults, insurance verification, and local domination' },
  { num: '03', title: 'Hospitals and health systems', desc: 'Multi location SEO, service line marketing, and enterprise patient portal integrations' },
  { num: '04', title: 'Telehealth and digital health', desc: 'Platform builds, compliance frameworks, and growth marketing for virtual care startups' },
];

const timeline = [
  { num: '01', title: 'Compliance audit', desc: 'HIPAA readiness assessment, current site audit, and competitive landscape analysis' },
  { num: '02', title: 'Strategy and architecture', desc: 'Patient journey mapping, EHR integration planning, and SEO keyword strategy' },
  { num: '03', title: 'Design and build', desc: 'HIPAA compliant development, portal integration, and scheduling system deployment' },
  { num: '04', title: 'Launch and index', desc: 'Go live with medical schema markup, GBP optimization, and analytics tracking' },
  { num: '05', title: 'Grow and optimize', desc: 'Ongoing SEO, review management, and conversion optimization by specialty' },
];

const stack = ['Epic', 'Cerner', 'Athenahealth', 'DrChrono', 'Zocdoc', 'SimplePractice', 'Tebra', 'Google Health', 'HIPAA Hosting', 'Twilio', 'Calendly', 'HL7 FHIR'];

const faqs = [
  { q: 'Why does the healthcare industry need specialized digital solutions rather than generic ones?', a: 'Healthcare involves strict compliance requirements like HIPAA, sensitive patient data, and complex scheduling systems that generic platforms typically aren\'t built to handle properly.' },
  { q: 'How is patient data kept secure in healthcare digital platforms?', a: 'Through HIPAA-compliant infrastructure, encrypted data storage, strict access controls, and regular security audits designed specifically around healthcare regulations.' },
  { q: 'Can a custom healthcare platform integrate with existing electronic health record (EHR) systems?', a: 'Yes, most custom healthcare solutions are built with integration in mind, connecting to existing EHR systems rather than requiring a full data migration.' },
  { q: 'What digital tools matter most for patient acquisition in healthcare?', a: 'Local SEO, a fast and accessible website, and online appointment scheduling tend to have the biggest direct impact on new patient acquisition.' },
  { q: 'How long does it typically take to launch a compliant healthcare platform?', a: 'Timelines vary by complexity, but most compliant healthcare builds take 3 to 6 months given the additional security and regulatory testing required.' },
];

export default function Healthcare() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#166534' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Healthcare Digital Solutions | HIPAA Websites & Patient Growth | LogicWorks AI</title>
        <meta head-key="description" name="description" content="Grow your practice with LogicWorks AI healthcare digital solutions. HIPAA-compliant websites, patient portals, medical SEO, and AI tools to increase bookings." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/industries/healthcare" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="healthcare-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">HC</div>
            <span className="ind-inner-label">Healthcare</span>
          </div>
          <h1 className="ind-inner-title" id="healthcare-title">Healthcare<br /><span>Digital Solutions</span></h1>
          <p className="ind-inner-sub">HIPAA compliant websites, patient portals, AI scheduling, and healthcare SEO engineered to keep appointment books full, without ever putting patient trust or regulatory compliance at risk.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Healthcare Audit{arrowIcon}</Link>
            <Link href="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Industries</Link>
          </div>
        </div>
      </section>

      <section className="ind-impact-band">
        <div className="con">
          <div className="ind-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ind-impact-item">
                <div className="ind-impact-val">{m.val}</div>
                <div className="ind-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-split">
            <div className="reveal-l">
              <div className="sec-label">The Challenge</div>
              <h2 className="sec-title">PATIENTS SEARCH ONLINE.<br /><em>ARE YOU FOUND?</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Nearly 78 percent of patients research providers online before ever booking an appointment. Most practices, however, are still running outdated websites, no real SEO strategy, and phone only scheduling that quietly loses patients to competitors offering a more modern digital front door.</p>
              <div className="ind-check-list">
                {['HIPAA compliant architecture from day one', 'Online scheduling and patient portal integration', 'Medical SEO and local domination for your specialty', 'AI assistants for appointment triage and FAQ handling'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['HIPAA', 'patient portal', 'medical SEO', 'telehealth', 'EHR integration'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '📅', title: '62 percent more online bookings', desc: 'Self service scheduling captures patients around the clock without added staff overhead' },
                { icon: '🛡', title: 'Full HIPAA compliance', desc: 'Encrypted data, BAA agreements, and audit ready infrastructure throughout' },
                { icon: '🔍', title: 'Specialty SEO dominance', desc: 'Ranking for condition specific and local provider searches alike' },
                { icon: '🤖', title: 'AI patient assistants', desc: 'Automated triage, reminders, and pre visit intake forms handled instantly' },
              ].map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  <div className="ind-outcome-icon">{o.icon}</div>
                  <div className="ind-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Solutions</div>
            <h2 className="sec-title">DIGITAL BUILT FOR<br /><em>HEALTHCARE</em></h2>
            <p className="sec-desc">Six healthcare specific capabilities turn your digital presence into a genuine patient acquisition engine.</p>
          </div>
          <div className="ind-solution-grid">
            {solutions.map((s) => (
              <article key={s.title} className="ind-solution-card">
                <div className="ind-solution-num">{s.num}</div>
                <h3 className="ind-solution-title">{s.title}</h3>
                <p className="ind-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Who We Serve</div>
            <h2 className="sec-title">HEALTHCARE<br /><em>VERTICALS</em></h2>
            <p className="sec-desc">Proven digital solutions across the entire healthcare spectrum.</p>
          </div>
          <div className="ind-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="ind-use-card">
                <div className="ind-use-num">{u.num}</div>
                <h3 className="ind-use-title">{u.title}</h3>
                <p className="ind-use-desc">{u.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Process</div>
            <h2 className="sec-title">LIVE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From compliance audit to patient acquisition, a structured healthcare digital rollout from start to finish.</p>
          </div>
          <div className="ind-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="ind-process-step">
                <div className="ind-process-dot">{s.num}</div>
                <h3 className="ind-process-title">{s.title}</h3>
                <p className="ind-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Integrations</div>
            <h2 className="sec-title">CONNECTS TO<br /><em>YOUR SYSTEMS</em></h2>
            <p className="sec-desc">EHR platforms, scheduling tools, and healthcare marketing stack.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="hc-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Healthcare" title={<>YOUR PRACTICE DESERVES<br /><em>DIGITAL THAT HEALS GROWTH</em>.</>} sub="Book a free healthcare digital audit and see how compliant technology actually drives patient acquisition." btnText="Get a Healthcare Audit" note="FREE HIPAA READINESS AUDIT · PATIENT ACQUISITION ROADMAP · NO COMMITMENT" />
    </div>
  );
}
