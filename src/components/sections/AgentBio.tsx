"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Agent } from "@/constants/properties";

interface AgentBioProps {
  agent: Agent;
}

export default function AgentBio({ agent }: AgentBioProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Biography & Details */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#262b35] mb-10">
                Agent - <span className="border-b-4 border-[#262b35]">Biography</span>
              </h2>
              
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-16">
                {agent.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Specialties Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-[#262b35] mb-8">Specialties and service areas</h3>
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  {/* Years Experience Badge */}
                  <div className="bg-[#262b35] text-white p-6 rounded-sm text-center min-w-[120px]">
                    <span className="block text-5xl font-black mb-1">{agent.yearsExp}</span>
                    <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">Years</span>
                  </div>
                  
                  {/* Specialties List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full">
                    {agent.specialties.map((specialty, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={18} className="text-[#00b15e]" />
                        <span className="text-gray-600 font-medium">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div>
                <h3 className="text-2xl font-bold text-[#262b35] mb-8">Awards and achievements</h3>
                <p className="text-gray-500 text-lg mb-8">
                  Recognized for excellence in the real estate industry, consistently delivering outstanding results and superior client service.
                </p>
                <div className="space-y-6">
                  {agent.awards.map((award, i) => (
                    <div key={i} className="pb-6 border-b border-gray-100 last:border-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <span className="text-gray-400 font-bold">{award.year}</span>
                        <span className="text-gray-700 font-bold">{award.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#262b35] rounded-xl p-10 text-white relative overflow-hidden"
            >
              <p className="text-lg leading-relaxed italic mb-10 relative z-10 opacity-90">
                "{agent.testimonial}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white/20">
                  <Image src={agent.image} alt={agent.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{agent.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#ffc107" className="text-[#ffc107]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#f8f9fa] rounded-xl p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#262b35] mb-8">How can we help you?</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your name*" 
                  className="w-full h-14 px-6 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#00b15e] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your email address*" 
                  className="w-full h-14 px-6 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#00b15e] transition-colors"
                />
                <textarea 
                  placeholder="Your message" 
                  className="w-full h-32 p-6 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#00b15e] transition-colors resize-none"
                ></textarea>
                <button className="w-full h-14 bg-[#00b15e] text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-[#008f4c] transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
