"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Database,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "Convert Visitors into Customers",
    description:
      "High-converting websites that drive 3x more leads with lightning-fast performance",
    features: [
      "Next.js & React",
      "SEO Optimized",
      "Lighthouse 95+",
      "CMS Integration",
    ],
    results: {
      metric: "Average ROI Increase",
      value: "285%",
      timeline: "2-4 weeks",
      clients: "50+ businesses",
    },
    cta: "Get Website Quote",
    testimonial: "Our new website generated 40% more leads in the first month",
    clientName: "Sarah Chen, CEO TechStart",
    startingPrice: "Starting at $2,999",
  },
  {
    icon: Database,
    title: "ERP Development",
    subtitle: "Streamline Your Operations",
    description:
      "Custom ERP systems that reduce operational costs by 40% and boost productivity",
    features: [
      "Custom Modules",
      "Role-based Access",
      "API Integrations",
      "Real-time Analytics",
    ],
    results: {
      metric: "Cost Reduction",
      value: "40%",
      timeline: "6-12 weeks",
      clients: "25+ enterprises",
    },
    cta: "Schedule ERP Demo",
    testimonial: "Cut our processing time in half and eliminated manual errors",
    clientName: "Mike Rodriguez, Operations Director",
    startingPrice: "Starting at $15,000",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    subtitle: "Engage Users Everywhere",
    description:
      "Cross-platform apps with 4.8+ star ratings that users love and use daily",
    features: [
      "Cross-platform",
      "PWA Support",
      "Performance First",
      "Native Experience",
    ],
    results: {
      metric: "User Retention",
      value: "92%",
      timeline: "4-8 weeks",
      clients: "35+ apps launched",
    },
    cta: "Start App Project",
    testimonial: "Our app hit 10k downloads in the first week with 4.9 stars",
    clientName: "Lisa Park, Product Manager",
    startingPrice: "Starting at $8,500",
  },
];

const ServiceHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="mr-2 h-4 w-4" />
            Proven Results for 100+ Clients
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Solutions That Drive{" "}
            <span className="text-primary">Real Growth</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Don&apos;t just build software—build competitive advantages. Our
            solutions deliver measurable results that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <div
                className={cn(
                  "group glass h-fit overflow-hidden rounded-xl border-0 p-px transition-all duration-500",
                  hoveredCard === index || (index === 1 && hoveredCard === null)
                    ? "shadow-primary/20 scale-105 bg-[linear-gradient(90deg,#FEAF3A_0%,#FD1DAB_25%,#AF42D7_50%,#4C70EC_75%,#03D89D_100%)] p-px shadow-2xl"
                    : "hover:shadow-lg",
                )}
              >
                <Card>
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 ${
                        hoveredCard === index ||
                        (index === 1 && hoveredCard === null)
                          ? "bg-primary text-primary-foreground shadow-primary/25 shadow-lg"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <service.icon className="h-8 w-8" />
                    </motion.div>

                    <div className="mb-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-primary mb-3 text-sm font-medium">
                        {service.subtitle}
                      </p>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="bg-muted/50 mb-6 rounded-lg p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">
                          {service.results.metric}
                        </span>
                        <span className="text-primary text-2xl font-bold">
                          {service.results.value}
                        </span>
                      </div>
                      <div className="text-muted-foreground flex items-center justify-between text-xs">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {service.results.timeline}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-3 w-3" />
                          {service.results.clients}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -10 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: index * 0.2 + featureIndex * 0.1 + 0.5,
                            }}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === index ? "auto" : "0px",
                        opacity: expandedCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 border-t pt-4">
                        <p className="text-muted-foreground mb-2 text-sm italic">
                          &quot;{service.testimonial}&quot;
                        </p>
                        <p className="text-xs font-medium">
                          — {service.clientName}
                        </p>
                      </div>
                    </motion.div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-primary text-sm font-medium">
                          {service.startingPrice}
                        </span>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() =>
                            setExpandedCard(
                              expandedCard === index ? null : index,
                            )
                          }
                          className="text-xs"
                        >
                          {expandedCard === index
                            ? "Less Info"
                            : "Client Story"}
                        </Button>
                      </div>

                      <Button
                        className="group/btn w-full"
                        onClick={() => {
                          // Scroll to contact form or open contact modal
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>

                  <motion.div
                    className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r opacity-0"
                    animate={{
                      opacity:
                        hoveredCard === index ||
                        (index === 1 && hoveredCard === null)
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              100% Project Success Rate
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Free consultation this week
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Launch in 4-8 weeks
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ServiceHighlightSection;
