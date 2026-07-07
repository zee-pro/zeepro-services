import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { AboutPreview } from "@/components/home/about-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TrustSection />
      <AboutPreview />
      <CTASection />
    </>
  );
}
