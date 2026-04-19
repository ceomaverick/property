import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function HomesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        title="Beautiful Homes for Rent"
        subtitle="From cozy suburban cottages to grand estates. Find the perfect home for you and your family."
        image="/woodland-modern-house-los-angeles.jpg"
        animatedText="Homes"
      />
      <LatestGrid category="Home" tag="RENT" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
