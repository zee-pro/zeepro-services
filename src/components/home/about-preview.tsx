"use client";

import Link from "next/link";
import { ArrowRight, Shield, Handshake, Clock } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "Reliable B2B partner for contractors, brokers, and facility managers across the UAE.",
  },
  {
    icon: Handshake,
    title: "Partnership Focus",
    description:
      "Built on long-term relationships with real estate agencies, main contractors, and facility operators.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Commitment to project timelines, reducing delays that cost our partners commission and reputation.",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Zeepro
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {/* TODO: [Copywriter] About Preview summary */}
              With a focus on quality, reliability, and partnership, Zeepro
              brings licensed mechanical, plumbing, finishing, and steel
              expertise to every project across the UAE.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Learn more about us
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
