import Link from "next/link";
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
    <article className="rounded-xl border border-border bg-background p-8 transition-colors hover:bg-muted/50">
      <Icon className="size-10 text-primary" aria-hidden="true" />
      <h2 className="mt-4 text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {capabilities.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        Learn more about {title.toLocaleLowerCase()}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
