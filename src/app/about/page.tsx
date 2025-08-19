import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHeroSection";
import MissionValues from "@/components/about/MissionValueSection";
import TeamGrid from "@/components/about/TeamGridSection";
import AboutCTA from "@/components/about/AboutCTASection";
import MainFooter from "@/components/footers/MainFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import MainHeader from "@/components/headers/MainHeader";

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
      <AboutHero />
      <MissionValues />
      <TeamGrid />
      <AboutCTA />
      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default AboutPage;
