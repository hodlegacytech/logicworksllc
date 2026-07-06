import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '38%', lbl: 'Direct Booking Increase' },
  { val: '4.8★', lbl: 'Average Review Score' },
  { val: '25%', lbl: 'OTA Commission Saved' },
  { val: '2.6x', lbl: 'Local Search Visibility' },
];

const solutions = [
  { num: '01', title: 'Direct booking engine', desc: 'Commission free reservation systems integrated with your PMS, mobile optimized with upsell and package options' },
  { num: '02', title: 'Hotel and restaurant websites', desc: 'Visual first designs with virtual tours, menu showcases, amenity highlights, and instant booking CTAs' },
  { num: '03', title: 'Google Hotels and local SEO', desc: 'Google Business Profile optimization, hotel schema markup, and local search domination for destination queries' },
  { num: '04', title: 'Reputation management', desc: 'Automated review requests post stay, multi platform monitoring, and response workflows that protect your rating' },
  { num: '05', title: 'Seasonal and event marketing', desc: 'Campaign strategy for peak seasons, local events, and package promotions that maximize occupancy and ADR' },
  { num: '06', title: 'Social and visual content', desc: 'Instagram worthy content strategy, user generated content campaigns, and influencer partnerships for hospitality brands' },
];

const useCases = [
  { num: '01', title: 'Hotels and resorts', desc: 'Direct booking optimization, OTA rate parity, and destination marketing for properties of every size' },
  { num: '02', title: 'Restaurants and dining', desc: 'Reservation systems, menu SEO, Google Maps domination, and review management' },
  { num: '03', title: 'Travel and tour operators', desc: 'Booking platforms, itinerary marketing, and international SEO for tour companies' },
  { num: '04', title: 'Vacation rentals', desc: 'Direct booking sites, channel manager integration, and brand building beyond Airbnb' },
];

const timeline = [
  { num: '01', title: 'Revenue audit', desc: 'OTA commission analysis, a direct booking baseline, and competitive rate benchmarking' },
  { num: '02', title: 'Strategy and booking setup', desc: 'Direct booking engine selection, Google Hotels integration, and rate parity planning' },
  { num: '03', title: 'Design and build', desc: 'Website redesign, booking flow optimization, and reputation system deployment' },
  { num: '04', title: 'Launch and promote', desc: 'SEO go live, Google Hotels activation, and seasonal campaign launch' },
  { num: '05', title: 'Fill and optimize', desc: 'Ongoing review management, yield optimization, and direct booking incentive programs' },
];

const stack = ['Cloudbeds', 'Mews', 'Opera PMS', 'Booking.com API', 'Google Hotels', 'TripAdvisor', 'TrustYou', 'Revinate', 'Mailchimp', 'Instagram API', 'Stripe', 'Channel Manager'];

const faqs = [
  { q: 'What digital tools matter most for hotels and hospitality businesses?', a: 'A fast, mobile-optimized booking system, strong visual presentation, and local SEO tend to drive the most direct bookings and reduce dependency on third-party platforms.' },
  { q: 'How important is direct booking functionality compared to relying on third-party sites?', a: 'Very important, since direct bookings avoid the commission fees charged by third-party platforms, directly improving profit margins on each reservation.' },
  { q: 'Can a hospitality website integrate with existing property management systems?', a: 'Yes, most modern hospitality platforms are built to integrate with property management and reservation systems already in use, keeping availability synced in real time.' },
  { q: 'What role does visual content play in hospitality marketing?', a: 'A significant one. High-quality photography and video are often the deciding factor for hospitality bookings, since customers are essentially purchasing an experience sight unseen.' },
  { q: 'How do hospitality businesses typically generate repeat bookings?', a: 'Through email marketing, loyalty programs, and retargeting campaigns aimed at past guests, encouraging return visits during relevant seasons or promotions.' },
];

export default function Hospitality() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#c8922a' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Hospitality Digital Marketing | Direct Bookings & Local SEO | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Increase direct bookings with LogicWorks LLC hospitality solutions. Reduce OTA commissions with booking engines, local SEO, reputation management, and hotel marketing systems." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/industries/hospitality" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="hospitality-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">HOS</div>
            <span className="ind-inner-label">Hospitality and Tourism</span>
          </div>
          <h1 className="ind-inner-title" id="hospitality-title">Hospitality and<br /><span>Tourism</span></h1>
          <p className="ind-inner-sub">Direct booking engines, reputation management, and local SEO for hotels, restaurants, and travel brands, built to reduce OTA commissions and fill rooms straight from your own channels.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Hospitality Audit{arrowIcon}</Link>
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
              <h2 className="sec-title">OTAS TAKE 15 TO 25 PERCENT<br /><em>OF YOUR REVENUE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Booking.com, Expedia, and Airbnb all capture guests, but they charge crushing commissions in return. Hotels and restaurants without strong direct booking channels, real reputation management, and solid local SEO end up depending on OTAs for visibility, sacrificing margin on every single reservation as a result.</p>
              <div className="ind-check-list">
                {['Direct booking engine integration and optimization', 'Google Hotels and local search domination', 'Review generation and reputation management', 'Seasonal campaign strategy and yield optimization'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['Direct booking', 'Google Hotels', 'reputation', 'local SEO', 'revenue management'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '🏨', title: '38% more direct bookings', desc: 'Booking engines and SEO drive guests to your site instead of OTAs' },
                { icon: '⭐', title: '4.8 star review average', desc: 'Systematic review generation and response management at scale' },
                { icon: '💰', title: '25% commission saved', desc: 'Every direct booking is revenue OTAs simply cannot touch' },
                { icon: '📍', title: '2.6x local visibility', desc: 'Dominate Google Maps, Hotels, and local travel searches consistently' },
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
            <h2 className="sec-title">HOSPITALITY<br /><em>GROWTH ENGINE</em></h2>
            <p className="sec-desc">Six capabilities maximize direct revenue and guest satisfaction together.</p>
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
            <div className="sec-label">Sectors</div>
            <h2 className="sec-title">HOSPITALITY<br /><em>VERTICALS</em></h2>
            <p className="sec-desc">Digital solutions spanning hospitality and tourism alike.</p>
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
            <h2 className="sec-title">BOOK DIRECT IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From OTA dependency audit to a real direct revenue engine, structured hospitality delivery throughout.</p>
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
            <h2 className="sec-title">HOSPITALITY STACK<br /><em>CONNECTED</em></h2>
            <p className="sec-desc">PMS, booking engines, and reputation platforms.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="hos-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Hospitality" title={<>STOP PAYING OTA<br /><em>COMMISSIONS</em>.</>} sub="Book a free hospitality digital audit and see exactly how direct booking strategy increases your margins." btnText="Get a Hospitality Audit" note="" />
    </div>
  );
}
