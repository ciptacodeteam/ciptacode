"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type Client = {
  name: string;
  image: string;
};

const clients: Client[] = [
  {
    name: "7AA",
    image: "/images/clients/7aa.svg",
  },
  {
    name: "Skyview",
    image: "/images/clients/skyview.svg",
  },
  {
    name: "Sugar Baby",
    image: "/images/clients/sugarbaby.svg",
  },
  {
    name: "Ansama",
    image: "/images/clients/ansama.svg",
  },
  {
    name: "Velure",
    image: "/images/clients/velure.svg",
  },
  {
    name: "Mutual Property",
    image: "/images/clients/mutual.svg",
  },
  {
    name: "Yank Britz",
    image: "/images/clients/yanknbritz.svg",
  },
  {
    name: "MLI",
    image: "/images/clients/mli.svg",
  },
  {
    name: "Chez",
    image: "/images/clients/chez.svg",
  },
];

const ClientMarqueeSection = () => {
  return (
    <section className="bg-black py-4 lg:py-6">
      <div className="mx-auto">
        <div className="relative overflow-hidden">
          <Marquee autoFill speed={50}>
            {[...clients, ...clients].map((client, i) => (
              <Image
                key={`${client.name}-${i}`}
                src={client.image}
                alt={client.name}
                className="h-auto w-24 object-contain px-4 transition duration-300 ease-in-out sm:h-12 md:w-42 lg:w-42 lg:px-8"
                width={300}
                height={300}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default ClientMarqueeSection;
