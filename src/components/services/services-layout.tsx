"use client";

import { useRef } from "react";
import { SERVICES } from "@/data/services";
import { ServiceSidebar } from "./service-sidebar";
import { ServiceCategorySection } from "./service-category-section";
import { MobileCategoryBar } from "./mobile-category-bar";

export function ServicesLayout() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen flex flex-col border-t border-border/30 pt-16 min-[876px]:pt-[4.75rem]">
      <div className="flex flex-1 min-h-0">
        {/* Desktop sidebar — sticky so it stays below header when page scrolls */}
        <aside className="hidden lg:flex w-80 shrink-0 flex-col border-r border-border/30 bg-background p-6 sticky top-[4.75rem] h-fit max-h-[calc(100dvh-4.75rem)] overflow-y-auto scrollbar-hidden">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
              Our Services
            </p>
            <h1 className="text-2xl font-bold text-foreground leading-snug">
              Licensed{" "}
              <span className="text-accent">Interior Renovation, Construction</span>{" "}
              & Technical Services
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Every activity is fully licensed and executed by qualified
              professionals. We deliver renovation, construction, joinery, and
              technical services to projects throughout the UAE.
            </p>
          </div>
          <div className="border-t border-border/30 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Categories
            </p>
            <ServiceSidebar scrollRef={scrollRef} />
          </div>
        </aside>

        {/* Scrollable content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto m-4 lg:m-8 scrollbar-hidden">
          {/* Mobile: title + sticky category bar (inside scroll container) */}
          <MobileCategoryBar scrollRef={scrollRef} />

          <div className="mx-auto max-w-5xl space-y-12">
            {SERVICES.map((category) => (
              <ServiceCategorySection key={category.id} id={category.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
