"use client";

import { motion } from "framer-motion";

export default function PropertyCTA() {
  return (
    <section className="py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#262b35] text-3xl lg:text-5xl font-bold tracking-tight text-center md:text-left"
          >
            1M+ property ready to <span className="underline decoration-[#00b15e] decoration-2 underline-offset-8">buying and selling.</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 px-8 py-4 rounded-full border border-gray-200 hover:border-[#262b35] hover:bg-[#262b35] hover:text-white transition-all group"
          >
            <span className="text-gray-400 group-hover:text-gray-300 font-medium">Say hello!</span>
            <span className="text-2xl">👋</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
