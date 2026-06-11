import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta, verticals } from './shared';

const metrics = [
  { val: '15+', lbl: 'Industries Served' },
  { val: '500+', lbl: 'Vertical Projects' },
  { val: '98%', lbl: 'Client Retention' },
  { val: '12yr', lbl: 'Cross-Sector Experience' },
];

const capabilities = [
  { icon: 'WEB', title: 'Industry-Tailored Web Design', desc: 'Conversion architectures built around sector-specific user journeys, compliance requirements, and buying behaviors — not generic templates.' },
  { icon: 'SEO', title: 'Vertical SEO & AEO', desc: 'Keyword strategies, content clusters, and answer-engine optimization calibrated to how your industry searches and buys.' },
  { icon: 'AI', title: 'Sector AI Solutions', desc: 'AI assistants, automation, and data intelligence deployed with industry-specific guardrails, integrations, and compliance frameworks.' },
  { icon: 'MKT', title: 'Targeted Digital Marketing', desc: 'Paid media, social, and content campaigns with vertical benchmarks, audience targeting, and creative that resonates in your market.' },
  { icon: 'BRD', title: 'Industry Brand Positioning', desc: 'Brand strategy and design that differentiates within crowded verticals — speaking the language buyers and regulators expect.' },
  { icon: 'DATA', title: 'Vertical Analytics', desc: 'Dashboards and KPIs mapped to industry-standard metrics — patient acquisition cost, case value, MRR, occupancy rate, and more.' },
];

const timeline = [
  { num: '01', title: 'Vertical Discovery', desc: 'Deep-dive into your market, competitors, compliance landscape, and customer decision journey.' },
  { num: '02', title: 'Strategy Blueprint', desc: 'Custom roadmap aligned to industry benchmarks, seasonal patterns, and regulatory constraints.' },
  { num: '03', title: 'Build & Deploy', desc: 'Design, development, and marketing execution by teams who know your vertical inside out.' },
  { num: '04', title: 'Launch & Optimize', desc: 'Go-live with vertical-specific tracking, A/B testing, and performance benchmarks from day one.' },
  { num: '05', title: 'Scale & Evolve', desc: 'Ongoing optimization as market conditions, algorithms, and buyer behavior shift in your sector.' },
];

const faqs = [
  { q: 'Do you have experience in our specific industry?', a: 'We maintain dedicated vertical teams across healthcare, real estate, finance, legal, e-commerce, SaaS, education, and hospitality — with 500+ projects and case studies spanning each sector. If your industry is adjacent, our discovery process maps transferable expertise quickly.' },
  { q: 'How is industry-specific work different from general agency services?', a: 'Vertical expertise means we already know your compliance requirements, buyer psychology, competitive benchmarks, and platform integrations. You skip the learning curve — we start executing from week one with strategies proven in your market.' },
  { q: 'Can you handle regulated industries like healthcare and finance?', a: 'Yes. We build HIPAA-compliant healthcare systems, FINRA-aware financial experiences, and ADA/WCAG-accessible platforms across regulated verticals. Compliance is designed in from discovery, not bolted on at launch.' },
  { q: 'Do you work with both startups and enterprise in the same vertical?', a: 'Absolutely. Our vertical playbooks scale — from Series A SaaS companies needing product-led growth sites to enterprise healthcare networks requiring multi-location SEO and patient portal integrations.' },
  { q: 'How do we get started with an industry-specific engagement?', a: 'Book a free vertical strategy session. We match you with a team lead from your industry, audit your current digital presence against vertical benchmarks, and deliver a scoped roadmap within one week.' },
];

