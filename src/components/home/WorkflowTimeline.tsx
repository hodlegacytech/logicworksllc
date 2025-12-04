import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements through in-depth consultations.",
    color: "bg-secondary",
  },
  {
    icon: Search,
    title: "Research & Analysis",
    description: "Our team conducts thorough market research and technical analysis to identify the best solutions.",
    color: "bg-teal",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "We create a comprehensive roadmap with clear milestones, timelines, and deliverables.",
    color: "bg-secondary",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our expert developers build your solution using agile methodologies and best practices.",
    color: "bg-teal",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally.",
    color: "bg-secondary",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and 24/7 support.",
    color: "bg-teal",
  },
];

export const WorkflowTimeline = () => {
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
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:flex ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <div className="group bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-secondary items-center justify-center z-10">
                  <span className="text-secondary font-bold">{index + 1}</span>
                </div>

                {/* Empty Space for other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
