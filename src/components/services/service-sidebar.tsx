"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/data/services";

interface ServiceSidebarProps {
  categories: ServiceCategory[];
}

export function ServiceSidebar({ categories }: ServiceSidebarProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? "");

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(cat.id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [categories]);

  return (
    <nav aria-label="Service categories" className="space-y-1">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeId === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleClick(cat.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-accent/10 text-accent"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon
              className={cn(
                "size-4 shrink-0 transition-colors",
                isActive ? "text-accent" : "text-muted-foreground/60",
              )}
              aria-hidden="true"
            />
            <span className="truncate">{cat.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
