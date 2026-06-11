import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export function useIndustriesPage(pageRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ind-hero-inner > *',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.12 }
      );
      gsap.fromTo('.ind-vertical-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.ind-vertical-grid', start: 'top 82%' } }
      );
      gsap.fromTo('.ind-cap-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.ind-cap-grid', start: 'top 85%' } }
      );
      gsap.fromTo('.ind-solution-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.ind-solution-grid', start: 'top 82%' } }
      );
      gsap.fromTo('.ind-use-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.ind-use-grid', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);
}

interface FaqItem { q: string; a: string }

interface IndustriesFaqProps {
  id: string;
  title: React.ReactNode;
  desc: string;
  faqs: FaqItem[];
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}

export function IndustriesFaq({ id, title, desc, faqs, openFaq, setOpenFaq }: IndustriesFaqProps) {
  return (
    <section className="faq-sec ind-sec" aria-labelledby={id}>
      <div className="con">
        <div className="sec-hd-c reveal">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title" id={id}>{title}</h2>
          <p className="sec-desc">{desc}</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={faq.q} className={`faq-item${open ? ' on' : ''}`}>
                <div
                  className="faq-q"
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenFaq(open ? null : i);
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
                <div className="faq-body" style={{ height: open ? 'auto' : '0' }}>
                  <div className="faq-body-inner">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface IndustriesCtaProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  btnText: string;
  note: string;
}

export function IndustriesCta({ eyebrow, title, sub, btnText, note }: IndustriesCtaProps) {
  return (
    <section className="cta-sec">
      <div className="cta-orb1" aria-hidden="true" />
      <div className="cta-orb2" aria-hidden="true" />
      <div className="con" style={{ position: 'relative', zIndex: 1 }}>
        <span className="cta-eyebrow">{eyebrow}</span>
        <h2 className="cta-title">{title}</h2>
        <p className="cta-sub">{sub}</p>
        <div className="cta-btns">
          <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
            {btnText}{arrowIcon}
          </Link>
          <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
        </div>
        <p className="cta-note">{note}</p>
      </div>
    </section>
  );
}

export const verticals = [
  { path: '/industries/healthcare', code: 'HC', title: 'Healthcare', desc: 'HIPAA-compliant websites, patient portals, AI scheduling, and healthcare SEO.', accent: '#166534' },
  { path: '/industries/real-estate', code: 'RE', title: 'Real Estate', desc: 'IDX-integrated sites, lead funnels, and local SEO that puts listings in front of buyers.', accent: '#1a4bdb' },
  { path: '/industries/finance', code: 'FIN', title: 'Finance & FinTech', desc: 'Compliant, conversion-optimized experiences for banks, credit unions, and FinTech startups.', accent: '#0d1b3e' },
  { path: '/industries/legal', code: 'LAW', title: 'Legal & Law Firms', desc: 'Attorney SEO, local domination, PPC, and authority websites that generate case inquiries.', accent: '#374151' },
  { path: '/industries/ecommerce', code: 'EC', title: 'E-Commerce & Retail', desc: 'Platform builds, SEO, paid ads, and CRO that drive measurable revenue growth.', accent: '#7c3aed' },
  { path: '/industries/saas', code: 'SaaS', title: 'SaaS & Technology', desc: 'Product-led growth websites, developer SEO, and B2B demand generation for tech companies.', accent: '#0891b2' },
  { path: '/industries/education', code: 'EDU', title: 'Education & EdTech', desc: 'Enrollment funnels, LMS integrations, and digital marketing for schools and EdTech platforms.', accent: '#2563eb' },
  { path: '/industries/hospitality', code: 'HOS', title: 'Hospitality & Tourism', desc: 'Direct booking engines, reputation management, and local SEO for hotels and travel brands.', accent: '#c8922a' },
];

interface Metric { val: string; lbl: string }
interface Solution { num: string; title: string; desc: string }
interface UseCase { num: string; title: string; desc: string }
interface TimelineStep { num: string; title: string; desc: string }
interface Outcome { icon: string; title: string; desc: string }

export interface IndustryPageConfig {
  accent: string;
  code: string;
  label: string;
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  ctaBtn: string;
  ctaNote: string;
  ctaEyebrow: string;
  ctaTitle: React.ReactNode;
  ctaSub: string;
  metrics: Metric[];
  challengeLabel: string;
  challengeTitle: React.ReactNode;
  challengeDesc: string;
  checks: string[];
  tags: string[];
  outcomes: Outcome[];
  solutionsLabel: string;
  solutionsTitle: React.ReactNode;
  solutionsDesc: string;
  solutions: Solution[];
  useCasesLabel: string;
  useCasesTitle: React.ReactNode;
  useCasesDesc: string;
  useCases: UseCase[];
  processLabel: string;
  processTitle: React.ReactNode;
  processDesc: string;
  timeline: TimelineStep[];
  stackLabel: string;
  stackTitle: React.ReactNode;
  stackDesc: string;
  stack: string[];
  faqTitle: React.ReactNode;
  faqDesc: string;
  faqs: FaqItem[];
}

export function IndustryInnerPage({ config }: { config: IndustryPageConfig }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': config.accent } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={`https://logicworks.com${config.canonical}`} />
      </Helmet>

      <section className="ind-inner-hero" aria-labelledby="ind-inner-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link to="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">{config.code}</div>
            <span className="ind-inner-label">{config.label}</span>
          </div>
          <h1 className="ind-inner-title" id="ind-inner-title">{config.heroTitle}</h1>
          <p className="ind-inner-sub">{config.heroSub}</p>
          <div className="ind-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>{config.ctaBtn}{arrowIcon}</Link>
            <Link to="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Industries</Link>
          </div>
        </div>
      </section>

      <section className="ind-impact-band">
        <div className="con">
          <div className="ind-impact-grid">
            {config.metrics.map((m) => (
              <div key={m.lbl} className="ind-impact-item">
                <div className="ind-impact-val">{m.val}</div>
                <div className="ind-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-split">
            <div className="reveal-l">
              <div className="sec-label">{config.challengeLabel}</div>
              <h2 className="sec-title">{config.challengeTitle}</h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>{config.challengeDesc}</p>
              <div className="ind-check-list">
                {config.checks.map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{config.tags.map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {config.outcomes.map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  <div className="ind-outcome-icon">{o.icon}</div>
                  <div className="ind-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">{config.solutionsLabel}</div>
            <h2 className="sec-title">{config.solutionsTitle}</h2>
            <p className="sec-desc">{config.solutionsDesc}</p>
          </div>
          <div className="ind-solution-grid">
            {config.solutions.map((s) => (
              <article key={s.title} className="ind-solution-card">
                <div className="ind-solution-num">{s.num}</div>
                <h3 className="ind-solution-title">{s.title}</h3>
                <p className="ind-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--alt">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">{config.useCasesLabel}</div>
            <h2 className="sec-title">{config.useCasesTitle}</h2>
            <p className="sec-desc">{config.useCasesDesc}</p>
          </div>
          <div className="ind-use-grid">
            {config.useCases.map((u) => (
              <article key={u.title} className="ind-use-card">
                <div className="ind-use-num">{u.num}</div>
                <h3 className="ind-use-title">{u.title}</h3>
                <p className="ind-use-desc">{u.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">{config.processLabel}</div>
            <h2 className="sec-title">{config.processTitle}</h2>
            <p className="sec-desc">{config.processDesc}</p>
          </div>
          <div className="ind-process-track">
            {config.timeline.map((s) => (
              <div key={s.num} className="ind-process-step">
                <div className="ind-process-dot">{s.num}</div>
                <h3 className="ind-process-title">{s.title}</h3>
                <p className="ind-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ind-sec ind-sec--dark">
        <div className="con">
          <div className="ind-sec-hd reveal">
            <div className="sec-label">{config.stackLabel}</div>
            <h2 className="sec-title">{config.stackTitle}</h2>
            <p className="sec-desc">{config.stackDesc}</p>
          </div>
          <div className="ind-stack-grid">{config.stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id={`${config.code}-faq`} title={config.faqTitle} desc={config.faqDesc} faqs={config.faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow={config.ctaEyebrow} title={config.ctaTitle} sub={config.ctaSub} btnText={config.ctaBtn} note={config.ctaNote} />
    </div>
  );
}
