import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#1a4bdb';

const features = [
  {
    badge: 'CMS',
    title: 'Custom WordPress & Headless CMS',
    desc: "Tailored CMS builds made for speed, whether that's Sanity, Contentful, or a fully dialed-in WordPress setup built around how your team actually works, with none of the page-builder weight.",
  },
  {
    badge: 'React',
    title: 'React / Next.js Applications',
    desc: 'Powerful web apps and SaaS platforms built on the modern React stack. Server components, streaming, ISR- we pull every lever the framework offers.',
  },
  {
    badge: 'E-Com',
    title: 'E-Commerce Excellence',
    desc: 'Shopify, WooCommerce, or fully custom storefronts with conversion strategy built in from the very first wireframe. Average client AOV lift: 34%.',
  },
  {
    badge: 'Performance',
    title: 'Core Web Vitals Mastery',
    desc: 'Every project we launch hits Green Core Web Vitals. LCP under 2.5s, CLS near zero, INP dialed in. Google favors speed, so speed is engineered into everything we touch.',
  },
  {
    badge: 'Design',
    title: 'UI/UX Design System',
    desc: 'Design backed by real user testing, heatmaps, and session recordings, not guesswork. We design around behavior, and your conversion numbers will show it.',
  },
  {
    badge: 'A11y',
    title: 'WCAG 2.2 AA Accessibility',
    desc: 'Every project we ship meets or beats current accessibility standards. Keyboard navigation, screen reader support, proper contrast- all audited and verified.',
  },
];

const faqs = [
  {
    q: 'What makes your web design & development company different?',
    a: 'We combine strategy, design, and development under one roof, creating high-performance websites that look exceptional and drive measurable business results.',
  },
  {
    q: 'Why hire a web design & development agency instead of a freelancer?',
    a: 'An agency gives you access to designers, developers, UX specialists, and SEO experts working together to deliver a more scalable and polished product.',
  },
  {
    q: 'What website design & development services do you offer?',
    a: 'We provide custom website design, WordPress development, React and Next.js applications, e-commerce solutions, CMS integrations, and ongoing support.',
  },
  {
    q: 'How long does a website design and development project take?',
    a: "Most projects take between 4–12 weeks, depending on the site's size, functionality, and content requirements.",
  },
  {
    q: 'Do you build custom websites or use templates?',
    a: 'Every website is custom-designed and developed to match your brand, goals, and user experience requirements.',
  },
  {
    q: 'Will my website be mobile-friendly and fast?',
    a: 'Yes. Every site we build is fully responsive, optimized for Core Web Vitals, and designed to perform across all devices.',
  },
  {
    q: 'Can your web design & development agency redesign an existing website?',
    a: 'Absolutely. We can modernize your current website, improve performance, and enhance the user experience without disrupting your business.',
  },
  {
    q: 'Do you provide support after the website launches?',
    a: 'Yes. We offer maintenance, updates, performance monitoring, and ongoing optimization to keep your website running at its best.',
  },
];

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function WebDesign() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="svc-page">
      <Head>
        <title head-key="title">Premium Web Design & Development Company | LogicWorks</title>
        <meta head-key="description" name="description" content="We don't just design pages; we build digital experiences that stop the scroll and turn clicks into customers. Hand-coded. Flawlessly detailed. Exceptionally fast." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/web-design-development" />
      </Head>

      <section
        className="inner-hero"
        aria-labelledby="wd-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #0e1e50 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,75,219,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(26,75,219,.035) 1px,transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="wd-hero-content">
            <span className="inner-hero-label">Web Services</span>
            <h1 className="inner-hero-title" id="wd-title">PREMIUM WEB DESIGN<br />& DEVELOPMENT COMPANY</h1>
            <p className="inner-hero-sub">
              We don&apos;t just design pages; we build digital experiences that stop the scroll and turn clicks into customers. Hand-coded. Flawlessly detailed. Exceptionally fast.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Start Your Project
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="svc-sec" style={{ background: 'var(--white)' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">Our Capabilities</div>
            <h2 className="sec-title">EVERYTHING A MODERN BRAND<br /><em>NEEDS ONLINE</em></h2>
            <p className="sec-desc">
              From structure to motion, every detail is built by a web design &amp; development agency obsessed with speed, beauty, and results that actually move the needle.
            </p>
          </div>
          <div className="wd-features svc-grid-3">
            {features.map((f) => (
              <article key={f.title} className="wd-feature-card svc-card svc-card--white">
                <span className="svc-card-badge">{f.badge}</span>
                <h3 className="svc-card-title">{f.title}</h3>
                <p className="svc-card-desc">{f.desc}</p>
              </article>
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
              <div
                key={tech}
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-md)', padding: '20px 16px', textAlign: 'center', fontFamily: 'var(--ff-head)', fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.7)', cursor: 'default', transition: 'all .25s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,75,219,.15)'; (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,75,219,.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.05)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.7)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.08)'; }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec svc-sec svc-sec--alt" aria-labelledby="wd-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <h2 className="sec-title" id="wd-faq-title">FAQs</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`faq-item${isOpen ? ' on' : ''}`}>
                  <div
                    className="faq-q"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenFaq(isOpen ? null : index);
                      }
                    }}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <div className="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                  <div className="faq-body" style={{ height: isOpen ? 'auto' : '0' }}>
                    <div className="faq-body-inner">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Let&apos;s Build Something Legendary</span>
          <h2 className="cta-title">YOUR SITE IS EITHER MAKING YOU MONEY<br /><em>OR COSTING YOU MONEY.</em></h2>
          <p className="cta-sub">
            As a website design &amp; development services provider, we&apos;ll show you exactly where your site is leaking conversions with a free audit, then build the fix.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free Website Audit
              {arrowIcon}
            </Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          {/* <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p> */}
        </div>
      </section>
    </div>
  );
}
