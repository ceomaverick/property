"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone size={24} />,
    title: "Phone Number",
    content: "123 456 7890",
    label: "Call us anytime"
  },
  {
    icon: <Mail size={24} />,
    title: "Email Address",
    content: "info@property.com",
    label: "Send us a message"
  },
  {
    icon: <MapPin size={24} />,
    title: "Office Location",
    content: "701 5th Ave, Seattle, WA",
    label: "Visit our office"
  },
  {
    icon: <Clock size={24} />,
    title: "Working Hours",
    content: "Mon - Sat: 9 AM - 6 PM",
    label: "Available for you"
  }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[#00b15e] font-bold text-xs uppercase tracking-[0.3em] mb-6">
                Contact Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#262b35] mb-10 leading-tight">
                Get in <span className="relative inline-block px-1">
                  <span className="absolute bottom-1 left-0 w-full h-[15px] bg-[#00b15e]/25"></span>
                  <span className="relative">touch</span>
                </span> with us today.
              </h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                Have questions about a property or want to discuss your real estate needs? Our expert team is here to help you every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 p-6 bg-[#f8f9fa] rounded-xl border border-gray-50 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#00b15e] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <h4 className="text-lg font-bold text-[#262b35]">{item.content}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#262b35] rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b15e] opacity-[0.05] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-10">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Full Name*</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Alexander harvard" 
                        className="w-full h-14 px-6 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:border-[#00b15e] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email Address*</label>
                      <input 
                        type="email" 
                        placeholder="e.g. info@domain.com" 
                        className="w-full h-14 px-6 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:border-[#00b15e] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Your Message*</label>
                    <textarea 
                      placeholder="Tell us what you are looking for..." 
                      className="w-full h-40 p-6 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:border-[#00b15e] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button className="inline-flex items-center gap-3 bg-[#00b15e] text-white px-10 py-5 rounded-md font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#008f4c] transition-all group">
                    Send Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
