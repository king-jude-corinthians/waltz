import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import BrandManifesto from "@/components/BrandManifesto";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <BrandManifesto />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
