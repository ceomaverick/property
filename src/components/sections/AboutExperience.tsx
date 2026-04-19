"use client";

import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutExperience() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image side with Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Circle */}
            <div className="absolute top-[15%] left-[10%] w-[75%] aspect-square bg-[#e6f7ef] rounded-full -z-10" />
            
            <div className="relative">
              <Image 
                src="/real-estate-agent-client-experience.webp" 
                alt="Professional real estate agent representing Crafto experience" 
                width={600} 
                height={700} 
                className="w-full h-auto object-contain"
                priority
              />
              
              {/* Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white p-6 lg:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-[160px] lg:w-[190px] overflow-hidden"
              >
                <div className="relative">
                  {/* Green Circle Shape */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 lg:w-32 lg:h-32 bg-[#00b15e] rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="text-[50px] lg:text-[65px] font-black text-white leading-none mb-6 ml-0.5 mt-0.5">15</div>
                    <div className="text-[18px] lg:text-[21px] font-bold text-[#232323] leading-tight">
                      Years of <br /> experience.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#00b15e] font-bold text-sm lg:text-base mb-6">
                Online property marketplace
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#232323] leading-[1.15] mb-8">
                We help you find <br /> your <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-[12px] bg-[#00b15e]/20" />
                  new place.
                </span>
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
                Online property marketplace to buy, sell, and rent residential and commercial properties. Used by millions of renters to find property.
              </p>

              {/* Trust Badge Box */}
              <div className="inline-flex items-center gap-4 px-8 py-6 border border-gray-100 rounded-xl mb-6 shadow-sm">
                <div className="w-12 h-12 bg-[#e6f7ef] rounded-full flex items-center justify-center text-[#00b15e]">
                  <Users size={24} />
                </div>
                <span className="text-lg font-bold text-[#232323]">10,000+ people trusting agency.</span>
              </div>

              <p className="text-sm text-gray-400 font-medium">
                Our selection of the best <a href="#" className="text-[#232323] border-b-2 border-gray-900 pb-0.5 hover:text-[#00b15e] hover:border-[#00b15e] transition-colors">luxury property listings</a> around the world and pick yours.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <button className="h-14 px-10 bg-[#232323] text-white font-bold text-[13px] uppercase tracking-wider rounded-md hover:bg-[#00b15e] transition-all">
                Trusted agents
              </button>
              <button className="flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider text-[#232323] hover:text-[#00b15e] transition-all group">
                Find property
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
