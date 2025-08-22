"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";

type ContactDetail = {
  icon: React.ElementType;
  title: string;
  primary: string;
  secondary?: string;
  description: string;
  action: string;
  color: string;
};

const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "ciptaprojects@gmail.com",
    // secondary: "support@ciptacode.com",
    description: "Get a response within 2 hours",
    action: "Send Email",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+62 812-3456-7890",
    // secondary: "+1 (555) 987-6543",
    description: "Mon-Fri, 9AM-6PM PST",
    action: "Call Now",
    color: "from-green-500 to-green-600",
  },
  //   {
  //     icon: MessageSquare,
  //     title: "Live Chat",
  //     primary: "Available Now",
  //     secondary: "Average response: 5 min",
  //     description: "Chat with our team instantly",
  //     action: "Start Chat",
  //     color: "from-purple-500 to-purple-600",
  //   },
  //   {
  //     icon: Calendar,
  //     title: "Schedule Meeting",
  //     primary: "Free 30-min consultation",
  //     secondary: "Available this week",
  //     description: "Book a time that works for you",
  //     action: "Book Meeting",
  //     color: "from-orange-500 to-orange-600",
  //   },
];

const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("hello@ciptacode.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = async () => {
    await navigator.clipboard.writeText("+62 812-3456-7890");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section ref={ref} className="space-y-8 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center lg:text-left"
        >
          <h2 className="text-navy-900 mb-3 text-3xl font-bold">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-gray-600">
            Choose the method that works best for you. We&apos;re here to help!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="from-navy-50 border-navy-100 mb-8 rounded-xl border bg-gradient-to-r to-blue-50 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-navy-900 mb-2 font-bold">Office Hours</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                <div>Saturday - Sunday: Emergency support only</div>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-2 flex items-center space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-green-700">
                  Available Now
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Typical response: 2 hours
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                <CardContent className="px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`h-14 w-14 bg-gradient-to-br ${detail.color} flex flex-shrink-0 items-center justify-center rounded-xl shadow-lg`}
                      >
                        <detail.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-navy-900 mb-1 text-lg font-bold">
                          {detail.title}
                        </h3>
                        <div className="mb-1 flex items-center space-x-2">
                          <span className="text-navy-700 font-semibold">
                            {detail.primary}
                          </span>
                          {detail.title === "Email Us" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={copyEmail}
                              className="h-6 w-6 p-0 hover:bg-gray-100"
                            >
                              {copiedEmail ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <Copy className="h-3 w-3 text-gray-500" />
                              )}
                            </Button>
                          )}
                          {detail.title === "Call Us" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={copyPhone}
                              className="h-6 w-6 p-0 hover:bg-gray-100"
                            >
                              {copiedPhone ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <Copy className="h-3 w-3 text-gray-500" />
                              )}
                            </Button>
                          )}
                        </div>
                        {detail.secondary && (
                          <div className="mb-1 text-sm text-gray-600">
                            {detail.secondary}
                          </div>
                        )}
                        <div className="text-xs text-gray-500">
                          {detail.description}
                        </div>
                      </div>
                    </div>
                    <Button
                      className={`bg-gradient-to-r ${detail.color} font-semibold text-white transition-all duration-300 group-hover:scale-105 hover:shadow-lg`}
                    >
                      {detail.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactInfoSection;
