import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useBrandingPage, checkIcon, arrowIcon, BrandingFaq, BrandingCta } from './shared';

const metrics = [
  { val: '100+', lbl: 'Pages Per Guide' },
  { val: '94%', lbl: 'Brand Consistency Lift' },
  { val: '12', lbl: 'Application Categories' },
  { val: '∞', lbl: 'Team Self-Sufficiency' },
];

const pillars = [
  { icon: 'LOGO', title: 'Logo Usage Rules', desc: 'Clear-space requirements, minimum sizes, approved configurations, and do-not examples that prevent logo misuse across every channel.' },
  { icon: 'CLR', title: 'Color System', desc: 'Primary, secondary, and accent palettes with HEX, RGB, CMYK, and Pantone values — plus accessibility contrast ratios for digital compliance.' },
  { icon: 'TYPE', title: 'Typography Standards', desc: 'Font families, weight hierarchy, sizing scales, line-height rules, and pairing guidelines for headlines, body, captions, and data.' },
  { icon: 'IMG', title: 'Imagery & Photography', desc: 'Art direction principles, photo treatment styles, illustration guidelines, and iconography standards that unify visual communication.' },
  { icon: 'VOX', title: 'Voice & Tone', desc: 'Brand personality traits, messaging pillars, vocabulary preferences, and tone modulation guides for every audience and context.' },
  { icon: 'APP', title: 'Application Templates', desc: 'Ready-to-use templates for business cards, letterheads, presentations, social media, email signatures, and digital assets.' },
];

const useCases = [
  { num: '01', title: 'Growing Teams & Franchises', desc: 'Onboard new hires and franchise partners with a single source of truth — everyone creates on-brand materials from day one.' },
  { num: '02', title: 'Multi-Channel Marketing', desc: 'Consistent brand execution across print, digital, social, packaging, and events — no more off-brand collateral slipping through.' },
  { num: '03', title: 'Agency & Vendor Handoffs', desc: 'External partners receive comprehensive specs so every deliverable matches your standards without endless revision cycles.' },
  { num: '04', title: 'Rebrand Rollouts', desc: 'Structured migration from old to new identity with phased implementation guides, asset libraries, and team training materials.' },
];

const timeline = [
  { num: '01', title: 'Brand Audit', desc: 'Inventory existing brand assets, document current inconsistencies, and identify the gaps your guidelines must address.' },
  { num: '02', title: 'System Documentation', desc: 'Codify logo rules, color values, typography scales, and visual language into structured, searchable sections.' },
  { num: '03', title: 'Application Guides', desc: 'Create do and do-not examples for every touchpoint — digital, print, environmental, and merchandise applications.' },
  { num: '04', title: 'Template Library', desc: 'Build production-ready templates for the most common brand applications your team uses daily.' },
  { num: '05', title: 'Launch & Training', desc: 'Deliver the guidelines document, conduct team walkthroughs, and establish governance for ongoing brand compliance.' },
];

const scope = ['Logo Clear-Space Rules', 'Color Palette Specs', 'Typography Hierarchy', 'Photography Style', 'Iconography Library', 'Voice & Tone Guide', 'Social Media Templates', 'Presentation Decks', 'Business Stationery', 'Email Signatures', 'Print Specifications', 'Digital Asset Library'];

const faqs = [
  { q: 'What format are brand guidelines delivered in?', a: 'We deliver a comprehensive PDF brand book (typically 80–150 pages), plus a digital asset library with organized folders, template files, and an optional online brand portal for team access.' },
  { q: 'Can you create guidelines for an existing brand?', a: 'Absolutely. We audit your current brand usage, document what exists, identify inconsistencies, and codify everything into a professional standards document — even if the logo predates our involvement.' },
  { q: 'Do guidelines include templates our team can use?', a: 'Yes. Every guidelines package includes production-ready templates for business cards, letterheads, presentations, social media, and email signatures — so your team can create on-brand materials immediately.' },
  { q: 'How do guidelines help with external agencies?', a: 'Guidelines eliminate ambiguity. When you hand a 100-page brand book to an agency, they know exactly how to execute — reducing revision cycles, protecting brand integrity, and saving budget.' },
  { q: 'How long does a brand guidelines project take?', a: 'Standalone guidelines for an existing identity: 3–4 weeks. Comprehensive guidelines bundled with a new brand design project: delivered alongside the identity system, typically week 6–8 of the engagement.' },
];

