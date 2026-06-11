import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const capabilities = [
  { badge: 'CRO', title: 'Conversion Rate Optimization', desc: 'Every element — headline, CTA, form, social proof — tested and optimized against your conversion goal. Average client conversion lift: 47% post-launch.' },
  { badge: 'A/B', title: 'A/B & Multivariate Testing', desc: 'Built-in experiment frameworks to test headlines, layouts, and offers without developer dependency. Data-driven decisions, not design opinions.' },
  { badge: 'Speed', title: 'Sub-2s Load Times', desc: 'Green Core Web Vitals on every page. Faster pages = lower bounce rates, higher Quality Scores, and more conversions from paid traffic.' },
  { badge: 'Copy', title: 'Persuasion-Driven Copy', desc: 'Headlines, subheads, and CTAs engineered using proven frameworks — PAS, AIDA, and benefit-led messaging that moves visitors to action.' },
  { badge: 'Mobile', title: 'Mobile-First Design', desc: 'Over 70% of ad traffic is mobile. Every landing page is designed thumb-first with tap-friendly CTAs and frictionless mobile forms.' },
  { badge: 'Track', title: 'Analytics & Pixel Integration', desc: 'GA4, GTM, Meta Pixel, LinkedIn Insight Tag, and custom event tracking configured before launch — full funnel visibility from day one.' },
];

const pageTypes = [
  { icon: '01', title: 'Lead Generation Pages', desc: 'High-intent forms, multi-step qualifiers, and lead magnets designed to capture qualified prospects from organic and paid campaigns.' },
  { icon: '02', title: 'PPC & Paid Media Pages', desc: 'Message-matched landing pages for Google Ads, Meta, LinkedIn, and TikTok — aligned to ad copy for Quality Score and conversion lift.' },
  { icon: '03', title: 'Product Launch Pages', desc: 'Countdown timers, waitlist capture, feature showcases, and early-access signup flows that build hype and validate demand pre-launch.' },
  { icon: '04', title: 'Event & Webinar Pages', desc: 'Registration pages with calendar integration, reminder sequences, and social proof that maximize sign-ups and show-up rates.' },
];

const processSteps = [
  { num: '01', title: 'Research & Strategy', desc: 'Audience analysis, competitor teardown, offer positioning, and conversion goal definition before design begins.' },
  { num: '02', title: 'Wireframe & Copy', desc: 'Above-the-fold hierarchy, persuasion architecture, and benefit-driven copy mapped to the buyer journey stage.' },
  { num: '03', title: 'Design & Build', desc: 'Pixel-perfect, responsive build with animations, social proof modules, and form integrations — no page builder bloat.' },
  { num: '04', title: 'Tracking Setup', desc: 'Analytics, pixels, heatmaps, and conversion events configured and verified before traffic hits the page.' },
  { num: '05', title: 'Test & Optimize', desc: 'A/B test variants, heatmap analysis, and iterative CRO improvements to maximize ROI from every visitor.' },
];

const techStack = [
  'React', 'Next.js', 'GSAP', 'Tailwind CSS', 'Vercel', 'Cloudflare',
  'GA4', 'GTM', 'Hotjar', 'Meta Pixel', 'HubSpot', 'Zapier',
];

