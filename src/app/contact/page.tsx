import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Zeepro for licensed mechanical, plumbing, interior finishing, and steel contracting services in the UAE.",
  openGraph: {
    title: "Contact Us | Zeepro",
    description:
      "Contact Zeepro for licensed mechanical, plumbing, interior finishing, and steel contracting services in the UAE.",
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-28 pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent)/3%,transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
