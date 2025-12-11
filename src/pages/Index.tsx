import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AISection } from "@/components/home/AISection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <Testimonials />
      <AISection />
      <WhyChooseUs />
      <WorkflowTimeline />
      <Footer />
    </main>
  );
};

export default Index;