const faqs = [
  { q: 'How fast can you deliver a landing page?', a: 'A single high-converting landing page typically ships in 1–2 weeks. Multi-variant campaign pages with A/B test setups take 2–3 weeks. Rush delivery is available for campaign launches with hard deadlines.' },
  { q: 'Do you use WordPress or page builders?', a: 'No. We custom-code every landing page in React/Next.js for maximum speed, flexibility, and conversion performance. No Elementor, no Webflow templates — clean code that loads in under 2 seconds.' },
  { q: 'Can you match my ad copy to the landing page?', a: 'Message match is core to our process. We align headlines, offers, and CTAs to your ad creative and keywords to maximize Quality Score and reduce cost-per-conversion.' },
  { q: 'Do you handle A/B testing after launch?', a: 'Yes. We set up experiment frameworks and can run ongoing CRO retainers — testing headlines, layouts, offers, and form fields to continuously improve conversion rates.' },
  { q: 'What conversion rate should I expect?', a: 'Results vary by industry and traffic quality. Our clients typically see 25–60% conversion lifts over their previous pages. We establish baseline metrics before launch and report against them.' },
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

export default function LandingPages() {
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
      <Helmet>
        <title>Landing Pages | LogicWorks — High-Converting CRO Landing Page Design</title>
        <meta name="description" content="LogicWorks builds conversion-obsessed landing pages — A/B tested, CRO-optimized, sub-2s load times. Turn paid and organic traffic into leads and revenue." />
        <link rel="canonical" href="https://logicworks.com/landing-pages" />
      </Helmet>

      {/* Hero */}
      <section
        className="inner-hero"
        aria-labelledby="landing-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #0e1e50 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Web Services</span>
            <h1 className="inner-hero-title" id="landing-title">LANDING<br />PAGES</h1>
            <p className="inner-hero-sub">
              Conversion-obsessed landing pages built to turn traffic into revenue —
              A/B tested, CRO-optimized, and engineered to load in under 2 seconds.
            </p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free CRO Audit
                {arrowIcon}
              </Link>
              <Link to="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Results
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
              <div className="sec-label">Why Landing Pages</div>
              <h2 className="sec-title">TRAFFIC WITHOUT<br /><em>CONVERSION IS WASTE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Sending paid traffic to your homepage is the most expensive mistake in digital marketing.
                Dedicated landing pages with a single conversion goal outperform generic pages by 3–5x —
                every time.
              </p>
              <p className="sec-desc">
                LogicWorks builds landing pages where every pixel earns its place — persuasive copy,
                frictionless forms, social proof, and speed that keeps visitors engaged through the click.
              </p>
              <div className="svc-check-list">
                {[
                  'Average 47% conversion lift over previous pages',
                  'Sub-2 second load times on every deployment',
                  'A/B test ready with variant frameworks built in',
                  'Full analytics and pixel tracking pre-configured',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['Lead Gen', 'PPC', 'Product Launch', 'Webinar', 'SaaS Signup'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Conversion Performance Metrics</div>
              {[
                { label: 'Avg. Conversion Lift', pct: 47, color: 'var(--blue)' },
                { label: 'Page Load Score', pct: 98, color: 'var(--gold)' },
                { label: 'Mobile Conversion Rate', pct: 92, color: 'var(--red)' },
                { label: 'Client Campaign ROI', pct: 96, color: 'var(--navy-mid)' },
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
                <div className="svc-highlight-val">850+</div>
                <div className="svc-highlight-lbl">Landing Pages Launched</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '47%', lbl: 'Avg. Conv. Lift' },
              { val: '<2s', lbl: 'Load Time' },
              { val: '1–2wk', lbl: 'Delivery Time' },
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
            <h2 className="sec-title">EVERY ELEMENT<br /><em>OPTIMIZED TO CONVERT</em></h2>
            <p className="sec-desc">From headline to thank-you page — every touchpoint engineered to move visitors closer to your conversion goal.</p>
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

      {/* Page Types */}
      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Page Types</div>
            <h2 className="sec-title">LANDING PAGES FOR<br /><em>EVERY CAMPAIGN</em></h2>
            <p className="sec-desc">Purpose-built pages for every stage of your funnel — from first click to signed contract.</p>
          </div>
          <div className="svc-grid-4">
            {pageTypes.map((type) => (
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
            <h2 className="sec-title">FROM BRIEF TO<br /><em>LIVE IN 5 PHASES</em></h2>
            <p className="sec-desc">A conversion-first workflow refined across 850+ landing page launches.</p>
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
            <div className="sec-label">Tools & Integrations</div>
            <h2 className="sec-title">BUILT FAST.<br /><em>TRACKED PRECISELY</em></h2>
            <p className="sec-desc">Custom-coded for speed, integrated with the analytics and marketing tools your team already uses.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec svc-sec" aria-labelledby="landing-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">FAQ</div>
            <h2 className="sec-title" id="landing-faq-title">LANDING PAGE<br /><em>QUESTIONS ANSWERED</em></h2>
            <p className="sec-desc">What marketing teams ask before investing in custom landing pages.</p>
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
          <span className="cta-eyebrow">Stop Wasting Ad Spend</span>
          <h2 className="cta-title">EVERY CLICK DESERVES<br /><em>A PAGE THAT CONVERTS</em>.</h2>
          <p className="cta-sub">Get a free CRO audit of your current landing page and discover exactly what&apos;s costing you conversions.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free CRO Audit
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
