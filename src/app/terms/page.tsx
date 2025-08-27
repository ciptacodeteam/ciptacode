import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import LegalContentSection from "@/components/legal/LegalContentSection";
import LegalHeroSection from "@/components/legal/LegalHeroSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Ciptacode",
  description: "Learn about our terms of service and user agreements.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main>
      <MainHeader />
      <main className="min-h-screen">
        <LegalHeroSection
          title="Terms of Service"
          lastUpdated="December 15, 2023"
        />
        <LegalContentSection type="terms" />
      </main>

      <MainFooter />
      <ScrollToTop />
    </main>
  );
}
