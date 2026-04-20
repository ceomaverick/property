"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Usps() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content Side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6f7ef] text-[#00b15e] rounded-full mb-8">
                <span className="text-[11px] font-black uppercase tracking-widest">Why choose us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#262b35] tracking-tight leading-[1.1]">
                Accurate to 99% of a <span className="relative inline-block px-1">
                  <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                  <span className="relative">property's</span>
                </span> details.
              </h2>
            </motion.div>

            {/* Feature Callouts */}
            <div className="space-y-10 md:max-w-[70%]">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                   <Image src="/trophy-quality-icon.png" alt="Star rating icon for appreciated projects" width={36} height={36} />
                </div>
                <div>
                  <h3 className="font-bold text-[#262b35] text-xl mb-1">Most appreciated projects</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Browse millions of properties in your city save your favorites.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                   <Image src="/handshake-commitment-icon.png" alt="Home rental icon for high income projects" width={36} height={36} />
                </div>
                <div>
                  <h3 className="font-bold text-[#262b35] text-xl mb-1">Highest rental income projects</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Browse millions of properties in your city save your favorites.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <button className="h-14 px-10 bg-[#262b35] text-white font-bold rounded-md hover:bg-[#00b15e] transition-all flex items-center gap-2 group">
                About company
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-[#262b35] hover:text-[#00b15e] transition-colors group">
                Trusted agents
                <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#00b15e] group-hover:border-[#00b15e] group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden">
              <Image 
                src="/luxury-living-room-interior-design.jpg" 
                alt="Luxury modern living room interior design" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* TrustScore Badge Overlay - Positioned near right bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-10 right-10 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 max-w-[280px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1 text-[#f39c12]">
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" className="opacity-30" />
                   </div>
                   <span className="font-black text-[#262b35] text-2xl">4.9</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-[#262b35] text-lg">TrustScore</span>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                    Based on 1,500+ <br /> customer reviews
                  </p>
                </div>
                <Image src="/trustpilot-customer-reviews-logo.svg" alt="Trustpilot rating logo" width={100} height={30} className="pt-2 opacity-80" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
