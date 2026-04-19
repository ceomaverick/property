"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "The future of residential real estate in 2024",
    tag: "Residential",
    date: "24 Oct 2024",
    image: "/ranch-style-home-illinois.jpg",
    link: "#"
  },
  {
    title: "10 tips for first-time commercial property buyers",
    tag: "Commercial",
    date: "18 Oct 2024",
    image: "/modern-villa-denver-colorado.jpg",
    link: "#"
  },
  {
    title: "Why luxury apartments are the best investment",
    tag: "Residential",
    date: "12 Oct 2024",
    image: "/luxury-villa-rochester-texas.jpg",
    link: "#"
  },
  {
    title: "Market trends: How to value your office space",
    tag: "Commercial",
    date: "05 Oct 2024",
    image: "/hampton-meadows-ranch-florida.jpg",
    link: "#"
  }
];

export default function BlogGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#00b15e] font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              Our Blog
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#262b35] text-4xl md:text-5xl font-bold leading-tight"
            >
              Latest news in <span className="relative inline-block px-1">
                <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                <span className="relative">real estate</span>
              </span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#262b35] font-bold uppercase tracking-widest text-xs border-b-2 border-gray-100 pb-2 hover:border-[#00b15e] transition-colors group"
          >
            Explore all news
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#262b35] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {post.tag}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Calendar size={14} className="text-[#00b15e]" />
                {post.date}
              </div>
              
              <h3 className="text-[#262b35] text-xl font-bold leading-snug group-hover:text-[#00b15e] transition-colors mb-4">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-2 text-[#00b15e] font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight size={12} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
