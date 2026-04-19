"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogGrid from "@/components/sections/BlogGrid";
import Newsletter from "@/components/sections/Newsletter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Refined Editorial Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-[#262b35] overflow-hidden">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/luxury-living-room-interior-design.jpg" 
            alt="Premium Interior Design" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262b35] via-[#262b35]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb style tag */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#00b15e] font-bold text-[11px] uppercase tracking-[0.3em]">Home</span>
                <ChevronRight size={12} className="text-white/20" />
                <span className="text-white/40 font-bold text-[11px] uppercase tracking-[0.3em]">Our Journal</span>
              </div>

              <h1 className="text-white text-5xl lg:text-[100px] font-normal leading-tight tracking-[-2px] mb-12">
                Latest <br />
                <span className="font-bold text-[#00b15e]">Insights.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-md font-medium">
                  Discover the latest trends in luxury living, market analysis, and expert real estate advice from our seasoned professionals.
                </p>
                <div className="h-[1px] flex-1 bg-white/10 hidden lg:block" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                    <ArrowRight size={20} className="rotate-45" />
                  </div>
                  <span className="text-white font-bold text-xs uppercase tracking-widest opacity-60">Scroll to explore</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Watermark */}
        <div className="absolute bottom-[-5%] right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter">Journal</h2>
        </div>
      </section>

      <BlogGrid />
      
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <button className="h-16 px-12 bg-[#262b35] text-white font-bold text-[13px] uppercase tracking-widest rounded-sm hover:bg-[#00b15e] transition-all shadow-xl">
            Load more articles
          </button>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
