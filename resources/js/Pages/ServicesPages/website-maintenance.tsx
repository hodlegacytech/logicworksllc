import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: 'Update', title: 'Core & Plugin Updates', desc: 'WordPress, CMS, and framework updates applied safely in staging first — tested before production deployment to prevent breakage.' },
  { badge: 'Security', title: 'Security Scanning & Hardening', desc: 'Weekly malware scans, vulnerability assessments, firewall rule updates, and immediate remediation of detected threats.' },
  { badge: 'Speed', title: 'Performance Optimization', desc: 'Monthly Core Web Vitals audits, image compression, cache tuning, and database cleanup to keep load times under 2 seconds.' },
  { badge: 'Content', title: 'Content Management', desc: 'Dedicated support for content updates, new page creation, blog publishing, and media management — your team focuses on strategy, not CMS clicks.' },
  { badge: 'Backup', title: 'Backup & Recovery', desc: 'Daily automated backups with 30-day retention, off-site storage, and tested restore procedures — recover from any incident in minutes.' },
  { badge: 'Uptime', title: 'Uptime & Health Monitoring', desc: '24/7 uptime monitoring with instant alerts, broken link detection, form submission testing, and SSL expiry warnings.' },
];

const maintenanceTypes = [
  { icon: '01', title: 'WordPress Maintenance', desc: 'Plugin updates, theme compatibility checks, database optimization, spam cleanup, and security hardening for WordPress sites of any size.' },
  { icon: '02', title: 'React & Next.js Sites', desc: 'Dependency updates, npm audit fixes, build pipeline maintenance, and deployment monitoring for modern JavaScript applications.' },
  { icon: '03', title: 'E-Commerce Stores', desc: 'Product updates, payment gateway monitoring, checkout flow testing, and inventory sync verification for Shopify and WooCommerce.' },
  { icon: '04', title: 'Enterprise Websites', desc: 'Multi-site maintenance, compliance documentation, change management workflows, and dedicated account manager for large organizations.' },
];

const processSteps = [
  { num: '01', title: 'Site Audit', desc: 'Full health check — update status, security scan, performance baseline, backup verification, and broken link audit.' },
  { num: '02', title: 'Onboarding', desc: 'Staging environment setup, monitoring configuration, maintenance schedule agreement, and access documentation.' },
  { num: '03', title: 'Remediate', desc: 'Apply pending updates, fix security issues, optimize performance, and resolve all findings from the initial audit.' },
  { num: '04', title: 'Schedule', desc: 'Establish weekly and monthly maintenance cadence — updates, scans, backups, and performance reports on autopilot.' },
  { num: '05', title: 'Ongoing Care', desc: 'Continuous monitoring, proactive updates, content support requests, and monthly health reports delivered to your inbox.' },
];

const techStack = ['WordPress', 'React', 'Next.js', 'Shopify', 'WooCommerce', 'Cloudflare', 'Wordfence', 'GTmetrix', 'UptimeRobot', 'ManageWP', 'GitHub Actions', 'Slack'];

