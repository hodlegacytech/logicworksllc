import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  {
    label: 'Web Services',
    href: '/web-design-development',
    dropdown: {
      type: 'mega',
      title: 'Web Services — Build, Design & Deploy',
      columns: [
        {
          heading: 'Design & Dev',
          items: [
            { label: 'Web Design & Development', href: '/web-design-development', desc: 'Custom sites that convert' },
            { label: 'Web Portals', href: '/web-portals', desc: 'Enterprise portal solutions' },
            { label: 'Web Applications', href: '/web-apps', desc: 'Scalable SaaS & tools' },
            { label: 'Landing Pages', href: '/landing-pages', desc: 'High-converting pages' },
          ],
        },
        {
          heading: 'Mobile & Apps',
          items: [
            { label: 'Mobile Apps', href: '/mobile-apps', desc: 'iOS & Android development' },
            { label: 'E-Commerce', href: '/ecommerce-development', desc: 'Shopify, WooCommerce & custom' },
            { label: 'UI/UX Design', href: '/ui-ux-design', desc: 'User-first experiences' },
          ],
        },
        {
          heading: 'Infrastructure',
          items: [
            { label: 'Hosting Services', href: '/hosting-services', desc: 'Fast, secure, managed hosting' },
            { label: 'Server Management', href: '/server-management', desc: '24/7 monitoring & maintenance' },
            { label: 'Website Maintenance', href: '/website-maintenance', desc: 'Keep your site flawless' },
          ],
        },
      ],
    },
  },
  {
    label: 'AI & Technology',
    href: '/ai-solutions',
    dropdown: {
      type: 'mega',
      title: 'AI & Machine Intelligence — The Future Is Now',
      columns: [
        {
          heading: 'AI Systems',
          items: [
            { label: 'AI-Powered CRMs', href: '/ai-powered-crm', desc: 'Smart customer management' },
            { label: 'AI Automation', href: '/ai-automation', desc: 'Eliminate manual workflows' },
            { label: 'Machine Learning Systems', href: '/machine-learning-systems', desc: 'Predictive intelligence' },
            { label: 'AI Strategy Consulting', href: '/ai-consulting', desc: 'Build your AI roadmap' },
          ],
        },
        {
          heading: 'Conversational AI',
          items: [
            { label: 'AI Assistants', href: '/ai-assistants', desc: 'Virtual agents & chatbots' },
            { label: 'AI Chatbot Development', href: '/ai-chatbots', desc: '24/7 automated support' },
            { label: 'NLP & Language Models', href: '/nlp-solutions', desc: 'Custom LLM integrations' },
            { label: 'Voice AI Solutions', href: '/voice-ai', desc: 'Smart voice interfaces' },
          ],
        },
        {
          heading: 'Data Intelligence',
          items: [
            { label: 'Data Analytics', href: '/data-analytics', desc: 'Insights that drive decisions' },
            { label: 'Process Automation', href: '/process-automation', desc: 'RPA & workflow automation' },
            { label: 'Predictive Analytics', href: '/predictive-analytics', desc: 'Forecast & optimize revenue' },
          ],
        },
      ],
    },
  },
  {
    label: 'Marketing',
    href: '/digital-marketing',
    dropdown: {
      type: 'mega',
      title: 'Digital Marketing — Grow, Rank & Dominate',
      columns: [
        {
          heading: 'Search Marketing',
          items: [
            { label: 'SEO Services', href: '/seo-services', desc: 'Rank #1 on Google' },
            { label: 'AEO Services', href: '/aeo-services', desc: 'Dominate AI search' },
            { label: 'Local SEO', href: '/local-seo', desc: 'Own your local market' },
            { label: 'Technical SEO', href: '/technical-seo', desc: 'Core Web Vitals & audits' },
          ],
        },
        {
          heading: 'Paid Media',
          items: [
            { label: 'PPC Management', href: '/ppc-management', desc: 'Google & Bing Ads ROI' },
            { label: 'Google Ads', href: '/google-ads', desc: 'Search, Display & Shopping' },
            { label: 'Retargeting Campaigns', href: '/retargeting', desc: 'Win back lost visitors' },
          ],
        },
        {
          heading: 'Social Media',
          items: [
            { label: 'Social Media Marketing', href: '/social-media-marketing', desc: 'Campaigns that go viral' },
            { label: 'Social Media Management', href: '/social-media-management', desc: 'Daily posting & growth' },
            { label: 'Content Marketing', href: '/content-marketing', desc: 'SEO content that ranks' },
          ],
        },
      ],
    },
  },
  {
    label: 'Branding',
    href: '/branding',
    dropdown: {
      type: 'simple',
      items: [
        { label: 'Branding Strategy', href: '/branding-strategy', desc: 'Positioning & messaging' },
        { label: 'Brand Design', href: '/brand-design', desc: 'Logos, identity & guidelines' },
        { label: 'Logo Design', href: '/logo-design', desc: 'Iconic, memorable logos' },
        { label: 'Brand Guidelines', href: '/brand-guidelines', desc: 'Consistent brand standards' },
        { label: 'UI/UX Design', href: '/ui-ux-design', desc: 'User-first digital experiences' },
      ],
    },
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: {
      type: 'simple',
      items: [
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Real Estate', href: '/industries/real-estate' },
        { label: 'Finance & FinTech', href: '/industries/finance' },
        { label: 'Legal & Law Firms', href: '/industries/legal' },
        { label: 'E-Commerce & Retail', href: '/industries/ecommerce' },
        { label: 'SaaS & Technology', href: '/industries/saas' },
        { label: 'Education & EdTech', href: '/industries/education' },
        { label: 'Hospitality & Tourism', href: '/industries/hospitality' },
      ],
    },
  },
  {
    label: 'Company',
    href: '/about',
    dropdown: {
      type: 'simple',
      items: [
        { label: 'About LogicWorks', href: '/about' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  },
];