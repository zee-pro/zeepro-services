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
      <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
            <Icon className="size-5 text-accent" aria-hidden="true" />
          </div>
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
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
            View details
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
