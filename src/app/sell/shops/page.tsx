import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function SellShopsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        badge="Property for Sale"
        title="Prime Retail Shops for Sale"
        subtitle="High-potential retail spaces in booming commercial districts. Secure your brand's future with a permanent storefront."
        image="/modern-mansion-park-avenue-new-york.jpg"
        animatedText="Shops"
      />
      <LatestGrid category="Shop" tag="SELL" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
