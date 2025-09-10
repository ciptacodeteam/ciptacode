"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Calendar, ExternalLink, Eye, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { portfolioProjects } from "../portfolio/PortfolioGallerySection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const PortfolioHighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

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
                <Card className="glass group h-full cursor-pointer overflow-hidden border-0 py-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        project.image ||
                        "https://placehold.co/500x300?text=No+Image"
                      }
                      alt={project.title}
                      className="h-[268px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="px-6 pb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {project.industry}
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                      {project.client}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            onClick={() => setSelectedProject(project)}
                            className="flex-1"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Quick View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[90vh] overflow-y-auto lg:!max-w-5xl">
                          {selectedProject && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl">
                                  {selectedProject.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div>
                                  <Image
                                    src={
                                      selectedProject.image ||
                                      "https://placehold.co/500x300?text=No+Image"
                                    }
                                    alt={selectedProject.title}
                                    className="h-[268px] w-full rounded-lg object-cover"
                                    width={500}
                                    height={300}
                                  />
                                </div>
                                <div className="space-y-4">
                                  <p className="text-muted-foreground">
                                    {selectedProject.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map(
                                      (tech) => (
                                        <Badge key={tech} variant="outline">
                                          {tech}
                                        </Badge>
                                      ),
                                    )}
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-2 text-sm">
                                      <Calendar className="text-muted-foreground h-4 w-4" />
                                      <span>{selectedProject.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm">
                                      <Users className="text-muted-foreground h-4 w-4" />
                                      <span>{selectedProject.teamSize}</span>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-3 gap-4 border-t pt-4">
                                    {Object.entries(
                                      selectedProject.metrics,
                                    ).map(([key, value]) => (
                                      <div key={key} className="text-center">
                                        <div className="text-primary text-lg font-bold">
                                          {value}
                                        </div>
                                        <div className="text-muted-foreground text-xs capitalize">
                                          {key.replace(/([A-Z])/g, " $1")}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  {selectedProject.previewLink && (
                                    <Button asChild className="mt-4 w-full">
                                      <Link href={selectedProject.previewLink}>
                                        Visit Website
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                      </Link>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>

                      {project.previewLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="hover:bg-primary"
                            >
                              <Link
                                href={project.previewLink}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Preview</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </CardContent>
                </Card>
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
