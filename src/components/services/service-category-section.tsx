"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceTile } from "./service-tile";
import { SERVICES } from "@/data/services";

interface ServiceCategorySectionProps {
  id: string;
}

export function ServiceCategorySection({ id }: ServiceCategorySectionProps) {
  const category = SERVICES.find((c) => c.id === id);
  if (!category) return null;
  const Icon = category.icon;

  return (
    <section id={category.id} className="scroll-mt-24">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-8 overflow-hidden rounded-2xl"
      >
        <div className="relative h-48 sm:h-56">
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(min-width: 1024px) 75vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent/20 backdrop-blur-sm">
                <Icon className="size-5 text-accent" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                {category.title}
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              {category.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tiles grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service, i) => (
          <ServiceTile key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
