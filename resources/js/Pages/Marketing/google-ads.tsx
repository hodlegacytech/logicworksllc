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
  { num: '01', title: 'Search Campaign Mastery', desc: 'Exact, phrase, and broad match strategies with SKAG-inspired structure, negative keyword lists, and ad copy mapped to high-intent queries.' },
  { num: '02', title: 'Performance Max & PMax', desc: 'Asset group strategy, audience signals, and conversion goal tuning so PMax supplements — not cannibalizes — your branded and non-brand search.' },
  { num: '03', title: 'Google Shopping & Feeds', desc: 'Merchant Center optimization, feed rules, supplemental titles, and bid strategies by margin tier for catalog and DTC brands.' },
  { num: '04', title: 'Display & YouTube', desc: 'Custom intent audiences, in-market segments, and video action campaigns with creative built for view-through and assisted conversions.' },
  { num: '05', title: 'Conversion Tracking Setup', desc: 'Enhanced conversions, offline import, GA4 linked goals, and Consent Mode v2 — so Smart Bidding trains on accurate data.' },
  { num: '06', title: 'Competitive & Auction Insights', desc: 'Impression share analysis, auction overlap reports, and share-of-voice strategy to win head terms without blowing budget.' },
];

const useCases = [
  { icon: 'SRCH', title: 'High-Intent Search', desc: 'Capture buyers actively searching your category — branded defense, competitor conquest, and category terms with tight message match.' },
  { icon: 'SHOP', title: 'Product Feed Revenue', desc: 'Shopping campaigns that surface top SKUs, suppress low-margin items, and sync promotions with Merchant Center promotions.' },
  { icon: 'LEAD', title: 'Lead Gen & Services', desc: 'Call-only, lead form extensions, and local service ads for attorneys, contractors, and healthcare with compliance-safe copy.' },
  { icon: 'APP', title: 'App & SaaS Installs', desc: 'App campaigns and web-to-app flows with tROAS targets tied to in-app events and trial-to-paid conversion data.' },
];

const process = [
  { num: '01', title: 'Tracking & Compliance', desc: 'GTM, GA4, and conversion tags validated — Consent Mode and policy compliance checked before spend.' },
  { num: '02', title: 'Account Rebuild', desc: 'Campaigns, ad groups, and extensions restructured for Quality Score and clear budget control.' },
  { num: '03', title: 'Keyword & Copy Launch', desc: 'RSA variants, sitelinks, and structured snippets deployed with A/B test labels from day one.' },
  { num: '04', title: 'Smart Bidding Tune', desc: 'Target CPA/ROAS calibrated with conversion value rules and audience exclusions refined weekly.' },
  { num: '05', title: 'Scale & Defend', desc: 'Budget increases on proven segments; brand protection and competitor strategy adjusted to market shifts.' },
];

const channels = ['Search Ads', 'Performance Max', 'Shopping', 'Display Network', 'YouTube Ads', 'Discovery', 'Demand Gen', 'App Campaigns', 'Local Services', 'Call Ads', 'Merchant Center', 'Google Analytics 4'];

const faqs = [
  { q: 'Are your strategists Google Ads certified?', a: 'Yes. Our paid media team holds Google Ads Search, Display, Shopping, and Measurement certifications — with ongoing training on PMax, Consent Mode, and platform updates.' },
  { q: 'Should we use Performance Max or standard Search?', a: 'It depends on your data volume and goals. We typically run Search for control and high-intent capture, with PMax for incremental reach and feed-heavy catalogs — never a blind PMax-only setup.' },
  { q: 'Our Quality Score is low — can you fix it?', a: 'Low QS usually traces to weak ad relevance, poor landing experience, or bloated account structure. We rebuild around tight keyword-ad-LP alignment — clients often see 20–40% CPC drops.' },
  { q: 'Do you manage Merchant Center and feeds?', a: 'Yes for e-commerce clients. Feed diagnostics, title optimization, and disapproval resolution are part of Shopping management — broken feeds kill ROAS faster than bad bids.' },
  { q: 'How is Google Ads different from your full PPC service?', a: 'Google Ads is platform-deep: Search, Shopping, PMax, YouTube. Full PPC management adds Microsoft, Meta, LinkedIn, and cross-channel budget orchestration.' },
];

export default function GoogleAds() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Google Ads | LogicWorks — Search, Shopping & Performance Max</title>
        <meta head-key="description" name="description" content="LogicWorks manages Google Ads — Search, Shopping, Performance Max, and YouTube with certified experts, Quality Score optimization, and conversion tracking done right." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/google-ads" />
      </Head>

      <section className="mkt-hero" aria-labelledby="gads-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="gads-title">GOOGLE<br /><span>ADS</span></h1>
          <p className="mkt-hero-sub">Search, Shopping, Performance Max, and YouTube campaigns run by certified specialists who treat Quality Score, tracking, and ROAS as non-negotiables.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Algorithm updates, PMax expansion, and auction competition change weekly. Accounts left on autopilot bleed budget into broad match junk and asset groups with no strategic guardrails.</p>
              <div className="mkt-highlight-box">
                <p>We manage Google Ads as a profit center — Quality Score up, CPC down, conversions attributed correctly.</p>
              </div>
              <div className="mkt-check-list">
                {['Certified Search, Shopping & Display team', 'PMax with guardrails, not black boxes', 'Enhanced conversion & offline import setup', 'Weekly search term and auction reviews'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Search', 'Shopping', 'PMax', 'YouTube', 'Display'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Platform Results</div>
              {[
                { icon: '★', title: '9.2 Avg. Quality Score', desc: 'Relevance-first structure lifts ad rank without raising bids.' },
                { icon: '↓', title: '52% CPC Reduction', desc: 'Typical savings after audit vs. legacy agency structures.' },
                { icon: '◎', title: '340+ Accounts', desc: 'Google Ads optimized across B2B, retail, and local verticals.' },
                { icon: '✓', title: 'Partner Certified', desc: 'Google Ads certified team with direct beta access and training.' },
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
            <p className="sec-desc">Six Google Ads disciplines from Search intent to feed commerce.</p>
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
            <p className="sec-desc">Campaign types matched to how your customers discover and buy.</p>
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
            <p className="sec-desc">Five steps from broken tracking to scaled, profitable Google campaigns.</p>
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

      <MarketingFaq id="gads-faq" title={<>Google Ads<br /><em>QUESTIONS ANSWERED</em></>} desc="What brands ask before moving Google Ads to LogicWorks." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Fix Your Google Ads" title={<>LOWER CPC.<br /><em>HIGHER ROAS</em>.</>} sub="Get a free Google Ads audit — account structure, tracking, and wasted spend exposed in 48 hours." btnText="Get Google Ads Audit" note="FREE AUDIT · CERTIFIED TEAM · NO COMMITMENT" />
    </div>
  );
}
