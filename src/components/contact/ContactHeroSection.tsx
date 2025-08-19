"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <section className="from-background via-background to-primary/5 relative overflow-hidden bg-gradient-to-br py-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="bg-primary/10 animate-float absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl" />
        <div
          className="bg-accent/10 animate-float absolute bottom-20 left-20 h-64 w-64 rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container px-4">
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
            className="from-primary/20 to-accent/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br"
          >
            <MessageCircle className="text-primary h-8 w-8" />
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Let&apos;s{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Ready to transform your business with reliable digital solutions?
            We&apos;d love to hear about your project and discuss how we can
            help you achieve your goals.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm md:grid-cols-3"
          >
            <div>
              <div className="text-foreground font-semibold">Response Time</div>
              <div>Within 24 hours</div>
            </div>
            <div>
              <div className="text-foreground font-semibold">
                Free Consultation
              </div>
              <div>No commitment required</div>
            </div>
            <div>
              <div className="text-foreground font-semibold">
                Project Timeline
              </div>
              <div>Custom estimates provided</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default ContactHeroSection;
