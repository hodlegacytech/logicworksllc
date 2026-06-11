import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: 'Cloud', title: 'Managed Cloud Hosting', desc: 'AWS, Google Cloud, and Azure deployments with auto-scaling, load balancing, and multi-region redundancy for maximum uptime.' },
  { badge: 'CDN', title: 'Global CDN Delivery', desc: 'Cloudflare and AWS CloudFront edge caching that delivers content from the nearest server — sub-100ms response times worldwide.' },
  { badge: 'SSL', title: 'SSL & Security Hardening', desc: 'Free SSL certificates, WAF protection, DDoS mitigation, and automated security patching to keep your assets protected 24/7.' },
  { badge: 'Backup', title: 'Automated Backups', desc: 'Daily automated backups with point-in-time recovery, off-site storage, and one-click restore — your data is never at risk.' },
  { badge: 'Monitor', title: '24/7 Uptime Monitoring', desc: 'Proactive monitoring with instant alerts, performance dashboards, and SLA-backed response times when issues arise.' },
  { badge: 'Scale', title: 'Auto-Scaling Infrastructure', desc: 'Traffic spikes handled automatically — scale compute resources up during peak demand and down during quiet periods to optimize costs.' },
];

const hostingTypes = [
  { icon: '01', title: 'WordPress Hosting', desc: 'Optimized WordPress environments with caching, staging, automatic updates, and malware scanning — built for speed and security.' },
  { icon: '02', title: 'React & Node.js Hosting', desc: 'Containerized deployments for modern JavaScript applications on Vercel, AWS ECS, or dedicated VPS with CI/CD pipelines.' },
  { icon: '03', title: 'E-Commerce Hosting', desc: 'High-availability hosting for Shopify, WooCommerce, and custom stores with PCI-compliant infrastructure and peak-traffic readiness.' },
  { icon: '04', title: 'Enterprise Dedicated', desc: 'Dedicated servers and private cloud environments for compliance-heavy industries requiring full infrastructure control.' },
];

const processSteps = [
  { num: '01', title: 'Infrastructure Audit', desc: 'Current hosting assessment, performance benchmarking, security review, and cost optimization analysis.' },
  { num: '02', title: 'Architecture Plan', desc: 'Server architecture, CDN strategy, backup policies, and scaling plan tailored to your traffic and compliance needs.' },
  { num: '03', title: 'Migration', desc: 'Zero-downtime migration with DNS cutover, data transfer, SSL provisioning, and post-migration verification.' },
  { num: '04', title: 'Hardening', desc: 'Security configuration, firewall rules, monitoring setup, and performance optimization tuning.' },
  { num: '05', title: 'Manage & Monitor', desc: 'Ongoing 24/7 monitoring, patching, scaling adjustments, and monthly performance reporting.' },
];

const techStack = ['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel', 'Docker', 'Kubernetes', 'cPanel', 'LiteSpeed', 'Redis', 'Nginx', 'Terraform'];

