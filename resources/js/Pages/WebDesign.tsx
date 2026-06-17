import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: 'Custom WordPress & Headless CMS', desc: 'Bespoke CMS solutions built for performance — Sanity, Contentful, or WordPress configured exactly to your workflow with zero page builder bloat.', badge: 'CMS' },
  { title: 'React / Next.js Applications', desc: 'Scalable web apps and SaaS products built on the modern React ecosystem. Server components, streaming, ISR — we leverage every performance advantage.', badge: 'React' },
  { title: 'E-Commerce Excellence', desc: 'Shopify, WooCommerce, and fully custom e-commerce builds with conversion-rate optimization baked in from the first wireframe. Average client AOV uplift: 34%.', badge: 'E-Com' },
  { title: 'Core Web Vitals Mastery', desc: 'Every site we ship achieves Green CWV scores. LCP under 2.5s, CLS near zero, INP optimized. Google rewards speed — so we engineer it obsessively.', badge: 'Performance' },
  { title: 'UI/UX Design System', desc: 'Research-driven design backed by user testing, heatmaps, and session recordings. We design for behavior, not just aesthetics — and the difference shows in your conversion data.', badge: 'Design' },
  { title: 'WCAG 2.2 AA Accessibility', desc: 'Every deliverable meets or exceeds accessibility standards. Keyboard navigation, screen reader compatibility, contrast ratios — all audited and certified.', badge: 'A11y' },
];

export default function WebDesign() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wd-hero-content > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.wd-feature-card',
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.wd-features', start: 'top 80%' } }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title head-key="title">Web Design & Development | LogicWorks — Elite Digital Agency</title>
        <meta head-key="description" name="description" content="Custom web design and development by LogicWorks. React, Next.js, WordPress, e-commerce, and more — pixel-perfect, blazing fast, conversion-optimized." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/web-design-development" />
      </Head>

      <section
        className="inner-hero"
        ref={heroRef}
        aria-labelledby="wd-title"
        style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0e1e50 60%, #1a4bdb 100%)' }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,219,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,219,.035) 1px,transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="wd-hero-content">
            <span className="inner-hero-label">Web Services</span>
            <h1 className="inner-hero-title" id="wd-title">WEB DESIGN &<br />DEVELOPMENT</h1>
            <p className="inner-hero-sub">We don't build websites — we engineer digital experiences that captivate on first look and convert with every click. Custom-coded. Pixel-perfect. Blazing fast.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: 'var(--white)', padding: '120px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">Our Capabilities</div>
            <h2 className="sec-title">EVERYTHING YOUR DIGITAL<br /><em>PRESENCE DEMANDS</em></h2>
            <p className="sec-desc">From architecture to animation — every element engineered for performance, beauty, and results.</p>
          </div>
          <div className="wd-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {features.map((f) => (
              <div key={f.title} className="wd-feature-card" style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '36px', position: 'relative', overflow: 'hidden', transition: 'all .4s var(--ease-out)' }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -8, boxShadow: '0 32px 64px rgba(13,27,62,.1)', duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, boxShadow: 'none', duration: 0.4, ease: 'power3.out' })}
              >
                <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '100px', background: 'rgba(26,75,219,.08)', fontFamily: 'var(--ff-mono)', fontSize: '.65rem', fontWeight: 600, color: 'var(--blue)', letterSpacing: '.08em', marginBottom: '16px' }}>{f.badge}</div>
                <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }}>
        <div className="con">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="sec-label" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>Technology Stack</div>
            <h2 className="sec-title" style={{ color: '#fff' }}>BUILT ON THE TOOLS<br /><em>THAT WIN</em></h2>
          </div>
          <div className="wd-tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'AWS', 'Figma', 'GSAP'].map((tech) => (
              <div key={tech} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-md)', padding: '20px 16px', textAlign: 'center', fontFamily: 'var(--ff-head)', fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.7)', cursor: 'default', transition: 'all .25s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,75,219,.15)'; (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,75,219,.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.05)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.7)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.08)'; }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Let's Build Something Legendary</span>
          <h2 className="cta-title">YOUR WEBSITE IS EITHER<br /><em>WORKING FOR YOU</em> OR AGAINST YOU.</h2>
          <p className="cta-sub">Get a free website audit and discover exactly what's costing you conversions — then let us fix it.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free Website Audit<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p>
        </div>
      </section>
    </>
  );
}