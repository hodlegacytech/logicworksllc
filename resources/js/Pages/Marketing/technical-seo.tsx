import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '98', lbl: 'Lighthouse Performance' },
  { val: '0', lbl: 'Critical Crawl Errors' },
  { val: '3.1s', lbl: 'LCP After Optimization' },
  { val: '100%', lbl: 'Schema Coverage' },
];

const solutions = [
  { num: '01', title: 'Core Web Vitals Optimization', desc: 'LCP, INP, and CLS remediation through image optimization, critical CSS, lazy loading, and server-side performance tuning.' },
  { num: '02', title: 'Crawlability & Indexation Audit', desc: 'Robots.txt analysis, XML sitemap optimization, canonical tag fixes, and crawl budget management for large-scale sites.' },
  { num: '03', title: 'Schema Markup Implementation', desc: 'Organization, Product, FAQ, Breadcrumb, and Article structured data deployed via JSON-LD for rich result eligibility.' },
  { num: '04', title: 'Site Architecture & Internal Linking', desc: 'URL structure optimization, silo architecture, breadcrumb hierarchy, and internal link equity distribution for maximum crawl depth.' },
  { num: '05', title: 'JavaScript SEO & Rendering', desc: 'Server-side rendering audits, dynamic rendering fixes, and hydration optimization for React, Next.js, and SPA applications.' },
  { num: '06', title: 'International & Hreflang Setup', desc: 'Multi-language and multi-region hreflang implementation, geo-targeting in Search Console, and ccTLD vs subdirectory strategy.' },
];

const useCases = [
  { icon: 'ECO', title: 'E-Commerce Platforms', desc: 'Faceted navigation control, product schema at scale, and crawl budget optimization for catalogs with thousands of SKUs.' },
  { icon: 'NEWS', title: 'Publishers & Media', desc: 'NewsArticle schema, AMP alternatives, Core Web Vitals for ad-heavy layouts, and indexation for high-volume content.' },
  { icon: 'SaaS', title: 'SaaS & Web Applications', desc: 'JavaScript rendering fixes, programmatic page indexation, and technical foundation for product-led growth SEO.' },
  { icon: 'MIG', title: 'Site Migrations & Redesigns', desc: 'Zero-traffic-loss migration planning, redirect mapping, staging audits, and post-launch monitoring protocols.' },
];

const timeline = [
  { num: '01', title: 'Technical Audit', desc: 'Comprehensive crawl analysis, Core Web Vitals baseline, indexation review, and prioritized issue inventory.' },
  { num: '02', title: 'Critical Fixes', desc: 'Resolve blocking crawl errors, fix canonical conflicts, deploy foundational schema, and address performance bottlenecks.' },
  { num: '03', title: 'Architecture Optimization', desc: 'Restructure internal linking, optimize URL hierarchy, and implement advanced schema for rich results.' },
  { num: '04', title: 'Performance Tuning', desc: 'Core Web Vitals remediation, CDN configuration, image pipeline optimization, and server response improvements.' },
  { num: '05', title: 'Monitor & Maintain', desc: 'Ongoing crawl monitoring, Search Console alerts, regression testing, and quarterly technical health reports.' },
];

const channels = ['Google Search Console', 'Screaming Frog', 'Lighthouse', 'PageSpeed Insights', 'Schema.org', 'Cloudflare', 'Next.js', 'React', 'Semrush', 'Ahrefs', 'GTmetrix', 'Log File Analysis'];

const faqs = [
  { q: 'What does a technical SEO audit include?', a: 'We analyze crawlability, indexation, Core Web Vitals, schema markup, site architecture, internal linking, mobile usability, and JavaScript rendering. You receive a prioritized roadmap with severity ratings and estimated impact.' },
  { q: 'Can you fix Core Web Vitals on our existing site?', a: 'Yes. We diagnose LCP, INP, and CLS issues at the code level — optimizing images, deferring render-blocking resources, fixing layout shifts, and tuning server response times without a full redesign.' },
  { q: 'Do you work with React and Next.js sites?', a: 'Absolutely. JavaScript SEO is a core specialty. We audit rendering strategies, fix hydration issues, implement SSR/SSG where needed, and ensure Google can crawl and index your dynamic content.' },
  { q: 'How do you handle site migrations?', a: 'We build comprehensive redirect maps, audit staging environments, run pre-launch checklists, monitor indexation post-migration, and maintain rollback protocols to protect your organic traffic.' },
  { q: 'Is technical SEO a one-time project or ongoing?', a: 'Initial audits and fixes typically take 6–12 weeks. We recommend ongoing monitoring because CMS updates, new features, and algorithm changes can introduce regressions that need proactive maintenance.' },
];

