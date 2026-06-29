import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '3.2x', lbl: 'AI Citation Rate Lift' },
  { val: '47%', lbl: 'Featured Answer Share' },
  { val: '61%', lbl: 'Zero-Click Visibility' },
  { val: '28d', lbl: 'Avg. Index-to-Rank' },
];

const solutions = [
  { num: '01', title: 'Entity & Knowledge Graph Optimization', desc: 'Structured entity mapping, sameAs schema, and authoritative citations that teach AI models who you are and, more importantly, why you deserve to be cited.' },
  { num: '02', title: 'Conversational Content Architecture', desc: 'Question-led content hierarchies, FAQ clusters, and direct-answer formatting engineered specifically for Google SGE, ChatGPT, and Perplexity retrieval.' },
  { num: '03', title: 'Citation & Source Authority Building', desc: 'Digital PR, expert bylines, and third-party mentions that increase the probability of being referenced in AI-generated responses.' },
  { num: '04', title: 'Schema & Structured Data Layer', desc: 'Organization, Product, HowTo, and Speakable markup that gives answer engines machine-readable context for accurate attribution.' },
  { num: '05', title: 'Brand Mention Monitoring', desc: 'Tracking AI platform citations, sentiment, and competitor share-of-voice across ChatGPT, Perplexity, Gemini, and Bing Copilot.' },
  { num: '06', title: 'Answer Engine Analytics', desc: 'Custom dashboards measuring AI visibility, citation frequency, prompt coverage, and the conversion paths that originate from generative search.' },
];

const useCases = [
  { icon: 'B2B', title: 'SaaS & Technology', desc: 'Own product comparison queries and feature explanations that AI assistants cite when buyers evaluate software alternatives.' },
  { icon: 'MED', title: 'Healthcare & Wellness', desc: 'E-E-A-T optimized medical content that surfaces in AI health queries while still maintaining YMYL compliance and trust signals.' },
  { icon: 'FIN', title: 'Financial Services', desc: 'Authoritative answers for financial planning, insurance, and investment questions that AI platforms reference with proper attribution.' },
  { icon: 'RET', title: 'E-Commerce & Retail', desc: 'Product entity optimization and review schema that puts your catalog directly into AI shopping recommendations and comparison answers.' },
];

const timeline = [
  { num: '01', title: 'AI Visibility Audit', desc: 'Benchmark current citations across ChatGPT, Perplexity, Google SGE, and Gemini, then map the gaps against competitors.' },
  { num: '02', title: 'Entity & Content Strategy', desc: 'Define target prompts, build entity profiles, and architect question-led content clusters built for answer retrieval.' },
  { num: '03', title: 'Technical Foundation', desc: 'Deploy schema markup, structured data, and crawl optimization so AI crawlers can actually parse and attribute your content correctly.' },
  { num: '04', title: 'Authority & Citations', desc: 'Execute digital PR, expert content, and third-party mention campaigns that build genuine source credibility over time.' },
  { num: '05', title: 'Monitor & Iterate', desc: 'Track AI citation share, refine content based on prompt coverage data, and expand into emerging answer engines as they appear.' },
];

const channels = ['Google SGE', 'ChatGPT', 'Perplexity', 'Gemini', 'Bing Copilot', 'Claude', 'Schema.org', 'Knowledge Graph', 'Digital PR', 'E-E-A-T', 'FAQ Schema', 'Speakable'];

const faqs = [
  { q: 'What is Answer Engine Optimization (AEO)?', a: 'AEO is the practice of structuring content so it\'s more likely to be selected as a direct answer by search engines, voice assistants, and AI tools like ChatGPT or Gemini.' },
  { q: 'How is AEO different from traditional SEO?', a: 'Traditional SEO targets ranking positions on a results page, while AEO specifically targets being the answer itself, whether that\'s a featured snippet or an AI-generated response.' },
  { q: 'Why does AEO matter now more than it did a few years ago?', a: 'The rise of AI chat tools and voice search means more people get answers without ever clicking through to a website, making direct-answer optimization increasingly valuable.' },
  { q: 'What kind of content performs best for AEO?', a: 'Clear, concise answers to specific questions, often formatted with headers, lists, and direct language that AI systems can easily extract and summarize.' },
  { q: 'Can a business do both SEO and AEO at the same time?', a: 'Yes, and most successful strategies do. Strong technical SEO and well-structured content naturally support both traditional rankings and AI-driven answer visibility.' },
];

