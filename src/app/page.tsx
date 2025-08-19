import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import AnimatedStatSection from "@/components/sections/AnimatedStatSection";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import CTASection from "@/components/sections/CTASection";
import FeaturedCaseStudySection from "@/components/sections/FeaturedCaseStudySection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioHighlightSection from "@/components/sections/PortfolioHighlightSection";
import ServiceHighlightSection from "@/components/sections/ServiceHighlightSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const HomePage = () => {
  return (
    <main>
      <MainHeader />

      <HeroSection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>

      <ServiceHighlightSection />
      <WorkflowSection />
      <PortfolioHighlightSection />
      <AnimatedStatSection />
      <FeaturedCaseStudySection />
      <TestimonialSection />
      <CTASection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>

      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default HomePage;
