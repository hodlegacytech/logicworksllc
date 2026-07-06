import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useIndustriesPage, checkIcon, arrowIcon, IndustriesFaq, IndustriesCta } from './shared';

const metrics = [
  { val: '5.1x', lbl: 'Case Inquiry Volume' },
  { val: 'TOP3', lbl: 'Local Attorney Rankings' },
  { val: '68%', lbl: 'Cost Per Case Reduction' },
  { val: '40+', lbl: 'Practice Areas Served' },
];

const solutions = [
  { num: '01', title: 'Attorney SEO and content', desc: 'Practice area landing pages, legal blog content, and schema markup that rank for genuinely case winning keywords' },
  { num: '02', title: 'Local SEO domination', desc: 'Google Business Profile optimization, legal directory citations, and geo targeted content for your jurisdiction' },
  { num: '03', title: 'Legal PPC management', desc: 'Google Ads for high intent legal queries, paired with ethics compliant ad copy and landing page optimization' },
  { num: '04', title: 'Law firm website design', desc: 'Authority building designs with attorney profiles, case results, trust badges, and mobile first intake forms' },
  { num: '05', title: 'Intake optimization', desc: 'Multi step forms, live chat, click to call, and CRM integration that capture leads before a competitor\'s phone rings' },
  { num: '06', title: 'Reputation management', desc: 'Review generation, monitoring, and response strategies that build social proof and lift local rankings' },
];

const useCases = [
  { num: '01', title: 'Personal injury', desc: 'High competition PI SEO, PPC, and intake systems that capture accident victims fast' },
  { num: '02', title: 'Family and divorce law', desc: 'Sensitive content strategy, local SEO, and conversion flows built for emotional decision makers' },
  { num: '03', title: 'Criminal defense', desc: 'Urgent intent SEO and round the clock intake optimization for time critical searches' },
  { num: '04', title: 'Corporate and business law', desc: 'Authority content, LinkedIn strategy, and B2B lead generation for business clients' },
];

const timeline = [
  { num: '01', title: 'Competitive audit', desc: 'Analyze competitor rankings, ad spend, and intake flows across your market and practice areas' },
  { num: '02', title: 'Keyword and content strategy', desc: 'Map high intent legal queries to practice area pages and a content calendar' },
  { num: '03', title: 'Build and optimize', desc: 'Website redesign, intake form optimization, and CRM integration deployment' },
  { num: '04', title: 'Launch and rank', desc: 'SEO go live, GBP optimization, and PPC campaign activation with an ethics review' },
  { num: '05', title: 'Cases and scale', desc: 'Ongoing content, link building, and conversion optimization by practice area' },
];

const stack = ['Clio', 'MyCase', 'LawPay', 'CallRail', 'LeadDocket', 'Google Ads', 'Semrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Avvo', 'FindLaw'];

const faqs = [
  { q: 'What makes a law firm website different from a typical business website?', a: 'Legal websites need to build trust quickly, often through case results, attorney credentials, and clear practice area information, while complying with state bar advertising rules.' },
  { q: 'How important is local SEO for law firms specifically?', a: 'Extremely important, since most legal searches are highly localized, like "personal injury lawyer near me," making local visibility directly tied to new client inquiries.' },
  { q: 'Can a legal website include a secure client portal?', a: 'Yes. Many law firm platforms now include secure portals for document sharing and case updates, built with the security legal client data requires.' },
  { q: 'What kind of content tends to perform best for legal marketing?', a: 'Educational content addressing common legal questions tends to perform well, building authority while capturing search traffic from people researching their situation.' },
  { q: 'How do law firms typically generate qualified leads online?', a: 'Through a combination of local SEO, PPC campaigns targeting specific practice areas, and conversion-optimized landing pages built around common legal needs.' },
];

