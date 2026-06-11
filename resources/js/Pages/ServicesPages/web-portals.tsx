import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const capabilities = [
  { badge: 'SSO', title: 'Single Sign-On & Identity', desc: 'Enterprise SSO via SAML 2.0, OAuth 2.0, and Active Directory. Role-based access control with granular permissions across every portal module.' },
  { badge: 'API', title: 'API-First Architecture', desc: 'RESTful and GraphQL APIs that connect your portal to ERP, CRM, HRIS, and legacy systems — real-time data sync without manual exports.' },
  { badge: 'RBAC', title: 'Role-Based Dashboards', desc: 'Personalized views for admins, managers, partners, and end-users. Each role sees exactly the data and tools they need — nothing more.' },
  { badge: 'Workflow', title: 'Workflow Automation', desc: 'Automated approvals, notifications, and task routing that eliminate bottlenecks. Configurable business rules without custom code for every change.' },
  { badge: 'Reports', title: 'Analytics & Reporting', desc: 'Real-time dashboards, exportable reports, and KPI tracking built into every portal layer. Data-driven decisions at every level of your organization.' },
  { badge: 'Security', title: 'Enterprise Security', desc: 'SOC 2-aligned practices, encryption at rest and in transit, audit logs, and penetration-tested deployments. Compliance-ready from day one.' },
];

const portalTypes = [
  { icon: '01', title: 'Employee Intranets', desc: 'Centralize HR resources, internal communications, document management, and team collaboration for distributed workforces.' },
  { icon: '02', title: 'Customer Portals', desc: 'Self-service account management, order tracking, support tickets, billing, and knowledge bases that reduce support load by up to 60%.' },
  { icon: '03', title: 'Partner & Vendor Hubs', desc: 'Onboard distributors, suppliers, and affiliates with dedicated dashboards, commission tracking, and co-branded experiences.' },
  { icon: '04', title: 'Member & Community Platforms', desc: 'Subscription management, exclusive content, forums, and event registration for associations, SaaS communities, and membership organizations.' },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Stakeholder interviews, user research, and technical audit of existing systems and data flows.' },
  { num: '02', title: 'Architecture', desc: 'Information architecture, integration mapping, security model, and scalable system design.' },
  { num: '03', title: 'Design & Build', desc: 'UI/UX prototyping, agile development sprints, and continuous client review cycles.' },
  { num: '04', title: 'Integration', desc: 'API connections, SSO setup, data migration, and QA across all user roles and edge cases.' },
  { num: '05', title: 'Launch & Scale', desc: 'Staged rollout, team training, performance monitoring, and ongoing optimization support.' },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Azure',
  'Auth0', 'GraphQL', 'Redis', 'Docker', 'Kubernetes', 'Elasticsearch',
];

const faqs = [
  { q: 'How long does a custom web portal take to build?', a: 'Timeline depends on scope and integrations. A focused MVP portal typically ships in 10–14 weeks. Enterprise portals with multiple integrations and user roles range from 4–8 months. We provide a detailed roadmap after discovery.' },
  { q: 'Can you integrate with our existing ERP or CRM?', a: 'Yes. We specialize in API-first portal architecture and have integrated with Salesforce, HubSpot, SAP, NetSuite, Microsoft Dynamics, and custom legacy systems via REST, GraphQL, and middleware solutions.' },
  { q: 'Do you support single sign-on (SSO)?', a: 'Absolutely. We implement SAML 2.0, OAuth 2.0, OpenID Connect, and Active Directory/LDAP integration so your users authenticate once across all connected systems.' },
  { q: 'What happens after the portal launches?', a: 'We offer ongoing maintenance, security patching, feature enhancements, and 24/7 monitoring packages. Most clients retain us for continuous iteration as their business evolves.' },
  { q: 'Is the portal mobile-responsive?', a: 'Every portal we build is fully responsive and tested across desktop, tablet, and mobile. Progressive Web App (PWA) capabilities are available for app-like mobile experiences without app store deployment.' },
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
        <title head-key="title">Web Portals | LogicWorks — Enterprise Portal Development</title>
        <meta head-key="description" name="description" content="LogicWorks builds enterprise-grade web portals — employee intranets, customer portals, partner hubs, and member platforms with SSO, API integrations, and role-based access." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/web-portals" />
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
            <h1 className="inner-hero-title" id="portals-title">WEB<br />PORTALS</h1>
            <p className="inner-hero-sub">
              Enterprise-grade portal solutions that centralize data, streamline operations,
              and empower teams, customers, and partners at scale — built secure, scalable, and tailored to your workflow.
            </p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free Portal Audit
                {arrowIcon}
              </Link>
              <Link to="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
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
              <div className="sec-label">Why Web Portals</div>
              <h2 className="sec-title">ONE PLATFORM.<br /><em>EVERY STAKEHOLDER.</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Scattered tools, siloed data, and manual workflows cost enterprises millions in lost productivity.
                A unified web portal becomes the single source of truth — connecting people, processes, and platforms.
              </p>
              <p className="sec-desc">
                LogicWorks engineers portals that scale from 100 to 100,000+ users without compromising speed,
                security, or user experience. Every portal is custom-architected for your business logic — not a template with your logo pasted on.
              </p>
              <div className="svc-check-list">
                {[
                  'Reduce support tickets by up to 60% with self-service portals',
                  'Cut onboarding time for partners and employees in half',
                  'Real-time data sync across CRM, ERP, and legacy systems',
                  'WCAG 2.2 AA accessible and mobile-first by default',
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
            <p className="sec-desc">Every portal module engineered for security, scalability, and seamless integration with your existing tech stack.</p>
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
            <p className="sec-desc">From internal intranets to customer-facing hubs — we architect the right portal for your audience and business model.</p>
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
            <p className="sec-desc">A battle-tested methodology refined across 120+ enterprise portal deployments.</p>
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
            <h2 className="sec-title" id="portals-faq-title">PORTAL QUESTIONS<br /><em>ANSWERED</em></h2>
            <p className="sec-desc">Common questions from enterprise teams evaluating a custom portal build.</p>
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
          <p className="cta-sub">Get a free portal architecture audit and discover how a unified platform can eliminate silos and accelerate growth.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free Portal Audit
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
