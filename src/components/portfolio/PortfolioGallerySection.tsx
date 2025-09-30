"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "../cards/ProjectCard";

export type Project = {
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
  testimonial?: {
    name: string;
    social: string;
    role: string;
    image: string;
    quote: string;
  };
};

export const portfolioProjects: Project[] = [
  {
    id: "chez",
    previewLink: "https://chezbakery.id",
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
    testimonial: {
      name: "Catherine Pho",
      social: "@catherinepho",
      role: "Owner Chez Bakery and Cafe",
      image: "/images/testimonials/catherine-pho.jpg",
      quote:
        "Website benar-benar membantu kami. Pelanggan jadi lebih gampang lihat menu dan promo. Prosesnya cepat, desainnya cakep, dan timnya selalu siap bantu kalau ada yang perlu.",
    },
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
    testimonial: {
      name: "Nico Lim",
      social: "@nicolimm",
      role: "Owner PT. Genba Inti Solusindo",
      image: "/images/testimonials/nico-lim.jpg",
      quote:
        "Kami sangat puas dengan layanan yang diberikan oleh Ciptacode. Timnya profesional, responsif, dan benar-benar memahami kebutuhan bisnis kami.",
    },
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
    testimonial: {
      name: "Chandra",
      social: "@mrciek",
      role: "Owner PT. Mutual Properti Indonesia",
      image: "/images/testimonials/chandra.jpeg",
      quote:
        "Website properti yang dibuat Ciptacode sangat membantu kami dalam memasarkan proyek-proyek baru. Fitur pencarian dan galeri propertinya sangat user-friendly.",
    },
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
    testimonial: {
      name: "Michael Chang",
      social: "@michaelchang_s",
      role: "Owner PT. Tujuh Anugrah Abadi",
      image: "/images/testimonials/michael-chang.jpg",
      quote:
        "Mereka cepat tanggap, ngerti apa yang kami butuhkan, Puas banget sama hasilnya.",
    },
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
    testimonial: {
      name: "Edrick Lim",
      social: "@limedricks",
      role: "Owner Velure Parfume",
      image: "/images/testimonials/edrick-lim.jpg",
      quote:
        "Kami butuh landing page untuk brand Velure. Desainnya elegan, sesuai sama karakter produk, dan gampang diakses pelanggan. Hasilnya bikin brand kami kelihatan lebih profesional.",
    },
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
    testimonial: {
      name: "Kelvin Luo",
      social: "@kelvin_luo0287",
      role: "Owner Xtream Football Community",
      image: "/images/testimonials/kelvin-luo.jpg",
      quote:
        "Website bener kepakai dengan gampang, mayoritas orang di komunitas kami adalah 30 tahun keatas, website yang dibuat dapat dipakai dengan gampang dari segi design dan flow yang jelas dan gampang.",
    },
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
  {
    id: "tedz",
    previewLink: "https://www.tedzcreativegroup.com",
    title: "Creative Landing Page for Innovative Agencies",
    category: "Web Development",
    description:
      "Tedz Production landing page delivers a fresh, modern look that resonates with customers. Fast loading, mobile-friendly, and designed to inspire action.",
    image: "/images/portfolio/tedz-production.webp",
    technologies: ["NextJS", "React", "Vercel"],
    metrics: {
      users: "5K+",
      satisfaction: "90%",
      efficiency: "+30%",
    },
    duration: "1 Week",
    client: "Tedz Production",
    industry: "Creative Agency",
    teamSize: "1 Member",
    year: "2025",
    testimonial: {
      name: "Teddy Tanadi",
      social: "@teddytanadi",
      role: "Owner Tedz Production",
      image: "/images/testimonials/teddy-tanadi.jpg",
      quote:
        "Timnya komunikatif, kreatif, dan mampu mewujudkan ide kami menjadi sebuah website yang menarik serta fungsional.",
    },
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
                <ProjectCard data={project} />
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
