"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Newsletter from "@/components/sections/Newsletter";
import ContactSection from "@/components/sections/ContactSection";
import { MapPin, Phone, Mail, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Immersive Full-Width Contact Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center bg-[#f8f9fa] overflow-hidden">
        {/* Background Image - Half Width on Desktop */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
          <Image 
            src="/crafto-office-building-about-hero.webp" 
            alt="Crafto Headquarters" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/40 lg:via-[#f8f9fa]/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#262b35]/10 z-0" />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 mb-12">
                <span className="text-[#00b15e] font-bold text-[11px] uppercase tracking-[0.3em]">Home</span>
                <ChevronRight size={12} className="text-gray-300" />
                <span className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.3em]">Contact Us</span>
              </div>

              <h1 className="text-[#262b35] text-5xl lg:text-[100px] font-normal leading-tight tracking-[-2px] mb-12">
                Let's <br />
                <span className="font-bold text-[#00b15e]">Connect.</span>
              </h1>

              <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-xl mb-16 font-medium">
                We're here to help you navigate your real estate journey with expertise and personal care. Reach out to our team today.
              </p>

              {/* Floating Contact Cards - Minimalist Style */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-6 p-2 pr-8 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50">
                  <div className="w-14 h-14 bg-[#00b15e] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#00b15e]/20">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Call anytime</span>
                    <span className="text-base font-bold text-[#262b35]">123 456 7890</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-2 pr-8 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50">
                  <div className="w-14 h-14 bg-[#262b35] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#262b35]/20">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Email us</span>
                    <span className="text-base font-bold text-[#262b35]">info@property.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Side Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00b15e]/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      <ContactSection />
      
      {/* Clean Full-Width Map */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
               <div className="text-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center text-[#00b15e] mx-auto mb-6">
                    <MapPin size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-[#262b35] uppercase tracking-tighter">701 5th Ave, Seattle</h4>
                  <div className="mt-4 flex items-center justify-center gap-2 text-[#00b15e] font-bold text-xs uppercase tracking-widest">
                    Open in Google Maps <ArrowRight size={14} />
                  </div>
               </div>
            </div>
            {/* Map Overlays */}
            <div className="absolute inset-0 bg-[#262b35]/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
