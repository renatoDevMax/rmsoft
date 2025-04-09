import Hero from "@/components/layout/Hero";
import ComercioSection from "@/components/layout/ComercioSection";
import MessagesSection from "@/components/layout/MessagesSection";
import EcommerceSection from "@/components/layout/EcommerceSection";
import ARBusinessCardSection from "@/components/layout/ARBusinessCardSection";
import PricingSection from "@/components/layout/PricingSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ComercioSection />
      <MessagesSection />
      <EcommerceSection />
      <ARBusinessCardSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
