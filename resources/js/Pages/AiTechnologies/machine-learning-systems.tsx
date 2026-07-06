import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '94%', lbl: 'Model Accuracy' },
  { val: '10x', lbl: 'Faster Predictions' },
  { val: '50+', lbl: 'Models Deployed' },
  { val: '24/7', lbl: 'Inference Uptime' },
];

const bento = [
  { icon: 'ML', title: 'Custom Model Development', desc: 'Supervised, unsupervised, and reinforcement learning models train on your proprietary data, not off the shelf APIs with generic outputs', wide: false },
  { icon: 'CHURN', title: 'Churn & Retention Prediction', desc: 'At risk customers get identified weeks before they leave, triggering automated retention campaigns based on ML generated risk scores', wide: false },
  { icon: 'FORECAST', title: 'Demand & Revenue Forecasting', desc: 'Time series models predict demand, inventory needs, and revenue with confidence intervals, replacing spreadsheet guesswork with statistical precision', wide: true },
  { icon: 'NLP', title: 'NLP Classification & Extraction', desc: 'Support tickets get classified automatically, entities get extracted from documents, and sentiment gets analyzed across customer communications at scale', wide: false },
  { icon: 'VISION', title: 'Computer Vision Systems', desc: 'Image classification, object detection, and OCR pipelines support quality control, document digitization, and visual inspection automation', wide: false },
  { icon: 'MLOps', title: 'MLOps & Model Monitoring', desc: 'Production deployment pipelines, model versioning, drift detection, and automated retraining keep models accurate as data evolves', wide: false },
];

const useCases = [
  { num: '01', title: 'Predictive Customer Analytics', desc: 'Churn prediction, lifetime value scoring, next best offer recommendations, and segmentation models drive retention and upsell' },
  { num: '02', title: 'Supply Chain & Inventory', desc: 'Demand forecasting, optimal stock levels, supplier risk scoring, and logistics route optimization run on historical and real time data' },
  { num: '03', title: 'Fraud & Risk Detection', desc: 'Real time anomaly detection flags suspicious transactions, account takeovers, and behavioral anomalies, with explainable AI outputs for compliance' },
  { num: '04', title: 'Healthcare & Life Sciences', desc: 'Patient risk stratification, diagnostic support models, and clinical trial patient matching run on HIPAA compliant infrastructure' },
];

const timeline = [
  { num: '01', title: 'Data Assessment', desc: 'Evaluate data quality, volume, and overall suitability for ML model development' },
  { num: '02', title: 'Feature Engineering', desc: 'Extract, transform, and select the features that actually drive predictive power' },
  { num: '03', title: 'Train & Validate', desc: 'Model training, cross validation, hyperparameter tuning, and bias testing' },
  { num: '04', title: 'Deploy', desc: 'Production API deployment, monitoring setup, and integration with business systems' },
  { num: '05', title: 'Monitor & Retrain', desc: 'Drift detection, performance tracking, and scheduled model retraining cycles' },
];

const stack = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'MLflow', 'AWS SageMaker', 'Docker', 'Kubernetes', 'PostgreSQL', 'Apache Spark', 'FastAPI'];

const faqs = [
  { q: 'What\'s the difference between machine learning and traditional software?', a: 'Traditional software follows fixed, pre-programmed rules, while machine learning systems improve their accuracy over time by learning patterns directly from data.' },
  { q: 'How much data is needed to build an effective machine learning system?', a: 'It varies by use case, but generally more historical data leads to better predictions. Some applications can start delivering value with as little as a few thousand data points.' },
  { q: 'How long does it take to build and deploy a custom machine learning system?', a: 'Most projects take 3 to 6 months, covering data preparation, model training, testing, and integration into existing business systems.' },
  { q: 'Can a machine learning system continue improving after it\'s deployed?', a: 'Yes. Most systems are designed to retrain periodically on new data, allowing accuracy to improve continuously as more information becomes available.' },
  { q: 'What business problems are best suited for machine learning solutions?', a: 'Problems involving prediction, pattern recognition, or classification, things like demand forecasting, fraud detection, or customer churn prediction, tend to benefit most.' },
];

