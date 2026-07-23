import type { LucideIcon } from "lucide-react";
import { PaintRoller, Hammer, Fan, Droplets } from "lucide-react";

export interface ServiceSubItem {
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  services: ServiceSubItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "interior-finishing",
    title: "Interior Renovation & Construction",
    icon: PaintRoller,
    description:
      "Full-scale apartment, villa, and commercial renovation and construction services — from structural works to precision finishing, delivered by licensed professionals.",
    image: "/images/services/interior.jpg",
    services: [
      {
        title: "Apartment & Villa Renovation",
        description:
          "Complete renovation solutions for residential spaces, including layout reconfiguration, structural modifications, and full interior transformation.",
        image: "/images/services/interior1.jpg",
      },
      {
        title: "Commercial Fit-Out",
        description:
          "Office, retail, and hospitality fit-out services delivering functional and aesthetically refined commercial environments on schedule.",
        image: "/images/services/interior2.jpg",
      },
      {
        title: "Floor & Wall Tiling",
        description:
          "Expert tiling works in ceramic, porcelain, marble, and granite for floors and walls across residential and commercial projects.",
        image: "/images/services/interior3.jpg",
      },
      {
        title: "Painting & Surface Finishing",
        description:
          "Professional painting services for interior and exterior surfaces, including surface preparation, priming, and premium finish coats.",
        image: "/images/services/interior.jpg",
      },
      {
        title: "Ceiling & Partition Installation",
        description:
          "Gypsum, suspended, and decorative ceiling systems alongside drywall partition installation for space division and acoustic control.",
        image: "/images/services/interior1.jpg",
      },
    ],
  },
  {
    id: "joinery",
    title: "Joinery & Custom Woodwork",
    icon: Hammer,
    description:
      "Bespoke cabinetry, kitchen joinery, wardrobe fabrication, decorative millwork, and office fit-out solutions crafted by skilled woodworkers.",
    image: "/images/services/joinery.jpg",
    services: [
      {
        title: "Custom Cabinetry",
        description:
          "Bespoke built-in cabinets, shelving, and storage furniture designed and fabricated to exact specifications for residential and commercial interiors.",
        image: "/images/services/joinery1.jpg",
      },
      {
        title: "Kitchen Joinery",
        description:
          "Complete kitchen joinery solutions including countertops, cabinets, islands, and integrated storage systems built to last.",
        image: "/images/services/joinery2.jpg",
      },
      {
        title: "Wardrobe & Storage Systems",
        description:
          "Custom wardrobe fabrication and walk-in closet design with smart storage solutions tailored to your space.",
        image: "/images/services/joinery3.jpg",
      },
      {
        title: "Decorative Millwork",
        description:
          "Ornamental woodwork, wall paneling, crown molding, and custom architectural millwork that elevates interior aesthetics.",
        image: "/images/services/joinery1.jpg",
      },
    ],
  },
  {
    id: "mechanical-electromechanical",
    title: "Mechanical & Electromechanical",
    icon: Fan,
    description:
      "Comprehensive home AC, HVAC, air filtration, ventilation, cladding, and electromechanical services for residential, commercial, and industrial clients.",
    image: "/images/services/mechanical.jpg",
    services: [
      {
        title: "Home AC Installation & Repair",
        description:
          "Professional installation, servicing, and repair of window, split, cassette, and central air conditioning units for homes and apartments.",
        image: "/images/services/mechanical1.jpg",
      },
      {
        title: "HVAC Systems",
        description:
          "Complete HVAC system design, installation, and maintenance for commercial and industrial facilities ensuring optimal climate control.",
        image: "/images/services/mechanical2.jpg",
      },
      {
        title: "Ventilation & Air Filtration",
        description:
          "Installation and servicing of ventilation ductwork, exhaust systems, and advanced air filtration units for improved indoor air quality.",
        image: "/images/services/mechanical1.jpg",
      },
      {
        title: "Cladding System Installation",
        description:
          "Exterior and interior cladding system installation including aluminum, composite, and insulated panels for thermal and aesthetic performance.",
        image: "/images/services/mechanical2.jpg",
      },
    ],
  },
  {
    id: "plumbing-sanitary",
    title: "Plumbing & Sanitary Works",
    icon: Droplets,
    description:
      "Full plumbing and sanitary contracting services including system design, installation, maintenance, and emergency repairs.",
    image: "/images/services/plumbing.jpg",
    services: [
      {
        title: "Plumbing System Installation",
        description:
          "New plumbing system design and installation for residential, commercial, and industrial buildings, fully compliant with local codes.",
        image: "/images/services/plumbing1.jpg",
      },
      {
        title: "Sanitary Fixture Contracting",
        description:
          "Supply and installation of sanitary ware, bathroom fixtures, kitchen fittings, and accessory systems from leading brands.",
        image: "/images/services/plumbing2.jpg",
      },
      {
        title: "Drainage & Wastewater Systems",
        description:
          "Design, installation, and maintenance of drainage networks, sewage systems, and wastewater treatment solutions.",
        image: "/images/services/plumbing3.jpg",
      },
      {
        title: "Emergency Leak Detection & Repair",
        description:
          "Rapid-response leak detection using modern diagnostic tools, followed by efficient repair to prevent water damage and structural issues.",
        image: "/images/services/plumbing1.jpg",
      },
    ],
  },
];
