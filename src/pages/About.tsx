import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Trophy, 
  Globe,
  Linkedin,
  Twitter
} from "lucide-react";

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "AI Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Years Experience" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Pioneering the Future of <span className="gradient-text">Digital Innovation</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              We're a team of passionate technologists, creative thinkers, and strategic minds 
              dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be the global leader in AI-powered digital transformation, setting new standards for innovation and excellence in technology services.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Innovation, integrity, collaboration, and client success are at the core of everything we do. We believe in building lasting partnerships.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Startup to Industry Leader
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, LogicWorks began with a simple mission: to make 
                  cutting-edge technology accessible to businesses of all sizes. What 
                  started as a small team of passionate developers has grown into a 
                  full-service digital solutions company.
                </p>
                <p>
                  Today, we serve over 150 clients across 20+ countries, delivering 
                  AI-powered solutions, custom software, and digital marketing strategies 
                  that drive real business results.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic 
                  partnerships, and an unwavering commitment to client success. We've 
                  evolved with the industry, always staying ahead of technological trends.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, title: "Client-Centric", desc: "Your success is our priority" },
                { icon: Trophy, title: "Award-Winning", desc: "Recognized industry excellence" },
                { icon: Globe, title: "Global Reach", desc: "Serving clients worldwide" },
                { icon: Heart, title: "Passionate Team", desc: "Dedicated to innovation" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-muted border border-border text-center"
                >
                  <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
};

export default About;
