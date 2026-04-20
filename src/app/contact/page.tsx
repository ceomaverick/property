"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Newsletter from "@/components/sections/Newsletter";
import ContactHero from "@/components/sections/ContactHero";
import MapSection from "@/components/sections/MapSection";
import ContactUsps from "@/components/sections/ContactUsps";
import PropertyCTA from "@/components/sections/PropertyCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <ContactHero />
      <MapSection />
      <ContactUsps />
      <Newsletter />
      <PropertyCTA />
      
      <Footer />
    </main>
  );
}
