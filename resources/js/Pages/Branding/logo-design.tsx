import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useBrandingPage, checkIcon, arrowIcon, BrandingFaq, BrandingCta } from './shared';

const metrics = [
  { val: '500+', lbl: 'Logos Delivered' },
  { val: '3', lbl: 'Concept Directions' },
  { val: '100%', lbl: 'Vector & Scalable' },
  { val: '48hr', lbl: 'Initial Concepts' },
];

const pillars = [
  { icon: 'DISC', title: 'Discovery & Brief', desc: 'Stakeholder interviews, competitive logo audit, and brand personality mapping to define the strategic foundation your mark must carry.' },
  { icon: 'CONC', title: 'Concept Exploration', desc: 'Three distinct creative directions with rationale — each exploring a different visual territory rooted in strategy, not decoration.' },
  { icon: 'REFN', title: 'Refinement & Polish', desc: 'Iterative refinement of the selected direction — optical balance, negative space, and micro-adjustments that separate good from iconic.' },
  { icon: 'TYPE', title: 'Typography Pairing', desc: 'Custom or curated wordmark typography with complementary type systems for headlines, body copy, and digital applications.' },
  { icon: 'SYS', title: 'Logo System Build', desc: 'Primary, secondary, stacked, icon-only, and monochrome variants — every configuration your brand needs across touchpoints.' },
  { icon: 'SPEC', title: 'Technical Specifications', desc: 'Clear-space rules, minimum sizes, color values, and usage guidelines so your logo performs flawlessly at any scale.' },
];

const useCases = [
  { num: '01', title: 'Startups & New Ventures', desc: 'Launch with a mark that signals credibility from day one — investor-ready identity that scales from MVP to Series B and beyond.' },
  { num: '02', title: 'Rebrands & Evolutions', desc: 'Modernize a dated logo while preserving brand equity — strategic refresh that signals growth without alienating existing customers.' },
  { num: '03', title: 'Enterprise & Corporate', desc: 'Complex multi-division logo systems with sub-brand architecture, co-branding rules, and global trademark considerations.' },
  { num: '04', title: 'Product & App Icons', desc: 'App store icons, favicons, and product marks optimized for digital-first environments where clarity at 16px is non-negotiable.' },
];

const timeline = [
  { num: '01', title: 'Discovery Brief', desc: 'Brand audit, competitive landscape review, stakeholder alignment, and creative brief that defines the strategic north star.' },
  { num: '02', title: 'Concept Development', desc: 'Three distinct logo directions with moodboards, rationale documents, and initial color exploration for each concept.' },
  { num: '03', title: 'Selection & Refinement', desc: 'Client feedback integration, chosen direction refinement, and optical tuning across all size and color applications.' },
  { num: '04', title: 'System Expansion', desc: 'Full logo suite — horizontal, stacked, icon, reversed, monochrome — plus typography and color palette integration.' },
  { num: '05', title: 'Delivery & Handoff', desc: 'Production-ready files in SVG, EPS, PNG, and PDF with usage guidelines and team walkthrough for flawless implementation.' },
];

const scope = ['Wordmark Design', 'Symbol / Icon Design', 'Combination Marks', 'Lettermark Logos', 'App Icons', 'Favicon Sets', 'Monochrome Variants', 'Reversed Versions', 'SVG & EPS Files', 'Clear-Space Rules', 'Color Specifications', 'Usage Guidelines'];

const faqs = [
  { q: 'How many logo concepts do you present?', a: 'We present three distinct creative directions, each with strategic rationale. This gives you meaningful choice without decision paralysis — every concept is rooted in your brand strategy, not random aesthetics.' },
  { q: 'What file formats do we receive?', a: 'You receive production-ready files in SVG, EPS, PNG (multiple sizes), PDF, and AI formats. Every variant — primary, secondary, icon-only, monochrome, and reversed — is included with clear naming conventions.' },
  { q: 'Can you redesign our existing logo?', a: 'Yes. We perform logo audits to identify what equity to preserve and what to evolve. Whether it is a subtle refinement or a complete reimagining, we ensure continuity with your brand history.' },
  { q: 'Do you handle trademark searches?', a: 'We conduct preliminary visual similarity checks and recommend professional trademark searches before finalizing. We design logos engineered for distinctiveness and registrability in your industry.' },
  { q: 'How long does a logo project take?', a: 'A focused logo design project typically takes 3–4 weeks from discovery to final delivery. Complex multi-division systems or rush timelines can be accommodated with adjusted scope.' },
];

