"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Gauge,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Licensed & Compliant",
    description:
      "Fully licensed to operate across 10 specialised trades within the UAE construction and maintenance sector.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description:
      "Every project follows structured quality control processes to ensure consistent, professional results.",
  },
  {
    icon: Gauge,
    title: "Technical Expertise",
    description:
      "Skilled engineers and tradespeople with hands-on experience across mechanical, plumbing, finishing, and steel disciplines.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We operate as an extension of our partners' teams, aligned with project goals and invested in shared success.",
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/4%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Why Zeepro
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Built on{" "}
              <span className="text-accent">Technical Expertise</span> and
              Reliable Partnerships
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              As a UAE-based licensed contractor, we bring together 10
              specialised trades under one accountable partnership. Our focus is
              on delivering quality, on time, every time.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              Learn more about Zeepro
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* Right: Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-background p-8">
              {/* Subtle background image */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <Image
                  src={IMAGES.about}
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
              <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                10 Licensed Activities
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    01
                  </span>
                  HVAC Installation & Maintenance
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    02
                  </span>
                  Air Filtration Systems
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    03
                  </span>
                  Ventilation Systems
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    04
                  </span>
                  Electromechanical Equipment
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    05
                  </span>
                  Plumbing & Sanitary Contracting
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    06
                  </span>
                  Floor & Wall Tiling Works
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    07
                  </span>
                  Painting Contracting
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    08
                  </span>
                  Carpentry & Wood Flooring
                </li>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    09
                  </span>
                  Cladding Works
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded bg-accent/10 text-xs font-bold text-accent">
                    10
                  </span>
                  Steel Products Installation & Maintenance
                </li>
              </ul>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
