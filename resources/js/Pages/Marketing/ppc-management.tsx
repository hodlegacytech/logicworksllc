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
  {
    num: '01',
    title: 'Cross-Channel PPC Strategy',
    desc: 'Unified paid media roadmaps across Google, Microsoft, Meta, and programmatic, all aligned to funnel stage, margin targets, and seasonality rather than being treated as separate silos.',
  },
  {
    num: '02',
    title: 'Account Structure & Audits',
    desc: 'Campaign architecture was rebuilt for Quality Score, budget pacing, and clean attribution, which in turn eliminates the wasted spend that legacy account setups tend to accumulate.',
  },
  {
    num: '03',
    title: 'Bid & Budget Automation',
    desc: 'Smart bidding tuned with first-party data, conversion value rules, and dayparting that protects margin during both peak and off-peak windows.',
  },
  {
    num: '04',
    title: 'Creative & Ad Copy Testing',
    desc: 'RSA, PMax asset groups, and display creative tested on a structured cadence, with winners scaled and losers cut within 72 hours rather than left to linger.',
  },
  {
    num: '05',
    title: 'Landing Page & CRO Alignment',
    desc: 'Message-matched post-click experiences built specifically for conversion, since even the best bid strategy fails quickly against a weak landing page.',
  },
  {
    num: '06',
    title: 'Reporting & Attribution',
    desc: 'Executive dashboards combine GA4, offline conversion imports, and CRM pipeline tie-in, so finance and marketing finally agree on what ROI actually looks like',
  },
];

const useCases = [
  {
    icon: 'B2B',
    title: 'B2B Lead Generation',
    desc: 'LinkedIn and Google Search campaigns designed to attract decision-makers and high-intent prospects, with lead qualification systems that help sales teams focus on opportunities that are more likely to convert.',
  },
  {
    icon: 'DTC',
    title: 'E-Commerce & DTC',
    desc: 'Shopping, Performance Max, and feed-driven campaigns built to increase revenue and customer acquisition, using profitability-focused bidding strategies across product categories.',
  },
  {
    icon: 'LOC',
    title: 'Multi-Location Brands',
    desc: 'Market-specific campaigns with localized messaging, location assets, and store visit tracking that help franchise groups and retail brands drive visibility and performance across every region.',
  },
  {
    icon: 'SaaS',
    title: 'SaaS & Subscription',
    desc: 'Demo and free trial acquisition campaigns supported by LTV-focused bidding, audience segmentation, and revenue reporting that connect advertising investment directly to recurring growth.',
  },
];

const process = [
  {
    num: '01',
    title: 'Audit & Baseline',
    desc: 'A full account teardown, competitive spend analysis, and wasted-spend identification, all completed before a single bid gets changed.',
  },
  {
    num: '02',
    title: 'Strategy & Architecture',
    desc: 'Channel mix, budget allocation, and campaign structure mapped directly to your conversion goals and sales cycle length.',
  },
  {
    num: '03',
    title: 'Launch & Track',
    desc: 'Tracking validation, conversion actions, and audience builds are deployed against QA checklists before spend is allowed to scale.',
  },
  {
    num: '04',
    title: 'Optimize Daily',
    desc: 'Search term mining, bid adjustments, creative tests, and budget shifts driven by performance data rather than gut feel.',
  },
  {
    num: '05',
    title: 'Scale & Report',
    desc: 'Winning campaigns scaled within clear guardrails, paired with monthly business reviews that give leadership insights they can actually act on.',
  },
];

const channels = [
  'Google Ads', 'Microsoft Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube', 'Display & GDN',
  'Performance Max', 'Shopping', 'Programmatic', 'Amazon Ads', 'TikTok Ads', 'GA4 & GTM',
];

