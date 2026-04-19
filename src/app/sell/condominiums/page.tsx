import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function SellCondominiumsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        badge="Property for Sale"
        title="Modern Condominiums for Sale"
        subtitle="Invest in a premium condominium with world-class facilities. The perfect blend of luxury and convenience."
        image="/luxury-villa-rochester-texas.jpg"
        animatedText="Condominiums"
      />
      <LatestGrid category="Condominium" tag="SELL" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
