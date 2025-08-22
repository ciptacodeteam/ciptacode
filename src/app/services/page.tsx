import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import CTASection from "@/components/sections/CTASection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ServiceHeroSection from "@/components/services/ServiceHeroSection";
import ServiceTabSection from "@/components/services/ServiceTabSection";
import ServiceTechStackSection from "@/components/services/ServiceTechStackSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const ServicePage = () => {
  return (
    <main>
      <MainHeader />

      <ServiceHeroSection />
      <ServiceTabSection />
      <WorkflowSection />
      <ServiceTechStackSection />

      <CTASection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>

      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default ServicePage;
