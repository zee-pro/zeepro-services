import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { SERVICES } from "@/data/services";
import { ServiceSidebar } from "@/components/services/service-sidebar";
import { ServiceCategorySection } from "@/components/services/service-category-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/layout/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  openGraph: {
    title: "Services | Zeepro",
    description:
      "Explore Zeepro's licensed interior renovation, joinery, mechanical, and plumbing services across the UAE.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      {/* Page header */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(1_0_0/0.05),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Licensed{" "}
            <span className="text-accent">Interior Renovation, Construction</span>{" "}
            & Technical Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/60">
            Every activity is fully licensed and executed by qualified
            professionals. We deliver renovation, construction, joinery, and
            technical services to projects throughout the UAE.
          </p>
        </div>
      </section>

      {/* Main content: sidebar + sections */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)/3%,transparent_50%)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-64 lg:shrink-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                Categories
              </p>
              <ServiceSidebar categories={SERVICES} />
            </aside>

            {/* Service sections */}
            <div className="flex-1 space-y-16">
              {SERVICES.map((category) => (
                <ServiceCategorySection
                  key={category.id}
                  category={category}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
