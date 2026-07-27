import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useBrandingPage, checkIcon, arrowIcon, BrandingFaq, BrandingCta } from './shared';

const metrics = [
  { val: '500+', lbl: 'Identity Systems Built' },
  { val: '98%', lbl: 'Guideline Adoption Rate' },
  { val: '40+', lbl: 'Industries Served' },
  { val: '4wk', lbl: 'Concept-to-Delivery' },
];

const pillars = [
  { icon: 'LOGO', title: 'Logo & Mark Systems', desc: 'Primary marks, responsive variants, favicons, and sub-brand lockups engineered for legibility from billboard to app icon.' },
  { icon: 'TYPE', title: 'Typography Systems', desc: 'Primary and secondary typefaces, scale hierarchies, and licensing guidance that ensure typographic consistency across every medium.' },
  { icon: 'CLR', title: 'Color Architecture', desc: 'Primary, secondary, and functional palettes with accessibility-compliant contrast ratios and digital-to-print specifications.' },
  { icon: 'VIS', title: 'Visual Language', desc: 'Photography direction, illustration style, iconography, patterns, and graphic devices that extend identity beyond the logo.' },
  { icon: 'UI', title: 'Digital Brand Systems', desc: 'Component libraries, UI patterns, and design tokens that align product interfaces with brand identity at scale.' },
  { icon: 'DOC', title: 'Brand Guidelines', desc: 'Comprehensive standards documents — usage rules, clear space, misuse examples, and asset libraries your teams reference daily.' },
];

const useCases = [
  { num: '01', title: 'New Brand Identity', desc: 'Complete visual identity from strategy through launch — logo, color, type, and guidelines for companies building their first professional presence.' },
  { num: '02', title: 'Rebrand & Visual Refresh', desc: 'Evolution or revolution of existing identity — honoring brand equity while modernizing for new markets, audiences, or digital channels.' },
  { num: '03', title: 'Product & Sub-Brand Design', desc: 'Visual systems for product lines, SaaS platforms, and portfolio brands — cohesive families with distinct product personalities.' },
  { num: '04', title: 'Campaign & Launch Creative', desc: 'Time-bound visual systems for product launches, funding rounds, and market entries — on-brand creative that moves at campaign speed.' },
];

const timeline = [
  { num: '01', title: 'Brief & Discovery', desc: 'Creative brief alignment, competitive visual audit, moodboard exploration, and strategic design territory definition.' },
  { num: '02', title: 'Concept Development', desc: 'Multiple design directions presented with rationale — logo explorations, color studies, and typographic systems for stakeholder review.' },
  { num: '03', title: 'Refinement & Testing', desc: 'Selected direction refined across applications — scalability testing, accessibility review, and real-world mockup validation.' },
  { num: '04', title: 'System Build-Out', desc: 'Full identity system expansion — sub-brands, digital components, stationery, social templates, and environmental applications.' },
  { num: '05', title: 'Guidelines & Handoff', desc: 'Brand standards document, asset library delivery, team training, and production-ready files for immediate deployment.' },
];

const scope = ['Logo Design', 'Wordmarks', 'Icon Systems', 'Color Palettes', 'Typography', 'Photography Style', 'Illustration', 'Pattern Library', 'Stationery', 'Social Templates', 'UI Components', 'Brand Guidelines'];

const faqs = [
  { q: 'Do you need brand strategy before starting design?', a: 'Strategy informs stronger design, but we can work from an existing brief. For clients without positioning, we recommend our branding strategy engagement first — or a combined strategy-plus-design package for seamless delivery.' },
  { q: 'How many logo concepts do we receive?', a: 'We present 3–4 distinct creative directions in round one, each with rationale and application mockups. Round two refines the selected direction. We do not flood you with volume — we present strategic options worth choosing between.' },
  { q: 'Will our brand work across digital and print?', a: 'Yes. Every identity system is built with multi-channel deployment in mind — RGB and CMYK specifications, responsive logo variants, favicon sets, and social-safe templates included in deliverables.' },
  { q: 'What file formats do we receive at handoff?', a: 'Production-ready packages include SVG, EPS, PNG, PDF, and source files (AI/Figma). We deliver organized asset libraries with naming conventions and a brand guidelines document your team and vendors can reference independently.' },
  { q: 'Can you design within our existing brand guidelines?', a: 'Absolutely. We extend, refresh, and build upon existing systems — adding sub-brands, digital components, campaign creative, and updated guidelines without discarding equity you have already built.' },
];

