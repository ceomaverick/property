"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative h-[500px] lg:h-[750px] w-full overflow-hidden">
        <Image
          src="/luxury-living-room-interior-design.jpg"
          alt="Luxury living room interior design journal and insights"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Outline Text "Latest Insights" */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="block text-[#00b15e] font-bold text-xs lg:text-sm uppercase tracking-[0.5em] mb-8">
              Our Journal
            </span>
            <h1 
              className="text-[60px] md:text-[120px] lg:text-[180px] font-black uppercase leading-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px white',
              }}
            >
              Latest<br />Insights
            </h1>
          </motion.div>
        </div>

        {/* Decorative Scroll Down */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
