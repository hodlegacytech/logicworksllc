import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#0d1b3e';

const capabilities = [
  {
    badge: 'iOS',
    title: 'Native iOS Development',
    desc: 'Swift and SwiftUI apps tuned for iPhone and iPad, with buttery animations, Face ID integration, and full App Store compliance baked in.',
  },
  {
    badge: 'Android',
    title: 'Native Android Development',
    desc: 'Kotlin-based apps built for the full Android ecosystem, Material Design 3, Google Play optimization, and deep OS-level integration.',
  },
  {
    badge: 'RN',
    title: 'React Native Cross-Platform',
    desc: 'A single codebase covers both iOS and Android with near-native performance, getting you to market faster without quietly sacrificing UX quality.',
  },
  {
    badge: 'UX',
    title: 'Mobile-First UX Design',
    desc: 'Gesture-driven interfaces, thumb-zone optimization, and onboarding flows designed to push retention and daily active usage upward.',
  },
  {
    badge: 'Push',
    title: 'Push & Real-Time Features',
    desc: 'Push notifications, in-app messaging, live updates, and offline-first architecture power experiences that feel always connected.',
  },
  {
    badge: 'Store',
    title: 'App Store Optimization',
    desc: 'ASO strategy, screenshot design, metadata tuning, and review management that drives organic downloads and conversion through our app design & development agency process.',
  },
];

const appTypes = [
  {
    icon: '01',
    title: 'Consumer Apps',
    desc: 'Social, lifestyle, fitness, and entertainment apps built around engagement, retention, and the kind of growth loops that actually go viral.',
  },
  {
    icon: '02',
    title: 'Enterprise Mobile',
    desc: 'Field service, inventory, CRM, and internal workflow apps with offline sync and enterprise SSO integration built in from the start.',
  },
  {
    icon: '03',
    title: 'E-Commerce Apps',
    desc: 'Native shopping experiences with one-tap checkout, wishlists, push re-engagement, and product feeds personalized to each user.',
  },
  {
    icon: '04',
    title: 'FinTech & Health',
    desc: 'HIPAA- and PCI-compliant mobile apps with biometric authentication, secure data handling, and full regulatory audit trails.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & UX',
    desc: 'User research, competitive analysis, feature prioritization, and an interactive prototype are validated before development starts.',
  },
  {
    num: '02',
    title: 'UI Design',
    desc: 'Pixel-perfect mobile UI in Figma, complete with design systems, component libraries, and platform-specific interaction patterns.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Agile sprints with TestFlight and internal test builds are delivered every two weeks, so feedback shapes the product continuously.',
  },
  {
    num: '04',
    title: 'QA & Testing',
    desc: 'Device lab testing across 20+ devices, automated test suites, and performance profiling, all before anything reaches submission.',
  },
  {
    num: '05',
    title: 'Launch & Grow',
    desc: 'App Store submission, ASO optimization, analytics setup, and post-launch iteration guided directly by real user data.',
  },
];

const techStack = [
  'Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS',
  'GraphQL', 'Stripe', 'OneSignal', 'Fastlane', 'TestFlight', 'Figma',
];

