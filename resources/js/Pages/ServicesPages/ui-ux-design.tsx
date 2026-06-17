import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HERO_COLOR = '#c8192a';

const capabilities = [
  { badge: 'Research', title: 'User Research & Testing', desc: 'Interviews, surveys, usability testing, and heatmap analysis that uncover how users actually behave — not how we assume they behave.' },
  { badge: 'IA', title: 'Information Architecture', desc: 'Logical navigation structures, content hierarchies, and user flows that reduce friction and guide users to their goals effortlessly.' },
  { badge: 'UI', title: 'Visual Interface Design', desc: 'Pixel-perfect UI with cohesive design systems — typography, color, spacing, and components that scale across products and platforms.' },
  { badge: 'Proto', title: 'Interactive Prototyping', desc: 'High-fidelity Figma prototypes with micro-interactions and user flows validated before a single line of code is written.' },
  { badge: 'A11y', title: 'Accessibility Design', desc: 'WCAG 2.2 AA compliant interfaces — contrast ratios, keyboard navigation, screen reader compatibility, and inclusive design patterns.' },
  { badge: 'DS', title: 'Design Systems', desc: 'Reusable component libraries with documentation that accelerate development, ensure consistency, and reduce design debt across teams.' },
];

const designTypes = [
  { icon: '01', title: 'Web & SaaS Products', desc: 'Dashboard design, onboarding flows, settings panels, and complex data interfaces that make powerful software feel intuitive.' },
  { icon: '02', title: 'Mobile App Design', desc: 'iOS and Android UI following platform guidelines with gesture-driven interactions and thumb-zone optimized layouts.' },
  { icon: '03', title: 'E-Commerce UX', desc: 'Product discovery, filtering, cart, and checkout flows engineered to reduce abandonment and increase conversion rates.' },
  { icon: '04', title: 'Brand & Marketing Sites', desc: 'Visually stunning marketing experiences with scroll-driven storytelling, animation, and conversion-focused page architecture.' },
];

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Stakeholder workshops, user research, competitive audit, and persona development to ground design in real user needs.' },
  { num: '02', title: 'Define', desc: 'User journey maps, information architecture, and wireframes that validate structure before visual design begins.' },
  { num: '03', title: 'Design', desc: 'High-fidelity UI design, design system creation, and interactive prototypes for stakeholder and user testing.' },
  { num: '04', title: 'Validate', desc: 'Usability testing sessions, A/B design variants, and iterative refinement based on real user feedback and data.' },
  { num: '05', title: 'Deliver', desc: 'Developer-ready Figma files, component specs, design tokens, and handoff documentation for flawless implementation.' },
];

const techStack = ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Miro', 'Principle', 'Storybook', 'Zeroheight', 'Stark', 'Lottie', 'React', 'Tailwind CSS'];

