import { FAQPreview } from "@/components/FAQPreview";
import { Footer } from "@/components/Footer";
import { GettingStartedSection } from "@/components/GettingStartedSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { PhotoPlaceholderSection } from "@/components/PhotoPlaceholderSection";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GettingStartedSection />
        <PricingSection />
        <PhotoPlaceholderSection />
        <LocationSection />
        <FAQPreview />
      </main>
      <Footer />
    </>
  );
}
