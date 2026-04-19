"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Best services",
    description: "Experience premium real estate solutions tailored to your needs.",
    icon: "/best-services.webp",
  },
  {
    title: "User friendly",
    description: "Our platform makes finding your dream home simple and intuitive.",
    icon: "/user-freindly.webp",
  },
  {
    title: "Trusted property",
    description: "Every listing is verified to ensure the highest quality standards.",
    icon: "/trusted-property.webp",
  },
  {
    title: "Legal advisor",
    description: "Expert legal guidance for seamless and secure property transactions.",
    icon: "/legal-advisor.webp",
  },
];

export default function AboutServices() {
  return (
    <section className="py-16 lg:py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#232323] mb-20 tracking-tight"
        >
          Giving quality with <span className="relative inline-block px-1">
            <span className="absolute bottom-2 left-0 w-full h-[12px] bg-[#00b15e]/20" />
            property
          </span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center group"
            >
              <div className="mb-10 w-24 h-24 relative flex items-center justify-center bg-[#f7fdfa] rounded-full group-hover:bg-[#e6f7ef] transition-colors">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} illustration icon`} 
                  width={64} 
                  height={64} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#232323] mb-4">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 text-lg lg:text-xl font-bold text-[#232323]"
        >
          <div className="w-10 h-10 bg-[#e6f7ef] rounded-full flex items-center justify-center text-[#00b15e]">
            <CheckCircle2 size={24} />
          </div>
          <span>
            We are growing fast! Today crafto has <a href="#" className="border-b-2 border-gray-900 pb-0.5 hover:text-[#00b15e] hover:border-[#00b15e] transition-colors">36k+ active residents.</a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
