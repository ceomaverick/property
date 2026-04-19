import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function SellOfficesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        badge="Property for Sale"
        title="Premium Office Space for Sale"
        subtitle="Strategic commercial locations to grow your business. Find the ideal workspace that matches your professional ambition."
        image="/crafto-office-building-about-hero.webp"
        animatedText="Offices"
      />
      <LatestGrid category="Office" tag="SELL" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
