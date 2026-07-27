import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';

const LAST_UPDATED = 'June 3, 2025';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'eligibility', title: '2. Eligibility' },
  { id: 'services', title: '3. Our Services' },
  { id: 'website-use', title: '4. Use of the Website' },
  { id: 'engagements', title: '5. Client Engagements' },
  { id: 'payment', title: '6. Payment Terms' },
  { id: 'intellectual-property', title: '7. Intellectual Property' },
  { id: 'client-responsibilities', title: '8. Client Responsibilities' },
  { id: 'confidentiality', title: '9. Confidentiality' },
  { id: 'warranties', title: '10. Warranties & Disclaimers' },
  { id: 'liability', title: '11. Limitation of Liability' },
  { id: 'indemnification', title: '12. Indemnification' },
  { id: 'termination', title: '13. Termination' },
  { id: 'governing-law', title: '14. Governing Law' },
  { id: 'changes', title: '15. Changes to These Terms' },
  { id: 'contact', title: '16. Contact Us' },
];

export default function TermsOfServicePage() {
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
        <title head-key="title">Terms of Service | LogicWorks — Elite Digital Agency</title>
        <meta
          name="description"
          content="LogicWorks Terms of Service — the terms and conditions governing your use of our website, digital properties, and professional agency services."
        />
        <link head-key="canonical" rel="canonical" href="https://logicworks.ai/terms-of-service" />
      </Head>

      <section
        className="inner-hero legal-hero"
        aria-labelledby="terms-title"
        style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0d1b3e 60%, #0e1e50 100%)' }}
      >
        <div className="inner-hero-orb" aria-hidden="true" />
        <div className="con" style={{ position: 'relative', zIndex: 2 }}>
          <div className="legal-hero-content">
            <span className="inner-hero-label">Legal</span>
            <h1 className="inner-hero-title" id="terms-title" style={{ maxWidth: '720px' }}>
              TERMS OF SERVICE
            </h1>
            <p className="inner-hero-sub" style={{ marginBottom: '20px' }}>
              Please read these terms carefully before using the LogicWorks website or engaging our
              professional digital agency services.
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
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </aside>

            <article className="legal-body reveal-r">
              <section id="introduction" className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website
                  located at <strong>logicworks.com</strong> (the &quot;Site&quot;) and the professional services
                  offered by LogicWorks (&quot;LogicWorks,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
                <p>
                  By accessing the Site, submitting a form, or engaging our services, you agree to be bound
                  by these Terms and our{' '}
                  <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated herein by reference.
                  If you do not agree, you must not use the Site or our services.
                </p>
                <p>
                  These Terms apply to all visitors, prospective clients, and clients. Separate written
                  agreements, statements of work, or proposals (&quot;Service Agreements&quot;) may supplement
                  these Terms for specific projects. In the event of a conflict, the Service Agreement
                  controls for that project.
                </p>
              </section>

              <section id="eligibility" className="legal-section">
                <h2>2. Eligibility</h2>
                <p>
                  You must be at least 18 years of age and have the legal authority to enter into binding
                  agreements to use the Site or engage LogicWorks services. By using the Site on behalf of
                  a business or organization, you represent that you have authority to bind that entity
                  to these Terms.
                </p>
                <p>
                  LogicWorks services are intended for business and professional use. We reserve the right
                  to refuse service to anyone for any reason at any time, subject to applicable law.
                </p>
              </section>

              <section id="services" className="legal-section">
                <h2>3. Our Services</h2>
                <p>
                  LogicWorks provides digital agency services including, but not limited to:
                </p>
                <ul>
                  <li>Web design, development, and maintenance</li>
                  <li>AI solutions, automation, and machine learning systems</li>
                  <li>Search engine optimization (SEO), AEO, and digital marketing</li>
                  <li>Paid media management and social media services</li>
                  <li>Branding, UI/UX design, and creative strategy</li>
                  <li>Hosting, infrastructure, and technical consulting</li>
                </ul>
                <p>
                  Service scope, deliverables, timelines, and fees are defined in individual proposals,
                  contracts, or statements of work. LogicWorks may update, modify, or discontinue any
                  aspect of the Site or service offerings at any time without prior notice.
                </p>
              </section>

              <section id="website-use" className="legal-section">
                <h2>4. Use of the Website</h2>
                <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You may not:</p>
                <ul>
                  <li>Use the Site in any way that violates applicable federal, state, local, or international law</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site, servers, or systems</li>
                  <li>Introduce viruses, malware, or other harmful code</li>
                  <li>Scrape, crawl, or harvest data from the Site without our prior written consent</li>
                  <li>Impersonate LogicWorks, our employees, or other users</li>
                  <li>Use the Site to transmit spam, unsolicited communications, or misleading information</li>
                  <li>Interfere with or disrupt the integrity or performance of the Site</li>
                </ul>
                <p>
                  We may suspend or terminate access to the Site if we reasonably believe you have violated
                  these Terms or engaged in conduct harmful to LogicWorks or other users.
                </p>
              </section>

              <section id="engagements" className="legal-section">
                <h2>5. Client Engagements</h2>
                <p>
                  Engagements with LogicWorks begin when both parties agree to a proposal, statement of work,
                  or signed contract. Until a Service Agreement is executed, no binding obligation exists
                  beyond these general Terms.
                </p>
                <h3>Proposals &amp; estimates</h3>
                <p>
                  Proposals, audits, and estimates are provided for informational purposes unless explicitly
                  stated otherwise. Pricing and timelines are subject to change based on project scope,
                  revisions, and client responsiveness.
                </p>
                <h3>Revisions &amp; scope changes</h3>
                <p>
                  Deliverables are provided according to the agreed scope. Requests outside the original
                  scope may require a change order and additional fees. LogicWorks will communicate scope
                  changes before proceeding with billable work.
                </p>
                <h3>Third-party tools &amp; platforms</h3>
                <p>
                  Many projects require third-party services (hosting, ad platforms, CMS licenses, APIs, etc.).
                  Clients are responsible for account setup, subscription fees, and compliance with third-party
                  terms unless otherwise agreed in writing.
                </p>
              </section>

              <section id="payment" className="legal-section">
                <h2>6. Payment Terms</h2>
                <p>
                  Payment terms are specified in each Service Agreement. Unless otherwise stated:
                </p>
                <ul>
                  <li>Projects may require a deposit before work begins</li>
                  <li>Invoices are due within the timeframe stated on the invoice (typically Net 15 or Net 30)</li>
                  <li>Late payments may incur interest or suspension of services</li>
                  <li>All fees are quoted in U.S. dollars unless otherwise specified</li>
                  <li>Client is responsible for applicable taxes, excluding taxes on LogicWorks net income</li>
                </ul>
                <p>
                  LogicWorks retains the right to withhold deliverables, pause work, or terminate an engagement
                  for non-payment after reasonable notice. Refund policies, if any, are defined in the
                  applicable Service Agreement.
                </p>
              </section>

              <section id="intellectual-property" className="legal-section">
                <h2>7. Intellectual Property</h2>
                <h3>LogicWorks property</h3>
                <p>
                  The Site, including its design, code, content, logos, trademarks, and proprietary materials,
                  is owned by LogicWorks or its licensors and protected by intellectual property laws. You
                  may not copy, modify, distribute, or create derivative works without our prior written consent.
                </p>
                <h3>Client deliverables</h3>
                <p>
                  Upon full payment, clients receive the rights specified in their Service Agreement to
                  final deliverables created specifically for their project (e.g., custom designs, code,
                  copy). LogicWorks retains ownership of pre-existing tools, frameworks, templates, and
                  general methodologies used in delivery.
                </p>
                <h3>Portfolio &amp; publicity</h3>
                <p>
                  Unless restricted in writing, LogicWorks may display completed work in portfolios,
                  case studies, marketing materials, and award submissions. Clients may request confidential
                  treatment of sensitive projects in their Service Agreement.
                </p>
              </section>

              <section id="client-responsibilities" className="legal-section">
                <h2>8. Client Responsibilities</h2>
                <p>To enable successful project delivery, clients agree to:</p>
                <ul>
                  <li>Provide timely access to required assets, credentials, content, and stakeholders</li>
                  <li>Review and approve deliverables within agreed timeframes</li>
                  <li>Ensure all materials provided to LogicWorks are legally owned or properly licensed</li>
                  <li>Comply with applicable laws in their industry (e.g., HIPAA, FINRA, FTC guidelines)</li>
                  <li>Maintain backups of their data and systems where applicable</li>
                  <li>Designate a primary point of contact with decision-making authority</li>
                </ul>
                <p>
                  Delays caused by client non-responsiveness may affect timelines and may result in
                  schedule adjustments or additional fees as outlined in the Service Agreement.
                </p>
              </section>

              <section id="confidentiality" className="legal-section">
                <h2>9. Confidentiality</h2>
                <p>
                  Both parties may receive confidential or proprietary information during an engagement.
                  Each party agrees to use such information solely for the purpose of fulfilling the
                  engagement and to protect it with reasonable care.
                </p>
                <p>
                  Confidential information does not include information that is publicly available,
                  independently developed, or lawfully obtained from a third party without restriction.
                  Either party may disclose confidential information when required by law, provided reasonable
                  notice is given when permitted.
                </p>
              </section>

              <section id="warranties" className="legal-section">
                <h2>10. Warranties &amp; Disclaimers</h2>
                <p>
                  LogicWorks performs services in a professional and workmanlike manner consistent with
                  industry standards. Specific performance guarantees, if any, are stated in the applicable
                  Service Agreement.
                </p>
                <p>
                  <strong>THE SITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; TO THE MAXIMUM
                  EXTENT PERMITTED BY LAW.</strong> LogicWorks disclaims all warranties, express or implied,
                  including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do not guarantee specific business outcomes such as search rankings, revenue increases,
                  conversion rates, or advertising performance. Digital results depend on many factors outside
                  our control, including market conditions, competition, and client implementation.
                </p>
              </section>

              <section id="liability" className="legal-section">
                <h2>11. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOGICWORKS AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
                  AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION,
                  ARISING FROM YOUR USE OF THE SITE OR SERVICES.
                </p>
                <p>
                  OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR
                  THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO LOGICWORKS
                  FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM DURING THE TWELVE (12) MONTHS PRECEDING
                  THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
                </p>
                <p>
                  Some jurisdictions do not allow certain limitations of liability. In such cases, our
                  liability is limited to the fullest extent permitted by applicable law.
                </p>
              </section>

              <section id="indemnification" className="legal-section">
                <h2>12. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless LogicWorks and its affiliates, officers,
                  directors, employees, and agents from any claims, damages, losses, liabilities, costs,
                  and expenses (including reasonable attorneys&apos; fees) arising from:
                </p>
                <ul>
                  <li>Your use of the Site or services</li>
                  <li>Your violation of these Terms or applicable law</li>
                  <li>Content, materials, or data you provide to LogicWorks</li>
                  <li>Your products, services, or business operations</li>
                </ul>
              </section>

              <section id="termination" className="legal-section">
                <h2>13. Termination</h2>
                <p>
                  Either party may terminate a Service Agreement according to its terms. LogicWorks may
                  suspend or terminate Site access or services immediately if you breach these Terms,
                  fail to pay invoices, or engage in conduct that harms our business or reputation.
                </p>
                <p>
                  Upon termination, you remain responsible for payment of all fees owed for work performed
                  through the termination date. Sections that by their nature should survive termination
                  — including intellectual property, confidentiality, disclaimers, limitation of liability,
                  and indemnification — will survive.
                </p>
              </section>

              <section id="governing-law" className="legal-section">
                <h2>14. Governing Law</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of
                  Delaware, United States, without regard to conflict of law principles.
                </p>
                <p>
                  Any dispute arising from these Terms or the Site shall be resolved through good-faith
                  negotiation. If unresolved, disputes shall be submitted to the exclusive jurisdiction
                  of the state and federal courts located in Delaware, and you consent to personal
                  jurisdiction in those courts.
                </p>
                <p>
                  Project-specific dispute resolution terms, including arbitration clauses, may be specified
                  in individual Service Agreements.
                </p>
              </section>

              <section id="changes" className="legal-section">
                <h2>15. Changes to These Terms</h2>
                <p>
                  We may revise these Terms at any time by updating this page and changing the &quot;Last updated&quot;
                  date. Material changes will be posted on the Site. Your continued use of the Site after
                  changes become effective constitutes acceptance of the revised Terms.
                </p>
                <p>
                  For active client engagements, material changes to these Terms will not modify the terms
                  of an existing signed Service Agreement unless both parties agree in writing.
                </p>
              </section>

              <section id="contact" className="legal-section">
                <h2>16. Contact Us</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="legal-contact-card">
                  <p><strong>LogicWorks — Legal Team</strong></p>
                  <p>
                    Email:{' '}
                    <a href="mailto:legal@logicworks.com">legal@logicworks.com</a>
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
