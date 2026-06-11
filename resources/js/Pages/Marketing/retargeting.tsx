import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '68%', lbl: 'Cart Recovery Rate' },
  { val: '3.8x', lbl: 'Retarget ROAS' },
  { val: '45%', lbl: 'Lower CPV' },
  { val: '7d', lbl: 'Audience Live' },
];

const solutions = [
  { num: '01', title: 'Pixel & Tag Governance', desc: 'Meta Pixel, Google tag, LinkedIn Insight, and server-side CAPI configured with event match quality scores that actually train algorithms.' },
  { num: '02', title: 'Audience Segmentation', desc: 'Cart abandoners, product viewers, time-on-site tiers, and CRM lists synced for suppression and VIP offers — no one-size-fits-all blast.' },
  { num: '03', title: 'Dynamic Product Ads', desc: 'Catalog-linked creative that shows the exact SKU a visitor viewed — price, image, and promo updated in real time from your feed.' },
  { num: '04', title: 'Sequential Messaging', desc: 'Story-based retargeting flows: awareness reminder → social proof → urgency → offer — timed to your average consideration window.' },
  { num: '05', title: 'Cross-Network Retargeting', desc: 'Coordinated Google Display, Meta, and programmatic remarketing with frequency caps so prospects see you — not stalk you.' },
  { num: '06', title: 'Incrementality Testing', desc: 'Holdout tests and conversion lift studies to prove retargeting adds revenue — not just claims last-click credit.' },
];

const useCases = [
  { icon: 'CART', title: 'E-Commerce Abandonment', desc: 'Recover carts and browse abandoners with dynamic ads, free-shipping tests, and urgency creative timed to your median purchase delay.' },
  { icon: 'B2B', title: 'B2B Consideration Cycles', desc: 'Retarget content downloaders and demo no-shows with case studies and ROI calculators across LinkedIn and display.' },
  { icon: 'SVC', title: 'High-Ticket Services', desc: 'Multi-touch sequences for legal, finance, and home services — trust-building creative before the hard CTA.' },
  { icon: 'SUB', title: 'Subscription & Trials', desc: 'Win back expired trials and lapsed subscribers with offer ladders and feature reminders tied to churn reasons.' },
];

const process = [
  { num: '01', title: 'Data & Pixel Audit', desc: 'Verify events, parameters, and consent flows — fix tracking gaps before building audiences.' },
  { num: '02', title: 'Segment Design', desc: 'Map visitor behaviors to audience tiers with exclusion rules for converters and existing customers.' },
  { num: '03', title: 'Creative Production', desc: 'Static, carousel, and dynamic templates built per segment — brand-safe and platform-compliant.' },
  { num: '04', title: 'Launch & Frequency', desc: 'Campaigns live with caps, dayparting, and bid strategies tuned to view-through windows.' },
  { num: '05', title: 'Test & Expand', desc: 'Offer tests, creative refreshes, and lookalike seeds from your highest-value retarget converters.' },
];

const channels = ['Meta Retargeting', 'Google Display RM', 'YouTube Remarketing', 'LinkedIn Matched', 'Programmatic DSP', 'TikTok Retarget', 'CAPI / Server-Side', 'CRM Audiences', 'Dynamic Product Ads', 'Email Sync', 'Cart Scripts', 'GA4 Audiences'];

const faqs = [
  { q: 'Will retargeting annoy our customers?', a: 'Frequency caps, exclusion lists, and segment-specific creative prevent ad fatigue. We cap impressions per user per week and suppress buyers — so retargeting feels relevant, not creepy.' },
  { q: 'How soon can audiences go live?', a: 'With existing pixels and traffic volume, audiences are typically live within 7 days. New pixel installs need 2–4 weeks of data collection before lookalikes and broad retarget scale.' },
  { q: 'Do you need access to our product catalog?', a: 'For dynamic product ads, yes — we connect Merchant Center, Shopify, or custom feeds. Static retargeting works without a feed but converts lower for e-commerce.' },
  { q: 'What ROAS should we expect from retargeting?', a: 'Retargeting usually delivers 2–5x ROAS depending on traffic quality and offer strength. It rarely stands alone — it amplifies prospecting and converts warm intent your top-of-funnel already paid for.' },
  { q: 'Can you retarget without third-party cookies?', a: 'Yes. First-party data, server-side tagging, CRM uploads, and platform logged-in users sustain retargeting post-cookie deprecation — we build for that reality now.' },
];

