"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUsps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image 
                src="/trophy-quality-icon.png" 
                alt="Award trophy icon representing our quality work" 
                fill 
                className="object-contain"
              />
            </div>
            <h4 className="text-[#262b35] text-2xl lg:text-3xl font-bold tracking-tight">your work.</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image 
                src="/handshake-commitment-icon.png" 
                alt="Handshake icon representing our promises and commitment" 
                fill 
                className="object-contain"
              />
            </div>
            <h4 className="text-[#262b35] text-2xl lg:text-3xl font-bold tracking-tight">your promises.</h4>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
