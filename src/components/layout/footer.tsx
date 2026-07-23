"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, MessageCircle, PhoneCall, MessageSquare } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function PhoneModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const number = SITE_CONFIG.phone;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          ref={ref}
          className="w-full max-w-xs rounded-2xl glass border border-border/30 p-2 shadow-2xl"
        >
          <a
            href={`tel:${number}`}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            <PhoneCall className="size-4 text-accent" />
            Call
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone2}`}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            <PhoneCall className="size-4 text-accent" />
            Call (Alt)
          </a>
          <a
            href={`sms:${number}`}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            <MessageSquare className="size-4 text-accent" />
            Message
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            <MessageCircle className="size-4 text-accent" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [copied, setCopied] = useState(false);

  function handlePhoneClick() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      setShowPhoneModal(true);
    } else {
      navigator.clipboard.writeText(SITE_CONFIG.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <footer className="relative border-t border-border/50 bg-primary overflow-hidden">
      {showPhoneModal && <PhoneModal onClose={() => setShowPhoneModal(false)} />}

      {/* Gradient separator line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Subtle grid pattern */}
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
            <div className="group relative inline-block">
              <Image
                src="/zeepro_logo.png"
                alt="Zeepro logo"
                width={600}
                height={200}
                className="h-40 w-auto transition-all duration-500 drop-shadow-[0_0_12px_rgba(172,201,102,0.18)] group-hover:drop-shadow-[0_0_16px_rgba(172,201,102,0.5)]"
              />
            </div>
            <p className="mt-3 text-[0.95rem] text-accent/70" style={{             fontFamily: "var(--font-outfit), sans-serif" }}>
              {SITE_CONFIG.slogan}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
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
                            className="link-underline text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
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
                    className="link-underline text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
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
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/60">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Inquiry via Zeepro Website`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <span className="text-xs font-medium text-primary-foreground/40">
                    Email
                  </span>
                  <span className="ms-auto text-sm text-primary-foreground/60 group-hover:text-primary-foreground/90 transition-colors">
                    {SITE_CONFIG.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="group flex w-full items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <div className="flex w-full flex-col gap-2">
                    <span className="text-xs font-medium text-primary-foreground/40">
                      Phone
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground/90"
                    >
                      {copied ? "Copied!" : SITE_CONFIG.phone}
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.phone2}`}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground/90"
                    >
                      {SITE_CONFIG.phone2}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div className="flex w-full justify-between gap-2">
                  <span className="shrink-0 text-xs font-medium text-primary-foreground/40">
                    Address:
                  </span>
                  <span className="text-right text-sm text-primary-foreground/60">
                    {SITE_CONFIG.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient separator before copyright */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="link-underline text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/80"
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
