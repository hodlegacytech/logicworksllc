import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const capabilities = [
  {
    badge: 'SSO',
    title: 'SSO',
    desc: 'Enterprise-grade SSO through SAML 2.0, OAuth 2.0, and Active Directory, paired with role-based access control that governs granular permissions across every module in the portal.',
  },
  {
    badge: 'API',
    title: 'API',
    desc: 'RESTful and GraphQL APIs connect your portal directly to ERP, CRM, HRIS, and legacy systems, keeping data synchronized in real time without a single manual export.',
  },
  {
    badge: 'RBAC',
    title: 'RBAC',
    desc: 'Every admin, manager, partner, and end-user sees a dashboard built specifically around their role, surfacing exactly the data and tools they need and nothing that clutters the experience.',
  },
  {
    badge: 'Workflow',
    title: 'Workflow Automation',
    desc: 'Automated approvals, intelligent notifications, and task routing eliminate bottlenecks that slow teams down, all governed by configurable business rules that flex without requiring custom code for every change.',
  },
  {
    badge: 'Reports',
    title: 'Analytics & Reporting',
    desc: 'Live dashboards, exportable reports, and KPI tracking are built into every layer of the platform, putting genuinely data-driven decisions within reach at every level of your organization.',
  },
  {
    badge: 'Security',
    title: 'Enterprise Security',
    desc: 'SOC 2-aligned practices, encryption at rest and in transit, comprehensive audit logs, and penetration-tested deployments mean every portal we ship is compliance-ready from day one.',
  },
];

const portalTypes = [
  {
    icon: '01',
    title: 'Employee Intranets',
    desc: 'Centralize HR resources, internal communications, document repositories, and team collaboration into one hub built for distributed and hybrid workforces alike.',
  },
  {
    icon: '02',
    title: 'Customer Portals',
    desc: 'Self-service account management, order tracking, support ticketing, billing, and knowledge bases have been shown to cut support load by up to 60%.',
  },
  {
    icon: '03',
    title: 'Partner & Vendor Hubs',
    desc: 'Onboard distributors, suppliers, and affiliates through dedicated dashboards, commission tracking, and co-branded experiences built around your partner ecosystem.',
  },
  {
    icon: '04',
    title: 'Member & Community Platforms',
    desc: 'Subscription management, gated content, community forums, and event registration are purpose-built for associations, SaaS communities, and membership-driven organizations.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Stakeholder interviews, in-depth user research, and a full technical audit of your existing systems and data flows.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Information architecture, integration mapping, a defined security model, and a system design engineered to scale from the outset.',
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'UI/UX prototyping, agile development sprints, and continuous review cycles that keep your team involved at every checkpoint.',
  },
  {
    num: '04',
    title: 'Integration',
    desc: 'API connections, SSO configuration, data migration, and rigorous QA across every user role and edge case before anything goes live.',
  },
  {
    num: '05',
    title: 'Launch & Scale',
    desc: 'A staged rollout, hands-on team training, ongoing performance monitoring, and continued optimization support long after launch day.',
  },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Azure',
  'Auth0', 'GraphQL', 'Redis', 'Docker', 'Kubernetes', 'Elasticsearch',
];

