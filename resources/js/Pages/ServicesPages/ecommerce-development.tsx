import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: 'Shopify', title: 'Shopify & Shopify Plus', desc: 'Custom Shopify themes, headless storefronts, and Plus migrations engineered for high-volume brands with complex catalog and fulfillment needs.' },
  { badge: 'Woo', title: 'WooCommerce Development', desc: 'Flexible WordPress e-commerce with custom plugins, subscription billing, and B2B wholesale portals — full ownership of your stack.' },
  { badge: 'Custom', title: 'Headless E-Commerce', desc: 'Decoupled storefronts on Next.js with Shopify, BigCommerce, or custom backends — ultimate performance and design freedom.' },
  { badge: 'CRO', title: 'Conversion Optimization', desc: 'Checkout flow optimization, cart abandonment recovery, upsell/cross-sell logic, and A/B testing that lifts average order value by up to 34%.' },
  { badge: 'Pay', title: 'Payment Integration', desc: 'Stripe, PayPal, Apple Pay, Buy Now Pay Later (Klarna, Affirm), and multi-currency support with PCI-compliant architecture.' },
  { badge: 'SEO', title: 'E-Commerce SEO', desc: 'Product schema markup, faceted navigation SEO, category architecture, and Core Web Vitals optimization for organic product discovery.' },
];

const storeTypes = [
  { icon: '01', title: 'DTC Brand Stores', desc: 'Direct-to-consumer Shopify and custom builds with brand storytelling, subscription models, and retention marketing integrations.' },
  { icon: '02', title: 'B2B Wholesale Portals', desc: 'Tiered pricing, bulk ordering, account management, and ERP integration for manufacturers and distributors.' },
  { icon: '03', title: 'Marketplace Platforms', desc: 'Multi-vendor marketplaces with seller onboarding, commission management, and unified checkout experiences.' },
  { icon: '04', title: 'Subscription Commerce', desc: 'Recurring billing, box subscriptions, membership tiers, and churn-reduction flows for predictable revenue growth.' },
];

const processSteps = [
  { num: '01', title: 'Commerce Audit', desc: 'Store performance analysis, conversion funnel review, tech stack assessment, and competitive benchmarking.' },
  { num: '02', title: 'Strategy & UX', desc: 'Customer journey mapping, category architecture, checkout flow design, and mobile commerce optimization.' },
  { num: '03', title: 'Build & Integrate', desc: 'Platform development, payment setup, ERP/CRM sync, and third-party app integration.' },
  { num: '04', title: 'CRO & QA', desc: 'Load testing, checkout QA, analytics setup, and conversion baseline establishment.' },
  { num: '05', title: 'Launch & Scale', desc: 'Go-live support, performance monitoring, ongoing CRO, and seasonal campaign page development.' },
];

const techStack = ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Klarna', 'BigCommerce', 'Sanity', 'Algolia', 'Klaviyo', 'GA4', 'GTM', 'AWS'];

const faqs = [
  { q: 'Shopify or custom — which platform is right for me?', a: 'Shopify is ideal for most DTC brands needing fast launch and easy management. Custom/headless is best for unique UX requirements, complex B2B logic, or brands doing $10M+ needing maximum performance. We recommend after audit.' },
  { q: 'Can you migrate my existing store?', a: 'Yes. We migrate from Magento, WooCommerce, BigCommerce, and custom platforms to Shopify or headless — including products, customers, orders, and SEO redirect mapping.' },
  { q: 'How much does e-commerce development cost?', a: 'Shopify custom themes start around $15K. Full custom headless builds range $50K–$200K+. We provide detailed scoping after a free commerce audit.' },
  { q: 'Do you handle ongoing store management?', a: 'Yes. We offer monthly retainers for updates, CRO testing, new product launches, seasonal campaigns, and performance optimization.' },
  { q: 'Can you integrate with our ERP or inventory system?', a: 'Absolutely. We integrate with NetSuite, SAP, Fishbowl, ShipStation, and custom APIs for real-time inventory and order sync.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function EcommerceDevelopment() {
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
        <title head-key="title">E-Commerce Development | LogicWorks — Shopify, WooCommerce & Custom Stores</title>
        <meta head-key="description" name="description" content="LogicWorks builds high-converting e-commerce stores — Shopify, WooCommerce, headless commerce, CRO optimization, and integrations engineered to maximize revenue and AOV." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ecommerce-development" />
      </Head>

      <section className="inner-hero" aria-labelledby="ecom-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">E-Commerce</span>
            <h1 className="inner-hero-title" id="ecom-title">E-COMMERCE<br />DEVELOPMENT</h1>
            <p className="inner-hero-sub">Shopify, WooCommerce, and fully custom e-commerce solutions engineered to maximize conversions, average order value, and lifetime customer revenue.</p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free Store Audit{arrowIcon}</Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Results</Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Generic templates and bloated plugins kill conversion rates. A purpose-built store with optimized checkout, fast load times, and strategic upsells turns browsers into buyers and buyers into repeat customers.</p>
              <p className="sec-desc">LogicWorks engineers commerce experiences where every product page, cart interaction, and checkout step is optimized for revenue.</p>
              <div className="svc-check-list">
                {['Average 34% AOV increase post-launch', 'Sub-2s product page load times', 'Shopify Plus and headless expertise', 'Full ERP, CRM, and fulfillment integrations'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['Shopify', 'WooCommerce', 'Headless', 'B2B', 'Subscription'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Commerce Performance Metrics</div>
              {[{ label: 'Avg. AOV Increase', pct: 34, color: 'var(--blue)' }, { label: 'Checkout Completion Rate', pct: 78, color: 'var(--gold)' }, { label: 'Mobile Revenue Share', pct: 72, color: 'var(--red)' }, { label: 'Store Uptime', pct: 99, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">300+</div><div className="svc-highlight-lbl">Stores Built &amp; Optimized</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '34%', lbl: 'Avg. AOV Lift' }, { val: '$2B+', lbl: 'Revenue Processed' }, { val: '3–8wk', lbl: 'Launch Timeline' }, { val: '48hr', lbl: 'Audit Turnaround' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">COMMERCE<br /><em>ENGINEERED TO CONVERT</em></h2><p className="sec-desc">Platform expertise, conversion science, and integration depth — everything needed to build a store that scales.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Store Types</div><h2 className="sec-title">BUILT FOR<br /><em>EVERY COMMERCE MODEL</em></h2><p className="sec-desc">Whether you&apos;re launching a DTC brand or scaling B2B wholesale — we build the right commerce platform for your model.</p></div>
          <div className="svc-grid-4">{storeTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">FROM AUDIT TO<br /><em>REVENUE IN 5 PHASES</em></h2><p className="sec-desc">A conversion-first commerce workflow refined across 300+ store builds.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Technology Stack</div><h2 className="sec-title">PLATFORMS &amp;<br /><em>INTEGRATIONS</em></h2><p className="sec-desc">Best-in-class commerce platforms connected to the tools that power your operations.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="ecom-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="ecom-faq-title">E-COMMERCE<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What brand owners and e-commerce managers ask before building or rebuilding their store.</p></div>
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
          <span className="cta-eyebrow">Ready to Scale Revenue?</span>
          <h2 className="cta-title">YOUR STORE SHOULD BE<br /><em>YOUR BEST SALESPERSON</em>.</h2>
          <p className="cta-sub">Get a free e-commerce audit and discover exactly what&apos;s limiting your conversions and average order value.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Store Audit{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p>
        </div>
      </section>
    </div>
  );
}
