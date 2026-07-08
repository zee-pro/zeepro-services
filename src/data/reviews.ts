export interface Review {
  id: string;
  name: string;
  company?: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ahmed Al Maktoum",
    company: "Al Ghurair Construction",
    rating: 5,
    text: "Zeepro delivered exceptional mechanical works on our Dubai office development. Their team was professional, on time, and the quality of work exceeded expectations. Would highly recommend for any MEP requirements.",
    date: "June 2026",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "Johnson Facilities Management",
    rating: 5,
    text: "We've partnered with Zeepro for plumbing maintenance across our portfolio for over a year. Their response time and work quality are consistently outstanding. A reliable partner for facility managers.",
    date: "May 2026",
  },
  {
    id: "3",
    name: "Rashed Al Nuaimi",
    company: "Nuaimi Real Estate",
    rating: 4,
    text: "The interior finishing work on our residential villas was completed to a high standard. Zeepro's attention to detail and project management made the process smooth. Minor delays but overall excellent service.",
    date: "April 2026",
  },
  {
    id: "4",
    name: "David Chen",
    company: "Chen Engineering Consultants",
    rating: 5,
    text: "Outstanding steel cladding installation on our commercial project. Zeepro's technical team provided valuable input during the design phase, and the execution was flawless. True professionals.",
    date: "March 2026",
  },
];
