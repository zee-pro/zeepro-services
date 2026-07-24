"use client";

import { useEffect, useState, useCallback, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/services";

interface ServiceSidebarProps {
  scrollRef?: RefObject<HTMLDivElement | null>;
}

export function ServiceSidebar({ scrollRef }: ServiceSidebarProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES[0]?.id ?? "");

  const handleClick = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      const container = scrollRef?.current;
      if (el && container) {
        const top = el.offsetTop - container.offsetTop;
        container.scrollTo({ top, behavior: "smooth" });
      }
    },
    [scrollRef],
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const root = scrollRef?.current ?? null;

    SERVICES.forEach((cat) => {
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
        { root, rootMargin: "-10% 0px -70% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [scrollRef]);

  return (
    <nav aria-label="Service categories" className="space-y-1">
      {SERVICES.map((cat) => {
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
