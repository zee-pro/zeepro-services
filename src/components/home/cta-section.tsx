"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(1_0_0/0.1),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground/60">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-accent-foreground sm:text-4xl lg:text-5xl">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            Whether you need mechanical, plumbing, finishing, or steel services,
            our licensed team is ready to support your project requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-2 bg-accent-foreground text-background hover:bg-accent-foreground/90"
              >
                <MessageCircle className="size-4" />
                Message on WhatsApp
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-accent-foreground/20 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
              >
                <Mail className="size-4" />
                Send an Inquiry
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
