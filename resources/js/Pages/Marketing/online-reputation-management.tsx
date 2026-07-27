import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '100%', lbl: 'Review Response SLA' },
  { val: '3–6mo', lbl: 'Search Visibility Shift' },
  { val: '24/7', lbl: 'Review Monitoring' },
  { val: 'Zero', lbl: 'Internal Overhead' },
];

const solutions = [
  { title: 'Review Monitoring & Alerts', desc: 'Continuous tracking across Google, Yelp, Facebook, industry-specific platforms, and review aggregators, with new reviews flagged the moment they post so nothing sits unanswered.' },
  { title: 'Strategic Review Response', desc: 'Thoughtful, brand-consistent responses to both positive and negative reviews, professionally handled to de-escalate frustration and demonstrate accountability to anyone reading.' },
  { title: 'Review Generation Campaigns', desc: 'Automated, ethical outreach that encourages satisfied customers to leave reviews, steadily improving star rating and review volume over time.' },
  { title: 'Search Result Management', desc: 'Strategic content and SEO work aimed at ensuring accurate, favorable information appears when someone searches your business or leadership team by name.' },
  { title: 'Negative Content & Crisis Response', desc: 'A clear protocol for addressing damaging press, fake reviews, or coordinated negative campaigns, including reporting policy-violating content and building a recovery plan.' },
  { title: 'Sentiment & Visibility Reporting', desc: 'Monthly reports covering review sentiment, search visibility, response performance, and competitor reputation benchmarks, insight that actually informs strategy rather than just filling a report.' },
];

const useCases = [
  { icon: 'HCP', title: 'Healthcare & Medical Practices', desc: 'Patient review monitoring, HIPAA-conscious response protocols, and search visibility management for providers where trust directly drives new patient volume.' },
  { icon: 'LAW', title: 'Law Firms & Professional Services', desc: 'Review and search result management for firms where a single damaging result can outweigh years of case results and client trust.' },
  { icon: 'HSP', title: 'Hospitality & Local Businesses', desc: 'Daily review monitoring, guest response management, and reputation recovery for restaurants, hotels, and local brands where star rating drives foot traffic directly.' },
  { icon: 'MLT', title: 'Growing & Multi-Location Brands', desc: 'Centralized reputation oversight across multiple locations, with consistent response standards and visibility into which locations need the most attention.' },
];

const process = [
  { num: '01', title: 'Reputation Audit', desc: 'A full review of existing ratings, review sentiment, search results, and any damaging content already live, done before any strategy gets built.' },
  { num: '02', title: 'Strategy & Response Protocol', desc: 'Response templates, escalation rules, and review generation strategy mapped out in advance rather than improvised reaction by reaction.' },
  { num: '03', title: 'Monitoring Setup', desc: 'Alerts and tracking configured across every relevant platform so new reviews and mentions are caught the moment they appear.' },
  { num: '04', title: 'Respond & Generate', desc: 'Ongoing review response, review generation outreach, and search content work handled consistently rather than in occasional bursts.' },
  { num: '05', title: 'Report & Refine', desc: 'A performance review each month, covering sentiment shift, response timing, and strategy adjustments based on what the data is actually showing.' },
];

const channels = ['Google Business', 'Yelp', 'Facebook', 'Trustpilot', 'Healthgrades', 'Avvo', 'TripAdvisor', 'BBB', 'Glassdoor', 'Industry Review Sites'];

const faqs = [
  { q: 'What does an online reputation management company actually do?', a: 'Monitors brand mentions and reviews, responds to negative feedback strategically, promotes positive content, and works to ensure search results reflect your business accurately.' },
  { q: 'Can online reputation management services remove negative reviews?', a: 'Genuine reviews generally cannot be removed, but fake or policy-violating reviews can often be reported and taken down, while legitimate negative reviews are addressed through a professional response strategy.' },
  { q: 'How long does it take an online reputation management agency to improve search results?', a: 'Meaningful shifts in search visibility typically take 3 to 6 months, depending on how much negative content exists and how authoritative it is.' },
  { q: 'Is online reputation management only for businesses with existing problems?', a: 'No. Many businesses use these services proactively to build a strong online presence before issues arise, rather than reacting after damage is done.' },
  { q: 'What industries benefit most from online reputation management services?', a: 'Healthcare, legal, real estate, and hospitality businesses tend to see the highest impact, since customer trust and reviews directly influence purchasing decisions in these fields.' },
];

