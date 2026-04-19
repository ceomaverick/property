"use client";

import { motion } from "framer-motion";
import { Home, Camera, Key, Settings, Check } from "lucide-react";

const services = [
  {
    title: "Sell your home",
    Icon: Home,
    description: "Lorem dummy printing typesetting industry."
  },
  {
    title: "Free photoshoot",
    Icon: Camera,
    description: "Lorem dummy printing typesetting industry."
  },
  {
    title: "Buy a home",
    Icon: Key,
    description: "Lorem dummy printing typesetting industry."
  },
  {
    title: "Free appraisal",
    Icon: Settings,
    description: "Lorem dummy printing typesetting industry."
  }
];

export default function ServicesStrip() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#262b35] text-center mb-24"
        >
          Recognized for{" "}
          <span className="relative inline-block px-1">
            <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
            <span className="relative">exceeding client</span>
          </span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const rotations = [45, 225, -45, -225];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center px-10 py-4 
                  ${index % 2 === 0 ? "md:border-r" : ""} 
                  ${index !== services.length - 1 ? "lg:border-r" : "lg:border-r-0"} 
                  border-gray-100`}
              >
                <div className="relative mb-10 w-16 h-16 flex items-center justify-center">
                  {/* Semi-circle background with specific rotation */}
                  <div 
                    className="absolute inset-0 flex items-center justify-start"
                    style={{ transform: `rotate(${rotations[index]}deg)` }}
                  >
                    <div className="w-8 h-16 bg-[#00b15e]/15 rounded-l-full" />
                  </div>
                  <service.Icon className="w-10 h-10 text-[#262b35] relative z-10 stroke-[1.5]" />
                </div>
                <h3 className="text-[#262b35] text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-[200px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex items-center justify-center gap-3 text-lg md:text-xl"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#00b15e] flex items-center justify-center text-[#00b15e] flex-shrink-0">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>
          <p className="text-[#262b35] font-medium">
            We are growing fast! Today crafto has{" "}
            <span className="border-b-2 border-[#262b35] font-bold pb-0.5">36k+ active residents.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
