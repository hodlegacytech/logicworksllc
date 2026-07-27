import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '312%', lbl: 'Organic Traffic Growth' },
  { val: '67%', lbl: 'Lower Cost Per Lead' },
  { val: '3.4x', lbl: 'Content ROI Average' },
  { val: '150+', lbl: 'Pieces Published Monthly' },
];

const solutions = [
  { title: 'Content Strategy & Planning', desc: 'Audience research, keyword mapping, content pillar development, and editorial calendars, with every piece tied to search intent and business goals rather than published at random.' },
  { title: 'SEO Blog Writing', desc: 'Long-form, keyword-optimized articles that rank on Google and answer real buyer questions, structured with headers, internal links, schema, and the E-E-A-T signals search engines actually reward.' },
  { title: 'Lead Magnets & Gated Content', desc: 'Whitepapers, ebooks, checklists, and templates designed specifically to capture emails, positioning your brand as the authority while fueling nurture sequences behind the scenes.' },
  { title: 'Video Scripts & Storyboards', desc: 'YouTube scripts, explainer video copy, and social video storyboards, engineered for watch time, retention, and a conversion CTA placed at exactly the right moment.' },
  { title: 'Email Newsletter Content', desc: 'Weekly or monthly newsletters that subscribers genuinely open, built from curated insights, product updates, and thought leadership that keep your brand top of mind between purchases.' },
  { title: 'Content Distribution & Repurposing', desc: 'One pillar piece becomes ten assets: blog content turns into social snippets, email excerpts, infographic data, and podcast talking points, maximizing return on every piece of content produced.' },
];

const useCases = [
  { icon: 'SaaS', title: 'SaaS & Technology', desc: 'Product-led content, comparison guides, integration tutorials, and developer docs that drive organic sign-ups while reducing support ticket volume at the same time.' },
  { icon: 'FIN', title: 'Finance & Insurance', desc: 'Compliance-aware educational content, calculators, and guides that build trust and generate qualified leads even within heavily regulated industries.' },
  { icon: 'HLTH', title: 'Healthcare & Wellness', desc: 'Patient education articles, provider profiles, and condition-specific content that rank locally while establishing genuine clinical authority.' },
  { icon: 'MFG', title: 'Manufacturing & B2B', desc: 'Technical whitepapers, case studies, spec sheets, and industry reports built to support long sales cycles and complex buyer committees.' },
];

const process = [
  { num: '01', title: 'Research & Audit', desc: 'Keyword research, competitor content analysis, gap identification, and audience intent mapping are settled before a single word is written.' },
  { num: '02', title: 'Strategy & Calendar', desc: 'Content pillars, an editorial calendar, a format mix, and a distribution plan aligned to each stage of the funnel.' },
  { num: '03', title: 'Create & Optimize', desc: 'Writing, editing, SEO optimization, visual assets, and internal linking are all brought to publication-ready quality before anything goes live.' },
  { num: '04', title: 'Publish & Distribute', desc: 'CMS publishing, social promotion, email inclusion, and syndication across relevant channels, since great content still needs a push to be seen.' },
  { num: '05', title: 'Measure & Refresh', desc: 'Traffic, rankings, and conversion tracking inform ongoing content refreshes and updates that keep older pieces performing well into the future.' },
];

const channels = ['Blog Articles', 'Whitepapers', 'Case Studies', 'Email Newsletters', 'Video Scripts', 'Infographics', 'Podcast Show Notes', 'Landing Page Copy', 'Social Snippets', 'Press Releases'];

const faqs = [
  { q: 'What does content marketing services typically include?', a: 'Blog writing, website copy, case studies, email content, and a content calendar strategically aligned to your audience\'s search intent and buying journey.' },
  { q: 'How is a content marketing agency different from hiring a content writer freelancer?', a: 'An agency brings strategy, SEO research, and a full editorial process, while a freelancer typically just produces individual pieces without the broader strategic planning.' },
  { q: 'How often should a content marketing company publish new content?', a: 'Consistency matters more than volume. Most brands see strong results publishing 2 to 4 quality pieces per month rather than daily low-effort content.' },
  { q: 'Does content marketing actually drive measurable business results?', a: 'Yes, particularly over time. Strong content builds organic search rankings, generates leads, and establishes authority, compounding in value the longer it stays live.' },
  { q: 'Can content writer services include technical or industry-specific topics?', a: 'Yes. Most professional content marketing agency teams work with subject matter experts or conduct deep research to write accurately on specialized or technical topics.' },
];

export default function ContentMarketing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Content Marketing Services | SEO Content That Drives Leads</title>
        <meta head-key="description" name="description" content="Grow organic traffic with our content marketing services. We create SEO blogs, whitepapers, and content strategies that rank, convert, and generate leads." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/content-marketing" />
      </Head>

      <section className="mkt-hero" aria-labelledby="cm-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Social Media</div>
          <h1 className="mkt-hero-title" id="cm-title">CONTENT<br /><span>MARKETING</span></h1>
          <p className="mkt-hero-sub">Our content marketing services produce SEO-optimized work that ranks, resonates, and converts, spanning blog posts, whitepapers, video scripts, and editorial strategy that compounds into organic growth over time.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Content Strategy{arrowIcon}</Link>
            <Link href="/seo-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>SEO Services</Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Paid ads stop working the moment you stop paying for them. Content marketing, however, builds an asset library that keeps ranking, generating leads, and establishing authority for years afterward. Every article, guide, and whitepaper effectively becomes a permanent salesperson working around the clock, attracting buyers who are already searching for exactly what you sell.</p>
              <div className="mkt-highlight-box"><p>Companies with active content marketing strategies therefore generate roughly 3 times more leads at 62% lower cost than those relying solely on outbound and paid channels.</p></div>
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
                { icon: '↑', title: 'Traffic Growth', desc: '312% increase through strategic, compounding content' },
                { icon: '↓', title: 'Lower CPL', desc: '67% reduction versus paid acquisition alone' },
                { icon: '◎', title: 'Content ROI', desc: '3.4x, since every piece keeps generating value after publication' },
                { icon: '⏱', title: 'Authority Building', desc: 'Consistent publishing establishes your brand as the industry expert' },
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
            <p className="sec-desc">As a content marketing agency, we organize our work around six capabilities, from strategy and SEO writing through distribution and performance tracking.</p>
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
            <p className="sec-desc">Whether the audience is SaaS buyers, finance professionals, healthcare patients, or manufacturing procurement teams, our content writer services adapt strategy to fit the industry, not the other way around.</p>
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
            <p className="sec-desc">A proven five-phase process covering research, creation, distribution, and continuous optimization.</p>
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

      <MarketingFaq id="cm-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Content That Works While You Sleep" title={<>RANK ORGANICALLY.<br /><em>CONVERT CONSISTENTLY</em>.</>} sub="Book a free content audit and get a keyword-driven editorial strategy tailored to your market." btnText="Start Your Content Strategy" note="" />
    </div>
  );
}