export default function TechnicalSeo() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Technical SEO | LogicWorks — Core Web Vitals & Site Architecture</title>
        <meta head-key="description" name="description" content="LogicWorks technical SEO services deliver Core Web Vitals optimization, schema markup, crawlability audits, and site architecture that search engines reward." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/technical-seo" />
      </Head>

      <section className="mkt-hero" aria-labelledby="technical-seo-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Search Marketing</div>
          <h1 className="mkt-hero-title" id="technical-seo-title">Technical<br /><span>SEO</span></h1>
          <p className="mkt-hero-sub">Core Web Vitals mastery, schema markup, crawlability audits, and site architecture that gives search engines every reason to rank you higher.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Request a Technical Audit{arrowIcon}</Link>
            <Link href="/local-seo" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Local SEO</Link>
          </div>
        </div>
      </section>

      <section className="mkt-impact">
        <div className="con">
          <div className="mkt-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="mkt-impact-item">
                <div className="mkt-impact-val">{m.val}</div>
                <div className="mkt-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-editorial">
            <div className="reveal-l">
              <div className="sec-label">The Foundation</div>
              <h2 className="sec-title">CONTENT CANNOT RANK<br /><em>ON A BROKEN SITE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>The best content in the world fails if search engines cannot crawl it, users abandon slow pages, and schema is missing. Technical SEO is the foundation everything else builds on.</p>
              <div className="mkt-check-list">
                {['Core Web Vitals in the green zone', 'Zero critical crawl or indexation errors', 'Comprehensive schema markup deployed', 'Optimized site architecture and internal links'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Core Web Vitals', 'Schema', 'Crawlability', 'JavaScript SEO', 'Migrations'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Outcomes</div>
              {[
                { icon: '⚡', title: 'Faster Page Loads', desc: 'LCP under 2.5s, INP under 200ms — pages that users and Google both reward.' },
                { icon: '🔍', title: 'Full Indexation', desc: 'Every valuable page crawled, indexed, and eligible for rich results.' },
                { icon: '📐', title: 'Clean Architecture', desc: 'Logical URL hierarchy and internal linking that distributes authority efficiently.' },
                { icon: '🛡', title: 'Migration Safety', desc: 'Site changes and redesigns that preserve — or improve — organic traffic.' },
              ].map((o) => (
                <div key={o.title} className="mkt-results-item">
                  <div className="mkt-results-icon">{o.icon}</div>
                  <div className="mkt-results-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">TECHNICAL SEO THAT<br /><em>UNLOCKS RANKINGS</em></h2>
            <p className="sec-desc">Six technical disciplines that remove barriers between your content and search engine visibility.</p>
          </div>
          <div className="mkt-solution-grid">
            {solutions.map((s) => (
              <article key={s.title} className="mkt-solution-card">
                <div className="mkt-solution-num">{s.num}</div>
                <h3 className="mkt-solution-title">{s.title}</h3>
                <p className="mkt-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--alt">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">TECHNICAL SEO FOR<br /><em>COMPLEX SITES</em></h2>
            <p className="sec-desc">From e-commerce catalogs to JavaScript SPAs — technical optimization for sites that demand precision.</p>
          </div>
          <div className="mkt-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="mkt-use-card">
                <div className="mkt-use-icon">{u.icon}</div>
                <div><h3 className="mkt-use-title">{u.title}</h3><p className="mkt-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Implementation</div>
            <h2 className="sec-title">FIXED IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From comprehensive audit to ongoing monitoring — a methodical technical SEO program with zero guesswork.</p>
          </div>
          <div className="mkt-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="mkt-process-step">
                <div className="mkt-process-dot">{s.num}</div>
                <h3 className="mkt-process-title">{s.title}</h3>
                <p className="mkt-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Tools & Stack</div>
            <h2 className="sec-title">POWERED BY<br /><em>INDUSTRY TOOLS</em></h2>
            <p className="sec-desc">Enterprise-grade auditing, monitoring, and optimization tools — wielded by senior technical SEO specialists.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="technical-seo-faq" title={<>Technical SEO<br /><em>QUESTIONS ANSWERED</em></>} desc="What engineering and marketing teams ask before investing in technical search optimization." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Fix the Foundation" title={<>YOUR SITE DESERVES<br /><em>TO BE CRAWLED</em>.</>} sub="Book a free technical SEO audit and get a prioritized roadmap of fixes that unlock your organic potential." btnText="Request a Technical Audit" note="FREE TECHNICAL AUDIT · CWV BASELINE · NO COMMITMENT" />
    </div>
  );
}
