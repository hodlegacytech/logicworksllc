"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-primary-foreground/70">
              Last Updated: December 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12 text-muted-foreground">

              {/* INTRO */}
              <div>
                <p className="mb-4">
                  By accessing our website or purchasing any service from LogicWorks LLC (“we”, “our”, “us”), you agree to the following Terms & Conditions.  
                  These terms govern all services, projects, and interactions with our company.
                </p>
              </div>

              {/* SECTION 1 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Services
                </h2>
                <p className="mb-3">
                  LogicWorks LLC provides professional digital services including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web design & development</li>
                  <li>Branding and digital identity</li>
                  <li>Hosting & maintenance</li>
                  <li>Digital consulting</li>
                  <li>UI/UX services</li>
                </ul>
                <p className="mt-3">
                  The full project scope is always defined in the signed service agreement for each client engagement.
                </p>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Payments
                </h2>

                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Projects require an initial partial deposit to begin.</li>
                  <li>Remaining payments follow the milestone schedule outlined in the signed agreement.</li>
                  <li>Late payments may cause delays or suspension of work.</li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="mb-3">Clients are required to provide:</p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Accurate business and contact information</li>
                  <li>All necessary text, images, and content as per the project scope</li>
                  <li>Timely communication and feedback</li>
                </ul>

                <p>
                  Delays caused by the client will extend project timelines.  
                  LogicWorks LLC is not responsible for delays resulting from late feedback, missing content, or inactive communication.
                </p>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Revisions
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The signed agreement specifies the number of included revisions.</li>
                  <li>Any additional revisions or changes outside the signed scope are billed separately.</li>
                </ul>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All work remains the property of LogicWorks LLC until full payment is received.</li>
                  <li>
                    Upon full payment, ownership of deliverables transfers to the client, including source files if 
                    specified in the delivery agreement.
                  </li>
                  <li>
                    LogicWorks LLC may showcase completed work in its portfolio unless the client requests otherwise in writing.
                  </li>
                </ul>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Third-Party Tools
                </h2>
                <p className="mb-3">
                  We are not responsible for issues related to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Plugin or theme conflicts</li>
                  <li>Third-party platform outages or failures</li>
                  <li>Price changes of third-party services</li>
                </ul>

                <p>
                  Third-party tools or services are only installed upon the client’s request or authorization.
                </p>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not liable for loss of revenue, downtime, or damages outside our control.</li>
                  <li>Our maximum liability is limited to the total amount paid to LogicWorks LLC for the project.</li>
                </ul>
              </div>

              {/* SECTION 8 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Termination
                </h2>
                <p className="mb-3">
                  Either party may terminate the agreement with written notice.
                </p>
                <p>
                  Refunds, if applicable, follow our official Refund & Cancellation Policy (outlined below).
                </p>
              </div>

              {/* REFUND POLICY */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Refund & Cancellation Policy
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  1. Deposits
                </h3>
                <p className="mb-3">All deposits are non-refundable. They compensate for planning and scheduling.</p>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  2. Refunds Before Work Starts
                </h3>
                <p className="mb-3">
                  If canceled before work begins, a partial refund may be issued minus administrative costs.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  3. No Refunds After Work Begins
                </h3>
                <p className="mb-3">
                  Once design, development, or strategy work has started, no refunds can be issued.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  4. Project Cancellation by Client
                </h3>
                <p className="mb-3">
                  The client must pay for all work completed up to the cancellation date.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  5. Inactivity
                </h3>
                <p className="mb-3">
                  If the client is inactive for 30 days, the project may be paused or closed without refund.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  6. Subscriptions
                </h3>
                <p>
                  Hosting and maintenance subscriptions are non-refundable once the service period begins.
                </p>
              </div>

              {/* COOKIE POLICY */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Cookie Policy
                </h2>

                <p className="mb-3">
                  LogicWorks LLC uses cookies to enhance performance and user experience.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">1. What Are Cookies?</h3>
                <p className="mb-3">
                  Cookies are small text files stored on your device to remember preferences and improve site performance.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">2. Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>Essential cookies — required for functionality</li>
                  <li>Analytics cookies — used to understand usage</li>
                  <li>Functionality cookies — remember preferences</li>
                  <li>Marketing cookies — used only with consent</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">3. Managing Cookies</h3>
                <p>
                  You may disable cookies in your browser settings; however, some features may not function properly.
                </p>
              </div>

              {/* DISCLAIMER */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Website Disclaimer
                </h2>
                <p className="mb-3">
                  All information on this website is provided for general purposes only.
                  LogicWorks LLC is not responsible for:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Errors or omissions</li>
                  <li>Website downtime or maintenance</li>
                  <li>Third-party content</li>
                  <li>Losses resulting from reliance on website information</li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  12. Contact Us
                </h2>
                <p>
                  For legal questions or concerns, contact us at:<br />
                  <strong>Email:</strong> <a href="mailto:info@logicworksllc.com">info@logicworksllc.com</a>  <br />
                  <strong>Website:</strong> <a href="https://logicworksllc.com">logicworksllc.com</a> <br />
                  <strong>Phone:</strong> <a href="tel:+13109575211">(310) 957-5211</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
