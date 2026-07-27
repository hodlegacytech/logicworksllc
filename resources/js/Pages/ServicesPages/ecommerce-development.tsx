import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  {
    badge: 'Shopify',
    title: 'Shopify & Shopify Plus',
    desc: 'Custom themes, headless storefronts, and migrations engineered for high-volume brands juggling complex catalogs and fulfillment logic.',
  },
  {
    badge: 'Woo',
    title: 'WooCommerce Development',
    desc: 'Flexible WordPress commerce with custom plugins, subscription billing, and B2B wholesale portals, with full ownership of your own stack.',
  },
  {
    badge: 'Custom',
    title: 'Headless E-Commerce',
    desc: 'Decoupled storefronts on Next.js connected to Shopify, BigCommerce, or a custom backend, giving you maximum performance and total design freedom.',
  },
  {
    badge: 'CRO',
    title: 'Conversion Optimization',
    desc: 'Checkout flow tuning, cart abandonment recovery, upsell and cross-sell logic, and A/B testing that lifts AOV by as much as 34%.',
  },
  {
    badge: 'Pay',
    title: 'Payment Integration',
    desc: 'Stripe, PayPal, Apple Pay, and buy-now-pay-later options like Klarna and Affirm, all on a PCI-compliant, multi-currency architecture.',
  },
  {
    badge: 'SEO',
    title: 'E-Commerce SEO',
    desc: 'Product schema markup, faceted navigation SEO, category architecture, and Core Web Vitals tuning built for genuine organic product discovery.',
  },
];

const storeTypes = [
  {
    icon: '01',
    title: 'DTC Brand Stores',
    desc: 'Direct-to-consumer Shopify and custom builds with real brand storytelling, subscription models, and retention marketing baked in.',
  },
  {
    icon: '02',
    title: 'B2B Wholesale Portals',
    desc: 'Tiered pricing, bulk ordering, account management, and ERP integration purpose-built for manufacturers and distributors.',
  },
  {
    icon: '03',
    title: 'Marketplace Platforms',
    desc: 'Multi-vendor marketplaces with seller onboarding, commission management, and one unified checkout experience across every vendor.',
  },
  {
    icon: '04',
    title: 'Subscription Commerce',
    desc: 'Recurring billing, box subscriptions, membership tiers, and churn-reduction flows engineered for predictable, recurring revenue.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Commerce Audit',
    desc: 'Store performance analysis, conversion funnel review, tech stack assessment, and a genuine look at the competitive landscape.',
  },
  {
    num: '02',
    title: 'Strategy & UX',
    desc: 'Customer journey mapping, category architecture, checkout flow design, and mobile commerce optimization built around how people actually shop.',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    desc: 'Platform development, payment setup, ERP and CRM sync, and third-party app integration are handled end to end.',
  },
  {
    num: '04',
    title: 'CRO & QA',
    desc: 'Load testing, checkout QA, analytics setup, and a clean conversion baseline were established before launch.',
  },
  {
    num: '05',
    title: 'Launch & Scale',
    desc: 'Go-live support, ongoing performance monitoring, continued CRO, and seasonal campaign page development as your calendar demands.',
  },
];

const techStack = [
  'Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Klarna', 'BigCommerce',
  'Sanity', 'Algolia', 'Klaviyo', 'GA4', 'GTM', 'AWS',
];

