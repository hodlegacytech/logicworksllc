import { useState, useRef, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';

interface FormState {
  name: string; email: string; phone: string; company: string;
  service: string; budget: string; message: string;
}
interface Errors { [key: string]: string }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-form',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo('.contact-info-item',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.5 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'A valid email is required.';
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.message.trim() || form.message.length < 20) errs.message = 'Please describe your project (min. 20 characters).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const services = ['Web Design & Development', 'AI Automation & Machine Learning', 'SEO & AEO Services', 'PPC & Paid Media', 'Social Media Marketing', 'Mobile App Development', 'Branding & Brand Design', 'AI-Powered CRM', 'Hosting & Infrastructure', 'Other / Multiple Services'];
  const budgets = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000 – $150,000', '$150,000+', 'Let\'s discuss'];

  return (
    <div ref={pageRef} className="contact-page">
      <Head>
        <title head-key="title">Contact LogicWorks | Get Your Free Strategy Session</title>
        <meta head-key="description" name="description" content="Contact LogicWorks for a free digital strategy session. USA-based senior consultants ready to audit your digital presence and map your path to market dominance." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/contact" />
      </Head>

      <section className="inner-hero contact-hero" aria-labelledby="contact-title" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #091840 60%, #1a4bdb 100%)' }}>
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <span className="inner-hero-label">Free Strategy Session</span>
          <h1 className="inner-hero-title" id="contact-title">LET&apos;S BUILD SOMETHING<br /><span style={{ color: 'var(--gold-lt)' }}>LEGENDARY</span> TOGETHER.</h1>
          <p className="inner-hero-sub">Fill out the form and a senior LogicWorks strategist will be in touch within 2 business hours. Your free audit and growth roadmap is waiting.</p>
        </div>
      </section>

      <section className="contact-page-sec">
        <div className="con">
          <div className="contact-split-grid">
            {submitted ? (
              <div className="contact-success-card">
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(34,197,94,.1)', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', color: 'var(--navy)', letterSpacing: '.03em', marginBottom: '14px' }}>REQUEST RECEIVED</h2>
                <p style={{ fontFamily: 'var(--ff-body)', fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '400px', margin: '0 auto 32px' }}>
                  A senior LogicWorks strategist will contact you within 2 business hours. Check your inbox — we&apos;re already reviewing your request.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline">Submit Another Request</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" className={`form-input${errors.name ? ' error' : ''}`} placeholder="John Smith" value={form.name} onChange={handleChange} autoComplete="name" />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Business Email *</label>
                    <input id="email" name="email" type="email" className={`form-input${errors.email ? ' error' : ''}`} placeholder="john@company.com" value={form.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" className="form-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} autoComplete="tel" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" className="form-input" placeholder="Acme Inc." value={form.company} onChange={handleChange} autoComplete="organization" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Interested In *</label>
                    <select id="service" name="service" className={`form-select${errors.service ? ' error' : ''}`} value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <div className="form-error">{errors.service}</div>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget range…</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                  <textarea id="message" name="message" className={`form-textarea${errors.message ? ' error' : ''}`} rows={6} placeholder="Describe your goals, challenges, timeline, and any specific requirements…" value={form.message} onChange={handleChange} />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary contact-submit-btn">
                  Send Request — Get Free Strategy Session
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <p className="contact-form-note">
                  Response within 2 business hours · No contracts · Free audit included
                </p>
              </form>
            )}

            <div className="contact-sidebar">
              {[
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.37 3.37 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z"/></svg>, label: 'Phone', value: '+1 (800) LOGIC-WX', sub: 'Mon–Fri 8am–8pm EST' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email', value: 'hello@logicworks.com', sub: 'Response within 2 hours' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Headquarters', value: 'United States of America', sub: 'Serving clients globally' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: 'Response Time', value: '< 2 Business Hours', sub: 'Guaranteed on all inquiries' },
              ].map((info) => (
                <div key={info.label} className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true">{info.icon}</div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="info-value contact-info-value">{info.value}</div>
                    <div className="contact-info-sub">{info.sub}</div>
                  </div>
                </div>
              ))}
              <div className="contact-perks">
                <div className="contact-perks-title">Free With Every Inquiry</div>
                {['Comprehensive SEO audit', 'Website performance analysis', 'Competitor gap report', 'Custom 90-day roadmap'].map((item) => (
                  <div key={item} className="contact-perk-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-lt)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
