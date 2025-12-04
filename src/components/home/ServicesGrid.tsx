import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Code2,
  Megaphone,
  Cloud,
  Shield,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Machine learning, chatbots, predictive analytics, and intelligent automation powered by cutting-edge AI.",
    href: "/services/ai-solutions",
    gradient: "from-secondary to-teal",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web apps, mobile applications, SaaS platforms, and enterprise software solutions.",
    href: "/services/software-development",
    gradient: "from-teal to-secondary",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, PPC, social media marketing, and data-driven campaigns that deliver results.",
    href: "/services/digital-marketing",
    gradient: "from-secondary to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS, Azure, GCP infrastructure, DevOps, CI/CD pipelines, and scalable cloud architecture.",
    href: "/services/cloud-services",
    gradient: "from-purple-500 to-secondary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise security, penetration testing, compliance audits, and 24/7 threat monitoring.",
    href: "/services/cybersecurity",
    gradient: "from-teal to-emerald-500",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Logo design, brand identity, UI/UX design, and creative graphics that stand out.",
    href: "/services/branding-design",
    gradient: "from-pink-500 to-secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From AI innovation to robust software development, we deliver end-to-end 
            technology solutions that drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href}>
                <div className="relative h-full bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover-lift overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="relative flex items-center gap-2 text-secondary font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
