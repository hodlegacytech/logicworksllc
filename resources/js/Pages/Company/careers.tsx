import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useCompanyPage, arrowIcon, CompanyCta } from './shared';

const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Strategy'] as const;
type Department = (typeof departments)[number];

const roles = [
  {
    id: 'senior-full-stack-engineer',
    title: 'Senior Full-Stack Engineer',
    dept: 'Engineering' as Department,
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Build scalable web applications and client platforms using React, Node.js, and cloud-native architecture. Lead technical decisions on enterprise engagements.',
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    dept: 'Engineering' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Design and deploy production ML pipelines, NLP systems, and AI integrations for enterprise clients across healthcare, finance, and SaaS verticals.',
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    dept: 'Engineering' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Mid–Senior',
    desc: 'Manage CI/CD pipelines, cloud infrastructure, and security compliance for client deployments on AWS, GCP, and Azure.',
  },
  {
    id: 'senior-ux-designer',
    title: 'Senior UX Designer',
    dept: 'Design' as Department,
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Lead conversion-focused UX research and interface design for high-stakes client projects in healthcare, FinTech, and e-commerce.',
  },
  {
    id: 'brand-designer',
    title: 'Brand Designer',
    dept: 'Design' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Mid–Senior',
    desc: 'Craft premium brand identities, design systems, and visual languages for Series A–C startups and established enterprises.',
  },
  {
    id: 'seo-strategist',
    title: 'SEO Strategist',
    dept: 'Marketing' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Own organic growth strategy for enterprise accounts — technical SEO, content architecture, AEO, and local search at scale.',
  },
  {
    id: 'paid-media-specialist',
    title: 'Paid Media Specialist',
    dept: 'Marketing' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Mid–Senior',
    desc: 'Manage Google Ads, Meta, and programmatic campaigns with $500K+ monthly budgets. Optimize for ROAS, not vanity metrics.',
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist',
    dept: 'Marketing' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Mid–Senior',
    desc: 'Develop bottom-funnel content programs, editorial calendars, and thought leadership that drives pipeline for B2B clients.',
  },
  {
    id: 'account-director',
    title: 'Account Director',
    dept: 'Strategy' as Department,
    location: 'Hybrid',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Own client relationships end-to-end. Translate business goals into multi-disciplinary engagement strategies with measurable ROI.',
  },
  {
    id: 'project-manager',
    title: 'Senior Project Manager',
    dept: 'Strategy' as Department,
    location: 'Remote',
    type: 'Full-Time',
    level: 'Senior',
    desc: 'Orchestrate cross-functional delivery across engineering, design, and marketing teams. Ensure on-time, on-budget, on-spec execution.',
  },
];

const perks = [
  { icon: 'REM', title: 'Remote first', desc: 'Work from anywhere. Core hours overlap for collaboration, with no mandatory office presence required' },
  { icon: 'PAY', title: 'Top tier compensation', desc: 'Competitive salary benchmarked to top markets, plus performance bonuses and equity for senior roles' },
  { icon: 'HLT', title: 'Full health coverage', desc: 'Medical, dental, and vision insurance for you and your dependents, with no waiting period at all' },
  { icon: 'PTO', title: 'Unlimited PTO', desc: 'Take the time you need. We measure output, not hours logged, with a minimum of 15 days encouraged' },
  { icon: 'LRN', title: '3K dollar learning budget', desc: 'An annual allowance for courses, certifications, books, and conferences in your discipline' },
  { icon: 'HW', title: 'Latest hardware', desc: 'A MacBook Pro, external monitors, and any tools you need to do your best work, shipped to your door' },
  { icon: 'CONF', title: 'Conference allowance', desc: 'Attend industry events like MozCon, React Summit, or NeurIPS, with travel and tickets fully covered' },
  { icon: 'FAM', title: 'Parental leave', desc: '16 weeks paid parental leave for all new parents, plus flexible return to work scheduling' },
];

const values = [
  { title: 'High impact work only', desc: 'Every project moves the needle for real businesses, including Fortune 500s, Series B startups, and category leaders. No busywork, no filler accounts' },
  { title: 'Senior talent, always', desc: 'You work alongside directors and principals, never junior teams still learning on a client\'s dime. We hire experts and treat them like experts' },
  { title: 'Cutting edge stack', desc: 'AI, automation, modern frameworks, and the latest growth methodology. You will never be stuck maintaining legacy code from 2015' },
  { title: 'Clear growth paths', desc: 'Transparent promotion criteria, mentorship from leadership, and real ownership opportunities as the agency keeps scaling globally' },
];

const process = [
  { step: '01', title: 'Apply', desc: 'Submit your resume and portfolio or work samples. We review every application within 5 business days' },
  { step: '02', title: 'Intro call', desc: 'A 30 minute conversation about your experience, career goals, and what you are looking for in your next role' },
  { step: '03', title: 'Skills assessment', desc: 'A role specific evaluation, whether a technical challenge, design critique, or strategy case study depending on the position' },
  { step: '04', title: 'Team interview', desc: 'Meet the people you would actually work with daily. Culture fit matters just as much as skill fit at LogicWorks' },
  { step: '05', title: 'Offer', desc: 'A competitive offer package delivered within 48 hours of your final interview. We move fast for candidates we genuinely want' },
];

