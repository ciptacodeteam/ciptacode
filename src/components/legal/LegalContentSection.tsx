"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface LegalContentProps {
  type: "privacy" | "terms";
}

const LegalContentSection = ({ type }: LegalContentProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const privacyContent = {
    sections: [
      {
        title: "Information We Collect",
        content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.`,
      },
      {
        title: "How We Use Your Information",
        content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.`,
      },
      {
        title: "Information Sharing",
        content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.`,
      },
      {
        title: "Data Security",
        content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
      },
      {
        title: "Your Rights",
        content: `You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.`,
      },
      {
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us at privacy@ciptacode.com or by mail at 123 Tech Street, San Francisco, CA 94105.`,
      },
    ],
  };

  const termsContent = {
    sections: [
      {
        title: "Acceptance of Terms",
        content: `By accessing and using Ciptacode's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      },
      {
        title: "Use License",
        content: `Permission is granted to temporarily download one copy of the materials on Ciptacode's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.`,
      },
      {
        title: "Service Description",
        content: `Ciptacode provides web development, ERP solutions, and mobile application development services. We reserve the right to modify or discontinue any service at any time without notice.`,
      },
      {
        title: "User Responsibilities",
        content: `You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
      },
      {
        title: "Payment Terms",
        content: `Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise specified in writing. Late payments may result in service suspension.`,
      },
      {
        title: "Limitation of Liability",
        content: `In no event shall Ciptacode be liable for any damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages.`,
      },
      {
        title: "Governing Law",
        content: `These terms and conditions are governed by and construed in accordance with the laws of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that state.`,
      },
    ],
  };

  const content = type === "privacy" ? privacyContent : termsContent;

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default LegalContentSection;
