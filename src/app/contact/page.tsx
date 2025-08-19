import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHeroSection";
// import  ContactForm  from "@/components/contact/contact-form";
// import ContactInfo from "@/components/contact/ContactInfoSection";
// import ContactMap  from "@/components/contact/contact-map";
import MainHeader from "@/components/headers/MainHeader";
import MainFooter from "@/components/footers/MainFooter";
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
      <ContactHero />
      {/* <ContactForm /> */}
      <div className="flex flex-col">
        {/* <ContactInfo /> */}
        {/* <ContactMap /> */}
      </div>

      <MainFooter />
      <ScrollToTop />
    </main>
  );
};
export default ContactPage;
