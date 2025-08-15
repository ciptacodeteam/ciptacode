"use client";

import Marquee from "react-fast-marquee";

const clients = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudSync",
  "NextGen",
  "DigitalEdge",
  "SmartSolutions",
  "FutureWorks",
  "CodeCraft",
  "WebMasters",
  "AppForge",
  "DevStudio",
];

const ClientMarqueeSection = () => {
  return (
    <section className="bg-black py-8">
      <div className="mx-auto">
        <div className="relative overflow-hidden">
          <Marquee autoFill speed={50}>
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="text-background hover:text-primary flex-shrink-0 px-6 text-2xl font-semibold transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default ClientMarqueeSection;
