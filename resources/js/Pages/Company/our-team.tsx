import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useCompanyPage, arrowIcon, CompanyCta } from './shared';

const leadership = [
  { initials: 'SW', name: 'Salman Waria', role: 'Founder & CEO', bio: 'Visionary strategist and technologist. Built LogicWorks from a boutique consultancy into a premier digital agency across a decade of relentless execution.', gradient: 'linear-gradient(135deg, #1a4bdb, #060d1f)' },
  { initials: 'AR', name: 'Alexandra Rivera', role: 'Chief Technology Officer', bio: 'Former Google and Microsoft engineer. Architects AI systems and engineering standards. Holds three patents in machine learning applications.', gradient: 'linear-gradient(135deg, #c8192a, #6b0000)' },
  { initials: 'MJ', name: 'Marcus Johnson', role: 'Chief Marketing Officer', bio: 'Fifteen years in performance marketing. Managed over $200M in ad spend across Google, Meta, and programmatic with industry-beating ROAS.', gradient: 'linear-gradient(135deg, #c8922a, #7c5e10)' },
  { initials: 'KP', name: 'Priya Kapoor', role: 'Head of Design', bio: 'Award-winning designer with a background in cognitive psychology. Every interface is built on behavioral science, not aesthetic preference alone.', gradient: 'linear-gradient(135deg, #0d1b3e, #1a4bdb)' },
];

const extendedTeam = [
  { initials: 'DC', name: 'David Chen', role: 'VP Engineering', bio: 'Full-stack architect leading 40+ engineers. Previously scaled platforms serving 10M+ users at two venture-backed startups.', gradient: 'linear-gradient(135deg, #0891b2, #0d1b3e)' },
  { initials: 'EV', name: 'Elena Volkov', role: 'Head of AI & ML', bio: 'PhD in machine learning. Leads custom model development, NLP pipelines, and AI strategy consulting for enterprise clients.', gradient: 'linear-gradient(135deg, #7c3aed, #1a4bdb)' },
  { initials: 'JO', name: 'James Okonkwo', role: 'Director of SEO', bio: 'Twelve years in organic search. Built ranking engines that generated $50M+ in attributed revenue for clients across regulated industries.', gradient: 'linear-gradient(135deg, #166534, #0d1b3e)' },
  { initials: 'SM', name: 'Sarah Mitchell', role: 'Head of Client Success', bio: '98% client retention track record. Ensures every engagement delivers measurable outcomes with transparent reporting and proactive strategy.', gradient: 'linear-gradient(135deg, #c8192a, #0d1b3e)' },
  { initials: 'RT', name: 'Ryan Torres', role: 'Lead UX Strategist', bio: 'Conversion-focused UX researcher. Specializes in funnel optimization and accessibility compliance for healthcare and finance verticals.', gradient: 'linear-gradient(135deg, #2563eb, #060d1f)' },
  { initials: 'NP', name: 'Nina Patel', role: 'Director of Paid Media', bio: 'Google Premier Partner and Meta Blueprint certified. Manages $30M+ annual ad spend with average 3.4x ROAS across client portfolios.', gradient: 'linear-gradient(135deg, #c8922a, #c8192a)' },
];

const departments = [
  { icon: 'ENG', count: '45+', title: 'Engineering & AI', desc: 'Full-stack developers, ML engineers, and DevOps specialists building scalable digital products.' },
  { icon: 'DSN', count: '28+', title: 'Design & Brand', desc: 'Senior designers, brand strategists, and UX researchers crafting experiences that convert.' },
  { icon: 'MKT', count: '35+', title: 'Marketing & Growth', desc: 'SEO specialists, paid media experts, and content strategists driving measurable pipeline.' },
  { icon: 'CS', count: '22+', title: 'Strategy & Success', desc: 'Account directors, project managers, and analysts ensuring flawless delivery and ROI.' },
];

const culture = [
  { title: 'Obsession Over Obligation', desc: 'We are partners obsessed with your outcomes — not contractors completing tickets. When your metrics move, our team celebrates.' },
  { title: 'Precision Over Volume', desc: 'Fewer clients at a higher standard. Your account gets senior attention, not junior delegation buried in a portfolio of hundreds.' },
  { title: 'Transparency Always', desc: 'Monthly reporting with zero spin. Honest assessments of what is working and what needs to change. Trust is our most protected asset.' },
  { title: 'Innovation Without Exception', desc: 'Every engagement benefits from the latest in AI, automation, and growth methodology. We never coast on yesterday\'s best practice.' },
];

