import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#c8192a';

const capabilities = [
  {
    badge: 'Research',
    title: 'User Research & Testing',
    desc: 'Interviews, surveys, usability testing, and heatmap analysis uncover how users actually behave, not how a team assumes they behave.',
  },
  {
    badge: 'IA',
    title: 'Information Architecture',
    desc: 'Logical navigation structures, content hierarchies, and user flows that strip out friction and guide people to their goal without thinking twice.',
  },
  {
    badge: 'UI',
    title: 'Visual Interface Design',
    desc: 'Pixel-perfect interfaces built on cohesive design systems, typography, color, spacing, and components that scale cleanly across products and platforms.',
  },
  {
    badge: 'Proto',
    title: 'Interactive Prototyping',
    desc: 'High-fidelity Figma prototypes with micro-interactions and user flows are validated thoroughly before a single line of code gets written.',
  },
  {
    badge: 'A11y',
    title: 'Accessibility Design',
    desc: 'WCAG 2.2 AA-compliant interfaces, covering contrast ratios, keyboard navigation, screen reader compatibility, and genuinely inclusive design patterns.',
  },
  {
    badge: 'DS',
    title: 'Design Systems',
    desc: 'Reusable component libraries with real documentation that speed up development, maintain consistency, and cut design debt across growing teams.',
  },
];

const designTypes = [
  {
    icon: '01',
    title: 'Web & SaaS Products',
    desc: 'Dashboard design, onboarding flows, settings panels, and complex data interfaces that make genuinely powerful software feel intuitive.',
  },
  {
    icon: '02',
    title: 'Mobile App Design',
    desc: 'iOS and Android UI built to platform guidelines, with gesture-driven interaction and layouts optimized specifically for thumb reach.',
  },
  {
    icon: '03',
    title: 'E-Commerce UX',
    desc: 'Product discovery, filtering, cart, and checkout flows engineered specifically to reduce abandonment and lift conversion rate.',
  },
  {
    icon: '04',
    title: 'Brand & Marketing Sites',
    desc: 'Visually striking marketing experiences with scroll-driven storytelling, purposeful animation, and conversion-focused page architecture.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Stakeholder workshops, user research, a competitive audit, and persona development, all grounding design in real user needs from the start.',
  },
  {
    num: '02',
    title: 'Define',
    desc: 'User journey maps, information architecture, and wireframes that validate structure before any visual design work begins.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'High-fidelity UI design, design system creation, and interactive prototypes built for both stakeholder review and real user testing.',
  },
  {
    num: '04',
    title: 'Validate',
    desc: 'Usability testing sessions, A/B design variants, and iterative refinement driven by actual user feedback and data, not internal opinion.',
  },
  {
    num: '05',
    title: 'Deliver',
    desc: 'Developer-ready Figma files, component specs, design tokens, and handoff documentation built for a flawless implementation.',
  },
];

const techStack = [
  'Figma', 'FigJam', 'Maze', 'Hotjar', 'Miro', 'Principle',
  'Storybook', 'Zeroheight', 'Stark', 'Lottie', 'React', 'Tailwind CSS',
];

