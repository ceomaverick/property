import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function ShopsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        title="Premium Retail Shops for Rent"
        subtitle="High-traffic retail spaces in prime commercial zones. Boost your brand visibility with the perfect storefront."
        image="/modern-mansion-park-avenue-new-york.jpg"
        animatedText="Shops"
      />
      <LatestGrid category="Shop" tag="RENT" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
