import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useCompanyPage, arrowIcon, CompanyCta } from './shared';

const timeline = [
  { year: '2015', title: 'Founded', desc: 'LogicWorks launches as a boutique web design studio in New York, built on the conviction that agencies set the bar too low' },
  { year: '2017', title: 'SEO practice', desc: 'Expanded into full service digital marketing with a dedicated SEO team and a performance driven content engine' },
  { year: '2019', title: 'AI integration', desc: 'Launched an AI automation division, among the first agencies to embed machine learning directly into client workflows' },
  { year: '2021', title: 'National expansion', desc: 'Grew to over 200 clients across 5 US cities, with Answer Engine Optimization service launched well ahead of the market' },
  { year: '2023', title: 'ML systems', desc: 'Opened a custom machine learning division, serving over 400 clients with enterprise AI consulting at scale' },
  { year: '2025', title: 'Elite status', desc: 'Reached 500 plus transformed businesses, 130 plus team members, and over 15 industries. The mission continues' },
];

const values = [
  { title: 'Obsession over obligation', desc: 'We are partners obsessed with your outcomes, not contractors completing tickets. When your metrics move, our team genuinely celebrates' },
  { title: 'Precision over volume', desc: 'Fewer clients held to a higher standard. Your account gets senior attention, never junior delegation buried inside a portfolio of hundreds' },
  { title: 'Transparency always', desc: 'Monthly reporting with zero spin, honest assessments of what is working and what needs to change. Trust is our most protected asset' },
  { title: 'Innovation without exception', desc: 'Every engagement benefits from the latest in AI, automation, and growth methodology. We never coast on yesterday\'s best practice' },
];

const differentiators = [
  { num: '01', title: 'Strategy plus creative plus engineering', desc: 'Management consultancy depth, top tier design craft, and elite engineering rigor, all under one roof, one team, one accountable partner' },
  { num: '02', title: 'AI native from day one', desc: 'Not bolted on AI tools. We embed automation, ML, and intelligent systems into every engagement, from SEO through product development' },
  { num: '03', title: 'Vertical expertise that converts', desc: 'Deep playbooks for healthcare, FinTech, SaaS, legal, e commerce, and hospitality, never generic templates recycled across industries' },
];

const capabilities = [
  { icon: 'WEB', count: '200+', title: 'Web and Product', desc: 'Over 200 portals, apps, e commerce platforms, and landing pages engineered for conversion and scale' },
  { icon: 'AI', count: '80+', title: 'AI and Automation', desc: 'Over 80 custom ML models, chatbots, CRM automation, and intelligent workflow systems' },
  { icon: 'SEO', count: '150+', title: 'SEO and Growth', desc: 'Over 150 technical SEO, AEO, local search, PPC, and content programs that drive measurable pipeline' },
  { icon: 'BRD', count: '120+', title: 'Brand and Design', desc: 'Over 120 brand strategy, identity systems, UI and UX, and design languages that command premium positioning' },
];

const leadership = [
  { initials: 'SW', name: 'Salman Waria', role: 'Founder and CEO', gradient: 'linear-gradient(135deg, #1a4bdb, #060d1f)' },
  { initials: 'AR', name: 'Alexandra Rivera', role: 'Chief Technology Officer', gradient: 'linear-gradient(135deg, #c8192a, #6b0000)' },
  { initials: 'MJ', name: 'Marcus Johnson', role: 'Chief Marketing Officer', gradient: 'linear-gradient(135deg, #c8922a, #7c5e10)' },
  { initials: 'KP', name: 'Priya Kapoor', role: 'Head of Design', gradient: 'linear-gradient(135deg, #0d1b3e, #1a4bdb)' },
];

