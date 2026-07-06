"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--color-accent)/8%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {/* TODO: [Copywriter] Home Page Hero Headline */}
            Building Excellence in the UAE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-lg text-muted-foreground sm:text-xl"
        >
          {/* TODO: [Copywriter] Home Page Sub-headline */}
          Zeepro delivers licensed mechanical, plumbing, interior finishing,
          and steel services to contractors, facility managers, and property
          partners across the United Arab Emirates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Partner with Us
              <ChevronRight className="size-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
