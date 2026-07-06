import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '47%', lbl: 'Average Revenue Lift' },
  { val: '3.8%', lbl: 'Conversion Rate Achieved' },
  { val: '2.4x', lbl: 'ROAS on Paid Media' },
  { val: '$0', lbl: 'Lost to Cart Abandonment' },
];

const solutions = [
  { num: '01', title: 'Platform development', desc: 'Shopify Plus, WooCommerce, and headless commerce builds with custom features, integrations, and scalable architecture' },
  { num: '02', title: 'Conversion rate optimization', desc: 'A/B testing, heatmap analysis, checkout optimization, and UX improvements that systematically lift purchase rate' },
  { num: '03', title: 'Product page excellence', desc: 'High converting product templates with social proof, urgency, cross sells, and SEO optimized descriptions' },
  { num: '04', title: 'Shopping ads and feed optimization', desc: 'Google Shopping, Performance Max, and Meta catalog campaigns with feed optimization and bid management' },
  { num: '05', title: 'Email and lifecycle marketing', desc: 'Klaviyo flows covering welcome series, cart abandonment, post purchase, and win back campaigns' },
  { num: '06', title: 'E commerce SEO', desc: 'Category architecture, product schema markup, and content strategy that drives organic product discovery' },
];

const useCases = [
  { num: '01', title: 'DTC and consumer brands', desc: 'Brand building stores with storytelling, subscription models, and community driven growth' },
  { num: '02', title: 'B2B and wholesale', desc: 'Bulk ordering portals, tiered pricing, and account based purchasing experiences' },
  { num: '03', title: 'Marketplace and multi vendor', desc: 'Multi seller platforms with vendor dashboards, commission tracking, and unified checkout' },
  { num: '04', title: 'Subscription and recurring', desc: 'Recharge and subscription box builds with churn reduction and LTV optimization' },
];

const timeline = [
  { num: '01', title: 'Store audit', desc: 'Conversion funnel analysis, a speed audit, competitive benchmarking, and revenue leak identification' },
  { num: '02', title: 'Strategy and roadmap', desc: 'Platform assessment, a CRO priority matrix, and channel strategy for paid and organic growth' },
  { num: '03', title: 'Build and optimize', desc: 'Platform development or redesign, checkout optimization, and email flow deployment' },
  { num: '04', title: 'Launch and scale ads', desc: 'Shopping feed setup, campaign launch, and retargeting audience activation' },
  { num: '05', title: 'Optimize and grow', desc: 'Continuous A/B testing, seasonal campaigns, and LTV optimization programs' },
];

const stack = ['Shopify Plus', 'WooCommerce', 'BigCommerce', 'Klaviyo', 'Google Shopping', 'Meta Catalog', 'Recharge', 'Stripe', 'ShipStation', 'Gorgias', 'Hotjar', 'Triple Whale'];

const faqs = [
  { q: 'What digital infrastructure matters most for a growing ecommerce business?', a: 'A fast, conversion-optimized storefront, reliable payment processing, and integrated inventory management tend to matter most as order volume scales up.' },
  { q: 'How important is page load speed specifically for ecommerce conversion rates?', a: 'Extremely important. Even a one-second delay in load time can measurably reduce conversion rates, making speed optimization a direct revenue factor.' },
  { q: 'Can an ecommerce platform integrate with existing fulfillment and shipping systems?', a: 'Yes, most modern ecommerce builds are designed to integrate with major fulfillment, shipping, and inventory management platforms through APIs.' },
  { q: 'What marketing channels typically drive the most ecommerce revenue?', a: 'A mix of paid social, Google Shopping ads, email marketing, and SEO tends to perform best, with the right balance depending on product type and margins.' },
  { q: 'How often should an ecommerce store be updated or redesigned?', a: 'Minor optimizations should happen continuously based on data, while a fuller redesign is typically worth considering every 2 to 3 years as design standards evolve.' },
];

