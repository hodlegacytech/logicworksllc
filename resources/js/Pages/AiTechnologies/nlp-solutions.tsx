import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAiTechPage, checkIcon, arrowIcon, AiTechFaq, AiTechCta } from './shared';

const metrics = [
  { val: '95%', lbl: 'Classification Accuracy' },
  { val: '10M+', lbl: 'Docs Processed Daily' },
  { val: '80%', lbl: 'Manual Review Reduction' },
  { val: '40+', lbl: 'Languages Supported' },
];

const bento = [
  { icon: 'LLM', title: 'Custom LLM Integration', desc: 'Fine-tuned models and prompt engineering pipelines that embed GPT-4, Claude, Llama, or open-source LLMs into your products with domain-specific accuracy.', wide: false },
  { icon: 'RAG', title: 'Retrieval-Augmented Generation', desc: 'Connect LLMs to your private data — documents, databases, APIs — for grounded, citation-backed answers that eliminate hallucination risk.', wide: false },
  { icon: 'PIPE', title: 'NLP Processing Pipelines', desc: 'End-to-end pipelines for entity extraction, sentiment analysis, topic modeling, summarization, and translation — batch or real-time at enterprise scale.', wide: true },
  { icon: 'DOC', title: 'Document Intelligence', desc: 'Extract structured data from contracts, invoices, medical records, and forms using OCR + NLP — turning unstructured documents into actionable database records.', wide: false },
  { icon: 'CLASS', title: 'Text Classification & Routing', desc: 'Auto-categorize emails, tickets, reviews, and social mentions with custom-trained classifiers that route content to the right team instantly.', wide: false },
  { icon: 'EVAL', title: 'Model Evaluation & Monitoring', desc: 'Continuous benchmarking, drift detection, and A/B testing frameworks to ensure NLP models maintain accuracy as language and data evolve.', wide: false },
];

const useCases = [
  { num: '01', title: 'Legal & Compliance', desc: 'Contract clause extraction, regulatory document analysis, and automated compliance checking across thousands of pages in minutes.' },
  { num: '02', title: 'Financial Services', desc: 'Earnings call summarization, sentiment analysis on market news, KYC document parsing, and fraud pattern detection in communications.' },
  { num: '03', title: 'Healthcare & Life Sciences', desc: 'Clinical note structuring, medical literature summarization, adverse event detection, and patient feedback sentiment analysis.' },
  { num: '04', title: 'Media & Customer Insights', desc: 'Social listening at scale, review mining, brand sentiment tracking, and automated report generation from unstructured feedback.' },
];

const timeline = [
  { num: '01', title: 'Use Case Definition', desc: 'Identify NLP tasks, data sources, accuracy requirements, and success metrics.' },
  { num: '02', title: 'Data Preparation', desc: 'Clean, label, and structure training data — or architect RAG indexes from existing documents.' },
  { num: '03', title: 'Model Development', desc: 'Fine-tune classifiers, build RAG pipelines, or engineer LLM prompt chains for your domain.' },
  { num: '04', title: 'Integration & API', desc: 'Deploy as REST APIs, embedded SDKs, or batch processing jobs connected to your systems.' },
  { num: '05', title: 'Monitor & Retrain', desc: 'Track accuracy, detect model drift, and retrain on new data to maintain peak performance.' },
];

const stack = ['OpenAI', 'Anthropic', 'Hugging Face', 'spaCy', 'LangChain', 'Pinecone', 'Elasticsearch', 'Python', 'FastAPI', 'AWS SageMaker', 'Databricks', 'PostgreSQL'];

const faqs = [
  { q: 'Do we need our own training data?', a: 'For fine-tuned classifiers, yes — typically 500–5,000 labeled examples depending on complexity. For RAG-based LLM solutions, we index your existing documents and knowledge bases — no manual labeling required.' },
  { q: 'Can you work with proprietary or sensitive data?', a: 'Absolutely. We deploy on your infrastructure (VPC, on-premise, or private cloud), use encrypted pipelines, and support air-gapped environments for regulated industries.' },
  { q: 'Open-source or commercial LLMs — which is better?', a: 'It depends on your use case. Commercial models (GPT-4, Claude) excel at general reasoning. Open-source (Llama, Mistral) offer cost control and data sovereignty. We recommend based on accuracy, latency, and compliance requirements.' },
  { q: 'How do you prevent AI hallucinations?', a: 'RAG architecture grounds every response in verified source documents with citations. Confidence thresholds flag uncertain outputs. Human-in-the-loop review workflows catch edge cases before they reach users.' },
  { q: 'What is the typical project timeline?', a: 'RAG-based Q&A system: 6–8 weeks. Custom text classification model: 8–12 weeks. Full document intelligence pipeline: 3–5 months depending on document complexity and volume.' },
];

