import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import type { Metadata } from "next";
import MainFooter from "@/components/footers/MainFooter";
import MainHeader from "@/components/headers/MainHeader";
import ClientMarqueeSection from "@/components/sections/ClientMarqueeSection";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const metadata: Metadata = {
  title: "Contact Us - Ciptacode | Get in Touch for Your Next Project",
  description:
    "Ready to start your project? Contact Ciptacode for a free consultation. We're here to help transform your business with reliable digital solutions.",
  openGraph: {
    title: "Contact Us - Ciptacode | Get in Touch for Your Next Project",
    description:
      "Ready to start your project? Contact Ciptacode for a free consultation. We're here to help transform your business with reliable digital solutions.",
  },
};

const ContactPage = () => {
  return (
    <main>
      <MainHeader />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />

      <ClientMarqueeSection />
      <div className="separator-angular h-4 w-full"></div>

      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default ContactPage;
