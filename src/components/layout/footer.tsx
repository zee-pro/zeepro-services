import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-xs font-bold text-accent-foreground">
                Z
              </span>
              <span className="text-lg font-bold text-primary-foreground">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.filter((item) => "children" in item).flatMap(
                (item) =>
                  "children" in item
                    ? item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))
                    : [],
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.filter(
                (item) => !("children" in item),
              ).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/60">
              <li className="flex flex-col">
                <span className="text-xs font-medium text-primary-foreground/40">
                  Email
                </span>
                {SITE_CONFIG.email}
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-medium text-primary-foreground/40">
                  Phone
                </span>
                {SITE_CONFIG.phone}
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-medium text-primary-foreground/40">
                  Address
                </span>
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
