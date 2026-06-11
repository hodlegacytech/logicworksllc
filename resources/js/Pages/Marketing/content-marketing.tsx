import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '312%', lbl: 'Organic Traffic Growth' },
  { val: '67%', lbl: 'Lower Cost Per Lead' },
  { val: '3.4x', lbl: 'Content ROI Average' },
  { val: '150+', lbl: 'Pieces Published Monthly' },
];

const solutions = [
  { title: 'Content Strategy & Planning', desc: 'Audience research, keyword mapping, content pillar development, and editorial calendars — every piece tied to search intent and business goals, not random blog posts.' },
  { title: 'SEO Blog Writing', desc: 'Long-form, keyword-optimized articles that rank on Google and answer real buyer questions — structured with headers, internal links, schema, and E-E-A-T signals search engines reward.' },
  { title: 'Lead Magnets & Gated Content', desc: 'Whitepapers, ebooks, checklists, and templates designed to capture emails — high-value assets that position your brand as the authority and fuel nurture sequences.' },
  { title: 'Video Scripts & Storyboards', desc: 'YouTube scripts, explainer video copy, and social video storyboards — content engineered for watch time, retention, and conversion CTAs at the right moment.' },
  { title: 'Email Newsletter Content', desc: 'Weekly or monthly newsletters that subscribers actually open — curated insights, product updates, and thought leadership that keeps your brand top-of-mind between purchases.' },
  { title: 'Content Distribution & Repurposing', desc: 'One pillar piece becomes ten assets — blog to social snippets, email excerpts, infographic data, and podcast talking points — maximizing ROI on every content investment.' },
];

const useCases = [
  { icon: 'SaaS', title: 'SaaS & Technology', desc: 'Product-led content, comparison guides, integration tutorials, and developer docs that drive organic sign-ups and reduce support ticket volume.' },
  { icon: 'FIN', title: 'Finance & Insurance', desc: 'Compliance-aware educational content, calculators, and guides that build trust and generate qualified leads in heavily regulated industries.' },
  { icon: 'HLTH', title: 'Healthcare & Wellness', desc: 'Patient education articles, provider profiles, and condition-specific content that ranks locally and establishes clinical authority.' },
  { icon: 'MFG', title: 'Manufacturing & B2B', desc: 'Technical whitepapers, case studies, spec sheets, and industry reports that support long sales cycles and complex buyer committees.' },
];

const process = [
  { num: '01', title: 'Research & Audit', desc: 'Keyword research, competitor content analysis, gap identification, and audience intent mapping.' },
  { num: '02', title: 'Strategy & Calendar', desc: 'Content pillars, editorial calendar, format mix, and distribution plan aligned to funnel stages.' },
  { num: '03', title: 'Create & Optimize', desc: 'Writing, editing, SEO optimization, visual assets, and internal linking — publication-ready quality.' },
  { num: '04', title: 'Publish & Distribute', desc: 'CMS publishing, social promotion, email inclusion, and syndication to relevant channels.' },
  { num: '05', title: 'Measure & Refresh', desc: 'Traffic, rankings, and conversion tracking — content refreshes and updates to maintain performance.' },
];

const channels = ['Blog Articles', 'Whitepapers', 'Case Studies', 'Email Newsletters', 'Video Scripts', 'Infographics', 'Podcast Show Notes', 'Landing Page Copy', 'Social Snippets', 'Press Releases'];

const faqs = [
  { q: 'How is content marketing different from SEO?', a: 'SEO focuses on ranking in search engines. Content marketing is broader — it includes SEO content but also email newsletters, whitepapers, video scripts, and social content. We integrate both: every piece is strategically written and search-optimized.' },
  { q: 'How long before content drives organic traffic?', a: 'SEO content typically takes 3–6 months to rank and compound. Pillar pages and competitive keywords may take longer. We track early signals — impressions, indexation, and long-tail rankings — while building toward sustained traffic growth.' },
  { q: 'Do you write content in our brand voice?', a: 'Yes. We develop voice guidelines during onboarding and every piece goes through your approval process. We study your existing content, sales materials, and customer language to match tone, terminology, and personality.' },
  { q: 'What types of content do you produce?', a: 'Blog posts, whitepapers, ebooks, case studies, email newsletters, video scripts, landing page copy, social snippets, and press releases. We recommend formats based on your audience, funnel stage, and distribution channels.' },
  { q: 'How do you measure content marketing ROI?', a: 'We track organic traffic, keyword rankings, time on page, lead form submissions, content-attributed pipeline, and assisted conversions. Monthly reports connect content performance to business outcomes — not just pageviews.' },
];

