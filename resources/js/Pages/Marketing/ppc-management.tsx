import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '4.2x', lbl: 'Avg. ROAS' },
  { val: '38%', lbl: 'CPA Reduction' },
  { val: '$12M+', lbl: 'Ad Spend Managed' },
  { val: '24hr', lbl: 'Optimization Cycle' },
];

const solutions = [
  { num: '01', title: 'Cross-Channel PPC Strategy', desc: 'Unified paid media roadmaps across Google, Microsoft, Meta, and programmatic — aligned to funnel stage, margin targets, and seasonality.' },
  { num: '02', title: 'Account Structure & Audits', desc: 'Campaign architecture rebuilt for Quality Score, budget pacing, and clean attribution — eliminating wasted spend from legacy setups.' },
  { num: '03', title: 'Bid & Budget Automation', desc: 'Smart bidding tuned with first-party data, conversion value rules, and dayparting that protects margin during peak and off-peak windows.' },
  { num: '04', title: 'Creative & Ad Copy Testing', desc: 'RSA, PMax asset groups, and display creative tested on a structured cadence — winners scaled, losers cut within 72 hours.' },
  { num: '05', title: 'Landing Page & CRO Alignment', desc: 'Message-matched post-click experiences built for conversion — because the best bid strategy fails on a weak landing page.' },
  { num: '06', title: 'Reporting & Attribution', desc: 'Executive dashboards with GA4, offline conversion imports, and CRM pipeline tie-in — so finance and marketing agree on ROI.' },
];

const useCases = [
  { icon: 'B2B', title: 'B2B Lead Generation', desc: 'LinkedIn and Google Search campaigns with lead scoring integration — CPL targets met while sales receives qualified opportunities, not form spam.' },
  { icon: 'DTC', title: 'E-Commerce & DTC', desc: 'Shopping, PMax, and catalog feeds optimized for ROAS and new-customer acquisition — with margin-aware bidding by SKU category.' },
  { icon: 'LOC', title: 'Multi-Location Brands', desc: 'Geo-targeted campaigns per market with localized ad copy, call extensions, and store visit conversion tracking for franchise and retail networks.' },
  { icon: 'SaaS', title: 'SaaS & Subscription', desc: 'Trial and demo signup funnels with LTV-based bidding, churn-aware audiences, and cohort reporting that connects ad spend to MRR.' },
];

const process = [
  { num: '01', title: 'Audit & Baseline', desc: 'Full account teardown, competitive spend analysis, and wasted-spend identification before a single bid changes.' },
  { num: '02', title: 'Strategy & Architecture', desc: 'Channel mix, budget allocation, and campaign structure mapped to your conversion goals and sales cycle length.' },
  { num: '03', title: 'Launch & Track', desc: 'Tracking validation, conversion actions, and audience builds deployed with QA checklists before spend scales.' },
  { num: '04', title: 'Optimize Daily', desc: 'Search term mining, bid adjustments, creative tests, and budget shifts based on performance data — not gut feel.' },
  { num: '05', title: 'Scale & Report', desc: 'Winning campaigns scaled with guardrails; monthly business reviews with actionable insights for leadership.' },
];

const channels = ['Google Ads', 'Microsoft Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube', 'Display & GDN', 'Performance Max', 'Shopping', 'Programmatic', 'Amazon Ads', 'TikTok Ads', 'GA4 & GTM'];

const faqs = [
  { q: 'What minimum ad spend do you manage?', a: 'We typically partner with brands spending $5K+/month in paid media. Below that threshold, we recommend a focused audit and setup package so budget goes further before full management.' },
  { q: 'Do you work with our in-house team or replace them?', a: 'Both models work. We can own execution end-to-end or operate as a strategic layer — setting structure, testing frameworks, and training your team on optimization playbooks.' },
  { q: 'How fast will we see results?', a: 'Waste reduction and structure fixes often show within 2–4 weeks. Meaningful ROAS or CPA improvements typically emerge in 6–10 weeks as bidding models learn and creative tests compound.' },
  { q: 'Who owns the ad accounts?', a: 'You always retain account ownership and billing access. We request manager access only — no lock-in, full transparency on every change.' },
  { q: 'How do you report on performance?', a: 'Live dashboards plus monthly reviews covering spend, conversions, CPA/ROAS, channel contribution, and test learnings — tied to your CRM or revenue data when available.' },
];

