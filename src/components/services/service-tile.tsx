"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceSubItem } from "@/data/services";

interface ServiceTileProps {
  service: ServiceSubItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

export function ServiceTile({ service, index, expanded, onToggle }: ServiceTileProps) {
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
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <h4 className="absolute bottom-2 left-3 right-3 text-xs font-semibold text-white drop-shadow-md sm:bottom-3 sm:left-4 sm:right-4 sm:text-base">
          {service.title}
        </h4>
      </div>
      <div className="p-3 sm:p-4">
        <p
          onClick={onToggle}
          className={`text-xs leading-relaxed text-muted-foreground sm:text-sm sm:line-clamp-none ${
            expanded ? "line-clamp-none" : "line-clamp-3"
          } cursor-pointer sm:cursor-default`}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
