import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '4.6x', lbl: 'Average ROAS' },
  { val: '187%', lbl: 'Organic Traffic Growth' },
  { val: '32%', lbl: 'Conversion Rate Lift' },
  { val: '360°', lbl: 'Channel Coverage' },
];

const solutions = [
  { num: '01', title: 'Integrated Strategy & Planning', desc: 'Unified digital marketing roadmap aligning SEO, paid media, social, content, and email around shared KPIs and customer journey stages.' },
  { num: '02', title: 'Search Marketing (SEO & PPC)', desc: 'Full-funnel search dominance — organic rankings, paid search campaigns, and answer engine optimization working as one coordinated engine.' },
  { num: '03', title: 'Paid Media & Programmatic', desc: 'Google Ads, Meta, LinkedIn, and programmatic campaigns with cross-channel attribution, bid optimization, and relentless ROI tracking.' },
  { num: '04', title: 'Content & Social Marketing', desc: 'Editorial calendars, platform-native content, community management, and influencer partnerships that build brand authority and engagement.' },
  { num: '05', title: 'Conversion Rate Optimization', desc: 'A/B testing, landing page optimization, funnel analysis, and UX improvements that turn existing traffic into measurable revenue.' },
  { num: '06', title: 'Analytics & Reporting', desc: 'Custom dashboards, multi-touch attribution models, and executive reporting that connect marketing spend to pipeline and revenue.' },
];

const useCases = [
  { icon: 'B2B', title: 'B2B & Enterprise', desc: 'Account-based marketing, LinkedIn demand gen, content syndication, and long-cycle nurture programs that fill enterprise pipelines.' },
  { icon: 'DTC', title: 'DTC & E-Commerce', desc: 'Full-funnel e-commerce marketing — Google Shopping, Meta retargeting, email automation, and CRO that maximizes customer lifetime value.' },
  { icon: 'SVC', title: 'Professional Services', desc: 'Lead generation funnels, local and national SEO, thought leadership content, and PPC that delivers qualified consultations.' },
  { icon: 'STU', title: 'Startups & Scale-Ups', desc: 'Lean growth marketing stacks, rapid experimentation frameworks, and channel diversification as you scale from seed to Series B.' },
];

const timeline = [
  { num: '01', title: 'Discovery & Audit', desc: 'Analyze current channels, competitive landscape, customer journey, and performance data to identify highest-impact opportunities.' },
  { num: '02', title: 'Strategy & Roadmap', desc: 'Build integrated marketing plan with channel mix, budget allocation, KPI framework, and 90-day execution priorities.' },
  { num: '03', title: 'Launch & Activate', desc: 'Deploy campaigns across search, paid, social, and content — with tracking, pixels, and attribution properly configured.' },
  { num: '04', title: 'Optimize & Scale', desc: 'Analyze performance data, reallocate budget to winners, A/B test creative and landing pages, and expand successful channels.' },
  { num: '05', title: 'Report & Evolve', desc: 'Monthly executive reporting, quarterly strategy reviews, and continuous adaptation to market shifts and platform changes.' },
];

const channels = ['Google Ads', 'Meta Ads', 'LinkedIn', 'SEO', 'Email', 'HubSpot', 'Google Analytics', 'Semrush', 'Hootsuite', 'Klaviyo', 'Salesforce', 'Looker Studio'];

const faqs = [
  { q: 'What is included in full-service digital marketing?', a: 'Strategy, SEO, paid media, social media, content marketing, email automation, CRO, and analytics — unified under one team with shared KPIs. We tailor the channel mix to your goals, budget, and market.' },
  { q: 'How is LogicWorks different from other agencies?', a: 'We combine elite web development, AI capabilities, and growth marketing under one roof. Your campaigns, landing pages, tracking, and automation are built by the same team — no handoff gaps.' },
  { q: 'What budget do I need to get started?', a: 'Engagement models start at $5K/month for focused channel management. Full integrated programs typically range from $10K–$50K/month depending on channel mix, ad spend, and scope.' },
  { q: 'How do you measure and report ROI?', a: 'We configure multi-touch attribution, connect ad platforms to your CRM, and report on cost per lead, cost per acquisition, ROAS, and pipeline contribution — not vanity metrics.' },
  { q: 'Can you work alongside our in-house team?', a: 'Yes. We operate as an extension of your team — handling specialized channels, providing strategic oversight, or filling gaps while your internal team focuses on brand and product marketing.' },
];

