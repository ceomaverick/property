"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "APARTMENT",
    count: "20K",
    icon: "/demo-real-estate-icon-apartment.svg",
  },
  {
    name: "CONDOMINIUM",
    count: "18K",
    icon: "/demo-real-estate-icon-condominium.svg",
  },
  {
    name: "HOME",
    count: "22K",
    icon: "/demo-real-estate-icon-home.svg",
  },
  {
    name: "OFFICE",
    count: "09K",
    icon: "/demo-real-estate-icon-office.svg",
  },
  {
    name: "SHOP",
    count: "20K",
    icon: "/demo-real-estate-icon-shop.svg",
  }
];

export default function CategoryNav() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Headline Tile */}
          <div className="flex-1 min-w-[280px] p-10 lg:p-12 flex items-center border-r border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              What are you <br /> 
              <span className="relative inline-block">
                looking
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#00b15e]/20 -z-10"></span>
              </span> for?
            </h2>
          </div>

          {/* Category Tiles */}
          <div className="flex-[3] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, index) => (
              <Link 
                key={cat.name} 
                href={`/properties?type=${cat.name.toLowerCase()}`}
                className="group relative p-8 lg:p-10 flex flex-col items-center justify-center border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors"
              >
                {/* Count Badge */}
                <div className="absolute top-6 left-6 px-1.5 py-0.5 bg-[#e6f7ef] text-[#00b15e] text-[10px] font-bold rounded-sm">
                  {cat.count}
                </div>

                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={cat.icon} 
                    alt={`${cat.name} real estate category icon`} 
                    width={48} 
                    height={48} 
                    className="opacity-90"
                  />
                </div>

                {/* Name */}
                <span className="text-[11px] font-bold text-gray-900 tracking-widest uppercase">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
