export interface JobListing {
  id: string;
  title: string;
  trade: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  description: string;
  requirements: readonly string[];
}

export const JOB_LISTINGS: readonly JobListing[] = [
  {
    id: "supervisor-01",
    title: "Fit-Out Supervisor",
    trade: "Interior Renovation & Construction",
    location: "Dubai, UAE",
    type: "Full-Time",
    description:
      "Supervise interior fit-out and renovation projects on-site, coordinating trades and ensuring quality and schedule compliance.",
    requirements: [
      "Minimum 5 years in interior fit-out projects",
      "Proven supervisory experience on construction sites",
      "Strong communication and coordination skills",
    ],
  },
  {
    id: "carpenter-01",
    title: "Finish Carpenter",
    trade: "Joinery & Custom Woodwork",
    location: "Dubai, UAE",
    type: "Full-Time",
    description:
      "Execute high-quality finish carpentry and joinery works including cabinetry, shelving, and custom woodwork installations.",
    requirements: [
      "Minimum 4 years of finish carpentry experience",
      "Portfolio of previous joinery work",
      "Attention to detail and quality craftsmanship",
    ],
  },
  {
    id: "hvac-01",
    title: "HVAC Technician",
    trade: "Mechanical & Electromechanical",
    location: "Dubai, UAE",
    type: "Full-Time",
    description:
      "Install, service, and maintain HVAC systems including ductwork, split units, and VRF systems.",
    requirements: [
      "Minimum 2 years of HVAC experience",
      "Certification in HVAC maintenance is a plus",
      "Ability to read technical drawings",
    ],
  },
  {
    id: "plumber-01",
    title: "Plumber",
    trade: "Plumbing & Sanitary Works",
    location: "Dubai, UAE",
    type: "Full-Time",
    description:
      "Install, repair, and maintain plumbing systems in commercial and residential projects across the UAE.",
    requirements: [
      "Minimum 3 years of experience in plumbing works",
      "UAE driving license preferred",
      "Familiarity with local plumbing codes and standards",
    ],
  },
];