export default function OurTeam() {
  const pageRef = useRef<HTMLDivElement>(null);
  useCompanyPage(pageRef);

  return (
    <div ref={pageRef} className="co-page">
      <Head>
        <title head-key="title">Our Team | LogicWorks — Elite Designers, Engineers & Strategists</title>
        <meta head-key="description" name="description" content="Meet the LogicWorks team — 130+ elite designers, engineers, AI architects, and growth strategists united by one mission: your market dominance." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/our-team" />
      </Head>

      <section className="co-hero" aria-labelledby="team-title">
        <div className="co-hero-glow" aria-hidden="true" />
        <div className="con co-hero-inner">
          <div className="co-eyebrow">Company</div>
          <h1 className="co-hero-title" id="team-title">The Minds Behind<br /><span>Your Dominance</span></h1>
          <p className="co-hero-sub">A collective of elite designers, engineers, AI architects, and growth strategists united by one mission — giving ambitious businesses an unfair digital advantage.</p>
          <div className="co-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Work With Our Team{arrowIcon}</Link>
            <Link href="/careers" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Join Us</Link>
          </div>
        </div>
      </section>

      <section className="co-stat-band">
        <div className="con">
          <div className="co-stat-grid">
            {[
              { val: '130+', lbl: 'Team Members' },
              { val: '12yr', lbl: 'Avg. Experience' },
              { val: '15+', lbl: 'Countries Represented' },
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
          <div className="co-sec-hd reveal">
            <div className="sec-label">Leadership</div>
            <h2 className="sec-title">EXECUTIVE<br /><em>LEADERSHIP</em></h2>
            <p className="sec-desc">The strategists and builders who set the standard for every engagement — with decades of combined experience across technology, marketing, and design.</p>
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
                  <p className="co-leader-bio">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Senior Team</div>
            <h2 className="sec-title">DEPARTMENT<br /><em>LEADERS</em></h2>
            <p className="sec-desc">Directors and leads who bring deep vertical expertise to every client account — hands-on, accessible, and accountable.</p>
          </div>
          <div className="co-leader-grid">
            {extendedTeam.map((m) => (
              <article key={m.name} className="co-leader-card">
                <div className="co-leader-visual" style={{ background: m.gradient }}>
                  <div className="co-leader-avatar">{m.initials}</div>
                </div>
                <div className="co-leader-body">
                  <h3 className="co-leader-name">{m.name}</h3>
                  <div className="co-leader-role">{m.role}</div>
                  <p className="co-leader-bio">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Departments</div>
            <h2 className="sec-title">130+ SPECIALISTS<br /><em>ONE MISSION</em></h2>
            <p className="sec-desc">Cross-functional teams organized by discipline — collaborating seamlessly on every client engagement.</p>
          </div>
          <div className="co-dept-grid">
            {departments.map((d) => (
              <article key={d.title} className="co-dept-card">
                <div className="co-dept-icon">{d.icon}</div>
                <div className="co-dept-count">{d.count}</div>
                <h3 className="co-dept-title">{d.title}</h3>
                <p className="co-dept-desc">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Culture</div>
            <h2 className="sec-title">WHAT DRIVES<br /><em>OUR TEAM</em></h2>
            <p className="sec-desc">The principles that shape how we work, how we deliver, and how we treat every client partnership.</p>
          </div>
          <div className="co-culture-grid">
            {culture.map((c) => (
              <article key={c.title} className="co-culture-card">
                <div className="co-culture-line" aria-hidden="true" />
                <h3 className="co-culture-title">{c.title}</h3>
                <p className="co-culture-desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-join-band">
        <div className="con">
          <h2 className="co-join-title">WANT TO JOIN THE TEAM?</h2>
          <p className="co-join-sub">We are always looking for elite builders, strategists, and visionaries who share our obsession with client outcomes.</p>
          <div className="co-join-actions">
            <Link href="/careers" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>View Open Roles{arrowIcon}</Link>
            <Link href="/about" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>About LogicWorks</Link>
          </div>
        </div>
      </section>

      <CompanyCta
        eyebrow="Work With the Best"
        title={<>READY TO PARTNER WITH<br /><em>SENIOR TALENT</em>?</>}
        sub="Book a free strategy session with our leadership team. No pitch, no pressure — just honest insight into what it takes to dominate your market."
        btnText="Book Free Strategy Call"
        note="FREE STRATEGY SESSION · SENIOR TEAM · NO COMMITMENT"
      />
    </div>
  );
}
