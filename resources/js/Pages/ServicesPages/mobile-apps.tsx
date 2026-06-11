import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  { badge: 'iOS', title: 'Native iOS Development', desc: 'Swift and SwiftUI apps optimized for iPhone and iPad — buttery-smooth animations, Face ID integration, and full App Store compliance.' },
  { badge: 'Android', title: 'Native Android Development', desc: 'Kotlin-based Android apps built for the full device ecosystem — Material Design 3, Google Play optimization, and deep OS integration.' },
  { badge: 'RN', title: 'React Native Cross-Platform', desc: 'Single codebase for iOS and Android with near-native performance. Faster time-to-market without sacrificing UX quality.' },
  { badge: 'UX', title: 'Mobile-First UX Design', desc: 'Gesture-driven interfaces, thumb-zone optimization, and onboarding flows designed to maximize retention and daily active usage.' },
  { badge: 'Push', title: 'Push & Real-Time Features', desc: 'Push notifications, in-app messaging, live updates, and offline-first architecture for always-connected experiences.' },
  { badge: 'Store', title: 'App Store Optimization', desc: 'ASO strategy, screenshot design, metadata optimization, and review management to maximize organic downloads and conversion.' },
];

const appTypes = [
  { icon: '01', title: 'Consumer Apps', desc: 'Social, lifestyle, fitness, and entertainment apps built for engagement, retention, and viral growth loops.' },
  { icon: '02', title: 'Enterprise Mobile', desc: 'Field service, inventory, CRM, and internal workflow apps with offline sync and enterprise SSO integration.' },
  { icon: '03', title: 'E-Commerce Apps', desc: 'Native shopping experiences with one-tap checkout, wishlists, push re-engagement, and personalized product feeds.' },
  { icon: '04', title: 'FinTech & Health', desc: 'HIPAA and PCI-compliant mobile apps with biometric auth, secure data handling, and regulatory audit trails.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & UX', desc: 'User research, competitive analysis, feature prioritization, and interactive prototype validation.' },
  { num: '02', title: 'UI Design', desc: 'Pixel-perfect mobile UI in Figma with design systems, component libraries, and platform-specific patterns.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with TestFlight and internal testing builds delivered every two weeks for continuous feedback.' },
  { num: '04', title: 'QA & Testing', desc: 'Device lab testing across 20+ devices, automated test suites, and performance profiling before submission.' },
  { num: '05', title: 'Launch & Grow', desc: 'App Store submission, ASO optimization, analytics setup, and post-launch iteration based on user data.' },
];

const techStack = ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS', 'GraphQL', 'Stripe', 'OneSignal', 'Fastlane', 'TestFlight', 'Figma'];

