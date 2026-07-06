import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";

export const metadata: Metadata = {
  title: "Plumbing & Sanitary Works",
  description:
    "Zeepro provides professional plumbing and sanitary contracting services across the UAE for commercial and residential projects.",
  openGraph: {
    title: "Plumbing & Sanitary Works | Zeepro",
    description:
      "Zeepro provides professional plumbing and sanitary contracting services across the UAE for commercial and residential projects.",
  },
};

const capabilities = [
  "Plumbing system design, installation, and maintenance",
  "Sanitary fixture installation and replacement",
  "Drainage and wastewater system installation",
  "Water supply system installation and repair",
  "Emergency plumbing and leak detection",
  "Preventative maintenance programs",
  "Compliance with UAE plumbing and sanitary codes",
  "Coordination with MEP and civil contractors",
];

export default function PlumbingSanitaryPage() {
  return (
    <ServiceDetail
      title="Plumbing & Sanitary Works"
      description={
        "Zeepro offers comprehensive plumbing and sanitary contracting services " +
        "for commercial, industrial, and residential projects in the UAE. From " +
        "system design through installation to ongoing maintenance, our licensed " +
        "plumbers deliver reliable, code-compliant work."
      }
      capabilities={capabilities}
    />
  );
}