const faqs = [
  {
    q: 'How does a mobile app design & development company decide between native and React Native?',
    a: 'The decision usually comes down to performance needs and budget. Native development suits apps demanding heavy graphics or deep OS integration, while React Native works well for most consumer apps that need to launch faster across both platforms with one codebase.',
  },
  {
    q: 'What\'s included in typical app design & development services?',
    a: 'A full engagement covers UX research, UI design, native or cross-platform development, backend API work, QA across multiple devices, and App Store submission, end to end rather than piecemeal.',
  },
  {
    q: 'How long does an app design & development agency take to ship to the App Store?',
    a: 'Most apps launch in 12 to 16 weeks depending on feature complexity, with two-week sprints keeping the build visible and adjustable throughout rather than a black box until the end.',
  },
  {
    q: 'Why do so many apps get rejected during App Store review?',
    a: 'Common culprits include incomplete metadata, broken core functionality, and missing privacy disclosures. A development partner who handles ASO and submission directly catches these issues long before Apple or Google ever does.',
  },
  {
    q: 'Does the build include the backend, or just the mobile app itself?',
    a: 'Full backend API development is included as standard, since a mobile app without a properly architected backend for data, auth, and business logic is really only half a product.',
  },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function MobileApps() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-hero-animate > *',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.svc-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-capabilities', start: 'top 80%' } }
      );
      gsap.fromTo('.svc-process-step',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-process-grid', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="svc-page">
      <Head>
        <title head-key="title">Mobile App Development | LogicWorks — iOS, Android & React Native</title>
        <meta
          head-key="description"
          name="description"
          content="As a mob app design & development company, we build native iOS and Android apps alongside cross-platform React Native products engineered to acquire, engage, and retain users at scale."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/mobile-apps" />
      </Head>

      <section
        className="inner-hero"
        aria-labelledby="mobile-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #091840 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Mobile Development</span>
            <h1 className="inner-hero-title" id="mobile-title">MOBILE<br />APPS</h1>
            <p className="inner-hero-sub">
              As a mob app design &amp; development company, we build native iOS and Android apps alongside cross-platform React Native products engineered to acquire, engage, and actually retain users at scale, not just survive launch week.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free App Consultation
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Case Studies
              </Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                Mobile now eats up more than 70% of people&apos;s digital time. A native app gives you a direct, always-on line to your users, push notifications, offline access, and a depth of experience no mobile website could ever replicate.
              </p>
              <p className="sec-desc">
                Through our app design &amp; development services, we deliver mobile products that users genuinely enjoy and businesses genuinely profit from, from the first prototype sketch all the way to an App Store feature.
              </p>
              <div className="svc-check-list">
                {[
                  'Real native iOS, Android, and React Native expertise',
                  'A 4.8+ average App Store rating across client apps',
                  'Full backend API development included, not billed separately',
                  'App Store submission and ASO handled completely end to end',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['iOS', 'Android', 'React Native', 'Enterprise', 'FinTech'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Mobile App Metrics</div>
              {[
                { label: 'App Store Approval Rate', pct: 100, color: 'var(--blue)' },
                { label: 'Avg. User Retention (D30)', pct: 68, color: 'var(--gold)' },
                { label: 'Crash-Free Sessions', pct: 99, color: 'var(--red)' },
                { label: 'On-Time Delivery', pct: 97, color: 'var(--navy-mid)' },
              ].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row">
                    <span className="svc-bar-label">{bar.label}</span>
                    <span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span>
                  </div>
                  <div className="svc-bar-track">
                    <div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                  </div>
                </div>
              ))}
              <div className="svc-highlight-box">
                <div className="svc-highlight-val">150+</div>
                <div className="svc-highlight-lbl">Mobile apps launched across iOS, Android, and React Native</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '4.8★', lbl: 'Avg. Store Rating' },
              { val: '12wk', lbl: 'MVP Timeline' },
              { val: '2M+', lbl: 'Downloads Driven' },
              { val: '48hr', lbl: 'Consultation' },
            ].map((s) => (
              <div key={s.lbl} className="svc-stat">
                <div className="svc-stat-val">{s.val}</div>
                <div className="svc-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Core Capabilities</div>
            <h2 className="sec-title">BUILT FOR<br /><em>PLATFORM EXCELLENCE</em></h2>
            <p className="sec-desc">
              Native performance, cross-platform efficiency, and the UX craft that brings users back to your app every single day.
            </p>
          </div>
          <div className="svc-grid-3 svc-capabilities">
            {capabilities.map((cap) => (
              <article key={cap.title} className="svc-card svc-card--white">
                <span className="svc-card-badge">{cap.badge}</span>
                <h3 className="svc-card-title">{cap.title}</h3>
                <p className="svc-card-desc">{cap.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">App Types</div>
            <h2 className="sec-title">APPS FOR<br /><em>EVERY INDUSTRY</em></h2>
            <p className="sec-desc">
              From consumer products people open daily to enterprise field tools that quietly run operations, we build mobile experiences that solve real problems.
            </p>
          </div>
          <div className="svc-grid-4">
            {appTypes.map((type) => (
              <article key={type.title} className="svc-card reveal">
                <div className="svc-use-icon">{type.icon}</div>
                <h3 className="svc-card-title">{type.title}</h3>
                <p className="svc-card-desc">{type.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">FROM CONCEPT TO<br /><em>APP STORE IN 5 PHASES</em></h2>
            <p className="sec-desc">
              A product-driven mobile development workflow refined across more than 150 app launches.
            </p>
          </div>
          <div className="svc-process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="svc-process-step">
                <div className="svc-process-num">{step.num}</div>
                <h3 className="svc-process-title">{step.title}</h3>
                <p className="svc-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal">
            <div className="sec-label">Technology Stack</div>
            <h2 className="sec-title">NATIVE TOOLS.<br /><em>PROVEN AT SCALE</em></h2>
            <p className="sec-desc">Platform-native and cross-platform technologies chosen for performance, maintainability, and App Store success.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="mobile-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <h2 className="sec-title" id="mobile-faq-title">FAQs</h2>
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

      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" />
        <div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Ready to Go Mobile?</span>
          <h2 className="cta-title">YOUR USERS ARE ON MOBILE.<br /><em>YOUR BRAND SHOULD BE TOO</em>.</h2>
          <p className="cta-sub">
            Get a free mobile app consultation and a clear roadmap from idea to App Store, delivered within 48 hours.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free App Consultation
              {arrowIcon}
            </Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          {/* <p className="cta-note">FREE CONSULTATION · NO COMMITMENT · DELIVERED IN 48 HOURS</p> */}
        </div>
      </section>
    </div>
  );
}
