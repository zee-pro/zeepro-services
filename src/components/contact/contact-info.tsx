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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>
        <p className="mt-2 text-muted-foreground">
          {/* TODO: [Copywriter] Contact page intro copy */}
          Ready to discuss your project? Reach out to Zeepro through any of the
          channels below or use the contact form.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg p-3 transition-colors hover:bg-muted/50"
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
              className="rounded-lg p-3"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
