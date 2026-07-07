import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE_CONFIG.address,
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us directly",
    href: SOCIAL_LINKS.whatsapp,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mt-1 text-2xl font-bold text-foreground">
          Get in Touch
        </h2>
        <p className="mt-2 text-muted-foreground">
          Ready to discuss your project? Reach out to Zeepro through any of the
          channels below or use the contact form.
        </p>
      </div>

      <div className="space-y-3">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="size-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground/60">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-xl border border-border bg-background p-4 transition-all hover:border-accent/20 hover:shadow-sm"
                {...(item.label === "WhatsApp"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-background p-4"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