const faqs = [
  { q: 'What\'s the difference between UI and UX design?', a: 'UX (User Experience) focuses on how a product works — research, flows, and usability. UI (User Interface) focuses on how it looks — visual design, typography, and components. We deliver both as an integrated discipline.' },
  { q: 'Do you conduct user research?', a: 'Yes. User research is foundational to our process — not an upsell. We conduct interviews, usability tests, and analytics reviews to ensure designs are validated by real user behavior.' },
  { q: 'Can you redesign our existing product?', a: 'Absolutely. We perform UX audits of existing products, identify friction points and drop-off areas, and redesign incrementally or comprehensively based on your goals and timeline.' },
  { q: 'Will developers be able to implement your designs?', a: 'Yes. We deliver developer-ready Figma files with auto-layout, component variants, spacing tokens, and detailed specs. We also support dev teams during implementation.' },
  { q: 'How long does a UI/UX project take?', a: 'A focused UX audit and wireframe package takes 2–3 weeks. Full product UI/UX for a web app typically takes 6–10 weeks depending on scope and complexity.' },
];

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function UiUxDesign() {
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
        <title head-key="title">UI/UX Design | LogicWorks — User-Research-Driven Product Design</title>
        <meta head-key="description" name="description" content="LogicWorks UI/UX design — user research, wireframing, prototyping, design systems, and accessibility. Every pixel placed with purpose to drive engagement and conversion." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ui-ux-design" />
      </Head>

      <section className="inner-hero" aria-labelledby="uiux-title" style={{ background: `linear-gradient(135deg, #060d1f 0%, #3a0a10 60%, ${HERO_COLOR} 100%)` }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="svc-hero-bg-grid" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="svc-hero-animate">
            <span className="inner-hero-label">Design</span>
            <h1 className="inner-hero-title" id="uiux-title">UI/UX<br />DESIGN</h1>
            <p className="inner-hero-sub">User-research-driven design that balances beauty and function — every pixel placed with purpose, every flow validated by real user behavior.</p>
            <div className="svc-hero-actions">
              <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Free UX Audit{arrowIcon}</Link>
              <Link href="/case-studies" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>View Our Work</Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Beautiful interfaces that confuse users are expensive failures. Great UX is invisible — users accomplish their goals effortlessly, and conversion follows naturally.</p>
              <p className="sec-desc">LogicWorks combines cognitive psychology, user research, and visual craft to design products people love using and businesses love paying for.</p>
              <div className="svc-check-list">
                {['Every design decision backed by user research', 'WCAG 2.2 AA accessibility built into every deliverable', 'Developer-ready Figma files with design systems', 'Usability testing before development begins'].map((item) => (
                  <div key={item} className="svc-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="svc-tag-row">{['Web Apps', 'Mobile', 'E-Commerce', 'SaaS', 'Design Systems'].map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r svc-panel">
              <div className="svc-panel-label">Design Impact Metrics</div>
              {[{ label: 'Task Completion Rate', pct: 92, color: 'var(--blue)' }, { label: 'User Satisfaction Score', pct: 96, color: 'var(--gold)' }, { label: 'Conversion Lift Post-Redesign', pct: 41, color: 'var(--red)' }, { label: 'Accessibility Compliance', pct: 100, color: 'var(--navy-mid)' }].map((bar) => (
                <div key={bar.label} className="svc-bar-stat">
                  <div className="svc-bar-row"><span className="svc-bar-label">{bar.label}</span><span className="svc-bar-pct" style={{ color: bar.color }}>{bar.pct}%</span></div>
                  <div className="svc-bar-track"><div className="svc-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} /></div>
                </div>
              ))}
              <div className="svc-highlight-box"><div className="svc-highlight-val">500+</div><div className="svc-highlight-lbl">Products Designed</div></div>
            </div>
          </div>
          <div className="svc-stat-grid reveal">
            {[{ val: '41%', lbl: 'Avg. Conv. Lift' }, { val: '500+', lbl: 'Products Designed' }, { val: '2–3wk', lbl: 'UX Audit Delivery' }, { val: '100%', lbl: 'A11y Compliance' }].map((s) => (
              <div key={s.lbl} className="svc-stat"><div className="svc-stat-val">{s.val}</div><div className="svc-stat-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Core Capabilities</div><h2 className="sec-title">RESEARCH TO<br /><em>PIXEL PERFECTION</em></h2><p className="sec-desc">End-to-end design capability — from understanding users to delivering developer-ready design systems.</p></div>
          <div className="svc-grid-3 svc-capabilities">{capabilities.map((c) => (<article key={c.title} className="svc-card svc-card--white"><span className="svc-card-badge">{c.badge}</span><h3 className="svc-card-title">{c.title}</h3><p className="svc-card-desc">{c.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Design Specialties</div><h2 className="sec-title">DESIGN FOR<br /><em>EVERY PLATFORM</em></h2><p className="sec-desc">From complex SaaS dashboards to consumer mobile apps — we design experiences that perform across every touchpoint.</p></div>
          <div className="svc-grid-4">{designTypes.map((t) => (<article key={t.title} className="svc-card reveal"><div className="svc-use-icon">{t.icon}</div><h3 className="svc-card-title">{t.title}</h3><p className="svc-card-desc">{t.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--alt">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Our Process</div><h2 className="sec-title">FROM RESEARCH TO<br /><em>HANDOFF IN 5 PHASES</em></h2><p className="sec-desc">A human-centered design process refined across 500+ product design engagements.</p></div>
          <div className="svc-process-grid">{processSteps.map((s) => (<div key={s.num} className="svc-process-step"><div className="svc-process-num">{s.num}</div><h3 className="svc-process-title">{s.title}</h3><p className="svc-process-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="svc-sec svc-sec--dark">
        <div className="con">
          <div className="svc-sec-hd-c reveal"><div className="sec-label">Design Tools</div><h2 className="sec-title">INDUSTRY-STANDARD<br /><em>TOOLKIT</em></h2><p className="sec-desc">Professional design and research tools that ensure precision, collaboration, and seamless developer handoff.</p></div>
          <div className="svc-tech-grid">{techStack.map((t) => <div key={t} className="svc-tech-pill">{t}</div>)}</div>
        </div>
      </section>

      <section className="faq-sec svc-sec" aria-labelledby="uiux-faq-title">
        <div className="con">
          <div className="sec-hd-c reveal"><div className="sec-label">FAQ</div><h2 className="sec-title" id="uiux-faq-title">UI/UX DESIGN<br /><em>QUESTIONS ANSWERED</em></h2><p className="sec-desc">What product teams and founders ask before investing in professional UI/UX design.</p></div>
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
          <span className="cta-eyebrow">Design That Converts</span>
          <h2 className="cta-title">BAD UX IS COSTING YOU<br /><em>USERS AND REVENUE</em>.</h2>
          <p className="cta-sub">Get a free UX audit and discover the friction points, drop-offs, and missed opportunities hiding in your current product.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Get Free UX Audit{arrowIcon}</Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Now</a>
          </div>
          <p className="cta-note">FREE AUDIT · NO COMMITMENT · DELIVERED IN 48 HOURS</p>
        </div>
      </section>
    </div>
  );
}
