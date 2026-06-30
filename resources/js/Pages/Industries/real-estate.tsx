import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '4.2x', lbl: 'Lead Volume Increase' },
  { val: '89%', lbl: 'Mobile Traffic Optimized' },
  { val: 'TOP3', lbl: 'Local Map Pack Rankings' },
  { val: '35%', lbl: 'Lower Cost Per Lead' },
];

const solutions = [
  { num: '01', title: 'IDX and MLS integration', desc: 'Real time listing sync, advanced search filters, map based browsing, and saved searches that keep buyers on your site' },
  { num: '02', title: 'Agent and broker websites', desc: 'Personal brand sites and brokerage platforms with lead capture, property showcases, and CRM ready form integrations' },
  { num: '03', title: 'Local SEO domination', desc: 'Neighborhood landing pages, Google Business Profile optimization, and citation management for geo targeted visibility' },
  { num: '04', title: 'Lead generation funnels', desc: 'Home valuation tools, buyer guides, and seller landing pages with automated email nurture sequences' },
  { num: '05', title: 'PPC and retargeting', desc: 'Google Ads for high intent property searches alongside retargeting campaigns that re engage past visitors' },
  { num: '06', title: 'Virtual tour and media', desc: '3D tour integration, drone photography coordination, and video marketing that makes listings genuinely stand out' },
];

const useCases = [
  { num: '01', title: 'Individual agents and teams', desc: 'Personal brand sites with IDX, lead funnels, and local SEO that build your pipeline steadily' },
  { num: '02', title: 'Brokerages and franchises', desc: 'Multi agent platforms, brand consistency, and enterprise lead routing systems' },
  { num: '03', title: 'Property developers', desc: 'New construction marketing, pre sale funnels, and community specific landing pages' },
  { num: '04', title: 'Property management', desc: 'Rental listing sites, tenant portals, and local SEO built for property management companies' },
];

const timeline = [
  { num: '01', title: 'Market audit', desc: 'Competitive analysis, MLS feed assessment, and a local SEO baseline for your farm area' },
  { num: '02', title: 'Strategy and IDX setup', desc: 'Keyword mapping by neighborhood, IDX provider integration, and lead funnel architecture' },
  { num: '03', title: 'Design and build', desc: 'Mobile first IDX site, CRM integration, and automated nurture workflow deployment' },
  { num: '04', title: 'Launch and rank', desc: 'Go live with local schema markup, GBP optimization, and Google Ads activation' },
  { num: '05', title: 'Leads and scale', desc: 'Ongoing SEO, content marketing, and conversion optimization by market area' },
];

const stack = ['IDX Broker', 'iHomefinder', 'Showcase IDX', 'Follow Up Boss', 'kvCORE', 'BoomTown', 'LionDesk', 'Real Geeks', 'Google Ads', 'Mailchimp', 'Zillow API', 'DocuSign'];

const faqs = [
  { q: 'What digital tools matter most for real estate agents and brokerages?', a: 'A fast, mobile-friendly website with IDX listing integration, strong local SEO, and lead capture forms tend to drive the most consistent results.' },
  { q: 'What is IDX integration and why does it matter for real estate websites?', a: 'IDX integration pulls live MLS listings directly onto your website, letting visitors search current inventory without leaving your site or hitting outdated listings.' },
  { q: 'How important is local SEO for real estate businesses specifically?', a: 'Extremely important, since most home searches are tied to specific neighborhoods and cities, making local search visibility directly tied to lead volume.' },
  { q: 'Can a real estate website include virtual tours and high-resolution photography?', a: 'Yes, and it\'s increasingly expected. Custom real estate sites are commonly built to support virtual tours, video, and gallery-style photo presentation.' },
  { q: 'How do real estate brokerages typically generate leads online?', a: 'Through a combination of SEO-driven organic traffic, targeted PPC campaigns, and landing pages built around specific neighborhoods or property types.' },
];

