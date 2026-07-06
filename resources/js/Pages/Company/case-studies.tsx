import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useCompanyPage, arrowIcon, CompanyCta } from './shared';

const featured = {
  client: 'CloudSync',
  industry: 'B2B SaaS · Series B',
  badge: 'Featured Case Study',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  imageAlt: 'SaaS analytics dashboard displaying trial sign-up and conversion growth metrics',
  gradient: 'linear-gradient(160deg, rgba(8, 145, 178, 0.35) 0%, rgba(13, 27, 62, 0.72) 55%, rgba(6, 13, 31, 0.92) 100%)',
  title: 'How CloudSync tripled trial sign-ups and cut CAC by 40% with a product-led growth redesign.',
  challenge: 'CloudSync had strong product-market fit but a website built for enterprise sales cycles. Free trial sign-ups stagnated at 2.1% while CAC climbed past $180. The product was winning — the digital experience was not.',
  solution: 'LogicWorks rebuilt the entire PLG funnel — self-serve trial flow, interactive product demo, bottom-funnel SEO content, and comparison pages targeting competitor alternatives. Full analytics instrumentation from first visit to activation.',
  metrics: [
    { val: '3.6x', lbl: 'Trial Sign-Ups' },
    { val: '40%', lbl: 'CAC Reduction' },
    { val: '58%', lbl: 'Demo Requests' },
  ],
  tags: ['PLG Design', 'B2B SEO', 'CRO', 'Analytics'],
};

const cases = [
  {
    client: 'MedCore Clinics',
    industry: 'Healthcare',
    gradient: 'linear-gradient(135deg, #166534, #0d1b3e)',
    title: 'HIPAA-compliant patient portal and medical SEO filled appointment books in 90 days.',
    desc: 'Multi-location clinic network needed online scheduling, a patient portal, and specialty SEO to compete with hospital systems dominating local search.',
    metrics: [
      { val: '62%', lbl: 'Online Bookings' },
      { val: '3.1x', lbl: 'Patient Leads' },
      { val: '40%', lbl: 'Call Reduction' },
    ],
    tags: ['HIPAA', 'Patient Portal', 'Medical SEO'],
  },
  {
    client: 'Metro Realty Group',
    industry: 'Real Estate',
    gradient: 'linear-gradient(135deg, #1a4bdb, #060d1f)',
    title: 'IDX-powered website and local SEO generated 4.2x more qualified buyer leads.',
    desc: 'Regional brokerage losing leads to Zillow and Realtor.com. Needed direct booking pipeline with hyper-local neighborhood SEO across 12 farm areas.',
    metrics: [
      { val: '4.2x', lbl: 'Lead Volume' },
      { val: 'TOP3', lbl: 'Map Pack' },
      { val: '35%', lbl: 'Lower CPL' },
    ],
    tags: ['IDX Integration', 'Local SEO', 'Lead Funnels'],
  },
  {
    client: 'Luxe Retail Co.',
    industry: 'E-Commerce',
    gradient: 'linear-gradient(135deg, #7c3aed, #c8192a)',
    title: 'Shopify Plus rebuild and CRO program drove 47% revenue lift in six months.',
    desc: 'Premium DTC brand with 1.8% conversion rate and 72% cart abandonment. Needed platform migration, checkout optimization, and shopping ad feed overhaul.',
    metrics: [
      { val: '47%', lbl: 'Revenue Lift' },
      { val: '3.8%', lbl: 'Conversion Rate' },
      { val: '2.4x', lbl: 'ROAS' },
    ],
    tags: ['Shopify Plus', 'CRO', 'Google Shopping'],
  },
  {
    client: 'Sterling & Associates',
    industry: 'Legal',
    gradient: 'linear-gradient(135deg, #374151, #0d1b3e)',
    title: 'Attorney SEO and intake optimization multiplied case inquiries 5.1x.',
    desc: 'Personal injury firm spending $40K/month on PPC with declining returns. Needed organic authority, practice-area content, and mobile-first intake forms.',
    metrics: [
      { val: '5.1x', lbl: 'Case Inquiries' },
      { val: '68%', lbl: 'Cost Per Case ↓' },
      { val: 'TOP3', lbl: 'Local Rankings' },
    ],
    tags: ['Attorney SEO', 'Legal PPC', 'Intake CRO'],
  },
  {
    client: 'PayStream Financial',
    industry: 'FinTech',
    gradient: 'linear-gradient(135deg, #0d1b3e, #1a4bdb)',
    title: 'Compliant conversion funnel increased application completion by 52%.',
    desc: 'Series A FinTech with complex KYC onboarding losing 70% of applicants at step three. Needed regulatory-compliant UX redesign and trust architecture.',
    metrics: [
      { val: '52%', lbl: 'Conversion Lift' },
      { val: '2.8x', lbl: 'Lead Quality' },
      { val: '28%', lbl: 'Drop-off ↓' },
    ],
    tags: ['FinTech UX', 'Compliance', 'CRO'],
  },
  {
    client: 'Summit Hospitality',
    industry: 'Hospitality',
    gradient: 'linear-gradient(135deg, #c8922a, #6b0000)',
    title: 'Direct booking engine cut OTA commissions by 25% and boosted occupancy.',
    desc: 'Boutique hotel group paying 18% OTA commissions on 70% of bookings. Needed direct reservation system, Google Hotels integration, and reputation management.',
    metrics: [
      { val: '38%', lbl: 'Direct Bookings' },
      { val: '25%', lbl: 'Commission Saved' },
      { val: '4.8★', lbl: 'Review Score' },
    ],
    tags: ['Direct Booking', 'Google Hotels', 'Reputation'],
  },
];

