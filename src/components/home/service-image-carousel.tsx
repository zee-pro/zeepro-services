"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/services/villa-renovation.jpg", alt: "Villa Renovation" },
  { src: "/images/services/commercial-fit-out.jpg", alt: "Commercial Fit-Out" },
  { src: "/images/services/joinery.jpg", alt: "Joinery" },
  { src: "/images/services/mechanical2.jpg", alt: "Mechanical" },
  { src: "/images/services/plumbing.jpg", alt: "Plumbing" },
  { src: "/images/services/wall-tiling.webp", alt: "Floor & Wall Tiling" },
  { src: "/images/services/painting-surface-finishing.jpg", alt: "Painting & Finishing" },
  { src: "/images/services/ceiling-installation.jpg", alt: "Ceiling Installation" },
  { src: "/images/services/ac-installation.webp", alt: "AC Installation" },
  { src: "/images/services/ventilation-system.jpg", alt: "Ventilation" },
  { src: "/images/services/cladding-installation.jpg", alt: "Cladding" },
  { src: "/images/services/leak-detection.jpg", alt: "Leak Detection" },
  { src: "/images/services/decorative-millwork.avif", alt: "Decorative Millwork" },
  { src: "/images/services/joinery1.jpg", alt: "Custom Cabinetry" },
  { src: "/images/services/plumbing1.jpg", alt: "Plumbing Installation" },
  { src: "/images/services/interior2.jpg", alt: "Interior" },
];

export function ServiceImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const start = performance.now();
    const speed = 50;

    function animate(now: number) {
      const elapsed = now - start;
      const px = (elapsed * speed) / 1000;
      const el = track!;
      const maxPx = el.scrollWidth / 2;
      el.style.transform = `translateX(${-(px % maxPx)}px)`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  const all = [...images, ...images];

  return (
    <div className="mt-12 w-full overflow-hidden rounded-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-border/50">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-4 py-4"
          style={{ width: "fit-content", minWidth: "100%" }}
        >
          {all.map((img, i) => (
            <div
              key={i}
              className="group relative h-52 w-[300px] shrink-0 overflow-hidden rounded-xl sm:h-64 sm:w-[360px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="360px"
                className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
                priority={i < 12}
                unoptimized
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
