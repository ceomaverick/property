import Header from "@/components/sections/Header";
import AboutHero from "@/components/sections/AboutHero";
import AboutExperience from "@/components/sections/AboutExperience";
import AboutServices from "@/components/sections/AboutServices";
import AboutStats from "@/components/sections/AboutStats";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import PropertyCTA from "@/components/sections/PropertyCTA";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <AboutHero />
      <AboutExperience />
      <AboutServices />
      <AboutStats />
      <Testimonials />
      <Newsletter />
      <PropertyCTA />
      <Footer />
    </main>
  );
}