const faqs = [
  { q: 'What\'s included in a website maintenance plan?', a: 'All plans include weekly updates, daily backups, security scanning, uptime monitoring, and monthly performance reports. Higher tiers add content updates, priority support, and dedicated account management.' },
  { q: 'Will updates break my website?', a: 'Never without warning. All updates are applied to a staging clone first, tested, and only deployed to production after verification. Rollback procedures are in place for every change.' },
  { q: 'How quickly do you respond to emergencies?', a: 'Site-down emergencies receive a 30-minute response on all plans. Security incidents are addressed immediately with containment, remediation, and a full incident report.' },
  { q: 'Can you maintain a site you didn\'t build?', a: 'Yes. We maintain WordPress, React, Shopify, and custom sites regardless of who built them. An initial audit identifies any technical debt before we begin.' },
  { q: 'How is maintenance priced?', a: 'Plans start at $149/month for standard WordPress maintenance. E-commerce and enterprise sites are scoped individually based on complexity and update frequency.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function WebsiteMaintenance() {
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
        <title>Website Maintenance | LogicWorks — Ongoing Site Care & Support</title>
        <meta name="description" content="LogicWorks website maintenance — updates, security scanning, performance optimization, backups, and content management to keep your site flawless 24/7." />
        <link rel="canonical" href="https://logicworks.com/website-maintenance" />
      </Helmet>

      <section className="inner-hero" aria-labelledby="maint-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Infrastructure</span>
            <h1 className="inner-hero-title" id="maint-title">WEBSITE<br />MAINTENANCE</h1>
            <p className="inner-hero-sub">Ongoing updates, security scanning, performance optimization, and content management — keeping your website flawless, fast, and secure around the clock.</p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free Site Health Check{arrowIcon}</Link>
              <Link to="/hosting-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Maintenance Plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Maintenance Matters</div>
              <h2 className="sec-title">SET IT AND<br /><em>FORGET IT — NOT</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Websites aren&apos;t static brochures — they&apos;re living systems that need regular care. Outdated plugins, expired SSL certificates, and slow load times silently erode your traffic, rankings, and conversions every day they go unaddressed.</p>
              <p className="sec-desc">LogicWorks maintenance plans handle everything — so your site stays secure, fast, and current while your team focuses on growing the business.</p>
              <div className="svc-check-list">
                {['Weekly updates tested in staging before going live', 'Daily backups with 30-day retention', 'Monthly Core Web Vitals performance reports', '30-minute emergency response for site-down incidents'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['WordPress', 'React', 'Shopify', 'Security', 'Content'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Maintenance Health Metrics</div>
              {[{ label: 'Sites Kept Up-to-Date', pct: 100, color: 'var(--blue)' }, { label: 'Security Threats Blocked', pct: 99, color: 'var(--gold)' }, { label: 'Avg. Load Time Improvement', pct: 42, color: 'var(--red)' }, { label: 'Client Satisfaction', pct: 98, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">600+</div><div className="svc-highlight-lbl">Sites Under Active Maintenance</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '600+', lbl: 'Sites Maintained' }, { val: '100%', lbl: 'Update Compliance' }, { val: '30min', lbl: 'Emergency Response' }, { val: '$149', lbl: 'Plans From /mo' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">COMPLETE CARE.<br /><em>ZERO HEADACHES</em></h2><p className="sec-desc">Every aspect of website health managed proactively — not reactively after something breaks.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Platform Coverage</div><h2 className="sec-title">WE MAINTAIN<br /><em>EVERY PLATFORM</em></h2><p className="sec-desc">Purpose-built maintenance workflows for every major CMS, framework, and e-commerce platform.</p></div>
          <div className="svc-grid-4">{maintenanceTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">AUDITED &amp;<br /><em>PROTECTED IN 5 STEPS</em></h2><p className="sec-desc">From initial health check to fully managed ongoing care — seamless onboarding with immediate improvements.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Tools & Platforms</div><h2 className="sec-title">PROFESSIONAL TOOLKIT.<br /><em>PROVEN RESULTS</em></h2><p className="sec-desc">Industry-leading maintenance, security, and performance tools keeping your site in peak condition.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="maint-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="maint-faq-title">MAINTENANCE<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What website owners ask before signing up for professional maintenance.</p></div>
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
          <span className="cta-eyebrow">Stop Neglecting Your Site</span>
          <h2 className="cta-title">A NEGLECTED WEBSITE<br /><em>COSTS YOU DAILY</em>.</h2>
          <p className="cta-sub">Get a free site health check — we&apos;ll identify outdated plugins, security gaps, and performance issues dragging your site down.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Site Health Check{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE HEALTH CHECK · PLANS FROM $149/MO · 30-MIN EMERGENCY RESPONSE</p>
        </div>
      </section>
    </div>
  );
}
