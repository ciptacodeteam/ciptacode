"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "10+ years in tech leadership, passionate about building scalable solutions.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect with expertise in modern web technologies.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Kim",
    role: "Lead Designer",
    bio: "UX/UI specialist focused on creating intuitive user experiences.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Johnson",
    role: "Senior Developer",
    bio: "React and Node.js expert with a passion for clean, efficient code.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Park",
    role: "DevOps Engineer",
    bio: "Cloud infrastructure specialist ensuring reliable deployments.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    bio: "Agile methodology expert keeping projects on track and clients happy.",
    image: "https://placehold.co/300x300?text=No+Image",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const TeamGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Our Team</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The talented individuals behind Ciptacode&apos;s success. We&apos;re
            a diverse team united by our passion for technology and commitment
            to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Card className="group h-full overflow-hidden rounded-2xl border-0 bg-white/10 py-0 shadow-xl backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:shadow-2xl">
                <div className="relative">
                  <Image
                    src={
                      member.image ||
                      "https://placehold.co/300x300?text=No+Image"
                    }
                    alt={member.name}
                    className="h-56 w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-4 bottom-4 left-4 flex justify-center space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {member.social.linkedin && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="hover:bg-primary/80 h-9 w-9 rounded-full p-0 shadow-md hover:text-white"
                        asChild
                      >
                        <Link
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandLinkedin className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="hover:bg-primary/80 h-9 w-9 rounded-full p-0 shadow-md hover:text-white"
                        asChild
                      >
                        <Link
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandX className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                    {member.social.github && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="hover:bg-primary/80 h-9 w-9 rounded-full p-0 shadow-md hover:text-white"
                        asChild
                      >
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandGithub className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-7 pt-2 text-center">
                  <h3 className="from-primary to-accent mb-2 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-4 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-2 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamGridSection;
