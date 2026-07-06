import type { Metadata } from "next";
import { CompanyProfile } from "@/components/about/company-profile";
import { Certifications } from "@/components/about/certifications";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zeepro, a UAE-based licensed contractor specializing in mechanical, plumbing, interior finishing, and steel services.",
  openGraph: {
    title: "About Us | Zeepro",
    description:
      "Learn about Zeepro, a UAE-based licensed contractor specializing in mechanical, plumbing, interior finishing, and steel services.",
  },
};

export default function AboutPage() {
  return (
    <>
      <CompanyProfile />
      <Certifications />
    </>
  );
}
