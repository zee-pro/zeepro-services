import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mechanical & Electromechanical Services",
  description:
    "Zeepro provides professional HVAC, home AC, air filtration, ventilation, and electromechanical installation and maintenance services across the UAE.",
  openGraph: {
    title: "Mechanical & Electromechanical Services | Zeepro",
    description:
      "Zeepro provides professional HVAC, home AC, air filtration, ventilation, and electromechanical installation and maintenance services across the UAE.",
  },
};

const capabilities = [
  "Home AC installation and servicing — window, split, cassette, and central units",
  "HVAC system installation, commissioning, and maintenance",
  "Air filtration system design, installation, and servicing",
  "Ventilation system engineering and installation",
  "Electromechanical equipment installation and maintenance",
  "Preventative maintenance programs for mechanical systems",
  "Emergency repair and reactive maintenance",
  "Compliance with UAE mechanical and safety regulations",
];

export default function MechanicalElectromechanicalPage() {
  return (
    <ServiceDetail
      title="Mechanical & Electromechanical Services"
      description={
        "Zeepro delivers specialist mechanical and electromechanical services " +
        "across the UAE. Our licensed team handles home AC installation and " +
        "repair (window, split, cassette, and central units), HVAC systems, air " +
        "filtration, ventilation, and electromechanical equipment for " +
        "residential, commercial, and industrial facilities — ensuring optimal " +
        "performance and full regulatory compliance."
      }
      capabilities={capabilities}
      image={IMAGES.services.mechanicalHero}
    />
  );
}
