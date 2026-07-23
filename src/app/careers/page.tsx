import type { Metadata } from "next";
import { CareersContent } from "@/components/careers/careers-content";
import { JobPostingSchema } from "@/components/layout/job-posting-schema";
import { BreadcrumbSchema } from "@/components/layout/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Zeepro, a licensed UAE contractor. Explore open positions in mechanical, plumbing, interior finishing, and joinery services.",
  openGraph: {
    title: "Careers | Zeepro",
    description:
      "Join Zeepro, a licensed UAE contractor. Explore open positions in mechanical, plumbing, interior finishing, and joinery services.",
  },
  alternates: {
    canonical: "https://zeeproservices.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <JobPostingSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ]}
      />
      <CareersContent />
    </>
  );
}