export default function BrandDesign() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useBrandingPage(pageRef);

  return (
    <div ref={pageRef} className="brd-page">
      <Head>
        <title head-key="title">Brand Design | LogicWorks — Visual Identity & Design Systems</title>
        <meta head-key="description" name="description" content="LogicWorks brand design services deliver visual identity systems — logos, color palettes, typography, UI components, and brand guidelines that make you unforgettable." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/brand-design" />
      </Head>

      <section className="brd-hero" aria-labelledby="brand-design-title">
        <div className="brd-hero-grain" aria-hidden="true" />
        <div className="brd-hero-glow" aria-hidden="true" />
        <div className="brd-hero-line" aria-hidden="true" />
        <div className="con brd-hero-inner">
          <div className="brd-eyebrow">Branding</div>
          <h1 className="brd-hero-title" id="brand-design-title">Brand<br /><span>Design</span></h1>
          <p className="brd-hero-sub">Visual identity systems — logos, color palettes, typography, and comprehensive guidelines — crafted by senior designers who understand the weight every mark carries.</p>
          <div className="brd-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Brand Design{arrowIcon}</Link>
            <Link href="/branding-strategy" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Branding Strategy</Link>
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
            <blockquote>Design is not decoration — it is the visual proof of everything you claim to be. A identity system earns trust before a single word is read.</blockquote>
          </div>
          <div className="brd-split">
            <div className="reveal-l">
              <div className="sec-label">Visual Identity</div>
              <h2 className="sec-title">LOOK LIKE YOU<br /><em>MEAN IT</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Inconsistent visuals erode credibility faster than weak copy. A disciplined identity system ensures every touchpoint — from pitch deck to product UI — reinforces the same premium perception.</p>
              <div className="brd-quote-block">
                <p>&ldquo;We build identity systems, not logo files — scalable design languages your internal teams and agency partners can execute without drift.&rdquo;</p>
              </div>
              <div className="brd-check-list">
                {['Senior designers — no offshore handoffs or template marks', 'Multi-channel systems built for digital-first brands', 'Accessibility-compliant color and type specifications', 'Production-ready asset libraries at handoff'].map((item) => (
                  <div key={item} className="brd-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="brd-tag-row">{['Logo', 'Typography', 'Color', 'UI Systems', 'Guidelines', 'Templates'].map((t) => <span key={t} className="brd-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r brd-value-panel">
              <div className="brd-value-label">Design Outcomes</div>
              {[
                { icon: '◎', title: 'Instant Recognition', desc: 'Marks and systems distinctive enough to identify at a glance across any channel.' },
                { icon: '◆', title: 'Flawless Scalability', desc: 'Logos and assets engineered for favicon, mobile, print, and environmental scale.' },
                { icon: '▣', title: 'Team-Ready Guidelines', desc: 'Documentation and libraries that empower marketing, product, and vendors to stay on-brand.' },
                { icon: '◇', title: 'Digital-Native Systems', desc: 'Design tokens and UI components that bridge brand identity and product experience.' },
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
            <h2 className="sec-title">IDENTITY SYSTEMS<br /><em>THAT SCALE</em></h2>
            <p className="sec-desc">Six design disciplines that transform brand strategy into a cohesive visual language your entire organization can deploy.</p>
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
            <div className="sec-label">Engagement Types</div>
            <h2 className="sec-title">DESIGN FOR<br /><em>EVERY NEED</em></h2>
            <p className="sec-desc">From inaugural identities to enterprise refreshes — visual design calibrated to your brand maturity and launch timeline.</p>
          </div>
          <div className="brd-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="brd-use-card">
                <div className="brd-use-num">{u.num}</div>
                <div>
                  <h3 className="brd-use-title">{u.title}</h3>
                  <p className="brd-use-desc">{u.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brd-sec brd-sec--cream">
        <div className="con">
          <div className="brd-sec-hd reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM CONCEPT TO<br /><em>GUIDELINES IN 5 STEPS</em></h2>
            <p className="sec-desc">A collaborative design process with structured review rounds — creative excellence without endless revision cycles.</p>
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
            <div className="sec-label">Scope</div>
            <h2 className="sec-title">FULL VISUAL<br /><em>IDENTITY DELIVERY</em></h2>
            <p className="sec-desc">Every asset and specification your team needs to launch, scale, and govern a world-class visual identity.</p>
          </div>
          <div className="brd-scope-grid">{scope.map((t) => <span key={t} className="brd-scope-pill">{t}</span>)}</div>
        </div>
      </section>

      <BrandingFaq id="brand-design-faq" title={<>Brand Design<br /><em>QUESTIONS ANSWERED</em></>} desc="What marketing leaders and founders ask before investing in professional brand design." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BrandingCta eyebrow="Design With Purpose" title={<>YOUR BRAND SHOULD<br /><em>LOOK UNFORGETTABLE</em>.</>} sub="Book a complimentary brand design consultation and see how a disciplined identity system elevates every touchpoint you own." btnText="Start Your Brand Design" note="FREE DESIGN CONSULT · SENIOR DESIGNERS · NO COMMITMENT" />
    </div>
  );
}
