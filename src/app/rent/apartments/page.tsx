import Header from "@/components/sections/Header";
import CategoryHero from "@/components/sections/CategoryHero";
import LatestGrid from "@/components/sections/LatestGrid";
import PartnerCloud from "@/components/sections/PartnerCloud";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function ApartmentsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <CategoryHero 
        title="Luxury Apartments for Rent"
        subtitle="Discover a wide range of premium apartments in the most sought-after locations. From cozy studios to spacious penthouses."
        image="/modern-villa-exterior-view.jpg"
        animatedText="Apartments"
      />
      <LatestGrid category="Apartment" tag="RENT" />
      <PartnerCloud />
      <Newsletter />
      <Footer />
    </main>
  );
}
