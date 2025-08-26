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
    name: "Andi Wijaya",
    role: "Owner TokoKita",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Ciptacode berhasil membuat website toko online kami dengan tampilan profesional dan fitur lengkap. Proses pengerjaan sangat cepat dan hasilnya melebihi ekspektasi.",
  },
  {
    name: "Siti Rahmawati",
    role: "Manager PT Solusi Digital",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Tim Ciptacode sangat komunikatif dan responsif. Website perusahaan kami kini tampil modern dan mudah digunakan oleh klien.",
  },
  {
    name: "Budi Prasetyo",
    role: "Founder RumahKopi",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Pembuatan website bisnis kopi kami berjalan lancar. Fitur reservasi dan katalog produk sangat membantu meningkatkan penjualan.",
  },
  {
    name: "Dewi Lestari",
    role: "Product Manager PT Mitra ERP",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "ERP yang dikembangkan Ciptacode sangat memudahkan pengelolaan data perusahaan. Integrasi dengan website berjalan mulus.",
  },
  {
    name: "Rizky Saputra",
    role: "CEO StartupEdu",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Website edukasi yang dibuat Ciptacode sangat interaktif dan user friendly. Timnya profesional dan selalu memberikan solusi terbaik.",
  },
  {
    name: "Fitri Handayani",
    role: "Marketing PT Sukses Bersama",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "Ciptacode membantu kami membuat landing page promosi yang menarik dan meningkatkan konversi penjualan secara signifikan.",
  },
  {
    name: "Joko Santoso",
    role: "Owner BengkelMobil",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Website bengkel kami kini mudah ditemukan di Google dan pelanggan bisa booking online. Terima kasih Ciptacode!",
  },
  {
    name: "Maya Putri",
    role: "COO PT Kreatif Media",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "Aplikasi mobile dan website yang dibuat Ciptacode sangat membantu operasional harian perusahaan kami.",
  },
  {
    name: "Fajar Nugroho",
    role: "Founder EventPro",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Website event management kami tampil modern dan fitur registrasi online sangat memudahkan peserta.",
  },
  {
    name: "Dian Pratama",
    role: "Owner Restoku",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Ciptacode membuat website restoran kami dengan sistem pemesanan online yang sangat praktis dan mudah digunakan.",
  },
  {
    name: "Agus Setiawan",
    role: "IT Supervisor PT Amanah",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "Website internal perusahaan yang dikembangkan Ciptacode sangat membantu komunikasi dan kolaborasi tim.",
  },
  {
    name: "Lina Marlina",
    role: "Owner KlinikSehat",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Website klinik kami kini memiliki fitur booking dan konsultasi online, sangat memudahkan pasien dan dokter.",
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