export default function Ecommerce() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#7c3aed' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Ecommerce Development & CRO Services | Shopify & Growth | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Scale your online store with LogicWorks LLC ecommerce solutions. Shopify development, CRO, SEO, ads, and automation to increase conversions and revenue." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/industries/ecommerce" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="ecommerce-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">EC</div>
            <span className="ind-inner-label">E Commerce and Retail</span>
          </div>
          <h1 className="ind-inner-title" id="ecommerce-title">E Commerce and<br /><span>Retail</span></h1>
          <p className="ind-inner-sub">End to end e commerce excellence covering platform builds, SEO, paid ads, and CRO, the kind that turns browsers into buyers and one time purchasers into genuinely loyal customers.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get an E Commerce Audit{arrowIcon}</Link>
            <Link href="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Industries</Link>
          </div>
        </div>
      </section>

      <section className="ind-impact-band">
        <div className="con">
          <div className="ind-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ind-impact-item">
                <div className="ind-impact-val">{m.val}</div>
                <div className="ind-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-split">
            <div className="reveal-l">
              <div className="sec-label">The Challenge</div>
              <h2 className="sec-title">97 PERCENT VISIT.<br /><em>3 PERCENT BUY</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>The average e commerce conversion rate sits around 2 to 3 percent. Most stores, however, bleed revenue through slow load times, poor mobile UX, weak product pages, and cart abandonment flows that never actually recover the sale. Every 0.1 percent improvement in conversion is pure profit at that scale.</p>
              <div className="ind-check-list">
                {['Platform builds on Shopify, WooCommerce, and custom stacks', 'Conversion rate optimization across the entire funnel', 'Shopping ads, feed optimization, and retargeting', 'Email automation for cart recovery and lifecycle marketing'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['Shopify', 'CRO', 'Google Shopping', 'Klaviyo', 'Amazon'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '💰', title: '47% revenue lift', desc: 'CRO and UX improvements compound across every traffic source over time' },
                { icon: '🛒', title: '3.8% conversion rate', desc: 'Optimized product pages, checkout, and mobile experience together' },
                { icon: '📈', title: '2.4x ROAS', desc: 'Shopping campaigns and retargeting backed by obsessive feed optimization' },
                { icon: '📧', title: 'Cart recovery revenue', desc: 'Automated flows recover 15 to 25 percent of abandoned carts reliably' },
              ].map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  <div className="ind-outcome-icon">{o.icon}</div>
                  <div className="ind-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Solutions</div>
            <h2 className="sec-title">E COMMERCE<br /><em>GROWTH ENGINE</em></h2>
            <p className="sec-desc">Six capabilities drive measurable revenue across every single stage of the purchase funnel.</p>
          </div>
          <div className="ind-solution-grid">
            {solutions.map((s) => (
              <article key={s.title} className="ind-solution-card">
                <div className="ind-solution-num">{s.num}</div>
                <h3 className="ind-solution-title">{s.title}</h3>
                <p className="ind-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Store Types</div>
            <h2 className="sec-title">RETAIL<br /><em>VERTICALS</em></h2>
            <p className="sec-desc">E commerce solutions tailored across every retail category.</p>
          </div>
          <div className="ind-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="ind-use-card">
                <div className="ind-use-num">{u.num}</div>
                <h3 className="ind-use-title">{u.title}</h3>
                <p className="ind-use-desc">{u.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Process</div>
            <h2 className="sec-title">REVENUE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From store audit to revenue optimization, structured e commerce growth delivery throughout.</p>
          </div>
          <div className="ind-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="ind-process-step">
                <div className="ind-process-dot">{s.num}</div>
                <h3 className="ind-process-title">{s.title}</h3>
                <p className="ind-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">Platforms</div>
            <h2 className="sec-title">COMMERCE STACK<br /><em>MASTERED</em></h2>
            <p className="sec-desc">E-commerce platforms, marketing tools, and integrations.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="ec-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for E Commerce" title={<>TRAFFIC IS VANITY.<br /><em>REVENUE IS SANITY</em>.</>} sub="Book a free e commerce audit and uncover the conversion leaks costing you revenue every single day." btnText="Get an E Commerce Audit" note="" />
    </div>
  );
}
