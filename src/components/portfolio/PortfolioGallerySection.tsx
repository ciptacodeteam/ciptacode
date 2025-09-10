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
  previewLink: string | null;
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
    id: "chez",
    previewLink: null,
    title: "Aesthetic Landing Page for Bakery & Cafe",
    category: "Web Development",
    description:
      "Chez Bakery & Cafe’s landing page combines warm aesthetics with user-friendly design, creating an inviting online presence that attracts and retains customers.",
    image: "/images/portfolio/chez.webp",
    technologies: ["NextJS", "React", "PostgreSQL"],
    metrics: {
      users: "1K+",
      satisfaction: "95%",
      engagement: "+30%",
    },
    duration: "2 Weeks",
    client: "Chez Bakery & Cafe",
    industry: "Food & Beverage",
    teamSize: "2 Members",
    year: "2025",
  },
  {
    id: "plaza-ac",
    previewLink: "https://www.plazaac.co.id",
    title: "Modern Landing Page for Innovative Product Showcases",
    category: "Web Development",
    description:
      "Discover how we helped PT. Genba Inti Solusindo boost their online presence with a visually stunning, high-converting landing page. Engaging visuals, seamless navigation, and a focus on user experience led to a remarkable increase in conversions.",
    image: "/images/portfolio/plaza-ac.webp",
    technologies: ["NextJS", "React", "PostgreSQL"],
    metrics: {
      users: "500+",
      conversion: "+25%",
      bounceRate: "-15%",
    },
    duration: "1 Week",
    client: "PT. Genba Inti Solusindo",
    industry: "HVAC Services",
    teamSize: "2 Members",
    year: "2025",
  },
  {
    id: "mutual-property",
    previewLink: "https://mutualproperty.co.id",
    title: "Revolutionizing Real Estate Management",
    category: "Web Development",
    description:
      "A comprehensive platform that transformed property management for Mutual Property. With streamlined operations, intuitive dashboards, and real-time tracking, clients and agents enjoy a seamless experience from listing to closing.",
    image: "/images/portfolio/mutualproperty.webp",
    technologies: ["React", "Laravel", "MySQL", "AWS"],
    metrics: {
      efficiency: "+40%",
      processingTime: "-60%",
      users: "500+",
    },
    duration: "3 Months",
    client: "Mutual Property",
    industry: "Real Estate",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "yanks-and-brits",
    previewLink: "https://system.yanksandbrits.co.id",
    title: "Empowering Education with Smart Management",
    category: "ERP Development",
    description:
      "Yanks and Brits English Institute now connects students, teachers, and parents like never before. Our platform fosters collaboration, simplifies communication, and enhances learning outcomes with innovative digital tools.",
    image: "/images/portfolio/yanks.webp",
    technologies: ["NextJS", "React", "PostgreSQL", "Vercel"],
    metrics: {
      rating: "4.8★",
      satisfaction: "98%",
      retention: "+30%",
    },
    duration: "2 Months",
    client: "Yanks and Brits English Institute",
    industry: "Education",
    teamSize: "3 Members",
    year: "2023",
  },
  {
    id: "7a",
    previewLink: "https://www.7anugrah.com/",
    title: "Professional Landing Page That Converts",
    category: "Web Development",
    description:
      "PT. Tujuh Anugrah Abadi’s new landing page captivates visitors with a sleek design and persuasive content, driving engagement and turning leads into loyal customers.",
    image: "/images/portfolio/7a.webp",
    technologies: ["NextJS", "React", "PostgreSQL", "Vercel"],
    metrics: {
      users: "1K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "2 Weeks",
    client: "PT. Tujuh Anugrah Abadi",
    industry: "Logistics",
    teamSize: "1 Member",
    year: "2024",
  },
  {
    id: "skyview",
    previewLink: "https://www.skyview.co.id/",
    title: "Showcasing Luxury Living with Style",
    category: "Web Development",
    description:
      "Skyview Setiabudi Apartment’s website blends elegance and functionality, featuring immersive galleries and a user-friendly contact form that drives inquiries.",
    image: "/images/portfolio/skyview.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "5K+",
      satisfaction: "90%",
      inquiries: "+120%",
    },
    duration: "1 Week",
    client: "Skyview Setiabudi Apartment",
    industry: "Real Estate",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "sugarbaby",
    previewLink: "https://sugarbaby-id.vercel.app/",
    title: "Deliciously Designed Commercial Landing Page",
    category: "Web Development",
    description:
      "Sugar Baby Bakery’s landing page tempts visitors with mouth-watering visuals and a delightful browsing experience, boosting brand awareness and sales.",
    image: "/images/portfolio/sugarbaby.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "2K+",
      satisfaction: "95%",
      sales: "+30%",
    },
    duration: "1 Week",
    client: "Sugar Baby Bakery",
    industry: "Food & Beverage",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "velure",
    previewLink: "https://www.velureperfume.store",
    title: "Elegant Landing Page for a Fragrant Brand",
    category: "Web Development",
    description:
      "Velure Perfume’s online presence now matches its luxurious scents. The new landing page enchants visitors and encourages them to explore the full collection.",
    image: "/images/portfolio/velure.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "10K+",
      satisfaction: "95%",
      conversion: "+20%",
    },
    duration: "1 Week",
    client: "Velure Perfume",
    industry: "Beauty",
    teamSize: "2 Members",
    year: "2024",
  },
  {
    id: "xfl",
    previewLink: "https://www.xfl123.id",
    title: "Dynamic Landing Page for Sports Enthusiasts",
    category: "Web Development",
    description:
      "Xtream Football Club’s landing page energizes fans and players alike, featuring bold visuals and interactive elements that keep visitors coming back.",
    image: "/images/portfolio/xfl123.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "10K+",
      satisfaction: "95%",
      engagement: "+40%",
    },
    duration: "1 Week",
    client: "Xtream Football Club",
    industry: "Sport",
    teamSize: "2 Members",
    year: "2025",
  },
  {
    id: "ansama",
    previewLink: "https://ansama.co.id",
    title: "Engaging Landing Page for Modern Brands",
    category: "Web Development",
    description:
      "PT. Aneka Sari Utama’s landing page delivers a fresh, modern look that resonates with customers. Fast loading, mobile-friendly, and designed to inspire action.",
    image: "/images/portfolio/ansama.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    duration: "1 Week",
    client: "PT. Aneka Sari Utama",
    industry: "Logistics",
    teamSize: "1 Member",
    year: "2024",
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
  "Food & Beverage",
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
          {filteredProjects
            .sort((a, b) => b.year.localeCompare(a.year))
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
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
                      priority
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