const faqs = [
  { q: 'Native or cross-platform — which should I choose?', a: 'Native (Swift/Kotlin) delivers the best performance and OS integration for complex apps. React Native is ideal when speed-to-market and budget efficiency matter. We recommend the right approach after discovery.' },
  { q: 'How long does mobile app development take?', a: 'An MVP typically ships in 12–16 weeks. Full-featured apps with backend integration range from 5–9 months. We provide a detailed timeline after the discovery phase.' },
  { q: 'Do you handle App Store submission?', a: 'Yes. We manage the full submission process for Apple App Store and Google Play — metadata, screenshots, compliance review, and rejection resolution.' },
  { q: 'Can you integrate with our existing backend?', a: 'Absolutely. We connect to REST, GraphQL, and WebSocket APIs — or build the backend from scratch if needed.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. Ongoing maintenance, OS update compatibility, bug fixes, and feature development retainers are available for all clients.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function MobileApps() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-hero-animate > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.svc-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.svc-capabilities', start: 'top 80%' } });
      gsap.fromTo('.svc-process-step', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.svc-process-grid', start: 'top 85%' } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="svc-page">
      <Head>
        <title head-key="title">Mobile App Development | LogicWorks — iOS, Android & React Native</title>
        <meta head-key="description" name="description" content="LogicWorks builds native iOS, Android, and React Native mobile apps — performance-first, UX-obsessed, App Store optimized from MVP to millions of downloads." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/mobile-apps" />
      </Head>

      <section className="inner-hero" aria-labelledby="mobile-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Mobile Development</span>
            <h1 className="inner-hero-title" id="mobile-title">MOBILE<br />APPS</h1>
            <p className="inner-hero-sub">Native iOS &amp; Android and cross-platform React Native apps. Performance-first, UX-obsessed, and App Store optimized — built to acquire, engage, and retain users at scale.</p>
            <div className="svc-hero-actions">
              <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free App Consultation{arrowIcon}</Link>
              <Link to="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why Mobile Apps</div>
              <h2 className="sec-title">YOUR BRAND IN<br /><em>EVERY POCKET</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Mobile accounts for 70%+ of digital time. A native app creates a direct, always-on channel to your users — push notifications, offline access, and experiences no mobile website can match.</p>
              <p className="sec-desc">LogicWorks delivers mobile products that users love and businesses profit from — from first prototype to App Store feature.</p>
              <div className="svc-check-list">
                {['Native iOS, Android, and React Native expertise', '4.8+ average App Store rating across client apps', 'Full backend API development included', 'App Store submission and ASO handled end-to-end'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['iOS', 'Android', 'React Native', 'Enterprise', 'FinTech'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Mobile App Metrics</div>
              {[{ label: 'App Store Approval Rate', pct: 100, color: 'var(--blue)' }, { label: 'Avg. User Retention (D30)', pct: 68, color: 'var(--gold)' }, { label: 'Crash-Free Sessions', pct: 99, color: 'var(--red)' }, { label: 'On-Time Delivery', pct: 97, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">150+</div><div className="svc-highlight-lbl">Mobile Apps Launched</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '4.8★', lbl: 'Avg. Store Rating' }, { val: '12wk', lbl: 'MVP Timeline' }, { val: '2M+', lbl: 'Downloads Driven' }, { val: '48hr', lbl: 'Consultation' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">BUILT FOR<br /><em>PLATFORM EXCELLENCE</em></h2><p className="sec-desc">Native performance, cross-platform efficiency, and UX craft that keeps users coming back every day.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">App Types</div><h2 className="sec-title">APPS FOR<br /><em>EVERY INDUSTRY</em></h2><p className="sec-desc">From consumer-facing products to enterprise field tools — we build mobile experiences that solve real problems.</p></div>
          <div className="svc-grid-4">{appTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">FROM CONCEPT TO<br /><em>APP STORE IN 5 PHASES</em></h2><p className="sec-desc">A product-driven mobile development workflow refined across 150+ app launches.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Technology Stack</div><h2 className="sec-title">NATIVE TOOLS.<br /><em>PROVEN AT SCALE</em></h2><p className="sec-desc">Platform-native and cross-platform technologies chosen for performance, maintainability, and App Store success.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="mobile-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="mobile-faq-title">MOBILE APP<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What founders and product teams ask before building a mobile application.</p></div>
          <div className="faq-list">{faqs.map((faq, i) => { const open = openFaq === i; return (
            <div key={faq.q} className={`faq-item${open ? ' on' : ''}`}>
              <div className="faq-q" role="button" tabIndex={0} aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenFaq(open ? null : i); } }}>
                <span className="faq-q-text">{faq.q}</span><div className="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
              </div>
              <div className="faq-body" style={{ height: open ? 'auto' : '0' }}><div className="faq-body-inner">{faq.a}</div></div>
            </div>); })}</div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Ready to Go Mobile?</span>
          <h2 className="cta-title">YOUR USERS ARE ON MOBILE.<br /><em>YOUR BRAND SHOULD BE TOO</em>.</h2>
          <p className="cta-sub">Get a free mobile app consultation and a clear roadmap from idea to App Store — delivered within 48 hours.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free App Consultation{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE CONSULTATION · NO COMMITMENT · DELIVERED IN 48 HOURS</p>
        </div>
      </section>
    </div>
  );
}
