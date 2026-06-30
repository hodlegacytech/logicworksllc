import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '360°', lbl: 'Unified Data View' },
  { val: '10x', lbl: 'Faster Reporting' },
  { val: '99.9%', lbl: 'Pipeline Uptime' },
  { val: '50+', lbl: 'Source Integrations' },
];

const bento = [
  { icon: 'ETL', title: 'Modern Data Pipelines', desc: 'Cloud native ETL and ELT pipelines ingest, transform, and load data from over 50 sources, including CRMs, ERPs, ad platforms, and APIs, into one warehouse', wide: false },
  { icon: 'DASH', title: 'Executive Dashboards', desc: 'Real time KPI dashboards built in Looker, Power BI, Tableau, or custom React, designed for executive decision making rather than analyst deep dives alone', wide: false },
  { icon: 'SELF', title: 'Self-Service Analytics', desc: 'Marketing, sales, ops, and finance query data independently through governed self service tools, without waiting on IT for every request', wide: true },
  { icon: 'CDP', title: 'Customer Data Platform', desc: 'Fragmented customer touchpoints unify into a single profile spanning web, email, CRM, support, and product usage, supporting segmentation and personalization', wide: false },
  { icon: 'QUAL', title: 'Data Quality & Governance', desc: 'Automated validation, deduplication, lineage tracking, and role based access controls keep your data trustworthy and compliant', wide: false },
  { icon: 'ALERT', title: 'Anomaly Detection & Alerts', desc: 'AI powered monitoring flags revenue drops, traffic spikes, inventory issues, and KPI deviations, pushed instantly to Slack, email, or PagerDuty', wide: false },
];

const useCases = [
  { num: '01', title: 'Revenue & Sales Analytics', desc: 'Pipeline forecasting, cohort analysis, LTV and CAC tracking, and commission reporting form one source of truth for sales leadership' },
  { num: '02', title: 'Marketing Attribution', desc: 'Multi touch attribution across paid, organic, email, and social shows exactly which channels drive revenue rather than just clicks' },
  { num: '03', title: 'Operations & Supply Chain', desc: 'Inventory optimization, demand planning dashboards, vendor performance tracking, and real time logistics visibility' },
  { num: '04', title: 'Product & User Analytics', desc: 'Feature adoption funnels, retention cohorts, session replay integration, and A/B test dashboards built for product teams' },
];

const timeline = [
  { num: '01', title: 'Data Audit', desc: 'Inventory sources, assess quality, and map business questions to available data' },
  { num: '02', title: 'Architecture Design', desc: 'Design warehouse schema, pipeline architecture, and a governance framework' },
  { num: '03', title: 'Pipeline Build', desc: 'Ingest sources, transform data, and populate the warehouse with validated datasets' },
  { num: '04', title: 'Dashboard Delivery', desc: 'Build executive and departmental dashboards through stakeholder review cycles' },
  { num: '05', title: 'Enable & Scale', desc: 'Train teams, document the data dictionary, and expand to new sources and use cases' },
];

const stack = ['Snowflake', 'BigQuery', 'dbt', 'Airbyte', 'Fivetran', 'Looker', 'Power BI', 'Tableau', 'Python', 'Apache Airflow', 'Segment', 'PostgreSQL'];

const faqs = [
  { q: 'What\'s the difference between data analytics and basic reporting?', a: 'Basic reporting shows what already happened, while data analytics digs deeper to explain why it happened and often predicts what\'s likely to happen next.' },
  { q: 'Do we need a data scientist on staff to benefit from data analytics services?', a: 'No. Most data analytics partnerships handle the technical analysis externally, delivering insights and dashboards your existing team can act on directly.' },
  { q: 'What kind of business data can actually be analyzed?', a: 'Nearly any structured data, sales figures, website traffic, customer behavior, inventory levels can be analyzed to surface patterns and actionable insights.' },
  { q: 'How quickly can data analytics show a measurable business impact?', a: 'Initial insights often surface within the first few weeks, though the real value compounds over months as more data accumulates and trends become clearer.' },
  { q: 'Can data analytics integrate with the software we already use?', a: 'Yes. Most analytics platforms are built to pull data directly from existing CRMs, e-commerce platforms, and internal databases without requiring a system overhaul.' },
];

export default function DataAnalytics() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Data Analytics | LogicWorks — Business Intelligence & Dashboards</title>
        <meta head-key="description" name="description" content="We transform raw data into genuine strategic intelligence through unified pipelines, executive dashboards, and insights that turn every department into a data driven decision machine." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/data-analytics" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="analytics-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Data Intelligence</div>
          <h1 className="ai-tech-hero-title" id="analytics-title">DATA<br /><span>ANALYTICS</span></h1>
          <p className="ai-tech-hero-sub">We transform raw data into genuine strategic intelligence through unified pipelines, executive dashboards, and insights that turn every department into a data driven decision machine.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Start Your Data Project{arrowIcon}</Link>
            <Link href="/ai-solutions" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>All AI Services</Link>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Data tends to live in silos, a CRM here, ad platforms there, spreadsheets scattered everywhere in between. Leaders end up making decisions on gut feel because getting a unified view takes weeks. Modern analytics platforms, however, unify every source into real time dashboards your entire organization can actually trust.</p>
              <div className="ai-tech-check-list">
                {['A unified data warehouse pulling from over 50 sources', 'Executive dashboards updated in real time', 'Self service analytics available to every department', 'Automated alerts the moment KPIs deviate'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['ETL Pipelines', 'Dashboards', 'Customer Data Platform', 'Governance', 'Alerts'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '360° Business View', desc: 'Every metric from every department lives in one unified platform' },
                { icon: '⚡', title: '10x Faster Reporting', desc: 'Automated pipelines replace manual spreadsheet exports for good' },
                { icon: '↑', title: 'Data-Driven Culture', desc: 'Self service tools let teams answer their own questions directly' },
                { icon: '🔔', title: 'Proactive Alerts', desc: 'AI catches anomalies before they ever become a crisis' },
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
            <p className="sec-desc">Six modules transform scattered data into a genuine strategic intelligence engine.</p>
          </div>
          <div className="ai-tech-bento">
            {bento.map((b) => (
              <article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}>
                {/* <div className="ai-tech-bento-icon">{b.icon}</div> */}
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

      <AiTechFaq id="analytics-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="See What Your Data Reveals" title={<>DECISIONS BACKED<br /><em>BY DATA</em>.</>} sub="Book a free data audit and get a scoped roadmap for your analytics platform." btnText="Start Your Data Project" note="" />
    </div>
  );
}
