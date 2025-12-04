import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

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
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using LogicWorks services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p>LogicWorks provides AI solutions, software development, digital marketing, and related technology services. The specific scope, timeline, and deliverables for each project will be outlined in a separate agreement or proposal.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
              <p>Payment terms are specified in individual project agreements. Generally, projects require a deposit upfront, with remaining payments tied to milestones or project completion.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership of deliverables as specified in the project agreement. LogicWorks retains ownership of pre-existing tools, frameworks, and methodologies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
              <p>Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This obligation survives termination of the agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>LogicWorks liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
              <p>For questions about these terms, contact us at legal@logicworks.com.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
