import { SERVICES } from "@/data/services";

export function ServiceSchema() {
  const services = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Zeepro",
      url: "https://zeeproservices.com",
    },
    areaServed: {
      "@type": "Country",
      name: "AE",
    },
    url: `https://zeeproservices.com/services#${service.id}`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
