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
  { num: '01', title: 'Pixel & Tag Governance', desc: 'Meta Pixel, Google Tag, LinkedIn Insight, and server-side CAPI are configured with event match quality scores that actually train the algorithms properly.' },
  { num: '02', title: 'Audience Segmentation', desc: 'Cart abandoners, product viewers, time-on-site tiers, and CRM lists synced for suppression and VIP offers, never a one-size-fits-all blast.' },
  { num: '03', title: 'Dynamic Product Ads', desc: 'Catalog-linked creative that shows the exact SKU a visitor viewed, with price, image, and promo updated in real time straight from your feed.' },
  { num: '04', title: 'Sequential Messaging', desc: 'Story-based retargeting flows, awareness reminder, social proof, urgency, then the offer, timed carefully to your average consideration window.' },
  { num: '05', title: 'Cross-Network Retargeting', desc: 'Coordinated Google Display, Meta, and programmatic remarketing with frequency caps in place, so prospects see you rather than feel stalked by you.' },
  { num: '06', title: 'Incrementality Testing', desc: 'Holdout tests and conversion lift studies that prove retargeting actually adds revenue, rather than simply claiming last-click credit.' },
];

const useCases = [
  { icon: 'CART', title: 'E-Commerce Abandonment', desc: 'Recover carts and browse abandoners with dynamic ads, free-shipping tests, and urgency creative timed to your median purchase delay.' },
  { icon: 'B2B', title: 'B2B Consideration Cycles', desc: 'Retarget content downloaders and demo no-shows with case studies and ROI calculators across LinkedIn and display.' },
  { icon: 'SVC', title: 'High-Ticket Services', desc: 'Multi-touch sequences for legal, finance, and home services, building trust through creative before the harder CTA ever appears.' },
  { icon: 'SUB', title: 'Subscription & Trials', desc: 'Win back expired trials and lapsed subscribers through offer ladders and feature reminders tied directly to churn reasons.' },
];

const process = [
  { num: '01', title: 'Data & Pixel Audit', desc: 'Verify events, parameters, and consent flows, fixing tracking gaps before any audiences get built.' },
  { num: '02', title: 'Segment Design', desc: 'Map visitor behaviors to audience tiers, with exclusion rules in place for converters and existing customers.' },
  { num: '03', title: 'Creative Production', desc: 'Static, carousel, and dynamic templates built per segment, kept brand-safe and platform-compliant throughout.' },
  { num: '04', title: 'Launch & Frequency', desc: 'Campaigns go live with caps, dayparting, and bid strategies tuned specifically to view-through windows.' },
  { num: '05', title: 'Test & Expand', desc: 'Offer tests, creative refreshes, and lookalike seeds drawn from your highest-value retarget converters.' },
];

const channels = ['Meta Retargeting', 'Google Display RM', 'YouTube Remarketing', 'LinkedIn Matched', 'Programmatic DSP', 'TikTok Retarget', 'CAPI / Server-Side', 'CRM Audiences', 'Dynamic Product Ads', 'Email Sync', 'Cart Scripts', 'GA4 Audiences'];

const faqs = [
  { q: 'What is retargeting, and how does it work?', a: 'Retargeting shows ads specifically to people who have already visited your website or engaged with your brand, using tracking pixels to follow them across other sites and platforms.' },
  { q: 'How effective is retargeting compared to regular display advertising?', a: 'Retargeting typically converts significantly higher than cold display advertising, since it\'s reaching an audience already familiar with your brand.' },
  { q: 'Is retargeting considered intrusive by most users?', a: 'When frequency is managed properly, most users don\'t find it intrusive. Problems generally arise only when ads are shown too often without variation.' },
  { q: 'Can retargeting be done across multiple platforms at once?', a: 'Yes. Most retargeting strategies run simultaneously across Google Display Network, Meta, and sometimes LinkedIn, depending on where your audience spends time.' },
  { q: 'How long should someone stay in a retargeting audience after visiting a site?', a: 'Most campaigns use a 30 to 90-day window, though this varies based on typical sales cycle length and how often the product or service is purchased.' },
];

export default function Retargeting() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Retargeting Agency | Google Display & Meta Remarketing Services</title>
        <meta head-key="description" name="description" content="Bring back high-intent visitors with data-driven retargeting campaigns. Improve ROAS using Google Display, Meta Ads, dynamic remarketing, and server-side tracking." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/retargeting" />
      </Head>

      <section className="mkt-hero" aria-labelledby="retarget-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Paid Media</div>
          <h1 className="mkt-hero-title" id="retarget-title">RETARGETING<br /><span>CAMPAIGNS</span></h1>
          <p className="mkt-hero-sub">Win back visitors who already showed intent. Precision remarketing across Google, Meta, and programmatic, with dynamic creative and real frequency discipline.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>You already paid to get them there. Retargeting is how you finish the job, but sloppy pixels, generic banners, and the absence of frequency caps tend to burn budget and brand trust at the same time.</p>
              <div className="mkt-highlight-box">
                <p>We turn abandoned sessions into revenue instead, using segmented audiences, dynamic creatives, and tracking built specifically for a cookieless world.</p>
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
                { icon: '🛒', title: 'Cart Recovery', desc: '68% through abandoned checkout sequences with offer and urgency testing' },
                { icon: '↑', title: 'Retarget ROAS', desc: '3.8x, since warm audiences consistently outperform cold prospecting' },
                { icon: '↓', title: 'CPV Reduction', desc: '45% lower versus generic remarketing blast campaigns' },
                { icon: '⏱', title: 'Audience Live Time', desc: '7 days for fast deployment when pixels and traffic are already healthy' },
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
            <p className="sec-desc">Six modules covering everything from tracking infrastructure to incrementality proof.</p>
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
            <p className="sec-desc">Retargeting playbooks tuned specifically to purchase cycle length and deal size.</p>
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
            <p className="sec-desc">Five phases that move from a pixel audit to a fully scaled remarketing program.</p>
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

      <MarketingFaq id="retarget-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Recover Lost Revenue" title={<>THEY ALMOST<br /><em>BOUGHT</em>.</>} sub="Book a free retargeting audit. We'll map your audiences, tracking gaps, and recovery potential." btnText="Get Retargeting Audit" note="" />
    </div>
  );
}
