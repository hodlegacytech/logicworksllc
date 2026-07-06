import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '4.2x', lbl: 'Average ROAS' },
  { val: '68%', lbl: 'Lower Cost Per Lead' },
  { val: '3.1M+', lbl: 'Impressions Delivered' },
  { val: '89%', lbl: 'Client Retention' },
];

const solutions = [
  {
    title: 'Paid Social Campaign Strategy',
    desc: 'Full-funnel campaign architecture across Meta, TikTok, LinkedIn, and YouTube, with prospecting, retargeting, and lookalike audiences mapped directly to your buyer journey.',
  },
  {
    title: 'Creative Production & Testing',
    desc: 'Scroll-stopping ad creative, including static, carousel, Reels, and UGC-style video, paired with structured A/B testing that finds winners fast so spend scales with confidence.',
  },
  {
    title: 'Audience Targeting & Segmentation',
    desc: 'Interest, behavioral, and custom audience builds drawn from CRM data, website visitors, and engagement signals, all aimed at precision targeting that cuts down on wasted spend.',
  },
  {
    title: 'Conversion Tracking & Attribution',
    desc: 'Meta CAPI, GA4, UTM governance, and offline conversion imports give you full visibility from impression to revenue, rather than another report full of vanity metrics.',
  },
  {
    title: 'Influencer & Partnership Campaigns',
    desc: 'Micro and macro influencer sourcing, brief development, whitelisting, and performance tracking, since authentic reach tends to convert better than a polished brand ad ever could.',
  },
  {
    title: 'Social Commerce & Shop Setup',
    desc: 'Instagram Shop, Facebook Catalog, and TikTok Shop integration, with shoppable posts and product tagging that shorten the path from discovery to purchase considerably.',
  },
];

const useCases = [
  {
    icon: 'B2B',
    title: 'B2B Lead Generation',
    desc: 'LinkedIn and Meta lead gen campaigns with gated content, demo requests, and MQL scoring fill the pipeline for SaaS companies, agencies, and professional services alike.',
  },
  {
    icon: 'DTC',
    title: 'E-Commerce & DTC Brands',
    desc: 'Prospecting and dynamic product retargeting that drives ROAS-positive sales, supported by catalog ads, abandoned cart sequences, and seasonal promo bursts.',
  },
  {
    icon: 'LOC',
    title: 'Local & Franchise Growth',
    desc: 'Geo-targeted campaigns built for multi-location businesses, including store visit optimization, local awareness, and franchise-level reporting dashboards.',
  },
  {
    icon: 'EVT',
    title: 'Event & Launch Promotion',
    desc: 'Pre-launch buzz, ticket sales, and post-event retargeting, driven by countdown creative, early-bird offers, and attendee lookalike expansion.',
  },
];

const process = [
  {
    num: '01',
    title: 'Audit & Strategy',
    desc: 'Competitive analysis, account audit, audience research, and funnel mapping, all anchored to clear KPI targets from the outset.',
  },
  {
    num: '02',
    title: 'Campaign Build',
    desc: 'Ad set structure, pixel and CAPI setup, creative production, and landing page alignment are built before a single dollar of spend goes live.',
  },
  {
    num: '03',
    title: 'Launch & Test',
    desc: 'A controlled budget ramp alongside creative A/B tests and audience experiments, with daily monitoring catching issues before they become expensive.',
  },
  {
    num: '04',
    title: 'Optimize & Scale',
    desc: 'Underperformers get killed quickly, winners get scaled deliberately, creative gets refreshed regularly, and successful campaigns expand to new platforms.',
  },
  {
    num: '05',
    title: 'Report & Iterate',
    desc: 'Weekly performance reports, attribution reviews, and a quarterly strategy recalibration keep the account improving rather than coasting.',
  },
];

const channels = ['Meta Ads', 'Instagram', 'TikTok Ads', 'LinkedIn Ads', 'YouTube Ads', 'Pinterest Ads', 'Snapchat Ads', 'X (Twitter) Ads', 'Reddit Ads', 'Spotify Ads'];

