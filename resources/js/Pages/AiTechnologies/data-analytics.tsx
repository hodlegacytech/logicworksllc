import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '360°', lbl: 'Unified Data View' },
  { val: '10x', lbl: 'Faster Reporting' },
  { val: '99.9%', lbl: 'Pipeline Uptime' },
  { val: '50+', lbl: 'Source Integrations' },
];

const bento = [
  { icon: 'ETL', title: 'Modern Data Pipelines', desc: 'Cloud-native ETL/ELT pipelines that ingest, transform, and load data from 50+ sources — CRMs, ERPs, ad platforms, databases, and APIs — into a unified warehouse.', wide: false },
  { icon: 'DASH', title: 'Executive Dashboards', desc: 'Real-time KPI dashboards built in Looker, Power BI, Tableau, or custom React — designed for C-suite decision-making, not just analyst deep-dives.', wide: false },
  { icon: 'SELF', title: 'Self-Service Analytics', desc: 'Empower every department with governed self-service tools — marketing, sales, ops, and finance query data independently without waiting on IT.', wide: true },
  { icon: 'CDP', title: 'Customer Data Platform', desc: 'Unify fragmented customer touchpoints into a single 360° profile — web, email, CRM, support, and product usage — for segmentation and personalization.', wide: false },
  { icon: 'QUAL', title: 'Data Quality & Governance', desc: 'Automated validation, deduplication, lineage tracking, and role-based access controls that keep your data trustworthy and compliant.', wide: false },
  { icon: 'ALERT', title: 'Anomaly Detection & Alerts', desc: 'AI-powered monitoring that flags revenue drops, traffic spikes, inventory issues, and KPI deviations — pushed to Slack, email, or PagerDuty instantly.', wide: false },
];

const useCases = [
  { num: '01', title: 'Revenue & Sales Analytics', desc: 'Pipeline forecasting, cohort analysis, LTV/CAC tracking, and commission reporting — one source of truth for sales leadership.' },
  { num: '02', title: 'Marketing Attribution', desc: 'Multi-touch attribution across paid, organic, email, and social — know exactly which channels drive revenue, not just clicks.' },
  { num: '03', title: 'Operations & Supply Chain', desc: 'Inventory optimization, demand planning dashboards, vendor performance tracking, and real-time logistics visibility.' },
  { num: '04', title: 'Product & User Analytics', desc: 'Feature adoption funnels, retention cohorts, session replay integration, and A/B test result dashboards for product teams.' },
];

const timeline = [
  { num: '01', title: 'Data Audit', desc: 'Inventory sources, assess quality, map business questions to available data.' },
  { num: '02', title: 'Architecture Design', desc: 'Design warehouse schema, pipeline architecture, and governance framework.' },
  { num: '03', title: 'Pipeline Build', desc: 'Ingest sources, transform data, and populate the warehouse with validated datasets.' },
  { num: '04', title: 'Dashboard Delivery', desc: 'Build executive and departmental dashboards with stakeholder review cycles.' },
  { num: '05', title: 'Enable & Scale', desc: 'Train teams, document data dictionary, and expand to new sources and use cases.' },
];

const stack = ['Snowflake', 'BigQuery', 'dbt', 'Airbyte', 'Fivetran', 'Looker', 'Power BI', 'Tableau', 'Python', 'Apache Airflow', 'Segment', 'PostgreSQL'];

const faqs = [
  { q: 'We have data scattered across dozens of tools — can you unify it?', a: 'Yes — that is our core specialty. We connect CRMs, ad platforms, ERPs, support tools, and databases into a single warehouse with automated daily syncs and a unified data model.' },
  { q: 'Do we need a data team to maintain this?', a: 'We build self-sustaining systems with documentation and monitoring. Most clients operate with one part-time analyst after launch. We offer managed analytics retainers if you prefer hands-off operation.' },
  { q: 'Which BI tool should we use?', a: 'It depends on your team and stack. Looker for SQL-savvy teams, Power BI for Microsoft ecosystems, Tableau for advanced visualization, or custom React dashboards for embedded analytics in your product.' },
  { q: 'How long until we see actionable dashboards?', a: 'First executive dashboard with 3–5 core KPIs: 4–6 weeks. Full multi-department analytics platform: 3–5 months depending on source complexity and data quality.' },
  { q: 'Is our data secure and compliant?', a: 'All pipelines use encrypted transfers, role-based access, audit logging, and SOC 2-compliant infrastructure. We support GDPR, HIPAA, and industry-specific compliance requirements.' },
];

