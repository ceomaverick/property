"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogHero from "@/components/sections/BlogHero";
import BlogGrid from "@/components/sections/BlogGrid";
import Newsletter from "@/components/sections/Newsletter";
import PropertyCTA from "@/components/sections/PropertyCTA";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <BlogHero />
      <BlogGrid />
      
      {/* Load More Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <button className="h-16 px-12 bg-[#262b35] text-white font-bold text-[13px] uppercase tracking-widest rounded-sm hover:bg-[#00b15e] transition-all shadow-xl">
            Load more articles
          </button>
        </div>
      </section>

      <Newsletter />
      <PropertyCTA />
      <Footer />
    </main>
  );
}
