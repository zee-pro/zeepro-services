import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Joinery & Custom Woodwork",
  description:
    "Zeepro provides custom cabinetry, kitchen joinery, wardrobe fabrication, decorative woodwork, and bespoke furniture services across the UAE.",
  openGraph: {
    title: "Joinery & Custom Woodwork | Zeepro",
    description:
      "Zeepro provides custom cabinetry, kitchen joinery, wardrobe fabrication, decorative woodwork, and bespoke furniture services across the UAE.",
  },
};

const capabilities = [
  "Custom cabinetry and built-in furniture design and fabrication",
  "Kitchen joinery and countertop installation",
  "Wardrobe and storage system fabrication",
  "Decorative woodwork and millwork",
  "Door and window frame installation",
  "Ceiling panel and decorative timber works",
  "Office fit-out and commercial joinery",
  "Bespoke furniture and fixture manufacturing",
];

export default function JoineryPage() {
  return (
    <ServiceDetail
      title="Joinery & Custom Woodwork"
      description={
        "Zeepro delivers specialist joinery and custom woodwork services for " +
        "residential, commercial, and hospitality projects across the UAE. " +
        "From bespoke cabinetry and kitchen installations to decorative " +
        "millwork and office fit-outs, our skilled craftsmen bring precision " +
        "and quality to every piece."
      }
      capabilities={capabilities}
      image={IMAGES.services.joineryHero}
    />
  );
}
