import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function OfficesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        title="Modern Office Space for Rent"
        subtitle="Scale your business in premium office locations. Flexible layouts and professional environments for all teams."
        image="/crafto-office-building-about-hero.webp"
        animatedText="Offices"
      />
      <LatestGrid category="Office" tag="RENT" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