const faqs = [
  {
    q: 'What does a web portal development company build versus a web design agency?',
    a: 'A web portal development company builds secure, role-based platforms with integrations, workflows, and business logic, while web design agencies typically focus on marketing websites.',
  },
  {
    q: 'How long does custom web portal development take?',
    a: 'Most enterprise web portals take 3–6 months to design, build, and launch, depending on complexity and integrations.',
  },
  {
    q: 'How is a web portal development services company different from an in-house team?',
    a: 'They bring proven expertise in portal architecture, integrations, security, and scalability, helping reduce risk and development time.',
  },
  {
    q: 'Can a legacy system be integrated into a new custom portal?',
    a: 'Yes. Most legacy ERP, CRM, and HRIS systems can be integrated through APIs, allowing you to keep existing data and processes.',
  },
  {
    q: 'What support is included after launch?',
    a: 'Post-launch support typically includes training, monitoring, maintenance, and ongoing optimization as your business grows.',
  },
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

export default function WebPortals() {
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
        <title head-key="title">Web Portal Development Company | Custom Enterprise Portals</title>
        <meta
          head-key="description"
          name="description"
          content="Build secure, scalable web portals with our web portal development company. We create custom employee, customer, partner, and enterprise portals with seamless integrations."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/web-portals" />
      </Head>

      {/* Hero */}
      <section
        className="inner-hero"
        aria-labelledby="portals-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #0e1e50 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Web Services</span>
            <h1 className="inner-hero-title" id="portals-title">WEB PORTAL<br />DEVELOPMENT COMPANY</h1>
            <p className="inner-hero-sub">
              As a leading web portal development company, we engineer enterprise-grade platforms that consolidate fragmented data, streamline operations, and give every stakeholder, internal teams, customers, and partners alike, a single, secure place to work. Architected for scale. Hardened for security. Tailored to the way your business actually runs.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Start Your Project
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Our Work
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
              <div className="sec-label">Why Web Portals</div>
              <h2 className="sec-title">ONE PLATFORM.<br /><em>EVERY STAKEHOLDER.</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Disconnected tools, siloed data, and manual handoffs quietly drain enterprises of millions in lost productivity every year. However, a properly engineered web portal eliminates that unncessary dragging, becomes the definitive source of truth that ties together people, processes, and platforms under one roof.
              </p>
              <p className="sec-desc">
                At LogicWorks, our custom web portal development scales gracefully from a hundred users to well over a hundred thousand, without sacrificing speed, security, or the experience your users expect. Every portal we deliver is architected around your specific business logic, never a recycled template with a new logo stapled on top.
              </p>
              <div className="svc-check-list">
                {[
                  'Cut support tickets by as much as 60% through intelligent self-service design',
                  'Slash onboarding time for new partners and employees by half',
                  'Maintain real-time data synchronization across your CRM, ERP, and legacy systems',
                  'Ship every portal WCAG 2.2 AA accessible and mobile-first from the very first sprint',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['Intranet', 'Extranet', 'Customer Hub', 'Partner Portal', 'Member Platform'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Portal Performance Metrics</div>
              {[
                { label: 'User Adoption Rate', pct: 94, color: 'var(--blue)' },
                { label: 'System Uptime SLA', pct: 99, color: 'var(--gold)' },
                { label: 'Support Ticket Reduction', pct: 58, color: 'var(--red)' },
                { label: 'Integration Success Rate', pct: 97, color: 'var(--navy-mid)' },
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
                <div className="svc-highlight-val">120+</div>
                <div className="svc-highlight-lbl">Enterprise Portals Delivered</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '99.9%', lbl: 'Uptime SLA' },
              { val: '60%', lbl: 'Less Support Load' },
              { val: '10M+', lbl: 'Users Served' },
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
            <h2 className="sec-title">BUILT FOR<br /><em>ENTERPRISE COMPLEXITY</em></h2>
            <p className="sec-desc">
              Every module within our platform is engineered for security, scalability, and frictionless integration with your existing technology stack.
            </p>
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

      {/* Portal Types */}
      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Portal Types</div>
            <h2 className="sec-title">PORTALS FOR<br /><em>EVERY USE CASE</em></h2>
            <p className="sec-desc">
              As a web portal development services company, we architect the right solution for your audience and business model, whether that&apos;s an internal system of record or a fully customer-facing experience.
            </p>
          </div>
          <div className="svc-grid-4">
            {portalTypes.map((type) => (
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
            <h2 className="sec-title">FROM DISCOVERY TO<br /><em>LAUNCH IN 5 PHASES</em></h2>
            <p className="sec-desc">
              A methodology refined across more than 120 enterprise portal deployments, built to remove guesswork at every stage.
            </p>
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
            <h2 className="sec-title">ENTERPRISE-GRADE<br /><em>INFRASTRUCTURE</em></h2>
            <p className="sec-desc">Modern, battle-tested technologies chosen for performance, security, and long-term maintainability.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec svc-sec" aria-labelledby="portals-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">FAQ</div>
            <h2 className="sec-title" id="portals-faq-title">FAQs</h2>
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
          <span className="cta-eyebrow">Ready to Unify Your Operations?</span>
          <h2 className="cta-title">YOUR PORTAL IS THE<br /><em>BACKBONE OF SCALE</em>.</h2>
          <p className="cta-sub">
            Request a free portal audit for you and find out exactly how a unified platform can eliminate silos and accelerate growth across your organization.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free Portal Audit
              {arrowIcon}
            </Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          {/* <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p> */}
        </div>
      </section>
    </div>
  );
}