export default function RealEstate() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#1a4bdb' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Real Estate Digital Marketing | LogicWorks — IDX & Lead Generation</title>
        <meta head-key="description" name="description" content="IDX integrated websites, lead generation funnels, and local SEO that put your listings in front of buyers and sellers well before your competition ever gets the chance." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/industries/real-estate" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="realestate-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">RE</div>
            <span className="ind-inner-label">Real Estate</span>
          </div>
          <h1 className="ind-inner-title" id="realestate-title">Real Estate<br /><span>Digital Marketing</span></h1>
          <p className="ind-inner-sub">IDX integrated websites, lead generation funnels, and local SEO that put your listings in front of buyers and sellers well before your competition ever gets the chance.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Real Estate Audit{arrowIcon}</Link>
            <Link href="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Industries</Link>
          </div>
        </div>
      </section>

      <section className="ind-impact-band">
        <div className="con">
          <div className="ind-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ind-impact-item">
                <div className="ind-impact-val">{m.val}</div>
                <div className="ind-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-split">
            <div className="reveal-l">
              <div className="sec-label">The Challenge</div>
              <h2 className="sec-title">ZILLOW OWNS THE<br /><em>FIRST CLICK</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Portals capture attention easily, but they also quietly steal your leads in the process. Agents without IDX powered sites, real local SEO dominance, and automated nurture sequences end up losing deals to competitors who own the digital relationship from the very first search through closing.</p>
              <div className="ind-check-list">
                {['MLS and IDX integration with real time listing sync', 'Hyper local SEO for genuine neighborhood domination', 'Automated lead nurture with CRM integration', 'Mobile first property search experiences'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['IDX and MLS', 'local SEO', 'lead funnels', 'CRM sync', 'virtual tours'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '🏠', title: '4.2x more qualified leads', desc: 'IDX sites that capture buyer intent before portal fatigue ever sets in' },
                { icon: '📍', title: 'Map pack dominance', desc: 'Top three local rankings for neighborhood and agent searches alike' },
                { icon: '📱', title: 'Mobile first experience', desc: '89 percent of home searches start on mobile, and we build for that reality' },
                { icon: '💰', title: '35% lower CPL', desc: 'Organic IDX traffic reduces how much you depend on expensive portal leads' },
              ].map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  <div className="ind-outcome-icon">{o.icon}</div>
                  <div className="ind-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Solutions</div>
            <h2 className="sec-title">REAL ESTATE<br /><em>DIGITAL STACK</em></h2>
            <p className="sec-desc">Six capabilities turn your website into a genuine lead generating listing machine.</p>
          </div>
          <div className="ind-solution-grid">
            {solutions.map((s) => (
              <article key={s.title} className="ind-solution-card">
                <div className="ind-solution-num">{s.num}</div>
                <h3 className="ind-solution-title">{s.title}</h3>
                <p className="ind-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Who We Serve</div>
            <h2 className="sec-title">REAL ESTATE<br /><em>PROFESSIONALS</em></h2>
            <p className="sec-desc">Digital solutions built for every role across the property market.</p>
          </div>
          <div className="ind-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="ind-use-card">
                <div className="ind-use-num">{u.num}</div>
                <h3 className="ind-use-title">{u.title}</h3>
                <p className="ind-use-desc">{u.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Process</div>
            <h2 className="sec-title">LIVE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From MLS audit to a fully lead generating machine, structured real estate digital delivery start to finish.</p>
          </div>
          <div className="ind-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="ind-process-step">
                <div className="ind-process-dot">{s.num}</div>
                <h3 className="ind-process-title">{s.title}</h3>
                <p className="ind-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Integrations</div>
            <h2 className="sec-title">YOUR MLS &<br /><em>CRM CONNECTED</em></h2>
            <p className="sec-desc">IDX feeds, CRMs, and real estate marketing platforms.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="re-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Real Estate" title={<>LISTINGS THAT RANK.<br /><em>LEADS THAT CLOSE</em>.</>} sub="Book a free real estate digital audit and see exactly how IDX powered sites drive qualified buyer and seller leads." btnText="Get a Real Estate Audit" note="" />
    </div>
  );
}
