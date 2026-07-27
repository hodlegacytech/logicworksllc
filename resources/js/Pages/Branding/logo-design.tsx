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
  { icon: 'DISC', title: 'Discovery & Brief', desc: 'Stakeholder interviews, a competitive logo audit, and brand personality mapping define the strategic ground your mark has to stand on.' },
  { icon: 'CONC', title: 'Concept Exploration', desc: 'Three distinct creative directions, each with rationale, exploring genuinely different visual territory rooted in strategy rather than decoration.' },
  { icon: 'REFN', title: 'Refinement & Polish', desc: 'Iterative refinement of the chosen direction, tuning optical balance, negative space, and the small details that separate good from iconic.' },
  { icon: 'TYPE', title: 'Typography Pairing', desc: 'Custom or carefully curated wordmark typography, paired with complementary type systems for headlines, body copy, and digital use.' },
  { icon: 'SYS', title: 'Logo System Build', desc: 'Primary, secondary, stacked, icon-only, and monochrome variants, covering every configuration your brand will ever need across touchpoints.' },
  { icon: 'SPEC', title: 'Technical Specifications', desc: 'Clear-space rules, minimum sizes, exact color values, and usage guidelines so your logo performs flawlessly no matter the scale.' },
];

const useCases = [
  { num: '01', title: 'Startups & New Ventures', desc: 'Launch with a mark that signals credibility from day one, an investor-ready identity built to scale from MVP straight through Series B and beyond.' },
  { num: '02', title: 'Rebrands & Evolutions', desc: 'Modernize a dated mark while preserving the brand equity already built, a strategic refresh that signals growth without alienating loyal customers.' },
  { num: '03', title: 'Enterprise & Corporate', desc: 'Complex multi-division logo systems with sub-brand architecture, co-branding rules, and global trademark considerations handled properly.' },
  { num: '04', title: 'Product & App Icons', desc: 'App store icons, favicons, and product marks built for digital-first environments, where clarity at 16 pixels is simply non-negotiable.' },
];

const timeline = [
  { num: '01', title: 'Discovery Brief', desc: 'Brand audit, competitive landscape review, stakeholder alignment, and a creative brief that defines the strategic north star.' },
  { num: '02', title: 'Concept Development', desc: 'Three distinct logo directions, each with moodboards, rationale documents, and initial color exploration to ground the decision.' },
  { num: '03', title: 'Selection & Refinement', desc: 'Client feedback woven in, the chosen direction refined, and optical tuning applied across every size and color application.' },
  { num: '04', title: 'System Expansion', desc: 'The full logo suite, horizontal, stacked, icon, reversed, monochrome, built out alongside typography and color palette integration.' },
  { num: '05', title: 'Delivery & Handoff', desc: 'Production-ready files in SVG, EPS, PNG, and PDF, paired with usage guidelines and a team walkthrough for flawless implementation.' },
];

const scope = ['Wordmark Design', 'Symbol / Icon Design', 'Combination Marks', 'Lettermark Logos', 'App Icons', 'Favicon Sets', 'Monochrome Variants', 'Reversed Versions', 'SVG & EPS Files', 'Clear-Space Rules', 'Color Specifications', 'Usage Guidelines'];

const faqs = [
  { q: 'What does a logo design company deliver that a freelancer typically doesn\'t?', a: 'A logo design company brings a structured process, strategic discovery, multiple concept directions, refinement cycles, and a fully delivered system, whereas a freelancer often skips straight to one or two concepts without the strategic groundwork underneath them.' },
  { q: 'How many concepts do custom logo design services typically include?', a: 'Most engagements include three genuinely distinct creative directions, each with its own strategic rationale, so you\'re choosing between real alternatives rather than minor variations on a single idea.' },
  { q: 'How does a logo design agency make sure a mark holds up at every size?', a: 'Through dedicated technical specification work, testing minimum sizes, clear-space rules, and vector precision, specifically so the mark stays legible from a 16-pixel favicon up to large-format print and signage.' },
  { q: 'How long does the full logo design process take from brief to final files?', a: 'Most engagements run 4 to 6 weeks across discovery, concept development, refinement, and full system delivery, with the timeline depending on feedback turnaround and the complexity of the brand system.' },
  { q: 'Do custom logo design services include the full brand identity, or just the logo mark itself?', a: 'Core engagements focus on the logo system, wordmark, symbol, variants, and specifications, with full brand identity work, color palettes, typography systems, and brand guidelines available as a natural extension once the mark is finalized.' },
];