const faqs = [
  {
    q: 'How quickly can a pay-per-click marketing company generate results?',
    a: 'PPC campaigns can start driving traffic within days of launch, though optimal performance and lower cost-per-click usually take 4 to 6 weeks of data and refinement.',
  },
  {
    q: 'What\'s included in a typical pay-per-click marketing service?',
    a: 'Keyword research, ad copywriting, bid management, landing page alignment, and ongoing optimization based on real campaign performance data.',
  },
  {
    q: 'How does a pay-per-click agency decide on budget allocation?',
    a: 'Budget is typically distributed based on keyword competition, conversion value, and which campaigns are already proving profitable, shifting spend toward what\'s working.',
  },
  {
    q: 'Is PPC worth it for small businesses, or just larger companies?',
    a: 'PPC works well for businesses of nearly any size since budgets are fully controllable, making it scalable for both small local businesses and large enterprises.',
  },
  {
    q: 'What platforms does pay-per-click marketing typically cover?',
    a: 'Most campaigns run on Google Ads and Microsoft Ads, with many agencies also managing paid social platforms like Meta and LinkedIn under the same PPC strategy.',
  },
];

export default function PpcManagement() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">PPC Management | LogicWorks — Cross-Channel Paid Media & ROAS</title>
        <meta
          head-key="description"
          name="description"
          content="As a pay-per-click marketing company, we manage cross-channel paid media with surgical precision, tracking every dollar, optimizing every campaign, and tying every report to revenue your CFO actually trusts."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ppc-management" />
      </Head>

      <section className="mkt-hero" aria-labelledby="ppc-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="ppc-title">PPC<br /><span>MANAGEMENT</span></h1>
          <p className="mkt-hero-sub">
            As a pay-per-click marketing company, we manage cross-channel paid media with surgical precision, tracking every dollar, optimizing every campaign, and tying every report to revenue your CFO actually trusts.
          </p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
              Get Free PPC Audit
              {arrowIcon}
            </Link>
            <Link href="/digital-marketing" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              All Marketing
            </Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Most agencies optimize for clicks and impressions, all while your CPA quietly creeps upward and sales start questioning lead quality. A real pay-per-click marketing service should mean profit, not another stack of activity reports.
              </p>
              <div className="mkt-highlight-box">
                <p>
                  We rebuild accounts around conversion economics instead, focusing on what you actually pay per customer rather than what you pay per click.
                </p>
              </div>
              <div className="mkt-check-list">
                {[
                  'Full-funnel cross-channel strategy',
                  'Daily bid and budget optimization',
                  'Message-matched landing pages',
                  'CRM-attributed revenue reporting',
                ].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">
                {['Google', 'Microsoft', 'Meta', 'LinkedIn', 'Programmatic'].map((t) => (
                  <span key={t} className="mkt-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Client Outcomes</div>
              {[
                { icon: '↑', title: 'Average ROAS', desc: '4.2x portfolio-weighted return across e-commerce and lead-gen accounts' },
                { icon: '↓', title: 'Lower CPA', desc: '38% reduction through structural fixes and negative keyword discipline' },
                { icon: '$', title: 'Ad Spend Managed', desc: '$12M+ in annual spend optimized with enterprise-grade governance' },
                { icon: '◎', title: 'Optimization Speed', desc: 'Bid and creative adjustments within 24 hours of the signal' },
              ].map((o) => (
                <div key={o.title} className="mkt-results-item">
                  <div className="mkt-results-icon">{o.icon}</div>
                  <div className="mkt-results-text">
                    <strong>{o.title}</strong>
                    <span>{o.desc}</span>
                  </div>
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
            <p className="sec-desc">
              As a pay-per-click agency, we organize our work around six pillars that run from strategy all the way through attribution.
            </p>
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
            <p className="sec-desc">
              Proven paid media strategies tailored for B2B, e-commerce, local businesses, and subscription-based brands focused on scalable growth.
            </p>
          </div>
          <div className="mkt-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="mkt-use-card">
                <div className="mkt-use-icon">{u.icon}</div>
                <div>
                  <h3 className="mkt-use-title">{u.title}</h3>
                  <p className="mkt-use-desc">{u.desc}</p>
                </div>
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
            <p className="sec-desc">
              Five phases that turn an underperforming account into a predictable revenue engine.
            </p>
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
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq
        id="ppc-faq"
        title={<>FAQs</>}
        desc=""
        faqs={faqs}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
      <MarketingCta
        eyebrow="Pay for Performance, Not Promises"
        title={<>YOUR ACCOUNT SHOULD<br /><em>ANSWER TO REVENUE</em>.</>}
        sub="Get a free PPC audit and see exactly where your ad spend is leaking before it costs you another month."
        btnText="Get Free PPC Audit"
        note=""
      />
    </div>
  );
}
