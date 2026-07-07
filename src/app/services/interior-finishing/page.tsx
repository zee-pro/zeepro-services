import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Interior Finishing & Renovation",
  description:
    "Zeepro provides professional floor tiling, wall tiling, painting, carpentry, and wood flooring services across the UAE.",
  openGraph: {
    title: "Interior Finishing & Renovation | Zeepro",
    description:
      "Zeepro provides professional floor tiling, wall tiling, painting, carpentry, and wood flooring services across the UAE.",
  },
};

const capabilities = [
  "Floor and wall tiling works (ceramic, porcelain, marble, granite)",
  "Painting contracting for interior and exterior surfaces",
  "Carpentry and joinery works",
  "Wood flooring installation and finishing",
  "Ceiling and partition installation",
  "Surface preparation and remedial works",
  "Coordination with MEP and other trades",
  "Quality finishing for commercial and residential spaces",
];

export default function InteriorFinishingPage() {
  return (
    <ServiceDetail
      title="Interior Finishing & Renovation"
      description={
        "Zeepro delivers professional interior finishing and renovation services " +
        "for commercial and residential properties across the UAE. Our licensed " +
        "tradespeople handle tiling, painting, carpentry, and wood flooring to " +
        "deliver high-quality finishes on schedule."
      }
      capabilities={capabilities}
      image={IMAGES.services.interiorHero}
    />
  );
}
