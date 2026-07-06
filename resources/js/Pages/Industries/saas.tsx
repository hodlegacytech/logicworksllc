import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '3.6x', lbl: 'Trial Sign-Up Rate' },
  { val: '58%', lbl: 'Demo Request Lift' },
  { val: '2.1x', lbl: 'Organic Pipeline Growth' },
  { val: '40%', lbl: 'CAC Reduction' },
];

const solutions = [
  { num: '01', title: 'PLG website architecture', desc: 'Self serve trial flows, interactive demos, and onboarding paths that convert visitors to activated users without sales friction' },
  { num: '02', title: 'B2B SEO and content engine', desc: 'Bottom funnel keyword targeting, comparison pages, integration docs, and thought leadership that captures evaluators' },
  { num: '03', title: 'Developer documentation SEO', desc: 'Technical documentation optimized for developer search, including API references, tutorials, and integration guides that drive adoption' },
  { num: '04', title: 'Product marketing pages', desc: 'Feature pages reframed as outcome narratives with social proof, ROI calculators, and real competitive differentiation' },
  { num: '05', title: 'Demand generation campaigns', desc: 'LinkedIn Ads, Google Ads, and retargeting with account based targeting for enterprise pipeline' },
  { num: '06', title: 'Analytics and attribution', desc: 'Full funnel tracking from first touch through revenue, with product analytics integration and cohort reporting' },
];

const useCases = [
  { num: '01', title: 'Pre seed and seed startups', desc: 'Investor ready websites, MVP positioning, and launch marketing for product market fit validation' },
  { num: '02', title: 'Series A to B growth', desc: 'PLG optimization, SEO engine buildout, and demand gen scaling for repeatable pipeline' },
  { num: '03', title: 'Enterprise SaaS', desc: 'ABM campaigns, enterprise landing pages, and security and compliance trust centers' },
  { num: '04', title: 'Developer tools and API', desc: 'Documentation sites, developer community SEO, and open source growth strategies' },
];

const timeline = [
  { num: '01', title: 'Growth audit', desc: 'Funnel analysis, competitive positioning review, and an SEO and content gap assessment' },
  { num: '02', title: 'Strategy and positioning', desc: 'ICP refinement, messaging architecture, and a channel priority matrix' },
  { num: '03', title: 'Build and optimize', desc: 'Website redesign, PLG flow optimization, and content engine launch' },
  { num: '04', title: 'Launch and activate', desc: 'SEO go live, paid campaign activation, and analytics instrumentation' },
  { num: '05', title: 'Scale and iterate', desc: 'Continuous CRO, content scaling, and channel expansion based on cohort data' },
];

const stack = ['HubSpot', 'Salesforce', 'Segment', 'Amplitude', 'Mixpanel', 'Stripe', 'Intercom', 'Clearbit', 'Mutiny', 'Webflow', 'Contentful', 'Google Analytics 4'];

const faqs = [
  { q: 'What makes SaaS marketing different from marketing a typical product business?', a: 'SaaS marketing focuses heavily on free trials, demos, and nurturing leads through a longer consideration cycle, rather than driving a single one-time purchase decision.' },
  { q: 'How important is onboarding UX for SaaS customer retention?', a: 'Critically important. Poor onboarding is one of the leading causes of early SaaS churn, since users who don\'t quickly see value tend to cancel within the first weeks.' },
  { q: 'What metrics matter most when evaluating a SaaS website\'s performance?', a: 'Trial signup rate, demo request rate, and free-to-paid conversion rate tend to matter more than raw traffic volume for most SaaS businesses.' },
  { q: 'Can a SaaS platform\'s pricing page actually impact conversion rates significantly?', a: 'Yes, substantially. Pricing page clarity and structure is consistently one of the highest-leverage pages for improving SaaS conversion rates.' },
  { q: 'What technical considerations matter most for scaling a SaaS product?', a: 'Multi-tenant architecture, reliable uptime, and API-first design tend to matter most, since these directly determine how smoothly a SaaS product can scale with customer growth.' },
];

export default function Saas() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#0891b2' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">SaaS Growth & PLG Marketing Services | B2B SEO & Demand Gen | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Scale your SaaS with LogicWorks LLC. Product-led growth websites, B2B SEO, and demand generation strategies that increase trials, demos, and revenue." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/industries/saas" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="saas-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">SaaS</div>
            <span className="ind-inner-label">SaaS and Technology</span>
          </div>
          <h1 className="ind-inner-title" id="saas-title">SaaS and<br /><span>Technology</span></h1>
          <p className="ind-inner-sub">Product led growth websites, developer first SEO, and B2B demand generation for tech companies, from seed stage startups all the way to enterprise platforms scaling past 10 million in ARR.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a SaaS Growth Audit{arrowIcon}</Link>
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
              <h2 className="sec-title">YOUR WEBSITE IS<br /><em>YOUR TOP SALESPERSON</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>In SaaS, roughly 70 percent of the buyer journey happens before sales ever speaks to a prospect. Weak positioning, slow sites, and feature list pages instead of outcome driven narratives quietly kill conversion. PLG companies, in particular, live or die by their digital experience alone.</p>
              <div className="ind-check-list">
                {['Product led growth website architecture', 'Developer documentation and technical SEO', 'Comparison and alternative page strategies', 'Full funnel analytics from visit through activation'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['PLG', 'B2B SEO', 'developer docs', 'HubSpot', 'product marketing'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '🚀', title: '3.6x trial sign ups', desc: 'PLG optimized flows reduce friction from landing all the way to activation' },
                { icon: '📞', title: '58% more demos', desc: 'Enterprise pages and CTAs convert high intent evaluators consistently' },
                { icon: '📈', title: '2.1x organic pipeline', desc: 'Bottom funnel SEO captures comparison and alternative searches reliably' },
                { icon: '💰', title: '40% lower CAC', desc: 'Organic and PLG channels reduce dependence on paid acquisition' },
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
            <h2 className="sec-title">SAAS GROWTH<br /><em>PLAYBOOK</em></h2>
            <p className="sec-desc">Six capabilities drive pipeline from the first visit all the way through paid conversion.</p>
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
            <div className="sec-label">SaaS Stages</div>
            <h2 className="sec-title">EVERY STAGE<br /><em>OF GROWTH</em></h2>
            <p className="sec-desc">Digital solutions calibrated precisely to your SaaS maturity.</p>
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
            <h2 className="sec-title">GROW IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From growth audit to a real pipeline engine, structured SaaS digital delivery throughout.</p>
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
            <div className="sec-label">Integrations</div>
            <h2 className="sec-title">SAAS STACK<br /><em>CONNECTED</em></h2>
            <p className="sec-desc">Product, marketing, and analytics platforms.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="saas-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for SaaS" title={<>PIPELINE IS NOT A<br /><em>MARKETING PROBLEM ALONE</em>.</>} sub="Book a free SaaS growth audit and see exactly where your website leaks trials, demos, and revenue." btnText="Get a SaaS Growth Audit" note="" />
    </div>
  );
}
