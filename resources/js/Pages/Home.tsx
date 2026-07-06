import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from "@inertiajs/react";
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Icon atoms ──────────────────────────────────────────────────
const IC = {
  code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  fb: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  dollar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  mobile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  server: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  pulse: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
};

const SrvArrow = () => (
  <div className="srv-arrow">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  </div>
);

// ── Sub-sections ────────────────────────────────────────────────
/* Trust bar — hidden for now
function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {[
          { icon: IC.shield, text: <><strong>Award-Winning</strong> Agency</> },
          { icon: IC.users, text: <><strong>500+</strong> Clients Served</> },
          { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, text: <><strong>USA-Based</strong> — Serving Globally</> },
          { icon: IC.star, text: <><strong>5-Star</strong> Google Rating</> },
          { icon: IC.clock, text: <><strong>10+ Years</strong> of Excellence</> },
        ].map((item, i) => (
          <div key={i} className="trust-item">
            {item.icon}{<span>{item.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
*/

const HERO_LETTER_REVEAL = {
  opacity: 1,
  y: 0,
  duration: 0.55,
  ease: 'power3.out' as const,
  stagger: 0.3,
};

function wrapHeroBuildLetters(el: HTMLSpanElement | null): HTMLElement[] {
  if (!el || el.dataset.heroLetters === 'true') {
    return Array.from(el?.querySelectorAll<HTMLElement>('.hero-letter') ?? []);
  }
  const text = el.textContent ?? '';
  el.dataset.heroLetters = 'true';
  el.dataset.heroLettersText = text;
  el.textContent = '';
  return [...text].map((char) => {
    const span = document.createElement('span');
    span.className = 'hero-letter';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = char === ' ' ? '\u00A0' : char;
    el.appendChild(span);
    return span;
  });
}

