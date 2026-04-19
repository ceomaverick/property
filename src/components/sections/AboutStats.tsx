"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    logo: "/guardian.svg",
    alt: "The Guardian",
    label: "Property sell listed",
    growth: "275% Growth"
  },
  {
    logo: "/bloomberg.svg",
    alt: "Bloomberg",
    label: "Property selling",
    growth: "235% Growth"
  },
  {
    logo: "/forbes.svg",
    alt: "Forbes",
    label: "Property agents",
    growth: "175% Growth"
  }
];

export default function AboutStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((item, index) => (
            <motion.div
              key={item.logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Logo Part */}
              <div className="h-48 flex items-center justify-center border-b border-gray-100 p-12">
                <div className="relative w-full h-full">
                  <Image 
                    src={item.logo} 
                    alt={`${item.alt} media logo representing property statistics`} 
                    fill 
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              </div>
              
              {/* Stats Part */}
              <div className="p-6 text-center bg-gray-50/30">
                <p className="text-gray-400 text-sm font-medium">
                  {item.label} - <span className="text-[#232323] font-bold">{item.growth}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <div className="bg-[#232323] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-full">
            Fun Facts
          </div>
          <p className="text-lg lg:text-xl font-bold text-[#232323] tracking-tight">
            World's famous ratings companies we worked with us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