export default function LogoDesign() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useBrandingPage(pageRef);

  return (
    <div ref={pageRef} className="brd-page">
      <Head>
        <title head-key="title">Logo Design Company | Custom Logo Design Services</title>
        <meta head-key="description" name="description" content="Create a memorable brand identity with our logo design company. We deliver custom logo design services, brand guidelines, and scalable logo systems for every business." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/logo-design" />
      </Head>

      <section className="brd-hero" aria-labelledby="logo-design-title">
        <div className="brd-hero-grain" aria-hidden="true" />
        <div className="brd-hero-glow" aria-hidden="true" />
        <div className="brd-hero-line" aria-hidden="true" />
        <div className="con brd-hero-inner">
          <div className="brd-eyebrow">Branding</div>
          <h1 className="brd-hero-title" id="logo-design-title">Logo<br /><span>DESIGN</span></h1>
          <p className="brd-hero-sub">As a logo design company built on restraint and craft, we create marks that carry weight, designed by senior designers who understand exactly what a logo has to do, from a stranger's first glance to a brand's lasting legacy.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>A logo has to hold up at 16 pixels on a favicon and at 40 feet on a billboard, staying legible, balanced, and unmistakably yours in both places. Through our custom logo design services, we engineer marks for every real context they'll live in, not just the polished mockup in a pitch deck.</p>
              <div className="brd-quote-block"><p>The best logos share one trait: simple enough to remember, distinctive enough to actually own.</p></div>
              <div className="brd-check-list">
                {['Strategic concepts rooted in genuine brand positioning', 'A full logo system with every variant you\'ll ever need', 'Vector files optimized cleanly for both print and digital', 'Clear-space and usage rules that keep every application consistent'].map((item) => (
                  <div key={item} className="brd-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="brd-tag-row">{['Wordmarks', 'Symbols', 'App Icons', 'Monochrome', 'Reversed'].map((t) => <span key={t} className="brd-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r brd-value-panel">
              <div className="brd-value-label">Expected Outcomes</div>
              {[
                { icon: '◆', title: 'Instant recognition', desc: 'A mark distinct enough to own your category, memorable at a glance, impossible to confuse.' },
                { icon: '↔', title: 'Infinite scalability', desc: 'Crisp from favicon to billboard, vector precision with tested minimum sizes.' },
                { icon: '∞', title: 'Timeless longevity', desc: 'Design that avoids trend-chasing and stays relevant for decades, not seasons.' },
                { icon: '📁', title: 'Production-ready files', desc: 'Every format, every variant, every specification, ready for your team to deploy.' },
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
            <p className="sec-desc">Six disciplines that turn a creative brief into a mark your market remembers for the long haul, the work of a logo design agency built around process, not luck.</p>
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
            <p className="sec-desc">From a startup's first launch to a full enterprise rebrand, logo design engineered for the specific moment your business is actually in.</p>
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
            <p className="sec-desc">A proven five-phase process refined across more than 500 brand engagements.</p>
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

      <BrandingFaq id="logo-design-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BrandingCta eyebrow="Own Your Category" title={<>YOUR LOGO IS YOUR<br /><em>FIRST IMPRESSION</em>.</>} sub="Book a free brand discovery call and see three strategic logo directions crafted specifically for your business." btnText="Start Your Logo Project" note="" />
    </div>
  );
}
