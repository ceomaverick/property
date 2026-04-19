"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Move, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { properties } from "@/constants/properties";

interface LatestGridProps {
  category: "Apartment" | "Condominium" | "Home" | "Office" | "Shop";
  tag: "RENT" | "SELL";
}

export default function LatestGrid({ category, tag }: LatestGridProps) {
  const filteredProperties = properties.filter(
    (prop) => prop.type === category && prop.tag === tag
  );

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#262b35] tracking-tight">
            Latest <span className="relative inline-block px-1">
              <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
              <span className="relative">{category} for {tag.toLowerCase()}</span>
            </span>
          </h2>
          <Link href="/properties" className="group flex items-center gap-3 font-bold text-sm text-[#262b35] hover:text-[#00b15e] transition-colors">
            View all {category}
            <div className="w-10 h-10 rounded-full bg-[#262b35] text-white flex items-center justify-center group-hover:bg-[#00b15e] transition-all">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop, index) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image 
                    src={prop.image} 
                    alt={`${prop.name} - ${prop.location} real estate listing`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-[10px] font-black tracking-widest text-white ${prop.tag === 'SELL' ? 'bg-[#00b15e]' : 'bg-[#f39c12]'}`}>
                    {prop.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#262b35] mb-2">
                      {prop.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{prop.location}</p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-50">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Bed size={16} className="text-[#262b35] opacity-50" />
                        <span className="text-sm font-bold text-[#262b35]">{prop.beds}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Bedrooms</span>
                    </div>
                    <div className="flex flex-col gap-1 border-x border-gray-100 px-4">
                      <div className="flex items-center gap-2">
                        <Bath size={16} className="text-[#262b35] opacity-50" />
                        <span className="text-sm font-bold text-[#262b35]">{prop.baths}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Bathroom</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-4">
                      <div className="flex items-center gap-2">
                        <Move size={16} className="text-[#262b35] opacity-50" />
                        <span className="text-sm font-bold text-[#262b35]">{prop.sqft} sq ft</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap">Living area</span>
                    </div>
                  </div>

                  {/* Action + Price */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <button className="h-10 px-5 bg-[#262b35] text-white text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-[#00b15e] transition-colors">
                      View listing details
                    </button>
                    <span className="text-2xl font-bold text-[#262b35]">{prop.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No {category.toLowerCase()} listings found for {tag.toLowerCase()} at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
