"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Wrench, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const serviceHighlights = [
  { label: "Interior Renovation & Construction", href: "/services/interior-finishing" },
  { label: "Joinery & Custom Woodwork", href: "/services/joinery" },
  { label: "Mechanical & Electromechanical", href: "/services/mechanical-electromechanical" },
  { label: "Plumbing & Sanitary Works", href: "/services/plumbing-sanitary" },
];

const trustIndicators = [
  { icon: ShieldCheck, text: "Licensed Contractor" },
  { icon: Wrench, text: "10 Specialised Trades" },
  { icon: HardHat, text: "UAE Operations" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src={IMAGES.hero.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />

      {/* Dark gradient overlays for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.1962_0.002_286.2/0.92)] via-[oklch(0.1962_0.002_286.2/0.85)] to-[oklch(0.1962_0.002_286.2/0.6)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.1962_0.002_286.2/0.8)] via-transparent to-[oklch(0.1962_0.002_286.2/0.3)]"
      />

      {/* Industrial grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent gradient spot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-[30%] top-[20%] size-[600px] rounded-full bg-[radial-gradient(circle,var(--color-accent)/8%,transparent_60%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              Licensed UAE Contractor
            </div>

            <h1 className="text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Technical Expertise.
              <br />
              <span className="text-accent">Construction Excellence.</span>
              <br />
              Reliable Delivery.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              Zeepro delivers licensed interior renovation, construction,
              joinery, mechanical, and plumbing services to contractors,
              facility managers, and property partners across the United Arab
              Emirates.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Partner with Us
                  <ChevronRight className="size-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-white/5 text-primary-foreground hover:bg-white/15"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6">
              {trustIndicators.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon
                    className="size-4 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-primary-foreground/60">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service highlights panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-8 backdrop-blur-sm">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                Licensed Service Categories
              </p>
              <div className="space-y-4">
                {serviceHighlights.map((service, index) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary-foreground/5"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/15 text-xs font-bold text-accent drop-shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-primary-foreground/90">
                        {service.label}
                      </p>
                    </div>
                    <ChevronRight className="ms-auto size-4 text-primary-foreground/20 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