export default function Retargeting() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Retargeting Campaigns | LogicWorks — Win Back Lost Visitors</title>
        <meta head-key="description" name="description" content="LogicWorks runs retargeting across Google, Meta, and programmatic — dynamic product ads, audience segmentation, and CAPI tracking that recovers 68%+ of abandoned carts." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/retargeting" />
      </Head>

      <section className="mkt-hero" aria-labelledby="retarget-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="retarget-title">RETARGETING<br /><span>CAMPAIGNS</span></h1>
          <p className="mkt-hero-sub">Win back visitors who already showed intent — precision remarketing across Google, Meta, and programmatic with dynamic creative and frequency discipline.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Retargeting Audit{arrowIcon}</Link>
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
              <h2 className="sec-title">97% LEAVE<br /><em>WITHOUT CONVERTING</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>You paid to get them there. Retargeting is how you finish the job — but sloppy pixels, generic banners, and no frequency caps burn budget and brand trust at once.</p>
              <div className="mkt-highlight-box">
                <p>We turn abandoned sessions into revenue with segmented audiences, dynamic creative, and tracking built for a cookieless world.</p>
              </div>
              <div className="mkt-check-list">
                {['Server-side and CAPI conversion tracking', 'Dynamic product and offer-matched ads', 'Cross-network frequency management', 'Incrementality-tested retarget ROAS'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Meta', 'Google Display', 'Dynamic Ads', 'CAPI', 'CRM Sync'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Recovery Metrics</div>
              {[
                { icon: '🛒', title: '68% Cart Recovery', desc: 'Abandoned checkout sequences with offer and urgency testing.' },
                { icon: '↑', title: '3.8x Retarget ROAS', desc: 'Warm audiences outperform cold prospecting on efficiency.' },
                { icon: '↓', title: '45% Lower CPV', desc: 'Segmented creative vs. generic remarketing blast campaigns.' },
                { icon: '⏱', title: '7-Day Audience Live', desc: 'Fast deployment when pixels and traffic are already healthy.' },
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
            <h2 className="sec-title">RETARGETING<br /><em>THAT CLOSES</em></h2>
            <p className="sec-desc">Six modules from tracking infrastructure to incrementality proof.</p>
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
            <h2 className="sec-title">RECOVER<br /><em>LOST REVENUE</em></h2>
            <p className="sec-desc">Retargeting playbooks tuned to purchase cycle and deal size.</p>
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
            <h2 className="sec-title">TRACK TO<br /><em>CONVERT</em></h2>
            <p className="sec-desc">Five phases from pixel audit to scaled remarketing programs.</p>
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
            <div className="sec-label">Networks</div>
            <h2 className="sec-title">REACH THEM<br /><em>EVERYWHERE</em></h2>
            <p className="sec-desc">Remarketing surfaces and data pipes for full-funnel recovery.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="retarget-faq" title={<>Retargeting<br /><em>QUESTIONS ANSWERED</em></>} desc="What growth teams ask before launching remarketing with LogicWorks." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Recover Lost Revenue" title={<>THEY ALMOST<br /><em>BOUGHT</em>.</>} sub="Book a free retargeting audit — we'll map your audiences, tracking gaps, and recovery potential." btnText="Get Retargeting Audit" note="FREE AUDIT · PIXEL REVIEW · NO COMMITMENT" />
    </div>
  );
}
