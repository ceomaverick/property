"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const cities = [
  {
    name: "Washington",
    country: "USA",
    count: "17",
    image: "/ranch-style-home-illinois.jpg",
    badge: "Verified"
  },
  {
    name: "Paris",
    country: "France",
    count: "20",
    image: "/modern-villa-denver-colorado.jpg",
    badge: "Trusted"
  },
  {
    name: "Chicago",
    country: "USA",
    count: "45",
    image: "/luxury-villa-rochester-texas.jpg",
    badge: "Verified"
  },
  {
    name: "San Francisco",
    country: "USA",
    count: "45",
    image: "/hampton-meadows-ranch-florida.jpg",
    badge: "Trusted"
  }
];

export default function CityCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#262b35] tracking-tight">
              Explore available <span className="relative inline-block px-1">
                <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                <span className="relative">cities locations</span>
              </span>
            </h2>
          </div>
          
          {/* Custom Navigation */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[#262b35] hover:bg-[#00b15e] hover:border-[#00b15e] hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[#262b35] hover:bg-[#00b15e] hover:border-[#00b15e] hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-start"
            >
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src={city.image} 
                  alt={`Real estate property listings in ${city.name}, ${city.country}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                   <BadgeCheck size={14} className="text-[#00b15e]" />
                   {city.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-10 left-10 right-10 text-white">
                   <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 mb-2 block">{city.country}</span>
                   <h3 className="text-3xl font-bold mb-6">{city.name}</h3>
                   
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                         <span className="text-2xl font-black">{city.count}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-white">Listings</span>
                      </div>
                      
                      <Link href={`/properties?city=${city.name.toLowerCase()}`} className="w-12 h-12 bg-white text-[#262b35] rounded-full flex items-center justify-center hover:bg-[#00b15e] hover:text-white transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300">
                         <ArrowRight size={20} />
                      </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global All Properties Link */}
        <div className="text-center mt-12">
            <Link href="/properties" className="inline-flex items-center gap-2 text-[#262b35] font-bold hover:text-[#00b15e] transition-colors group">
                <span className="border-b-2 border-gray-200 group-hover:border-[#00b15e]">View all properties</span>
                <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
}
