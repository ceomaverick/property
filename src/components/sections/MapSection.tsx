"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
      {/* Placeholder for the map - in a real app this would be a Google Map or Mapbox */}
      <div 
        className="absolute inset-0 grayscale opacity-50"
        style={{
          backgroundImage: 'url("https://maps.googleapis.com/maps/api/staticmap?center=-37.8172,144.9659&zoom=14&size=1920x600&scale=2&style=feature:all|element:all|saturation:-100|lightness:20&key=YOUR_API_KEY")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Fallback pattern if static map fails or no API key */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 lg:p-12 shadow-2xl max-w-sm w-full text-center relative"
        >
          {/* Green Marker Point */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00b15e] rotate-45" />
          
          <div className="relative z-10">
            <h3 className="text-[#262b35] text-xl font-bold mb-4 uppercase tracking-wider">Crafto Real Estate</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              16122 Collins street,<br />
              Melbourne, Australia
            </p>
            <button className="w-full bg-[#262b35] text-white py-4 rounded font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#00b15e] transition-colors">
              View Larger Map
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Marker on the map itself */}
      <div className="absolute left-[50.5%] top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-[#00b15e] rounded-full shadow-[0_0_0_8px_rgba(0,177,94,0.2)] animate-pulse" />
      </div>
    </section>
  );
}
