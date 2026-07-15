import type { Metadata } from "next";
import { PaintRoller, Hammer, Fan, Droplets } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  openGraph: {
    title: "Services | Zeepro",
    description:
      "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  },
};

const services = [
  {
    title: "Interior Renovation & Construction",
    description:
      "Full-scale apartment, villa, and commercial renovation and construction services — from structural改造 to precision finishing, delivered by licensed professionals.",
    icon: PaintRoller,
    href: "/services/interior-finishing",
    capabilities: [
      "Apartment and villa renovations",
      "Commercial fit-out and construction",
      "Floor and wall tiling works",
      "Painting and surface finishing",
    ],
  },
  {
    title: "Joinery & Custom Woodwork",
    description:
      "Bespoke cabinetry, kitchen joinery, wardrobe fabrication, decorative millwork, and office fit-out solutions crafted by skilled woodworkers.",
    icon: Hammer,
    href: "/services/joinery",
    capabilities: [
      "Custom cabinetry and built-in furniture",
      "Kitchen joinery and countertop installation",
      "Wardrobe and storage system fabrication",
      "Decorative woodwork and millwork",
    ],
  },
  {
    title: "Mechanical & Electromechanical",
    description:
      "Comprehensive home AC, HVAC, air filtration, ventilation, cladding, and electromechanical services for residential, commercial, and industrial clients across the UAE.",
    icon: Fan,
    href: "/services/mechanical-electromechanical",
    capabilities: [
      "Home AC — window, split, cassette & central units",
      "HVAC installation and maintenance",
      "Air filtration and ventilation systems",
      "Cladding system installation",
    ],
  },
  {
    title: "Plumbing & Sanitary Works",
    description:
      "Full plumbing and sanitary contracting services including system design, installation, maintenance, and emergency repairs.",
    icon: Droplets,
    href: "/services/plumbing-sanitary",
    capabilities: [
      "Plumbing system installation",
      "Sanitary fixture contracting",
      "Drainage and wastewater systems",
      "Emergency leak detection and repair",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Licensed{" "}
            <span className="text-accent">Interior Renovation, Construction</span>{" "}
            & Technical Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Zeepro delivers specialist renovation, construction, joinery,
            mechanical, and plumbing services across the UAE. Every activity is
            fully licensed and executed by qualified professionals.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
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
