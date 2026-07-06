import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { AboutPreview } from "@/components/home/about-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <CTASection />
    </>
  );
}
