"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  title: string;
  description: string;
  capabilities: string[];
  image: string;
}

export function ServiceDetail({
  title,
  description,
  capabilities,
  image,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden sm:min-h-[45vh]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover scale-105"
        />

        {/* Aurora blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aurora-blob-1 absolute -top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.7821_0.1832_120.4/0.1),transparent_60%)] blur-3xl" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.1962_0.002_286.2/0.93)] via-[oklch(0.1962_0.002_286.2/0.7)] to-[oklch(0.1962_0.002_286.2/0.4)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.1962_0.002_286.2/0.6)] via-transparent to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/services"
              className="link-underline inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
            >
              <ChevronRight className="size-3.5 rotate-180" />
              All Services
            </Link>
            <h1
              className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
              style={{ fontSize: "clamp(1.875rem, 1.5rem + 2.5vw, 3rem)" }}
            >
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/4%,transparent_50%)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Key Capabilities
            </p>
            <h2 className="text-2xl font-bold text-foreground">
              What We Deliver
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, i) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <span className="text-sm text-foreground/80">
                    {capability}
                  </span>
                </motion.div>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                className="btn-magnetic gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
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
