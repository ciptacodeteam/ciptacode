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
import { Calendar, ExternalLink, Eye, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Project = {
  id: string;
  previewLink: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: Record<string, string>;
  duration: string;
  client: string;
  industry: string;
  teamSize: string;
  year: string;
};

export const portfolioProjects: Project[] = [
  {
    id: "mutual-property",
    previewLink: "https://mutualproperty.co.id",
    title: "Real Estate Management System",
    category: "Web Development",
    description:
      "Comprehensive property management platform that streamlines operations and enhances user experience.",
    image: "/images/portfolio/mutualproperty.webp",
    technologies: ["React", "Laravel", "MySQL", "AWS"],
    metrics: {
      efficiency: "+40%",
      processing: "-60%",
      users: "500+",
    },
    duration: "3 months",
    client: "Mutual Property",
    industry: "Real Estate",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "yanks-and-brits",
    previewLink: "https://system.yanksandbrits.co.id",
    title: "EduTech Management System",
    category: "ERP Development",
    description:
      "Innovative platform for managing educational institutions, enhancing communication between students, teachers, and parents.",
    image: "/images/portfolio/yanks.webp",
    technologies: ["NextJS", "React", "PostgreSQL", "Vercel"],
    metrics: {
      downloads: "50K+",
      rating: "4.8★",
      transactions: "$2M+",
    },
    duration: "2 months",
    client: "Yanks & Brits",
    industry: "Education",
    teamSize: "3 Members",
    year: "2023",
  },
  {
    id: "7a",
    previewLink: "https://www.7anugrah.com/",
    title: "Web Application",
    category: "Web Development",
    description:
      "HIPAA-compliant platform serving 10K+ patients with telemedicine and appointment management features.",
    image: "/images/portfolio/7a.webp",
    technologies: ["NextJS", "React", "PostgreSQL", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "2 Weeks",
    client: "7AA",
    industry: "Logistics",
    teamSize: "1 Members",
    year: "2024",
  },
  {
    id: "ansama",
    previewLink: "https://ansama.co.id",
    title: "Landing Page",
    category: "Web Development",
    description: "A modern landing page for showcasing products and services.",
    image: "/images/portfolio/ansama.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Weeks",
    client: "Ansama",
    industry: "Logistics",
    teamSize: "1 Members",
    year: "2024",
  },
  {
    id: "skyview",
    previewLink: "https://www.skyview.co.id/",
    title: "Landing Page",
    category: "Web Development",
    description: "Landing page for showcasing products and services.",
    image: "/images/portfolio/skyview.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Weeks",
    client: "Skyview Setiabudi Apartment",
    industry: "Real Estate",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "sugarbaby",
    previewLink: "https://sugarbaby-id.vercel.app/",
    title: "Landing Page",
    category: "Web Development",
    description: "Landing page for showcasing products and services.",
    image: "/images/portfolio/sugarbaby.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Weeks",
    client: "Sugarbaby",
    industry: "F&B",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "velure",
    previewLink: "https://www.velureperfume.store",
    title: "Landing Page",
    category: "Web Development",
    description: "Landing page for showcasing products and services.",
    image: "/images/portfolio/velure.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Weeks",
    client: "Velure Perfumes",
    industry: "Beauty",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "xfl",
    previewLink: "https://www.xfl123.id",
    title: "Landing Page",
    category: "Web Development",
    description: "Landing page for showcasing products and services.",
    image: "/images/portfolio/xfl123.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Weeks",
    client: "XFL",
    industry: "Sport",
    teamSize: "2 Members",
    year: "2025",
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
  "F&B",
  "Real Estate",
  "Logistic",
  "Education",
  "Sport",
  "Beauty",
];

const PortfolioGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioProjects)[0] | null
  >(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = portfolioProjects.filter((project) => {
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
                  className="hover:bg-primary text-xs"
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
                  className="hover:bg-primary text-xs"
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
                                  {selectedProject.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline">
                                      {tech}
                                    </Badge>
                                  ))}
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
                                  {Object.entries(selectedProject.metrics).map(
                                    ([key, value]) => (
                                      <div key={key} className="text-center">
                                        <div className="text-primary text-lg font-bold">
                                          {value}
                                        </div>
                                        <div className="text-muted-foreground text-xs capitalize">
                                          {key.replace(/([A-Z])/g, " $1")}
                                        </div>
                                      </div>
                                    ),
                                  )}
                                </div>
                                <Button asChild className="mt-4 w-full">
                                  <Link href={selectedProject.previewLink}>
                                    Visit Website
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>

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
                  </div>
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
