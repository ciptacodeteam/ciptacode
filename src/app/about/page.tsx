import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionValueSection from "@/components/about/MissionValueSection";
import TeamGridSection from "@/components/about/TeamGridSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import MainFooter from "@/components/footers/MainFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import MainHeader from "@/components/headers/MainHeader";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import AnimatedStatSection from "@/components/sections/AnimatedStatSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import FeaturedCaseStudySection from "@/components/sections/FeaturedCaseStudySection";
import TestimonialSection from "@/components/sections/TestimonialSection";

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
      <TeamGridSection />

      <AnimatedStatSection />
      <FeaturedCaseStudySection />
      <TestimonialSection />
      <ContactInfoSection />

      <AboutCTASection />
      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>
      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default AboutPage;
