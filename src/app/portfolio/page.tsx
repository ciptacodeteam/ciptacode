import type { Metadata } from "next";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import PortfolioGallerySection from "@/components/portfolio/PortfolioGallerySection";
import PortfolioStatSection from "@/components/portfolio/PortfolioStatSection";
import PortfolioCTASection from "@/components/portfolio/PortfolioCTASection";
import MainHeader from "@/components/headers/MainHeader";
import MainFooter from "@/components/footers/MainFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import Head from "next/head";

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
    <>
      <Head>
        <link
          rel="preload"
          href={"/images/portfolio/mutualproperty.webp"}
          as="image"
        />
        <link rel="preload" href={"/images/portfolio/yanks.webp"} as="image" />
        <link rel="preload" href={"/images/portfolio/7a.webp"} as="image" />
        <link rel="preload" href={"/images/portfolio/ansama.webp"} as="image" />
        <link
          rel="preload"
          href={"/images/portfolio/skyview.webp"}
          as="image"
        />
        <link
          rel="preload"
          href={"/images/portfolio/sugarbaby.webp"}
          as="image"
        />
        <link rel="preload" href={"/images/portfolio/velure.webp"} as="image" />
        <link rel="preload" href={"/images/portfolio/xfl123.webp"} as="image" />
      </Head>

      <main>
        <MainHeader />

        <PortfolioHeroSection />
        <PortfolioGallerySection />
        <PortfolioStatSection />
        <PortfolioCTASection />
        <ClientMarqueeSection />
        <div className="separator-angular h-4 w-full"></div>

        <MainFooter />
        <ScrollToTop />
      </main>
    </>
  );
};
export default PortfolioPage;
