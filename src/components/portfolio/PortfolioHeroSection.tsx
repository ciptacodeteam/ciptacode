"use client";

import { motion } from "framer-motion";
import { Eye, Filter } from "lucide-react";

const PortfolioHeroSection = () => {
  return (
    <section className="from-background via-background to-primary/5 relative overflow-hidden bg-gradient-to-br py-24 pt-42">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="bg-primary/10 animate-float absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl" />
        <div
          className="bg-accent/10 animate-float absolute bottom-20 left-20 h-64 w-64 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="from-primary/20 to-accent/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br"
          >
            <Eye className="text-primary h-8 w-8" />
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Our{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Discover how we&apos;ve helped businesses across various industries
            achieve their digital transformation goals through innovative
            solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground flex items-center justify-center space-x-4 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter by industry or technology</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default PortfolioHeroSection;