const faqs = [
  {
    q: 'What does a social media marketing company actually manage day to day?',
    a: 'Content calendars, post creation, community engagement, paid social campaigns, and monthly performance reporting, all tailored to the platforms where your audience actually spends time.',
  },
  {
    q: 'How long before social media marketing services show real results?',
    a: 'Organic growth typically builds over 3 to 6 months, while paid social campaigns can show measurable engagement and leads within the first few weeks.',
  },
  {
    q: 'Which platforms does a social media marketing agency typically recommend?',
    a: 'It depends on your audience. B2B brands often lean into LinkedIn, while consumer brands see stronger results on Instagram, TikTok, and Facebook.',
  },
  {
    q: 'Can social media marketing services include paid ad management too?',
    a: 'Yes. Most engagements combine organic content strategy with paid social advertising, since the two work best when run together rather than separately.',
  },
  {
    q: 'How is success measured by a social media marketing company?',
    a: 'Through engagement rate, follower growth, click-through rate, and ultimately leads or sales generated, not just vanity metrics like likes.',
  },
];

export default function SocialMediaMarketing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Social Media Marketing Company | Paid Social Ads That Convert</title>
        <meta
          head-key="description"
          name="description"
          content="Grow your business with a social media marketing company focused on ROI. We run paid social campaigns on Meta, TikTok, LinkedIn & YouTube that drive leads and sales."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/social-media-marketing" />
      </Head>

      <section className="mkt-hero" aria-labelledby="smm-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Social Media</div>
          <h1 className="mkt-hero-title" id="smm-title">SOCIAL MEDIA<br /><span>MARKETING</span></h1>
          <p className="mkt-hero-sub">
            As a social media marketing company built around revenue rather than vanity metrics, we run paid campaigns engineered to stop the scroll, capture qualified leads, and drive measurable pipeline across Meta, TikTok, LinkedIn, and YouTube.
          </p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
              Launch Your Campaigns
              {arrowIcon}
            </Link>
            <Link href="/digital-marketing" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              All Marketing Services
            </Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Algorithm changes have quietly buried organic reach for nearly every brand. Meanwhile, your competitors are buying attention on every feed and turning it directly into the pipeline. Our social media marketing services put your brand in front of buyers who actually match your ideal customer profile, with a level of creative and targeting precision that organic posts simply cannot reach anymore.
              </p>
              <div className="mkt-highlight-box">
                <p>
                  Businesses running optimized paid social campaigns, therefore, see roughly 4 times higher conversion rates than organic-only strategies, with full attribution tracked from the first click all the way to a closed deal.
                </p>
              </div>
              <div className="mkt-check-list">
                {[
                  'Full-funnel campaign architecture',
                  'Creative production with A/B testing',
                  'Advanced audience segmentation',
                  'Conversion tracking and ROAS reporting',
                ].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">
                {['Meta Ads', 'TikTok', 'LinkedIn', 'YouTube', 'Retargeting'].map((t) => (
                  <span key={t} className="mkt-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Results</div>
              {[
                { icon: '↑', title: 'Average ROAS', desc: '4.2x return on ad spend across platforms' },
                { icon: '↓', title: 'Lower CPL', desc: '68% reduction through precision targeting and creative testing' },
                { icon: '◎', title: 'Full-Funnel Visibility', desc: 'Every touchpoint tracked from impression to revenue in your CRM' },
                { icon: '⚡', title: 'Scalable Growth', desc: 'Proven campaigns scaled with confidence, not guesswork' },
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
            <h2 className="sec-title">CAMPAIGNS THAT<br /><em>CONVERT AT SCALE</em></h2>
            <p className="sec-desc">
              As a social media marketing agency, we approach paid social through six core capabilities, spanning strategy and creative all the way through tracking and social commerce.
            </p>
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
            <p className="sec-desc">
              Whether the goal is a B2B pipeline, e-commerce sales, local growth, or event promotion, our social media marketing services follow proven playbooks built around measurable ROI.
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
            <h2 className="sec-title">FROM STRATEGY TO<br /><em>SCALABLE RESULTS</em></h2>
            <p className="sec-desc">
              A proven five-phase approach to launching, optimizing, and scaling paid social campaigns over time.
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
            <div className="sec-label">Platforms</div>
            <h2 className="sec-title">EVERY MAJOR<br /><em>SOCIAL CHANNEL</em></h2>
            <p className="sec-desc">We manage paid campaigns across all major social and discovery platforms.</p>
          </div>
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq
        id="smm-faq"
        title={<>FAQs</>}
        desc=""
        faqs={faqs}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
      <MarketingCta
        eyebrow="Stop Leaving Leads on the Table"
        title={<>TURN SCROLLS INTO<br /><em>A SALES PIPELINE</em>.</>}
        sub="Book a free social media audit and discover your highest-ROI campaign opportunities."
        btnText="Launch Your Campaigns"
        note="FREE ACCOUNT AUDIT · ROAS PROJECTION · NO COMMITMENT"
      />
    </div>
  );
}