const faqs = [
  {
    q: 'What does a ui/ux design company actually do differently from an in-house designer?',
    a: 'A dedicated ui/ux design company brings structured user research, accessibility expertise, and design systems thinking refined across hundreds of engagements, rather than relying on the instincts of a single in-house hire working in isolation.',
  },
  {
    q: 'How are ui/ux design services priced, and what\'s typically included?',
    a: 'Most engagements are scoped around project complexity and cover the full research-to-handoff process, user research, wireframing, high-fidelity design, prototyping, and developer-ready file delivery, rather than charging piecemeal for each phase.',
  },
  {
    q: 'How does a ui/ux design agency validate that a design will actually convert before development starts?',
    a: 'Through usability testing on interactive prototypes well before a single line of code is written, surfacing friction points and confusion early when they\'re still cheap and fast to fix.',
  },
  {
    q: 'Is accessibility design really necessary, or is it optional for most products?',
    a: 'It\'s increasingly necessary, both legally and commercially. WCAG 2.2 AA compliance expands your usable audience and is now standard practice on every credible UI/UX design services engagement, not an optional add-on.',
  },
  {
    q: 'Can a design system from a UI/UX engagement be reused as a product scales?',
    a: 'Yes, that\'s the entire point. A properly documented design system becomes a long-term asset, speeding up future development and keeping new features visually consistent as a product and its team both grow.',
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

export default function UiUxDesign() {
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
        <title head-key="title">UI/UX Design Company | User-Centered Design Services</title>
        <meta
          head-key="description"
          name="description"
          content="Partner with a UI/UX design company to create intuitive, user-focused digital experiences. We deliver UX research, UI design, prototypes, and scalable design systems."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/ui-ux-design" />
      </Head>

      <section
        className="inner-hero"
        aria-labelledby="uiux-title"
        style={{ background: `linear-gradient(135deg, #060d1f 0%, #3a0a10 60%, ${HERO_COLOR} 100%)` }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Design</span>
            <h1 className="inner-hero-title" id="uiux-title">UI/UX<br />DESIGN</h1>
            <p className="inner-hero-sub">
              As a ui/ux design company grounded in user research, we balance beauty and function on every screen, placing each pixel with intent and validating every flow against how people actually behave, not how a deck assumes they will.
            </p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>
                Get Free UX Audit
                {arrowIcon}
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-split svc-split--start">
            <div className="reveal-l">
              <div className="sec-label">Why UI/UX Design</div>
              <h2 className="sec-title">DESIGN THAT<br /><em>USERS FEEL</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>
                A beautiful interface that confuses people is an expensive failure dressed up nicely. Great UX works invisibly: users reach their goal with no friction, and conversion follows as a natural byproduct rather than something forced.
              </p>
              <p className="sec-desc">
                Our ui/ux design services blend cognitive psychology, structured user research, and real visual craft to build products people genuinely enjoy using and businesses are glad to keep paying for.
              </p>
              <div className="svc-check-list">
                {[
                  'Every design decision backed by actual user research',
                  'WCAG 2.2 AA accessibility built into every single deliverable',
                  'Developer-ready Figma files complete with design systems',
                  'Usability testing happens before development ever begins',
                ].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">
                {['Web Apps', 'Mobile', 'E-Commerce', 'SaaS', 'Design Systems'].map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Design Impact Metrics</div>
              {[
                { label: 'Task Completion Rate', pct: 92, color: 'var(--blue)' },
                { label: 'User Satisfaction Score', pct: 96, color: 'var(--gold)' },
                { label: 'Conversion Lift Post-Redesign', pct: 41, color: 'var(--red)' },
                { label: 'Accessibility Compliance', pct: 100, color: 'var(--navy-mid)' },
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
                <div className="svc-highlight-val">500+</div>
                <div className="svc-highlight-lbl">Products designed across web, mobile, and SaaS platforms</div>
              </div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[
              { val: '41%', lbl: 'Avg. Conv. Lift' },
              { val: '500+', lbl: 'Products Designed' },
              { val: '2–3wk', lbl: 'UX Audit Delivery' },
              { val: '100%', lbl: 'A11y Compliance' },
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
            <h2 className="sec-title">RESEARCH TO<br /><em>PIXEL PERFECTION</em></h2>
            <p className="sec-desc">
              End-to-end capability from understanding real users through to developer-ready design systems, the full scope of a serious ui/ux design agency engagement.
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
            <div className="sec-label">Design Specialties</div>
            <h2 className="sec-title">DESIGN FOR<br /><em>EVERY PLATFORM</em></h2>
            <p className="sec-desc">
              From dense SaaS dashboards to consumer mobile apps, we design experiences that hold up across every touchpoint a user encounters.
            </p>
          </div>
          <div className="svc-grid-4">
            {designTypes.map((type) => (
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
            <h2 className="sec-title">FROM RESEARCH TO<br /><em>HANDOFF IN 5 PHASES</em></h2>
            <p className="sec-desc">
              A human-centered design process refined across more than 500 product design engagements.
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
            <div className="sec-label">Design Tools</div>
            <h2 className="sec-title">INDUSTRY-STANDARD<br /><em>TOOLKIT</em></h2>
            <p className="sec-desc">Professional design and research tools that ensure precision, collaboration, and seamless developer handoff.</p>
          </div>
          <div className="svc-tech-grid">
            {techStack.map((tech) => (
              <div key={tech} className="svc-tech-pill">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="uiux-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal">
            <h2 className="sec-title" id="uiux-faq-title">FAQs</h2>
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
          <span className="cta-eyebrow">Design That Converts</span>
          <h2 className="cta-title">BAD UX IS COSTING YOU<br /><em>USERS AND REVENUE</em>.</h2>
          <p className="cta-sub">
            Get a free UX audit and uncover the friction points, drop-offs, and missed opportunities hiding in your current product.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>
              Get Free UX Audit
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
