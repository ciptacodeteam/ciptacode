"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const portfolioProjects = [
  {
    id: "retailflow-erp",
    title: "RetailFlow ERP System",
    category: "Enterprise Software",
    description:
      "Complete ERP solution that increased operational efficiency by 40% and reduced processing time by 60%.",
    image: "/images/modern-erp-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: {
      efficiency: "+40%",
      processing: "-60%",
      users: "500+",
    },
    timeline: "6 months",
    client: "RetailFlow Corp",
  },
  {
    id: "fintech-mobile",
    title: "FinTech Mobile App",
    category: "Mobile Application",
    description:
      "Secure financial app with 50K+ downloads and 4.8 App Store rating, featuring advanced security protocols.",
    image: "/images/fintech-mobile-app.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    metrics: {
      downloads: "50K+",
      rating: "4.8★",
      transactions: "$2M+",
    },
    timeline: "4 months",
    client: "FinSecure Inc",
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Management Platform",
    category: "Healthcare Tech",
    description:
      "HIPAA-compliant platform serving 10K+ patients with telemedicine and appointment management features.",
    image: "/images/healthcare-management-dashboard.png",
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
    metrics: {
      patients: "10K+",
      satisfaction: "95%",
      efficiency: "+35%",
    },
    timeline: "8 months",
    client: "MedCare Solutions",
  },
];

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
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="glass h-full overflow-hidden border-0 py-0 transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "https://placehold.co/600x400"}
                    alt={project.title}
                    className="h-62 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Badge className="bg-primary/90 text-primary-foreground absolute top-4 left-4">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="px-6 pb-6">
                  <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {project.timeline}
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4" />
                    {project.client}
                  </div>

                  <h3 className="group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Success Metrics */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-muted/50 rounded-lg p-2 text-center"
                      >
                        <div className="text-primary text-sm font-bold">
                          {value}
                        </div>
                        <div className="text-muted-foreground text-xs capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
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
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/case-studies/${project.id}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
            className="group bg-transparent"
          >
            <Link href="/portfolio">
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
