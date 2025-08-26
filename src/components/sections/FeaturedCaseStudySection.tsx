"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const FeaturedCaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="text-primary border-primary/20 mb-4 px-4 py-2"
          >
            Featured Case Study
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Transforming Retail with Technology
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See how we helped transform a traditional retail business into a
            digital-first operation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass overflow-hidden border-0 py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image placeholder */}
              <div className="from-primary/20 to-accent/20 relative flex h-64 cursor-pointer items-center justify-center rounded bg-gradient-to-br lg:h-auto">
                <Link href="/portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                      <ExternalLink className="h-12 w-12 text-white" />
                    </div>
                    <p className="font-medium text-white/80">
                      Transforming Retail with Technology
                    </p>
                  </motion.div>
                </Link>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">ERP Development</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  RetailFlow: Complete ERP Transformation
                </h3>
                <p className="text-muted-foreground mb-6">
                  We built a comprehensive ERP system that streamlined inventory
                  management, automated financial reporting, and integrated with
                  existing POS systems, resulting in 40% operational efficiency
                  improvement.
                </p>

                <div className="mb-8 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-primary mb-1 text-2xl font-bold">
                      40%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Efficiency Increase
                    </div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 text-2xl font-bold">
                      60%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Time Saved
                    </div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 text-2xl font-bold">
                      124 juta
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Cost Savings
                    </div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 text-2xl font-bold">
                      99.9%
                    </div>
                    <div className="text-muted-foreground text-sm">Uptime</div>
                  </div>
                </div>

                <Button asChild className="group">
                  <Link href="/portfolio">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturedCaseStudySection;
