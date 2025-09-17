"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { portfolioProjects } from "../portfolio/PortfolioGallerySection";

import ProjectCard from "../cards/ProjectCard";

const PortfolioHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24">
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
            Featured Projects
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Success Stories That Drive Results
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Discover how we&apos;ve helped businesses transform their operations
            and achieve measurable growth through innovative technology
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {portfolioProjects
            .sort((a, b) => b.year.localeCompare(a.year))
            .slice(0, 3)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <ProjectCard data={project} />
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group hover:bg-primary bg-transparent"
          >
            <Link href="/portfolio" prefetch>
              View All Projects
              <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default PortfolioHighlightSection;
