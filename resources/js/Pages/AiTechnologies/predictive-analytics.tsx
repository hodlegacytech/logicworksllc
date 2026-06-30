import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '92%', lbl: 'Forecast Accuracy' },
  { val: '45d', lbl: 'Early Churn Detection' },
  { val: '3.5x', lbl: 'ROI on Campaigns' },
  { val: '18%', lbl: 'Revenue Lift' },
];

const bento = [
  { icon: 'CHURN', title: 'Churn prediction and prevention', desc: 'ML models identify at risk customers 30 to 45 days before cancellation, triggering automated retention campaigns, success team alerts, and personalized offers', wide: false },
  { icon: 'DEMAND', title: 'Demand forecasting', desc: 'Sales volume, inventory needs, and staffing requirements get predicted by product, region, and season, reducing stockouts and overstock by over 25%', wide: false },
  { icon: 'LEAD', title: 'Lead scoring and conversion prediction', desc: 'Propensity models rank every lead and opportunity by likelihood to convert, so sales focuses energy on deals that close rather than ones that stall', wide: true },
  { icon: 'PRICE', title: 'Dynamic pricing optimization', desc: 'AI driven pricing models adjust in real time based on demand elasticity, competitor pricing, inventory levels, and customer segments', wide: false },
  { icon: 'FRAUD', title: 'Fraud and anomaly detection', desc: 'Real time pattern recognition flags suspicious transactions, account takeovers, and behavioral anomalies before financial damage occurs', wide: false },
  { icon: 'CLV', title: 'Customer lifetime value modeling', desc: 'LTV gets predicted at acquisition and throughout the customer journey, informing acquisition spend, retention investment, and segment strategy', wide: false },
];

const useCases = [
  { num: '01', title: 'SaaS and subscription', desc: 'Churn prediction, expansion revenue scoring, usage based upsell triggers, and cohort LTV modeling for product led growth companies' },
  { num: '02', title: 'E commerce and retail', desc: 'Demand forecasting, basket analysis, personalized recommendations, and dynamic pricing that maximizes margin without sacrificing volume' },
  { num: '03', title: 'Financial services', desc: 'Credit risk scoring, fraud detection, portfolio optimization, and customer propensity models for cross sell and retention' },
  { num: '04', title: 'Healthcare and insurance', desc: 'Patient readmission prediction, claims fraud detection, resource allocation forecasting, and population health risk stratification' },
];

const timeline = [
  { num: '01', title: 'Opportunity mapping', desc: 'Identify the highest value prediction use cases aligned with business KPIs and available data' },
  { num: '02', title: 'Data engineering', desc: 'Build feature stores, clean historical datasets, and establish model training pipelines' },
  { num: '03', title: 'Model development', desc: 'Train, validate, and benchmark ML models against baseline performance and business targets' },
  { num: '04', title: 'Deploy and integrate', desc: 'Move to production deployment, with real time scoring APIs connected to CRM, ERP, and marketing systems' },
  { num: '05', title: 'Monitor and retrain', desc: 'Track model drift, measure business impact, and retrain on new data to maintain accuracy' },
];

const stack = ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'AWS SageMaker', 'Databricks', 'Snowflake', 'dbt', 'MLflow', 'Looker', 'Salesforce', 'Segment'];

const faqs = [
  { q: 'What is predictive analytics and how does it differ from standard reporting?', a: 'Predictive analytics uses historical data and statistical models to forecast future outcomes, while standard reporting only describes what has already happened.' },
  { q: 'What business outcomes can predictive analytics actually forecast?', a: 'Common applications include sales forecasting, customer churn prediction, inventory demand, and identifying which leads are most likely to convert.' },
  { q: 'How accurate are predictive analytics models in practice?', a: 'Accuracy depends heavily on data quality and volume, but well-built models typically improve decision-making significantly even when not perfectly precise.' },
  { q: 'Does predictive analytics require a large existing dataset to be useful?', a: 'More historical data generally improves accuracy, but even moderate datasets can produce useful directional insights for planning purposes.' },
  { q: 'How often should predictive analytics models be updated?', a: 'Most models benefit from retraining on new data every few months, since market conditions and customer behavior shift over time.' },
];

export default function PredictiveAnalytics() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Predictive Analytics | LogicWorks — ML Forecasting & Churn Prediction</title>
        <meta head-key="description" name="description" content="We forecast demand, detect churn, and surface your highest value opportunities through ML models built to see around corners and act before your competitors ever do." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/predictive-analytics" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="predictive-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Data Intelligence</div>
          <h1 className="ai-tech-hero-title" id="predictive-title">PREDICTIVE<br /><span>ANALYTICS</span></h1>
          <p className="ai-tech-hero-sub">We forecast demand, detect churn, and surface your highest value opportunities through ML models built to see around corners and act before your competitors ever do.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Build Predictive Models{arrowIcon}</Link>
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
              <div className="sec-label">The Opportunity</div>
              <h2 className="sec-title">REACTING IS<br /><em>ALREADY TOO LATE</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>By the time churn shows up on your dashboard, the customer is already gone. By the time demand spikes, you are already out of stock. Predictive analytics uses machine learning on your historical data to forecast outcomes and trigger action before problems, and opportunities, pass you by entirely.</p>
              <div className="ai-tech-check-list">
                {['Churn prediction 30 to 45 days before cancellation', 'Demand forecasting with over 92% accuracy', 'Lead scoring that triples conversion rates', 'Automated actions triggered directly by model outputs'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Churn ML', 'forecasting', 'lead scoring', 'pricing AI', 'fraud detection'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '92% forecast accuracy', desc: 'ML models consistently outperform spreadsheet projections' },
                { icon: '🛡', title: '45 day churn warning', desc: 'You intervene before customers leave rather than after' },
                { icon: '↑', title: '18% revenue lift', desc: 'Better targeting, pricing, and retention compound revenue growth' },
                { icon: '🎯', title: '3.5x campaign ROI', desc: 'Predictive targeting eliminates wasted ad spend' },
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
            <h2 className="sec-title">MODELS THAT<br /><em>PREDICT AND ACT</em></h2>
            <p className="sec-desc">Six predictive modules range from churn prevention to dynamic pricing, all connected directly to automated business actions.</p>
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
            <h2 className="sec-title">PREDICTION FOR<br /><em>EVERY VERTICAL</em></h2>
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
            <h2 className="sec-title">ML STACK<br /><em>BUILT FOR PRODUCTION</em></h2>
            <p className="sec-desc">Training frameworks, feature stores, and deployment infrastructure — enterprise-grade at every layer.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="predictive-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="See the Future First" title={<>PREDICT. PREVENT.<br /><em>PROFIT</em>.</>} sub="Book a free predictive analytics assessment and get a scoped ML roadmap for your highest impact use case." btnText="Build Predictive Models" note="FREE ML ASSESSMENT · SCOPED ROADMAP · NO COMMITMENT" />
    </div>
  );
}
