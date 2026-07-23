import type { Metadata } from "next";
import { CareersContent } from "@/components/careers/careers-content";

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
  return <CareersContent />;
}
