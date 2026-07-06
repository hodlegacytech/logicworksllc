import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';

const LAST_UPDATED = 'June 3, 2025';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'legal-bases', title: '4. Legal Bases for Processing' },
  { id: 'cookies', title: '5. Cookies & Tracking Technologies' },
  { id: 'sharing', title: '6. How We Share Information' },
  { id: 'retention', title: '7. Data Retention' },
  { id: 'security', title: '8. Data Security' },
  { id: 'your-rights', title: '9. Your Privacy Rights' },
  { id: 'children', title: '10. Children\'s Privacy' },
  { id: 'international', title: '11. International Data Transfers' },
  { id: 'third-party', title: '12. Third-Party Links & Services' },
  { id: 'changes', title: '13. Changes to This Policy' },
  { id: 'contact', title: '14. Contact Us' },
];

export default function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.legal-hero-content > *',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo(
        '.legal-body > *',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.35 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="legal-page">
      <Head>
        <title head-key="title">Privacy Policy | LogicWorks — Elite Digital Agency</title>
        <meta
          name="description"
          content="LogicWorks Privacy Policy — how we collect, use, store, and protect your personal information when you visit our website or use our digital agency services."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/privacy-policy" />
      </Head>

      <section
        className="inner-hero legal-hero"
        aria-labelledby="privacy-title"
        style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0d1b3e 60%, #0e1e50 100%)' }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="legal-hero-content">
            <span className="inner-hero-label">Legal</span>
            <h1 className="inner-hero-title" id="privacy-title" style={{ maxWidth: '720px' }}>
              PRIVACY POLICY
            </h1>
            <p className="inner-hero-sub" style={{ marginBottom: '20px' }}>
              Your privacy matters to us. This policy explains what information LogicWorks collects,
              how we use it, and the choices you have regarding your personal data.
            </p>
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <section className="legal-sec">
        <div className="con">
          <div className="legal-layout">
            <aside className="legal-toc reveal-l" aria-label="Table of contents">
              <div className="legal-toc-inner">
                <div className="legal-toc-label">On this page</div>
                <nav>
                  <ul>
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="legal-toc-links">
                  <Link href="/terms-of-service">Terms of Service</Link>
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </aside>

            <article className="legal-body reveal-r">
              <section id="introduction" className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  LogicWorks (&quot;LogicWorks,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a digital agency
                  headquartered in the United States. We provide web design, development, AI solutions,
                  SEO, branding, and related professional services to businesses and organizations.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, disclose, and safeguard personal
                  information when you visit <strong>logicworks.com</strong> (the &quot;Site&quot;), submit forms,
                  communicate with us, or engage our services (collectively, the &quot;Services&quot;).
                </p>
                <p>
                  By accessing the Site or using our Services, you acknowledge that you have read and
                  understood this Privacy Policy. If you do not agree with our practices, please do not
                  use the Site or Services.
                </p>
              </section>

              <section id="information-we-collect" className="legal-section">
                <h2>2. Information We Collect</h2>
                <p>We collect information in the following ways:</p>

                <h3>Information you provide directly</h3>
                <ul>
                  <li>Contact details such as name, email address, phone number, and company name</li>
                  <li>Project details submitted through contact forms, strategy requests, or consultations</li>
                  <li>Service preferences, budget range, and messages you send us</li>
                  <li>Newsletter subscription email addresses</li>
                  <li>Billing and account information when you become a client</li>
                  <li>Communications you send via email, phone, or other channels</li>
                </ul>

                <h3>Information collected automatically</h3>
                <ul>
                  <li>IP address, browser type, device type, and operating system</li>
                  <li>Pages viewed, time spent on pages, referring URLs, and click behavior</li>
                  <li>General geographic location derived from IP address</li>
                  <li>Cookie identifiers and similar tracking data (see Section 5)</li>
                </ul>

                <h3>Information from third parties</h3>
                <ul>
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Advertising and marketing platforms</li>
                  <li>CRM and project management tools used to manage client relationships</li>
                  <li>Publicly available business information relevant to your inquiry</li>
                </ul>
              </section>

              <section id="how-we-use" className="legal-section">
                <h2>3. How We Use Your Information</h2>
                <p>We use personal information for legitimate business purposes, including to:</p>
                <ul>
                  <li>Respond to inquiries and provide free consultations, audits, and proposals</li>
                  <li>Deliver, manage, and improve our digital agency services</li>
                  <li>Communicate with you about projects, updates, and support requests</li>
                  <li>Send marketing communications where permitted by law (you may opt out at any time)</li>
                  <li>Analyze Site usage to improve performance, content, and user experience</li>
                  <li>Detect, prevent, and address fraud, abuse, or security incidents</li>
                  <li>Comply with legal obligations, enforce our agreements, and protect our rights</li>
                </ul>
                <p>
                  We do not sell your personal information. We do not use sensitive personal information
                  for purposes other than those permitted by applicable law.
                </p>
              </section>

              <section id="legal-bases" className="legal-section">
                <h2>4. Legal Bases for Processing</h2>
                <p>
                  Where applicable under laws such as the GDPR, we process personal information based on
                  one or more of the following legal bases:
                </p>
                <ul>
                  <li><strong>Consent</strong> — when you opt in to marketing or submit a form voluntarily</li>
                  <li><strong>Contract</strong> — when processing is necessary to perform a service agreement</li>
                  <li><strong>Legitimate interests</strong> — to operate, secure, and improve our business, provided your rights do not override those interests</li>
                  <li><strong>Legal obligation</strong> — when required to comply with applicable laws or regulations</li>
                </ul>
              </section>

              <section id="cookies" className="legal-section">
                <h2>5. Cookies &amp; Tracking Technologies</h2>
                <p>
                  We use cookies, pixels, and similar technologies to remember preferences, measure traffic,
                  and understand how visitors interact with the Site.
                </p>
                <p>Types of cookies we may use include:</p>
                <ul>
                  <li><strong>Essential cookies</strong> — required for core Site functionality</li>
                  <li><strong>Analytics cookies</strong> — help us understand usage patterns and improve the Site</li>
                  <li><strong>Marketing cookies</strong> — used to measure campaign performance and deliver relevant ads</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. Disabling certain cookies may
                  affect Site functionality. Where required by law, we will obtain consent before placing
                  non-essential cookies.
                </p>
              </section>

              <section id="sharing" className="legal-section">
                <h2>6. How We Share Information</h2>
                <p>We may share personal information with:</p>
                <ul>
                  <li>Service providers who assist with hosting, analytics, email delivery, CRM, and payment processing</li>
                  <li>Professional advisors such as lawyers, accountants, and insurers when necessary</li>
                  <li>Law enforcement or regulatory authorities when required by law or to protect rights and safety</li>
                  <li>Successors in connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p>
                  All third-party partners are required to handle personal information securely and only
                  for the purposes we specify. We do not authorize them to use your data for their own
                  independent marketing without appropriate consent.
                </p>
              </section>

              <section id="retention" className="legal-section">
                <h2>7. Data Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes
                  described in this policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul>
                  <li>Contact form submissions are retained while your inquiry is active and for a reasonable period afterward</li>
                  <li>Client records are retained for the duration of the engagement and as required for accounting, tax, and legal compliance</li>
                  <li>Marketing data is retained until you unsubscribe or request deletion, subject to legal exceptions</li>
                  <li>Analytics data is typically retained in aggregated or de-identified form</li>
                </ul>
              </section>

              <section id="security" className="legal-section">
                <h2>8. Data Security</h2>
                <p>
                  We implement administrative, technical, and organizational safeguards designed to protect
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                  These measures include encrypted connections (HTTPS), access controls, and secure hosting
                  environments.
                </p>
                <p>
                  No method of transmission or storage is 100% secure. While we strive to protect your
                  information, we cannot guarantee absolute security. Please use strong passwords and
                  protect your account credentials if applicable.
                </p>
              </section>

              <section id="your-rights" className="legal-section">
                <h2>9. Your Privacy Rights</h2>
                <p>
                  Depending on your location, you may have rights regarding your personal information,
                  including the right to:
                </p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information, subject to legal exceptions</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Request portability of information you provided to us</li>
                </ul>

                <h3>California residents (CCPA/CPRA)</h3>
                <p>
                  If you are a California resident, you may have additional rights including the right to
                  know what personal information we collect, the right to delete personal information, and
                  the right to opt out of the sale or sharing of personal information. LogicWorks does not
                  sell personal information as defined under California law.
                </p>

                <h3>EEA and UK residents (GDPR)</h3>
                <p>
                  If you are located in the European Economic Area or United Kingdom, you may lodge a
                  complaint with your local data protection authority. You also have the right to withdraw
                  consent where processing is based on consent.
                </p>

                <p>
                  To exercise your rights, contact us using the details in Section 14. We may need to
                  verify your identity before processing your request.
                </p>
              </section>

              <section id="children" className="legal-section">
                <h2>10. Children&apos;s Privacy</h2>
                <p>
                  Our Site and Services are not directed to individuals under the age of 16. We do not
                  knowingly collect personal information from children. If you believe we have collected
                  information from a child, please contact us and we will take steps to delete it promptly.
                </p>
              </section>

              <section id="international" className="legal-section">
                <h2>11. International Data Transfers</h2>
                <p>
                  LogicWorks is based in the United States. If you access the Site from outside the U.S.,
                  your information may be transferred to, stored in, and processed in the United States or
                  other countries where our service providers operate.
                </p>
                <p>
                  Where required, we implement appropriate safeguards for international transfers, such as
                  standard contractual clauses or equivalent mechanisms recognized under applicable law.
                </p>
              </section>

              <section id="third-party" className="legal-section">
                <h2>12. Third-Party Links &amp; Services</h2>
                <p>
                  The Site may contain links to third-party websites, platforms, or services that are not
                  operated by LogicWorks. We are not responsible for the privacy practices of those third
                  parties. We encourage you to review their privacy policies before providing personal
                  information.
                </p>
              </section>

              <section id="changes" className="legal-section">
                <h2>13. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices,
                  technology, legal requirements, or business operations. When we make material changes, we
                  will update the &quot;Last updated&quot; date at the top of this page.
                </p>
                <p>
                  Your continued use of the Site after changes are posted constitutes acceptance of the
                  revised policy. We encourage you to review this page periodically.
                </p>
              </section>

              <section id="contact" className="legal-section">
                <h2>14. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights,
                  please contact us:
                </p>
                <div className="legal-contact-card">
                  <p><strong>LogicWorks — Privacy Team</strong></p>
                  <p>
                    Email:{' '}
                    <a href="mailto:privacy@logicworks.com">privacy@logicworks.com</a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+18005644299">+1 (800) LOGIC-WX</a>
                  </p>
                  <p>
                    Web:{' '}
                    <Link href="/contact">logicworks.com/contact</Link>
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
