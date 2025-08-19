"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mission = {
  title: "What We Do",
  description:
    "We help businesses succeed by building reliable software solutions. Whether you need a website, mobile app, or custom system, we make technology work for your business goals.",
};

const values = [
  {
    icon: Shield,
    title: "Reliable",
    description: "We build software that works properly and lasts long-term.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We complete projects on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work with you as a partner, not just a vendor.",
  },
  {
    icon: Compass,
    title: "Transparent",
    description: "Clear communication and honest pricing, no hidden costs.",
  },
];

const MissionValueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {mission.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {mission.description}
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The key reasons why businesses trust us with their software
            development needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass h-full border-0 text-center">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="from-primary to-accent mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br"
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MissionValueSection;