export default function ContentMarketing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Helmet>
        <title>Content Marketing | LogicWorks — SEO Content That Ranks & Converts</title>
        <meta name="description" content="LogicWorks delivers content marketing — SEO blog writing, whitepapers, video scripts, and editorial strategy that drives organic traffic and generates qualified leads." />
        <link rel="canonical" href="https://logicworks.com/content-marketing" />
      </Helmet>

      <section className="mkt-hero" aria-labelledby="cm-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Social Media</div>
          <h1 className="mkt-hero-title" id="cm-title">CONTENT<br /><span>MARKETING</span></h1>
          <p className="mkt-hero-sub">SEO-optimized content that ranks, resonates, and converts — blog posts, whitepapers, video scripts, and editorial strategy that compounds into organic growth.</p>
          <div className="mkt-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Content Strategy{arrowIcon}</Link>
            <Link to="/seo-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>SEO Services</Link>
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
              <div className="sec-label">The Opportunity</div>
              <h2 className="sec-title">CONTENT COMPOUNDS.<br /><em>ADS DO NOT</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Paid ads stop working the moment you stop paying. Content marketing builds an asset library that ranks, generates leads, and establishes authority for years. Every article, guide, and whitepaper is a permanent salesperson working 24/7 — attracting buyers who are actively searching for what you sell.</p>
              <div className="mkt-highlight-box"><p>Companies with active content marketing strategies generate 3x more leads at 62% lower cost than those relying solely on outbound and paid channels.</p></div>
              <div className="mkt-check-list">
                {['Keyword-driven content strategy', 'SEO-optimized long-form writing', 'Lead magnets and gated assets', 'Content distribution and repurposing'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Blog SEO', 'Whitepapers', 'Video Scripts', 'Newsletters', 'Case Studies'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Results</div>
              {[
                { icon: '↑', title: '312% Traffic Growth', desc: 'Strategic content compounds into sustained organic traffic increases.' },
                { icon: '↓', title: '67% Lower CPL', desc: 'Content-generated leads cost far less than paid acquisition.' },
                { icon: '◎', title: '3.4x Content ROI', desc: 'Every piece continues generating value long after publication.' },
                { icon: '⏱', title: 'Authority Building', desc: 'Consistent publishing establishes your brand as the industry expert.' },
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
            <h2 className="sec-title">CONTENT THAT<br /><em>RANKS AND CONVERTS</em></h2>
            <p className="sec-desc">Six content marketing capabilities — from strategy and SEO writing to distribution and performance tracking.</p>
          </div>
          <div className="mkt-solution-grid">
            {solutions.map((s, i) => (
              <article key={s.title} className="mkt-solution-card">
                <div className="mkt-solution-num">{String(i + 1).padStart(2, '0')}</div>
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
            <h2 className="sec-title">CONTENT FOR<br /><em>EVERY INDUSTRY</em></h2>
            <p className="sec-desc">SaaS, finance, healthcare, and manufacturing — industry-specific content strategies that drive qualified organic leads.</p>
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
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM STRATEGY TO<br /><em>COMPOUNDING GROWTH</em></h2>
            <p className="sec-desc">A proven five-phase content marketing process — research, creation, distribution, and continuous optimization.</p>
          </div>
          <div className="mkt-process-track">
            {process.map((s) => (
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
            <div className="sec-label">Content Types</div>
            <h2 className="sec-title">EVERY FORMAT<br /><em>YOUR FUNNEL NEEDS</em></h2>
            <p className="sec-desc">From top-of-funnel blog posts to bottom-of-funnel case studies — full-spectrum content production.</p>
          </div>
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq id="cm-faq" title={<>Content Marketing<br /><em>QUESTIONS ANSWERED</em></>} desc="What marketing leaders ask before investing in a content marketing program." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Content That Works While You Sleep" title={<>RANK ORGANICALLY.<br /><em>CONVERT CONSISTENTLY</em>.</>} sub="Book a free content audit and get a keyword-driven editorial strategy tailored to your market." btnText="Start Your Content Strategy" note="FREE CONTENT AUDIT · KEYWORD STRATEGY · NO COMMITMENT" />
    </div>
  );
}
