import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useBrandingPage, checkIcon, arrowIcon, BrandingFaq, BrandingCta } from './shared';

const metrics = [
  { val: '340+', lbl: 'Brand Strategies Delivered' },
  { val: '2.4x', lbl: 'Avg. Message Recall Lift' },
  { val: '87%', lbl: 'Stakeholder Alignment Score' },
  { val: '6wk', lbl: 'Strategy-to-Launch Cycle' },
];

const pillars = [
  { icon: 'POS', title: 'Market Positioning', desc: 'Category definition, competitive frame-of-reference, and perceptual mapping that carves defensible territory competitors cannot occupy.' },
  { icon: 'MSG', title: 'Messaging Architecture', desc: 'Brand narrative, value propositions, proof points, and message hierarchies that sales, marketing, and leadership speak in one voice.' },
  { icon: 'AUD', title: 'Audience Segmentation', desc: 'ICP development, persona research, jobs-to-be-done mapping, and buying committee analysis grounded in qualitative and quantitative insight.' },
  { icon: 'DIFF', title: 'Competitive Differentiation', desc: 'White-space analysis, reason-to-believe development, and defensible claims that withstand scrutiny from buyers and analysts alike.' },
  { icon: 'NAM', title: 'Naming & Verbal Identity', desc: 'Company, product, and campaign naming systems with trademark screening, linguistic testing, and URL availability validation.' },
  { icon: 'GOV', title: 'Brand Governance', desc: 'Brand books, approval workflows, and training programs that protect strategic clarity as your organization scales.' },
];

const useCases = [
  { num: '01', title: 'Rebrands & Repositioning', desc: 'Full strategic overhaul for companies outgrowing their origin story — M&A integration, market expansion, or category evolution.' },
  { num: '02', title: 'Startup & Scale-Up Positioning', desc: 'Foundational brand strategy for ventures entering crowded markets — clarity that accelerates fundraising, hiring, and GTM.' },
  { num: '03', title: 'Product & Portfolio Architecture', desc: 'Master brand and sub-brand hierarchy for multi-product companies — naming systems, endorsement models, and extension rules.' },
  { num: '04', title: 'Employer & Culture Branding', desc: 'EVP development and internal brand alignment that attracts talent and unifies culture with external market promise.' },
];

const timeline = [
  { num: '01', title: 'Discovery & Audit', desc: 'Stakeholder interviews, competitive landscape analysis, customer research synthesis, and brand perception baseline.' },
  { num: '02', title: 'Insight & Territory', desc: 'Strategic territories explored, white-space validated, and positioning territories pressure-tested with target audiences.' },
  { num: '03', title: 'Positioning & Narrative', desc: 'Positioning statement, brand story, messaging architecture, and proof-point library finalized and aligned.' },
  { num: '04', title: 'Expression Framework', desc: 'Verbal identity guidelines, tone of voice, naming recommendations, and channel-specific messaging playbooks.' },
  { num: '05', title: 'Activation & Handoff', desc: 'Brand book delivery, team workshops, governance setup, and seamless transition to design and marketing execution.' },
];

const scope = ['Positioning Statements', 'Brand Narrative', 'Messaging Architecture', 'Value Propositions', 'Persona Development', 'Competitive Analysis', 'Naming Systems', 'Tone of Voice', 'EVP Development', 'Brand Workshops', 'Stakeholder Alignment', 'Brand Governance'];

const faqs = [
  { q: 'How is brand strategy different from brand design?', a: 'Strategy defines who you are, who you serve, and why you win — positioning, messaging, and differentiation. Design expresses that strategy visually. We deliver both, but strategy must come first; design without strategy is decoration.' },
  { q: 'How long does a branding strategy engagement take?', a: 'Focused positioning and messaging for a single product: 4–6 weeks. Full enterprise brand strategy with research and governance: 8–12 weeks. Rebrands with stakeholder alignment across divisions: 12–16 weeks.' },
  { q: 'Do you conduct customer research or rely on our data?', a: 'Both. We synthesize your existing research and supplement with targeted qualitative interviews, competitive audits, and perception testing when gaps exist. Research depth scales to engagement scope.' },
  { q: 'Will our sales and marketing teams actually use the deliverables?', a: 'Yes — because they are involved in the process. We run working sessions with GTM leaders, build messaging playbooks in their language, and deliver tools (battlecards, pitch frameworks) built for daily use, not shelf-ware.' },
  { q: 'Can you help if we already have a logo but lack clear positioning?', a: 'Absolutely. Many clients come to us post-design with a visual identity that lacks strategic backbone. We build the positioning and messaging layer that makes existing design work harder — or inform a thoughtful refresh.' },
];

