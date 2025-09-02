"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Play } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="from-background via-background to-accent/5 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br via-40% pt-42 lg:pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-40 -right-40 size-80 rounded-full bg-cyan-500/5 blur-3xl" />
        <div
          className="animate-float absolute -bottom-40 -left-40 size-80 rounded-full bg-yellow-300/20 blur-3xl"
          // style={{ animationDelay: "2s" }}
        />
        <div className="to-accent/5 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-accent/30 absolute h-1 w-1 rounded-full"
            suppressHydrationWarning
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mb-16 px-4 lg:mb-0">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
              <Award className="h-4 w-4" />
              Trusted by 100+ growing brands
            </motion.div>

            <motion.h1 className="mb-6 space-x-4 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                Transform Your{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="separator-angular inline-block bg-gradient-to-r bg-clip-text text-transparent"
              >
                Business{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-block"
              >
                with Expert Development
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl"
            >
              We deliver enterprise-grade ERP systems, high-converting websites,
              and scalable mobile apps that drive real business results. From
              concept to launch in 30% less time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/contact" prefetch>
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent px-8 py-6 text-lg"
                >
                  <Link href="/portfolio" prefetch>
                    <Play className="mr-2 h-5 w-5" />
                    View Success Stories
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-muted-foreground mb-8 text-sm"
            >
              ⚡ Free consultation this week • 💯 100% satisfaction guarantee •
              🚀 Launch in 1-2 weeks
            </motion.p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
          >
            <div className="border-border/50 rounded-lg border bg-white p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-400/10">
                <Zap className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-2 font-semibold">30% Faster Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Proven development process that cuts project time without
                compromising quality
              </p>
            </div>

            <div className="border-border/50 rounded-lg border bg-white p-6 text-center backdrop-blur-sm">
              <div className="bg-accent/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Users className="text-accent h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">200+ Happy Clients</h3>
              <p className="text-muted-foreground text-sm">
                Trusted by startups to Fortune 500 companies across multiple
                industries
              </p>
            </div>

            <div className="border-border/50 rounded-lg border bg-white p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                <CheckCircle className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="mb-2 font-semibold">100% Success Rate</h3>
              <p className="text-muted-foreground text-sm">
                Every project delivered on time and within budget with ongoing
                support
              </p>
            </div>
          </motion.div> */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="border-muted-foreground/30 flex h-10 w-6 justify-center rounded-full border-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="bg-muted-foreground/50 mt-2 h-3 w-1 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
