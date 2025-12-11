"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
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
              Privacy Policy
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
            <div className="space-y-10 text-muted-foreground">

              {/* INTRO */}
              <div>
                <p className="mb-4">
                  LogicWorks LLC (“we”, “our”, “us”) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, and safeguard your information
                  when you visit our website or use our services.
                </p>
              </div>

              {/* SECTION 1 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-3">We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email, phone number, company name</li>
                  <li>Project details submitted through contact forms</li>
                  <li>IP address, browser type, and device information</li>
                  <li>Cookies and website usage data</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to inquiries and communication</li>
                  <li>Provide web design, development, and related services</li>
                  <li>Improve website performance and user experience</li>
                  <li>Process payments safely and securely</li>
                  <li>Send updates or marketing messages (only with your consent)</li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Sharing of Information
                </h2>

                <p className="mb-3">We do not sell personal information.</p>
                <p className="mb-3">We may share information with:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processors</li>
                  <li>Hosting or cloud service providers</li>
                  <li>Subcontractors assisting with your project (with customer consent)</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Cookies
                </h2>
                <p>
                  Our website may use cookies to improve performance, analyze traffic, and
                  personalize your experience. You may disable cookies through your browser
                  settings, though some features may not function properly.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Data Protection
                </h2>
                <p>
                  We implement security measures such as SSL encryption, secure servers,
                  and restricted access to protect your data. However, no method of
                  internet transmission is 100% secure.
                </p>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="mb-3">You may request the following at any time:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to your personal data</li>
                  <li>Correction or deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Access to your website’s CMS (Content Management System) data if applicable</li>
                </ul>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Contact
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:<br />
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

export default Privacy;
