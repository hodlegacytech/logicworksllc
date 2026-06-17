import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const capabilities = [
  { badge: 'React', title: 'React & Next.js Frontends', desc: 'Server components, streaming SSR, and ISR for blazing-fast UX. Component-driven architecture with design systems that scale across products and teams.' },
  { badge: 'SaaS', title: 'Multi-Tenant SaaS Architecture', desc: 'Tenant isolation, subscription billing, usage metering, and role-based access — built to onboard thousands of customers without re-architecting.' },
  { badge: 'API', title: 'Robust API Layer', desc: 'RESTful and GraphQL APIs with versioning, rate limiting, and auto-generated documentation. Clean contracts between frontend, mobile, and third-party integrations.' },
  { badge: 'Real-time', title: 'Real-Time Features', desc: 'WebSockets, server-sent events, and live dashboards for chat, notifications, collaborative editing, and operational monitoring.' },
  { badge: 'Cloud', title: 'Cloud-Native Infrastructure', desc: 'Auto-scaling on AWS, GCP, or Azure with containerized deployments, CDN edge caching, and 99.9%+ uptime SLAs baked into the architecture.' },
  { badge: 'DevOps', title: 'CI/CD & DevOps Pipeline', desc: 'Automated testing, staging environments, and zero-downtime deployments. GitHub Actions, Docker, and infrastructure-as-code from day one.' },
];

const appTypes = [
  { icon: '01', title: 'SaaS Products', desc: 'Subscription-based platforms with onboarding flows, billing integration, admin dashboards, and analytics — built to acquire and retain users at scale.' },
  { icon: '02', title: 'Internal Business Tools', desc: 'Custom CRMs, inventory systems, project trackers, and workflow tools that replace spreadsheets and eliminate operational friction.' },
  { icon: '03', title: 'Data Dashboards', desc: 'Real-time KPI dashboards, reporting portals, and BI interfaces that turn raw data into actionable intelligence for decision-makers.' },
  { icon: '04', title: 'Marketplaces & Platforms', desc: 'Two-sided marketplaces with vendor onboarding, payments, reviews, and search — engineered for liquidity and trust at scale.' },
];

const processSteps = [
  { num: '01', title: 'Product Discovery', desc: 'User stories, competitive analysis, technical feasibility, and MVP scope definition aligned to business goals.' },
  { num: '02', title: 'UX & Architecture', desc: 'Wireframes, system design, database schema, API contracts, and scalability planning before a single line of code.' },
  { num: '03', title: 'Agile Development', desc: 'Two-week sprints with demoable increments, automated testing, and continuous client feedback loops.' },
  { num: '04', title: 'QA & Hardening', desc: 'Load testing, security audits, cross-browser QA, and performance optimization to production standards.' },
  { num: '05', title: 'Launch & Iterate', desc: 'Production deployment, monitoring setup, user analytics, and roadmap-driven feature releases post-launch.' },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB',
  'Redis', 'GraphQL', 'AWS', 'Vercel', 'Docker', 'Tailwind CSS',
];

