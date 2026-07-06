import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zeepro for your construction, renovation, and maintenance needs in the UAE.",
  openGraph: {
    title: "Contact Us | Zeepro",
    description:
      "Get in touch with Zeepro for your construction, renovation, and maintenance needs in the UAE.",
  },
};

export default function ContactPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
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
