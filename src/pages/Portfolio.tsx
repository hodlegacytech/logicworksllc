import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "AI", "Software", "Marketing", "Cloud", "Design"];

const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Service",
    category: "AI",
    client: "TechCorp Inc",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    description: "Intelligent chatbot reducing response time by 80%",
    tags: ["NLP", "Machine Learning", "Automation"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Software",
    client: "RetailMax",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Custom marketplace with 100K+ daily users",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Design",
    client: "StartupX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete brand overhaul and visual identity",
    tags: ["Branding", "UI/UX", "Logo"],
  },
  {
    id: 4,
    title: "Cloud Migration",
    category: "Cloud",
    client: "FinanceHub",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description: "Seamless migration to AWS with 40% cost reduction",
    tags: ["AWS", "DevOps", "Security"],
  },
  {
    id: 5,
    title: "SEO Campaign",
    category: "Marketing",
    client: "HealthPlus",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "300% increase in organic traffic",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "Software",
    client: "SecureBank",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    description: "Secure mobile banking with biometric auth",
    tags: ["React Native", "Security", "FinTech"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Projects That <span className="gradient-text">Inspire</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Explore our portfolio of successful projects across various industries 
              and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 hover-lift">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="flex items-center gap-2 text-primary-foreground font-medium">
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.client}
                      </p>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
              Want to See Your Project Here?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-gradient text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
