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
  { icon: 'CHURN', title: 'Churn Prediction & Prevention', desc: 'ML models identify at-risk customers 30–45 days before cancellation — triggering automated retention campaigns, success team alerts, and personalized offers.', wide: false },
  { icon: 'DEMAND', title: 'Demand Forecasting', desc: 'Predict sales volume, inventory needs, and staffing requirements by product, region, and season — reducing stockouts and overstock by 25%+.', wide: false },
  { icon: 'LEAD', title: 'Lead Scoring & Conversion Prediction', desc: 'Propensity models rank every lead and opportunity by likelihood to convert — so sales focuses energy on deals that close, not ones that stall.', wide: true },
  { icon: 'PRICE', title: 'Dynamic Pricing Optimization', desc: 'AI-driven pricing models that adjust in real time based on demand elasticity, competitor pricing, inventory levels, and customer segments.', wide: false },
  { icon: 'FRAUD', title: 'Fraud & Anomaly Detection', desc: 'Real-time pattern recognition that flags suspicious transactions, account takeovers, and behavioral anomalies before financial damage occurs.', wide: false },
  { icon: 'CLV', title: 'Customer Lifetime Value Modeling', desc: 'Predict LTV at acquisition and throughout the customer journey — informing acquisition spend, retention investment, and segment strategy.', wide: false },
];

const useCases = [
  { num: '01', title: 'SaaS & Subscription', desc: 'Churn prediction, expansion revenue scoring, usage-based upsell triggers, and cohort LTV modeling for product-led growth companies.' },
  { num: '02', title: 'E-Commerce & Retail', desc: 'Demand forecasting, basket analysis, personalized recommendations, and dynamic pricing that maximizes margin without sacrificing volume.' },
  { num: '03', title: 'Financial Services', desc: 'Credit risk scoring, fraud detection, portfolio optimization, and customer propensity models for cross-sell and retention.' },
  { num: '04', title: 'Healthcare & Insurance', desc: 'Patient readmission prediction, claims fraud detection, resource allocation forecasting, and population health risk stratification.' },
];

const timeline = [
  { num: '01', title: 'Opportunity Mapping', desc: 'Identify highest-value prediction use cases aligned with business KPIs and available data.' },
  { num: '02', title: 'Data Engineering', desc: 'Build feature stores, clean historical datasets, and establish model training pipelines.' },
  { num: '03', title: 'Model Development', desc: 'Train, validate, and benchmark ML models against baseline performance and business targets.' },
  { num: '04', title: 'Deploy & Integrate', desc: 'Production deployment with real-time scoring APIs connected to CRM, ERP, and marketing systems.' },
  { num: '05', title: 'Monitor & Retrain', desc: 'Track model drift, measure business impact, and retrain on new data to maintain accuracy.' },
];

const stack = ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'AWS SageMaker', 'Databricks', 'Snowflake', 'dbt', 'MLflow', 'Looker', 'Salesforce', 'Segment'];

const faqs = [
  { q: 'Do we need years of historical data to start?', a: 'More data improves accuracy, but meaningful models can be built with 6–12 months of transactional history. We assess your data during discovery and recommend the highest-impact use cases based on what is available.' },
  { q: 'How accurate are predictive models in practice?', a: 'Our churn models typically achieve 85–92% accuracy. Demand forecasts within 8–12% of actuals. Lead scoring improves conversion rates 2–4x by prioritizing high-propensity prospects. Accuracy varies by use case and data quality.' },
  { q: 'Can predictions trigger automated actions?', a: 'Yes — we build closed-loop systems where model outputs trigger CRM workflows, email campaigns, pricing adjustments, or alert notifications. Prediction without action is just a report; we deliver both.' },
  { q: 'How do you prevent model drift over time?', a: 'Automated monitoring tracks prediction accuracy, feature distributions, and business KPI correlation. When drift is detected, models retrain on fresh data — typically monthly or quarterly depending on data velocity.' },
  { q: 'What is the typical project timeline?', a: 'Single prediction model (e.g., churn scoring): 8–10 weeks. Multi-model predictive platform with integrations: 4–6 months. Enterprise predictive analytics program: 6–9 months phased rollout.' },
];

export default function PredictiveAnalytics() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Predictive Analytics | LogicWorks — ML Forecasting & Churn Prediction</title>
        <meta head-key="description" name="description" content="LogicWorks builds predictive analytics solutions — churn prediction, demand forecasting, lead scoring, and ML models that surface opportunities before competitors do." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/predictive-analytics" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="predictive-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Data Intelligence</div>
          <h1 className="ai-tech-hero-title" id="predictive-title">PREDICTIVE<br /><span>ANALYTICS</span></h1>
          <p className="ai-tech-hero-sub">Forecast demand, detect churn, and surface your highest-value opportunities — ML models that see around corners and act before your competitors do.</p>
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
              <p className="sec-desc" style={{ marginBottom: '20px' }}>By the time churn shows up in your dashboard, the customer is gone. By the time demand spikes, you are out of stock. Predictive analytics uses machine learning on your historical data to forecast outcomes and trigger actions before problems — and opportunities — pass you by.</p>
              <div className="ai-tech-check-list">
                {['Churn prediction 30–45 days before cancellation', 'Demand forecasting with 92%+ accuracy', 'Lead scoring that 3x conversion rates', 'Automated actions triggered by model outputs'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Churn ML', 'Forecasting', 'Lead Scoring', 'Pricing AI', 'Fraud Detection'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '92% Forecast Accuracy', desc: 'ML models outperform spreadsheet projections consistently.' },
                { icon: '🛡', title: '45-Day Churn Warning', desc: 'Intervene before customers leave — not after.' },
                { icon: '↑', title: '18% Revenue Lift', desc: 'Better targeting, pricing, and retention compound revenue growth.' },
                { icon: '🎯', title: '3.5x Campaign ROI', desc: 'Predictive targeting eliminates wasted ad spend.' },
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
            <h2 className="sec-title">MODELS THAT<br /><em>PREDICT & ACT</em></h2>
            <p className="sec-desc">Six predictive modules from churn prevention to dynamic pricing — all connected to automated business actions.</p>
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
            <h2 className="sec-title">PREDICTION FOR<br /><em>EVERY VERTICAL</em></h2>
            <p className="sec-desc">SaaS, e-commerce, finance, and healthcare — industry-specific models with proven business impact.</p>
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
            <p className="sec-desc">From opportunity mapping to production ML — structured delivery with accuracy benchmarks at every stage.</p>
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

      <AiTechFaq id="predictive-faq" title={<>Predictive Analytics<br /><em>QUESTIONS ANSWERED</em></>} desc="What data and business leaders ask before investing in ML prediction models." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="See the Future First" title={<>PREDICT. PREVENT.<br /><em>PROFIT</em>.</>} sub="Book a free predictive analytics assessment and get a scoped ML roadmap for your highest-impact use case." btnText="Build Predictive Models" note="FREE ML ASSESSMENT · SCOPED ROADMAP · NO COMMITMENT" />
    </div>
  );
}
