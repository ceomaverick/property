import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function SellApartmentsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        badge="Property for Sale"
        title="Luxury Apartments for Sale"
        subtitle="Find your dream apartment in prime urban locations. Discover modern living with our exclusive property listings."
        image="/modern-villa-denver-colorado.jpg"
        animatedText="Apartments"
      />
      <LatestGrid category="Apartment" tag="SELL" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
