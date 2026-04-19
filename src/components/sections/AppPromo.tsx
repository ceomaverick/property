"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Search, Heart, MapPin, Menu, User, Bell, Home, Filter } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart search",
    desc: "Find the best properties in your favorite location."
  },
  {
    icon: ShieldCheck,
    title: "Verified listings",
    desc: "Every property is manually verified for security."
  },
  {
    icon: Smartphone,
    title: "Instant alerts",
    desc: "Get notified as soon as a new property is listed."
  }
];

const MobileAppUI = ({ type }: { type: 'home' | 'search' }) => {
  return (
    <div className="bg-[#f8f9fa] h-full w-full flex flex-col font-sans select-none overflow-hidden relative">
      {/* Top Bar / Status Bar Placeholder */}
      <div className="h-8 flex justify-between items-center px-6 pt-2">
        <span className="text-[10px] font-bold text-[#262b35]">9:41</span>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#262b35]/20" />
          <div className="w-3 h-3 rounded-full bg-[#262b35]/20" />
        </div>
      </div>

      {/* App Header */}
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="relative w-24 h-6">
          <Image src="/crafto-real-estate-logo-black.svg" alt="Crafto Real Estate mobile app logo" fill className="object-contain object-left" />
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
            <Bell size={14} className="text-[#262b35]" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#00b15e]/10 flex items-center justify-center overflow-hidden border border-[#00b15e]/20">
            <Image src="/jeremy-dupont-real-estate-director.jpg" alt="Active user profile avatar" width={32} height={32} className="object-cover" />
          </div>
        </div>
      </div>

      {type === 'home' ? (
        <div className="px-6 pt-2 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-[#262b35] mb-4">Find your <br/>dream <span className="text-[#00b15e]">home</span></h3>
          
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <div className="w-full bg-white rounded-2xl py-3.5 pl-11 pr-4 text-[10px] text-gray-400 border border-gray-100 shadow-sm flex items-center justify-between">
              <span>Search location...</span>
              <Filter size={14} className="text-[#00b15e]" />
            </div>
          </div>

          <div className="flex gap-3 mb-6 overflow-x-hidden">
            {['All', 'Villa', 'House', 'Office'].map((cat, i) => (
              <div key={i} className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-colors whitespace-nowrap ${i === 0 ? 'bg-[#00b15e] text-white' : 'bg-white text-[#262b35] border border-gray-100'}`}>
                {cat}
              </div>
            ))}
          </div>

          <div className="flex-1 relative rounded-2xl overflow-hidden mb-6 group shadow-lg">
            <Image src="/ranch-style-home-illinois.jpg" alt="Featured ranch style property mockup in Chicago" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Heart size={14} />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1 opacity-80 mb-1">
                <MapPin size={10} />
                <span className="text-[8px] font-medium">Chicago, USA</span>
              </div>
              <p className="font-bold text-sm mb-0.5">$6,00,000</p>
              <p className="text-[9px] opacity-70">Ranch style in Illinois</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 pt-2 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-[#262b35]">Recommended</h3>
            <span className="text-[10px] text-[#00b15e] font-bold">See all</span>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 2, image: "/modern-villa-denver-colorado.jpg" },
              { id: 3, image: "/luxury-villa-rochester-texas.jpg" },
              { id: 5, image: "/hampton-meadows-ranch-florida.jpg" }
            ].map((prop, i) => (
              <div key={prop.id} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={prop.image} alt="Recommended property listing thumbnail" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8px] font-black text-[#00b15e] uppercase tracking-wider mb-1">Verified</span>
                  <p className="text-xs font-bold text-[#262b35] mb-1">Luxury Villa</p>
                  <p className="text-[9px] text-gray-400 mb-2">Rochester, NY</p>
                  <p className="text-xs font-black text-[#00b15e]">$8,50,000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center mt-auto">
        <Home size={18} className="text-[#00b15e]" />
        <Search size={18} className="text-gray-300" />
        <div className="w-10 h-10 bg-[#262b35] rounded-full flex items-center justify-center -mt-8 shadow-xl border-4 border-[#f8f9fa]">
          <MapPin size={18} className="text-white" />
        </div>
        <Heart size={18} className="text-gray-300" />
        <User size={18} className="text-gray-300" />
      </div>
    </div>
  );
};

export default function AppPromo() {
  return (
    <section className="py-24 bg-[#f4faf7] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] overflow-hidden relative min-h-[700px] flex items-center shadow-[0_40px_100px_rgba(0,111,59,0.08)] border border-gray-100">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00b15e]/5 skew-x-[-20deg] translate-x-1/4 pointer-events-none z-0" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00b15e]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10 p-8 md:p-16 lg:p-24">
            
            {/* Left Column: Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b15e]/10 text-[#00b15e] rounded-full mb-8">
                  <Smartphone size={16} />
                  <span className="text-[11px] font-black uppercase tracking-widest">Mobile app available</span>
                </div>

                <h2 className="text-[#262b35] text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
                  The most trusted real estate <span className="relative inline-block px-1">
                    <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                    <span className="relative">mobile app.</span>
                  </span>
                </h2>

                <div className="space-y-8 mb-12">
                  {features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-5"
                    >
                      <div className="w-12 h-12 bg-[#f4faf7] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#00b15e]">
                        <feature.icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-[#262b35] font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-5">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-[#262b35] px-8 py-4 rounded-2xl group transition-all"
                  >
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-97.3-83-97.7-141.8zm-57.3-154.4c17.1-20.7 28.5-49.4 25.3-78.1-24.8 1-54.9 16.5-72.7 37.2-15.8 18.3-29.6 47.7-25.7 75.3 27.6 2.1 56-13.8 73.1-34.4z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest leading-none mb-1">Download on</p>
                      <p className="text-white font-black text-xl leading-none">App Store</p>
                    </div>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-[#00b15e] px-8 py-4 rounded-2xl group transition-all"
                  >
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none mb-1">Get it on</p>
                      <p className="text-white font-black text-xl leading-none">Google Play</p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High Fidelity Custom Mockups */}
            <div className="relative h-[600px] lg:h-[750px] w-full flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
              
              {/* Device 1: Home Screen */}
              <motion.div
                initial={{ opacity: 0, y: 100, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-[5%] bottom-0 w-[280px] h-[580px] z-10"
              >
                <div className="relative w-full h-full shadow-[0_50px_100px_rgba(0,111,59,0.15)] rounded-[3.5rem] overflow-hidden border-[10px] border-[#262b35] bg-white">
                  <MobileAppUI type="home" />
                </div>
              </motion.div>

              {/* Device 2: Search/Recommended Screen */}
              <motion.div
                initial={{ opacity: 0, y: 150, rotate: 15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute right-[5%] top-0 w-[280px] h-[580px] z-20"
              >
                <div className="relative w-full h-full shadow-[0_50px_100px_rgba(0,111,59,0.15)] rounded-[3.5rem] overflow-hidden border-[10px] border-[#262b35] bg-white">
                  <MobileAppUI type="search" />
                </div>
              </motion.div>

              {/* Central Floating Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-[2rem] shadow-[0_25px_60px_rgba(0,111,59,0.2)] z-30 flex items-center gap-4 border border-gray-100 whitespace-nowrap"
              >
                <div className="w-14 h-14 bg-[#00b15e] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Smartphone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00b15e] mb-1">Interactive</p>
                  <p className="text-[#262b35] font-black text-lg">Smart Real Estate</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
