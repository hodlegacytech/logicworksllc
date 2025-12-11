import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Globe,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@logicworksllc.com",
    subtext: "We'll respond within 24 hours",
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Have a project in mind? We'd love to hear about it. Get in touch and 
              let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-muted border border-border text-center hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground"
                      >
                        <option value="">Select a subject</option>
                        <option value="ai">AI Solutions</option>
                        <option value="software">Software Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-foreground resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="h-80 rounded-2xl overflow-hidden border border-border bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255897.39646567114!2d-77.6802338!3d37.5407246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b113ef29a5fb8f%3A0xdea9e52a5f9756c5!2sVirginia!5e0!3m2!1sen!2sus!4v100000000001!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LogicWorks Location"
              />
              </div>

              {/* Quick Links */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, title: "Live Chat", desc: "Chat with us now" },
                  { icon: Headphones, title: "Support", desc: "24/7 assistance" },
                  { icon: Globe, title: "Global", desc: "Worldwide service" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-card border border-border text-center hover:border-secondary/50 transition-colors cursor-pointer"
                  >
                    <item.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Teaser */}
              <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                <h3 className="text-lg font-bold mb-2">Have Questions?</h3>
                <p className="text-primary-foreground/70 mb-4">
                  Check out our FAQ section for quick answers to common questions.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-teal font-medium hover:gap-3 transition-all"
                >
                  View FAQ
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
