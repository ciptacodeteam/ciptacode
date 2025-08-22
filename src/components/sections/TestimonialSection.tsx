"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    content:
      "Ciptacode delivered our ERP system ahead of schedule and under budget. The quality of their work is exceptional, and their team truly understands enterprise needs.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder at RetailPlus",
    content:
      "Working with Ciptacode was a game-changer for our business. They transformed our outdated processes into a modern, efficient digital ecosystem.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Product Manager at InnovateLab",
    content:
      "The mobile app they built for us has received outstanding user feedback. Their attention to detail and user experience is remarkable.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="via-background to-accent/5 bg-gradient-to-r from-cyan-500/5 py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="text-primary border-primary/20 mb-4 px-4 py-2"
          >
            Client Testimonials
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass h-full border-0 !bg-white">
                <CardContent className="p-8 py-4">
                  <div className="mb-4 flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