export default function Legal() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustriesPage(pageRef);
  const accentStyle = { '--ind-accent': '#374151' } as React.CSSProperties;

  return (
    <div ref={pageRef} className="ind-page" style={accentStyle}>
      <Head>
        <title head-key="title">Legal Marketing Services | Attorney SEO & Law Firm Growth</title>
        <meta head-key="description" name="description" content="Grow your law firm with LogicWorks LLC legal marketing services. Attorney SEO, PPC, local domination, and optimized intake systems that generate qualified case inquiries." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/industries/legal" />
      </Head>

      <section className="ind-inner-hero" aria-labelledby="legal-title">
        <div className="ind-inner-hero-glow" aria-hidden="true" />
        <div className="ind-inner-hero-grid" aria-hidden="true" />
        <div className="con ind-inner-hero-inner">
          <Link href="/industries" className="ind-back-link">← All Industries</Link>
          <div className="ind-inner-badge">
            <div className="ind-inner-code">LAW</div>
            <span className="ind-inner-label">Legal and Law Firms</span>
          </div>
          <h1 className="ind-inner-title" id="legal-title">Legal and Law Firm<br /><span>Marketing</span></h1>
          <p className="ind-inner-sub">Attorney SEO, local domination, PPC, and authority websites that establish real credibility and generate qualified case inquiries, so your firm wins the clients that actually matter.</p>
          <div className="ind-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get a Legal Marketing Audit{arrowIcon}</Link>
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
              <h2 className="sec-title">CLIENTS GOOGLE<br /><em>THEIR CRISIS</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>When someone needs a lawyer, they search immediately, often on mobile and often in genuine panic. Firms without dominant local SEO, real practice area content, and fast loading intake forms tend to lose cases to competitors who simply appear first and convert fastest.</p>
              <div className="ind-check-list">
                {['Practice area SEO that ranks for high intent legal queries', 'Local map pack domination across your jurisdiction', 'Conversion optimized intake forms and live chat', 'Ethics compliant advertising across every channel'].map((item) => (
                  <div key={item} className="ind-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ind-tag-row">{['Attorney SEO', 'legal PPC', 'intake forms', 'local SEO', 'content marketing'].map((t) => <span key={t} className="ind-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ind-outcome-panel">
              <div className="ind-outcome-label">Expected Outcomes</div>
              {[
                { icon: '⚖', title: '5.1x case inquiries', desc: 'Practice area pages and local SEO capture high intent searches reliably' },
                { icon: '📍', title: 'Map pack dominance', desc: 'Top three rankings for attorney near me and practice specific queries' },
                { icon: '💰', title: '68 percent lower cost per case', desc: 'Organic authority reduces how much you depend on PPC alone' },
                { icon: '📱', title: 'Mobile first intake', desc: 'One click call, chat, and form options optimized for urgent searches' },
              ].map((o) => (
                <div key={o.title} className="ind-outcome-item">
                  {/* <div className="ind-outcome-icon">{o.icon}</div> */}
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
            <h2 className="sec-title">LEGAL MARKETING<br /><em>THAT CONVERTS</em></h2>
            <p className="sec-desc">Six capabilities engineered specifically for law firm client acquisition and authority building.</p>
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
            <div className="sec-label">Practice Areas</div>
            <h2 className="sec-title">WE SERVE<br /><em>EVERY PRACTICE</em></h2>
            <p className="sec-desc">Proven legal marketing across more than 40 practice areas.</p>
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
            <h2 className="sec-title">DOMINATE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From competitive audit to a real case generating machine, structured legal marketing delivery throughout.</p>
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
            <h2 className="sec-title">LEGAL TECH<br /><em>CONNECTED</em></h2>
            <p className="sec-desc">Case management, intake, and marketing platforms.</p>
          </div>
          <div className="ind-stack-grid">{stack.map((t) => <span key={t} className="ind-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <IndustriesFaq id="law-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <IndustriesCta eyebrow="Built for Law Firms" title={<>AUTHORITY THAT<br /><em>WINS CASES</em>.</>} sub="Book a free legal marketing audit and see exactly how targeted digital strategy fills your intake pipeline." btnText="Get a Legal Marketing Audit" note="" />
    </div>
  );
}
