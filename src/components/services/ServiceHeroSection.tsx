"use client";

import { IconMessage2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ServiceHeroSection = () => {
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
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Our{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg md:text-xl">
            From concept to deployment, we deliver comprehensive digital
            solutions that drive business growth and user engagement.
          </p>

          {/* Service icons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-8 md:space-x-16"
          >
            {[
              { icon: Code, label: "Web Development" },
              { icon: Database, label: "ERP Solutions" },
              { icon: Smartphone, label: "Mobile Apps" },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="from-primary/20 to-accent/20 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                  <service.icon className="text-primary h-8 w-8" />
                </div>
                <p className="text-muted-foreground text-sm">{service.label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground flex items-center justify-center space-x-4 text-sm"
          >
            <div className="flex items-center space-x-2">
              <IconMessage2 className="h-4 w-4" />
              <span>Flexibility and scalability for your projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default ServiceHeroSection;
