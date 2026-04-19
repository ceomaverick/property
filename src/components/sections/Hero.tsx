"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Bed, Bath, Car, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/luxury-villa-mountain-view-boulder.jpg",
    location: "Valmont road, Boulder, CO 80301",
    name: "Saurate\nhouse",
    beds: 3, baths: 3, parking: 2, price: "$23,99,000"
  },
  {
    image: "/modern-mansion-park-avenue-new-york.jpg",
    location: "Park avenue, New York, NY 10021",
    name: "Luxurious\nmansion",
    beds: 4, baths: 2, parking: 1, price: "$18,50,000"
  },
  {
    image: "/woodland-modern-house-los-angeles.jpg",
    location: "Sunset blvd, Los Angeles, CA 90028",
    name: "Woodland\nmodern",
    beds: 5, baths: 4, parking: 3, price: "$35,00,000"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-gray-950 flex flex-col">
      {/* Background Image - stays absolute to fill the section */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-10%", opacity: 0 }}
          transition={{ 
            x: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.4, ease: "easeOut" } 
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].name.replace('\n', ' ')}
            fill
            className="object-cover object-center opacity-60"
            priority
            // @ts-ignore
            fetchPriority="high"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 flex flex-col flex-1 pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.3 } }
            }}
            className="max-w-4xl"
          >
            {/* 1. Address - Positioned on top, but animates after headline */}
            <motion.p
              variants={{
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } }
              }}
              className="text-white text-lg font-medium tracking-wide mb-4"
            >
              {slides[current].location}
            </motion.p>

            {/* 2. Headline - Animates first (0s delay) */}
            <h1 className="text-white text-4xl md:text-[6.875rem] font-normal leading-tight md:leading-[5.625rem] tracking-[-2px] mb-[45px]">
              <motion.span
                variants={{
                  initial: { y: 30, opacity: 0 },
                  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="block"
              >
                {slides[current].name.split('\n')[0]}
                <br />
                <span className="font-bold">{slides[current].name.split('\n')[1]}</span>
              </motion.span>
            </h1>

            {/* 3. Buttons - Final stagger */}
            <motion.div 
              variants={{
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 1.0, duration: 0.8, ease: "easeOut" } }
              }}
              className="flex items-center gap-8"
            >
              <button className="h-16 px-10 bg-white text-gray-900 font-bold rounded-sm hover:bg-[#00b15e] hover:text-white transition-all tracking-wider text-sm uppercase group">
                Schedule a house visit
              </button>
              <button className="text-white font-bold tracking-wider text-sm uppercase border-b-2 border-white/30 pb-1 hover:border-[#00b15e] hover:text-[#00b15e] transition-all">
                View details
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Right Side Group: Pagination + Stats Card */}
        <div className="absolute bottom-0 right-4 lg:right-24 flex flex-col items-end gap-6">
          {/* Pagination - Now right-aligned to the card */}
          <div className="flex items-center gap-8 text-white/40 font-black text-xs tracking-widest px-2">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`transition-all pb-1 border-b-2 ${current === i ? "text-white border-white" : "border-transparent hover:text-white"}`}
                >
                  0{i + 1}
                </button>
              ))}
              <div className="w-24 h-[1px] bg-white/20 relative hidden md:block">
                  <motion.div 
                    initial={false}
                    animate={{ left: `${(current / slides.length) * 100}%`, width: `${(1 / slides.length) * 100}%` }}
                    className="absolute top-0 h-full bg-white transition-all"
                  />
              </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            key={`card-${current}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-8 lg:p-12 rounded-t-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-12 lg:gap-20"
          >
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <Bed className="text-[#00b15e]" size={28} />
                <span className="text-gray-900 font-bold text-sm">{slides[current].beds} Beds</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bath className="text-[#00b15e]" size={28} />
                <span className="text-gray-900 font-bold text-sm">{slides[current].baths} Baths</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Car className="text-[#00b15e]" size={28} />
                <span className="text-gray-900 font-bold text-sm">{slides[current].parking} Parking</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">Selling Price</span>
              <span className="text-gray-900 text-4xl lg:text-5xl font-black tracking-tighter">
                {slides[current].price}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
