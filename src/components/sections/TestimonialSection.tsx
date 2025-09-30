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
  social?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nico Lim",
    social: "@nicolimm",
    role: "Owner PT. Genba Inti Solusindo",
    image: "/images/testimonials/nico-lim.jpg",
    quote:
      "Kami sangat puas dengan layanan yang diberikan oleh Ciptacode. Timnya profesional, responsif, dan benar-benar memahami kebutuhan bisnis kami.",
  },
  {
    name: "Teddy Tanadi",
    social: "@teddytanadi",
    role: "Owner Tedz Production",
    image: "/images/testimonials/teddy-tanadi.jpg",
    quote:
      "Timnya komunikatif, kreatif, dan mampu mewujudkan ide kami menjadi sebuah website yang menarik serta fungsional.",
  },
  {
    name: "Catherine Pho",
    social: "@catherinepho",
    role: "Owner Chez Bakery and Cafe",
    image: "/images/testimonials/catherine-pho.jpg",
    quote:
      "Website benar-benar membantu kami. Pelanggan jadi lebih gampang lihat menu dan promo. Prosesnya cepat, desainnya cakep, dan timnya selalu siap bantu kalau ada yang perlu.",
  },
  {
    name: "Michael Chang",
    social: "@michaelchang_s",
    role: "Owner PT. Tujuh Anugrah Abadi",
    image: "/images/testimonials/michael-chang.jpg",
    quote:
      "Mereka cepat tanggap, ngerti apa yang kami butuhkan, Puas banget sama hasilnya.",
  },
  {
    name: "Kelvin Luo",
    social: "@kelvin_luo0287",
    role: "Owner Xtream Football Community",
    image: "/images/testimonials/kelvin-luo.jpg",
    quote:
      "Website bener kepakai dengan gampang, mayoritas orang di komunitas kami adalah 30 tahun keatas, website yang dibuat dapat dipakai dengan gampang dari segi design dan flow yang jelas dan gampang.",
  },
  {
    name: "Edrick Lim",
    social: "@limedricks",
    role: "Owner Velure Parfume",
    image: "/images/testimonials/edrick-lim.jpg",
    quote:
      "Kami butuh landing page untuk brand Velure. Desainnya elegan, sesuai sama karakter produk, dan gampang diakses pelanggan. Hasilnya bikin brand kami kelihatan lebih profesional.",
  },
  {
    name: "Chandra",
    social: "@mrciek",
    role: "Owner PT. Mutual Properti Indonesia",
    image: "/images/testimonials/chandra.jpeg",
    quote:
      "Website properti yang dibuat Ciptacode sangat membantu kami dalam memasarkan proyek-proyek baru. Fitur pencarian dan galeri propertinya sangat user-friendly.",
  },
  {
    name: "Jessica Pramudita",
    role: "Manager Salon Kecantikan",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "Ciptacode membantu kami membuat website yang elegan dan mudah digunakan. Sekarang pelanggan bisa booking layanan secara online, yang sangat meningkatkan efisiensi operasional kami.",
  },
  {
    name: "Eric Tan",
    role: "Manager Toko Jam",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "Website e-commerce yang dibuat Ciptacode sangat membantu kami menjangkau lebih banyak pelanggan. Desainnya menarik dan navigasinya mudah, membuat pengalaman belanja online jadi menyenangkan.",
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

        <div className="mt-8 hidden gap-3 sm:grid-cols-2 md:mt-12 lg:grid lg:grid-cols-3">
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-3">
              {chunk.map(({ name, role, quote, image, social }, index) => (
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
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">
                          {name}{" "}
                          {social && (
                            <span className="text-muted-foreground text-sm">
                              &#8226; {social}
                            </span>
                          )}
                        </h3>

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
