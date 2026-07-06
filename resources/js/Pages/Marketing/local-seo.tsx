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
  { num: '01', title: 'Google Business Profile Optimization', desc: 'Complete GBP setup, category selection, service area mapping, photo strategy, posts, and Q&A management, all of it aimed at maximizing local pack placement.' },
  { num: '02', title: 'Local Citation Building & Cleanup', desc: 'NAP consistency across 80-plus directories, data aggregator submissions, and duplicate listing suppression, since clean signals tend to outperform sheer citation volume.' },
  { num: '03', title: 'Geo-Targeted Content Strategy', desc: 'City and neighborhood landing pages, local keyword clusters, and genuinely relevant content built to rank for "near me" and service-area queries alike.' },
  { num: '04', title: 'Review Generation & Reputation', desc: 'Automated review request workflows, response templates, sentiment monitoring, and reputation repair for profiles that have taken some damage.' },
  { num: '05', title: 'Local Schema & Structured Data', desc: 'LocalBusiness, Service, and GeoCoordinates markup that helps search engines understand your physical presence and service radius more precisely.' },
  { num: '06', title: 'Local Link & Community Building', desc: 'Chamber partnerships, local sponsorships, community event coverage, and hyperlocal backlinks, all signaling regional authority that\'s hard to fake.' },
];

const useCases = [
  { icon: 'MED', title: 'Medical & Dental Practices', desc: 'Dominate local health searches, fill appointment books, and outrank competing clinics in the Google Map Pack.' },
  { icon: 'LAW', title: 'Law Firms & Legal Services', desc: 'Capture high-intent "lawyer near me" queries and establish geographic authority in markets that tend to be fiercely competitive.' },
  { icon: 'HOME', title: 'Home Services & Contractors', desc: 'Rank for both emergency and scheduled service queries, plumbing, HVAC, roofing, and landscaping across your entire service area.' },
  { icon: 'RET', title: 'Multi-Location Retail', desc: 'Coordinate local SEO across dozens of storefronts through a centralized strategy paired with location-specific optimization.' },
];

const timeline = [
  { num: '01', title: 'Local Audit & Benchmark', desc: 'Analyze GBP health, citation accuracy, competitor map pack positions, and review profile strength against local rivals.' },
  { num: '02', title: 'Foundation & Citations', desc: 'Optimize Google Business Profile, clean up NAP inconsistencies, and build an authoritative local directory presence.' },
  { num: '03', title: 'Content & On-Page', desc: 'Deploy geo-targeted landing pages, local schema markup, and service-area content clusters built to actually rank.' },
  { num: '04', title: 'Reviews & Reputation', desc: 'Launch review generation campaigns, implement response protocols, and monitor sentiment across every relevant platform.' },
  { num: '05', title: 'Scale & Dominate', desc: 'Expand to additional locations, track map pack rankings closely, and refine the approach based on real local conversion data.' },
];

const channels = ['Google Business Profile', 'Apple Maps', 'Bing Places', 'Yelp', 'Facebook', 'Local Schema', 'BrightLocal', 'Moz Local', 'Semrush', 'Whitespark', 'Data Axle', 'Review Platforms'];

const faqs = [
  { q: 'What makes local SEO different from regular SEO?', a: 'Local SEO focuses specifically on ranking in geographically relevant searches and Google Maps results, prioritizing signals like business listings, local reviews, and proximity.' },
  { q: 'How important is Google Business Profile for local SEO success?', a: 'It\'s one of the most important ranking factors. A fully optimized, regularly updated profile significantly improves visibility in local map searches.' },
  { q: 'How long does it take to see local SEO results?', a: 'Most businesses see initial movement within 2 to 3 months, with stronger results building over 6 months as citations, reviews, and content accumulate.' },
  { q: 'Do online reviews actually affect local search rankings?', a: 'Yes. Review quantity, recency, and response rate all factor into how Google ranks local businesses for relevant searches.' },
  { q: 'Is local SEO worth it for a business with only one physical location?', a: 'Absolutely. Single-location businesses often see the fastest, most direct ROI from local SEO since their entire customer base is searching within a defined geographic area.' },
];

export default function LocalSeo() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Local SEO Services Company | Google Maps Ranking Experts</title>
        <meta head-key="description" name="description" content="Rank in Google Maps with our local SEO services. We optimize Google Business Profile, citations, reviews, and geo-targeted content to increase local visibility and calls." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/local-seo" />
      </Head>

      <section className="mkt-hero" aria-labelledby="local-seo-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Search Marketing</div>
          <h1 className="mkt-hero-title" id="local-seo-title">Local<br /><span>SEO</span></h1>
          <p className="mkt-hero-sub">Own your local market. We handle Google Business Profile optimization, citation building, and geo-targeted content that puts you in the map pack when nearby customers are actually searching.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Nearly 46% of all Google searches carry local intent. If you&apos;re not in the map pack, however, your competitors are the ones capturing the calls, visits, and appointments that should rightfully be yours.</p>
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
                { icon: '📍', title: 'Map Pack Dominance', desc: 'Top-three local pack placement for your highest-value service keywords' },
                { icon: '★', title: 'Review Velocity', desc: 'Consistent new reviews that boost trust signals and local rankings' },
                { icon: '📞', title: 'More Calls & Directions', desc: 'A measurable lift in phone calls, direction requests, and website clicks from GBP' },
                { icon: '🏆', title: 'Competitive Moat', desc: 'A local authority that keeps competitors from displacing you in your service area' },
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
            <p className="sec-desc">Six proven disciplines turn local search visibility into phone calls, visits, and revenue.</p>
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
            <p className="sec-desc">From single-location practices to multi-store franchises, a local search strategy gets built around your specific market.</p>
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
            <p className="sec-desc">From audit to map pack dominance, here&apos;s the structured program with clear milestones at every step.</p>
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

      <MarketingFaq id="local-seo-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Own Your Neighborhood" title={<>BE THE FIRST NAME<br /><em>LOCALS FIND</em>.</>} sub="Book a free local SEO audit and see exactly where you rank, and where competitors are beating you, in the map pack." btnText="Get a Local SEO Audit" note="" />
    </div>
  );
}