export default function DataAnalytics() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Helmet>
        <title>Data Analytics | LogicWorks — Business Intelligence & Dashboards</title>
        <meta name="description" content="LogicWorks builds enterprise data analytics platforms — unified pipelines, executive dashboards, self-service BI, and actionable insights that drive decisions at scale." />
        <link rel="canonical" href="https://logicworks.com/data-analytics" />
      </Helmet>

      <section className="ai-tech-hero" aria-labelledby="analytics-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Data Intelligence</div>
          <h1 className="ai-tech-hero-title" id="analytics-title">DATA<br /><span>ANALYTICS</span></h1>
          <p className="ai-tech-hero-sub">Transform raw data into strategic intelligence — unified pipelines, executive dashboards, and actionable insights that turn every department into a data-driven decision machine.</p>
          <div className="ai-tech-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Data Project{arrowIcon}</Link>
            <Link to="/ai-solutions" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All AI Services</Link>
          </div>
        </div>
      </section>

      <section className="ai-tech-metrics">
        <div className="con">
          <div className="ai-tech-metrics-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="ai-tech-metric">
                <div className="ai-tech-metric-val">{m.val}</div>
                <div className="ai-tech-metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-split">
            <div className="reveal-l">
              <div className="sec-label">The Problem</div>
              <h2 className="sec-title">YOU CANNOT MANAGE<br /><em>WHAT YOU CANNOT SEE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Data lives in silos — CRM here, ads there, spreadsheets everywhere. Leaders make decisions on gut feel because getting a unified view takes weeks. Modern analytics platforms unify every source into real-time dashboards your entire organization can trust.</p>
              <div className="ai-tech-check-list">
                {['Unified data warehouse from 50+ sources', 'Executive dashboards updated in real time', 'Self-service analytics for every department', 'Automated alerts when KPIs deviate'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['ETL Pipelines', 'Dashboards', 'CDP', 'Governance', 'Alerts'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '360° Business View', desc: 'Every metric from every department in one unified platform.' },
                { icon: '⚡', title: '10x Faster Reporting', desc: 'Automated pipelines replace manual spreadsheet exports forever.' },
                { icon: '↑', title: 'Data-Driven Culture', desc: 'Self-service tools empower teams to answer their own questions.' },
                { icon: '🔔', title: 'Proactive Alerts', desc: 'AI catches anomalies before they become crises.' },
              ].map((o) => (
                <div key={o.title} className="ai-tech-outcome-item">
                  <div className="ai-tech-outcome-icon">{o.icon}</div>
                  <div className="ai-tech-outcome-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">ANALYTICS BUILT<br /><em>FOR DECISIONS</em></h2>
            <p className="sec-desc">Six modules that transform scattered data into a strategic intelligence engine.</p>
          </div>
          <div className="ai-tech-bento">
            {bento.map((b) => (
              <article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}>
                <div className="ai-tech-bento-icon">{b.icon}</div>
                <h3 className="ai-tech-bento-title">{b.title}</h3>
                <p className="ai-tech-bento-desc">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--mesh">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">ANALYTICS FOR<br /><em>EVERY FUNCTION</em></h2>
            <p className="sec-desc">Revenue, marketing, operations, and product — one platform serving every team.</p>
          </div>
          <div className="ai-tech-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="ai-tech-use-card">
                <div className="ai-tech-use-num">{u.num}</div>
                <div><h3 className="ai-tech-use-title">{u.title}</h3><p className="ai-tech-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Implementation</div>
            <h2 className="sec-title">LIVE IN<br /><em>5 PHASES</em></h2>
            <p className="sec-desc">From data audit to self-service analytics — structured delivery with milestones at every step.</p>
          </div>
          <div className="ai-tech-timeline">
            {timeline.map((s) => (
              <div key={s.num} className="ai-tech-timeline-step">
                <div className="ai-tech-timeline-dot">{s.num}</div>
                <h3 className="ai-tech-timeline-title">{s.title}</h3>
                <p className="ai-tech-timeline-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal">
            <div className="sec-label">Technology</div>
            <h2 className="sec-title">BUILT ON<br /><em>MODERN STACKS</em></h2>
            <p className="sec-desc">Cloud warehouses, transformation tools, and BI platforms — best-in-class at every layer.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="analytics-faq" title={<>Data Analytics<br /><em>QUESTIONS ANSWERED</em></>} desc="What executives and data leaders ask before investing in analytics infrastructure." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="See What Your Data Reveals" title={<>DECISIONS BACKED<br /><em>BY DATA</em>.</>} sub="Book a free data audit and get a scoped roadmap for your analytics platform." btnText="Start Your Data Project" note="FREE DATA AUDIT · SCOPED ROADMAP · NO COMMITMENT" />
    </div>
  );
}
