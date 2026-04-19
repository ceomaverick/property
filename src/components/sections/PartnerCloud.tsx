"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { logo: "/logo-realtor.svg", alt: "Realtor.com" },
  { logo: "/logo-redfin.svg", alt: "Redfin" },
  { logo: "/logo-remax.svg", alt: "RE/MAX" },
  { logo: "/logo-trulia.svg", alt: "Trulia" },
  { logo: "/logo-zillow.svg", alt: "Zillow" },
];

export default function PartnerCloud() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            Our Trading Partners
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
