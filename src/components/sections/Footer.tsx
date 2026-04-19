"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Users, MessageCircle, Share2 } from "lucide-react";

const socialIcons = [Globe, Users, MessageCircle, Share2];

const footerLinks = {
  company: [
    { label: "About agency", href: "#" },
    { label: "Our services", href: "#" },
    { label: "Working process", href: "#" },
    { label: "Contact us", href: "#" }
  ],
  resources: [
    { label: "Terms of use", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Cookie policy", href: "#" },
    { label: "Contact us", href: "#" }
  ],
  customer: [
    { label: "Support center", href: "#" },
    { label: "Market analysis", href: "#" },
    { label: "Real estate news", href: "#" },
    { label: "Help center", href: "#" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <Link href="/" className="inline-block">
              <Image 
                src="/crafto-real-estate-logo-black.svg" 
                alt="Property Real Estate - Luxury Homes and Modern Villas" 
                width={150} 
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Crafting unique real estate experiences since 1998. Your dream home is our mission.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#262b35] hover:bg-[#00b15e] hover:text-white transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[#262b35] font-bold text-lg mb-8 uppercase tracking-widest text-sm">Company</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#00b15e] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#262b35] font-bold text-lg mb-8 uppercase tracking-widest text-sm">Customer</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.customer.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#00b15e] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Say Hello */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[#262b35] font-bold text-lg mb-8 uppercase tracking-widest text-sm">Say Hello</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#00b15e] shrink-0" />
                <p className="text-gray-500 leading-relaxed">
                  290 Maryam lake, <br />
                  Boulder, Colorado, USA
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#00b15e] shrink-0" />
                <p className="text-gray-500 font-bold hover:text-[#00b15e] cursor-pointer transition-colors">
                  +1 800 222 000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-[#00b15e] shrink-0" />
                <p className="text-gray-500 font-bold hover:text-[#00b15e] cursor-pointer transition-colors">
                  info@yourdomain.com
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Crafto. All rights reserved.
            </p>
            <p className="text-gray-400 text-[10px] leading-relaxed max-w-md text-center md:text-right">
              This site is protected by reCAPTCHA and the Google <Link href="#" className="underline">Privacy Policy</Link> and <Link href="#" className="underline">Terms of Service</Link> apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
