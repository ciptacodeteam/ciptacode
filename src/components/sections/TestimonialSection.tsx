"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

// const testimonials = [
//   {
//     name: "Sarah Chen",
//     role: "CTO at TechFlow",
//     content:
//       "Ciptacode delivered our ERP system ahead of schedule and under budget. The quality of their work is exceptional, and their team truly understands enterprise needs.",
//     rating: 5,
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Founder at RetailPlus",
//     content:
//       "Working with Ciptacode was a game-changer for our business. They transformed our outdated processes into a modern, efficient digital ecosystem.",
//     rating: 5,
//   },
//   {
//     name: "Emily Johnson",
//     role: "Product Manager at InnovateLab",
//     content:
//       "The mobile app they built for us has received outstanding user feedback. Their attention to detail and user experience is remarkable.",
//     rating: 5,
//   },
// ];

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer at @BRPNews • @GoogleDevExpert for Android",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3),
);

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

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
        </div> */}

        <div className="mt-8 hidden gap-3 sm:grid-cols-2 md:mt-12 lg:grid lg:grid-cols-3">
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-3">
              {chunk.map(({ name, role, quote, image }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Card>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:hidden lg:grid-cols-3">
          {testimonials
            .slice(0, 4)
            .map(({ name, role, quote, image }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <Card>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-9">
                      <AvatarImage
                        alt={name}
                        src={image}
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{name}</h3>
                      <span className="text-muted-foreground block text-sm tracking-wide">
                        {role}
                      </span>
                      <blockquote className="mt-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          {quote}
                        </p>
                      </blockquote>
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
