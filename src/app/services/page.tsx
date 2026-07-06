import type { Metadata } from "next";
import { Fan, Droplets, PaintRoller, Building2 } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zeepro's licensed mechanical, plumbing, interior finishing, and steel services across the UAE.",
  openGraph: {
    title: "Services | Zeepro",
    description:
      "Explore Zeepro's licensed mechanical, plumbing, interior finishing, and steel services across the UAE.",
  },
};

const services = [
  {
    title: "Mechanical & Electromechanical",
    description:
      "HVAC installation, air filtration, ventilation, and electromechanical equipment services for commercial and industrial facilities.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
    capabilities: [
      "HVAC installation and maintenance",
      "Air filtration systems",
      "Ventilation system engineering",
      "Electromechanical equipment servicing",
    ],
  },
  {
    title: "Plumbing & Sanitary Works",
    description:
      "Full plumbing and sanitary contracting services including design, installation, maintenance, and emergency repairs.",
    icon: Droplets,
    href: "/services/plumbing-sanitary",
    capabilities: [
      "Plumbing system installation",
      "Sanitary fixture contracting",
      "Drainage and wastewater systems",
      "Emergency leak detection and repair",
    ],
  },
  {
    title: "Interior Finishing & Renovation",
    description:
      "Professional tiling, painting, carpentry, and wood flooring services for commercial and residential spaces.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
    capabilities: [
      "Floor and wall tiling works",
      "Painting and surface finishing",
      "Carpentry and joinery",
      "Wood flooring installation",
    ],
  },
  {
    title: "Steel & Cladding Solutions",
    description:
      "Cladding system installation, steel product fabrication, and structural steel maintenance for industrial projects.",
    icon: Building2,
    href: "/services/steel-cladding",
    capabilities: [
      "Cladding system design and installation",
      "Steel fabrication and installation",
      "Structural steel maintenance",
      "Corrosion protection and coating",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Zeepro delivers specialist mechanical, plumbing, interior finishing,
            and steel services across the UAE. Every activity is fully licensed
            and executed by qualified professionals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              capabilities={service.capabilities}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
