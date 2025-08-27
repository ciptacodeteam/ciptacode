import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import LegalContentSection from "@/components/legal/LegalContentSection";
import LegalHeroSection from "@/components/legal/LegalHeroSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ciptacode",
  description: "Learn about our privacy policy and how we handle your data.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <MainHeader />

      <main className="min-h-screen">
        <LegalHeroSection
          title="Privacy Policy"
          lastUpdated="December 15, 2023"
        />
        <LegalContentSection type="privacy" />
      </main>
      <MainFooter />
      <ScrollToTop />
    </main>
  );
}
