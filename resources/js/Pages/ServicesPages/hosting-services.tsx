import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: 'Cloud', title: 'Managed Cloud Hosting', desc: 'AWS, Google Cloud, and Azure deployments with auto-scaling, load balancing, and multi-region redundancy for maximum uptime.' },
  { badge: 'CDN', title: 'Global CDN Delivery', desc: 'Cloudflare and AWS CloudFront edge caching deliver content from the nearest server, with sub-100ms response times worldwide.' },
  { badge: 'SSL', title: 'SSL & Security Hardening', desc: 'Part of every secure web hosting service\'s plan: free SSL certificates, WAF protection, DDoS mitigation, and automated security patching around the clock.' },
  { badge: 'Backup', title: 'Automated Backups', desc: 'Daily automated backups with point-in-time recovery, off-site storage, and one-click restore, so your data is never genuinely at risk.' },
  { badge: 'Monitor', title: '24/7 Uptime Monitoring', desc: 'Proactive monitoring with instant alerts, performance dashboards, and SLA-backed response times whenever issues arise.' },
  { badge: 'Scale', title: 'Auto-Scaling Infrastructure', desc: 'Traffic spikes get handled automatically, scaling compute resources up during peak demand and back down during quiet periods to optimize cost.' },
];

const hostingTypes = [
  { icon: '01', title: 'WordPress Hosting', desc: 'Optimized WordPress environments with caching, staging, automatic updates, and malware scanning, built specifically for speed and security together.' },
  { icon: '02', title: 'React & Node.js Hosting', desc: 'Containerized deployments for modern JavaScript applications on Vercel, AWS ECS, or a dedicated VPS with CI/CD pipelines in place.' },
  { icon: '03', title: 'E-Commerce Hosting', desc: 'High-availability hosting for Shopify, WooCommerce, and custom stores, with PCI-compliant infrastructure ready for peak traffic.' },
  { icon: '04', title: 'Enterprise Dedicated', desc: 'Dedicated servers and private cloud environments built for compliance-heavy industries that require full infrastructure control.' },
];

const processSteps = [
  { num: '01', title: 'Infrastructure Audit', desc: 'Current hosting assessment, performance benchmarking, a security review, and cost optimization analysis.' },
  { num: '02', title: 'Architecture Plan', desc: 'Server architecture, CDN strategy, backup policies, and a scaling plan tailored to your traffic and compliance needs.' },
  { num: '03', title: 'Migration', desc: 'Zero-downtime migration with DNS cutover, data transfer, SSL provisioning, and post-migration verification.' },
  { num: '04', title: 'Hardening', desc: 'Security configuration, firewall rules, monitoring setup, and performance optimization tuning.' },
  { num: '05', title: 'Manage & Monitor', desc: 'Ongoing 24/7 monitoring, patching, scaling adjustments, and monthly performance reporting.' },
];

const techStack = ['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel', 'Docker', 'Kubernetes', 'cPanel', 'LiteSpeed', 'Redis', 'Nginx', 'Terraform'];

const faqs = [
  { q: 'What\'s the difference between web hosting services and managed hosting services?', a: 'Standard web hosting services provide server space, while managed hosting services include ongoing maintenance, updates, security monitoring, and technical support handled on your behalf.' },
  { q: 'Why do secure web hosting services matter for a business website?', a: 'Secure hosting protects against data breaches, malware, and downtime, all of which can damage both customer trust and search engine rankings.' },
  { q: 'How much downtime is acceptable from a hosting provider?', a: 'Reputable hosting providers should guarantee at least 99.9% uptime, meaning only a few minutes of downtime per month at most.' },
  { q: 'Can I migrate my existing website to new web hosting services without losing data?', a: 'Yes, when migration is planned properly. A professional hosting transition includes full backups and testing before the old hosting is ever decommissioned.' },
  { q: 'Are managed hosting services worth the extra cost compared to self-managed hosting?', a: 'For most businesses, yes. The time saved on server maintenance and the added security typically outweigh the cost difference, especially for non-technical teams.' },
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
      <Head>
        <title head-key="title">Hosting Services | LogicWorks — Managed Cloud Hosting & CDN</title>
        <meta head-key="description" name="description" content="99.99% uptime, blazing-fast CDN delivery, and enterprise-grade security. Our managed hosting services keep your digital assets fast, secure, and always online." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/hosting-services" />
      </Head>

      <section className="inner-hero" aria-labelledby="hosting-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Infrastructure</span>
            <h1 className="inner-hero-title" id="hosting-title">WEB HOSTING<br />SERVICES</h1>
            <p className="inner-hero-sub">99.99% uptime, blazing-fast CDN delivery, and enterprise-grade security. Our managed hosting services keep your digital assets fast, secure, and always online.</p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free Hosting Audit{arrowIcon}</Link>
              <Link href="/contact" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Plans</Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Cheap shared hosting tends to cost you more in downtime, slow load times, and security breaches than premium managed hosting services ever will. Your website is business-critical, after all, and it deserves infrastructure that actually matches those stakes.</p>
              <p className="sec-desc">LogicWorks manages the entire stack, servers, CDN, SSL, backups, and monitoring, so your team can focus on growth rather than server errors.</p>
              <div className="svc-check-list">
                {['99.99% uptime SLA with automatic credits', 'Global CDN for sub-100ms load times worldwide', 'Daily automated backups with one-click restore', '24/7 monitoring with emergency response'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['WordPress', 'React/Node', 'E-Commerce', 'Enterprise', 'Cloud'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Infrastructure Metrics</div>
              {[
                { icon: '↑', title: 'Uptime SLA', desc: '99.99% guaranteed' },
                { icon: '◎', title: 'Avg. Page Load Speed', desc: '96% improvement over typical shared hosting' },
                { icon: '⏱', title: 'Security Incident Rate', desc: '99% reduction through proactive hardening' },
                { icon: '✓', title: 'Migration Success Rate', desc: '100% across every managed transition' },
              ].map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  {/* <div className="ind-outcome-icon">{o.icon}</div> */}
                  <div className="ind-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
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
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">HOSTING BUILT FOR<br /><em>PERFORMANCE & SECURITY</em></h2><p className="sec-desc">Every layer of your hosting stack is managed, monitored, and optimized by genuine infrastructure specialists, not a help desk reading from a script.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Hosting Plans</div><h2 className="sec-title">HOSTING FOR<br /><em>EVERY STACK</em></h2><p className="sec-desc">From WordPress blogs to enterprise SaaS, our managed hosting services are tailored to your technology and traffic profile.</p></div>
          <div className="svc-grid-4">{hostingTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">ZERO-DOWNTIME<br /><em>MIGRATION IN 5 STEPS</em></h2><p className="sec-desc">A seamless migration and ongoing management process, with your site staying live throughout the entire transition.</p></div>
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
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="hosting-faq-title">FAQs</h2></div>
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
          <p className="cta-sub">Get a free hosting audit. We&apos;ll benchmark your current setup and show you exactly where performance and security can improve.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Hosting Audit{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">#</p>
        </div>
      </section>
    </div>
  );
}
