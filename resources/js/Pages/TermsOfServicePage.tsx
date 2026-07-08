import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { gsap } from 'gsap';

const LAST_UPDATED = 'June 3, 2025';

const sections = [
  { id: 'preamble', title: 'Section 1 — Preamble & Acceptance of Terms' },
  { id: 'definitions', title: 'Section 2 — Definitions' },
  { id: 'scope-of-services', title: 'Section 3 — Scope of Services' },
  { id: 'payment-terms', title: 'Section 4 — Payment Terms & Billing' },
  { id: 'refund-policy', title: 'Section 5 — Refund Policy' },
  { id: 'client-responsibilities', title: 'Section 6 — Client Responsibilities & Cooperation Obligations' },
  { id: 'milestones-approvals', title: 'Section 7 — Project Milestones, Approvals & Acceptance' },
  { id: 'results-disclaimer', title: 'Section 8 — Results Disclaimer' },
  { id: 'intellectual-property', title: 'Section 9 — Intellectual Property Rights' },
  { id: 'chargeback-policy', title: 'Section 10 — Chargeback & Payment Dispute Policy' },
  { id: 'third-party-services', title: 'Section 11 — Third-Party Services & External Dependencies' },
  { id: 'confidentiality', title: 'Section 12 — Confidentiality' },
  { id: 'warranties-liability', title: 'Section 13 — Warranties, Disclaimers & Limitation of Liability' },
  { id: 'indemnification', title: 'Section 14 — Indemnification' },
  { id: 'suspension-termination', title: 'Section 15 — Suspension & Termination' },
  { id: 'force-majeure', title: 'Section 16 — Force Majeure' },
  { id: 'dispute-resolution', title: 'Section 17 — Dispute Resolution, Arbitration & Governing Law' },
  { id: 'general-provisions', title: 'Section 18 — General Provisions' },
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
        <link head-key="canonical" rel="canonical" href="https://logicworksllc.com/terms-of-service" />
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
            <aside className="legal-toc" aria-label="Table of contents">
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

            <article className="legal-body">
              <section id="preamble" className="legal-section">
                <h2>Section 1 — Preamble &amp; Acceptance of Terms</h2>
                <h3>⚠ Important Notice — Please Read Before Proceeding</h3>
                <p>
                  This document constitutes a legally binding agreement between you (the &quot;Client&quot;) and LogicWorks LLC (the &quot;Company&quot;). Your engagement with our services — whether through electronic signature, written confirmation, verbal authorization, or remittance of payment — constitutes your full and unconditional acceptance of all terms set forth herein. If you do not agree with any portion of this Agreement, you must immediately cease all engagement with LogicWorks LLC.
                </p>
                <p>
                  This Comprehensive Terms &amp; Conditions Agreement (the &quot;Agreement&quot;) is entered into by and between <b>LogicWorks LLC</b>, a duly organized limited liability company incorporated under the laws of the State of <b>Virginia, United States of America</b> (hereinafter &quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), and the individual, entity, corporation, partnership, or other legal person engaging the Company&apos;s services (hereinafter &quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;).
                </p>
                <p>
                  This Agreement, together with any executed Service Order, Statement of Work, Project Proposal, Invoice, or Supplemental Schedule (collectively, the &quot;Contract Documents&quot;), constitutes the entire understanding between the Parties with respect to the subject matter hereof, superseding all prior negotiations, representations, or agreements, whether oral or written.
                </p>
                <h3>1.1 Methods of Acceptance</h3>
                <p>
                  This Agreement becomes legally binding upon the occurrence of any one or more of the following:
                </p>
                <ul>
                  <li>Execution of this Agreement or any Service Order by electronic or physical signature;</li>
                  <li>Submission of any payment — whether partial or full — in connection with any Service;</li>
                  <li>Verbal or written confirmation authorizing the commencement of any Service;</li>
                  <li>Continued use of any Service following notice of updated or revised terms;</li>
                  <li>Completion of the onboarding intake or submission of Client materials to the Company.</li>
                </ul>
                <h3>1.2 Modifications to Terms</h3>
                <p>
                  The Company reserves the right to amend this Agreement at any time. Updated terms shall be published on the Company&apos;s official website at <a href="https://www.logicworksllc.com/">www.logicworksllc.com</a>. The Client&apos;s continued engagement with the Company&apos;s Services following publication of modified terms constitutes irrevocable acceptance of such modifications.
                </p>
              </section>

              <section id="definitions" className="legal-section">
                <h2>Section 2 — Definitions</h2>
                <p>
                  For the purposes of this Agreement, the following terms carry the meanings ascribed to them herein:
                </p>
                <ul>
                  <li>&quot;<b>Agreement</b>&quot; — This Terms &amp; Conditions document, inclusive of all exhibits, addenda, schedules, and incorporated documents, as amended from time to time.</li>
                  <li>&quot;<b>Client</b>&quot; — Any natural person, corporate entity, partnership, sole proprietor, or other legally recognized entity that has engaged, or seeks to engage, the Company&apos;s services.</li>
                  <li>&quot;<b>Services</b>&quot; — All digital, creative, technical, marketing, AI, consulting, and ancillary services offered or performed by the Company, including but not limited to brand identity, logo design, website design and development, AI automation, machine learning, mobile application development, custom software, CRM development, hosting, social media management, SEO, AEO, Google Ads, PPC, and all related services.</li>
                  <li>&quot;<b>Deliverables</b>&quot; — Any tangible or intangible outputs, work product, creative assets, code, designs, reports, AI models, or documentation produced by the Company in connection with the Services.</li>
                  <li>&quot;<b>Milestone</b>&quot; — A defined stage or checkpoint within a Project, associated with specific Deliverables and/or payment obligations.</li>
                  <li>&quot;<b>Third-Party Services</b>&quot; — External platforms, tools, APIs, payment gateways, hosting providers, advertising networks, AI platforms, or other services owned and operated by entities other than the Company.</li>
                  <li>&quot;<b>Credentials</b>&quot; — Login information, API keys, access tokens, passwords, account details, or other authentication data required to access or integrate Third-Party Services.</li>
                  <li>&quot;<b>Chargeback</b>&quot; — A reversal of a payment transaction initiated by the Client through a Payment Processor, card-issuing bank, or financial institution, irrespective of characterization.</li>
                  <li>&quot;<b>Force Majeure Event</b>&quot; — Any circumstance beyond the reasonable control of either Party, including acts of God, natural disasters, pandemics, governmental action, cyberattacks, or failure of Third-Party Service infrastructure.</li>
                  <li>&quot;<b>Marketing Services</b>&quot; — All paid advertising management, social media management, SEO, AEO, content marketing, email campaigns, AI automation, and related digital marketing activities.</li>
                </ul>
              </section>

              <section id="scope-of-services" className="legal-section">
                <h2>Section 3 — Scope of Services</h2>
                <p>
                  The Company offers a comprehensive suite of professional digital agency and AI solutions. The specific Services to be provided to any Client shall be as agreed upon and documented in the applicable Service Order, Proposal, or Statement of Work. The Company&apos;s catalog includes, but is not limited to:
                </p>
                <h3>3.1 Brand Identity &amp; Creative Services</h3>
                <ul>
                  <li>Brand identity strategy, development, and consulting;</li>
                  <li>Logo design, refinement, and brand guidelines creation;</li>
                  <li>Visual identity systems, color palette, and typography selection;</li>
                  <li>Marketing collateral, packaging design, and motion graphics.</li>
                </ul>
                <h3>3.2 Website Design &amp; Development</h3>
                <ul>
                  <li>Website architecture, wireframing, and UX/UI design;</li>
                  <li>Front-end and back-end development, including CMS implementation (WordPress, Webflow, Shopify, React, Next.js, and custom headless CMS);</li>
                  <li>E-commerce platform development, third-party integrations, and website performance optimization;</li>
                  <li>Core Web Vitals, page speed optimization, and conversion rate optimization (CRO).</li>
                </ul>
                <h3>3.3 AI Automation &amp; Machine Learning</h3>
                <ul>
                  <li>AI-powered workflow automation and RPA systems;</li>
                  <li>Custom machine learning models for predictive analytics, NLP, and vision AI;</li>
                  <li>AI chatbots, intelligent sales assistants, and automated lead qualification;</li>
                  <li>Custom CRM systems infused with AI for lead scoring, pipeline management, and automated follow-ups.</li>
                </ul>
                <h3>3.4 Mobile Application Development</h3>
                <ul>
                  <li>iOS and Android native and cross-platform mobile application design and development (React Native);</li>
                  <li>App Store and Google Play submission support, push notification integration, and API connectivity.</li>
                </ul>
                <h3>3.5 Custom Software, Portal &amp; Enterprise Solutions</h3>
                <ul>
                  <li>Custom web portal and internal dashboard development;</li>
                  <li>Marketplace platform development with multi-vendor capability;</li>
                  <li>ERP system design, implementation, and customization;</li>
                  <li>CRM integration, workflow automation, and database architecture;</li>
                  <li>SaaS application development.</li>
                </ul>
                <h3>3.6 Hosting &amp; Infrastructure</h3>
                <ul>
                  <li>Managed web hosting, domain registration, DNS management, and SSL procurement;</li>
                  <li>Cloud infrastructure setup, server monitoring, uptime management, and website migration;</li>
                  <li>99.99% uptime hosting with CDN, daily backups, and 24/7 monitoring.</li>
                </ul>
                <h3>3.7 Digital Marketing, SEO &amp; AEO</h3>
                <ul>
                  <li>SEO (on-page, off-page, and technical), Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, and programmatic campaign management;</li>
                  <li>Answer Engine Optimization (AEO) for AI-generated search responses (Google SGE, ChatGPT, Perplexity, Bing Copilot);</li>
                  <li>Social media account management, content creation, and community engagement;</li>
                  <li>Email marketing, PPC strategy, content marketing, A/B testing, and analytics setup and reporting.</li>
                </ul>
                <h3>3.8 Customized Nature of All Services</h3>
                <p>
                  The Client acknowledges that all Services are inherently customized and uniquely tailored to each engagement. From the moment a Service Order is initiated or payment is received, the Company immediately begins allocating personnel, resources, and operational capacity exclusively to the Client&apos;s Project. Accordingly, all work performed, time expended, and resources committed are non-recoverable, regardless of the stage of completion.
                </p>
              </section>

              <section id="payment-terms" className="legal-section">
                <h2>Section 4 — Payment Terms &amp; Billing</h2>
                <h3>4.1 Fee Structure</h3>
                <p>
                  All fees and payment schedules shall be specified in the Company&apos;s Service Order, Proposal, Invoice, or Quotation. Standard payment terms are as follows:
                </p>
                <ul>
                  <li>Payments may be structured as full upfront payment, milestone-based payments, or retainer-based arrangements for ongoing services;</li>
                  <li>All invoices are due within five (5) calendar days of issuance, unless otherwise documented in writing;</li>
                  <li>Work will not commence until payment has been received and confirmed in cleared funds.</li>
                </ul>
                <h3>4.2 Accepted Payment Methods &amp; Method-Specific Terms</h3>
                <p>
                  The Company currently accepts payment through the following authorized channels. Specific legal terms applicable to each method are detailed in the table below and expanded thereafter:
                </p>
                <div className="legal-table-wrap">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th>Payment Method</th>
                        <th>Reversibility</th>
                        <th>Client Dispute Recourse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Visa® / Mastercard®</td>
                        <td>Reversible via card network chargeback. Company will vigorously contest with full documentation.</td>
                        <td>Card issuer dispute + contractual arbitration per Section 17.</td>
                      </tr>
                      <tr>
                        <td>American Express®</td>
                        <td>Reversible via AMEX dispute process. Company retains right to rebut with evidence.</td>
                        <td>AMEX dispute process + contractual arbitration per Section 17.</td>
                      </tr>
                      <tr>
                        <td>Debit Card</td>
                        <td>Reversible via issuing bank dispute mechanism. Same terms as credit card apply.</td>
                        <td>Issuing bank dispute + contractual arbitration per Section 17.</td>
                      </tr>
                      <tr>
                        <td>PayPal®</td>
                        <td>Limited reversibility via PayPal Resolution Centre.</td>
                        <td>PayPal Resolution Centre + contractual arbitration per Section 17.</td>
                      </tr>
                      <tr>
                        <td>Zelle®</td>
                        <td>Generally irreversible once transmitted. No buyer protection program.</td>
                        <td>Contractual dispute resolution per Section 17 only.</td>
                      </tr>
                      <tr>
                        <td>Cash App</td>
                        <td>Generally irreversible once accepted. No buyer protection offered.</td>
                        <td>Contractual dispute resolution per Section 17 only.</td>
                      </tr>
                      <tr>
                        <td>Wire Transfer</td>
                        <td>Irreversible; subject to bank fraud recall procedures only.</td>
                        <td>Contractual dispute resolution per Section 17 only.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>4.2.1 Credit &amp; Debit Cards (Visa, Mastercard, American Express)</h3>
                <p>
                  By providing card payment details, the Client: (i) authorizes the Company to charge the designated card for agreed amounts per the applicable invoice; (ii) represents that they are the authorized cardholder or have express authorization from the cardholder; and (iii) agrees that any unauthorized chargeback shall constitute a material breach entitling the Company to recover the original amount, chargeback processing fees (typically $25–$100 per incident), attorney&apos;s fees, and all associated costs.
                </p>
                <h3>4.2.2 PayPal</h3>
                <p>
                  Payments processed through PayPal are subject to PayPal&apos;s User Agreement. The Company may contest any PayPal payment reversal or Buyer Protection claim by submitting documentation including signed agreements, communication records, Deliverable proofs, and delivery confirmations. Any PayPal dispute filed without prior written notice to the Company as required under Section 10 shall be deemed bad faith and a breach of this Agreement.
                </p>
                <h3>4.2.3 Zelle</h3>
                <p>
                  The Client acknowledges that Zelle® transfers are typically instant and irrevocable upon successful transmission. Zelle does not offer a buyer protection or dispute resolution program. Accordingly, all Zelle-based payments are final upon transmission, and the Client&apos;s sole recourse is through the contractual dispute resolution procedures set forth in Section 17.
                </p>
                <h3>4.2.4 Cash App</h3>
                <p>
                  Cash App transactions are non-reversible once accepted by the Company. Cash App&apos;s dispute resolution mechanisms are limited. The Client&apos;s recourse in the event of any dispute relating to a Cash App payment is governed exclusively by this Agreement. The Client shall ensure payment is directed to the Company&apos;s registered and verified Cash App handle.
                </p>
                <h3>4.2.5 Wire Transfer</h3>
                <p>
                  All wire transfer fees — including outgoing, intermediary, and incoming bank charges — are the sole responsibility of the Client. Payments shall be remitted in the full invoiced amount net of all bank fees. International wire transfers may be subject to additional processing time, compliance screening, or foreign exchange conversion. The Company bears no liability for delays attributable to banking intermediaries. The Client is solely responsible for the accuracy of all wire instructions as provided by the Company.
                </p>
                <h3>4.3 Late Payment &amp; Default</h3>
                <ul>
                  <li>A late payment fee of <b>1.5% per month</b> (or the maximum rate permitted by applicable law) shall accrue on all overdue balances from the date of default;</li>
                  <li>The Company reserves the right to immediately suspend all ongoing Services — including hosting, advertising campaigns, AI systems, and development work — pending full receipt of overdue amounts;</li>
                  <li>The Client shall be responsible for all reasonable costs of collection, including attorney&apos;s fees and collection agency fees;</li>
                  <li>Suspension of Services due to non-payment shall not entitle the Client to any credit, refund, service extension, or damages.</li>
                </ul>
                <h3>4.4 Taxes</h3>
                <p>
                  All quoted fees are exclusive of applicable federal, state, local, or foreign taxes, levies, or duties. The Client is solely responsible for all applicable taxes on the transaction. Where required by law, the Company may collect applicable sales or use taxes in addition to agreed service fees.
                </p>
              </section>

              <section id="refund-policy" className="legal-section">
                <h2>Section 5 — Refund Policy</h2>
                <h3>Non-Refundable Services Policy</h3>
                <p>
                  All fees paid to LogicWorks LLC are non-refundable once work has commenced. Commencement of work includes internal briefing, creative concepting, research, AI model training, procurement of licenses or tools, assignment of personnel, or any preparatory activity undertaken in anticipation of or during the Client&apos;s Project.
                </p>
                <h3>5.1 General Non-Refundability</h3>
                <p>
                  The Client expressly acknowledges that all Services are inherently customized and that the Company incurs substantial upfront costs upon project initiation — including employee compensation, software licensing, AI infrastructure, hosting provisioning, advertising account setup, and operational overhead — which cannot be recovered regardless of whether the Client elects to continue the engagement. Under no circumstances shall the Company be obligated to issue a refund — whether partial or full — following the initiation of any Project or Service.
                </p>
                <h3>5.2 No Refund Scenarios</h3>
                <p>
                  This non-refundability applies regardless of, and without limitation to:
                </p>
                <ul>
                  <li>The Client&apos;s change of mind, shift in business direction, or reconsideration of project scope;</li>
                  <li>The Client&apos;s dissatisfaction with preliminary designs, concepts, AI outputs, or prototypes, provided that revisions within the agreed scope have been offered;</li>
                  <li>The Client&apos;s inability or unwillingness to provide required materials, Credentials, approvals, or access to Third-Party Services necessary for project completion;</li>
                  <li>Delays attributable to the Client&apos;s failure to respond, provide feedback, or supply required inputs in a timely manner;</li>
                  <li>Third-party service failures, API limitations, AI platform changes, or platform policy changes beyond the Company&apos;s control;</li>
                  <li>The Client&apos;s bankruptcy, insolvency, business closure, or corporate restructuring;</li>
                  <li>Any change in the Client&apos;s financial circumstances, budget constraints, or strategic priorities.</li>
                </ul>
                <h3>5.3 Milestone Payments</h3>
                <p>
                  Each individual milestone payment is non-refundable upon receipt. The Client&apos;s decision to discontinue a Project following payment of one or more milestones does not entitle the Client to recover any previously remitted milestone payment, regardless of the stage of completion.
                </p>
                <h3>5.4 Retainer &amp; Subscription Services</h3>
                <p>
                  For ongoing or retainer-based Services — including Social Media Management, SEO, AEO, Hosting, AI Automation, and Advertising Management:
                </p>
                <ul>
                  <li>Monthly retainer fees are payable in advance and are non-refundable for the billing period in which they are charged;</li>
                  <li>Cancellation requires written notice of no less than thirty (30) calendar days prior to the next billing cycle. Services continue for the notice period with no prorated refund;</li>
                  <li>Personnel changes within the Company shall not constitute grounds for refund or early termination.</li>
                </ul>
                <h3>5.5 Goodwill Service Credits</h3>
                <p>
                  Notwithstanding the foregoing, the Company may, in its sole and absolute discretion, elect to provide a partial service credit — not a monetary refund — in exceptional circumstances where a manifest error attributable solely to the Company has resulted in a material failure to deliver an agreed Deliverable. Any such credit shall be applied exclusively toward future services and shall not be transferable, exchangeable for cash, or applied retroactively. Issuance of any service credit shall not constitute an admission of liability or wrongdoing.
                </p>
              </section>

              <section id="client-responsibilities" className="legal-section">
                <h2>Section 6 — Client Responsibilities &amp; Cooperation Obligations</h2>
                <h3>6.1 General Cooperation</h3>
                <p>
                  The successful and timely delivery of Services is inherently dependent upon the active, good-faith cooperation of the Client throughout the engagement. The Client agrees, as a material condition of this Agreement, to fulfill all responsibilities set forth in this Section in a timely and professional manner. Delays, failures, or omissions on the Client&apos;s part directly impact the Company&apos;s ability to perform and shall not serve as grounds for refund, credit, or claims of non-delivery.
                </p>
                <h3>6.2 Provision of Required Materials</h3>
                <p>
                  The Client is solely responsible for providing — in a complete, accurate, and timely manner — all materials, content, assets, data sets, and documentation reasonably necessary for the performance of Services, including but not limited to:
                </p>
                <ul>
                  <li>Brand assets, logos, imagery, and existing brand guidelines;</li>
                  <li>Textual content, product descriptions, and legal disclosures;</li>
                  <li>High-resolution photography, video, and multimedia assets;</li>
                  <li>Domain access, hosting panel credentials, and FTP/SFTP access;</li>
                  <li>Pre-existing website data, databases, or digital archives for migration;</li>
                  <li>Historical business data, customer data, or training data required for AI/ML model development.</li>
                </ul>
                <h3>6.3 Third-Party Credentials &amp; API Access</h3>
                <h3>⚠ Critical Obligation — Third-Party Credential Provision</h3>
                <p>
                  For Projects requiring integration with Third-Party Services — including payment gateways, shipping providers, CRM platforms, social media platforms, AI platforms, advertising networks, or any other external software — the Client bears exclusive and non-delegable responsibility for applying for, obtaining, and providing all required Credentials, API keys, and account approvals. The Company cannot compel, obtain, or substitute Credentials from Third-Party providers on the Client&apos;s behalf. Any delay in, refusal to provide, or inability to provide required third-party access shall not constitute a failure of delivery by the Company, and no refund, credit, or compensation shall be issued as a result.
                </p>
                <h3>6.4 Feedback &amp; Approval Timelines</h3>
                <ul>
                  <li>Feedback on presented Deliverables is due within <b>five (5) business days</b> of presentation;</li>
                  <li>Where the Client fails to provide feedback within ten (10) business days without prior written notice of delay, the most recently submitted Deliverable version shall be deemed approved;</li>
                  <li>Project timelines are contingent upon the Client&apos;s timely cooperation. Client-caused delays extend the estimated delivery timeline commensurately.</li>
                </ul>
                <h3>6.5 Accuracy of Information</h3>
                <p>
                  The Client warrants that all information, materials, content, and data provided to the Company are accurate, complete, lawful, and do not infringe any third-party rights. The Client shall indemnify the Company from any claim, liability, or expense arising from the Client&apos;s provision of inaccurate, incomplete, or unlawful content.
                </p>
              </section>

              <section id="milestones-approvals" className="legal-section">
                <h2>Section 7 — Project Milestones, Approvals &amp; Acceptance</h2>
                <h3>7.1 Milestone Delivery</h3>
                <p>
                  Upon completion of each milestone, the Company shall present the relevant Deliverables to the Client for review and approval. The approval of each milestone — whether express or deemed — shall constitute the Client&apos;s final acceptance of all work performed under that milestone and shall be binding.
                </p>
                <h3>7.2 Forms of Deemed Approval</h3>
                <p>
                  Client approval of Deliverables shall be deemed to have occurred upon any of the following:
                </p>
                <ul>
                  <li>Express written approval via email, digital signature, or any electronic messaging platform;</li>
                  <li>Verbal approval during a scheduled review call, memorialized in meeting notes;</li>
                  <li>Silence or failure to provide written objections within the applicable feedback period (see Section 6.4);</li>
                  <li>Instruction to proceed to the next phase following presentation of a Deliverable;</li>
                  <li>Public deployment, use, or distribution of a Deliverable by the Client.</li>
                </ul>
                <h3>7.3 Revision Scope</h3>
                <p>
                  Each phase includes a defined number of revision rounds as specified in the applicable Service Order. Revisions are confined to refinements within the originally agreed scope. Requests that materially alter the agreed scope — including changes to concept direction, design approach, AI model parameters, feature set, or technical architecture — shall be treated as change orders and may be subject to additional fees at the Company&apos;s then-current hourly rate.
                </p>
                <h3>7.4 Go-Live Authorization</h3>
                <p>
                  Prior to deployment, publication, or launch of any website, application, AI system, or advertising campaign, the Client shall provide explicit written authorization. Such authorization constitutes the Client&apos;s final acceptance of the Deliverable in its completed form and releases the Company from any further modification obligation outside a separate maintenance agreement.
                </p>
              </section>

              <section id="results-disclaimer" className="legal-section">
                <h2>Section 8 — Results Disclaimer</h2>
                <h3>📢 Results Disclaimer — Please Read</h3>
                <p>
                  The Company makes no warranties, representations, or guarantees of any kind — express or implied — regarding the results, outcomes, performance metrics, or effectiveness of any marketing, advertising, AI, or automation service. Digital marketing and AI outcomes are subject to market conditions, platform algorithm changes, competitive dynamics, data quality, and factors entirely outside the Company&apos;s control.
                </p>
                <h3>8.1 No Guarantee of Specific Outcomes</h3>
                <p>
                  The Company expressly disclaims any guarantee of the following, and the Client shall not be entitled to claim a refund, credit, or damages based on the non-achievement of any of the following:
                </p>
                <ul>
                  <li>Specific search engine rankings or positioning on Google, Bing, or any other search engine;</li>
                  <li>Specific numbers of website visitors, page views, leads, inquiries, or conversions;</li>
                  <li>Specific return on advertising spend (ROAS), return on investment (ROI), cost-per-click (CPC), or cost-per-acquisition (CPA) figures;</li>
                  <li>Specific revenue growth, sales volume, or business performance outcomes;</li>
                  <li>Specific social media follower counts, engagement rates, reach, or impressions;</li>
                  <li>Specific email open rates, click-through rates, or conversion metrics;</li>
                  <li>Specific AI model accuracy, prediction accuracy, or automation performance metrics.</li>
                </ul>
                <h3>8.2 Third-Party Platform Dependency</h3>
                <p>
                  All paid advertising and AI integrations are executed through third-party platforms (Google, Meta, LinkedIn, TikTok, OpenAI, Anthropic, etc.) governed by their own terms and algorithmic systems beyond the Company&apos;s control. The Client acknowledges that:
                </p>
                <ul>
                  <li>The Company has no control over the approval, rejection, or suspension of advertising accounts, AI platform access, or campaigns by these platforms;</li>
                  <li>Algorithm, policy, and audience targeting changes may impact campaign performance without notice;</li>
                  <li>AI model behavior, outputs, and availability are subject to the policies and infrastructure of third-party AI providers;</li>
                  <li>Platform-imposed account suspensions, ad disapprovals, or AI service restrictions shall not constitute non-performance by the Company and shall not entitle the Client to a refund of any management fees paid.</li>
                </ul>
                <h3>8.3 Client Advertising Budget</h3>
                <p>
                  Unless otherwise specified, the Company&apos;s marketing service fees are management and strategy fees only and do not include the Client&apos;s advertising budget (media spend paid directly to advertising platforms) or AI platform usage fees. The Client is solely responsible for funding their advertising accounts and AI platform subscriptions. Insufficient advertising budget, account funding delays, or platform billing failures shall not entitle the Client to a reduction in management fees.
                </p>
                <h3>8.4 SEO &amp; AEO Timeline Expectations</h3>
                <p>
                  Search engine optimization and Answer Engine Optimization are long-term, iterative processes. Meaningful results typically require a minimum of <b>three (3) to six (6) months</b>, and often twelve (12) months or more, to manifest in measurable improvements. The Client shall not interpret the absence of immediate ranking or AI visibility improvements as non-performance or grounds for early termination without penalty.
                </p>
              </section>

              <section id="intellectual-property" className="legal-section">
                <h2>Section 9 — Intellectual Property Rights</h2>
                <h3>9.1 Company&apos;s Pre-Existing IP</h3>
                <p>
                  All methodologies, processes, frameworks, tools, templates, code libraries, AI models, training data, and design systems developed or owned by the Company prior to or independently of this engagement (&quot;Company IP&quot;) remain the exclusive property of the Company. Nothing in this Agreement grants the Client any rights, license, or interest in Company IP.
                </p>
                <h3>9.2 Transfer of Client-Specific Deliverables</h3>
                <p>
                  Subject to the Client&apos;s <b>full payment of all fees</b> due under this Agreement, the Company shall assign to the Client intellectual property rights in the final, client-specific, custom-created Deliverables. For the avoidance of doubt:
                </p>
                <ul>
                  <li>No intellectual property rights transfer until all outstanding payments have been received and cleared in full;</li>
                  <li>The Company retains the right to display and reference the Client&apos;s Project in its portfolio and marketing materials unless the Client requests confidentiality in writing;</li>
                  <li>Third-party components, plugins, licensed fonts, stock photography, open-source software, AI APIs, and pre-trained models are subject to their respective licenses and are not included in the IP assignment;</li>
                  <li>Generic code frameworks, CMS themes, AI automation templates, and platform components are not assigned to the Client, regardless of customization.</li>
                </ul>
              </section>

              <section id="chargeback-policy" className="legal-section">
                <h2>Section 10 — Chargeback &amp; Payment Dispute Policy</h2>
                <h3>⚠ Mandatory Pre-Dispute Notification Required</h3>
                <p>
                  Before initiating any chargeback, payment reversal, or dispute through any Payment Processor, card issuer, or financial institution, the Client is required to first provide the Company written notice at <a href="mailto:legal@logicworksllc.com">legal@logicworksllc.com</a> and allow a minimum of fifteen (15) business days to investigate and respond. Failure to complete this step constitutes a material breach of this Agreement.
                </p>
                <h3>10.1 Chargeback as Breach</h3>
                <p>
                  The unauthorized initiation of a chargeback — filed without completing the pre-dispute notification process — constitutes a material breach of this Agreement. Upon such breach, the Company reserves the right to, without limitation:
                </p>
                <ul>
                  <li>Immediately suspend all active Services, including hosting, advertising campaigns, AI systems, social media management, and all development work;</li>
                  <li>Place all Client-associated websites and digital assets in maintenance mode pending resolution;</li>
                  <li>Submit comprehensive evidence packages to the applicable payment processor, card network, or arbitration body, including signed agreements, invoice records, communication logs, project delivery evidence, design files, AI outputs, screenshots, deployment records, and access logs;</li>
                  <li>Pursue recovery of all amounts subject to the chargeback, together with chargeback processing fees, administrative costs, attorney&apos;s fees, and consequential damages through all available legal channels;</li>
                  <li>Report chargeback activity to relevant fraud prevention networks as permitted by applicable law.</li>
                </ul>
                <h3>10.2 Card Network Merchant Rights</h3>
                <p>
                  The Client acknowledges that Visa®, Mastercard®, and American Express® maintain merchant dispute resolution programs permitting merchants to contest chargebacks through documented evidence. The Company shall vigorously utilize all available dispute mechanisms and the mere filing of a chargeback does not constitute a final determination of the Client&apos;s entitlement to a refund.
                </p>
                <h3>10.3 Zelle &amp; Cash App — Irreversibility</h3>
                <p>
                  The Client expressly acknowledges that payments made via Zelle® and Cash App are irreversible once completed, and that these platforms do not provide buyer protection or dispute resolution mechanisms. The Client&apos;s sole recourse for any perceived issue with Services paid via Zelle or Cash App is through the contractual dispute resolution procedures in Section 17.
                </p>
              </section>

              <section id="third-party-services" className="legal-section">
                <h2>Section 11 — Third-Party Services &amp; External Dependencies</h2>
                <h3>11.1 Acknowledgment of Third-Party Role</h3>
                <p>
                  The Company acts as a skilled technical intermediary in facilitating integrations with Third-Party Services and neither owns, operates, controls, nor guarantees the availability, functionality, reliability, pricing, or policies of any Third-Party Service, including AI platforms and APIs.
                </p>
                <h3>11.2 No Liability for Third-Party Failures</h3>
                <p>
                  The Company shall not be liable, and the Client shall not be entitled to claim any refund, credit, or damages, in connection with:
                </p>
                <ul>
                  <li>Outages, downtime, or service interruptions attributable to Third-Party Services, including hosting providers, domain registrars, CDN services, AI platforms, or other third-party infrastructure;</li>
                  <li>Changes to Third-Party Service policies, API specifications, pricing, or AI model behavior that require modifications to previously completed integrations;</li>
                  <li>Third-party platform decisions to deny, suspend, restrict, or terminate the Client&apos;s account or access;</li>
                  <li>Delays in Third-Party Service approvals or onboarding processes required for integration completion.</li>
                </ul>
              </section>

              <section id="confidentiality" className="legal-section">
                <h2>Section 12 — Confidentiality</h2>
                <p>
                  Each Party agrees to hold all Confidential Information of the other Party in strict confidence, not disclose it to any third party without prior written consent, and use it solely for the purposes of performing obligations under this Agreement. These obligations do not apply to information that is or becomes publicly available, was independently known, or is required to be disclosed by law.
                </p>
                <p>
                  The Company agrees to treat all Credentials provided by the Client — including login details and API keys — as strictly confidential and to use them solely for the purpose of performing the agreed Services.
                </p>
              </section>

              <section id="warranties-liability" className="legal-section">
                <h2>Section 13 — Warranties, Disclaimers &amp; Limitation of Liability</h2>
                <h3>13.1 Company&apos;s Limited Warranty</h3>
                <p>
                  The Company warrants that: (i) Services will be performed in a professional and workmanlike manner consistent with industry standards; (ii) the Company has the legal right to enter into this Agreement; and (iii) to the Company&apos;s knowledge, custom Deliverables will not, at the time of delivery, infringe the intellectual property rights of any third party.
                </p>
                <h3>13.2 Disclaimer of Implied Warranties</h3>
                <p>
                  EXCEPT AS SET FORTH IN SECTION 13.1, THE COMPANY&apos;S SERVICES AND DELIVERABLES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND. THE COMPANY EXPRESSLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <h3>13.3 Cap on Liability</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY&apos;S TOTAL CUMULATIVE LIABILITY TO THE CLIENT — WHETHER IN CONTRACT, TORT, OR ANY OTHER LEGAL THEORY — SHALL IN NO EVENT EXCEED THE TOTAL AMOUNT OF FEES ACTUALLY PAID BY THE CLIENT TO THE COMPANY IN THE <b>THREE (3) MONTHS</b> IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </p>
                <h3>13.4 Exclusion of Consequential Damages</h3>
                <p>
                  IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF DATA, OR LOSS OF GOODWILL, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR THE COMPANY HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </section>

              <section id="indemnification" className="legal-section">
                <h2>Section 14 — Indemnification</h2>
                <p>
                  The Client shall defend, indemnify, and hold harmless the Company and its members, officers, employees, contractors, and affiliates from and against any and all claims, losses, liabilities, costs, and expenses (including reasonable attorney&apos;s fees) arising out of or relating to:
                </p>
                <ul>
                  <li>The Client&apos;s breach of any representation, warranty, or obligation under this Agreement;</li>
                  <li>The Client&apos;s provision of unlawful, inaccurate, defamatory, or infringing content or information;</li>
                  <li>The Client&apos;s infringement of any third-party intellectual property, privacy, or other legal right;</li>
                  <li>Any product or service offered by the Client through any Deliverable developed by the Company;</li>
                  <li>The Client&apos;s violation of any applicable law in connection with use of the Company&apos;s Services;</li>
                  <li>The Client&apos;s unauthorized chargeback or payment reversal in breach of Section 10.</li>
                </ul>
              </section>

              <section id="suspension-termination" className="legal-section">
                <h2>Section 15 — Suspension &amp; Termination</h2>
                <h3>15.1 Right to Suspend</h3>
                <p>
                  The Company reserves the right to immediately suspend performance of all or any portion of the Services, without liability to the Client, upon: (i) failure to remit any payment when due; (ii) breach of any material obligation under this Agreement; (iii) initiation of an unauthorized chargeback; (iv) provision of false or fraudulent information; or (v) a Force Majeure Event.
                </p>
                <h3>15.2 Termination for Cause</h3>
                <p>
                  Either Party may terminate this Agreement for cause upon written notice if the other Party has materially breached this Agreement and has failed to cure such breach within <b>fifteen (15) business days</b> of receiving written notice. In the event of termination by the Company for the Client&apos;s breach, all outstanding fees become immediately due and payable, and no refund of any previously paid amounts shall be due.
                </p>
                <h3>15.3 Effects of Termination</h3>
                <p>
                  Upon termination: (i) all licenses granted to the Client terminate, except to the extent the Company has been paid in full for completed Deliverables; (ii) the Company retains ownership of all work-in-progress not fully paid for; and (iii) all provisions that by their nature should survive termination shall survive, including Sections 9, 10, 12, 13, 14, and 17.
                </p>
              </section>

              <section id="force-majeure" className="legal-section">
                <h2>Section 16 — Force Majeure</h2>
                <p>
                  Neither Party shall be liable for any delay or failure in performance resulting from causes beyond its reasonable control, including acts of God, natural disasters, fire, flood, earthquake, pandemic, governmental action, cyberattacks, major internet service disruptions, AI platform outages, or failure of critical third-party infrastructure (each, a &quot;Force Majeure Event&quot;). The affected Party shall promptly notify the other Party in writing. Performance obligations shall be suspended for the duration of such event, and timelines shall be adjusted accordingly. Force Majeure Events shall not entitle either Party to terminate this Agreement or claim damages for the delay.
                </p>
              </section>

              <section id="dispute-resolution" className="legal-section">
                <h2>Section 17 — Dispute Resolution, Arbitration &amp; Governing Law</h2>
                <h3>17.1 Informal Resolution</h3>
                <p>
                  In the event of any dispute arising out of or relating to this Agreement, the Parties shall first attempt resolution through good-faith negotiation. The complaining Party shall provide written notice specifying the nature of the dispute, and the Parties shall meet and confer within <b>fifteen (15) business days</b> to reach a mutually satisfactory resolution.
                </p>
                <h3>17.2 Binding Arbitration</h3>
                <p>
                  If the Parties are unable to resolve the dispute through informal negotiation within thirty (30) calendar days, the dispute shall be submitted to binding arbitration administered by the <b>American Arbitration Association (AAA)</b> in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted by a single neutral arbitrator in the <b>State of Texas</b>. The arbitrator&apos;s award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
                </p>
                <h3>17.3 Waiver of Class Action</h3>
                <p>
                  THE CLIENT EXPRESSLY AND IRREVOCABLY WAIVES ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING AGAINST THE COMPANY. ALL DISPUTES SHALL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY.
                </p>
                <h3>17.4 Governing Law</h3>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of the <b>State of Texas, United States of America</b>, without regard to its conflict of laws provisions. To the extent any matter is not subject to arbitration, the Parties consent to the exclusive jurisdiction of the state and federal courts located within <b>Texas</b>.
                </p>
              </section>

              <section id="general-provisions" className="legal-section">
                <h2>Section 18 — General Provisions</h2>
                <h3>18.1 Entire Agreement</h3>
                <p>
                  This Agreement, together with all applicable Service Orders, Proposals, and Statements of Work, constitutes the entire agreement between the Parties and supersedes all prior communications, agreements, or understandings, whether written or oral.
                </p>
                <h3>18.2 Severability</h3>
                <p>
                  If any provision of this Agreement is held invalid or unenforceable, such provision shall be limited to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
                </p>
                <h3>18.3 Waiver</h3>
                <p>
                  No waiver of any breach or default shall be deemed a waiver of any subsequent breach and shall not affect the other terms of this Agreement.
                </p>
                <h3>18.4 Assignment</h3>
                <p>
                  The Client may not assign any rights or obligations under this Agreement without the prior written consent of the Company. The Company may freely assign this Agreement in connection with a merger, acquisition, or sale of assets.
                </p>
                <h3>18.5 Relationship of the Parties</h3>
                <p>
                  The Parties are independent contractors. Nothing in this Agreement creates a partnership, joint venture, agency, or employment relationship between the Parties.
                </p>
                <h3>18.6 Electronic Signatures &amp; Counterparts</h3>
                <p>
                  Electronic signatures, digital approvals, and electronic confirmations are deemed valid and binding to the same extent as original, handwritten signatures.
                </p>
                <h3>18.7 Contact Information</h3>
                <p>
                  For all legal inquiries, dispute notifications, and formal notices under this Agreement, please contact:
                </p>
                <div className="legal-contact-card">
                  <p>Legal Department: <a href="mailto:legal@logicworksllc.com">legal@logicworksllc.com</a></p>
                  <p>General Support: <a href="mailto:support@logicworksllc.com">support@logicworksllc.com</a></p>
                  <p>Website: <a href="https://www.logicworksllc.com/">www.logicworksllc.com</a></p>
                  <p>Jurisdiction: State of Texas, United States of America</p>
                </div>
                <h3>Client Acknowledgment</h3>
                <p>
                  By engaging the Services of LogicWorks LLC, the Client acknowledges and declares as follows:
                </p>
                <ul>
                  <li>I/We have read, understood, and voluntarily agree to be bound by all provisions of this Agreement in their entirety.</li>
                  <li>I/We acknowledge that all Services are customized in nature and that all fees paid are non-refundable once work has commenced.</li>
                  <li>I/We acknowledge that no guarantees of specific marketing results, rankings, traffic, AI performance, or revenue have been made by the Company.</li>
                  <li>I/We acknowledge our responsibility to provide all required materials, Credentials, and third-party access in a timely manner, and that failure to do so does not entitle us to a refund.</li>
                  <li>I/We acknowledge the mandatory pre-dispute notification requirement before initiating any chargeback or payment reversal, and the consequences of breach of this obligation.</li>
                  <li>I/We acknowledge that this Agreement is governed by the laws of the State of Texas and that disputes shall be resolved through binding arbitration.</li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
