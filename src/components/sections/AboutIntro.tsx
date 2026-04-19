"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Users, House } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden z-10">
              <Image 
                src="/modern-villa-exterior-view.jpg" 
                alt="Luxury modern house exterior architecture" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Ornament / Background shape */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#e6f7ef] rounded-full -z-0 blur-3xl opacity-60"></div>
            
            {/* Property Count Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-0 right-0 bg-[#00b15e] p-8 md:p-10 rounded-tl-3xl text-white shadow-2xl z-20"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <House size={28} />
                </div>
                <div>
                  <span className="block text-3xl font-black leading-none mb-1">258,952+</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest opacity-90 leading-tight">Properties listed <br /> for sell</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6f7ef] text-[#00b15e] rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b15e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b15e]"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest">Online property marketplace</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                We help you find <br /> your <span className="relative inline-block px-1">
                  <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                  <span className="relative">new place</span>
                </span>
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We are a real estate firm with over 10 years of expertise, specializing in luxury properties. Our mission is to simplify the journey of finding your perfect home through transparency and personalized service.
              </p>
            </motion.div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#00b15e] flex-shrink-0">
                   <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">10,000+ Clients</h4>
                  <p className="text-gray-500 text-sm">Trusted by families worldwide for their housing needs.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#00b15e] flex-shrink-0">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Certified Agents</h4>
                  <p className="text-gray-500 text-sm">Our agents are licensed experts in the local market.</p>
                </div>
              </motion.div>
            </div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <button className="h-14 px-10 bg-[#00b15e] text-white font-bold rounded-md hover:bg-[#00924e] transition-all flex items-center gap-2 group">
                Learn about our company
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="h-14 px-10 border-2 border-gray-100 text-gray-900 font-bold rounded-md hover:border-[#00b15e] hover:text-[#00b15e] transition-all">
                Browse properties
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
