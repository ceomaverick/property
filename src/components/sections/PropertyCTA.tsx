"use client";

import { motion } from "framer-motion";

export default function PropertyCTA() {
  return (
    <section className="pb-12 pt-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-8"
        >
          <p className="text-lg lg:text-xl font-bold text-[#232323] tracking-tight text-center">
            1M+ property ready to <a href="#" className="border-b-2 border-gray-900 pb-0.5 hover:text-[#00b15e] hover:border-[#00b15e] transition-colors underline decoration-gray-900 underline-offset-[8px]">buying and selling.</a>
          </p>
          
          <button className="flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all group">
            <span className="text-base lg:text-lg font-bold text-[#232323]">Say Hello!</span>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e6f7ef] rounded-full flex items-center justify-center group-hover:bg-[#00b15e] transition-colors">
               <span className="text-lg lg:text-xl animate-bounce">👋</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
