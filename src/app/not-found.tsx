"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main>
      <section className="from-background via-background to-accent/5 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br via-40% py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
          <div
            className="animate-float absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"
            style={{ animationDelay: "2s" }}
          />
          <div className="to-accent/5 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 blur-3xl" />
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

        <motion.section
          className="relative z-10 container mb-16 flex flex-col items-center justify-center px-4 text-center lg:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            <Award className="h-4 w-4" />
            Coming Soon
          </motion.div>

          <motion.h1
            className="mb-8 text-4xl font-extrabold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Something awesome is on the way!
          </motion.h1>
          <motion.p
            className="text-secondary-foreground mb-8 max-w-xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            We&apos;re working hard to bring you a new experience. Stay tuned
            for updates and thank you for your patience.
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent group px-8 py-6 text-lg font-semibold"
              >
                <Link href="/" className="flex items-center gap-2" prefetch>
                  <Home className="h-5 w-5" />
                  Go back home
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      </section>
    </main>
  );
};
export default NotFoundPage;
