"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to horizontal movement
  // Moves from right to left as you scroll down
  // Starting shifted to the right
  const xMovement = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={containerRef} className="pt-16 lg:pt-24 pb-0 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[#00b15e] font-bold text-[13px] uppercase tracking-[0.2em] mb-6">
              About crafto real estate
            </span>
            <h1 className="text-4xl lg:text-[64px] font-bold text-[#232323] leading-[1.1] tracking-[-0.03em]">
              Welcome to crafto real estate business.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:pb-4"
          >
            <div className="pl-10 border-l-2 border-[#00b15e]">
              <p className="text-gray-500 text-lg lg:text-[19px] leading-[1.7] font-medium">
                Online property marketplace to buy, sell, and rent residential and commercial properties. Used by millions of renters to find property.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edge-to-Edge Image with Overlay Text */}
      <div className="relative w-full aspect-[16/8] lg:aspect-[21/7] overflow-hidden">
        <Image
          src="/crafto-office-building-about-hero.webp"
          alt="Crafto Real Estate office building architecture"
          fill
          className="object-cover"
          priority
          // @ts-ignore
          fetchPriority="high"
        />
        
        {/* Animated Hollow Text "about crafto" - Positioned at bottom */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none overflow-hidden translate-y-[10%]">
          <motion.h2 
            style={{ 
              x: xMovement,
              WebkitTextStroke: '1.2px rgba(255,255,255,0.6)' 
            }}
            className="text-[12vw] font-black text-transparent uppercase leading-none tracking-[-0.01em] whitespace-nowrap select-none"
          >
            about crafto
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
