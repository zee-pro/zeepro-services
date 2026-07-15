import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Interior Renovation & Construction",
  description:
    "Zeepro provides apartment and villa renovation, commercial fit-out, tiling, painting, and construction services across the UAE.",
  openGraph: {
    title: "Interior Renovation & Construction | Zeepro",
    description:
      "Zeepro provides apartment and villa renovation, commercial fit-out, tiling, painting, and construction services across the UAE.",
  },
};

const capabilities = [
  "Apartment and villa renovation works",
  "Commercial fit-out and renovation",
  "Floor and wall tiling (ceramic, porcelain, marble, granite)",
  "Painting contracting for interior and exterior surfaces",
  "Ceiling and partition installation",
  "Surface preparation and remedial works",
  "Full renovation project management",
  "Quality finishing for residential and commercial spaces",
];

export default function InteriorFinishingPage() {
  return (
    <ServiceDetail
      title="Interior Renovation & Construction"
      description={
        "Zeepro delivers professional interior renovation and construction " +
        "services for apartments, villas, and commercial properties across " +
        "the UAE. From full-scale renovations to precision finishing, our " +
        "licensed tradespeople handle tiling, painting, carpentry, and " +
        "construction works to transform spaces on schedule."
      }
      capabilities={capabilities}
      image={IMAGES.services.interiorHero}
    />
  );
}
