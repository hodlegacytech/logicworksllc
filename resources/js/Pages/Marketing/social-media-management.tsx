import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useMarketingPage, checkIcon, arrowIcon, MarketingFaq, MarketingCta } from './shared';

const metrics = [
  { val: '340%', lbl: 'Avg. Engagement Lift' },
  { val: '12K+', lbl: 'Posts Published Yearly' },
  { val: '2.8x', lbl: 'Follower Growth Rate' },
  { val: '24hr', lbl: 'Community Response Time' },
];

const solutions = [
  { title: 'Content Calendar & Planning', desc: 'Strategic monthly content calendars aligned to campaigns, seasons, and business goals — every post planned, approved, and scheduled with zero last-minute scrambling.' },
  { title: 'Daily Posting & Scheduling', desc: 'Platform-native content published at optimal times across Instagram, Facebook, LinkedIn, TikTok, and X — formatted correctly for each channel\'s algorithm and audience expectations.' },
  { title: 'Community Management', desc: 'Proactive comment monitoring, DM responses, review management, and crisis escalation — your brand voice maintained 7 days a week with sub-24-hour response SLAs.' },
  { title: 'Visual & Graphic Design', desc: 'On-brand static posts, carousels, Stories, and Reels covers — cohesive visual identity that builds recognition and stops the scroll without looking templated.' },
  { title: 'Analytics & Performance Reporting', desc: 'Monthly reports covering reach, engagement, follower growth, top-performing content, and competitor benchmarks — insights that inform strategy, not just vanity metrics.' },
  { title: 'Growth & Engagement Strategy', desc: 'Hashtag research, engagement pods alternatives, collaboration outreach, and profile optimization — organic growth tactics that complement your broader marketing mix.' },
];

const useCases = [
  { icon: 'SMB', title: 'Small Business Owners', desc: 'Hands-off social presence for owners who know they need social but lack time — consistent posting, community replies, and brand building without hiring in-house.' },
  { icon: 'AGY', title: 'Agencies & Consultants', desc: 'White-label-ready management for agencies scaling client deliverables — multi-account workflows, approval chains, and branded reporting templates.' },
  { icon: 'RTL', title: 'Retail & Hospitality', desc: 'Daily menu updates, event promotion, user-generated content curation, and review response — keeping local customers engaged and returning.' },
  { icon: 'PRO', title: 'Professional Services', desc: 'Thought leadership posting, case study promotion, and LinkedIn authority building for law firms, accountants, and consultants who need credibility, not cat memes.' },
];

const process = [
  { num: '01', title: 'Brand Discovery', desc: 'Voice guidelines, visual audit, competitor review, and audience persona mapping.' },
  { num: '02', title: 'Strategy & Calendar', desc: 'Content pillars, posting frequency, platform priorities, and monthly calendar build.' },
  { num: '03', title: 'Content Creation', desc: 'Copywriting, graphic design, video editing, and client approval workflow.' },
  { num: '04', title: 'Publish & Engage', desc: 'Scheduled posting, community monitoring, DM management, and real-time engagement.' },
  { num: '05', title: 'Analyze & Refine', desc: 'Performance review, content optimization, and strategy adjustments each month.' },
];

const channels = ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Pinterest', 'YouTube Community', 'Threads', 'Google Business', 'Yelp Social'];

const faqs = [
  { q: 'What\'s the difference between social media management and marketing?', a: 'Management covers organic presence — daily posting, community engagement, and brand building. Marketing typically refers to paid advertising campaigns. We offer both, and they work best together — organic builds trust while paid drives conversions.' },
  { q: 'How many posts per week do you publish?', a: 'Frequency depends on platform and goals. Typical packages include 3–5 posts per week on primary platforms plus Stories and Reels. We recommend cadence based on where your audience is most active — quality and consistency beat volume.' },
  { q: 'Do we approve content before it goes live?', a: 'Yes. Every post goes through your approval workflow before publishing. We use shared calendars and preview links so you review copy, visuals, and scheduling — typically with 48-hour turnaround for feedback.' },
  { q: 'Can you manage multiple platforms at once?', a: 'Absolutely. Most clients manage 2–4 platforms simultaneously. We tailor content format and tone per platform — LinkedIn thought leadership looks different from Instagram Reels, even for the same brand.' },
  { q: 'How do you handle negative comments or reviews?', a: 'We monitor all comments and reviews with defined escalation protocols. Standard responses follow your brand voice guidelines. Sensitive or crisis situations are flagged immediately for your team\'s review before any public response.' },
];

