import AboutCTASection from "@/components/about/AboutCTASection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionValueSection from "@/components/about/MissionValueSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import AnimatedStatSection from "@/components/sections/AnimatedStatSection";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import FeaturedCaseStudySection from "@/components/sections/FeaturedCaseStudySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ciptacode | Our Mission, Team & Values",
  description:
    "Learn about Ciptacode's mission to craft reliable digital solutions. Meet our team, discover our values, and see our journey in transforming businesses digitally.",
  openGraph: {
    title: "About Us - Ciptacode | Our Mission, Team & Values",
    description:
      "Learn about Ciptacode's mission to craft reliable digital solutions. Meet our team, discover our values, and see our journey in transforming businesses digitally.",
  },
};

const AboutPage = () => {
  return (
    <main>
      <MainHeader />
      <AboutHeroSection />
      <MissionValueSection />
      {/* <TeamGridSection /> */}

      <FeaturedCaseStudySection />
      <AnimatedStatSection />
      <ContactInfoSection />
      <TestimonialSection />

      <AboutCTASection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>
      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default AboutPage;