export default function Industries() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);

  return (
    <div ref={pageRef} className="ind-page">
      <Helmet>
        <title>Industries We Serve | LogicWorks — Vertical Digital Expertise</title>
        <meta name="description" content="LogicWorks delivers specialized digital solutions across 15+ industries — healthcare, real estate, finance, legal, e-commerce, SaaS, education, and hospitality with proven vertical expertise." />
        <link rel="canonical" href="https://logicworks.com/industries" />
      </Helmet>

      <section className="ind-hero" aria-labelledby="industries-title">
        <div className="ind-hero-orbs" aria-hidden="true" />
        <div className="ind-hero-grid" aria-hidden="true" />
        <div className="con ind-hero-inner">
          <div className="ind-eyebrow">
            <span className="ind-eyebrow-pips" aria-hidden="true">
              <span className="ind-eyebrow-pip" style={{ background: '#166534' }} />
              <span className="ind-eyebrow-pip" style={{ background: '#1a4bdb' }} />
              <span className="ind-eyebrow-pip" style={{ background: '#7c3aed' }} />
              <span className="ind-eyebrow-pip" style={{ background: '#c8922a' }} />
            </span>
            Vertical Expertise
          </div>
          <h1 className="ind-hero-title" id="industries-title">Industries<br /><span>We Serve</span></h1>
          <p className="ind-hero-sub">Specialized expertise across 15+ verticals. We speak your language, know your market, and deliver digital solutions engineered for the way your industry actually works.</p>
          <div className="ind-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Talk to Your Vertical Team{arrowIcon}</Link>
            <a href="#verticals" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Explore Verticals</a>
          </div>
        </div>
      </section>

      <section className="ind-stat-band">
        <div className="con">
          <div className="ind-stat-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ind-stat-item">
                <div className="ind-stat-val">{m.val}</div>
                <div className="ind-stat-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-split">
            <div className="reveal-l">
              <div className="sec-label">Why Vertical Expertise</div>
              <h2 className="sec-title">GENERIC AGENCIES<br /><em>DO NOT GET IT</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Every industry has unique compliance rules, buyer journeys, competitive dynamics, and platform requirements. A one-size-fits-all approach wastes budget on strategies that ignore how your market actually operates.</p>
              <div className="ind-check-list">
                {['Teams with deep vertical experience — not generalists', 'Compliance-aware builds for regulated industries', 'Benchmarks and KPIs calibrated to your sector', 'Proven playbooks that skip the learning curve'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
            </div>
            <div className="reveal-r ind-proof-panel">
              {[
                { icon: '🎯', title: 'Sector-Specific Strategy', desc: 'Roadmaps built on vertical benchmarks, not generic best practices.' },
                { icon: '⚖', title: 'Regulatory Fluency', desc: 'HIPAA, FINRA, ADA, and industry compliance designed in from day one.' },
                { icon: '📈', title: 'Vertical KPIs', desc: 'Metrics that matter in your industry — not vanity traffic numbers.' },
                { icon: '🤝', title: 'Dedicated Team Leads', desc: 'Account leads who have delivered 50+ projects in your vertical.' },
              ].map((o) => (
                <div key={o.title} className="ind-proof-item">
                  <div className="ind-proof-icon">{o.icon}</div>
                  <div className="ind-proof-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt" id="verticals">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Our Verticals</div>
            <h2 className="sec-title">EXPLORE YOUR<br /><em>INDUSTRY</em></h2>
            <p className="sec-desc">Eight core verticals where we maintain dedicated teams, proven playbooks, and deep domain expertise.</p>
          </div>
          <div className="ind-vertical-grid">
            {verticals.map((v) => (
              <Link
                key={v.path}
                to={v.path}
                className="ind-vertical-card"
                style={{ '--ind-accent': v.accent } as React.CSSProperties}
              >
                <div className="ind-vertical-code">{v.code}</div>
                <h3 className="ind-vertical-title">{v.title}</h3>
                <p className="ind-vertical-desc">{v.desc}</p>
                <span className="ind-vertical-link">Explore{arrowIcon}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">FULL-STACK DIGITAL<br /><em>FOR EVERY VERTICAL</em></h2>
            <p className="sec-desc">Web, SEO, AI, marketing, branding, and analytics — all calibrated to industry-specific requirements and buyer behavior.</p>
          </div>
          <div className="ind-cap-grid">
            {capabilities.map((c) => (
              <article key={c.title} className="ind-cap-card">
                <div className="ind-cap-icon">{c.icon}</div>
                <h3 className="ind-cap-title">{c.title}</h3>
                <p className="ind-cap-desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Our Approach</div>
            <h2 className="sec-title">VERTICAL SUCCESS<br /><em>IN 5 PHASES</em></h2>
            <p className="sec-desc">From industry discovery to ongoing optimization — a structured engagement model built for sector-specific results.</p>
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

      <IndustriesFaq id="ind-faq" title={<>Industry<br /><em>QUESTIONS ANSWERED</em></>} desc="What decision-makers ask before choosing a vertical-specialized digital partner." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Your Industry. Our Expertise." title={<>READY TO WORK WITH<br /><em>A TEAM THAT GETS IT</em>?</>} sub="Book a free vertical strategy session and get matched with a team lead who knows your market inside out." btnText="Talk to Your Vertical Team" note="FREE STRATEGY SESSION · VERTICAL BENCHMARK AUDIT · NO COMMITMENT" />
    </div>
  );
}
