import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHeroSection";
import PortfolioGallery from "@/components/portfolio/PortfolioGallerySection";
import PortfolioStats from "@/components/portfolio/PortfolioStatSection";
import PortfolioCTA from "@/components/portfolio/PortfolioCTASection";
import MainHeader from "@/components/headers/MainHeader";
import MainFooter from "@/components/footers/MainFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const metadata: Metadata = {
  title: "Portfolio - Ciptacode | Our Latest Projects & Case Studies",
  description:
    "Explore our portfolio of successful web development, ERP, and mobile app projects. See how we've helped businesses transform digitally.",
  openGraph: {
    title: "Portfolio - Ciptacode | Our Latest Projects & Case Studies",
    description:
      "Explore our portfolio of successful web development, ERP, and mobile app projects. See how we've helped businesses transform digitally.",
  },
};

const PortfolioPage = () => {
  return (
    <main>
      <MainHeader />

      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioStats />
      <PortfolioCTA />

      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default PortfolioPage;
