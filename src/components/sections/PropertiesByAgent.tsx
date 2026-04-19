"use client";

import Image from "next/image";
import { Bed, Bath, Move } from "lucide-react";
import { motion } from "framer-motion";
import { properties, Agent } from "@/constants/properties";

interface PropertiesByAgentProps {
  agent: Agent;
}

export default function PropertiesByAgent({ agent }: PropertiesByAgentProps) {
  const agentProperties = properties.filter(prop => prop.agentId === agent.id);

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#262b35] tracking-tight">
            Properties by <span className="relative inline-block px-1">
              <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
              <span className="relative">{agent.name.split(' ')[0]}</span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        {agentProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentProperties.map((prop, index) => (
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
                    alt={prop.name} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105"
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
            <p className="text-gray-400 font-medium">No properties currently listed by {agent.name}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