export default function OnlineReputationManagement() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Online Reputation Management Company | Brand Trust & Reviews</title>
        <meta head-key="description" name="description" content="Protect your brand with our online reputation management services. We monitor reviews, manage search results, and improve brand trust, sentiment, and visibility." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/online-reputation-management" />
      </Head>

      <section className="mkt-hero" aria-labelledby="orm-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Brand Trust</div>
          <h1 className="mkt-hero-title" id="orm-title">ONLINE REPUTATION<br /><span>MANAGEMENT</span></h1>
          <p className="mkt-hero-sub">Review monitoring, response strategy, and a real plan for what shows up when someone searches your name. As an online reputation management company, we handle the entire job of protecting how your brand looks online so it&apos;s no longer something you only think about after a bad review.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Reputation Protected{arrowIcon}</Link>
            <Link href="/seo-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>SEO Services</Link>
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
              <h2 className="sec-title">ONE BAD REVIEW<br /><em>OUTWEIGHS TEN GOOD ONES</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Your customers research you before they ever call. A handful of unanswered negative reviews, an outdated Google listing, or a damaging news mention sitting on page one all signal the same thing, that nobody is actually managing what people see. Professional online reputation management services, by contrast, keep your brand&apos;s public image accurate, responsive, and actively reinforced, without pulling your team away from running the business.</p>
              <div className="mkt-highlight-box"><p>Businesses that actively manage their online reputation see significantly higher conversion rates from search traffic than those who leave it unmanaged, since trust, perhaps more than any single ranking factor, is what actually closes the sale.</p></div>
              <div className="mkt-check-list">
                {['Continuous review monitoring across platforms', 'Strategic response to negative and fake reviews', 'Positive content promotion and SEO suppression', 'Monthly sentiment and visibility reporting'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Reviews', 'Search Results', 'Response Strategy', 'Sentiment', 'Visibility'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Results</div>
              {[
                { icon: '↑', title: 'Review Response Rate', desc: '100% of new reviews addressed within a defined SLA' },
                { icon: '◎', title: 'Search Result Sentiment', desc: 'Measurable shift toward positive, accurate content on page one' },
                { icon: '⏱', title: 'Star Rating Lift', desc: 'Noticeable improvement through review generation and response strategy' },
                { icon: '✓', title: 'Internal Overhead', desc: 'Effectively zero, since your team stays focused on the business' },
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
            <h2 className="sec-title">FULL-SERVICE<br /><em>REPUTATION MANAGEMENT</em></h2>
            <p className="sec-desc">Our work spans six core capabilities, from review monitoring and response through search visibility and crisis management.</p>
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
            <h2 className="sec-title">REPUTATION MANAGEMENT FOR<br /><em>EVERY BUSINESS TYPE</em></h2>
            <p className="sec-desc">Healthcare providers, law firms, hospitality brands, and growing local businesses all face different reputation risks, and we tailor accordingly.</p>
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
            <h2 className="sec-title">YOUR REPUTATION, PROTECTED<br /><em>IN 5 PHASES</em></h2>
            <p className="sec-desc">From audit through ongoing monitoring, here&apos;s the structured approach behind building and protecting a strong online reputation.</p>
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
            <h2 className="sec-title">MONITORED ACROSS<br /><em>ALL CHANNELS</em></h2>
            <p className="sec-desc">Continuous tracking across Google, Yelp, Facebook, industry-specific platforms, and review aggregators</p>
          </div>
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq id="orm-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Your Reputation, Handled" title={<>RESPOND QUICKLY.<br /><em>BUILD TRUST</em>.</>} sub="Book a free reputation audit and get a custom response and recovery strategy for your brand." btnText="Get Reputation Protected" note="" />
    </div>
  );
}
