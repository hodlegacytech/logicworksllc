import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Brain,
  Bot,
  LineChart,
  Zap,
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
  GitBranch,
  Shield,
  Headphones,
  Palette,
  PenTool,
  Search,
  TrendingUp,
  Megaphone,
  Share2,
  Target,
  ArrowRight,
} from "lucide-react";

const serviceCategories = [
  {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business",
    services: [
      { icon: Brain, name: "AI Solutions", href: "/services/ai-solutions" },
      { icon: Bot, name: "AI Chatbots", href: "/services/ai-chatbots" },
      { icon: LineChart, name: "Predictive Analytics", href: "/services/predictive-analytics" },
      { icon: Zap, name: "AI Automations", href: "/services/ai-automations" },
    ],
    gradient: "from-secondary to-teal",
  },
  {
    title: "Software Development",
    description: "Custom software solutions built with cutting-edge technologies",
    services: [
      { icon: Code2, name: "SaaS Development", href: "/services/saas-development" },
      { icon: Smartphone, name: "Mobile Apps", href: "/services/mobile-apps" },
      { icon: Globe, name: "Web Development", href: "/services/web-development" },
      { icon: ShoppingCart, name: "E-commerce", href: "/services/ecommerce" },
    ],
    gradient: "from-teal to-emerald-500",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure and streamlined development workflows",
    services: [
      { icon: Cloud, name: "Cloud Services", href: "/services/cloud-services" },
      { icon: GitBranch, name: "DevOps CI/CD", href: "/services/devops" },
      { icon: Shield, name: "Cybersecurity", href: "/services/cybersecurity" },
      { icon: Headphones, name: "IT Support", href: "/services/it-support" },
    ],
    gradient: "from-purple-500 to-secondary",
  },
  {
    title: "Branding & Marketing",
    description: "Build your brand and reach your audience effectively",
    services: [
      { icon: Palette, name: "Branding & Logo", href: "/services/branding-design" },
      { icon: PenTool, name: "Graphic Design", href: "/services/graphic-design" },
      { icon: Search, name: "SEO", href: "/services/seo" },
      { icon: TrendingUp, name: "Technical SEO", href: "/services/technical-seo" },
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that deliver results",
    services: [
      { icon: Megaphone, name: "Digital Marketing", href: "/services/digital-marketing" },
      { icon: Share2, name: "Social Media", href: "/services/smm" },
      { icon: Target, name: "PPC Advertising", href: "/services/ppc" },
    ],
    gradient: "from-orange-500 to-amber-500",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Digital <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              From AI innovation to digital marketing, we offer end-to-end services 
              to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                {/* Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link to={service.href} className="group block">
                        <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover-lift">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <service.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-secondary">
                            Learn more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let our experts analyze your requirements and recommend the perfect 
              solution for your business.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-gradient text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
