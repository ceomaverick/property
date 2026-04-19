"use client";

import Image from "next/image";
import { Phone, Mail, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Agent } from "@/constants/properties";

interface AgentHeroProps {
  agent: Agent;
}

export default function AgentHero({ agent }: AgentHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#f8f9fa]">
      {/* Background Watermark */}
      <div className="absolute bottom-[-5%] left-[20%] select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[300px] font-black leading-none">agents</h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[500px]"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src={agent.image} 
                alt={agent.name} 
                fill 
                className="object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-6 right-6 bg-[#ffc107] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Star size={14} fill="currentColor" className="text-[#262b35]" />
                <span className="text-sm font-black text-[#262b35]">{agent.rating}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-[#262b35] mb-8 leading-tight">
              {agent.name}
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl">
              {agent.experience}
            </p>

            <div className="h-[1px] w-full bg-gray-200 mb-10"></div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#262b35]">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <p className="text-lg font-bold text-[#262b35]">{agent.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-[#262b35]">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">Email address</p>
                  <p className="text-lg font-bold text-[#262b35]">{agent.email}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 bg-[#00b15e] text-white px-8 py-5 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-[#008f4c] transition-all group">
              Contact with agent
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