export default function LogoDesign() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useBrandingPage(pageRef);

  return (
    <div ref={pageRef} className="brd-page">
      <Head>
        <title head-key="title">Logo Design | LogicWorks — Iconic, Scalable & Timeless Logos</title>
        <meta head-key="description" name="description" content="LogicWorks logo design delivers iconic, scalable, timeless marks crafted by senior designers — strategic concepts, full logo systems, and production-ready files." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/logo-design" />
      </Head>

      <section className="brd-hero" aria-labelledby="logo-design-title">
        <div className="brd-hero-grain" aria-hidden="true" />
        <div className="brd-hero-glow" aria-hidden="true" />
        <div className="brd-hero-line" aria-hidden="true" />
        <div className="con brd-hero-inner">
          <div className="brd-eyebrow">Branding</div>
          <h1 className="brd-hero-title" id="logo-design-title">Logo<br /><span>DESIGN</span></h1>
          <p className="brd-hero-sub">Iconic, scalable, timeless logos crafted by senior designers who understand the weight a mark carries — from first impression to lasting legacy.</p>
          <div className="brd-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Logo Project{arrowIcon}</Link>
            <Link href="/brand-guidelines" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Brand Guidelines</Link>
          </div>
        </div>
      </section>

      <section className="brd-stat-band">
        <div className="con">
          <div className="brd-stat-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="brd-stat-item">
                <div className="brd-stat-val">{m.val}</div>
                <div className="brd-stat-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brd-sec brd-sec--cream">
        <div className="con">
          <div className="brd-manifesto reveal">
            <blockquote>A logo is not decoration — it is the single most concentrated expression of everything your brand stands for, seen in a fraction of a second.</blockquote>
          </div>
          <div className="brd-split">
            <div className="reveal-l">
              <div className="sec-label">The Standard</div>
              <h2 className="sec-title">YOUR MARK MUST<br /><em>WORK EVERYWHERE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>From a 16-pixel favicon to a 40-foot billboard, your logo must remain legible, balanced, and unmistakable. We engineer marks for every context — not just the presentation slide.</p>
              <div className="brd-quote-block"><p>Great logos are simple enough to remember and distinctive enough to own.</p></div>
              <div className="brd-check-list">
                {['Strategic concepts rooted in brand positioning', 'Full logo system with every variant you need', 'Vector files optimized for print and digital', 'Clear-space and usage rules for consistent application'].map((item) => (
                  <div key={item} className="brd-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="brd-tag-row">{['Wordmarks', 'Symbols', 'App Icons', 'Monochrome', 'Reversed'].map((t) => <span key={t} className="brd-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r brd-value-panel">
              <div className="brd-value-label">Expected Outcomes</div>
              {[
                { icon: '◆', title: 'Instant Recognition', desc: 'A mark distinct enough to own your category — memorable at a glance, impossible to confuse.' },
                { icon: '↔', title: 'Infinite Scalability', desc: 'Crisp from favicon to billboard — vector precision with tested minimum sizes.' },
                { icon: '∞', title: 'Timeless Longevity', desc: 'Design that avoids trend-chasing and remains relevant for decades, not seasons.' },
                { icon: '📁', title: 'Production-Ready Files', desc: 'Every format, every variant, every specification — ready for your team to deploy.' },
              ].map((o) => (
                <div key={o.title} className="brd-value-item">
                  <div className="brd-value-icon">{o.icon}</div>
                  <div className="brd-value-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brd-sec">
        <div className="con">
          <div className="brd-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">LOGO DESIGN THAT<br /><em>COMMANDS RESPECT</em></h2>
            <p className="sec-desc">Six disciplines that transform a brief into a mark your market will remember forever.</p>
          </div>
          <div className="brd-pillar-grid">
            {pillars.map((p) => (
              <article key={p.title} className="brd-pillar-card">
                <div className="brd-pillar-icon">{p.icon}</div>
                <h3 className="brd-pillar-title">{p.title}</h3>
                <p className="brd-pillar-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brd-sec brd-sec--dark">
        <div className="con">
          <div className="brd-sec-hd reveal">
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">LOGOS FOR<br /><em>EVERY STAGE</em></h2>
            <p className="sec-desc">From startup launch to enterprise rebrand — logo design engineered for your specific business moment.</p>
          </div>
          <div className="brd-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="brd-use-card">
                <div className="brd-use-num">{u.num}</div>
                <div><h3 className="brd-use-title">{u.title}</h3><p className="brd-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brd-sec brd-sec--cream">
        <div className="con">
          <div className="brd-sec-hd reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM BRIEF TO<br /><em>FINAL MARK</em></h2>
            <p className="sec-desc">A proven five-phase logo design process refined across 500+ brand engagements.</p>
          </div>
          <div className="brd-process-track">
            {timeline.map((s) => (
              <div key={s.num} className="brd-process-step">
                <div className="brd-process-num">{s.num}</div>
                <h3 className="brd-process-title">{s.title}</h3>
                <p className="brd-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brd-sec brd-sec--dark">
        <div className="con">
          <div className="brd-sec-hd reveal">
            <div className="sec-label">Deliverables</div>
            <h2 className="sec-title">EVERYTHING IN<br /><em>YOUR LOGO PACKAGE</em></h2>
            <p className="sec-desc">Comprehensive logo deliverables — no hidden upsells, no missing file formats.</p>
          </div>
          <div className="brd-scope-grid">{scope.map((s) => <span key={s} className="brd-scope-pill">{s}</span>)}</div>
        </div>
      </section>

      <BrandingFaq id="logo-design-faq" title={<>Logo Design<br /><em>QUESTIONS ANSWERED</em></>} desc="What founders and marketing leaders ask before investing in professional logo design." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BrandingCta eyebrow="Own Your Category" title={<>YOUR LOGO IS YOUR<br /><em>FIRST IMPRESSION</em>.</>} sub="Book a free brand discovery call and see three strategic logo directions crafted specifically for your business." btnText="Start Your Logo Project" note="FREE DISCOVERY CALL · 3 CONCEPT DIRECTIONS · NO COMMITMENT" />
    </div>
  );
}