export default function MachineLearningSystems() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Head>
        <title head-key="title">Machine Learning Systems Development | AI Prediction & MLOps | LogicWorks LLC</title>
        <meta head-key="description" name="description" content="Build custom machine learning systems with LogicWorks LLC. Train models on your data for prediction, forecasting, and classification with scalable MLOps and high accuracy." />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/machine-learning-systems" />
      </Head>

      <section className="ai-tech-hero" aria-labelledby="ml-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />AI Technology</div>
          <h1 className="ai-tech-hero-title" id="ml-title">MACHINE<br /><span>LEARNING SYSTEMS</span></h1>
          <p className="ai-tech-hero-sub">Custom ML models trained on your own data predict, classify, and optimize at a speed no human team could match, with production grade MLOps keeping models accurate as your business keeps evolving.</p>
          <div className="ai-tech-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Discuss Your ML Project{arrowIcon}</Link>
            <Link href="/ai-consulting" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>AI Consulting</Link>
          </div>
        </div>
      </section>

      <section className="ai-tech-metrics">
        <div className="con"><div className="ai-tech-metrics-grid">{metrics.map((m) => (<div key={m.lbl} className="ai-tech-metric"><div className="ai-tech-metric-val">{m.val}</div><div className="ai-tech-metric-lbl">{m.lbl}</div></div>))}</div></div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-split">
            <div className="reveal-l">
              <div className="sec-label">Beyond Generic AI</div>
              <h2 className="sec-title">MODELS TRAINED ON<br /><em>YOUR DATA</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Off the shelf AI tools tend to give generic answers. Custom machine learning models trained on your proprietary data, however, surface patterns, predictions, and optimizations that are impossible to get from generic APIs, and just as impossible for competitors to replicate.</p>
              <div className="ai-tech-check-list">
                {['Models trained exclusively on your proprietary datasets', 'Over 94% accuracy on production classification tasks', 'A full MLOps pipeline with drift detection and retraining', 'Explainable AI outputs built for regulatory compliance'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['Prediction', 'NLP', 'Vision', 'Forecasting', 'MLOps'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">ML Business Impact</div>
              {[
                { icon: '🎯', title: '94% Prediction Accuracy', desc: 'Production models consistently outperform manual analysis and generic AI tools' },
                { icon: '⚡', title: '10x Faster Decisions', desc: 'Real time inference replaces days of manual analysis and spreadsheet modeling' },
                { icon: '📈', title: 'Proven ROI in 90 Days', desc: 'Churn reduction, demand accuracy, and fraud prevention deliver measurable returns quickly' },
                { icon: '🔒', title: 'Your Data Stays Yours', desc: 'Models train inside your environment, with no data shared and no vendor lock in on IP' },
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
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">ML Capabilities</div><h2 className="sec-title">PREDICTION AT<br /><em>SUPERHUMAN SCALE</em></h2><p className="sec-desc">End to end machine learning runs from raw data through production inference, with continuous improvement built in throughout.</p></div>
          <div className="ai-tech-bento">{bento.map((b) => (<article key={b.title} className={`ai-tech-bento-card${b.wide ? ' ai-tech-bento-card--wide' : ''}`}>{/* <div className="ai-tech-bento-icon">{b.icon}</div> */}<h3 className="ai-tech-bento-title">{b.title}</h3><p className="ai-tech-bento-desc">{b.desc}</p></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--mesh">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">Applications</div><h2 className="sec-title">ML THAT DRIVES<br /><em>REAL DECISIONS</em></h2></div>
          <div className="ai-tech-use-grid">{useCases.map((u) => (<article key={u.title} className="ai-tech-use-card"><div className="ai-tech-use-num">{u.num}</div><div><h3 className="ai-tech-use-title">{u.title}</h3><p className="ai-tech-use-desc">{u.desc}</p></div></article>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">ML Lifecycle</div><h2 className="sec-title">FROM DATA TO<br /><em>PRODUCTION IN 5 PHASES</em></h2><p className="sec-desc">A rigorous engineering methodology, not experiments that quietly never ship.</p></div>
          <div className="ai-tech-timeline">{timeline.map((s) => (<div key={s.num} className="ai-tech-timeline-step"><div className="ai-tech-timeline-dot">{s.num}</div><h3 className="ai-tech-timeline-title">{s.title}</h3><p className="ai-tech-timeline-desc">{s.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="ai-tech-sec ai-tech-sec--dark">
        <div className="con">
          <div className="ai-tech-sec-hd reveal"><div className="sec-label">ML Stack</div><h2 className="sec-title">PRODUCTION-GRADE<br /><em>ML ENGINEERING</em></h2><p className="sec-desc">Industry-standard frameworks and infrastructure for reliable, scalable machine learning at enterprise level.</p></div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="ml-faq" title={<>FAQs</>} desc="" faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Turn Data Into Decisions" title={<>YOUR DATA KNOWS THINGS<br /><em>YOU DO NOT, YET</em>.</>} sub="Discuss your ML project with our AI architects and get a feasibility assessment on your data and use case." btnText="Discuss Your ML Project" note="" />
    </div>
  );
}
