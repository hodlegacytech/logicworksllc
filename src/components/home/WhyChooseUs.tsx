import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Clock, 
  HeadphonesIcon, 
  Rocket, 
  Shield 
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry veterans with 10+ years of experience in AI, software, and digital solutions.",
    stat: "100+",
    statLabel: "Experts",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successfully delivered 500+ projects across diverse industries worldwide.",
    stat: "500+",
    statLabel: "Projects",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% of projects delivered on schedule with agile methodology and clear milestones.",
    stat: "98%",
    statLabel: "On-Time",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all our solutions.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Tech",
    description: "We use the latest technologies and best practices to future-proof your solutions.",
    stat: "50+",
    statLabel: "Technologies",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security with compliance to international standards.",
    stat: "100%",
    statLabel: "Secure",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Trusted Technology Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine expertise, innovation, and dedication to deliver 
            exceptional results that exceed expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-secondary/50 hover:shadow-xl">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                {/* Icon & Stat */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      {reason.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {reason.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {reason.title}
                </h3>
                <p className="relative text-muted-foreground">
                  {reason.description}
                </p>

                {/* Bottom Decoration */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gradient"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