export default function Careers() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeDept, setActiveDept] = useState<Department>('All');
  useCompanyPage(pageRef);

  const filtered = activeDept === 'All'
    ? roles
    : roles.filter((r) => r.dept === activeDept);

  return (
    <div ref={pageRef} className="co-page">
      <Head>
        <title head-key="title">Careers at LogicWorks — Join Elite Builders, Strategists & Visionaries</title>
        <meta head-key="description" name="description" content="Join the agency reshaping digital. We hire elite builders, strategists, and visionaries who want genuinely high impact work, not another ticket queue to grind through." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/careers" />
      </Head>

      <section className="co-hero" aria-labelledby="careers-title">
        <div className="co-hero-glow" aria-hidden="true" />
        <div className="con co-hero-inner">
          <div className="co-eyebrow">Company</div>
          <h1 className="co-hero-title" id="careers-title">Build What&apos;s<br /><span>Next With Us</span></h1>
          <p className="co-hero-sub">Join the agency reshaping digital. We hire elite builders, strategists, and visionaries who want genuinely high impact work, not another ticket queue to grind through.</p>
          <div className="co-hero-actions">
            <a href="#open-roles" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>View Open Roles{arrowIcon}</a>
            <Link href="/our-team" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Meet the Team</Link>
          </div>
        </div>
      </section>

      <section className="co-stat-band">
        <div className="con">
          <div className="co-stat-grid">
            {[
              { val: `${roles.length}`, lbl: 'Open Roles' },
              { val: '130+', lbl: 'Team Members' },
              { val: '15+', lbl: 'Countries' },
              { val: '4.8★', lbl: 'Glassdoor Rating' },
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
            <div className="sec-label">Why Join</div>
            <h2 className="sec-title">NOT YOUR AVERAGE<br /><em>AGENCY JOB</em></h2>
            <p className="sec-desc">We built LogicWorks for people who have already outgrown their last role and want work that genuinely matches their ambition</p>
          </div>
          <div className="co-career-values">
            {values.map((v) => (
              <article key={v.title} className="co-career-value">
                <div className="co-career-value-line" aria-hidden="true" />
                <h3 className="co-career-value-title">{v.title}</h3>
                <p className="co-career-value-desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark" id="open-roles">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Open Roles</div>
            <h2 className="sec-title">CURRENT<br /><em>OPENINGS</em></h2>
            <p className="sec-desc">Senior roles across engineering, design, marketing, and strategy. Remote-first with optional hybrid for select positions.</p>
          </div>
          <div className="co-career-filters" role="tablist" aria-label="Filter roles by department">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                role="tab"
                aria-selected={activeDept === dept}
                className={`co-career-filter-btn${activeDept === dept ? ' co-career-filter-btn--active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="co-career-roles">
            {filtered.map((role) => (
              <article key={role.id} className="co-career-role">
                <div className="co-career-role-main">
                  <div className="co-career-role-tags">
                    <span className="co-career-role-dept">{role.dept}</span>
                    <span className="co-career-role-level">{role.level}</span>
                  </div>
                  <h3 className="co-career-role-title">{role.title}</h3>
                  <p className="co-career-role-desc">{role.desc}</p>
                  <div className="co-career-role-meta">
                    <span>{role.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <div className="co-career-role-action">
                  <Link href="/contact" className="co-career-apply-btn">
                    Apply Now{arrowIcon}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Benefits</div>
            <h2 className="sec-title">PERKS THAT<br /><em>ACTUALLY MATTER</em></h2>
            <p className="sec-desc">We invest in our people the same way we invest in client outcomes, generously, intentionally, and without fine print anywhere</p>
          </div>
          <div className="co-career-perks">
            {perks.map((p) => (
              <article key={p.title} className="co-career-perk">
                {/* <div className="co-career-perk-icon">{p.icon}</div> */}
                <h3 className="co-career-perk-title">{p.title}</h3>
                <p className="co-career-perk-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Process</div>
            <h2 className="sec-title">HOW WE<br /><em>HIRE</em></h2>
            <p className="sec-desc">Transparent, respectful, and fast. Most candidates complete the entire process in under two weeks</p>
          </div>
          <div className="co-career-process">
            {process.map((p) => (
              <article key={p.step} className="co-career-step">
                <div className="co-career-step-num">{p.step}</div>
                <h3 className="co-career-step-title">{p.title}</h3>
                <p className="co-career-step-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec">
        <div className="con">
          <div className="co-testimonial reveal">
            <blockquote>&ldquo;I joined LogicWorks after five years at a Big Four consultancy. Within six months I was leading a $2M engagement with full autonomy. This is what senior work should feel like.&rdquo;</blockquote>
            <cite>
              David Chen, VP Engineering
              <span>LogicWorks · 3 Years</span>
            </cite>
          </div>
        </div>
      </section>

      <section className="co-career-apply-band">
        <div className="con">
          <div className="co-career-apply-inner">
            <div>
              <h2 className="co-career-apply-title">DON&apos;T SEE YOUR ROLE?</h2>
              <p className="co-career-apply-sub">We are always looking for exceptional talent. Send us your resume and tell us how you would make LogicWorks better.</p>
            </div>
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
              Send General Application{arrowIcon}
            </Link>
          </div>
        </div>
      </section>

      <CompanyCta
        eyebrow="Your Next Chapter"
        title={<>READY TO DO THE BEST<br /><em>WORK OF YOUR CAREER</em>?</>}
        sub="Apply today or book a confidential conversation with our talent team to learn more about life at LogicWorks."
        btnText="Apply Now"
        note="REMOTE-FIRST · SENIOR ROLES · FAST HIRING PROCESS"
      />
    </div>
  );
}
