import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '52%', lbl: 'Conversion Rate Lift' },
  { val: 'SOC2', lbl: 'Security Standards' },
  { val: '2.8x', lbl: 'Lead Quality Score' },
  { val: '99.9%', lbl: 'Platform Uptime' },
];

const solutions = [
  { num: '01', title: 'Compliant website development', desc: 'Regulatory aware design with proper disclosures, accessibility compliance, and trust architecture that converts even skeptical visitors' },
  { num: '02', title: 'FinTech product design', desc: 'User onboarding flows, dashboard UX, and mobile app interfaces for banking, lending, and investment platforms' },
  { num: '03', title: 'Lead generation and nurture', desc: 'Calculator tools, gated content, and email sequences that qualify prospects while staying inside compliance boundaries' },
  { num: '04', title: 'Financial SEO and content', desc: 'YMYL optimized content, E E A T signals, and keyword strategies for wealth management, lending, and insurance verticals' },
  { num: '05', title: 'Secure client portals', desc: 'Encrypted client dashboards, document vaults, and account management portals with multi factor authentication' },
  { num: '06', title: 'Analytics and attribution', desc: 'Compliant tracking, multi touch attribution, and ROI dashboards mapped directly to financial services KPIs' },
];

const useCases = [
  { num: '01', title: 'Banks and credit unions', desc: 'Member acquisition sites, online banking UX, and local branch SEO that drives deposits and loans' },
  { num: '02', title: 'Wealth management and RIAs', desc: 'Authority building websites, client portals, and compliant content marketing for AUM growth' },
  { num: '03', title: 'FinTech startups', desc: 'Product led growth sites, app store optimization, and investor ready brand experiences' },
  { num: '04', title: 'Insurance and lending', desc: 'Quote funnels, comparison tools, and PPC campaigns with fully compliant landing pages' },
];

const timeline = [
  { num: '01', title: 'Compliance review', desc: 'Regulatory landscape assessment, a current asset audit, and competitive analysis' },
  { num: '02', title: 'Strategy and UX', desc: 'Conversion funnel design, compliance workflow mapping, and trust architecture planning' },
  { num: '03', title: 'Build and secure', desc: 'Development with encryption, accessibility, and regulatory disclosure integration' },
  { num: '04', title: 'Review and launch', desc: 'A compliance review cycle, legal approval workflow, and staged rollout' },
  { num: '05', title: 'Optimize and scale', desc: 'A/B testing, SEO growth, and ongoing compliance monitoring' },
];

const stack = ['Salesforce FSC', 'Wealthbox', 'Redtail', 'Plaid', 'Stripe', 'DocuSign', 'HubSpot', 'Google Analytics 4', 'AWS', 'Auth0', 'Bloomberg', 'Morningstar'];

const faqs = [
  { q: 'Why does the finance industry require extra security on digital platforms?', a: 'Financial platforms handle highly sensitive data and are frequent targets for fraud, making bank-level encryption, secure authentication, and compliance with regulations like PCI DSS essential.' },
  { q: 'Can a financial services website be built to comply with industry regulations?', a: 'Yes. Compliant financial websites are built with proper data handling, disclosure requirements, and security architecture aligned to relevant financial regulations from the outset.' },
  { q: 'What digital marketing strategies work best for financial services firms?', a: 'Content marketing that builds trust and authority, combined with targeted SEO and compliant PPC advertising, tends to perform well in a highly regulated, trust-driven industry.' },
  { q: 'How important is mobile experience for financial services platforms?', a: 'Very important. A large share of banking and financial interactions now happen on mobile, making responsive, secure mobile experiences a baseline expectation.' },
  { q: 'Can financial platforms integrate with existing CRM and accounting software?', a: 'Yes, most custom financial platforms are built with API integrations to connect with existing CRM, accounting, and reporting systems already in use.' },
];

export default function Finance() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#0d1b3e' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Finance & FinTech Digital Solutions | Compliant Websites & Growth | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Build secure, compliant finance and FinTech platforms with LogicWorks LLC. Optimize conversions with FINRA-ready websites, UX design, SEO, and lead generation systems." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/industries/finance" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="finance-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">FIN</div>
            <span className="ind-inner-label">Finance and FinTech</span>
          </div>
          <h1 className="ind-inner-title" id="finance-title">Finance and<br /><span>FinTech Solutions</span></h1>
          <p className="ind-inner-sub">Compliant, conversion optimized digital experiences for banks, credit unions, RIAs, and FinTech startups, built for an industry where trust, security, and performance are simply non negotiable.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Finance Audit{arrowIcon}</Link>
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
              <h2 className="sec-title">COMPLIANCE AND<br /><em>CONVERSION COLLIDE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Financial services face one of the hardest digital balancing acts there is, regulatory compliance, consumer trust, and conversion optimization, all at once. A generic agency creates liability here. What you need instead is a partner who actually understands FINRA, SEC, GDPR, and the psychology behind financial decision making.</p>
              <div className="ind-check-list">
                {['Regulatory compliant copy and disclosure workflows', 'Bank grade security and encryption standards', 'Conversion optimized onboarding and application flows', 'Trust signals and social proof engineered specifically for finance'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['FINRA', 'SOC 2', 'KYC and AML', 'FinTech', 'wealth management'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '📈', title: '52% conversion lift', desc: 'Optimized funnels guide prospects through fully compliant application flows' },
                { icon: '🔒', title: 'Regulatory compliance', desc: 'FINRA, SEC, and GDPR aware builds with proper audit trails throughout' },
                { icon: '🎯', title: '2.8x lead quality', desc: 'Targeting and qualification that surfaces genuinely high intent prospects' },
                { icon: '⚡', title: 'Enterprise uptime', desc: '99.9 percent availability backed by financial grade infrastructure' },
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
            <h2 className="sec-title">FINANCIAL DIGITAL<br /><em>EXCELLENCE</em></h2>
            <p className="sec-desc">Six capabilities built around the unique demands of financial services marketing and technology.</p>
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
            <div className="sec-label">Who We Serve</div>
            <h2 className="sec-title">FINANCE<br /><em>SECTORS</em></h2>
            <p className="sec-desc">Digital solutions spanning the entire financial services landscape.</p>
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
            <h2 className="sec-title">COMPLIANT IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From regulatory audit to a real growth engine, structured financial services delivery throughout.</p>
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
            <h2 className="sec-title">FINANCIAL STACK<br /><em>CONNECTED</em></h2>
            <p className="sec-desc">CRM, portfolio, and compliance platforms integrated seamlessly.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="fin-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Finance" title={<>TRUST IS YOUR PRODUCT.<br /><em>YOUR DIGITAL SHOULD PROVE IT</em>.</>} sub="Book a free compliance and conversion audit tailored specifically to financial services regulations." btnText="Get a Finance Audit" note="" />
    </div>
  );
}
