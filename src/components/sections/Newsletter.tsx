"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="pt-16 pb-0 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Green Newsletter Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#00b15e] rounded-[20px] p-10 lg:p-20 mb-0"
        >
          {/* Decorative Dashed Lines clipped to the box */}
          <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none opacity-10">
             <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50 200C100 100 300 300 500 200C700 100 900 300 1050 200" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
                <path d="M-50 150C150 50 350 250 550 150C750 50 950 250 1150 150" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
             </svg>
          </div>

          {/* Floating Paper Plane Image - Now fully visible outside the box */}
          <div className="absolute -top-10 lg:-top-14 right-10 lg:right-20 pointer-events-none z-30">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-24 h-24 lg:w-28 lg:h-28"
            >
               <Image 
                 src="/newsletter-airplane.webp" 
                 alt="Paper airplane illustration representing newsletter subscription" 
                 fill 
                 className="object-contain"
               />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side text */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4 tracking-tight">
                Subscribe to <span className="relative inline-block">
                  newsletter
                  <span className="absolute bottom-1 left-0 w-full h-[12px] bg-white/20 -z-10" />
                </span>
              </h2>
              <p className="text-white/90 text-lg lg:text-xl font-medium">
                Social media its ways of our excellence.
              </p>
            </div>

            {/* Right side form */}
            <div className="w-full lg:max-w-md">
              <form 
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-xl p-2 flex items-center shadow-2xl"
              >
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="flex-1 px-6 py-4 outline-none text-[#232323] text-lg font-medium placeholder:text-gray-400"
                />
                <button 
                  type="submit"
                  className="bg-white text-[#232323] hover:text-[#00b15e] px-6 py-4 rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all group"
                >
                  <Mail size={18} className="text-[#00b15e]" />
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