export default function PpcManagement() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">PPC Management | LogicWorks — Cross-Channel Paid Media & ROAS</title>
        <meta head-key="description" name="description" content="LogicWorks manages PPC across Google, Microsoft, Meta, and programmatic — account audits, bid strategy, CRO alignment, and reporting that drives 4x+ ROAS." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ppc-management" />
      </Head>

      <section className="mkt-hero" aria-labelledby="ppc-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="ppc-title">PPC<br /><span>MANAGEMENT</span></h1>
          <p className="mkt-hero-sub">Cross-channel paid media managed with surgical precision — every dollar tracked, every campaign optimized, and every report tied to revenue your CFO trusts.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free PPC Audit{arrowIcon}</Link>
            <Link href="/digital-marketing" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Marketing</Link>
          </div>
        </div>
      </section>

      <section className="mkt-impact" aria-label="Performance metrics">
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
              <h2 className="sec-title">AD SPEND WITHOUT<br /><em>ACCOUNTABILITY</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Most agencies optimize for clicks and impressions while your CPA creeps up and sales questions lead quality. PPC management should mean profit — not activity reports.</p>
              <div className="mkt-highlight-box">
                <p>We rebuild accounts around conversion economics: what you pay per customer, not what you pay per click.</p>
              </div>
              <div className="mkt-check-list">
                {['Full-funnel cross-channel strategy', 'Daily bid and budget optimization', 'Message-matched landing pages', 'CRM-attributed revenue reporting'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Google', 'Microsoft', 'Meta', 'LinkedIn', 'Programmatic'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Client Outcomes</div>
              {[
                { icon: '↑', title: '4.2x Average ROAS', desc: 'Portfolio-weighted return across e-commerce and lead-gen accounts.' },
                { icon: '↓', title: '38% Lower CPA', desc: 'Structural fixes and negative keyword discipline cut waste fast.' },
                { icon: '$', title: '$12M+ Managed', desc: 'Annual ad spend optimized with enterprise-grade governance.' },
                { icon: '◎', title: '24hr Optimization', desc: 'Bid and creative adjustments within one business day of signal.' },
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
            <h2 className="sec-title">PAID MEDIA THAT<br /><em>PERFORMS</em></h2>
            <p className="sec-desc">Six pillars of PPC management — from strategy through attribution.</p>
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
            <h2 className="sec-title">PPC FOR<br /><em>YOUR BUSINESS MODEL</em></h2>
            <p className="sec-desc">Proven paid media playbooks for B2B, e-commerce, local, and subscription growth.</p>
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
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM AUDIT TO<br /><em>SCALE</em></h2>
            <p className="sec-desc">Five phases that turn underperforming accounts into predictable revenue engines.</p>
          </div>
          <div className="mkt-process-track">
            {process.map((s) => (
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
            <div className="sec-label">Channels</div>
            <h2 className="sec-title">EVERY PLATFORM<br /><em>ONE TEAM</em></h2>
            <p className="sec-desc">Certified specialists across search, social, shopping, and programmatic networks.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="ppc-faq" title={<>PPC Management<br /><em>QUESTIONS ANSWERED</em></>} desc="What marketing leaders ask before handing off paid media." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Stop Wasting Ad Spend" title={<>EVERY DOLLAR<br /><em>SHOULD EARN</em>.</>} sub="Book a free PPC audit and see exactly where your accounts are leaking budget." btnText="Get Free PPC Audit" note="FREE AUDIT · ACCOUNT REVIEW · NO COMMITMENT" />
    </div>
  );
}
