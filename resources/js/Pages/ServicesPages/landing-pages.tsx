import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const capabilities = [
  {
    badge: 'CRO',
    title: 'Conversion Rate Optimization',
    desc: 'Headline, CTA, form, social proof, every element gets tested against your conversion goal. Average client lift post-launch: 47%.',
  },
  {
    badge: 'A/B',
    title: 'A/B & Multivariate Testing',
    desc: 'Built-in experiment frameworks test headlines, layouts, and offers without waiting on a developer. Decisions driven by data, not opinion.',
  },
  {
    badge: 'Speed',
    title: 'Sub-2s Load Times',
    desc: 'Green Core Web Vitals on every page, full stop. Faster pages mean lower bounce, better Quality Scores, and more conversions per dollar spent.',
  },
  {
    badge: 'Copy',
    title: 'Persuasion-Driven Copy',
    desc: 'Headlines, subheads, and CTAs built on proven frameworks, PAS, AIDA, and benefit-first messaging that actually moves people to act.',
  },
  {
    badge: 'Mobile',
    title: 'Mobile-First Design',
    desc: 'Over 70% of ad traffic arrives on mobile. Every page in our custom landing page development process is built thumb-first with tap-friendly CTAs.',
  },
  {
    badge: 'Track',
    title: 'Analytics & Pixel Integration',
    desc: 'GA4, GTM, Meta Pixel, LinkedIn Insight Tag, and custom event tracking configured before launch, not after you\'ve already lost the data.',
  },
];

const pageTypes = [
  {
    icon: '01',
    title: 'Lead Generation Pages',
    desc: 'High-intent forms, multi-step qualifiers, and lead magnets built to capture genuinely qualified prospects from organic and paid campaigns alike.',
  },
  {
    icon: '02',
    title: 'PPC & Paid Media Pages',
    desc: 'Message-matched pages for Google Ads, Meta, LinkedIn, and TikTok, aligned tightly to ad copy for Quality Score and real conversion lift.',
  },
  {
    icon: '03',
    title: 'Product Launch Pages',
    desc: 'Countdown timers, waitlist capture, feature showcases, and early-access signup flows built to generate hype and validate demand before launch day.',
  },
  {
    icon: '04',
    title: 'Event & Webinar Pages',
    desc: 'Registration pages with calendar integration, reminder sequences, and social proof that push sign-up rates and actual show-up rates higher.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Research & Strategy',
    desc: 'Audience analysis, competitor teardown, offer positioning, and a defined conversion goal are settled before design ever begins.',
  },
  {
    num: '02',
    title: 'Wireframe & Copy',
    desc: 'Above-the-fold hierarchy, persuasion architecture, and benefit-driven copy mapped precisely to where the buyer is in their journey.',
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'A pixel-perfect, responsive build with animation, social proof modules, and form integrations, with zero page-builder bloat slowing it down.',
  },
  {
    num: '04',
    title: 'Tracking Setup',
    desc: 'Analytics, pixels, heatmaps, and conversion events are configured and verified before a single visitor hits the live page.',
  },
  {
    num: '05',
    title: 'Test & Optimize',
    desc: 'A/B test variants, heatmap analysis, and ongoing CRO improvements that keep squeezing more ROI from every visitor.',
  },
];

const techStack = [
  'React', 'Next.js', 'GSAP', 'Tailwind CSS', 'Vercel', 'Cloudflare',
  'GA4', 'GTM', 'Hotjar', 'Meta Pixel', 'HubSpot', 'Zapier',
];

const faqs = [
  {
    q: 'How is a landing page development company different from a regular web design agency?',
    a: 'A landing page development company builds around one metric, conversion rate, rather than general aesthetics. Every decision, copy, layout, and form length gets justified by data rather than personal preference.',
  },
  {
    q: 'What\'s actually included in conversion-focused landing page design?',
    a: 'It includes persuasive copywriting, frictionless forms, strategic social proof placement, mobile-first layout, and built-in A/B testing infrastructure, not just a nice-looking page with a button at the bottom.',
  },
  {
    q: 'Are landing page optimization services worth it if I already have a page live?',
    a: 'Almost always, yes. Most existing pages are leaking conversions through slow load times, weak copy, or generic templates. An audit typically surfaces fixes that pay for themselves within the first few weeks of traffic.',
  },
  {
    q: 'How long does custom landing page development take from brief to launch?',
    a: 'Most pages launch within 2 to 3 weeks, covering research, copy, design, build, and tracking setup. Faster turnarounds are possible for time-sensitive campaigns like product launches.',
  },
  {
    q: 'Do you build landing pages for ongoing campaigns or just one-off launches?',
    a: 'Both. Many clients start with a single high-priority page and expand into an ongoing landing page optimization services relationship as more campaigns and offers come online.',
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
      <Head>
        <title head-key="title">Landing Page Development Company | High-Converting Landing Pages</title>
        <meta
          head-key="description"
          name="description"
          content="Increase conversions with our landing page development company. We build fast, CRO-focused landing pages for PPC, lead generation, SaaS, product launches, and webinars."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/landing-pages" />
      </Head>

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
              As a landing page development company built around one metric, revenue, we design pages that turn paid traffic into paying customers. A/B tested. CRO-obsessed. Loading in under two seconds, every single time.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free CRO Audit
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
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
              <h2 className="sec-title">TRAFFIC WITHOUT<br /><em>CONVERSION IS A WASTE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Sending paid traffic to your homepage is, without exaggeration, one of the most expensive mistakes in digital marketing. A dedicated page with one job and one conversion goal outperforms a generic page by 3 to 5 times, every single campaign.
              </p>
              <p className="sec-desc">
                Our conversion-focused landing page design philosophy is simple: every pixel earns its place. Persuasive copy, frictionless forms, real social proof, and speed that holds attention through the click instead of losing it.
              </p>
              <div className="svc-check-list">
                {[
                  'An average 47% conversion lift over previous pages',
                  'Sub-2 second load times on every single deployment',
                  'A/B test frameworks built in from day one',
                  'Full analytics and pixel tracking pre-configured before launch',
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
            <p className="sec-desc">
              From the first headline to the thank-you page, every touchpoint in our landing page optimization services is engineered to move a visitor closer to one outcome: converting.
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

      {/* Page Types */}
      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Page Types</div>
            <h2 className="sec-title">LANDING PAGES FOR<br /><em>EVERY CAMPAIGN</em></h2>
            <p className="sec-desc">
              Purpose-built pages for every stage of your funnel, from the first click all the way to a signed contract.
            </p>
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
            <p className="sec-desc">
              A conversion-first workflow refined across more than 850 landing page launches.
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
            <h2 className="sec-title" id="landing-faq-title">FAQs</h2>
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
          <p className="cta-sub">
            Get a free CRO audit of your current landing page and find out exactly what&apos;s costing you conversions right now.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free CRO Audit
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
