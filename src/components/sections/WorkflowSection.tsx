"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Rocket,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const workflowSteps = [
  {
    step: 1,
    title: "Project Consultation",
    description:
      "We discuss your requirements, goals, and project scope in detail",
    details:
      "Free consultation to understand your vision and provide accurate timeline",
    icon: Users,
    action: "Free Consultation",
    color: "from-slate-500 to-slate-600",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description:
      "Upon agreement, we create wireframes and visual designs for your approval",
    details:
      "30% payment secures your project slot and begins the design phase",
    icon: Palette,
    action: "Design Phase Begins",
    payment: "30%",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 3,
    title: "Development",
    description:
      "After design approval, our team begins coding your application",
    details: "40% payment starts development with regular progress updates",
    icon: Code,
    action: "Development Starts",
    payment: "40%",
    color: "from-red-500 to-red-600",
  },
  {
    step: 4,
    title: "Testing & Launch",
    description: "Quality testing, final revisions, and project deployment",
    details: "Final 30% payment upon successful testing and project delivery",
    icon: Rocket,
    action: "Project Launch",
    payment: "30%",
    color: "from-cyan-500 to-cyan-600",
  },
];

const WorkflowSection = () => {
  return (
    <section className="via-background to-accent/5 bg-gradient-to-r from-cyan-500/5 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="text-primary border-primary/20 mb-4 px-4 py-2"
          >
            Our Workflow
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            How We Work{" "}
            <span className="separator-angular inline-block bg-gradient-to-r bg-clip-text pb-1 text-transparent">
              Together
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            A clear, structured process with transparent pricing and defined
            milestones
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute top-1/2 right-0 left-0 z-0 hidden h-0.5 -translate-y-1/2 transform bg-slate-200 lg:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group h-full rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  {/* Step Number */}
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-r ${step.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-lg font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <step.icon className="h-6 w-6 text-slate-500" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-center text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mb-3 text-center text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                  <p className="mb-4 text-center text-xs leading-relaxed text-slate-500">
                    {step.details}
                  </p>

                  {/* Payment Badge */}
                  {step.payment ? (
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {step.payment} Payment Required
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        No Payment Required
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow for desktop */}
                {index < workflowSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 transform lg:block">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-xl bg-slate-900 p-8">
            <div className="mb-4 flex items-center justify-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
              <span className="text-sm font-medium text-green-400">
                Structured & Transparent
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Start Your Project Today
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-slate-300">
              Begin with a free consultation. No commitment required until
              you&apos;re completely satisfied with our proposal.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                size="lg"
                className="glow-accent group bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default WorkflowSection;
