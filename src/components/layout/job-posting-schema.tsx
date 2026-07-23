import { JOB_LISTINGS } from "@/data/jobs";

export function JobPostingSchema() {
  const jobs = JOB_LISTINGS.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: "2026-07-24",
    validThrough: "2026-08-24",
    employmentType: job.type.toUpperCase().replace("-", "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: "Zeepro",
      sameAs: "https://zeeproservices.com",
      logo: "https://zeeproservices.com/zeepro_logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "AE",
    },
    qualifications: job.requirements.join(". "),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobs) }}
    />
  );
}