const faqs = [
  { q: 'What uptime guarantee do you offer?', a: 'We guarantee 99.99% uptime SLA on all managed hosting plans. If we fall below this threshold, you receive service credits automatically — no claims process required.' },
  { q: 'Can you migrate my existing website?', a: 'Yes. We handle zero-downtime migrations from any host — shared hosting, VPS, or dedicated servers. DNS, SSL, email, and databases are all migrated and verified.' },
  { q: 'Is hosting included with web development?', a: 'Hosting can be bundled with development projects or purchased as a standalone managed service. We recommend discussing infrastructure during the project scoping phase.' },
  { q: 'Do you offer 24/7 support?', a: 'Yes. All managed hosting clients receive 24/7 monitoring with emergency response. Standard support tickets are answered within 2 business hours.' },
  { q: 'How is hosting priced?', a: 'Plans start at $99/month for standard managed WordPress hosting. Enterprise and dedicated environments are scoped individually based on traffic, compliance, and redundancy requirements.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function HostingServices() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-hero-animate > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.svc-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.svc-capabilities', start: 'top 80%' } });
      gsap.fromTo('.svc-process-step', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.svc-process-grid', start: 'top 85%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="svc-page">
      <Helmet>
        <title>Hosting Services | LogicWorks — Managed Cloud Hosting & CDN</title>
        <meta name="description" content="LogicWorks managed hosting — 99.99% uptime, global CDN, SSL security, automated backups, and 24/7 monitoring for WordPress, React, and enterprise applications." />
        <link rel="canonical" href="https://logicworks.com/hosting-services" />
      </Helmet>

      <section className="inner-hero" aria-labelledby="hosting-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Infrastructure</span>
            <h1 className="inner-hero-title" id="hosting-title">HOSTING<br />SERVICES</h1>
            <p className="inner-hero-sub">99.99% uptime, blazing-fast CDN delivery, and enterprise-grade security — managed hosting that keeps your digital assets fast, secure, and always online.</p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free Hosting Audit{arrowIcon}</Link>
              <Link to="/contact" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Managed Hosting</div>
              <h2 className="sec-title">INFRASTRUCTURE YOU<br /><em>NEVER THINK ABOUT</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Cheap shared hosting costs you more in downtime, slow load times, and security breaches than premium managed hosting ever will. Your website is business-critical — it deserves infrastructure that matches.</p>
              <p className="sec-desc">LogicWorks manages the entire stack — servers, CDN, SSL, backups, and monitoring — so your team focuses on growth, not server errors.</p>
              <div className="svc-check-list">
                {['99.99% uptime SLA with automatic credits', 'Global CDN for sub-100ms load times worldwide', 'Daily automated backups with one-click restore', '24/7 monitoring with emergency response'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['WordPress', 'React/Node', 'E-Commerce', 'Enterprise', 'Cloud'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Infrastructure Metrics</div>
              {[{ label: 'Uptime SLA', pct: 99, color: 'var(--blue)' }, { label: 'Avg. Page Load Speed', pct: 96, color: 'var(--gold)' }, { label: 'Security Incident Rate', pct: 99, color: 'var(--red)' }, { label: 'Migration Success Rate', pct: 100, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">99.99%</div><div className="svc-highlight-lbl">Guaranteed Uptime SLA</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '99.99%', lbl: 'Uptime SLA' }, { val: '<100ms', lbl: 'CDN Response' }, { val: '500+', lbl: 'Sites Hosted' }, { val: '24/7', lbl: 'Monitoring' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">HOSTING BUILT FOR<br /><em>PERFORMANCE & SECURITY</em></h2><p className="sec-desc">Every layer of your hosting stack managed, monitored, and optimized by infrastructure specialists.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Hosting Plans</div><h2 className="sec-title">HOSTING FOR<br /><em>EVERY STACK</em></h2><p className="sec-desc">From WordPress blogs to enterprise SaaS — managed hosting tailored to your technology and traffic profile.</p></div>
          <div className="svc-grid-4">{hostingTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">ZERO-DOWNTIME<br /><em>MIGRATION IN 5 STEPS</em></h2><p className="sec-desc">Seamless migration and ongoing management — your site stays live throughout the entire process.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Infrastructure Stack</div><h2 className="sec-title">ENTERPRISE-GRADE<br /><em>TECHNOLOGY</em></h2><p className="sec-desc">Industry-leading cloud platforms and tools powering reliable, fast, and secure hosting environments.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="hosting-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="hosting-faq-title">HOSTING<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What business owners ask before switching to managed hosting.</p></div>
          <div className="faq-list">{faqs.map((faq, i) => { const open = openFaq === i; return (
            <div key={faq.q} className={`faq-item${open ? ' on' : ''}`}>
              <div className="faq-q" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenFaq(open ? null : i); } }}>
                <span className="faq-q-text">{faq.q}</span><div className="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
              </div>
              <div className="faq-body" style={{ height: open ? 'auto' : '0' }}><div className="faq-body-inner">{faq.a}</div></div>
            </div>); })}</div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Never Go Dark Again</span>
          <h2 className="cta-title">YOUR SITE DESERVES<br /><em>BULLETPROOF HOSTING</em>.</h2>
          <p className="cta-sub">Get a free hosting audit — we&apos;ll benchmark your current setup and show you exactly where performance and security can improve.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Hosting Audit{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · NO COMMITMENT · ZERO-DOWNTIME MIGRATION</p>
        </div>
      </section>
    </div>
  );
}
