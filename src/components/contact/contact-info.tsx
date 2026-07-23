"use client";

import { motion } from "framer-motion";
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
    icon: Phone,
    label: "Phone (Alt)",
    value: SITE_CONFIG.phone2,
    href: `tel:${SITE_CONFIG.phone2}`,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
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
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {contactDetails.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10"
              >
                <Icon className="size-5 text-accent" aria-hidden="true" />
              </motion.div>
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
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                className="group block rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                {...(item.label === "WhatsApp"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-background p-4"
            >
              {content}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