export default function NlpSolutions() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useAiTechPage(pageRef);

  return (
    <div ref={pageRef} className="ai-tech-page">
      <Helmet>
        <title>NLP & Language Models | LogicWorks — Custom LLM Integration</title>
        <meta name="description" content="LogicWorks builds custom NLP solutions and LLM integrations — RAG pipelines, document intelligence, text classification, and enterprise language AI at scale." />
        <link rel="canonical" href="https://logicworks.com/nlp-solutions" />
      </Helmet>

      <section className="ai-tech-hero" aria-labelledby="nlp-title">
        <div className="ai-tech-hero-mesh" aria-hidden="true" />
        <div className="ai-tech-hero-grid" aria-hidden="true" />
        <div className="con ai-tech-hero-inner">
          <div className="ai-tech-eyebrow"><span className="ai-tech-eyebrow-dot" />Conversational AI</div>
          <h1 className="ai-tech-hero-title" id="nlp-title">NLP & LANGUAGE<br /><span>MODELS</span></h1>
          <p className="ai-tech-hero-sub">Custom LLM integrations and NLP pipelines that turn unstructured language into business intelligence — from document extraction to real-time classification at enterprise scale.</p>
          <div className="ai-tech-hero-actions">
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Explore NLP Solutions{arrowIcon}</Link>
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
              <div className="sec-label">The Challenge</div>
              <h2 className="sec-title">80% OF BUSINESS DATA<br /><em>IS UNSTRUCTURED</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Emails, documents, reviews, call transcripts, and social posts contain critical intelligence — but manual processing cannot scale. NLP and LLM pipelines extract, classify, and summarize language data automatically, turning text into structured business assets.</p>
              <div className="ai-tech-check-list">
                {['Custom LLM integration with domain fine-tuning', 'RAG pipelines grounded in your private data', 'Document intelligence with OCR + NLP extraction', 'Real-time classification and sentiment analysis'].map((item) => (
                  <div key={item} className="ai-tech-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="ai-tech-tag-row">{['LLM', 'RAG', 'NLP Pipelines', 'Document AI', 'Classification'].map((t) => <span key={t} className="ai-tech-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r ai-tech-outcome-panel">
              <div className="ai-tech-outcome-label">Expected Outcomes</div>
              {[
                { icon: '◎', title: '95% Classification Accuracy', desc: 'Custom-trained models outperform generic NLP on domain-specific text.' },
                { icon: '↓', title: '80% Less Manual Review', desc: 'Automated extraction and routing eliminate repetitive document processing.' },
                { icon: '🌍', title: '40+ Languages', desc: 'Multilingual pipelines for global operations without separate systems.' },
                { icon: '⚡', title: 'Real-Time Processing', desc: 'Stream millions of documents and messages with sub-second latency.' },
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
            <h2 className="sec-title">LANGUAGE AI<br /><em>ENGINEERED FOR BUSINESS</em></h2>
            <p className="sec-desc">Six NLP modules that transform raw text into structured intelligence your systems can act on.</p>
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
            <h2 className="sec-title">NLP FOR<br /><em>REGULATED INDUSTRIES</em></h2>
            <p className="sec-desc">Legal, finance, healthcare, and media — where accuracy and compliance are non-negotiable.</p>
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
            <p className="sec-desc">From use case definition to production NLP pipelines — structured, secure, and measurable.</p>
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
            <h2 className="sec-title">BUILT ON<br /><em>PROVEN STACKS</em></h2>
            <p className="sec-desc">Commercial and open-source LLMs, vector databases, and ML infrastructure — chosen for your requirements.</p>
          </div>
          <div className="ai-tech-stack">{stack.map((t) => <span key={t} className="ai-tech-stack-pill">{t}</span>)}</div>
        </div>
      </section>

      <AiTechFaq id="nlp-faq" title={<>NLP & LLM<br /><em>QUESTIONS ANSWERED</em></>} desc="What CTOs and data leaders ask before investing in custom NLP solutions." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <AiTechCta eyebrow="Unlock Your Language Data" title={<>TURN TEXT INTO<br /><em>BUSINESS INTELLIGENCE</em>.</>} sub="Book a technical discovery session and get a scoped NLP roadmap with architecture recommendations." btnText="Explore NLP Solutions" note="FREE DISCOVERY SESSION · ARCHITECTURE ROADMAP · NO COMMITMENT" />
    </div>
  );
}
