import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '9.2', lbl: 'Avg. Quality Score' },
  { val: '52%', lbl: 'CPC Savings' },
  { val: '340+', lbl: 'Accounts Optimized' },
  { val: 'Google', lbl: 'Partner Certified' },
];

const solutions = [
  { num: '01', title: 'Search Campaign Mastery', desc: 'Exact, phrase, and broad match strategies with SKAG-inspired structure, negative keyword lists, and ad copy mapped directly to high-intent queries.' },
  { num: '02', title: 'Performance Max & PMax', desc: 'Asset group strategy, audience signals, and conversion goal tuning, so PMax supplements rather than cannibalizes your branded and non-brand search.' },
  { num: '03', title: 'Google Shopping & Feeds', desc: 'Merchant Center optimization, feed rules, supplemental titles, and bid strategies by margin tier for catalog and DTC brands alike.' },
  { num: '04', title: 'Display & YouTube', desc: 'Custom intent audiences, in-market segments, and video action campaigns with creative built specifically for view-through and assisted conversions.' },
  { num: '05', title: 'Conversion Tracking Setup', desc: 'Enhanced conversions, offline import, GA4 linked goals, and Consent Mode v2, so Smart Bidding trains on data that\'s actually accurate.' },
  { num: '06', title: 'Competitive & Auction Insights', desc: 'Impression share analysis, auction overlap reports, and share-of-voice strategy built to win head terms without blowing the budget.' },
];

const useCases = [
  { icon: 'SRCH', title: 'High-Intent Search', desc: 'Capture buyers actively searching your category, branded defense, competitor conquest, and category terms with a tight message match.' },
  { icon: 'SHOP', title: 'Product Feed Revenue', desc: 'Shopping campaigns that surface top SKUs, suppress low-margin items, and sync promotions directly with Merchant Center.' },
  { icon: 'LEAD', title: 'Lead Gen & Services', desc: 'Call-only campaigns, lead form extensions, and local service ads for attorneys, contractors, and healthcare providers, all with compliance-safe copy.' },
  { icon: 'APP', title: 'App & SaaS Installs', desc: 'App campaigns and web-to-app flows with tROAS targets tied to in-app events and trial-to-paid conversion data.' },
];

const process = [
  { num: '01', title: 'Tracking & Compliance', desc: 'GTM, GA4, and conversion tags validated, with Consent Mode and policy compliance checked before any spend goes live.' },
  { num: '02', title: 'Account Rebuild', desc: 'Campaigns, ad groups, and extensions restructured for Quality Score, along with clear budget control.' },
  { num: '03', title: 'Keyword & Copy Launch', desc: 'RSA variants, sitelinks, and structured snippets were deployed with A/B test labels in place from day one.' },
  { num: '04', title: 'Smart Bidding Tune', desc: 'Target CPA and ROAS are calibrated with conversion value rules, and audience exclusions are refined weekly as data comes in.' },
  { num: '05', title: 'Scale & Defend', desc: 'Budget increases get directed toward proven segments, while brand protection and competitor strategy adjust to shifts in the market.' },
];

const channels = ['Search Ads', 'Performance Max', 'Shopping', 'Display Network', 'YouTube Ads', 'Discovery', 'Demand Gen', 'App Campaigns', 'Local Services', 'Call Ads', 'Merchant Center', 'Google Analytics 4'];

const faqs = [
  { q: 'How much should a business budget for Google Ads?', a: 'Budgets vary widely by industry and competition, but most businesses start testing with $1,000 to $3,000 per month to gather enough data for meaningful optimization.' },
  { q: 'How is Quality Score calculated in Google Ads?', a: 'Quality Score is based on expected click-through rate, ad relevance, and landing page experience, directly affecting how much you pay per click.' },
  { q: 'How long before Google Ads campaigns start performing well?', a: 'Most campaigns need 4 to 6 weeks of data before optimization meaningfully improves performance and lowers cost-per-click.' },
  { q: 'What\'s the difference between Search ads and Display ads?', a: 'Search ads appear directly in search results based on user queries, while Display ads appear as visual banners across websites within Google\'s ad network.' },
  { q: 'Can Google Ads work well alongside SEO, or are they competing strategies?', a: 'They work best together. Google Ads delivers immediate visibility while SEO builds long-term organic traffic, and the two often share keyword insights that strengthen both.' },
];

export default function GoogleAds() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Google Ads Management Agency | PPC, Search, Shopping & PMax Optimization</title>
        <meta head-key="description" name="description" content="Professional Google Ads management for Search, Shopping, PMax, and YouTube campaigns. Improve ROAS, reduce CPC, and scale profitable paid media with certified specialists." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/google-ads" />
      </Head>

      <section className="mkt-hero" aria-labelledby="gads-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="gads-title">GOOGLE<br /><span>ADS</span></h1>
          <p className="mkt-hero-sub">Search, Shopping, Performance Max, and YouTube campaigns run by certified specialists who treat Quality Score, tracking, and ROAS as genuinely non-negotiable.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Google Ads Audit{arrowIcon}</Link>
            <Link href="/ppc-management" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Full PPC Management</Link>
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
              <h2 className="sec-title">GOOGLE ADS IS<br /><em>NOT SET-AND-FORGET</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Algorithm updates, PMax expansion, and auction competition all shift on a near-weekly basis. Accounts left on autopilot, as a result, tend to bleed budget into broad match junk and asset groups with zero strategic guardrails.</p>
              <div className="mkt-highlight-box">
                <p>We manage Google Ads as a profit center instead: Quality Score climbs, CPC drops, and conversions get attributed correctly.</p>
              </div>
              <div className="mkt-check-list">
                {['Certified Search, Shopping & Display team', 'PMax with guardrails, not black boxes', 'Enhanced conversion and offline import setup', 'Weekly search term and auction reviews'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Search', 'Shopping', 'PMax', 'YouTube', 'Display'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Platform Results</div>
              {[
                { icon: '★', title: 'Avg. Quality Score', desc: '9.2, with relevance-first structure lifting ad rank without raising bids' },
                { icon: '↓', title: 'CPC Reduction', desc: '52% typical savings compared to legacy agency structures' },
                { icon: '◎', title: 'Accounts Managed', desc: '340+ optimized across B2B, retail, and local verticals' },
                { icon: '✓', title: 'Certification', desc: 'Google Ads certified team with direct beta access and training' },
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
            <h2 className="sec-title">OWN THE<br /><em>GOOGLE AUCTION</em></h2>
            <p className="sec-desc">Six Google Ads disciplines spanning search intent all the way through feed commerce.</p>
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
            <h2 className="sec-title">GOOGLE ADS FOR<br /><em>EVERY GOAL</em></h2>
            <p className="sec-desc">Campaign types matched to how your customers actually discover and buy, rather than a one-size-fits-all setup.</p>
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
            <h2 className="sec-title">LAUNCH TO<br /><em>DOMINANCE</em></h2>
            <p className="sec-desc">Five steps that take into account everything from broken tracking to scaled, genuinely profitable Google campaigns.</p>
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
            <div className="sec-label">Google Ecosystem</div>
            <h2 className="sec-title">FULL STACK<br /><em>COVERAGE</em></h2>
            <p className="sec-desc">Every Google Ads surface and measurement tool your growth stack needs.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="gads-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Fix Your Google Ads" title={<>LOWER CPC.<br /><em>HIGHER ROAS</em>.</>} sub="Get a free Google Ads audit, account structure, tracking, and wasted spend exposed within 48 hours." btnText="Get Google Ads Audit" note="FREE AUDIT · CERTIFIED TEAM · NO COMMITMENT" />
    </div>
  );
}
