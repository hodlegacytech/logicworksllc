import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Brain;
  benefits: string[];
  features: { title: string; description: string }[];
  tools: string[];
  gradient: string;
}> = {
  "ai-solutions": {
    title: "AI Solutions",
    subtitle: "Transform Your Business with Artificial Intelligence",
    description: "Harness the power of AI to automate processes, gain insights, and create intelligent systems that drive growth.",
    icon: Brain,
    benefits: [
      "Automate repetitive tasks and save time",
      "Make data-driven decisions with predictive analytics",
      "Enhance customer experience with intelligent chatbots",
      "Gain competitive advantage with custom AI models",
    ],
    features: [
      { title: "Machine Learning", description: "Custom ML models trained on your data for accurate predictions and insights" },
      { title: "Natural Language Processing", description: "Text analysis, sentiment detection, and language understanding capabilities" },
      { title: "Computer Vision", description: "Image and video analysis for object detection, recognition, and classification" },
      { title: "Predictive Analytics", description: "Forecast trends and behaviors to make proactive business decisions" },
    ],
    tools: ["TensorFlow", "PyTorch", "OpenAI", "Azure AI", "AWS SageMaker", "Hugging Face"],
    gradient: "from-secondary to-teal",
  },
  "software-development": {
    title: "Software Development",
    subtitle: "Custom Software Built for Your Business",
    description: "From web applications to enterprise systems, we build scalable software solutions that solve real business problems.",
    icon: Code2,
    benefits: [
      "Custom solutions tailored to your workflows",
      "Scalable architecture for future growth",
      "Modern tech stack for optimal performance",
      "Ongoing support and maintenance",
    ],
    features: [
      { title: "Web Applications", description: "Responsive, fast, and secure web applications using modern frameworks" },
      { title: "Enterprise Software", description: "Robust systems for large-scale operations and complex workflows" },
      { title: "API Development", description: "RESTful and GraphQL APIs for seamless integrations" },
      { title: "Database Design", description: "Optimized database architecture for performance and scalability" },
    ],
    tools: ["React", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB"],
    gradient: "from-teal to-emerald-500",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Data-Driven Marketing That Delivers Results",
    description: "Strategic digital marketing campaigns that increase visibility, engage audiences, and drive conversions.",
    icon: Megaphone,
    benefits: [
      "Increase brand awareness and reach",
      "Generate qualified leads consistently",
      "Improve conversion rates",
      "Measurable ROI on marketing spend",
    ],
    features: [
      { title: "SEO & Content", description: "Organic growth through search optimization and valuable content" },
      { title: "PPC Advertising", description: "Targeted paid campaigns on Google, Facebook, and LinkedIn" },
      { title: "Social Media", description: "Engaging social presence and community management" },
      { title: "Analytics & Reporting", description: "Comprehensive tracking and performance insights" },
    ],
    tools: ["Google Ads", "Meta Business", "SEMrush", "HubSpot", "Mailchimp", "Google Analytics"],
    gradient: "from-orange-500 to-amber-500",
  },
  "cloud-services": {
    title: "Cloud Services",
    subtitle: "Scalable Cloud Infrastructure for Modern Business",
    description: "Design, deploy, and manage cloud infrastructure that scales with your business needs.",
    icon: Cloud,
    benefits: [
      "Reduce infrastructure costs",
      "Scale instantly based on demand",
      "Improve reliability and uptime",
      "Enhanced security and compliance",
    ],
    features: [
      { title: "Cloud Migration", description: "Seamless migration of existing systems to cloud platforms" },
      { title: "Architecture Design", description: "Scalable, resilient cloud architecture planning" },
      { title: "Managed Services", description: "Ongoing monitoring, optimization, and management" },
      { title: "Cost Optimization", description: "Strategies to minimize cloud spending without sacrificing performance" },
    ],
    tools: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
    gradient: "from-purple-500 to-secondary",
  },
  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protect Your Digital Assets",
    description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
    icon: Shield,
    benefits: [
      "Protect sensitive data from breaches",
      "Meet compliance requirements",
      "24/7 threat monitoring",
      "Rapid incident response",
    ],
    features: [
      { title: "Security Audits", description: "Comprehensive assessment of your security posture" },
      { title: "Penetration Testing", description: "Identify vulnerabilities before hackers do" },
      { title: "Security Training", description: "Educate your team on security best practices" },
      { title: "Incident Response", description: "Rapid response and recovery from security incidents" },
    ],
    tools: ["Splunk", "CrowdStrike", "Qualys", "Nessus", "Burp Suite", "OWASP"],
    gradient: "from-red-500 to-rose-500",
  },
  "branding-design": {
    title: "Branding & Design",
    subtitle: "Create a Memorable Brand Identity",
    description: "Strategic branding and creative design that helps your business stand out and connect with audiences.",
    icon: Palette,
    benefits: [
      "Distinctive brand identity",
      "Consistent visual communication",
      "Increased brand recognition",
      "Professional, polished image",
    ],
    features: [
      { title: "Logo Design", description: "Unique, memorable logos that capture your brand essence" },
      { title: "Brand Guidelines", description: "Comprehensive style guides for consistent branding" },
      { title: "UI/UX Design", description: "User-centered design for digital products" },
      { title: "Marketing Collateral", description: "Brochures, presentations, and marketing materials" },
    ],
    tools: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
    gradient: "from-pink-500 to-rose-500",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 bg-hero-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">Service Not Found</h1>
            <Link to="/services" className="text-teal mt-4 inline-block">
              View All Services
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

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
            className="max-w-4xl mx-auto"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 mx-auto md:mx-0`}>
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-center md:text-left">
              {service.title}
            </h1>
            <p className="text-xl text-teal font-medium mb-4 text-center md:text-left">
              {service.subtitle}
            </p>
            <p className="text-lg text-primary-foreground/70 mb-8 text-center md:text-left">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/quote">
                <Button variant="hero" size="lg">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 transition-all hover-lift"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Technologies We Use
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-6 py-3 rounded-full bg-muted text-foreground font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Let's discuss how our {service.title.toLowerCase()} can help your business grow.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-gradient text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
