import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '4.2x', lbl: 'Average ROAS' },
  { val: '68%', lbl: 'Lower Cost Per Lead' },
  { val: '3.1M+', lbl: 'Impressions Delivered' },
  { val: '89%', lbl: 'Client Retention' },
];

const solutions = [
  { title: 'Paid Social Campaign Strategy', desc: 'Full-funnel campaign architecture across Meta, TikTok, LinkedIn, and YouTube — prospecting, retargeting, and lookalike audiences mapped to your buyer journey.' },
  { title: 'Creative Production & Testing', desc: 'Scroll-stopping ad creative — static, carousel, Reels, and UGC-style video — with structured A/B testing to find winners fast and scale spend confidently.' },
  { title: 'Audience Targeting & Segmentation', desc: 'Interest, behavioral, and custom audience builds from CRM data, website visitors, and engagement signals — precision targeting that reduces wasted ad spend.' },
  { title: 'Conversion Tracking & Attribution', desc: 'Meta CAPI, GA4, UTM governance, and offline conversion imports — full visibility from impression to revenue, not vanity metrics.' },
  { title: 'Influencer & Partnership Campaigns', desc: 'Micro and macro influencer sourcing, brief development, whitelisting, and performance tracking — authentic reach that converts better than polished brand ads.' },
  { title: 'Social Commerce & Shop Setup', desc: 'Instagram Shop, Facebook Catalog, and TikTok Shop integration — shoppable posts and product tagging that shorten the path from discovery to purchase.' },
];

const useCases = [
  { icon: 'B2B', title: 'B2B Lead Generation', desc: 'LinkedIn and Meta lead gen campaigns with gated content, demo requests, and MQL scoring — filling pipeline for SaaS, agencies, and professional services.' },
  { icon: 'DTC', title: 'E-Commerce & DTC Brands', desc: 'Prospecting and dynamic product retargeting that drives ROAS-positive sales — catalog ads, abandoned cart sequences, and seasonal promo bursts.' },
  { icon: 'LOC', title: 'Local & Franchise Growth', desc: 'Geo-targeted campaigns for multi-location businesses — store visit optimization, local awareness, and franchise-level reporting dashboards.' },
  { icon: 'EVT', title: 'Event & Launch Promotion', desc: 'Pre-launch buzz, ticket sales, and post-event retargeting — countdown creative, early-bird offers, and attendee lookalike expansion.' },
];

const process = [
  { num: '01', title: 'Audit & Strategy', desc: 'Competitive analysis, account audit, audience research, and funnel mapping with clear KPI targets.' },
  { num: '02', title: 'Campaign Build', desc: 'Ad set structure, pixel/CAPI setup, creative production, and landing page alignment.' },
  { num: '03', title: 'Launch & Test', desc: 'Controlled budget ramp, creative A/B tests, and audience experiments with daily monitoring.' },
  { num: '04', title: 'Optimize & Scale', desc: 'Kill underperformers, scale winners, refresh creative, and expand to new platforms.' },
  { num: '05', title: 'Report & Iterate', desc: 'Weekly performance reports, attribution reviews, and quarterly strategy recalibration.' },
];

const channels = ['Meta Ads', 'Instagram', 'TikTok Ads', 'LinkedIn Ads', 'YouTube Ads', 'Pinterest Ads', 'Snapchat Ads', 'X (Twitter) Ads', 'Reddit Ads', 'Spotify Ads'];

const faqs = [
  { q: 'Which social platforms should we advertise on?', a: 'It depends on your audience and offer. B2B typically wins on LinkedIn and Meta. DTC and lifestyle brands excel on Instagram, TikTok, and Pinterest. We recommend platforms based on where your buyers actually spend time — not trends.' },
  { q: 'What budget do we need to see results?', a: 'Minimum viable spend varies by platform and industry. Most clients start at $3,000–$5,000/month in ad spend plus management fees. We scale budgets once campaigns hit target CPA or ROAS — never before data supports it.' },
  { q: 'Do you create the ad creative or do we provide assets?', a: 'Both. We produce scroll-stopping creative in-house — static, video, and UGC-style — and also optimize assets you provide. Every campaign includes structured creative testing to find what resonates.' },
  { q: 'How do you measure campaign success?', a: 'We track beyond impressions and clicks — cost per lead, cost per acquisition, ROAS, and pipeline contribution. Conversion tracking via Meta CAPI, GA4, and CRM integration ensures reported numbers match real business outcomes.' },
  { q: 'How long before we see results?', a: 'Initial learning phase is 2–4 weeks as platforms optimize delivery. Most clients see meaningful performance data by week 3 and scalable results by month 2. Complex B2B funnels may take longer due to longer sales cycles.' },
];

