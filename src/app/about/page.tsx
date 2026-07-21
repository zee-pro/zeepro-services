import type { Metadata } from "next";
import { CompanyProfile } from "@/components/about/company-profile";
import { Certifications } from "@/components/about/certifications";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zeepro, a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
  openGraph: {
    title: "About Us | Zeepro",
    description:
      "Learn about Zeepro, a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
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
