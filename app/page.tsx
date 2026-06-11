import { FAQPreview } from "@/components/FAQPreview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { MembershipPreview } from "@/components/MembershipPreview";
import { MembroSection } from "@/components/MembroSection";
import { PhotoPlaceholderSection } from "@/components/PhotoPlaceholderSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MembershipPreview />
        <PhotoPlaceholderSection />
        <LocationSection />
        <MembroSection />
        <FAQPreview />
      </main>
      <Footer />
    </>
  );
}
