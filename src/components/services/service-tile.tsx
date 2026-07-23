"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceSubItem } from "@/data/services";

interface ServiceTileProps {
  service: ServiceSubItem;
  index: number;
}

export function ServiceTile({ service, index }: ServiceTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <h4 className="absolute bottom-3 left-4 right-4 text-base font-semibold text-white drop-shadow-md">
          {service.title}
        </h4>
      </div>
      <div className="p-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
