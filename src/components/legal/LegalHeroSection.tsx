"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

interface LegalHeroProps {
  title: string;
  lastUpdated: string;
}

const LegalHeroSection = ({ title, lastUpdated }: LegalHeroProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="relative overflow-hidden py-24 pt-42">
      <div className="from-background via-background to-primary/5 absolute inset-0 bg-gradient-to-br" />
      <div className="bg-grid-white/[0.02] bg-grid absolute inset-0" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
            <div className="text-muted-foreground flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default LegalHeroSection;
