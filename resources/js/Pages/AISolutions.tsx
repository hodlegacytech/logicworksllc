import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'AI-Powered CRMs', desc: 'Custom CRM systems that score leads automatically, trigger intelligent follow-up sequences, and give your sales team predictive insights that close deals faster.', color: 'var(--blue)', href: '/ai-powered-crm' },
  { title: 'Workflow Automation', desc: 'End-to-end automation of your most time-consuming processes — from lead capture to onboarding, invoicing, and reporting. Average time saved: 40+ hours per week.', color: 'var(--red)', href: '/ai-automation' },
  { title: 'Machine Learning Systems', desc: 'Custom ML models trained on your proprietary data to predict churn, forecast demand, classify support tickets, and surface high-value opportunities before your team sees them.', color: 'var(--gold)', href: '/machine-learning-systems' },
  { title: 'AI Chatbots & Assistants', desc: 'Intelligent conversational agents that handle qualification, FAQs, scheduling, and support at scale — delivering a consistent, branded experience 24/7 without human intervention.', color: 'var(--blue)', href: '/ai-chatbots' },
  { title: 'NLP & Language Models', desc: 'Custom LLM integrations, fine-tuned models, and NLP pipelines that extract intelligence from unstructured text — reviews, support tickets, contracts, and more.', color: 'var(--red)', href: '/nlp-solutions' },
  { title: 'Predictive Analytics', desc: 'Turn historical data into forward-looking strategy. Our predictive models surface revenue risks and opportunities weeks before they appear in your dashboard.', color: 'var(--gold)', href: '/predictive-analytics' },
];

export default function AISolutions() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ai-svc-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.ai-svc-grid', start: 'top 80%' } }
      );
      gsap.fromTo('.ai-stat',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.ai-stats-row', start: 'top 85%' } }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Head>
        <title head-key="title">AI & Technology Solutions | LogicWorks — Machine Learning, Automation & More</title>
        <meta head-key="description" name="description" content="Custom AI automation, machine learning systems, AI chatbots, CRM intelligence, and predictive analytics from LogicWorks — America's elite AI agency." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/ai-solutions" />
      </Head>

      <section className="inner-hero" aria-labelledby="ai-page-title" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #091840 50%, #0d1b3e 100%)' }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <span className="inner-hero-label">AI & Machine Intelligence</span>
          <h1 className="inner-hero-title" id="ai-page-title" style={{ maxWidth: '800px' }}>THE FUTURE OF BUSINESS<br />IS <span style={{ color: 'var(--gold-lt)' }}>INTELLIGENT</span>.</h1>
          <p className="inner-hero-sub">We architect custom AI systems that don't just automate — they think, learn, and continuously optimize for your business outcomes. This isn't a chatbot plugin. This is competitive transformation.</p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Book AI Consultation<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <Link  to="/ai-automation" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Explore AI Automation</Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="con">
          <div className="ai-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[['40+', 'Hours Saved Weekly', 'var(--blue)'], ['87%', 'Avg. Lead Score Accuracy', 'var(--gold)'], ['60 Days', 'Typical ROI Achievement', 'var(--red)'], ['99%', 'Automation Accuracy Rate', 'var(--navy-mid)']].map(([val, lbl, color]) => (
              <div key={lbl} className="ai-stat" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.2rem,3.5vw,3rem)', color, letterSpacing: '.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'var(--ff-head)', fontSize: '.82rem', color: 'var(--muted)', marginTop: '10px', fontWeight: 500 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: 'var(--white)', padding: '120px 0' }}>
        <div className="con">
          <div className="sec-hd-c reveal">
            <div className="sec-label">AI Services</div>
            <h2 className="sec-title">INTELLIGENCE ENGINEERED<br /><em>FOR YOUR BUSINESS</em></h2>
            <p className="sec-desc">Six transformative AI disciplines. One unified strategic partner. Deployed together or independently.</p>
          </div>
          <div className="ai-svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {services.map((s) => (
              <Link key={s.title} to={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '36px', height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'all .35s var(--ease-out)' }}
                  className="ai-svc-card"
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -8, boxShadow: '0 32px 64px rgba(13,27,62,.1)', duration: 0.3 })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, boxShadow: 'none', duration: 0.4, ease: 'power3.out' })}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, marginBottom: '20px' }} />
                  <h3 style={{ fontFamily: 'var(--ff-head)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--ff-body)', fontSize: '.87rem', color: 'var(--muted)', lineHeight: 1.75 }}>{s.desc}</p>
                  <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--ff-head)', fontSize: '.8rem', fontWeight: 700, color: s.color }}>
                    Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--navy)', padding: '120px 0' }}>
        <div className="con">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="sec-label" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>AI Implementation</div>
            <h2 className="sec-title" style={{ color: '#fff' }}>FROM ZERO TO<br /><em>INTELLIGENT</em> IN 4 PHASES</h2>
          </div>
          <div className="ai-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[['01', 'AI Audit', 'We identify every automation opportunity across your business — manual processes, data assets, and competitive gaps.'],['02', 'Architecture', 'Our AI engineers design the optimal system architecture — models, integrations, and data pipelines tailored to your stack.'],['03', 'Build & Train', 'Custom models trained on your data. Integrations tested and hardened. Full deployment with staged rollout.'],['04', 'Optimize', 'Continuous monitoring, retraining, and performance tuning. Your AI system gets smarter every month.']].map(([n, t, d]) => (
              <div key={n} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-lg)', padding: '32px', transition: 'all .3s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,75,219,.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,75,219,.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.08)'; }}
              >
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', color: 'var(--gold-lt)', letterSpacing: '.05em', lineHeight: 1, marginBottom: '16px' }}>{n}</div>
                <div style={{ fontFamily: 'var(--ff-head)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{t}</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: '.83rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-orb1" aria-hidden="true" /><div className="cta-orb2" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cta-eyebrow">Start Your AI Journey</span>
          <h2 className="cta-title">YOUR COMPETITORS ARE<br />ALREADY <em>AUTOMATING</em>.</h2>
          <p className="cta-sub">Book a free AI opportunity audit. We'll identify every process ripe for automation and model the exact ROI you can expect — before you spend a dollar.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-white" style={{ padding: '18px 36px', fontSize: '1.05rem', fontWeight: 800 }}>Book Free AI Audit<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            <a href="tel:+18005644299" className="btn btn-ghost-white" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>Call Our AI Team</a>
          </div>
        </div>
      </section>
    </div>
  );
}