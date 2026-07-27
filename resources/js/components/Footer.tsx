import { Link } from "@inertiajs/react";
import { useState } from 'react';
import footerlogo from '@/assets/images/footer-logo.png';

const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3200);
  };

  return (
    <footer aria-label="Site footer">
      {/* <div className="nl-strip">
        <div className="con">
          <div className="nl-inner">
            <div>
              <div className="nl-title">Get Digital Intelligence That Actually Matters</div>
              <div className="nl-sub">Join 12,000+ executives who read our weekly strategic briefing.</div>
            </div>
            <form className="nl-form" onSubmit={handleSubmit} aria-label="Newsletter signup">
              <label htmlFor="nl-email" style={{ position: 'absolute', left: '-9999px' }}>Email address</label>
              <input
                type="email" id="nl-email" className="nl-input"
                placeholder="your@email.com" required autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={subscribed ? { background: 'linear-gradient(135deg,#22c55e,#15803d)' } : {}}
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="con">
        <div className="ft-grid">
          <div>
            <Link href="/" className="ft-logo" aria-label="LogicWorks — Home">
              <img
                src={footerlogo}
                alt="LogicWorks"
                className="ft-logo-img"
                width={180}
                height={40}
              />
            </Link>
            <p className="ft-tagline">America's elite digital agency. We build websites, AI systems, and marketing machines that make great businesses legendary.</p>
            <div className="ft-socials" aria-label="Social media">
              {[
                // { label: 'Twitter', href: '#', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
                { label: 'LinkedIn', href: '#', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                // { label: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} className="ft-soc" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {[
            { title: 'Web Services', links: [['Web Design & Dev', '/web-design-development'], ['Web Portals', '/web-portals'], ['Web Applications', '/web-apps'], ['Mobile Apps', '/mobile-apps'], ['E-Commerce', '/ecommerce-development'], ['Hosting Services', '/hosting-services'], ['Server Management', '/server-management']] },
            { title: 'AI & Technology', links: [['AI-Powered CRMs', '/ai-powered-crm'], ['AI Automation', '/ai-automation'], ['Machine Learning', '/machine-learning-systems'], ['AI Assistants', '/ai-assistants'], ['AI Chatbots', '/ai-chatbots'], ['NLP Solutions', '/nlp-solutions'], ['Data Analytics', '/data-analytics']] },
            { title: 'Digital Marketing', links: [['SEO Services', '/seo-services'], ['AEO Services', '/aeo-services'], ['Local SEO', '/local-seo'], ['PPC Management', '/ppc-management'], ['Social Media Marketing', '/social-media-marketing'], ['Online Reputation', '/online-reputation-management'], ['Content Marketing', '/content-marketing']] },
            { title: 'Company', links: [['About LogicWorks', '/about'], ['Our Team', '/our-team'], ['Case Studies', '/case-studies'], ['Blog & Insights', '/blog'], ['Careers', '/careers'], ['Contact Us', '/contact'], ['Branding & Design', '/branding']] },
          ].map((col) => (
            <div key={col.title}>
              <div className="ft-col-title">{col.title}</div>
              <ul className="ft-links">
                {col.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="ft-link">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ft-bottom">
          <div>
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '5px', fontSize: '.75rem' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
              Proudly headquartered in the United States of America
            </div> */}
            <div>© {new Date().getFullYear()} LogicWorks. All rights reserved.</div>
          </div>
          <div className="ft-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            {/* <a href="/sitemap.xml">Sitemap</a>
            <Link href="/accessibility">Accessibility</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}