const faqs = [
  { q: 'How long does it take to build a custom web application?', a: 'An MVP typically ships in 8–12 weeks. Full-featured SaaS platforms range from 4–7 months depending on complexity, integrations, and user roles. We deliver a detailed timeline after the discovery phase.' },
  { q: 'Do you build SaaS products from scratch?', a: 'Yes. We architect and build multi-tenant SaaS platforms including authentication, subscription billing (Stripe/Paddle), admin panels, and analytics — everything needed to launch and scale a software product.' },
  { q: 'Can you take over an existing codebase?', a: 'Absolutely. We perform a technical audit, identify debt and bottlenecks, and either refactor incrementally or rebuild critical modules while keeping the product live and stable.' },
  { q: 'What tech stack do you recommend?', a: 'We default to React/Next.js + Node.js + PostgreSQL for most projects — proven, hireable, and scalable. We adapt based on your requirements, team, and existing infrastructure.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. We offer retainer packages for bug fixes, feature development, performance monitoring, and security updates. Most product teams retain us as their long-term engineering partner.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function WebApps() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-hero-animate > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.svc-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-capabilities', start: 'top 80%' } }
      );
      gsap.fromTo('.svc-process-step',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-process-grid', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="svc-page">
      <Head>
        <title head-key="title">Web Applications | LogicWorks — Custom SaaS & App Development</title>
        <meta head-key="description" name="description" content="LogicWorks builds scalable web applications and SaaS platforms — React, Next.js, Node.js, cloud-native architecture, and full product engineering from MVP to enterprise scale." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/web-apps" />
        <meta head-key="keywords" name="keywords" content="Web Applications" />
      </Head>

      {/* Hero */}
      <section
        className="inner-hero"
        aria-labelledby="webapps-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #0e1e50 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Web Services</span>
            <h1 className="inner-hero-title" id="webapps-title">WEB<br />APPLICATIONS</h1>
            <p className="inner-hero-sub">
              Scalable, high-performance SaaS platforms and custom web apps engineered for growth —
              from MVP to millions of users, built on modern architecture that never needs a rewrite.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free App Audit
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Custom Web Apps</div>
              <h2 className="sec-title">SOFTWARE THAT<br /><em>SCALES WITH YOU</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Off-the-shelf tools force your business into someone else&apos;s workflow. Custom web applications
                are built around how you actually operate — eliminating workarounds, reducing manual overhead,
                and creating competitive advantages no competitor can copy.
              </p>
              <p className="sec-desc">
                LogicWorks engineers full-stack web applications from the ground up — product strategy,
                UX design, backend architecture, and cloud deployment — so you launch faster and scale
                without hitting technical ceilings.
              </p>
              <div className="svc-check-list">
                {[
                  'MVP to market in as little as 8 weeks',
                  'Multi-tenant SaaS architecture out of the box',
                  '99.9% uptime with auto-scaling cloud infrastructure',
                  'Automated CI/CD pipelines for rapid, safe releases',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['SaaS', 'Internal Tools', 'Dashboards', 'Marketplace', 'PWA'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Application Performance Metrics</div>
              {[
                { label: 'On-Time Delivery Rate', pct: 99, color: 'var(--blue)' },
                { label: 'Post-Launch Bug Rate', pct: 97, color: 'var(--gold)' },
                { label: 'Client Retention', pct: 98, color: 'var(--red)' },
                { label: 'Core Web Vitals Pass', pct: 100, color: 'var(--navy-mid)' },
              ].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row">
                    <span className="svc-bar-label">{bar.label}</span>
                    <span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span>
                  </div>
                  <div className="svc-bar-track">
                    <div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                  </div>
                </div>
              ))}
              <div className="svc-highlight-box">
                <div className="svc-highlight-val">200+</div>
                <div className="svc-highlight-lbl">Web Apps Shipped to Production</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '8wk', lbl: 'Avg. MVP Timeline' },
              { val: '3x', lbl: 'Faster Than In-House' },
              { val: '10M+', lbl: 'API Requests / Day' },
              { val: '48hr', lbl: 'Audit Turnaround' },
            ].map((s) => (
              <div key={s.lbl} className="svc-stat">
                <div className="svc-stat-val">{s.val}</div>
                <div className="svc-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Core Capabilities</div>
            <h2 className="sec-title">ENGINEERED FOR<br /><em>PERFORMANCE & SCALE</em></h2>
            <p className="sec-desc">Full-stack expertise from database design to pixel-perfect UI — every layer optimized for speed, security, and maintainability.</p>
          </div>
          <div className="svc-grid-3 svc-capabilities">
            {capabilities.map((cap) => (
              <article key={cap.title} className="svc-card svc-card--white">
                <span className="svc-card-badge">{cap.badge}</span>
                <h3 className="svc-card-title">{cap.title}</h3>
                <p className="svc-card-desc">{cap.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Application Types</div>
            <h2 className="sec-title">APPS FOR<br /><em>EVERY BUSINESS MODEL</em></h2>
            <p className="sec-desc">Whether you&apos;re launching a SaaS product or replacing legacy internal tools — we build the right application for your use case.</p>
          </div>
          <div className="svc-grid-4">
            {appTypes.map((type) => (
              <article key={type.title} className="svc-card reveal">
                <div className="svc-use-icon">{type.icon}</div>
                <h3 className="svc-card-title">{type.title}</h3>
                <p className="svc-card-desc">{type.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM IDEA TO<br /><em>PRODUCTION IN 5 PHASES</em></h2>
            <p className="sec-desc">Agile product development refined across 200+ web application launches.</p>
          </div>
          <div className="svc-process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="svc-process-step">
                <div className="svc-process-num">{step.num}</div>
                <h3 className="svc-process-title">{step.title}</h3>
                <p className="svc-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Technology Stack</div>
            <h2 className="sec-title">MODERN STACK.<br /><em>PROVEN AT SCALE</em></h2>
            <p className="sec-desc">Technologies chosen for developer velocity, ecosystem maturity, and long-term product maintainability.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec svc-sec" aria-labelledby="webapps-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">FAQ</div>
            <h2 className="sec-title" id="webapps-faq-title">WEB APP QUESTIONS<br /><em>ANSWERED</em></h2>
            <p className="sec-desc">What founders and product teams ask before building a custom web application.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`faq-item${isOpen ? ' on' : ''}`}>
                  <div
                    className="faq-q"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenFaq(isOpen ? null : index);
                      }
                    }}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <div className="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                  <div className="faq-body" style={{ height: isOpen ? 'auto' : '0' }}>
                    <div className="faq-body-inner">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" />
        <div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Ready to Build Your Product?</span>
          <h2 className="cta-title">YOUR APP IDEA DESERVES<br /><em>ELITE ENGINEERING</em>.</h2>
          <p className="cta-sub">Get a free application architecture audit and a clear roadmap from MVP to scale — delivered within 48 hours.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free App Audit
              {arrowIcon}
            </Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p>
        </div>
      </section>
    </div>
  );
}
