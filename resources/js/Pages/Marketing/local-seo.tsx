import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '340%', lbl: 'Local Pack Visibility' },
  { val: '2.8x', lbl: 'Direction Request Lift' },
  { val: '89%', lbl: 'Citation Accuracy' },
  { val: '52', lbl: 'Avg. New Reviews / Mo.' },
];

const solutions = [
  { num: '01', title: 'Google Business Profile Optimization', desc: 'Complete GBP setup, category selection, service area mapping, photo strategy, posts, and Q&A management that maximizes local pack placement.' },
  { num: '02', title: 'Local Citation Building & Cleanup', desc: 'NAP consistency across 80+ directories, data aggregator submissions, and duplicate listing suppression for clean local signals.' },
  { num: '03', title: 'Geo-Targeted Content Strategy', desc: 'City and neighborhood landing pages, local keyword clusters, and hyper-relevant content that ranks for "near me" and service-area queries.' },
  { num: '04', title: 'Review Generation & Reputation', desc: 'Automated review request workflows, response templates, sentiment monitoring, and reputation repair for damaged profiles.' },
  { num: '05', title: 'Local Schema & Structured Data', desc: 'LocalBusiness, Service, and GeoCoordinates markup that helps search engines understand your physical presence and service radius.' },
  { num: '06', title: 'Local Link & Community Building', desc: 'Chamber partnerships, local sponsorships, community event coverage, and hyperlocal backlinks that signal regional authority.' },
];

const useCases = [
  { icon: 'MED', title: 'Medical & Dental Practices', desc: 'Dominate local health searches, fill appointment books, and outrank competing clinics in the Google Map Pack.' },
  { icon: 'LAW', title: 'Law Firms & Legal Services', desc: 'Capture high-intent "lawyer near me" queries and establish geographic authority in competitive legal markets.' },
  { icon: 'HOME', title: 'Home Services & Contractors', desc: 'Rank for emergency and scheduled service queries — plumbing, HVAC, roofing, landscaping — across your service area.' },
  { icon: 'RET', title: 'Multi-Location Retail', desc: 'Coordinate local SEO across dozens of storefronts with centralized strategy and location-specific optimization.' },
];

const timeline = [
  { num: '01', title: 'Local Audit & Benchmark', desc: 'Analyze GBP health, citation accuracy, competitor map pack positions, and review profile against local rivals.' },
  { num: '02', title: 'Foundation & Citations', desc: 'Optimize Google Business Profile, clean NAP inconsistencies, and build authoritative local directory presence.' },
  { num: '03', title: 'Content & On-Page', desc: 'Deploy geo-targeted landing pages, local schema markup, and service-area content clusters.' },
  { num: '04', title: 'Reviews & Reputation', desc: 'Launch review generation campaigns, implement response protocols, and monitor sentiment across platforms.' },
  { num: '05', title: 'Scale & Dominate', desc: 'Expand to additional locations, track map pack rankings, and refine based on local conversion data.' },
];

const channels = ['Google Business Profile', 'Apple Maps', 'Bing Places', 'Yelp', 'Facebook', 'Local Schema', 'BrightLocal', 'Moz Local', 'Semrush', 'Whitespark', 'Data Axle', 'Review Platforms'];

const faqs = [
  { q: 'How long does it take to rank in the local map pack?', a: 'Most businesses see map pack movement within 60–90 days of comprehensive GBP optimization and citation cleanup. Competitive markets may require 4–6 months of sustained local content and review generation.' },
  { q: 'Do you manage Google Business Profile for us?', a: 'Yes. We handle complete GBP optimization — categories, descriptions, photos, posts, Q&A, and ongoing management. You approve content; we execute and monitor performance.' },
  { q: 'How important are reviews for local SEO?', a: 'Critical. Review quantity, velocity, sentiment, and keyword-rich responses are top local ranking factors. We implement automated review request systems that consistently generate authentic feedback.' },
  { q: 'Can you help with multiple locations?', a: 'Absolutely. We build scalable local SEO programs for multi-location brands — centralized strategy with location-specific GBP, citations, content, and review management for each storefront.' },
  { q: 'What is included in a local SEO audit?', a: 'GBP health score, NAP consistency check across 50+ directories, competitor map pack analysis, review profile assessment, local content gaps, and a prioritized 90-day action plan.' },
];

export default function LocalSeo() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Local SEO | LogicWorks — Dominate Your Local Market</title>
        <meta head-key="description" name="description" content="LogicWorks local SEO services optimize Google Business Profile, build citations, generate reviews, and create geo-targeted content that wins the local map pack." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/local-seo" />
      </Head>

      <section className="mkt-hero" aria-labelledby="local-seo-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Search Marketing</div>
          <h1 className="mkt-hero-title" id="local-seo-title">Local<br /><span>SEO</span></h1>
          <p className="mkt-hero-sub">Own your local market — Google Business Profile optimization, citations, and geo-targeted content that puts you in the map pack when nearby customers search.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Local SEO Audit{arrowIcon}</Link>
            <Link href="/aeo-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>AEO Services</Link>
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
              <h2 className="sec-title">LOCAL SEARCH<br /><em>DRIVES FOOT TRAFFIC</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>46% of all Google searches have local intent. If you are not in the map pack, competitors capture the calls, visits, and appointments that should be yours.</p>
              <div className="mkt-check-list">
                {['Google Business Profile fully optimized', 'NAP consistency across all directories', 'Automated review generation system', 'Geo-targeted landing pages that rank'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Map Pack', 'GBP', 'Citations', 'Reviews', 'Near Me'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Outcomes</div>
              {[
                { icon: '📍', title: 'Map Pack Dominance', desc: 'Top-three local pack placement for your highest-value service keywords.' },
                { icon: '★', title: 'Review Velocity', desc: 'Consistent new reviews that boost trust signals and local rankings.' },
                { icon: '📞', title: 'More Calls & Directions', desc: 'Measurable lift in phone calls, direction requests, and website clicks from GBP.' },
                { icon: '🏆', title: 'Competitive Moat', desc: 'Local authority that keeps competitors from displacing you in your service area.' },
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
            <h2 className="sec-title">LOCAL SEO THAT<br /><em>WINS THE MAP PACK</em></h2>
            <p className="sec-desc">Six proven disciplines that turn local search visibility into phone calls, visits, and revenue.</p>
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
            <h2 className="sec-title">LOCAL SEO FOR<br /><em>EVERY BUSINESS</em></h2>
            <p className="sec-desc">From single-location practices to multi-store franchises — local search strategies built for your market.</p>
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
            <h2 className="sec-title">DOMINATE LOCALLY IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From audit to map pack dominance — a structured local SEO program with clear milestones at every step.</p>
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
            <div className="sec-label">Tools & Platforms</div>
            <h2 className="sec-title">BUILT ON<br /><em>PROVEN STACK</em></h2>
            <p className="sec-desc">Industry-leading local SEO tools, directories, and review platforms — managed end-to-end by our team.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="local-seo-faq" title={<>Local SEO<br /><em>QUESTIONS ANSWERED</em></>} desc="What local business owners ask before investing in local search optimization." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Own Your Neighborhood" title={<>BE THE FIRST NAME<br /><em>LOCALS FIND</em>.</>} sub="Book a free local SEO audit and see exactly where you rank — and where competitors beat you — in the map pack." btnText="Get a Local SEO Audit" note="FREE LOCAL AUDIT · MAP PACK ANALYSIS · NO COMMITMENT" />
    </div>
  );
}