const locations = [
  { city: 'New York', label: 'Headquarters', tz: 'Eastern Time' },
  { city: 'San Francisco', label: 'West Coast Hub', tz: 'Pacific Time' },
  { city: 'Austin', label: 'Tech Center', tz: 'Central Time' },
  { city: 'Chicago', label: 'Midwest Office', tz: 'Central Time' },
  { city: 'Miami', label: 'LATAM Gateway', tz: 'Eastern Time' },
];

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);
  useCompanyPage(pageRef);

  return (
    <div ref={pageRef} className="co-page">
      <Head>
        <title head-key="title">About LogicWorks LLC | AI, SEO & Digital Engineering Agency</title>
        <meta head-key="description" name="description" content="Learn about LogicWorks LLC, a full-service AI and digital engineering agency specializing in SEO, automation, web development, and growth strategy for 500+ businesses." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/about" />
      </Head>

      <section className="co-hero" aria-labelledby="about-title">
        <div className="co-hero-glow" aria-hidden="true" />
        <div className="con co-hero-inner">
          <div className="co-eyebrow">About LogicWorks</div>
          <h1 className="co-hero-title" id="about-title">We Engineer the Future<br /><span>of Your Business</span></h1>
          <p className="co-hero-sub">Founded on the conviction that most digital agencies set the bar far too low, LogicWorks operates at the intersection of creative excellence and engineering discipline, where business outcomes are simply non negotiable.</p>
          <div className="co-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Partner With Us{arrowIcon}</Link>
            <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="co-stat-band">
        <div className="con">
          <div className="co-stat-grid">
            {[
              { val: '10+', lbl: 'Years of Excellence' },
              { val: '500+', lbl: 'Clients Transformed' },
              { val: '1,200+', lbl: 'Projects Delivered' },
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

      <section className="co-sec">
        <div className="con">
          <div className="co-ab-story">
            <div className="co-ab-story-copy">
              <div className="sec-label">Our Mission</div>
              <h2 className="sec-title">NOT JUST AN AGENCY.<br /><em>A FORCE MULTIPLIER</em></h2>
              <p className="co-ab-story-text">LogicWorks exists to give ambitious businesses a genuinely unfair advantage. We combine the strategic depth of a management consultancy, the creative power of a top design studio, and the technical rigor of an elite engineering team, all under one roof, at one price.</p>
              <p className="co-ab-story-text">Since 2015, we have helped more than 500 businesses across over 15 industries grow faster, rank higher, convert better, and automate smarter. Every engagement, in turn, is built on transparency, accountability, and a genuine obsession with your success.</p>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 700 }}>
                Start a Conversation{arrowIcon}
              </Link>
            </div>
            <div className="co-ab-story-visual">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="LogicWorks team collaborating on a digital strategy project"
                className="co-ab-story-img"
                loading="eager"
                decoding="async"
              />
              <div className="co-ab-story-badge">
                <span className="co-ab-story-badge-val">130+</span>
                <span className="co-ab-story-badge-lbl">Elite Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Our Journey</div>
            <h2 className="sec-title">A DECADE OF<br /><em>RELENTLESS GROWTH</em></h2>
            <p className="sec-desc">From a boutique studio to one of America&apos;s most respected digital agencies, every milestone here has been driven by client outcomes, never vanity metrics</p>
          </div>
          <div className="co-ab-timeline">
            {timeline.map((item) => (
              <article key={item.year} className="co-ab-timeline-item">
                <div className="co-ab-timeline-year">{item.year}</div>
                <div className="co-ab-timeline-dot" aria-hidden="true" />
                <h3 className="co-ab-timeline-title">{item.title}</h3>
                <p className="co-ab-timeline-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Our Values</div>
            <h2 className="sec-title">THE PRINCIPLES THAT<br /><em>DRIVE EVERYTHING</em></h2>
            <p className="sec-desc">The non negotiables that shape how we work, how we deliver, and how we treat every single client partnership</p>
          </div>
          <div className="co-culture-grid">
            {values.map((v) => (
              <article key={v.title} className="co-culture-card">
                <div className="co-culture-line" aria-hidden="true" />
                <h3 className="co-culture-title">{v.title}</h3>
                <p className="co-culture-desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Why LogicWorks</div>
            <h2 className="sec-title">WHAT SETS US<br /><em>APART</em></h2>
            <p className="sec-desc">Three structural advantages most agencies simply cannot replicate, because they were never built to in the first place</p>
          </div>
          <div className="co-ab-diff">
            {differentiators.map((d) => (
              <article key={d.num} className="co-ab-diff-card">
                <div className="co-ab-diff-num">{d.num}</div>
                <h3 className="co-ab-diff-title">{d.title}</h3>
                <p className="co-ab-diff-desc">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">What We Do</div>
            <h2 className="sec-title">FULL-SPECTRUM<br /><em>DIGITAL EXCELLENCE</em></h2>
            <p className="sec-desc">Four integrated disciplines, one accountable team delivering end to end transformation</p>
          </div>
          <div className="co-dept-grid">
            {capabilities.map((c) => (
              <article key={c.title} className="co-dept-card">
                <div className="co-dept-icon">{c.icon}</div>
                <div className="co-dept-count">{c.count}</div>
                <h3 className="co-dept-title">{c.title}</h3>
                <p className="co-dept-desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Leadership</div>
            <h2 className="sec-title">THE MINDS BEHIND<br /><em>YOUR DOMINANCE</em></h2>
            <p className="sec-desc">Senior strategists, engineers, and creatives who have collectively managed hundreds of millions in client investment.</p>
          </div>
          <div className="co-leader-grid">
            {leadership.map((m) => (
              <article key={m.name} className="co-leader-card">
                <div className="co-leader-visual" style={{ background: m.gradient }}>
                  <div className="co-leader-avatar">{m.initials}</div>
                </div>
                <div className="co-leader-body">
                  <h3 className="co-leader-name">{m.name}</h3>
                  <div className="co-leader-role">{m.role}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="co-ab-team-link">
            <Link href="/our-team" className="co-ab-team-btn">
              Meet the Full Team{arrowIcon}
            </Link>
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Global Presence</div>
            <h2 className="sec-title">WHERE WE<br /><em>OPERATE</em></h2>
            <p className="sec-desc">Five US hubs plus a remote first team spanning more than 15 countries, delivering around the clock for clients worldwide</p>
          </div>
          <div className="co-ab-locations">
            {locations.map((loc) => (
              <article key={loc.city} className="co-ab-location">
                <div className="co-ab-location-city">{loc.city}</div>
                <div className="co-ab-location-label">{loc.label}</div>
                <div className="co-ab-location-tz">{loc.tz}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CompanyCta
        eyebrow="Join 500 Plus Businesses"
        title={<>READY TO WORK WITH<br /><em>THE BEST IN THE BUSINESS</em>?</>}
        sub="Book a free strategy session with our senior team. No pitch, no pressure, just honest insight into what it actually takes to dominate your market."
        btnText="Book Free Strategy Call"
        note="FREE STRATEGY SESSION · SENIOR TEAM · NO COMMITMENT"
      />
    </div>
  );
}
