import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  capabilities: string[];
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  capabilities,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 sm:p-8">
        {/* Subtle gradient accent on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="size-6 text-accent" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-foreground sm:text-xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <ul className="mt-4 space-y-2">
            {capabilities.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <span className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
              View details
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
