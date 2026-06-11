import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SEOServices() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.seo-pillar',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.seo-pillars', start: 'top 80%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const pillars = [
    { label: 'Technical SEO', title: 'Foundation That Google Rewards', desc: 'Comprehensive technical audits covering crawlability, indexability, Core Web Vitals, structured data, site architecture, and International SEO. Every technical signal optimized.', tags: ['Core Web Vitals', 'Schema Markup', 'Crawl Optimization', 'Canonical Tags'] },
    { label: 'On-Page SEO', title: 'Content That Ranks & Converts', desc: 'Keyword research using proprietary data, competitor gap analysis, content briefs, on-page optimization, and internal linking strategies that establish topical authority.', tags: ['Keyword Strategy', 'Content Briefs', 'Meta Optimization', 'E-E-A-T'] },
    { label: 'Off-Page SEO', title: 'Authority Built at Scale', desc: 'White-hat link acquisition from domain-authority publications, digital PR campaigns, broken link building, and brand mention monitoring that compounds over time.', tags: ['Link Building', 'Digital PR', 'Brand Authority', 'Local Citations'] },
    { label: 'AEO', title: 'Dominate AI Search Results', desc: 'Answer Engine Optimization positions your brand as the cited source in Google SGE, ChatGPT, Perplexity, and Bing Copilot responses — the most important new search frontier.', tags: ['Google SGE', 'Featured Snippets', 'FAQ Schema', 'Conversational Queries'] },
    { label: 'Local SEO', title: 'Own Your Geographic Market', desc: 'Google Business Profile optimization, local citation building, geo-targeted content, and review strategy that makes you the dominant choice in your city and region.', tags: ['GBP Optimization', 'Local Citations', 'Review Strategy', 'Geo-Content'] },
    { label: 'Reporting', title: 'Transparency You Can Measure', desc: 'Monthly executive dashboards showing keyword rankings, organic traffic, lead attribution, revenue correlation, and competitive benchmarking — zero vanity metrics.', tags: ['Rank Tracking', 'Traffic Attribution', 'ROI Reporting', 'Competitor Analysis'] },
  ];

  return (
    <div ref={pageRef}>
      <Helmet>
        <title>SEO & AEO Services | LogicWorks — Rank #1 on Google & AI Search</title>
        <meta name="description" content="LogicWorks delivers industry-leading SEO and AEO services that rank your business #1 on Google and AI-powered answer engines like ChatGPT and Perplexity." />
        <link rel="canonical" href="https://logicworks.com/seo-services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO & AEO Services",
          "provider": { "@type": "Organization", "name": "LogicWorks" },
          "description": "Comprehensive SEO and Answer Engine Optimization services.",
        })}</script>
      </Helmet>

      <section className="inner-hero" aria-labelledby="seo-title" style={{ background: 'linear-gradient(135deg, #0a0010 0%, #1a0020 50%, #c8192a 100%)' }}>
        <div className="inner-hero-orb" style={{ background: 'radial-gradient(circle,rgba(200,25,42,.2),transparent 70%)' }} aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <span className="inner-hero-label">Search Marketing</span>
          <h1 className="inner-hero-title" id="seo-title">RANK #1.<br />ON EVERY PLATFORM.</h1>
          <p className="inner-hero-sub">Traditional SEO. AEO for AI search. Local SEO for geographic dominance. We cover every surface where your customers are searching — and we make sure they find you first.</p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free SEO Audit<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <Link to="/aeo-services" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Explore AEO →</Link>
          </div>
          {/* Live result ticker */}
          <div style={{ marginTop: '56px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[['287%', 'Avg. Organic Traffic Increase'], ['4.2 Mo', 'Avg. Time to Page 1'], ['500+', 'Keywords Ranked #1'], ['98%', 'Client Satisfaction']].map(([val, lbl]) => (
              <div key={lbl} style={{ padding: '16px 24px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--r-md)', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', color: '#fff', letterSpacing: '.03em' }}>{val}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', marginTop: '4px' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Pillars */}
      <section style={{ background: 'var(--white)', padding: '120px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">Our SEO Methodology</div>
            <h2 className="sec-title">SIX PILLARS. <em>ONE DOMINANT</em><br />SEARCH PRESENCE.</h2>
            <p className="sec-desc">A comprehensive, interconnected SEO strategy that compounds over time and builds lasting competitive advantages.</p>
          </div>
          <div className="seo-pillars" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {pillars.map((p, i) => (
              <div key={p.label} className="seo-pillar" style={{ background: i % 2 === 0 ? '#fff' : 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '36px' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', fontWeight: 600, color: 'var(--red)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '14px' }}>{p.label}</div>
                <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '20px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tags.map((tag) => <span key={tag} style={{ padding: '3px 10px', borderRadius: '100px', background: 'rgba(200,25,42,.06)', color: 'var(--red)', fontFamily: 'var(--ff-mono)', fontSize: '.65rem', fontWeight: 500 }}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Spotlight */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy), #0e1e50)', padding: '120px 0' }}>
        <div className="con">
          <div className="page-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="reveal-l">
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.68rem', color: 'var(--gold-lt)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '14px' }}>New Frontier</div>
              <h2 className="sec-title" style={{ color: '#fff' }}>AEO: SEO FOR THE<br /><em>AI ERA</em></h2>
              <p style={{ fontFamily: 'var(--ff-body)', fontSize: '1rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.75, marginBottom: '28px' }}>
                AI-powered answer engines are reshaping how users discover businesses. Google SGE, ChatGPT, Perplexity, and Bing Copilot now answer millions of queries directly — without users clicking a single link. AEO ensures your brand is the source they cite.
              </p>
              {['Optimize content for featured snippet capture', 'Structured data & schema markup implementation', 'Conversational query targeting & FAQ optimization', 'Authority signals that AI engines prioritize', 'Brand mention monitoring across AI platforms'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'rgba(255,255,255,.8)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-lt)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
              <Link to="/aeo-services" className="btn btn-gold" style={{ padding: '14px 28px', marginTop: '24px' }}>Explore AEO Services<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            </div>
            <div className="reveal-r">
              <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-xl)', padding: '32px', fontFamily: 'var(--ff-mono)', fontSize: '.8rem' }}>
                <div style={{ color: 'var(--gold-lt)', marginBottom: '20px', letterSpacing: '.08em' }}>// AI SEARCH RESULT SNAPSHOT</div>
                {[
                  { engine: 'Google SGE', color: '#4285f4', status: 'FEATURED' },
                  { engine: 'ChatGPT', color: '#74aa9c', status: 'CITED' },
                  { engine: 'Perplexity', color: '#9b59b6', status: 'SOURCE' },
                  { engine: 'Bing Copilot', color: '#00a4ef', status: 'REFERENCED' },
                ].map((r) => (
                  <div key={r.engine} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', marginBottom: '8px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', borderRadius: '8px' }}>
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: '.78rem' }}>{r.engine}</span>
                    <span style={{ padding: '3px 10px', borderRadius: '100px', background: `${r.color}20`, color: r.color, fontSize: '.65rem', fontWeight: 600, letterSpacing: '.08em' }}>{r.status}</span>
                  </div>
                ))}
                <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(34,197,94,.06)', border: '1px solid rgba(34,197,94,.15)', borderRadius: '8px', color: '#86efac', fontSize: '.75rem', letterSpacing: '.04em' }}>
                  ✓ Your brand cited across all major AI platforms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec" style={{ background: 'linear-gradient(135deg, #0a0010 0%, #1a0020 40%, var(--red) 100%)' }}>
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Start Ranking Today</span>
          <h2 className="cta-title">YOUR COMPETITORS ARE<br /><em>ALREADY ON PAGE 1</em>.</h2>
          <p className="cta-sub">Get a free SEO audit — keyword gap analysis, technical issues, and a 90-day ranking roadmap. Delivered in 48 hours.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free SEO Audit<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Our SEO Team</a>
          </div>
        </div>
      </section>
    </div>
  );
}