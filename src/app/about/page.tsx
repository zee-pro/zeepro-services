import type { Metadata } from "next";
import { CompanyProfile } from "@/components/about/company-profile";
import { Certifications } from "@/components/about/certifications";
import { BreadcrumbSchema } from "@/components/layout/breadcrumb-schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zeepro, a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
  openGraph: {
    title: "About Us | Zeepro",
    description:
      "Learn about Zeepro, a UAE-based licensed contractor specializing in interior renovation, construction, joinery, mechanical, and plumbing services.",
  },
  alternates: {
    canonical: "https://zeeproservices.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <CompanyProfile />
      <Certifications />
    </>
  );
}