function restoreHeroBuildLetters(el: HTMLSpanElement | null) {
  if (!el?.dataset.heroLetters) return;
  el.textContent = el.dataset.heroLettersText ?? 'BUILD';
  delete el.dataset.heroLetters;
  delete el.dataset.heroLettersText;
}

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const word4Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Spawn particles
    if (particlesRef.current) {
      const colors = ['rgba(26,75,219,.5)', 'rgba(200,25,42,.4)', 'rgba(200,146,42,.4)'];
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `left:${Math.random() * 100}%;bottom:${Math.random() * 20}%;background:${colors[Math.floor(Math.random() * colors.length)]};--dur:${4 + Math.random() * 6}s;--delay:${Math.random() * 6}s;`;
        particlesRef.current.appendChild(p);
      }
    }

    const buildLetters = wrapHeroBuildLetters(word2Ref.current);

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      gsap.set([tagRef.current, word1Ref.current, word2Ref.current, word3Ref.current, word4Ref.current, subRef.current, ctaRef.current, trustRef.current, visualRef.current], {
        opacity: 0, y: 60,
      });
      gsap.set(buildLetters, { opacity: 0, y: 14 });
      gsap.set(visualRef.current, { opacity: 0, x: 60, y: 0 });

      tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
        .to(word1Ref.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .to(word2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.5')
        .to(buildLetters, HERO_LETTER_REVEAL, '-=0.35')
        .to(word3Ref.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.15')
        .to(word4Ref.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to(visualRef.current, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8');

      // Magnetic buttons
      heroRef.current?.querySelectorAll('.btn-primary, .btn-outline').forEach((btn) => {
        const el = btn as HTMLElement;
        el.addEventListener('mousemove', (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          gsap.to(el, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        });
      });
    }, heroRef);

    return () => {
      ctx.revert();
      restoreHeroBuildLetters(word2Ref.current);
    };
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero — LogicWorks Digital Agency" ref={heroRef}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="particles" ref={particlesRef} aria-hidden="true" />

      <div className="hero-inner con">
        <div>
          <div className="hero-tag" ref={tagRef}>
            <div className="hero-tag-dot" aria-hidden="true" />
            America's Premier Digital Agency
          </div>

          <h1 className="hero-headline" aria-label="We Build Digital Empires That Dominate">
            <div className="word-wrap">
              <span className="hero-word" ref={word1Ref}>WE</span>&nbsp;
              <span className="hero-word gradient-txt" ref={word2Ref}>BUILD</span>
            </div>
            <div className="word-wrap">
              <span className="hero-word outline-txt" ref={word3Ref}>DIGITAL</span>
            </div>
            <div className="word-wrap">
              <span className="hero-word" ref={word4Ref}>EMPIRES</span>
            </div>
          </h1>

          <p className="hero-sub" ref={subRef}>
            LogicWorks engineers award-winning websites, AI-powered systems, and full-spectrum digital marketing
            that transforms ambitious brands into absolute market titans — from coast to coast.
          </p>

          <div className="hero-ctas" ref={ctaRef}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              Start Your Project {IC.arrow}
            </Link>
            <Link href="/case-studies" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              View Our Work
            </Link>
          </div>

          <div className="hero-trust" ref={trustRef}>
            <div className="hero-avatars" aria-hidden="true">
              {[['JD', 'linear-gradient(135deg,#1a4bdb,#0d1b3e)'], ['MR', 'linear-gradient(135deg,#c8192a,#7c0010)'], ['SK', 'linear-gradient(135deg,#c8922a,#7c5e10)'], ['AT', 'linear-gradient(135deg,#0d1b3e,#1a2d5e)']].map(([init, bg]) => (
                <div key={init} className="hero-av" style={{ background: bg }}>{init}</div>
              ))}
            </div>
            <p className="hero-trust-text">
              Trusted by <strong>500+ businesses</strong> across America<br />
              <span style={{ color: '#f59e0b', fontFamily: 'var(--ff-mono)', fontSize: '.8rem' }}>★★★★★</span> 4.9/5 average rating
            </p>
          </div>
        </div>

        {/* HUD */}
        <div className="hero-visual" ref={visualRef} aria-hidden="true">
          {/* <div className="float-badge fb-1">
            <div className="fb-inner"><div className="fb-dot green" /><div><div className="fb-text">SEO Rankings</div><div className="fb-val">↑ 287% organic traffic</div></div></div>
          </div>
          <div className="float-badge fb-2">
            <div className="fb-inner"><div className="fb-dot gold" /><div><div className="fb-text">AI Automation</div><div className="fb-val">Saving 40hrs/week</div></div></div>
          </div>
          <div className="float-badge fb-3" style={{ transform: 'translateY(-50%)' }}>
            <div className="fb-inner"><div className="fb-dot blue" /><div><div className="fb-text">Conversion Rate</div><div className="fb-val">+342% this quarter</div></div></div>
          </div> */}
          
          <div className="hud-card">
            <div className="hud-corner hud-corner-tl" /><div className="hud-corner hud-corner-tr" />
            <div className="hud-corner hud-corner-bl" /><div className="hud-corner hud-corner-br" />
            <div className="hud-top">
              <div className="hud-title">LogicWorks Performance Dashboard</div>
              <div className="hud-live"><div className="hud-live-dot" />LIVE</div>
            </div>
            <div className="hud-metrics">
              {[['c-blue', '500', 'CLIENTS'], ['c-red', '98', '% RETENTION'], ['c-gold', '10', 'YRS ACTIVE']].map(([cls, tgt, lbl]) => (
                <div key={lbl} className="hud-metric">
                  <div className={`hud-metric-val ${cls}`} data-target={tgt}>{tgt === '98' ? '0' : '0'}</div>
                  <div className="hud-metric-lbl">{lbl}</div>
                </div>
              ))}
            </div>
            <div className="hud-bars">
              {[['Web Design & Dev', '97%', 'b1'], ['SEO & AEO Performance', '94%', 'b2'], ['AI Automation Accuracy', '99%', 'b3'], ['Client Satisfaction', '98%', 'b4']].map(([name, pct, cls]) => (
                <div key={name} className="hud-bar-row">
                  <div className="hud-bar-info"><span className="hud-bar-name">{name}</span><span className="hud-bar-pct">{pct}</span></div>
                  <div className="hud-bar-track"><div className={`hud-bar-fill ${cls}`} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['Web Design', 'AI Automation', 'SEO & AEO', 'Machine Learning', 'Mobile Apps', 'AI-Powered CRM', 'Brand Design', 'Social Media Marketing', 'PPC Management', 'Web Portals', 'AI Assistants'];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="marquee-item">{item}<span className="marquee-sep" /></div>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { icon: IC.users, target: 500, suffix: '+', label: 'Clients Transformed' },
    { icon: IC.pulse, target: 287, suffix: '%', label: 'Avg. Organic Traffic Increase', pctColor: '#60a5fa' },
    { icon: IC.chart, target: 1200, suffix: '+', label: 'Projects Delivered' },
    { icon: IC.star, target: 49, suffix: '/5', label: 'Average Client Rating', decimal: true, pctColor: 'var(--gold-lt)' },
  ];
  return (
    <section className="stats-sec" aria-label="Company statistics">
      <div className="con">
        <div className="stats-grid">
          {items.map((s, i) => (
            <article key={i} className="stat-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-num">
                <span
                  className="counter"
                  data-target={String(s.target)}
                  data-decimal={s.decimal ? 'true' : 'false'}
                >0</span>
                <span className={s.suffix === '%' ? 'pct' : 'plus'} style={s.pctColor ? { color: s.pctColor } : {}}>
                  {s.suffix}
                </span>
              </div>
              <div className="stat-lbl">{s.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const secRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.srv-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
            delay: (i % 4) * 0.08,
          }
        );
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="srv-sec sp" id="services" aria-labelledby="srv-title" ref={secRef}>
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">What We Do</div>
          <h2 className="sec-title" id="srv-title">FULL-SPECTRUM <em>DIGITAL SERVICES</em><br />UNDER ONE ROOF</h2>
          <p className="sec-desc">From the first pixel to the last dollar of ROI — military precision, creative fire, measurable results.</p>
        </div>
        <div className="srv-bento">
          <article className="srv-card srv-dark srv-c6">
            <div className="srv-icon si-d">{IC.code}</div>
            <h3 className="srv-title">Web Design & Development</h3>
            <p className="srv-desc">We don't build websites — we engineer digital experiences that captivate on first look and convert with every click. Custom-coded, pixel-perfect, blazing fast.</p>
            <div className="srv-list">
              {['Custom WordPress & Headless CMS Solutions', 'React / Next.js Web Applications & SaaS', 'E-Commerce (Shopify, WooCommerce & Custom)', 'Core Web Vitals, Page Speed & CRO Mastery'].map((li) => <div key={li} className="srv-li">{li}</div>)}
            </div>
            <div className="srv-tags">{['UX Research', 'Responsive', 'WCAG 2.2', 'CRO'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c srv-c4">
            <div className="srv-icon si-b">{IC.bolt}</div>
            <h3 className="srv-title">AI Automation</h3>
            <p className="srv-desc">Replace repetitive tasks with intelligent systems that work 24/7, make zero errors, and scale infinitely without adding headcount.</p>
            <div className="srv-tags">{['RPA', 'n8n / Make', 'Workflows'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c">
            <div className="srv-icon si-r">{IC.brain}</div>
            <h3 className="srv-title">Machine Learning</h3>
            <p className="srv-desc">Custom ML models trained on your data to predict, classify, and optimize at superhuman speed and scale.</p>
            <div className="srv-tags">{['Predictive', 'NLP', 'Vision AI'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-b">{IC.search}</div>
            <h3 className="srv-title">SEO & AEO</h3>
            <p className="srv-desc">Rank on Google AND dominate AI answer engines. We optimize for traditional SERPs and the new era of AI-generated search responses.</p>
            <div className="srv-tags">{['On-Page', 'Link Building', 'AEO', 'Schema'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-g">{IC.fb}</div>
            <h3 className="srv-title">Social Media Marketing</h3>
            <p className="srv-desc">Campaigns engineered to go viral. Daily management, growth strategy, and paid social that turns followers into loyal buyers.</p>
            <div className="srv-tags">{['Meta Ads', 'TikTok', 'LinkedIn'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-r">{IC.dollar}</div>
            <h3 className="srv-title">PPC Advertising</h3>
            <p className="srv-desc">Every dollar works harder. Google Ads, Bing, and programmatic campaigns with razor-sharp targeting and obsessive ROI tracking.</p>
            <div className="srv-tags">{['Google Ads', 'Retargeting', 'A/B Testing'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-b">{IC.users}</div>
            <h3 className="srv-title">AI-Powered CRMs</h3>
            <p className="srv-desc">Custom CRM systems infused with AI to score leads, automate follow-ups, and give your team superhuman productivity.</p>
            <div className="srv-tags">{['Lead Scoring', 'Pipelines', 'AI Insights'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-g">{IC.mobile}</div>
            <h3 className="srv-title">Mobile App Development</h3>
            <p className="srv-desc">Native iOS & Android, or cross-platform React Native apps. Performance-first, UX-obsessed, App Store optimized from day one.</p>
            <div className="srv-tags">{['iOS', 'Android', 'React Native'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c8" style={{ background: 'linear-gradient(135deg,#fafbff,rgba(26,75,219,.03))' }}>
            <div className="srv-brand-grid">
              <div>
                <div className="srv-icon si-r">{IC.star}</div>
                <h3 className="srv-title">Branding & Brand Design</h3>
                <p className="srv-desc">Your brand is your most valuable asset. We build brands that feel inevitable — strategy, identity, and execution that makes you unforgettable.</p>
                <div className="srv-tags" style={{ marginTop: '14px' }}>
                  {['Brand Strategy', 'Logo Design', 'Style Guides', 'Brand Voice', 'UI/UX'].map((t) => <span key={t} className="srv-tag">{t}</span>)}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[['Brand Identity System', 'linear-gradient(135deg,var(--navy),var(--blue))'], ['Visual Identity Design', 'linear-gradient(135deg,var(--red),#8b0000)'], ['Marketing Collateral', 'linear-gradient(135deg,var(--gold),#7c5e10)']].map(([label, bg]) => (
                  <div key={label} style={{ height: '46px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', padding: '0 18px' }}>
                    <span style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: '#fff', fontSize: '.82rem' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <SrvArrow />
          </article>
          <article className="srv-card srv-c4">
            <div className="srv-icon si-b">{IC.server}</div>
            <h3 className="srv-title">Hosting & Server Management</h3>
            <p className="srv-desc">Lightning-fast, 99.99% uptime hosting with proactive server management, daily backups, and 24/7 monitoring.</p>
            <div className="srv-tags">{['99.99% Uptime', 'CDN', 'SSL'].map((t) => <span key={t} className="srv-tag">{t}</span>)}</div>
            <SrvArrow />
          </article>
        </div>
      </div>
    </section>
  );
}

function AISection() {
  const secRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ai-terminal', { opacity: 0, x: -60 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-terminal', start: 'top 80%' },
      });
      gsap.fromTo('.ai-feats', { opacity: 0, x: 60 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-feats', start: 'top 80%' },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ai-sec sp" id="ai-solutions" aria-labelledby="ai-title" ref={secRef}>
      <div className="con">
        <div className="ai-grid">
          <div>
            <div className="ai-terminal">
              <div className="ai-term-bar">
                <div className="term-dot r" /><div className="term-dot y" /><div className="term-dot g" />
                <div className="ai-term-title">logicworks_ai_engine.exe — RUNNING</div>
              </div>
              <div className="ai-nodes" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, i) => <div key={i} className="ai-node" />)}
              </div>
              <div className="ai-output" aria-label="AI system live output">
                {[
                  ['ao-p', '→', 'ao-c', 'Scanning customer behavior patterns...'],
                  ['ao-p', '→', 'ao-r', 'Lead score: 94/100 — High intent detected'],
                  ['ao-p', '→', 'ao-c', 'Automated follow-up sequence dispatched'],
                  ['ao-p', '→', 'ao-r', 'Conversion probability: 87.3%'],
                ].map(([pc, p, vc, v], i) => (
                  <div key={i} className="ao-line"><span className={pc}>{p}</span><span className={vc}>{v}</span></div>
                ))}
                <div className="ao-line">
                  <span className="ao-p">→</span>
                  <span>Revenue forecast updated: <span className="ao-r">+$142,000</span></span>
                </div>
                <div className="ao-line">
                  <span className="ao-p">→</span>
                  <span style={{ color: 'rgba(255,255,255,.4)' }}>Awaiting next query<span className="ao-cursor" /></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sec-label">AI & Intelligence</div>
            <h2 className="sec-title" id="ai-title">THE <em>AI ADVANTAGE</em><br />IS YOUR ADVANTAGE</h2>
            <p className="sec-desc" style={{ marginBottom: '36px' }}>
              We don't just implement AI tools — we architect custom intelligent systems that think, learn, and adapt to your unique business challenges.
            </p>
            <div className="ai-feats">
              {[
                { icon: IC.bolt, title: 'AI Automation That Saves 40+ Hours Per Week', desc: 'Custom workflows eliminate repetitive tasks — email sequences, lead follow-ups, data entry, reporting — all automated with zero human error.' },
                { icon: IC.chat, title: 'AI Assistants That Convert 24/7', desc: 'Deploy intelligent chatbots and AI sales assistants that qualify leads, answer questions, and book appointments while you sleep.' },
                { icon: IC.clock, title: 'Machine Learning That Predicts Revenue', desc: 'Our ML systems analyze historical data to forecast sales, identify at-risk customers, and surface your highest-value opportunities automatically.' },
              ].map((f) => (
                <div key={f.title} className="ai-feat">
                  <div className="ai-feat-icon">{f.icon}</div>
                  <div>
                    <div className="ai-feat-title">{f.title}</div>
                    <div className="ai-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.proc-step').forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, delay: i * 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 85%' } }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = [
    { n: '01', title: 'Discovery & Strategy', desc: 'Deep-dive into your business goals, audience, and competitive landscape to forge a winning digital strategy.' },
    { n: '02', title: 'Design & Architecture', desc: 'Wireframe to high-fidelity mockups. Every layout decision made with conversion psychology and UX research.' },
    { n: '03', title: 'Development & Build', desc: 'Clean, scalable code on proven tech stacks. Rigorous QA across all browsers, devices, and resolutions.' },
    { n: '04', title: 'Launch & Optimize', desc: 'Controlled launch with performance benchmarking, A/B testing, and rapid iteration for maximum impact.' },
    { n: '05', title: 'Grow & Scale', desc: 'Ongoing SEO, AI optimization, and analytics-driven growth. We don\'t stop at launch — we push you to #1.' },
  ];

  return (
    <section className="proc-sec sp" id="process" aria-labelledby="proc-title" ref={ref}>
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">Our Process</div>
          <h2 className="sec-title" id="proc-title">FROM VISION TO <em>VICTORY</em><br />IN 5 DECISIVE STEPS</h2>
          <p className="sec-desc">A battle-tested process refined across 1,200+ projects. Transparent, collaborative, and built for results.</p>
        </div>
        <div className="proc-grid">
          <div className="proc-line" aria-hidden="true" />
          {steps.map((s) => (
            <div key={s.n} className="proc-step">
              <div className="proc-num">{s.n}</div>
              <div className="proc-step-title">{s.title}</div>
              <div className="proc-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    { icon: IC.pulse, name: 'Healthcare' }, { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, name: 'Real Estate' },
    { icon: IC.dollar, name: 'Finance & FinTech' }, { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg>, name: 'E-Commerce' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>, name: 'Education' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6l3 13h12l3-13"/></svg>, name: 'Legal & Law' },
    { icon: IC.shield, name: 'SaaS & Tech' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>, name: 'Hospitality' },
    { icon: IC.server, name: 'Professional Services' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>, name: 'Food & Beverage' },
    { icon: IC.pulse, name: 'Nonprofits' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, name: 'Global Enterprises' },
  ];
  return (
    <section className="ind-sec sp" id="industries" aria-labelledby="ind-title">
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">Industries We Serve</div>
          <h2 className="sec-title" id="ind-title">WE DOMINATE <em>EVERY</em> VERTICAL</h2>
          <p className="sec-desc">Specialized expertise across 15+ industries. We speak your language, know your market, and know exactly how to win it.</p>
        </div>
        <div className="ind-grid">
          {industries.map((ind, i) => (
            <article key={ind.name} className="ind-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="ind-icon">{ind.icon}</div>
              <div className="ind-name">{ind.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { initials: 'JT', name: 'James Thornton', role: 'CEO, Thornton Law Group — Chicago, IL', text: 'LogicWorks rebuilt our website and launched a full SEO campaign. Within 6 months, organic traffic grew by 340% and we\'re now ranking #1 for our top 12 keywords. Absolutely incredible team.', avatarBg: 'linear-gradient(135deg,var(--blue),var(--red))' },
    { initials: 'SR', name: 'Sarah Rodriguez', role: 'COO, Pinnacle Health Group — Austin, TX', text: 'The AI automation system LogicWorks built replaced 3 full-time positions worth of manual work. Our team now focuses only on high-value tasks. ROI was achieved in under 60 days. Game-changing doesn\'t even begin to cover it.', featured: true, avatarBg: 'linear-gradient(135deg,var(--gold),#7c5e10)' },
    { initials: 'MK', name: 'Michael Kensington', role: 'Founder, ProGear Sports — Los Angeles, CA', text: 'Our e-commerce revenue increased by $2.3M in the first year after partnering with LogicWorks for web development and PPC. Their team is genuinely invested in our growth.', avatarBg: 'linear-gradient(135deg,var(--red),#7c0010)' },
  ];
  const StarRow = () => (
    <div className="testi-stars" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      ))}
    </div>
  );
  return (
    <section className="testi-sec sp" id="testimonials" aria-labelledby="testi-title">
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">Client Stories</div>
          <h2 className="sec-title" id="testi-title">REAL BUSINESSES. <em>REAL RESULTS</em>.</h2>
          <p className="sec-desc">Don't take our word for it. Here's what happens when LogicWorks goes to work for you.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={t.name} className={`testi-card reveal${t.featured ? ' feat' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <StarRow />
              <div className="testi-q">"</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-av" style={{ background: t.avatarBg }}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="why-sec sp" id="why-us" aria-labelledby="why-title">
      <div className="con">
        <div className="why-grid">
          <div className="reveal-l">
            <div className="sec-label">Why LogicWorks</div>
            <h2 className="sec-title" id="why-title">NOT JUST AN AGENCY.<br />YOUR <em>STRATEGIC WEAPON</em>.</h2>
            <p className="sec-desc why-intro">Most agencies talk about results. We engineer them. With a 98% client retention rate and 500+ transformed businesses, our track record speaks louder than any pitch deck.</p>
            <div className="why-cards">
              {[
                { icon: IC.bolt, cls: 'wci-b', title: 'AI-First Approach', desc: 'Every strategy enhanced with AI for maximum efficiency and precision.' },
                { icon: IC.shield, cls: 'wci-r', title: 'USA-Based Experts', desc: 'Senior strategists and engineers based across the United States.' },
                { icon: IC.pulse, cls: 'wci-g', title: 'Data-Driven Results', desc: 'Every decision backed by analytics, A/B tests, and real ROI metrics.' },
                { icon: IC.clock, cls: 'wci-n', title: '24/7 Support', desc: 'Round-the-clock monitoring, support, and rapid-response teams.' },
              ].map((c) => (
                <div key={c.title} className="why-card">
                  <div className={`why-card-icon ${c.cls}`}>{c.icon}</div>
                  <div className="why-card-title">{c.title}</div>
                  <div className="why-card-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-r">
            <div className="why-cta">
              <div className="why-cta-lbl">Free Strategy Session</div>
              <h3 className="why-cta-title">READY TO OUTRANK, OUT-CONVERT & OUT-DOMINATE?</h3>
              <p className="why-cta-desc">Book a no-obligation 30-minute strategy call with one of our senior digital consultants. We'll audit your current presence and map your path to market dominance.</p>
              <ul className="why-cta-list">
                {['Free SEO & website audit included', 'Custom growth strategy delivered same day', 'No contracts, no pressure, no fluff'].map((li) => (
                  <li key={li} className="why-li">{IC.check}{li}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-gold why-cta-btn">
                Book Free Strategy Call {IC.arrow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openHeight, setOpenHeight] = useState(0);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (openIndex === null) {
      setOpenHeight(0);
      return;
    }
    const el = innerRefs.current[openIndex];
    if (el) setOpenHeight(el.scrollHeight);
  }, [openIndex]);

  const faqs = [
    { q: 'How long does it take to see SEO results with LogicWorks?', a: 'Most clients begin seeing meaningful improvements in organic rankings within 60–90 days, with significant traffic growth typically occurring between months 4–6. Results vary depending on your industry, competition level, current domain authority, and the scope of our engagement. We provide monthly reporting with complete transparency on every metric that matters.' },
    { q: 'What is AEO and why is it critical for my business right now?', a: 'Answer Engine Optimization (AEO) is the practice of optimizing your digital content to appear prominently in AI-generated search responses from tools like Google SGE, ChatGPT, Perplexity, and Bing Copilot. As an increasing percentage of searches generate AI answers rather than traditional blue links, AEO ensures your brand is the source cited.' },
    { q: 'Do you work with small businesses or only large enterprises?', a: 'LogicWorks works with businesses of all sizes — from ambitious startups and growing SMBs to established enterprises and Fortune 500 companies. We tailor our engagement model, pricing, and strategy to match your stage of growth and objectives. Every client receives the same level of strategic attention and creative excellence regardless of budget size.' },
    { q: 'How does AI automation specifically benefit my business?', a: 'AI automation eliminates repetitive manual tasks, reduces operational costs, improves accuracy, and frees your team to focus on high-value strategic work. Our clients commonly automate lead follow-up sequences, customer onboarding, appointment booking, data reporting, social media posting, and customer support — saving between 20–60 hours per week on average.' },
    { q: 'What industries does LogicWorks specialize in?', a: 'We have deep expertise across healthcare, real estate, legal, finance & fintech, e-commerce, education, SaaS, hospitality, professional services, and more. Our industry specialists bring proven playbooks refined across hundreds of engagements within each vertical.' },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-sec sp" id="faq" aria-labelledby="faq-title" itemScope itemType="https://schema.org/FAQPage">
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title" id="faq-title">QUESTIONS WE <em>ANSWER</em> DAILY</h2>
          <p className="sec-desc">Everything you need to know before partnering with LogicWorks.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const bodyHeight = isOpen ? `${openHeight}px` : '0';
            return (
              <div
                key={faq.q}
                className={`faq-item${isOpen ? ' on' : ''}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div
                  className="faq-q"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                >
                  <span className="faq-q-text" itemProp="name">{faq.q}</span>
                  <div className="faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
                <div
                  className="faq-body"
                  style={{ height: bodyHeight }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    ref={(el) => { innerRefs.current[index] = el; }}
                    className="faq-body-inner"
                    itemProp="text"
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-sec" id="contact" aria-labelledby="cta-title">
      <div className="cta-orb1" aria-hidden="true" />
      <div className="cta-orb2" aria-hidden="true" />
      <div className="con" style={{ position: 'relative', zIndex: 1 }}>
        <span className="cta-eyebrow">Ready When You Are</span>
        <h2 className="cta-title" id="cta-title">YOUR COMPETITORS<br />ARE <em>ALREADY MOVING</em>.</h2>
        <p className="cta-sub">Every day without a bulletproof digital strategy is revenue left on the table. Let's change that — starting today.</p>
        <div className="cta-btns">
          <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
            Get My Free Strategy Session {IC.arrow}
          </Link>
          <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.37 3.37 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z"/></svg>
            Call Us Now
          </a>
        </div>
        <p className="cta-note">NO CONTRACTS. NO OBLIGATIONS. JUST RESULTS-FOCUSED CONVERSATION.</p>
      </div>
    </section>
  );
}

// ── Main Export ─────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Head>
        <title head-key="title">LogicWorks | Elite Digital Agency — Web Design, AI, SEO & More</title>
        <meta head-key="description" name="description" content="LogicWorks is America's premier digital agency delivering cutting-edge web design, AI-powered CRMs, mobile apps, SEO, AEO, branding, and automation solutions that drive measurable growth." />
        <meta head-key="keywords" name="keywords" content="digital agency, web design, AI automation, machine learning, SEO, AEO, mobile apps, branding, PPC, social media marketing, LogicWorks" />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/" />
        <meta head-key="og:type" property="og:type" content="website" />
        <meta head-key="og:title" property="og:title" content="LogicWorks | Elite Digital Agency" />
        <meta head-key="og:description" property="og:description" content="We engineer digital experiences that captivate, convert, and dominate." />
        <script head-key="schema" type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "LogicWorks",
          "description": "Elite digital agency specializing in web design, AI automation, SEO, AEO, mobile apps, branding, and machine learning systems.",
          "url": "https://logicworksllc.com",
        })}</script>
      </Head>
      {/* <TrustBar /> */}
      <HeroSection />
      <Marquee />
      <Stats />
      <Services />
      <AISection />
      <Process />
      <Industries />
      <Testimonials />
      <WhyUs />
      <FAQSection />
      <CTASection />
    </>
  );
}