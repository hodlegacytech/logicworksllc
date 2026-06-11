import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCompanyPage, arrowIcon, CompanyCta } from './shared';

const categories = ['All', 'AI & Automation', 'SEO', 'Web Design', 'Digital Marketing', 'Branding', 'Industry Insights'] as const;
type Category = (typeof categories)[number];

const featured = {
  slug: 'how-ai-is-rewriting-seo-2026',
  category: 'AI & Automation' as Category,
  title: 'How AI Is Rewriting SEO in 2026 — And What Smart Marketers Are Doing About It',
  excerpt: 'Search is no longer ten blue links. Between AI Overviews, answer engines, and zero-click results, the playbook that worked in 2022 is actively hurting rankings today. Here is the framework we use with enterprise clients to stay visible.',
  date: 'May 28, 2026',
  readTime: '12 min read',
  author: 'James Okonkwo',
  authorRole: 'Director of SEO',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
  imageAlt: 'Abstract AI neural network visualization representing search and machine learning',
  gradient: 'linear-gradient(160deg, rgba(124, 58, 237, 0.4) 0%, rgba(13, 27, 62, 0.78) 55%, rgba(6, 13, 31, 0.94) 100%)',
};

const posts = [
  {
    slug: 'complete-guide-answer-engine-optimization',
    category: 'SEO' as Category,
    title: 'The Complete Guide to Answer Engine Optimization (AEO)',
    excerpt: 'AEO is not SEO with a new acronym. It is a distinct discipline built around structured data, entity authority, and content engineered to be cited by AI systems.',
    date: 'May 22, 2026',
    readTime: '9 min read',
    author: 'James Okonkwo',
    image: 'https://images.unsplash.com/photo-1432888622747-4ebeeef32278?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'technical-seo-checklist-enterprise',
    category: 'SEO' as Category,
    title: 'Technical SEO Checklist: 47 Points Every Enterprise Site Must Pass',
    excerpt: 'Crawl budget waste, JavaScript rendering failures, and schema gaps silently drain organic traffic. Our audit framework catches what automated tools miss.',
    date: 'May 15, 2026',
    readTime: '11 min read',
    author: 'James Okonkwo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'landing-page-conversion-fix',
    category: 'Web Design' as Category,
    title: 'Why Your Landing Page Converts at 1.2% (And How to Fix It)',
    excerpt: 'After auditing 500+ landing pages, the same five conversion killers appear in 80% of underperforming funnels. Here is the diagnostic sequence we run on day one.',
    date: 'May 10, 2026',
    readTime: '8 min read',
    author: 'Ryan Torres',
    image: 'https://images.unsplash.com/photo-1467232004583-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'google-ads-bidding-strategies-2026',
    category: 'Digital Marketing' as Category,
    title: 'Google Ads in 2026: Bidding Strategies That Actually Work',
    excerpt: 'Smart Bidding is not set-and-forget. The agencies winning on ROAS in 2026 are layering first-party data, conversion value rules, and audience signals most teams ignore.',
    date: 'May 4, 2026',
    readTime: '10 min read',
    author: 'Nina Patel',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'brand-systems-series-b-startups',
    category: 'Branding' as Category,
    title: 'Brand Systems That Scale: What Series B Startups Get Wrong',
    excerpt: 'A logo is not a brand system. The startups that maintain consistency through rapid growth invest in tokens, templates, and governance — not just a Figma file.',
    date: 'Apr 28, 2026',
    readTime: '7 min read',
    author: 'Priya Kapoor',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'production-ready-ai-chatbots',
    category: 'AI & Automation' as Category,
    title: 'Building Production-Ready AI Chatbots Without the Hype',
    excerpt: 'Most chatbot projects fail at deployment, not development. Here is how we architect retrieval pipelines, guardrails, and escalation paths that enterprise clients trust.',
    date: 'Apr 21, 2026',
    readTime: '13 min read',
    author: 'Elena Volkov',
    image: 'https://images.unsplash.com/photo-1531746790731-24c374c274d9?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'local-seo-multi-location-playbook',
    category: 'SEO' as Category,
    title: 'Local SEO Playbook for Multi-Location Businesses',
    excerpt: 'Managing 10+ locations means fighting duplicate content, inconsistent NAP data, and review fragmentation. Our location-page architecture solves all three.',
    date: 'Apr 14, 2026',
    readTime: '9 min read',
    author: 'James Okonkwo',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'healthcare-digital-marketing-compliance',
    category: 'Industry Insights' as Category,
    title: 'Healthcare Digital Marketing: Compliance Without Compromise',
    excerpt: 'HIPAA, FDA guidelines, and state advertising rules create a minefield for healthcare marketers. Here is how to drive patient acquisition without regulatory exposure.',
    date: 'Apr 7, 2026',
    readTime: '10 min read',
    author: 'Marcus Johnson',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'mobile-first-ux-data-500-projects',
    category: 'Web Design' as Category,
    title: 'Mobile-First Is Not Optional: UX Data from 500+ Projects',
    excerpt: '68% of B2B buyers now research vendors on mobile. Yet most agency sites still treat mobile as a responsive afterthought. The data says otherwise.',
    date: 'Mar 31, 2026',
    readTime: '8 min read',
    author: 'Ryan Torres',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
];

const topics = [
  { label: 'AI & Automation', count: 24, color: '#7c3aed' },
  { label: 'SEO', count: 38, color: '#1a4bdb' },
  { label: 'Web Design', count: 31, color: '#0891b2' },
  { label: 'Digital Marketing', count: 29, color: '#c8192a' },
  { label: 'Branding', count: 18, color: '#c8922a' },
  { label: 'Industry Insights', count: 22, color: '#166534' },
];

export default function Blog() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  useCompanyPage(pageRef);

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div ref={pageRef} className="co-page">
      <Helmet>
        <title>Blog & Insights | LogicWorks — AI, SEO, Web Design & Marketing Intelligence</title>
        <meta name="description" content="Strategic intelligence on AI, SEO, web design, and digital marketing from the LogicWorks team — actionable insights for ambitious businesses." />
        <link rel="canonical" href="https://logicworks.com/blog" />
      </Helmet>

      <section className="co-hero" aria-labelledby="blog-title">
        <div className="co-hero-glow" aria-hidden="true" />
        <div className="con co-hero-inner">
          <div className="co-eyebrow">Company</div>
          <h1 className="co-hero-title" id="blog-title">Strategic<br /><span>Intelligence</span></h1>
          <p className="co-hero-sub">Actionable insights on AI, SEO, web design, and digital marketing from the sharpest minds in the industry — no fluff, no filler.</p>
          <div className="co-hero-actions">
            <a href="#articles" className="btn btn-white" style={{ padding: '16px 32px', fontSize: '1rem', fontWeight: 800 }}>Browse Articles{arrowIcon}</a>
            <Link to="/contact" className="btn btn-ghost-white" style={{ padding: '16px 32px', fontSize: '1rem' }}>Get a Strategy Session</Link>
          </div>
        </div>
      </section>

      <section className="co-stat-band">
        <div className="con">
          <div className="co-stat-grid">
            {[
              { val: '160+', lbl: 'Articles Published' },
              { val: '6', lbl: 'Expert Categories' },
              { val: '45K+', lbl: 'Monthly Readers' },
              { val: 'Weekly', lbl: 'New Content' },
            ].map((m) => (
              <div key={m.lbl} className="co-stat-item">
                <div className="co-stat-val">{m.val}</div>
                <div className="co-stat-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--dark">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Editor&apos;s Pick</div>
            <h2 className="sec-title">FEATURED<br /><em>ARTICLE</em></h2>
          </div>
          <article className="co-blog-featured">
            <div className="co-blog-featured-visual">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="co-blog-featured-img"
                loading="eager"
                decoding="async"
              />
              <div className="co-blog-featured-overlay" style={{ background: featured.gradient }} aria-hidden="true" />
              <span className="co-blog-featured-badge">{featured.category}</span>
            </div>
            <div className="co-blog-featured-body">
              <div className="co-blog-meta">
                <time dateTime="2026-05-28">{featured.date}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <h3 className="co-blog-featured-title">{featured.title}</h3>
              <p className="co-blog-featured-excerpt">{featured.excerpt}</p>
              <div className="co-blog-author">
                <div className="co-blog-author-avatar">{featured.author.split(' ').map((n) => n[0]).join('')}</div>
                <div>
                  <div className="co-blog-author-name">{featured.author}</div>
                  <div className="co-blog-author-role">{featured.authorRole}</div>
                </div>
              </div>
              <a href={`#${featured.slug}`} className="co-blog-read-link">
                Read Full Article{arrowIcon}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="co-sec" id="articles">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Latest</div>
            <h2 className="sec-title">ALL<br /><em>ARTICLES</em></h2>
            <p className="sec-desc">Filter by discipline or browse the full library — every article written by practitioners who ship, not theorists who speculate.</p>
          </div>
          <div className="co-blog-filters" role="tablist" aria-label="Filter articles by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`co-blog-filter-btn${activeCategory === cat ? ' co-blog-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="co-blog-grid">
            {filtered.map((post) => (
              <article key={post.slug} className="co-blog-card">
                <a href={`#${post.slug}`} className="co-blog-card-img-wrap" tabIndex={-1} aria-hidden="true">
                  <img src={post.image} alt="" loading="lazy" decoding="async" />
                  <span className="co-blog-card-cat">{post.category}</span>
                </a>
                <div className="co-blog-card-body">
                  <div className="co-blog-meta">
                    <time>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="co-blog-card-title">
                    <a href={`#${post.slug}`}>{post.title}</a>
                  </h3>
                  <p className="co-blog-card-excerpt">{post.excerpt}</p>
                  <div className="co-blog-card-footer">
                    <span className="co-blog-card-author">{post.author}</span>
                    <a href={`#${post.slug}`} className="co-blog-card-link">Read →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="co-sec co-sec--alt">
        <div className="con">
          <div className="co-sec-hd reveal">
            <div className="sec-label">Explore</div>
            <h2 className="sec-title">BROWSE BY<br /><em>TOPIC</em></h2>
            <p className="sec-desc">Jump straight into the discipline that matters most to your business right now.</p>
          </div>
          <div className="co-blog-topics">
            {topics.map((t) => (
              <button
                key={t.label}
                type="button"
                className="co-blog-topic"
                style={{ '--topic-color': t.color } as React.CSSProperties}
                onClick={() => setActiveCategory(t.label as Category)}
              >
                <span className="co-blog-topic-count">{t.count}</span>
                <span className="co-blog-topic-label">{t.label}</span>
                <span className="co-blog-topic-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="co-blog-newsletter">
        <div className="con">
          <div className="co-blog-newsletter-inner">
            <div className="co-blog-newsletter-copy">
              <div className="co-blog-newsletter-eyebrow">Newsletter</div>
              <h2 className="co-blog-newsletter-title">GET THE EDGE<br />DELIVERED WEEKLY</h2>
              <p className="co-blog-newsletter-sub">Join 12,000+ marketers and founders who receive our best insights on AI, SEO, and growth — every Tuesday morning.</p>
            </div>
            <form className="co-blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="blog-email" className="sr-only">Email address</label>
              <input id="blog-email" type="email" placeholder="you@company.com" required className="co-blog-newsletter-input" />
              <button type="submit" className="btn btn-white co-blog-newsletter-btn">Subscribe{arrowIcon}</button>
            </form>
          </div>
        </div>
      </section>

      <CompanyCta
        eyebrow="Turn Insight Into Action"
        title={<>READY TO APPLY THESE<br /><em>STRATEGIES TO YOUR BUSINESS</em>?</>}
        sub="Our strategists turn the frameworks in these articles into custom roadmaps with projected outcomes for your industry."
        btnText="Book Free Strategy Call"
        note="FREE STRATEGY SESSION · INDUSTRY BENCHMARKS · NO COMMITMENT"
      />
    </div>
  );
}
