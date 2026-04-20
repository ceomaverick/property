"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, ArrowRight, House, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const propertyTypes = [
  { name: "Apartment", count: "20k", icon: "/apartment-property-icon.svg" },
  { name: "Condominium", count: "18k", icon: "/condominium-property-icon.svg" },
  { name: "Home", count: "22k", icon: "/home-property-icon.svg" },
  { name: "Office", count: "09k", icon: "/office-property-icon.svg" },
  { name: "Shop", count: "20k", icon: "/shop-property-icon.svg" },
];

const agents = [
  { name: "Jeremy dupont", role: "Director", image: "/jeremy-dupont-real-estate-director.jpg" },
  { name: "Jessica kerr", role: "Manager", image: "/jessica-kerr-real-estate-manager.jpg" },
  { name: "Matthew taylor", role: "Agent", image: "/matthew-taylor-real-estate-agent.jpg" },
  { name: "John parker", role: "Agent", image: "/john-parker-real-estate-agent.jpg" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/crafto-real-estate-logo-black.svg" 
            alt="Property Real Estate Logo - Find your luxury dream home" 
            width={180} 
            height={42} 
            className="h-10 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-900 hover:text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors"
          >
            About
          </Link>

          {/* Rent Mega Dropdown */}
          <div
            className="relative h-20 flex items-center"
            onMouseEnter={() => setActiveDropdown("rent")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-900 hover:text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors cursor-pointer outline-none">
              Rent <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "rent" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "rent" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-xl p-8 grid grid-cols-5 gap-4 border-t-4 border-[#00b15e]"
                >
                  {propertyTypes.map((type) => (
                    <Link 
                      key={type.name} 
                      href={`/rent/${type.name.toLowerCase()}s`} 
                      className="flex flex-col items-center gap-4 group/item"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center transition-all group-hover/item:bg-[#e6f7ef]">
                        <Image src={type.icon} alt={`${type.name} property category icon`} width={32} height={32} className="opacity-70 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-gray-900 text-xs uppercase tracking-tight">{type.name}</span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase">{type.count} Listings</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sell Mega Dropdown */}
          <div
            className="relative h-20 flex items-center"
            onMouseEnter={() => setActiveDropdown("sell")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-2 text-[#ff5a5f] font-bold text-[14px] tracking-wide transition-colors cursor-pointer outline-none">
              Sell
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "sell" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "sell" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-xl p-8 grid grid-cols-5 gap-4 border-t-4 border-[#ff5a5f]"
                >
                  {propertyTypes.map((type) => (
                    <Link 
                      key={type.name} 
                      href={`/sell/${type.name.toLowerCase()}s`} 
                      className="flex flex-col items-center gap-4 group/item"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center transition-all group-hover/item:bg-[#fff0f0]">
                        <Image src={type.icon} alt={`${type.name} property category icon`} width={32} height={32} className="opacity-70 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-gray-900 text-xs uppercase tracking-tight">{type.name}</span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase">{type.count} Listings</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Agents Dropdown */}
          <div
            className="relative h-20 flex items-center"
            onMouseEnter={() => setActiveDropdown("agents")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-900 hover:text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors cursor-pointer outline-none">
              Agents <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "agents" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "agents" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-xl p-6 border-t-4 border-[#00b15e]"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {agents.map((agent) => (
                      <Link 
                        key={agent.name} 
                        href={`/agents/${agent.name.toLowerCase().replace(' ', '-')}`} 
                        className="flex items-center gap-4 group/agent"
                      >
                        <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0">
                          <Image src={agent.image} alt={`${agent.name} - Professional Real Estate ${agent.role}`} fill className="object-cover transition-transform group-hover/agent:scale-110" />
                        </div>
                        <div>
                          <span className="block font-bold text-gray-900 text-sm capitalize">{agent.name}</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{agent.role}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/blog"
            className="text-gray-900 hover:text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 hover:text-[#00b15e] font-bold text-[14px] tracking-wide transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="w-11 h-11 flex items-center justify-center rounded-full bg-[#e6f7ef] text-[#00b15e] transition-all hover:bg-[#00b15e] hover:text-white group">
            <Phone size={18} />
          </button>
          <button className="hidden sm:flex items-center gap-2 h-11 px-5 bg-[#00b15e] text-white font-bold text-[14px] rounded-md hover:bg-[#00924e] transition-all tracking-wide">
            Buy property
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
