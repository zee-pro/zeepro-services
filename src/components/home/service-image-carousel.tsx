"use client";

import Image from "next/image";
import { useMemo } from "react";

const GALLERY_IMAGES = [
  { src: "/images/services/mechanical2.jpg", alt: "Mechanical & Electromechanical" },
  { src: "/images/services/plumbing.jpg", alt: "Plumbing & Sanitary Works" },
  { src: "/images/services/interior.jpg", alt: "Interior Finishing & Renovation" },
  { src: "/images/services/steel.jpg", alt: "Steel & Cladding Solutions" },
  { src: "/images/services/mechanical.jpg", alt: "Mechanical" },
  { src: "/images/services/plumbing1.jpg", alt: "Plumbing" },
  { src: "/images/services/interior1.jpg", alt: "Interior" },
  { src: "/images/services/plumbing2.jpg", alt: "Plumbing Works" },
  { src: "/images/services/interior2.jpg", alt: "Interior Finishing" },
  { src: "/images/services/plumbing3.jpg", alt: "Sanitary" },
  { src: "/images/services/interior3.jpg", alt: "Renovation" },
  { src: "/images/services/mechanical1.jpg", alt: "Electromechanical" },
];

export function ServiceImageCarousel() {
  const doubled = useMemo(() => [...GALLERY_IMAGES, ...GALLERY_IMAGES], []);

  return (
    <div className="relative mx-auto mt-16 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex shrink-0 animate-scroll gap-4">
          {doubled.map((img, i) => (
            <div
              key={i}
              className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 288px, 320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
