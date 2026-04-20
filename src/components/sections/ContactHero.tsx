"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Smile, Mail as MailIcon, Phone as PhoneIcon, MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[400px] lg:h-[550px] w-full overflow-hidden">
        <Image
          src="/contact-hero.webp"
          alt="Contact us for your real estate journey - Crafto Real Estate"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Outline Text "contact" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 
            className="text-[120px] lg:text-[300px] font-bold uppercase select-none opacity-40 translate-y-10 lg:translate-y-20"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px white',
            }}
          >
            contact
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-32 lg:-mt-48 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Addresses */}
          <div className="w-full lg:w-1/2 lg:pt-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* London */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#262b35] text-2xl font-bold mb-6">London</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#262b35] font-bold text-sm mb-2 uppercase tracking-wider">Crafto - UK</p>
                    <p className="text-gray-500 leading-relaxed">
                      401 Broadway, 24th Floor,<br />
                      Orchard View, London, UK
                    </p>
                  </div>
                  <div>
                    <p className="text-[#262b35] font-bold text-sm mb-2 uppercase tracking-wider">Get in touch</p>
                    <p className="text-gray-500">+1 234 567 8910</p>
                    <a href="mailto:info@domain.com" className="text-[#262b35] font-medium border-b border-[#262b35] hover:text-[#00b15e] hover:border-[#00b15e] transition-colors">
                      info@domain.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* New York */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-[#262b35] text-2xl font-bold mb-6">New York</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#262b35] font-bold text-sm mb-2 uppercase tracking-wider">Crafto - USA</p>
                    <p className="text-gray-500 leading-relaxed">
                      27 Eden Walk Eden Centre,<br />
                      Orchard, New York, USA
                    </p>
                  </div>
                  <div>
                    <p className="text-[#262b35] font-bold text-sm mb-2 uppercase tracking-wider">Get in touch</p>
                    <p className="text-gray-500">+1 234 567 8910</p>
                    <a href="mailto:info@domain.com" className="text-[#262b35] font-medium border-b border-[#262b35] hover:text-[#00b15e] hover:border-[#00b15e] transition-colors">
                      info@domain.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="w-full lg:w-1/2 lg:-mt-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-[#262b35] text-4xl lg:text-5xl font-bold mb-12">How can help you?</h2>
              
              <form className="space-y-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Your name*" 
                    className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#262b35] outline-none transition-colors placeholder:text-gray-400"
                  />
                  <Smile size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#262b35] transition-colors" />
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Your email address*" 
                    className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#262b35] outline-none transition-colors placeholder:text-gray-400"
                  />
                  <MailIcon size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#262b35] transition-colors" />
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    placeholder="Your phone" 
                    className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#262b35] outline-none transition-colors placeholder:text-gray-400"
                  />
                  <PhoneIcon size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#262b35] transition-colors" />
                </div>

                <div className="relative group">
                  <textarea 
                    placeholder="Your message" 
                    rows={4}
                    className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-[#262b35] outline-none transition-colors resize-none placeholder:text-gray-400"
                  ></textarea>
                  <MessageSquare size={18} className="absolute right-0 top-6 text-gray-300 group-focus-within:text-[#262b35] transition-colors" />
                </div>

                <button 
                  type="submit"
                  className="bg-[#5ab450] text-white px-10 py-4 rounded font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#4a9a41] transition-colors"
                >
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
