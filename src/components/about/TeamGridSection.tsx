"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
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
              whileHover={{ y: -5 }}
            >
              <Card className="glass group h-full overflow-hidden border-0 py-0">
                <div className="relative">
                  <Image
                    src={
                      member.image ||
                      "https://placehold.co/300x300?text=No+Image"
                    }
                    alt={member.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-4 bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex justify-center space-x-2">
                      {member.social.linkedin && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0"
                        >
                          <IconBrandLinkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0"
                        >
                          <IconBrandTwitter className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0"
                        >
                          <IconBrandGithub className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-3 font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
