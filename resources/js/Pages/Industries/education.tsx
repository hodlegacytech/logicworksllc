import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '64%', lbl: 'Enrollment Inquiry Lift' },
  { val: '2.9x', lbl: 'Application Completion' },
  { val: '45%', lbl: 'Cost Per Lead Reduction' },
  { val: '80+', lbl: 'Institutions Served' },
];

const solutions = [
  { num: '01', title: 'Enrollment funnel design', desc: 'Multi step inquiry forms, program finders, and nurture sequences that guide prospects from curiosity to application' },
  { num: '02', title: 'Institutional website design', desc: 'Modern, accessible websites with program showcases, faculty profiles, virtual tours, and mobile first application portals' },
  { num: '03', title: 'Program specific SEO', desc: 'Degree and certificate landing pages optimized for student search queries and Google education features' },
  { num: '04', title: 'EdTech platform development', desc: 'Learning management interfaces, student dashboards, and course marketplace builds for EdTech startups' },
  { num: '05', title: 'Paid enrollment campaigns', desc: 'Google Ads, Meta, and YouTube campaigns targeting program specific keywords and demographic segments' },
  { num: '06', title: 'Analytics and attribution', desc: 'Enrollment funnel tracking from first touch through matriculation, with multi channel attribution reporting' },
];

const useCases = [
  { num: '01', title: 'Universities and colleges', desc: 'Undergraduate and graduate enrollment marketing with program specific digital strategy' },
  { num: '02', title: 'K through 12 and private schools', desc: 'Parent focused marketing, open house promotion, and community reputation building' },
  { num: '03', title: 'EdTech and online learning', desc: 'Platform UX, course marketing, and growth strategies for digital education companies' },
  { num: '04', title: 'Training and certification', desc: 'Professional development program marketing and corporate training portal builds' },
];

const timeline = [
  { num: '01', title: 'Enrollment audit', desc: 'Current funnel analysis, competitive benchmarking, and student journey mapping' },
  { num: '02', title: 'Strategy and content', desc: 'Program page architecture, SEO keyword strategy, and enrollment campaign planning' },
  { num: '03', title: 'Build and integrate', desc: 'Website development, LMS and SIS integration, and application flow optimization' },
  { num: '04', title: 'Launch and recruit', desc: 'SEO go live, paid campaign activation, and virtual event marketing' },
  { num: '05', title: 'Enroll and optimize', desc: 'Ongoing CRO, seasonal campaigns, and yield optimization by program' },
];

const stack = ['Canvas LMS', 'Blackboard', 'Moodle', 'Salesforce Education', 'Slate', 'HubSpot', 'Google Ads', 'Eventbrite', 'Zoom', 'Handshake', 'PowerSchool', 'Banner SIS'];

const faqs = [
  { q: 'What digital tools matter most for schools and educational institutions?', a: 'A clear, accessible website, online enrollment or application systems, and strong local SEO tend to have the biggest impact on prospective student inquiries.' },
  { q: 'How important is accessibility compliance for educational websites?', a: 'Very important, and often legally required. Many educational institutions must meet specific accessibility standards to ensure all prospective students can use the site.' },
  { q: 'Can an education platform support both prospective student marketing and current student tools?', a: 'Yes, many platforms are built to serve both functions, combining a marketing-focused public site with secure portals for enrolled students and staff.' },
  { q: 'What marketing strategies work best for student enrollment?', a: 'Content marketing answering common prospective student questions, paired with targeted SEO and PPC around program-specific searches, tends to drive strong enrollment results.' },
  { q: 'How do educational institutions typically handle online application processes?', a: 'Through dedicated application portals integrated directly into the main website, streamlining document submission and application tracking for prospective students.' },
];

export default function Education() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#2563eb' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Education & EdTech Marketing Services | Enrollment Funnels & SEO | LogicWorks AI</title>
        <meta head-key="description" name="description" content="Increase student enrollment with LogicWorks AI education solutions. Enrollment funnels, LMS integration, EdTech SEO, and digital marketing for schools and universities." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/industries/education" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="education-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">EDU</div>
            <span className="ind-inner-label">Education and EdTech</span>
          </div>
          <h1 className="ind-inner-title" id="education-title">Education and<br /><span>EdTech</span></h1>
          <p className="ind-inner-sub">Student enrollment funnels, LMS integrations, and digital marketing for schools, universities, and EdTech platforms, turning genuine interest into enrolled students and engaged learners.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get an Education Audit{arrowIcon}</Link>
            <Link href="/industries" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All Industries</Link>
          </div>
        </div>
      </section>

      <section className="ind-impact-band">
        <div className="con">
          <div className="ind-impact-grid">
            {metrics.map((m) => (
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
              <div className="sec-label">The Challenge</div>
              <h2 className="sec-title">STUDENTS SHOP<br /><em>ONLINE FIRST</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Prospective students compare programs, read reviews, and evaluate institutions digitally well before ever setting foot on campus. Schools running outdated websites, broken application flows, and zero digital marketing tend to lose enrollment to competitors offering a modern, mobile first experience instead.</p>
              <div className="ind-check-list">
                {['Enrollment funnel optimization from inquiry through application', 'LMS and SIS integration for a seamless student experience', 'Program specific SEO and content marketing', 'Virtual tour and event marketing for remote prospects'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['Enrollment', 'LMS', 'EdTech', 'student SEO', 'virtual events'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '🎓', title: '64 percent more inquiries', desc: 'Program pages and SEO capture student search intent effectively' },
                { icon: '📝', title: '2.9x application rate', desc: 'Streamlined application flows reduce abandonment noticeably' },
                { icon: '💰', title: '45 percent lower CPL', desc: 'Organic enrollment marketing reduces paid dependence' },
                { icon: '🌐', title: 'Global reach', desc: 'Digital marketing attracts international students reliably' },
              ].map((o) => (
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
            <div className="sec-label">Solutions</div>
            <h2 className="sec-title">EDUCATION<br /><em>DIGITAL STACK</em></h2>
            <p className="sec-desc">Six capabilities drive enrollment and engagement across every education sector.</p>
          </div>
          <div className="ind-solution-grid">
            {solutions.map((s) => (
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
            <div className="sec-label">Institutions</div>
            <h2 className="sec-title">EDUCATION<br /><em>SECTORS</em></h2>
            <p className="sec-desc">Digital solutions spanning the entire education landscape.</p>
          </div>
          <div className="ind-use-grid">
            {useCases.map((u) => (
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
            <div className="sec-label">Process</div>
            <h2 className="sec-title">ENROLL IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From enrollment audit to a genuine student pipeline, structured education marketing delivery throughout.</p>
          </div>
          <div className="ind-process-track">
            {timeline.map((s) => (
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
            <div className="sec-label">Integrations</div>
            <h2 className="sec-title">EDTECH STACK<br /><em>CONNECTED</em></h2>
            <p className="sec-desc">LMS, SIS, and enrollment marketing platforms.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="edu-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Education" title={<>ENROLLMENT STARTS<br /><em>BEFORE THE FIRST VISIT</em>.</>} sub="Book a free enrollment marketing audit and see exactly how digital strategy fills your programs." btnText="Get an Education Audit" note="" />
    </div>
  );
}
