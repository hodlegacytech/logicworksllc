import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: '24/7', title: 'Round-the-Clock Monitoring', desc: 'Proactive server monitoring with instant alerts for CPU spikes, memory leaks, disk usage, and service failures — issues caught before users notice.' },
  { badge: 'Patch', title: 'Security Patching & Updates', desc: 'OS-level security patches, kernel updates, and package upgrades applied on a scheduled cadence with zero-downtime rolling updates where possible.' },
  { badge: 'Perf', title: 'Performance Tuning', desc: 'Database query optimization, cache configuration, load balancer tuning, and resource allocation adjustments to keep servers running at peak efficiency.' },
  { badge: 'Incident', title: 'Rapid Incident Response', desc: 'Dedicated on-call engineers with SLA-backed response times — critical incidents addressed within 15 minutes, not hours.' },
  { badge: 'Backup', title: 'Disaster Recovery', desc: 'Automated backup verification, off-site replication, and documented recovery runbooks tested quarterly to guarantee business continuity.' },
  { badge: 'Scale', title: 'Capacity Planning', desc: 'Traffic trend analysis and proactive scaling recommendations so your infrastructure grows ahead of demand — never behind it.' },
];

const serverTypes = [
  { icon: '01', title: 'Linux VPS & Dedicated', desc: 'Ubuntu, CentOS, and Debian server management with Nginx, Apache, and custom stack configuration and hardening.' },
  { icon: '02', title: 'Cloud Infrastructure', desc: 'AWS EC2, Google Compute, and Azure VM management — auto-scaling groups, load balancers, and cloud-native service optimization.' },
  { icon: '03', title: 'Database Servers', desc: 'MySQL, PostgreSQL, MongoDB, and Redis administration — replication setup, query optimization, and backup management.' },
  { icon: '04', title: 'Application Servers', desc: 'Node.js, PHP-FPM, and Python application server management with process monitoring, log aggregation, and restart automation.' },
];

const processSteps = [
  { num: '01', title: 'Server Audit', desc: 'Full infrastructure assessment — OS version, security posture, performance baseline, and vulnerability scan.' },
  { num: '02', title: 'Onboarding', desc: 'Monitoring agent deployment, alert configuration, access setup, and documentation of current server architecture.' },
  { num: '03', title: 'Hardening', desc: 'Firewall rules, SSH hardening, fail2ban, unnecessary service removal, and security baseline enforcement.' },
  { num: '04', title: 'Optimize', desc: 'Performance tuning, cache configuration, log rotation, and resource allocation optimization.' },
  { num: '05', title: 'Ongoing Mgmt', desc: '24/7 monitoring, scheduled patching, monthly reports, and proactive capacity recommendations.' },
];

const techStack = ['Linux', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Nginx', 'MySQL', 'PostgreSQL', 'Redis', 'Datadog', 'PagerDuty'];

const faqs = [
  { q: 'What response time do you guarantee for critical incidents?', a: 'Critical incidents (complete server outage) receive a 15-minute initial response guarantee on our Enterprise plan. Standard plans guarantee 1-hour response for critical and 4-hour for non-critical issues.' },
  { q: 'Do you manage servers we don\'t host with you?', a: 'Yes. We manage servers on any provider — AWS, DigitalOcean, Linode, Hetzner, or your own data center — as long as we have secure administrative access.' },
  { q: 'How often do you apply security patches?', a: 'Critical security patches are applied within 24 hours of release. Standard patches follow a weekly maintenance window agreed with your team to minimize disruption.' },
  { q: 'Will server management cause downtime?', a: 'We use rolling updates, maintenance windows, and redundancy configurations to minimize downtime. Planned maintenance is scheduled in advance with your approval.' },
  { q: 'How is server management priced?', a: 'Plans start at $199/month per server for standard monitoring and patching. Multi-server and enterprise environments are scoped individually with volume discounts.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function ServerManagement() {
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
        <title>Server Management | LogicWorks — 24/7 Managed Server Operations</title>
        <meta name="description" content="LogicWorks server management — 24/7 proactive monitoring, security patching, performance tuning, and rapid incident response so your infrastructure never goes dark." />
        <link rel="canonical" href="https://logicworks.com/server-management" />
      </Helmet>

      <section className="inner-hero" aria-labelledby="server-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Infrastructure</span>
            <h1 className="inner-hero-title" id="server-title">SERVER<br />MANAGEMENT</h1>
            <p className="inner-hero-sub">24/7 proactive monitoring, patching, and rapid-response server management — so your infrastructure stays secure, fast, and always online.</p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free Server Audit{arrowIcon}</Link>
              <Link to="/hosting-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Hosting Plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Server Management</div>
              <h2 className="sec-title">YOUR SERVERS.<br /><em>OUR OBSESSION</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Unmanaged servers are ticking time bombs — unpatched vulnerabilities, silent performance degradation, and 3am outages that cost you revenue and reputation. Professional server management eliminates that risk entirely.</p>
              <p className="sec-desc">LogicWorks acts as your dedicated infrastructure team — monitoring, patching, optimizing, and responding so you never have to wake up to a server emergency.</p>
              <div className="svc-check-list">
                {['15-minute critical incident response SLA', 'Weekly security patching with zero-downtime updates', 'Monthly performance and capacity reports', 'Disaster recovery tested quarterly'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['Linux', 'AWS', 'Azure', 'Docker', 'Database'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Server Operations Metrics</div>
              {[{ label: 'Uptime Across Managed Servers', pct: 99, color: 'var(--blue)' }, { label: 'Patch Compliance Rate', pct: 100, color: 'var(--gold)' }, { label: 'Critical Incident Response', pct: 98, color: 'var(--red)' }, { label: 'Client Retention Rate', pct: 97, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">400+</div><div className="svc-highlight-lbl">Servers Under Management</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '15min', lbl: 'Critical Response' }, { val: '99.99%', lbl: 'Uptime SLA' }, { val: '400+', lbl: 'Servers Managed' }, { val: '24/7', lbl: 'Monitoring' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">PROACTIVE OPS.<br /><em>ZERO SURPRISES</em></h2><p className="sec-desc">Every aspect of server operations managed by specialists — not automated scripts with no human oversight.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Server Environments</div><h2 className="sec-title">WE MANAGE<br /><em>EVERY STACK</em></h2><p className="sec-desc">From single VPS instances to multi-region cloud clusters — our engineers manage it all.</p></div>
          <div className="svc-grid-4">{serverTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">ONBOARDED &amp;<br /><em>PROTECTED IN 5 STEPS</em></h2><p className="sec-desc">From initial audit to fully managed operations — a seamless transition with zero disruption.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Technology Stack</div><h2 className="sec-title">TOOLS OUR ENGINEERS<br /><em>LIVE IN DAILY</em></h2><p className="sec-desc">Industry-standard monitoring, automation, and infrastructure tools for reliable server operations.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="server-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="server-faq-title">SERVER MANAGEMENT<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What IT teams and business owners ask before outsourcing server management.</p></div>
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
          <span className="cta-eyebrow">Sleep Better Tonight</span>
          <h2 className="cta-title">UNMANAGED SERVERS ARE<br /><em>A LIABILITY</em>.</h2>
          <p className="cta-sub">Get a free server audit — we&apos;ll identify vulnerabilities, performance bottlenecks, and single points of failure in your current setup.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Server Audit{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · 15-MIN CRITICAL RESPONSE · 24/7 MONITORING</p>
        </div>
      </section>
    </div>
  );
}