export default function AeoServices() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">AEO Services | LogicWorks — Answer Engine Optimization</title>
        <meta head-key="description" name="description" content="Dominate AI-generated search results on Google SGE, ChatGPT, Perplexity, and Bing Copilot, so your brand gets cited, not buried, when buyers actually ask questions." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/aeo-services" />
      </Head>

      <section className="mkt-hero" aria-labelledby="aeo-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Search Marketing</div>
          <h1 className="mkt-hero-title" id="aeo-title">Answer Engine<br /><span>OPTIMIZATION</span></h1>
          <p className="mkt-hero-sub">Dominate AI-generated search results on Google SGE, ChatGPT, Perplexity, and Bing Copilot, so your brand gets cited, not buried, when buyers actually ask questions.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your AEO Audit{arrowIcon}</Link>
            <Link href="/technical-seo" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Technical SEO</Link>
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
              <div className="sec-label">The Shift</div>
              <h2 className="sec-title">SEARCH IS NOW<br /><em>AI-GENERATED</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Over 40% of searches now end without a single click, since users increasingly get synthesized answers straight from AI. If your brand isn&apos;t cited in those responses, in other words, you&apos;re effectively invisible to a growing segment of buyers.</p>
              <div className="mkt-check-list">
                {['Entity optimization for AI knowledge graphs', 'Conversational content for answer retrieval', 'Schema markup for machine-readable attribution', 'Citation authority through digital PR'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Google SGE', 'ChatGPT', 'Perplexity', 'Entity SEO', 'Schema'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Outcomes</div>
              {[
                { icon: '🤖', title: 'AI Citation Share', desc: 'Your brand is referenced in generative answers for high-intent commercial queries' },
                { icon: '◎', title: 'Zero-Click Visibility', desc: 'Brand presence is maintained even when users never visit a traditional results page' },
                { icon: '↑', title: 'Source Authority', desc: 'Third-party mentions and entity signals that AI models trust and cite' },
                { icon: '📊', title: 'Prompt Coverage', desc: 'Systematic visibility across the actual questions your buyers ask AI assistants' },
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
            <h2 className="sec-title">AEO THAT<br /><em>GETS YOU CITED</em></h2>
            <p className="sec-desc">Six core disciplines position your brand as the authoritative source that AI answer engines actually reference.</p>
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
            <h2 className="sec-title">AEO FOR<br /><em>EVERY VERTICAL</em></h2>
            <p className="sec-desc">From SaaS product comparisons to healthcare queries, answer engine optimization gets tailored to the industry it&apos;s serving.</p>
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
            <h2 className="sec-title">VISIBLE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From an AI visibility audit to ongoing citation monitoring, a structured AEO program with genuinely measurable milestones.</p>
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
            <div className="sec-label">Platforms</div>
            <h2 className="sec-title">OPTIMIZED FOR<br /><em>EVERY ENGINE</em></h2>
            <p className="sec-desc">Answer engines, schema standards, and authority channels — all covered in one unified AEO strategy.</p>
          </div>
          <div className="mkt-channel-grid">{channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}</div>
        </div>
      </section>

      <MarketingFaq id="aeo-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Own the AI Answer" title={<>GET CITED BEFORE<br /><em>YOUR COMPETITORS DO</em>.</>} sub="Book a free AEO audit and see exactly where your brand appears, and disappears, in AI-generated search." btnText="Start Your AEO Audit" note="" />
    </div>
  );
}
