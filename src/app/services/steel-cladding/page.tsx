import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Steel & Cladding Solutions",
  description:
    "Zeepro provides professional cladding works and steel products installation and maintenance services across the UAE.",
  openGraph: {
    title: "Steel & Cladding Solutions | Zeepro",
    description:
      "Zeepro provides professional cladding works and steel products installation and maintenance services across the UAE.",
  },
};

const capabilities = [
  "Cladding system design, supply, and installation",
  "Steel product fabrication and installation",
  "Structural steel maintenance and repair",
  "Facade cladding and exterior finishing",
  "Steel railing, canopy, and structure installation",
  "Corrosion protection and coating",
  "Compliance with UAE structural and safety standards",
  "Coordination with civil and MEP contractors",
];

export default function SteelCladdingPage() {
  return (
    <ServiceDetail
      title="Steel & Cladding Solutions"
      description={
        "Zeepro provides specialist cladding and steel solutions for commercial " +
        "and industrial projects across the UAE. From facade cladding to steel " +
        "structure fabrication and installation, our team delivers durable, " +
        "code-compliant results."
      }
      capabilities={capabilities}
      image={IMAGES.services.steelHero}
    />
  );
}
