import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandingPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.brand-phase',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.brand-phases', start: 'top 80%' } }
      );
      gsap.fromTo('.brand-color-swatch',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: '.brand-palette', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const deliverables = [
    { title: 'Brand Strategy & Positioning', items: ['Competitive landscape analysis', 'Brand archetype & personality definition', 'Unique value proposition framework', 'Messaging architecture & brand voice'] },
    { title: 'Visual Identity System', items: ['Primary & secondary logo suite', 'Color palette with HEX/RGB/CMYK values', 'Typography system & font pairing guide', 'Iconography & illustration style'] },
    { title: 'Brand Guidelines Document', items: ['100+ page comprehensive brand book', 'Do\'s and don\'ts with visual examples', 'Application guidelines for all media', 'Digital & print asset specifications'] },
    { title: 'Marketing Collateral', items: ['Business card & letterhead templates', 'Email signature & presentation templates', 'Social media profile & post templates', 'Brand photography art direction'] },
  ];

  return (
    <div ref={pageRef}>
      <Head>
        <title head-key="title">Branding & Brand Design | LogicWorks — Logo, Identity & Strategy</title>
        <meta head-key="description" name="description" content="LogicWorks builds brands that feel inevitable — strategy, logo design, visual identity, brand guidelines, and UI/UX design that makes you unforgettable in your market." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/branding" />
      </Head>

      <section className="inner-hero" aria-labelledby="brand-title" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #1a1a2e 60%, #16213e 100%)' }}>
        <div className="inner-hero-orb" style={{ background: 'radial-gradient(circle,rgba(200,146,42,.2),transparent 70%)' }} aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <span className="inner-hero-label">Branding & Brand Design</span>
          <h1 className="inner-hero-title" id="brand-title">YOUR BRAND IS YOUR<br /><span style={{ color: 'var(--gold-lt)' }}>MOST VALUABLE ASSET</span>.</h1>
          <p className="inner-hero-sub">We don't design logos — we build brand systems that command attention, convey authority, and create emotional resonance that makes your business the only logical choice in your market.</p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Brand Project<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <Link href="/brand-design" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Brand Work</Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: 'var(--white)', padding: '120px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">What You Get</div>
            <h2 className="sec-title">A BRAND SYSTEM THAT WORKS<br /><em>ACROSS EVERY TOUCHPOINT</em></h2>
            <p className="sec-desc">Not a logo and a color. A comprehensive brand architecture that scales with your business and communicates your authority at every interaction.</p>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {deliverables.map((d, i) => (
              <div key={d.title} className="reveal" style={{ transitionDelay: `${i * 0.1}s`, background: i < 2 ? 'var(--off-white)' : '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '40px' }}>
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, var(--gold), var(--red))', marginBottom: '20px', borderRadius: '2px' }} />
                <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '18px' }}>{d.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {d.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'var(--muted)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Demo */}
      <section style={{ background: 'var(--off-white)', padding: '100px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">Brand Identity Example</div>
            <h2 className="sec-title">THE ANATOMY OF A<br /><em>WINNING BRAND</em></h2>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '48px', boxShadow: '0 24px 80px rgba(13,27,62,.06)' }}>
            <div className="page-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>Color Palette</div>
                <div className="brand-palette" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {[['#060d1f', 'Navy'], ['#1a4bdb', 'Blue'], ['#c8192a', 'Red'], ['#c8922a', 'Gold'], ['#f7f8fc', 'Off-White'], ['#64748b', 'Muted']].map(([color, name]) => (
                    <div key={color} className="brand-color-swatch" style={{ textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: color, border: '1px solid rgba(0,0,0,.08)', boxShadow: '0 4px 12px rgba(0,0,0,.1)' }} />
                      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.6rem', color: 'var(--muted)', marginTop: '6px' }}>{name}</div>
                      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.58rem', color: 'var(--text)', marginTop: '2px' }}>{color}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '36px' }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>Typography</div>
                  {[['Bebas Neue', 'Display / Hero', '3rem', 'BRAND EXCELLENCE'], ['Space Grotesk', 'Headings', '1.2rem', 'Premium Digital Strategy'], ['Manrope', 'Body Copy', '0.9rem', 'Measurable results, every time.'], ['JetBrains Mono', 'Captions / Code', '0.75rem', 'data.logicworks.api']].map(([name, role, size, ex]) => (
                    <div key={name} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'var(--blue)' }}>{name}</span>
                        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'var(--muted)' }}>{role}</span>
                      </div>
                      <div style={{ fontFamily: name, fontSize: size, color: 'var(--navy)', lineHeight: 1.2 }}>{ex}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Mock Brand Card */}
                <div style={{ background: 'linear-gradient(135deg, var(--navy), #102060)', borderRadius: 'var(--r-xl)', padding: '48px', color: '#fff', position: 'relative', overflow: 'hidden', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,146,42,.2), transparent 70%)' }} />
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', letterSpacing: '.05em', marginBottom: '8px' }}>LOGIC<span style={{ color: 'var(--gold-lt)' }}>WORKS</span></div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.7rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '32px' }}>America's Elite Digital Agency</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['Web', 'AI', 'SEO', 'Brand'].map((tag) => <span key={tag} style={{ padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,.08)', fontFamily: 'var(--ff-head)', fontSize: '.7rem', fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{tag}</span>)}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[['btn-primary', 'Primary CTA', 'var(--blue)'], ['btn-red', 'Danger Action', 'var(--red)'], ['btn-gold', 'Gold Accent', 'var(--gold)'], ['btn-outline', 'Secondary', 'transparent']].map(([cls, lbl]) => (
                    <button key={cls} className={`btn ${cls}`} style={{ justifyContent: 'center', fontSize: '.8rem' }}>{lbl}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--white)', padding: '100px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">Brand Build Process</div>
            <h2 className="sec-title">STRATEGY TO<br /><em>LAUNCH IN 6 PHASES</em></h2>
          </div>
          <div className="brand-phases" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
            {[['01', 'Discovery', 'Competitive audit, stakeholder interviews, customer research, and market positioning analysis. 1–2 weeks.'],['02', 'Strategy', 'Brand archetype, positioning statement, messaging hierarchy, and brand personality framework. 1 week.'],['03', 'Concepting', 'Three distinct logo concepts with rationale, moodboards, and initial color direction. 2 weeks.'],['04', 'Refinement', 'Client feedback integration, final logo selection, and visual identity system expansion. 1 week.'],['05', 'System Build', 'Full visual identity system, typography, color palette, iconography, and pattern library. 2 weeks.'],['06', 'Guidelines & Handoff', 'Comprehensive brand book, asset library delivery, team training, and implementation support. 1 week.']].map(([n, t, d]) => (
              <div key={n} className="brand-phase" style={{ background: '#fff', padding: '28px 36px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', color: 'var(--gold)', letterSpacing: '.05em', flexShrink: 0, lineHeight: 1, paddingTop: '4px' }}>{n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--ff-head)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>{t}</div>
                  <div style={{ fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.7 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #1a1a2e 50%, #c8922a 100%)' }}>
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Build Your Legacy</span>
          <h2 className="cta-title">A BRAND THAT COMMANDS<br /><em>INSTANT RESPECT</em>.</h2>
          <p className="cta-sub">Book a free brand discovery call. We'll audit your current brand and show you exactly what it's costing you in perception, leads, and revenue.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Start Brand Project<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
          </div>
        </div>
      </section>
    </div>
  );
}