import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function CondominiumsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        title="Modern Condominiums for Rent"
        subtitle="Exclusive condominiums with top-tier amenities. Experience urban living at its finest with our curated listings."
        image="/luxury-villa-mountain-view-boulder.jpg"
        animatedText="Condominiums"
      />
      <LatestGrid category="Condominium" tag="RENT" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
