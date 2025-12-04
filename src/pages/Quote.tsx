import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";

const services = [
  "AI Solutions",
  "Machine Learning",
  "AI Chatbots",
  "Software Development",
  "Mobile Apps",
  "Web Development",
  "E-commerce",
  "Cloud Services",
  "DevOps",
  "Cybersecurity",
  "Digital Marketing",
  "SEO",
  "Branding & Design",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const timelines = [
  "ASAP (Rush)",
  "1-2 Months",
  "3-4 Months",
  "5-6 Months",
  "Flexible",
];

const Quote = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours with a detailed proposal.",
    });

    setFormData({
      services: [],
      budget: "",
      timeline: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      description: "",
    });
    setStep(1);
    setIsSubmitting(false);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.budget && formData.timeline;
      case 3:
        return formData.name && formData.email && formData.description;
      default:
        return false;
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
              Get a Quote
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Start Your <span className="gradient-text">Project</span> Today
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Tell us about your project and get a detailed quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                <span
                  className={`hidden sm:block font-medium ${
                    step >= s ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s === 1 ? "Services" : s === 2 ? "Details" : "Contact"}
                </span>
                {s < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step > s ? "bg-secondary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border"
          >
            {/* Step 1: Services */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  What services do you need?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Select all that apply. We'll tailor our proposal accordingly.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        formData.services.includes(service)
                          ? "border-secondary bg-secondary/10 text-foreground"
                          : "border-border hover:border-secondary/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.services.includes(service)
                              ? "border-secondary bg-secondary"
                              : "border-border"
                          }`}
                        >
                          {formData.services.includes(service) && (
                            <CheckCircle className="w-3 h-3 text-secondary-foreground" />
                          )}
                        </div>
                        <span className="font-medium">{service}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Project Details
                </h2>
                <p className="text-muted-foreground mb-8">
                  Help us understand your budget and timeline expectations.
                </p>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Estimated Budget *
                    </label>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.budget === budget
                              ? "border-secondary bg-secondary/10 text-foreground"
                              : "border-border hover:border-secondary/50 text-muted-foreground"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Project Timeline *
                    </label>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.timeline === timeline
                              ? "border-secondary bg-secondary/10 text-foreground"
                              : "border-border hover:border-secondary/50 text-muted-foreground"
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us how to reach you with your custom quote.
                </p>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground resize-none"
                      placeholder="Describe your project goals, requirements, and any specific features you need..."
                    />
                  </div>
                </div>
              </form>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t border-border">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  variant="gradient"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="gradient"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Quote Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Quote;
