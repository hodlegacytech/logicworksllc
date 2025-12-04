import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Brain, 
  LineChart, 
  Zap, 
  MessageSquare,
  Database,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that enhance customer experience 24/7",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models trained on your data for smarter decisions",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven business decisions",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate repetitive tasks and boost operational efficiency",
  },
  {
    icon: MessageSquare,
    title: "NLP Solutions",
    description: "Natural language processing for text analysis and sentiment",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Transform raw data into actionable business insights",
  },
];

export const AISection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-secondary/10 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: "-30%", right: "-20%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-teal/10 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ bottom: "-20%", left: "-10%" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
              AI Innovation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Harness the Power of{" "}
              <span className="gradient-text">Artificial Intelligence</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Our AI solutions transform businesses by automating processes, 
              extracting insights from data, and creating intelligent systems 
              that learn and adapt to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/ai-solutions">
                <Button variant="hero" size="lg" className="group">
                  Explore AI Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="heroOutline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:border-teal/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-gradient flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-primary-foreground font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
