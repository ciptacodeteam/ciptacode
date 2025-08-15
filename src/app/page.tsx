import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceHighlightSection from "@/components/sections/ServiceHighlightSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const HomePage = () => {
  return (
    <main className="bg-[#F0F4FA]">
      <MainHeader />

      <HeroSection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>

      <ServiceHighlightSection />

      <ScrollToTop />
      <MainFooter />
    </main>
  );
};
export default HomePage;
