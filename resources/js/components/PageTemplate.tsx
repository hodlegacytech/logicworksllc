import { Link } from "@inertiajs/react";
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { PageTemplateProps } from '@/types';

export default function PageTemplate({ title, subtitle, label, heroColor = '#0d1b3e' }: PageTemplateProps) {
  const heroRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, titleRef.current, subRef.current, btnRef.current], {
        opacity: 0, y: 40,
      });
      gsap.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
      gsap.to(subRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' });
      gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.8, ease: 'power3.out' });
    }, heroRef);
    return () => ctx.revert();
  }, [title]);

  return (
    <>
      <Helmet>
        <title>{title} | LogicWorks — Elite Digital Agency</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content={`${title} | LogicWorks`} />
        <meta property="og:description" content={subtitle} />
      </Helmet>

      <section
        className="inner-hero"
        ref={heroRef}
        aria-labelledby="inner-hero-title"
        style={{ background: `linear-gradient(135deg, ${heroColor} 0%, #0a0f2e 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `linear-gradient(rgba(26,75,219,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,219,.025) 1px,transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <span className="inner-hero-label" ref={labelRef}>{label}</span>
          <h1 className="inner-hero-title" id="inner-hero-title" ref={titleRef}>
            {title.toUpperCase()}
          </h1>
          <p className="inner-hero-sub" ref={subRef}>{subtitle}</p>
          <div ref={btnRef} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Generic Content Section */}
      <section style={{ background: 'var(--white)', padding: '100px 0' }}>
        <div className="con">
          <div className="page-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div className="reveal-l">
              <div className="sec-label">{label}</div>
              <h2 className="sec-title" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                RESULTS THAT <em>REDEFINE</em> POSSIBLE
              </h2>
              <p className="sec-desc" style={{ marginBottom: '28px' }}>{subtitle}</p>
              <p className="sec-desc">
                At LogicWorks, every engagement is built on transparency, precision, and an obsessive commitment
                to your business outcomes. Our senior team brings cross-industry expertise and a battle-tested
                methodology refined across 1,200+ projects.
              </p>
              <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Free consultation & strategy session', 'USA-based senior strategists assigned to your account', 'Monthly performance reporting with full transparency', 'No long-term contracts — results earn our renewal'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--ff-body)', fontSize: '.9rem', color: 'var(--text)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '36px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                  Start Your Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="reveal-r">
              <div style={{ background: 'var(--off-white)', borderRadius: 'var(--r-xl)', padding: '40px', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.68rem', color: 'var(--blue)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  Why LogicWorks Wins
                </div>
                {[
                  { label: 'Client Satisfaction', pct: 98, color: 'var(--blue)' },
                  { label: 'On-Time Delivery', pct: 99, color: 'var(--gold)' },
                  { label: 'Client Retention Rate', pct: 98, color: 'var(--red)' },
                  { label: 'ROI-Positive Campaigns', pct: 96, color: 'var(--navy-mid)' },
                ].map((bar) => (
                  <div key={bar.label} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--ff-head)', fontSize: '.85rem', fontWeight: 700, color: 'var(--navy)' }}>{bar.label}</span>
                      <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.8rem', color: bar.color }}>{bar.pct}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${bar.pct}%`, background: bar.color, borderRadius: '3px' }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '28px', padding: '20px', background: 'linear-gradient(135deg,var(--navy),#0e1e50)', borderRadius: 'var(--r-md)' }}>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.4rem', color: '#fff', letterSpacing: '.03em' }}>500+</div>
                  <div style={{ fontFamily: 'var(--ff-head)', fontSize: '.8rem', color: 'rgba(255,255,255,.5)', marginTop: '4px' }}>Businesses Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" />
        <div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Ready When You Are</span>
          <h2 className="cta-title">YOUR COMPETITORS<br />ARE <em>ALREADY MOVING</em>.</h2>
          <p className="cta-sub">Every day without a bulletproof digital strategy is revenue left on the table. Let's change that — starting today.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get My Free Strategy Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.37 3.37 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z" />
              </svg>
              Call Us Now
            </a>
          </div>
          <p className="cta-note">NO CONTRACTS. NO OBLIGATIONS. JUST RESULTS-FOCUSED CONVERSATION.</p>
        </div>
      </section>
    </>
  );
}