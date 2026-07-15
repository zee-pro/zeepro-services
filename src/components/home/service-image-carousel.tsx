"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/services/mechanical2.jpg", alt: "Mechanical" },
  { src: "/images/services/plumbing.jpg", alt: "Plumbing" },
  { src: "/images/services/interior.jpg", alt: "Interior" },
  { src: "/images/services/steel.jpg", alt: "Steel" },
  { src: "/images/services/mechanical.jpg", alt: "Mechanical" },
  { src: "/images/services/plumbing1.jpg", alt: "Plumbing 1" },
  { src: "/images/services/interior1.jpg", alt: "Interior 1" },
  { src: "/images/services/plumbing2.jpg", alt: "Plumbing 2" },
  { src: "/images/services/interior2.jpg", alt: "Interior 2" },
  { src: "/images/services/plumbing3.jpg", alt: "Plumbing 3" },
  { src: "/images/services/interior3.jpg", alt: "Interior 3" },
  { src: "/images/services/mechanical1.jpg", alt: "Electromechanical" },
];

export function ServiceImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = performance.now();
    const speed = 60;

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
    <div className="mt-16 w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background" />

        <div
          ref={trackRef}
          className="flex gap-4"
          style={{ width: "fit-content", minWidth: "100%" }}
        >
          {all.map((img, i) => (
            <div
              key={i}
              className="relative h-48 w-72 shrink-0 rounded-xl sm:h-56 sm:w-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="320px"
                className="rounded-xl object-cover"
                priority={i < 12}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}