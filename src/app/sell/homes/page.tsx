import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function SellHomesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        badge="Property for Sale"
        title="Beautiful Homes for Sale"
        subtitle="Discover your forever home in our diverse selection of houses. From modern villas to charming family estates."
        image="/hampton-meadows-ranch-florida.jpg"
        animatedText="Homes"
      />
      <LatestGrid category="Home" tag="SELL" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