const aggregateResults = [
  { val: '$120M+', lbl: 'Revenue generated for clients' },
  { val: '500+', lbl: 'Projects delivered' },
  { val: '3.4x', lbl: 'Average ROI multiple' },
  { val: '98%', lbl: 'Client retention rate' },
];

export default function CaseStudies() {
  const pageRef = useRef<HTMLDivElement>(null);
  useCompanyPage(pageRef);

  return (
    <div ref={pageRef} className="co-page">
      <Head>
        <title head-key="title">Case Studies | LogicWorks — Real Results Across Every Vertical</title>
        <meta head-key="description" name="description" content="Explore LogicWorks case studies — real businesses, measurable results across healthcare, SaaS, e-commerce, real estate, legal, FinTech, and hospitality." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/case-studies" />
      </Head>

      <section className="co-hero" aria-labelledby="cases-title">
        <div className="co-hero-glow" aria-hidden="true" />
        <div className="con co-hero-inner">
          <div className="co-eyebrow">Company</div>
          <h1 className="co-hero-title" id="cases-title">Real Businesses.<br /><span>Real Results.</span></h1>
          <p className="co-hero-sub">Explore how LogicWorks has transformed brands across every major vertical — with measurable outcomes, not vanity metrics.</p>
          <div className="co-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Success Story{arrowIcon}</Link>
            <Link href="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Our Industries</Link>
          </div>
        </div>
      </section>

      <section className="co-stat-band">
        <div className="con">
          <div className="co-stat-grid">
            {[
              { val: '500+', lbl: 'Projects Delivered' },
              { val: '15+', lbl: 'Industries Served' },
              { val: '3.4x', lbl: 'Avg. ROI Multiple' },
              { val: '98%', lbl: 'Client Retention' },
            ].map((m) => (
              <div key={m.lbl} className="co-stat-item">
                <div className="co-stat-val">{m.val}</div>
                <div className="co-stat-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Spotlight</div>
            <h2 className="sec-title">FEATURED<br /><em>CASE STUDY</em></h2>
          </div>
          <article className="co-case-featured">
            <div className="co-case-featured-visual">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="co-case-featured-img"
                loading="eager"
                decoding="async"
              />
              <div className="co-case-featured-overlay" style={{ background: featured.gradient }} aria-hidden="true" />
              <span className="co-case-featured-badge">{featured.badge}</span>
              <div className="co-case-featured-caption">
                <div className="co-case-featured-client">{featured.client}</div>
                <div className="co-case-featured-industry">{featured.industry}</div>
              </div>
            </div>
            <div className="co-case-featured-body">
              <div className="co-case-label">The Story</div>
              <h3 className="co-case-featured-title">{featured.title}</h3>
              <div className="co-case-block">
                <div className="co-case-block-label">Challenge</div>
                <p className="co-case-block-text">{featured.challenge}</p>
              </div>
              <div className="co-case-block">
                <div className="co-case-block-label">Solution</div>
                <p className="co-case-block-text">{featured.solution}</p>
              </div>
              <div className="co-case-metrics">
                {featured.metrics.map((m) => (
                  <div key={m.lbl} className="co-case-metric">
                    <div className="co-case-metric-val">{m.val}</div>
                    <div className="co-case-metric-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="co-case-tags" style={{ marginTop: '24px' }}>
                {featured.tags.map((t) => <span key={t} className="co-case-tag">{t}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="co-sec">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Portfolio</div>
            <h2 className="sec-title">PROVEN ACROSS<br /><em>EVERY VERTICAL</em></h2>
            <p className="sec-desc">Six more transformations — each with documented challenge, solution, and measurable business outcomes.</p>
          </div>
          <div className="co-case-grid">
            {cases.map((c) => (
              <article key={c.client} className="co-case-card">
                <div className="co-case-card-head" style={{ background: c.gradient }}>
                  <span className="co-case-card-badge">{c.industry}</span>
                  <div className="co-case-card-client">{c.client}</div>
                  <div className="co-case-card-industry">{c.industry}</div>
                </div>
                <div className="co-case-card-body">
                  <h3 className="co-case-card-title">{c.title}</h3>
                  <p className="co-case-card-desc">{c.desc}</p>
                  <div className="co-case-card-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.lbl}>
                        <div className="co-case-card-metric-val">{m.val}</div>
                        <div className="co-case-card-metric-lbl">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className="co-case-tags">
                    {c.tags.map((t) => <span key={t} className="co-case-tag">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Aggregate Impact</div>
            <h2 className="sec-title">THE NUMBERS<br /><em>BEHIND THE WORK</em></h2>
            <p className="sec-desc">Cumulative results across our client portfolio — transparency is how we earn trust.</p>
          </div>
          <div className="co-results-grid">
            {aggregateResults.map((r) => (
              <div key={r.lbl} className="co-results-card">
                <div className="co-results-val">{r.val}</div>
                <div className="co-results-lbl">{r.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-testimonial reveal">
            <blockquote>&ldquo;LogicWorks did not just redesign our website — they rebuilt our entire acquisition engine. Trial sign-ups tripled in 90 days and our board finally stopped asking why marketing spend was not converting.&rdquo;</blockquote>
            <cite>
              Rachel Kim, CMO — CloudSync
              <span>B2B SaaS · Series B</span>
            </cite>
          </div>
        </div>
      </section>

      <CompanyCta
        eyebrow="Your Turn"
        title={<>READY TO BECOME OUR<br /><em>NEXT SUCCESS STORY</em>?</>}
        sub="Book a free strategy session and get a custom roadmap with projected outcomes based on clients in your industry."
        btnText="Start Your Success Story"
        note="FREE STRATEGY SESSION · INDUSTRY BENCHMARKS · NO COMMITMENT"
      />
    </div>
  );
}
