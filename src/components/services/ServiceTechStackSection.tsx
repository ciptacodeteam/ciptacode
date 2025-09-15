"use client";

import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandFlutter,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandVercel,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    name: "Next.js",
    category: "Fullstack",
    icon: <IconBrandNextjs size={28} />,
  },
  { name: "React", category: "Frontend", icon: <IconBrandReact size={28} /> },
  {
    name: "TypeScript",
    category: "Language",
    icon: <IconBrandTypescript size={28} />,
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: <IconBrandLaravel size={28} />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <IconBrandMysql size={28} />,
  },
  //   {
  //     name: "MongoDB",
  //     category: "Database",
  //     icon: <IconBrandMongodb size={28} />,
  //   },
  { name: "AWS", category: "Cloud", icon: <IconBrandAws size={28} /> },
  {
    name: "Vercel",
    category: "Deployment",
    icon: <IconBrandVercel size={28} />,
  },
  { name: "Docker", category: "DevOps", icon: <IconBrandDocker size={28} /> },
  {
    name: "React Native",
    category: "Mobile",
    icon: <IconBrandReactNative size={28} />,
  },
  { name: "Flutter", category: "Mobile", icon: <IconBrandFlutter size={28} /> },
  //   { name: "GraphQL", category: "API", icon: <IconBrandGraphql size={28} /> },
];

const ServiceTechStackSection = () => {
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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Technology Stack
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            We use cutting-edge technologies to build scalable, maintainable,
            and high-performance solutions.
          </p>
        </motion.div>

        <main className="flex-center">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass group rounded-lg p-6 py-4 transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  {tech.icon}

                  <div className="text-left">
                    <h3 className="group-hover:text-primary font-semibold transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};
export default ServiceTechStackSection;
