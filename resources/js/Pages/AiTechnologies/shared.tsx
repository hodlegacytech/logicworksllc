import { useEffect } from 'react';
import { Link } from '@inertiajs/react';
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

export function useAiTechPage(pageRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ai-tech-hero-inner > *',
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo('.ai-tech-bento-card',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.ai-tech-bento', start: 'top 82%' } }
      );
      gsap.fromTo('.ai-tech-use-card',
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.ai-tech-use-grid', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);
}

interface FaqItem { q: string; a: string }

interface AiTechFaqProps {
  id: string;
  title: React.ReactNode;
  desc: string;
  faqs: FaqItem[];
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}

export function AiTechFaq({ id, title, desc, faqs, openFaq, setOpenFaq }: AiTechFaqProps) {
  return (
    <section className="faq-sec ai-tech-sec" aria-labelledby={id}>
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

interface AiTechCtaProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  btnText: string;
  note: string;
}

export function AiTechCta({ eyebrow, title, sub, btnText, note }: AiTechCtaProps) {
  return (
    <section className="cta-sec">
      <div className="cta-orb1" aria-hidden="true" />
      <div className="cta-orb2" aria-hidden="true" />
      <div className="con" style={{ position: 'relative', zIndex: 1 }}>
        <span className="cta-eyebrow">{eyebrow}</span>
        <h2 className="cta-title">{title}</h2>
        <p className="cta-sub">{sub}</p>
        <div className="cta-btns">
          <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
            {btnText}{arrowIcon}
          </Link>
          <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
        </div>
        <p className="cta-note">{note}</p>
      </div>
    </section>
  );
}
