import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import CategoryNav from "@/components/sections/CategoryNav";
import PropertyGrid from "@/components/sections/PropertyGrid";
import Usps from "@/components/sections/Usps";
import CityCarousel from "@/components/sections/CityCarousel";
import ServicesStrip from "@/components/sections/ServicesStrip";
import AppPromo from "@/components/sections/AppPromo";
import Testimonials from "@/components/sections/Testimonials";
import BlogGrid from "@/components/sections/BlogGrid";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutIntro />
      <CategoryNav />
      <PropertyGrid />
      <Usps />
      <CityCarousel />
      <ServicesStrip />
      <AppPromo />
      <Testimonials />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
