"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Sparkles } from "lucide-react";

const AboutHeroSection = () => {
  return (
    <section className="from-background via-background to-primary/5 relative overflow-hidden bg-gradient-to-br py-24 pt-42">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="bg-primary/10 animate-float absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl" />
        <div
          className="bg-accent/10 animate-float absolute bottom-20 left-20 h-64 w-64 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="from-primary/30 to-accent/30 relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br backdrop-blur-sm"
          >
            <Heart className="text-primary h-10 w-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-0 right-0"
            >
              <Sparkles className="text-primary h-5 w-5" />
            </motion.div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            About{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Ciptacode
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg md:text-xl">
            We&apos;re a trusted software development company that helps
            businesses grow through reliable digital solutions. From websites to
            mobile apps and enterprise systems, we deliver results that matter.
          </p>

          {/* Key stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              { icon: Users, value: "100+", label: "Happy Clients" },
              { icon: Target, value: "200+", label: "Projects Completed" },
              { icon: Heart, value: "7+", label: "Years in Business" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="from-primary/20 to-accent/20 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
                  <stat.icon className="text-primary h-6 w-6" />
                </div>
                <div className="from-primary to-accent bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutHeroSection;
