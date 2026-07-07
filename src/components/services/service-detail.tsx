"use client";

import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  title: string;
  description: string;
  capabilities: string[];
  todoNote?: string;
}

export function ServiceDetail({
  title,
  description,
  capabilities,
  todoNote,
}: ServiceDetailProps) {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/4%,transparent_50%)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ChevronRight className="size-3.5 rotate-180" />
              All Services
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            {todoNote && (
              <p className="mt-2 text-xs italic text-muted-foreground/40">
                {todoNote}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-16"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Key Capabilities
            </p>
            <h2 className="text-2xl font-bold text-foreground">
              What We Deliver
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4"
                >
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground/80">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(1_0_0/0.05),transparent_50%)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Need {title} Services?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60">
            Contact Zeepro to discuss your project requirements and how we can
            support your next build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Start a Conversation
                <ChevronRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