export default function BrandGuidelines() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useBrandingPage(pageRef);

  return (
    <div ref={pageRef} className="brd-page">
      <Head>
        <title head-key="title">Brand Guidelines | LogicWorks — Comprehensive Brand Standards</title>
        <meta head-key="description" name="description" content="LogicWorks brand guidelines deliver comprehensive standards documents — logo rules, color systems, typography, templates, and voice guides that ensure consistency across every touchpoint." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/brand-guidelines" />
      </Head>

      <section className="brd-hero" aria-labelledby="brand-guidelines-title">
        <div className="brd-hero-grain" aria-hidden="true" />
        <div className="brd-hero-glow" aria-hidden="true" />
        <div className="brd-hero-line" aria-hidden="true" />
        <div className="con brd-hero-inner">
          <div className="brd-eyebrow">Branding</div>
          <h1 className="brd-hero-title" id="brand-guidelines-title">Brand<br /><span>GUIDELINES</span></h1>
          <p className="brd-hero-sub">Comprehensive brand standards documents that ensure consistency across every touchpoint, forever — so your team, partners, and vendors always get it right.</p>
          <div className="brd-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Build Your Brand Book{arrowIcon}</Link>
            <Link href="/logo-design" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Logo Design</Link>
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
            <blockquote>Without guidelines, every team member becomes a brand designer — and inconsistency becomes your most visible product.</blockquote>
          </div>
          <div className="brd-split">
            <div className="reveal-l">
              <div className="sec-label">The Problem</div>
              <h2 className="sec-title">INCONSISTENCY KILLS<br /><em>BRAND TRUST</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>When every designer, marketer, and vendor interprets your brand differently, the result is visual chaos. Brand guidelines transform subjective taste into objective standards your entire organization can follow.</p>
              <div className="brd-quote-block"><p>A brand book is the constitution of your visual identity — non-negotiable, comprehensive, and built to outlast any single team member.</p></div>
              <div className="brd-check-list">
                {['Logo, color, and typography rules with visual examples', 'Do-and-don\'t guides for every major application', 'Production-ready templates for immediate team use', 'Voice, tone, and messaging standards documented'].map((item) => (
                  <div key={item} className="brd-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="brd-tag-row">{['Logo Rules', 'Color Specs', 'Typography', 'Templates', 'Voice Guide'].map((t) => <span key={t} className="brd-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r brd-value-panel">
              <div className="brd-value-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '94% Consistency Lift', desc: 'Teams with guidelines produce on-brand work without designer oversight on every piece.' },
                { icon: '⚡', title: 'Faster Production', desc: 'Templates and specs eliminate guesswork — collateral ships in hours, not weeks.' },
                { icon: '🛡', title: 'Brand Protection', desc: 'Clear rules prevent logo misuse, off-palette colors, and off-brand messaging.' },
                { icon: '📖', title: 'Single Source of Truth', desc: 'One document every team member, agency, and vendor references — forever.' },
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
            <h2 className="sec-title">GUIDELINES THAT<br /><em>COVER EVERYTHING</em></h2>
            <p className="sec-desc">Six core sections that transform brand chaos into systematic, scalable consistency.</p>
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
            <h2 className="sec-title">GUIDELINES FOR<br /><em>EVERY SCENARIO</em></h2>
            <p className="sec-desc">Whether scaling a team, rolling out a rebrand, or managing external partners — guidelines that fit your reality.</p>
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
            <h2 className="sec-title">DOCUMENTED IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From brand audit to team training — a structured approach to building guidelines that actually get used.</p>
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
            <div className="sec-label">What's Included</div>
            <h2 className="sec-title">YOUR COMPLETE<br /><em>BRAND BOOK</em></h2>
            <p className="sec-desc">Every section, template, and specification your team needs for flawless brand execution.</p>
          </div>
          <div className="brd-scope-grid">{scope.map((s) => <span key={s} className="brd-scope-pill">{s}</span>)}</div>
        </div>
      </section>

      <BrandingFaq id="brand-guidelines-faq" title={<>Brand Guidelines<br /><em>QUESTIONS ANSWERED</em></>} desc="What marketing leaders and operations teams ask before investing in professional brand standards." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BrandingCta eyebrow="Protect Your Brand" title={<>CONSISTENCY IS NOT<br /><em>OPTIONAL</em>.</>} sub="Book a free brand audit and discover how comprehensive guidelines can eliminate inconsistency and accelerate your team's output." btnText="Build Your Brand Book" note="FREE BRAND AUDIT · SAMPLE GUIDELINES · NO COMMITMENT" />
    </div>
  );
}