export default function DigitalMarketing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Digital Marketing | LogicWorks — Full-Spectrum Growth Strategy</title>
        <meta head-key="description" name="description" content="LogicWorks digital marketing delivers integrated SEO, paid media, social, content, and CRO — unified strategy that drives measurable revenue across every channel." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/digital-marketing" />
      </Head>

      <section className="mkt-hero" aria-labelledby="digital-marketing-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Marketing</div>
          <h1 className="mkt-hero-title" id="digital-marketing-title">Digital<br /><span>MARKETING</span></h1>
          <p className="mkt-hero-sub">Full-spectrum digital marketing strategy — from search to social, paid to organic — unified under one roof with obsessive ROI tracking.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Book a Strategy Session{arrowIcon}</Link>
            <Link href="/ppc-management" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>PPC Management</Link>
          </div>
        </div>
      </section>

      <section className="mkt-impact">
        <div className="con">
          <div className="mkt-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="mkt-impact-item">
                <div className="mkt-impact-val">{m.val}</div>
                <div className="mkt-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-editorial">
            <div className="reveal-l">
              <div className="sec-label">The Problem</div>
              <h2 className="sec-title">SILOED CHANNELS<br /><em>WASTE BUDGET</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Separate SEO, PPC, and social agencies with conflicting strategies bleed budget and confuse customers. Integrated digital marketing aligns every channel toward one revenue goal.</p>
              <div className="mkt-check-list">
                {['Unified strategy across all digital channels', 'Shared KPIs tied to revenue, not vanity metrics', 'Cross-channel attribution and budget optimization', 'One team — strategy, creative, and execution'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['SEO', 'PPC', 'Social', 'Content', 'CRO', 'Analytics'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Outcomes</div>
              {[
                { icon: '📈', title: 'Revenue Growth', desc: 'Measurable pipeline and revenue impact across every marketing dollar spent.' },
                { icon: '🎯', title: 'Lower CAC', desc: 'Cross-channel optimization that reduces customer acquisition cost over time.' },
                { icon: '🔄', title: 'Full-Funnel Coverage', desc: 'Awareness, consideration, and conversion — every stage of the buyer journey addressed.' },
                { icon: '📊', title: 'Transparent Reporting', desc: 'Executive dashboards that show exactly what marketing delivers to the bottom line.' },
              ].map((o) => (
                <div key={o.title} className="mkt-results-item">
                  <div className="mkt-results-icon">{o.icon}</div>
                  <div className="mkt-results-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">MARKETING THAT<br /><em>DRIVES REVENUE</em></h2>
            <p className="sec-desc">Six integrated disciplines that turn fragmented tactics into a cohesive growth engine.</p>
          </div>
          <div className="mkt-solution-grid">
            {solutions.map((s) => (
              <article key={s.title} className="mkt-solution-card">
                <div className="mkt-solution-num">{s.num}</div>
                <h3 className="mkt-solution-title">{s.title}</h3>
                <p className="mkt-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--alt">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">DIGITAL MARKETING FOR<br /><em>EVERY STAGE</em></h2>
            <p className="sec-desc">From startup launch to enterprise scale — growth programs calibrated to your market and maturity.</p>
          </div>
          <div className="mkt-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="mkt-use-card">
                <div className="mkt-use-icon">{u.icon}</div>
                <div><h3 className="mkt-use-title">{u.title}</h3><p className="mkt-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Implementation</div>
            <h2 className="sec-title">GROWTH IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From discovery to scaled execution — a proven framework for launching and optimizing integrated digital marketing.</p>
          </div>
          <div className="mkt-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="mkt-process-step">
                <div className="mkt-process-dot">{s.num}</div>
                <h3 className="mkt-process-title">{s.title}</h3>
                <p className="mkt-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Channels & Tools</div>
            <h2 className="sec-title">EVERY CHANNEL<br /><em>ONE STRATEGY</em></h2>
            <p className="sec-desc">The platforms, ad networks, and analytics tools we orchestrate into unified growth campaigns.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="digital-marketing-faq" title={<>Digital Marketing<br /><em>QUESTIONS ANSWERED</em></>} desc="What business leaders ask before partnering on full-service digital marketing." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Unified Growth" title={<>ONE STRATEGY.<br /><em>EVERY CHANNEL.</em></>} sub="Book a free strategy session and get a custom digital marketing roadmap built around your revenue goals." btnText="Book a Strategy Session" note="FREE STRATEGY SESSION · CUSTOM ROADMAP · NO COMMITMENT" />
    </div>
  );
}