export default function SocialMediaMarketing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Helmet>
        <title>Social Media Marketing | LogicWorks — Paid Social Campaigns That Convert</title>
        <meta name="description" content="LogicWorks delivers social media marketing — paid campaigns on Meta, TikTok, LinkedIn, and YouTube with creative testing, audience targeting, and ROAS-focused optimization." />
        <link rel="canonical" href="https://logicworks.com/social-media-marketing" />
      </Helmet>

      <section className="mkt-hero" aria-labelledby="smm-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Social Media</div>
          <h1 className="mkt-hero-title" id="smm-title">SOCIAL MEDIA<br /><span>MARKETING</span></h1>
          <p className="mkt-hero-sub">Paid social campaigns engineered to stop the scroll, capture qualified leads, and drive measurable revenue — across Meta, TikTok, LinkedIn, and YouTube.</p>
          <div className="mkt-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Launch Your Campaigns{arrowIcon}</Link>
            <Link to="/digital-marketing" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Marketing Services</Link>
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
              <div className="sec-label">The Opportunity</div>
              <h2 className="sec-title">ORGANIC REACH<br /><em>IS NOT ENOUGH</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Algorithm changes killed organic reach. Your competitors are buying attention on every feed — and converting it into pipeline. Paid social marketing puts your brand in front of buyers who match your ideal customer profile, with creative and targeting precision that organic posts cannot match.</p>
              <div className="mkt-highlight-box"><p>Businesses running optimized paid social campaigns see 4x higher conversion rates than organic-only strategies — with full attribution from click to close.</p></div>
              <div className="mkt-check-list">
                {['Full-funnel campaign architecture', 'Creative production with A/B testing', 'Advanced audience segmentation', 'Conversion tracking and ROAS reporting'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Meta Ads', 'TikTok', 'LinkedIn', 'YouTube', 'Retargeting'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Results</div>
              {[
                { icon: '↑', title: '4.2x Average ROAS', desc: 'Clients consistently achieve strong return on ad spend across platforms.' },
                { icon: '↓', title: '68% Lower CPL', desc: 'Precision targeting and creative testing cut cost per lead dramatically.' },
                { icon: '◎', title: 'Full-Funnel Visibility', desc: 'Track every touchpoint from impression to revenue in your CRM.' },
                { icon: '⚡', title: 'Scalable Growth', desc: 'Proven campaigns scaled with confidence — not guesswork.' },
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
            <h2 className="sec-title">CAMPAIGNS THAT<br /><em>CONVERT AT SCALE</em></h2>
            <p className="sec-desc">Six core paid social capabilities — from strategy and creative to tracking and social commerce.</p>
          </div>
          <div className="mkt-solution-grid">
            {solutions.map((s, i) => (
              <article key={s.title} className="mkt-solution-card">
                <div className="mkt-solution-num">{String(i + 1).padStart(2, '0')}</div>
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
            <h2 className="sec-title">SOCIAL ADS FOR<br /><em>EVERY BUSINESS MODEL</em></h2>
            <p className="sec-desc">B2B pipeline, e-commerce sales, local growth, and event promotion — proven playbooks with measurable ROI.</p>
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
            <h2 className="sec-title">FROM STRATEGY TO<br /><em>SCALABLE RESULTS</em></h2>
            <p className="sec-desc">A proven five-phase approach to launching, optimizing, and scaling paid social campaigns.</p>
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
            <div className="sec-label">Platforms</div>
            <h2 className="sec-title">EVERY MAJOR<br /><em>SOCIAL CHANNEL</em></h2>
            <p className="sec-desc">We manage paid campaigns across all major social and discovery platforms.</p>
          </div>
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq id="smm-faq" title={<>Social Media Marketing<br /><em>QUESTIONS ANSWERED</em></>} desc="What marketing leaders ask before investing in paid social campaigns." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Stop Leaving Leads on the Table" title={<>TURN SCROLLS INTO<br /><em>SALES PIPELINE</em>.</>} sub="Book a free social media audit and discover your highest-ROI campaign opportunities." btnText="Launch Your Campaigns" note="FREE ACCOUNT AUDIT · ROAS PROJECTION · NO COMMITMENT" />
    </div>
  );
}
