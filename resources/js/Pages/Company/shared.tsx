import { useEffect, type RefObject } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export function useCompanyPage(pageRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.co-hero-inner > *',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.12 }
      );
      gsap.fromTo('.co-leader-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-leader-grid', start: 'top 82%' } }
      );
      gsap.fromTo('.co-dept-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-dept-grid', start: 'top 85%' } }
      );
      gsap.fromTo('.co-culture-card',
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-culture-grid', start: 'top 85%' } }
      );
      gsap.fromTo('.co-case-card',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-case-grid', start: 'top 82%' } }
      );
      gsap.fromTo('.co-case-featured',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-case-featured', start: 'top 85%' } }
      );
      gsap.fromTo('.co-blog-featured',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-blog-featured', start: 'top 85%' } }
      );
      gsap.fromTo('.co-blog-card',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-blog-grid', start: 'top 82%' } }
      );
      gsap.fromTo('.co-blog-topic',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-blog-topics', start: 'top 85%' } }
      );
      gsap.fromTo('.co-career-value',
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-career-values', start: 'top 85%' } }
      );
      gsap.fromTo('.co-career-role',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-career-roles', start: 'top 82%' } }
      );
      gsap.fromTo('.co-career-perk',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-career-perks', start: 'top 85%' } }
      );
      gsap.fromTo('.co-career-step',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-career-process', start: 'top 85%' } }
      );
      gsap.fromTo('.co-ab-story-copy > *',
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-ab-story', start: 'top 82%' } }
      );
      gsap.fromTo('.co-ab-story-visual',
        { opacity: 0, x: 32 },
        { opacity: 1, x: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-ab-story', start: 'top 82%' } }
      );
      gsap.fromTo('.co-ab-timeline-item',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-ab-timeline', start: 'top 82%' } }
      );
      gsap.fromTo('.co-ab-diff-card',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-ab-diff', start: 'top 85%' } }
      );
      gsap.fromTo('.co-ab-location',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.co-ab-locations', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);
}

interface CompanyCtaProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  btnText: string;
  note?: string;
}

export function CompanyCta({ eyebrow, title, sub, btnText, note }: CompanyCtaProps) {
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
        {note && <p className="cta-note">{note}</p>}
      </div>
    </section>
  );
}
