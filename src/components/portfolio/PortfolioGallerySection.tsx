"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const projects = [
  {
    id: "retailflow-erp",
    title: "RetailFlow ERP System",
    category: "ERP Development",
    industry: "Retail",
    description:
      "Complete ERP transformation for a multi-location retail chain",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    metrics: {
      efficiency: "40%",
      timeSaved: "60%",
      costSavings: "$2M+",
    },
    year: "2024",
    duration: "6 months",
    teamSize: "8 developers",
    slug: "retailflow-erp",
  },
  {
    id: "fintech-mobile",
    title: "FinanceFlow Mobile App",
    category: "Mobile Development",
    industry: "Fintech",
    description:
      "Cross-platform mobile banking application with advanced security",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
    metrics: {
      users: "50K+",
      rating: "4.8/5",
      transactions: "$10M+",
    },
    year: "2024",
    duration: "4 months",
    teamSize: "6 developers",
    slug: "fintech-mobile",
  },
  {
    id: "healthcare-platform",
    title: "MedConnect Platform",
    category: "Web Development",
    industry: "Healthcare",
    description:
      "Telemedicine platform connecting patients with healthcare providers",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["Next.js", "TypeScript", "WebRTC", "AWS"],
    metrics: {
      consultations: "25K+",
      satisfaction: "95%",
      uptime: "99.9%",
    },
    year: "2023",
    duration: "5 months",
    teamSize: "10 developers",
    slug: "healthcare-platform",
  },
  {
    id: "ecommerce-website",
    title: "StyleHub E-commerce",
    category: "Web Development",
    industry: "Fashion",
    description:
      "High-performance e-commerce platform with AI-powered recommendations",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["Next.js", "Shopify", "AI/ML", "Vercel"],
    metrics: {
      conversion: "35%",
      pageSpeed: "95/100",
      revenue: "+150%",
    },
    year: "2023",
    duration: "3 months",
    teamSize: "5 developers",
    slug: "ecommerce-website",
  },
  {
    id: "logistics-dashboard",
    title: "LogiTrack Dashboard",
    category: "ERP Development",
    industry: "Logistics",
    description: "Real-time logistics management and tracking system",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    metrics: {
      efficiency: "45%",
      accuracy: "99.5%",
      savings: "$1.5M",
    },
    year: "2023",
    duration: "7 months",
    teamSize: "12 developers",
    slug: "logistics-dashboard",
  },
  {
    id: "restaurant-app",
    title: "FoodieOrder App",
    category: "Mobile Development",
    industry: "F&B",
    description: "Multi-restaurant ordering and delivery management system",
    image: "https://placehold.co/600x400?text=No+Image",
    technologies: ["Flutter", "Firebase", "Stripe", "Google Maps"],
    metrics: {
      orders: "100K+",
      restaurants: "500+",
      growth: "+200%",
    },
    year: "2023",
    duration: "4 months",
    teamSize: "7 developers",
    slug: "restaurant-app",
  },
];

const categories = [
  "All",
  "Web Development",
  "ERP Development",
  "Mobile Development",
];
const industries = [
  "All",
  "Retail",
  "Fintech",
  "Healthcare",
  "Fashion",
  "Logistics",
  "F&B",
];

const PortfolioGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const industryMatch =
      selectedIndustry === "All" || project.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-muted-foreground mr-2 text-sm font-medium">
                Category:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-muted-foreground mr-2 text-sm font-medium">
                Industry:
              </span>
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={
                    selectedIndustry === industry ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className="text-xs"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="glass group h-full cursor-pointer overflow-hidden border-0 py-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      project.image ||
                      "https://placehold.co/500x300?text=No+Image"
                    }
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute right-4 bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setSelectedProject(project)}
                            className="flex-1"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
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
                                    className="h-64 w-full rounded-lg object-cover"
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
                                  <Button asChild className="mt-4 w-full">
                                    <Link
                                      href={`/case-studies/${selectedProject.slug}`}
                                    >
                                      View Full Case Study
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {project.industry}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn mt-4 w-full"
                  >
                    <Link href={`/case-studies/${project.slug}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-muted-foreground">
              No projects found matching your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedIndustry("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
export default PortfolioGallerySection;