export default function SocialMediaManagement() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useMarketingPage(pageRef);

  return (
    <div ref={pageRef} className="mkt-page">
      <Head>
        <title head-key="title">Social Media Management | LogicWorks — Done-For-You Social Presence</title>
        <meta head-key="description" name="description" content="LogicWorks handles social media management — daily posting, community engagement, content calendars, and growth strategy across Instagram, LinkedIn, TikTok, and more." />
        <link head-key="canonical" rel="canonical" href="https://logicworks.com/social-media-management" />
      </Head>

      <section className="mkt-hero" aria-labelledby="smmgmt-title">
        <div className="mkt-hero-accent" aria-hidden="true" />
        <div className="mkt-hero-lines" aria-hidden="true" />
        <div className="con mkt-hero-inner">
          <div className="mkt-eyebrow">Social Media</div>
          <h1 className="mkt-hero-title" id="smmgmt-title">SOCIAL MEDIA<br /><span>MANAGEMENT</span></h1>
          <p className="mkt-hero-sub">Daily posting, community management, and growth strategy across every platform — a consistent, on-brand social presence handled entirely for you.</p>
          <div className="mkt-hero-actions">
            <Link href="/contact" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Get Managed Social{arrowIcon}</Link>
            <Link href="/social-media-marketing" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Paid Social Marketing</Link>
          </div>
        </div>
      </section>

      <section className="mkt-impact">
        <div className="con">
          <div className="mkt-impact-grid">
            {metrics.map((m) => (
              <div key={m.lbl} className="mkt-impact-item">
                <div className="mkt-impact-val">{m.val}</div>
                <div className="mkt-impact-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-editorial">
            <div className="reveal-l">
              <div className="sec-label">The Problem</div>
              <h2 className="sec-title">INCONSISTENT POSTING<br /><em>KILLS TRUST</em></h2>
              <p className="sec-desc" style={{ marginBottom: '20px' }}>Your audience expects a living, breathing social presence — not a profile that last posted three weeks ago. Sporadic posting, unanswered comments, and off-brand content signal that you are not paying attention. Professional management keeps your brand active, responsive, and growing without pulling your team away from core work.</p>
              <div className="mkt-highlight-box"><p>Brands posting consistently 4+ times per week see 340% higher engagement than those posting sporadically — consistency compounds into authority.</p></div>
              <div className="mkt-check-list">
                {['Strategic content calendars', 'Daily posting across all platforms', 'Community management with SLAs', 'Monthly analytics and optimization'].map((item) => (
                  <div key={item} className="mkt-check-item">{checkIcon}{item}</div>
                ))}
              </div>
              <div className="mkt-tag-row">{['Content Calendar', 'Community', 'Design', 'Analytics', 'Growth'].map((t) => <span key={t} className="mkt-tag">{t}</span>)}</div>
            </div>
            <div className="reveal-r mkt-results-panel">
              <div className="mkt-results-label">Expected Results</div>
              {[
                { icon: '↑', title: '340% Engagement Lift', desc: 'Consistent, quality content drives dramatically higher interaction rates.' },
                { icon: '◎', title: '2.8x Follower Growth', desc: 'Strategic posting and engagement accelerate organic audience building.' },
                { icon: '⏱', title: '24hr Response Time', desc: 'Comments and DMs handled promptly — customers feel heard and valued.' },
                { icon: '✓', title: 'Zero Internal Overhead', desc: 'Your team focuses on business — we handle the daily social grind.' },
              ].map((o) => (
                <div key={o.title} className="mkt-results-item">
                  <div className="mkt-results-icon">{o.icon}</div>
                  <div className="mkt-results-text"><strong>{o.title}</strong><span>{o.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">FULL-SERVICE<br /><em>SOCIAL MANAGEMENT</em></h2>
            <p className="sec-desc">Six management capabilities — from content planning and daily posting to community engagement and growth analytics.</p>
          </div>
          <div className="mkt-solution-grid">
            {solutions.map((s, i) => (
              <article key={s.title} className="mkt-solution-card">
                <div className="mkt-solution-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mkt-solution-title">{s.title}</h3>
                <p className="mkt-solution-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--alt">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Use Cases</div>
            <h2 className="sec-title">MANAGEMENT FOR<br /><em>EVERY BUSINESS TYPE</em></h2>
            <p className="sec-desc">Small businesses, agencies, retail, and professional services — tailored social management that fits your industry.</p>
          </div>
          <div className="mkt-use-grid">
            {useCases.map((u) => (
              <article key={u.title} className="mkt-use-card">
                <div className="mkt-use-icon">{u.icon}</div>
                <div><h3 className="mkt-use-title">{u.title}</h3><p className="mkt-use-desc">{u.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Our Process</div>
            <h2 className="sec-title">YOUR SOCIAL PRESENCE<br /><em>IN 5 PHASES</em></h2>
            <p className="sec-desc">From brand discovery to ongoing optimization — a structured approach to building and maintaining your social presence.</p>
          </div>
          <div className="mkt-process-track">
            {process.map((s) => (
              <div key={s.num} className="mkt-process-step">
                <div className="mkt-process-dot">{s.num}</div>
                <h3 className="mkt-process-title">{s.title}</h3>
                <p className="mkt-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mkt-sec mkt-sec--dark">
        <div className="con">
          <div className="mkt-sec-hd reveal">
            <div className="sec-label">Platforms</div>
            <h2 className="sec-title">MANAGED ACROSS<br /><em>ALL CHANNELS</em></h2>
            <p className="sec-desc">We manage organic presence on every major social and review platform.</p>
          </div>
          <div className="mkt-channel-grid">
            {channels.map((c) => <span key={c} className="mkt-channel-pill">{c}</span>)}
          </div>
        </div>
      </section>

      <MarketingFaq id="smmgmt-faq" title={<>Social Media Management<br /><em>QUESTIONS ANSWERED</em></>} desc="What business owners ask before outsourcing their social media presence." faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <MarketingCta eyebrow="Your Social Presence, Handled" title={<>POST CONSISTENTLY.<br /><em>GROW ORGANICALLY</em>.</>} sub="Book a free social audit and get a custom content strategy for your brand." btnText="Get Managed Social" note="FREE BRAND AUDIT · CONTENT STRATEGY · NO COMMITMENT" />
    </div>
  );
}
