import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import LegalContentSection from "@/components/legal/LegalContentSection";
import LegalHeroSection from "@/components/legal/LegalHeroSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

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
