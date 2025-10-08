import { HeroSection } from "@/components/home/hero-section";
import { NewArrivalsSlider } from "@/components/home/new-arrivals-slider";
import { BrandSection } from "@/components/home/brand-section";
import { FeaturedProductsSimple as FeaturedProducts } from "@/components/home/featured-products-simple";
import { ConsignmentCTA } from "@/components/home/consignment-cta";
import { TrustBadges } from "@/components/home/trust-badges";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBadges />
      <NewArrivalsSlider />
      <BrandSection />
      <FeaturedProducts />
      <ConsignmentCTA />
    </div>
  );
}
