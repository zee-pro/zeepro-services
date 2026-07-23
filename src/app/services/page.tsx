import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { ServicesLayout } from "@/components/services/services-layout";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/layout/breadcrumb-schema";
import { ServiceSchema } from "@/components/layout/service-schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  openGraph: {
    title: "Services | Zeepro",
    description:
      "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  },
  alternates: {
    canonical: "https://zeeproservices.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      {/* Fixed-height panel: sidebar + scrollable services */}
      <ServicesLayout />

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(1_0_0/0.05),transparent_50%)]"
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Start Your Project?
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
                <Phone className="size-4" />
                Start a Conversation
                <ChevronRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
