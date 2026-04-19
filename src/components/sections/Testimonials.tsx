"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Alexander harvard",
    role: "harvard",
    content: "Love the theme, really neat and super easy to use. But the customer support is what makes this an even greater theme! ThemeZaa solved all the problems. I had with my custom settings.",
    avatar: "/jeremy-dupont-real-estate-director.jpg",
    rating: 5
  },
  {
    name: "Shoko Itoh",
    role: "Investor",
    content: "As an investor, I need reliable data and quick responses. This platform provided everything I needed to make informed decisions for my portfolio.",
    avatar: "/jessica-kerr-real-estate-manager.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Animated Background Quotation Marks */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-5%] left-[-2%] text-[400px] leading-none font-bold text-gray-200/40 select-none z-0"
      >
        &ldquo;
      </motion.div>
      
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          rotate: [0, -20, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-10%] right-[5%] text-[450px] leading-none font-bold text-[#00b15e]/10 select-none z-0"
      >
        &ldquo;
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, -60, 0],
          x: [0, 40, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[35%] right-[10%] text-[300px] leading-none font-bold text-gray-200/25 select-none z-0"
      >
        &ldquo;
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Image and Trustpilot Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative pr-12 lg:pr-0"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <Image 
                src="/happy-couple-new-home-celebration.jpg" 
                alt="Happy couple celebrating their new home purchase" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Trustpilot Card */}
            <div className="absolute bottom-10 left-10 w-64 bg-white rounded-lg shadow-2xl overflow-hidden z-20">
              <div className="p-6 text-center">
                <span className="text-5xl font-bold text-[#262b35] block mb-2">4.8</span>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-[#262b35] font-bold text-sm mb-4">2488 Reviews</p>
                <div className="bg-[#00b15e] text-white text-[10px] font-bold py-1.5 px-4 rounded-full inline-block uppercase tracking-wider mb-2">
                  EXCELLENT SCORE
                </div>
              </div>
              <div className="bg-[#262b35] p-4 flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-white fill-white" />
                <span className="text-white font-bold text-lg tracking-tight">Trustpilot</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#00b15e] font-medium text-lg mb-4 block"
            >
              Clients feedback
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#262b35] text-4xl md:text-6xl font-bold mb-10 leading-[1.1]"
            >
              Here is what our <br />
              <span className="relative inline-block px-1">
                <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                <span className="relative">client's</span>
              </span> have to say
            </motion.h2>

            <div className="relative h-[200px] md:h-[150px] mb-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-500 text-lg leading-relaxed absolute top-0 left-0"
                >
                  {testimonials[currentIndex].content}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 mb-12"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image 
                  src={testimonials[currentIndex].avatar}
                  alt={`Client testimonial avatar: ${testimonials[currentIndex].name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[#262b35] font-bold text-xl mb-1">
                                  {testimonials[currentIndex].name} <span className="font-normal text-gray-400 text-lg ml-1">{testimonials[currentIndex].role}</span>
                                </h3>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#262b35] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#262b35] hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
