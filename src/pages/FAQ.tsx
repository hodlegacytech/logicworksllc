import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, Search } from "lucide-react";

const faqCategories = [
  {
    title: "General",
    faqs: [
      {
        question: "What services does LogicWorks offer?",
        answer: "LogicWorks provides a comprehensive range of digital services including AI solutions, custom software development, mobile app development, web development, cloud services, DevOps, cybersecurity, digital marketing, SEO, and branding & design services.",
      },
      {
        question: "How do I get started with LogicWorks?",
        answer: "Getting started is easy! Simply fill out our quote request form or contact us directly. We'll schedule a free consultation to discuss your project requirements, timeline, and budget. Our team will then provide a detailed proposal tailored to your needs.",
      },
      {
        question: "What industries do you work with?",
        answer: "We work with clients across various industries including healthcare, finance, e-commerce, education, real estate, manufacturing, and startups. Our diverse experience allows us to bring cross-industry insights to every project.",
      },
    ],
  },
  {
    title: "AI Solutions",
    faqs: [
      {
        question: "What AI solutions do you offer?",
        answer: "Our AI solutions include machine learning model development, AI chatbots, natural language processing, predictive analytics, computer vision, recommendation systems, and intelligent automation. We tailor solutions to your specific business needs.",
      },
      {
        question: "Can you integrate AI into my existing systems?",
        answer: "Yes! We specialize in integrating AI capabilities into existing software systems. Our team ensures seamless integration with minimal disruption to your current operations while maximizing the benefits of AI technology.",
      },
    ],
  },
  {
    title: "Development",
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We use modern, industry-standard technologies including React, Node.js, Python, TypeScript, AWS, Azure, GCP, Docker, Kubernetes, and more. We select the best tech stack based on your project requirements and long-term goals.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the proposal phase.",
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Absolutely! We offer various support and maintenance packages including bug fixes, updates, feature additions, performance monitoring, and 24/7 technical support. We're committed to your long-term success.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    faqs: [
      {
        question: "How do you price your services?",
        answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The best model depends on your project scope and needs. We'll recommend the most suitable option during our consultation.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment terms. Typically, projects are structured with milestone-based payments (e.g., 30% upfront, 40% at midpoint, 30% upon completion). We can customize payment schedules for larger projects.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Find answers to common questions about our services, process, and pricing.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-teal"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found matching your search.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const id = `${category.title}-${faqIndex}`;
                      const isOpen = openItems.includes(id);

                      return (
                        <div
                          key={id}
                          className="bg-card rounded-xl border border-border overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(id)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className="font-semibold text-foreground pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-muted-foreground transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 text-muted-foreground">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