export default function BrandingStrategy() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useBrandingPage(pageRef);

  return (
    <div ref={pageRef} className="brd-page">
      <Head>
        <title head-key="title">Branding Strategy | LogicWorks — Positioning & Messaging Architecture</title>
        <meta head-key="description" name="description" content="LogicWorks branding strategy services deliver market positioning, messaging architecture, competitive differentiation, and brand governance that make you the only logical choice." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/branding-strategy" />
      </Head>

      <section className="brd-hero" aria-labelledby="branding-strategy-title">
        <div className="brd-hero-grain" aria-hidden="true" />
        <div className="brd-hero-glow" aria-hidden="true" />
        <div className="brd-hero-line" aria-hidden="true" />
        <div className="con brd-hero-inner">
          <div className="brd-eyebrow">Branding</div>
          <h1 className="brd-hero-title" id="branding-strategy-title">Branding<br /><span>Strategy</span></h1>
          <p className="brd-hero-sub">Positioning, messaging architecture, and competitive differentiation that transforms how markets perceive you — and gives every team a single, defensible story to tell.</p>
          <div className="brd-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Brand Strategy{arrowIcon}</Link>
            <Link href="/brand-design" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Brand Design</Link>
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
            <blockquote>Brands that win are not the loudest — they are the most clearly understood. Strategy is the discipline of making your value impossible to confuse with anyone else&apos;s.</blockquote>
          </div>
          <div className="brd-split">
            <div className="reveal-l">
              <div className="sec-label">Strategic Foundation</div>
              <h2 className="sec-title">POSITION BEFORE<br /><em>YOU PERSUADE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Marketing spend amplifies whatever story you already tell. Without rigorous positioning and messaging architecture, every campaign competes against itself — and competitors fill the clarity gap you leave open.</p>
              <div className="brd-quote-block">
                <p>&ldquo;We don&apos;t decorate brands — we define the strategic territory they own, then build the language every stakeholder uses to defend it.&rdquo;</p>
              </div>
              <div className="brd-check-list">
                {['Research-backed positioning, not creative guesswork', 'Messaging systems sales and marketing adopt on day one', 'Competitive differentiation that survives RFP scrutiny', 'Governance that protects brand equity at scale'].map((item) => (
                  <div key={item} className="brd-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="brd-tag-row">{['Positioning', 'Messaging', 'Personas', 'Naming', 'EVP', 'Governance'].map((t) => <span key={t} className="brd-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r brd-value-panel">
              <div className="brd-value-label">Strategy Outcomes</div>
              {[
                { icon: '◎', title: 'Category Clarity', desc: 'A defined market position that frames every conversation, pitch, and campaign.' },
                { icon: '◆', title: 'Unified Messaging', desc: 'Architecture that aligns executives, sales, product, and marketing in one voice.' },
                { icon: '▣', title: 'Defensible Differentiation', desc: 'Claims competitors cannot copy because they are rooted in genuine capability.' },
                { icon: '◇', title: 'Scalable Governance', desc: 'Brand books and workflows that maintain consistency through growth and change.' },
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
            <h2 className="sec-title">STRATEGY THAT<br /><em>SHAPES MARKETS</em></h2>
            <p className="sec-desc">Six strategic disciplines that transform brand ambiguity into competitive advantage your entire organization can execute.</p>
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
            <h2 className="sec-title">STRATEGY FOR<br /><em>EVERY STAGE</em></h2>
            <p className="sec-desc">From first-time positioning to enterprise rebrands — brand strategy calibrated to your growth moment.</p>
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
            <h2 className="sec-title">FROM INSIGHT TO<br /><em>ACTIVATION IN 5 STEPS</em></h2>
            <p className="sec-desc">A rigorous, collaborative methodology that produces strategy your teams implement — not decks that gather dust.</p>
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
            <h2 className="sec-title">EVERY ELEMENT<br /><em>OF BRAND STRATEGY</em></h2>
            <p className="sec-desc">Comprehensive strategic deliverables — from positioning foundations to governance systems that protect your investment.</p>
          </div>
          <div className="brd-scope-grid">{scope.map((t) => <span key={t} className="brd-scope-pill">{t}</span>)}</div>
        </div>
      </section>

      <BrandingFaq id="branding-strategy-faq" title={<>Branding Strategy<br /><em>QUESTIONS ANSWERED</em></>} desc="What founders, CMOs, and brand leaders ask before investing in strategic brand development." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BrandingCta eyebrow="Own Your Category" title={<>CLARITY IS YOUR<br /><em>COMPETITIVE EDGE</em>.</>} sub="Book a complimentary brand strategy session and leave with a clear view of your positioning opportunity and messaging gaps." btnText="Start Your Brand Strategy" note="FREE STRATEGY SESSION · RESEARCH-BACKED · NO COMMITMENT" />
    </div>
  );
}