const faqs = [
  {
    q: 'What separates custom eCommerce development from a standard Shopify theme install?',
    a: 'Custom eCommerce development means the checkout flow, product pages, and integrations are built specifically around your catalog, margins, and customer behavior, rather than adapting your business to fit a generic theme\'s limitations.',
  },
  {
    q: 'What do eCommerce website development services typically cover?',
    a: 'A complete engagement covers platform development, payment integration, ERP and CRM syncing, SEO architecture, and ongoing conversion optimization, not just the initial storefront build.',
  },
  {
    q: 'How does an eCommerce web development agency actually increase average order value?',
    a: 'Through strategic upsell and cross-sell placement, optimized bundling, streamlined checkout flows that reduce abandonment, and continuous A/B testing rather than guessing at what might work.',
  },
  {
    q: 'Is headless commerce worth the added complexity for a smaller brand?',
    a: 'It depends on the growth stage. Headless architecture pays off once page speed and design flexibility start directly limiting conversion rate, which usually happens as traffic and catalog size scale up significantly.',
  },
  {
    q: 'Can an existing store be migrated to a new platform without losing SEO rankings?',
    a: 'Yes, when migration is planned correctly. Proper URL redirects, schema preservation, and a structured rollout plan are standard parts of any serious platform migration to protect existing organic traffic.',
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

export default function EcommerceDevelopment() {
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
        <title head-key="title">E-Commerce Development Company | Custom Shopify & WooCommerce</title>
        <meta
          head-key="description"
          name="description"
          content="TGrow your online store with our eCommerce development company. We build custom Shopify, WooCommerce, and headless stores optimized for conversions, speed, and revenue."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/ecommerce-development" />
      </Head>

      <section
        className="inner-hero"
        aria-labelledby="ecom-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">E-Commerce</span>
            <h1 className="inner-hero-title" id="ecom-title">E-COMMERCE<br />DEVELOPMENT</h1>
            <p className="inner-hero-sub">
              Through custom eCommerce development on Shopify, WooCommerce, or a fully bespoke stack, we engineer stores built to maximize conversion rate, average order value, and lifetime customer revenue, not just look good in a portfolio.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free Store Audit
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Custom E-Commerce</div>
              <h2 className="sec-title">STORES THAT<br /><em>SELL WHILE YOU SLEEP</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Generic templates and bloated plugin stacks quietly kill conversion rate one slow page load at a time. A purpose-built store with an optimized checkout, real speed, and strategic upsells turns browsers into buyers and buyers into customers who come back without being asked twice.
              </p>
              <p className="sec-desc">
                Our eCommerce website development services treat every product page, cart interaction, and checkout step as a revenue lever, not a formality to get through.
              </p>
              <div className="svc-check-list">
                {[
                  'An average 34% increase in AOV post-launch',
                  'Sub-2-second product page load times',
                  'Real Shopify Plus and headless commerce expertise',
                  'Full ERP, CRM, and fulfillment integrations built in',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['Shopify', 'WooCommerce', 'Headless', 'B2B', 'Subscription'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Commerce Performance Metrics</div>
              {[
                { label: 'Avg. AOV Increase', pct: 34, color: 'var(--blue)' },
                { label: 'Checkout Completion Rate', pct: 78, color: 'var(--gold)' },
                { label: 'Mobile Revenue Share', pct: 72, color: 'var(--red)' },
                { label: 'Store Uptime', pct: 99, color: 'var(--navy-mid)' },
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
                <div className="svc-highlight-val">300+</div>
                <div className="svc-highlight-lbl">Stores built and optimized across Shopify, WooCommerce, and headless commerce</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '34%', lbl: 'Avg. AOV Lift' },
              { val: '$2B+', lbl: 'Revenue Processed' },
              { val: '3–8wk', lbl: 'Launch Timeline' },
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

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Core Capabilities</div>
            <h2 className="sec-title">COMMERCE<br /><em>ENGINEERED TO CONVERT</em></h2>
            <p className="sec-desc">
              Platform depth, conversion science, and integration experience- everything a growing eCommerce web development agency needs to build a store that actually scales with demand.
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

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Store Types</div>
            <h2 className="sec-title">BUILT FOR<br /><em>EVERY COMMERCE MODEL</em></h2>
            <p className="sec-desc">
              Launching a DTC brand or scaling a B2B wholesale operation, we build the commerce platform that actually fits your model.
            </p>
          </div>
          <div className="svc-grid-4">
            {storeTypes.map((type) => (
              <article key={type.title} className="svc-card reveal">
                <div className="svc-use-icon">{type.icon}</div>
                <h3 className="svc-card-title">{type.title}</h3>
                <p className="svc-card-desc">{type.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM AUDIT TO<br /><em>REVENUE IN 5 PHASES</em></h2>
            <p className="sec-desc">
              A conversion-first commerce workflow refined across more than 300 store builds.
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

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Technology Stack</div>
            <h2 className="sec-title">PLATFORMS &amp;<br /><em>INTEGRATIONS</em></h2>
            <p className="sec-desc">Best-in-class commerce platforms connected to the tools that power your operations.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="ecom-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <h2 className="sec-title" id="ecom-faq-title">FAQs</h2>
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

      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" />
        <div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Ready to Scale Revenue?</span>
          <h2 className="cta-title">YOUR STORE SHOULD BE<br /><em>YOUR BEST SALESPERSON</em>.</h2>
          <p className="cta-sub">
            Get a free eCommerce audit and find out exactly what&apos;s limiting your conversions and average order value right now.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free Store Audit
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
