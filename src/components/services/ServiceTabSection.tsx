"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Database,
  Globe,
  Smartphone,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

type Service = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  pain: string;
  solution: string;
  deliverables: string[];
  stack: string[];
  timeline: string;
  startingPrice: string;
};

export const services: Record<string, Service> = {
  website: {
    icon: Globe,
    title: "Website Development",
    subtitle: "Modern, fast, and SEO-optimized websites",
    pain: "Slow, outdated websites that don't convert visitors into customers",
    solution:
      "Lightning-fast, modern websites built with Next.js that achieve 95+ Lighthouse scores and drive conversions",
    deliverables: [
      "Responsive web design",
      "SEO optimization",
      "Performance optimization",
      "Content management system",
      "Analytics integration",
      "Security implementation",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Sanity CMS",
    ],
    timeline: "4-8 weeks",
    startingPrice: "Rp 4.499.000",
  },
  erp: {
    icon: Database,
    title: "ERP Development",
    subtitle: "Custom enterprise resource planning solutions",
    pain: "Disconnected systems and manual processes that slow down business operations",
    solution:
      "Integrated ERP systems that automate workflows, provide real-time insights, and scale with your business",
    deliverables: [
      "Custom module development",
      "Role-based access control",
      "Real-time reporting",
      "API integrations",
      "Data migration",
      "Training and support",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "Docker", "AWS"],
    timeline: "12-24 weeks",
    startingPrice: "Rp 12.499.000",
  },
  apps: {
    icon: Smartphone,
    title: "Apps & Web Development",
    subtitle: "Cross-platform mobile and web applications",
    pain: "Poor user experience and slow performance across different devices and platforms",
    solution:
      "Native-quality apps that work seamlessly across all platforms with exceptional user experience",
    deliverables: [
      "Cross-platform development",
      "Native performance",
      "Offline functionality",
      "Push notifications",
      "App store deployment",
      "Maintenance and updates",
    ],
    stack: [
      "React Native",
      "Flutter",
      "PWA",
      "Firebase",
      "GraphQL",
      "TypeScript",
    ],
    timeline: "8-16 weeks",
    startingPrice: "Rp 5.899.000",
  },
};

const ServiceTabSection = () => {
  const [activeTab, setActiveTab] = useState("website");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What We Offer</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Comprehensive digital solutions tailored to your business needs and
            growth objectives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-12 grid h-12 w-full grid-cols-3">
              {Object.entries(services).map(([key, service]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center space-x-2"
                >
                  <service.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Problem & Solution */}
                  <Card className="glass h-fit border-0">
                    <CardHeader>
                      <div className="mb-4 flex items-center space-x-3">
                        <div className="from-primary/20 to-accent/20 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br">
                          <service.icon className="text-primary h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-destructive mb-2 font-semibold">
                          The Problem
                        </h4>
                        <p className="text-muted-foreground">{service.pain}</p>
                      </div>
                      <div>
                        <h4 className="text-primary mb-2 font-semibold">
                          Our Solution
                        </h4>
                        <p className="text-muted-foreground">
                          {service.solution}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-muted-foreground flex items-center space-x-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{service.timeline}</span>
                          </div>
                          <div className="text-muted-foreground text-sm">
                            Starting at{" "}
                            <span className="text-primary font-semibold">
                              {service.startingPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Deliverables & Tech Stack */}
                  <div className="space-y-6">
                    <Card className="glass border-0">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CheckCircle className="text-primary h-5 w-5" />
                          <span>What You Get</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, index) => (
                            <motion.li
                              key={deliverable}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <div className="bg-primary h-2 w-2 rounded-full" />
                              <span className="text-sm">{deliverable}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass border-0">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Users className="text-primary h-5 w-5" />
                          <span>Technology Stack</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {service.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="glow-primary group w-full"
                      >
                        <Link href="/contact">
                          Get Started with {service.title}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
export default ServiceTabSection;
