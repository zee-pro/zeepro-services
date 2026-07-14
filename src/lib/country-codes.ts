export interface CountryCode {
  code: string;
  dial: string;
  name: string;
}

export const COUNTRY_CODES: CountryCode[] = [
  { code: "AE", dial: "+971", name: "United Arab Emirates" },
  { code: "SA", dial: "+966", name: "Saudi Arabia" },
  { code: "KW", dial: "+965", name: "Kuwait" },
  { code: "QA", dial: "+974", name: "Qatar" },
  { code: "BH", dial: "+973", name: "Bahrain" },
  { code: "OM", dial: "+968", name: "Oman" },
  { code: "US", dial: "+1", name: "United States / Canada" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
  { code: "IN", dial: "+91", name: "India" },
  { code: "PK", dial: "+92", name: "Pakistan" },
  { code: "BD", dial: "+880", name: "Bangladesh" },
  { code: "EG", dial: "+20", name: "Egypt" },
  { code: "JO", dial: "+962", name: "Jordan" },
  { code: "LB", dial: "+961", name: "Lebanon" },
  { code: "TR", dial: "+90", name: "Turkey" },
  { code: "DE", dial: "+49", name: "Germany" },
  { code: "FR", dial: "+33", name: "France" },
  { code: "AU", dial: "+61", name: "Australia" },
  { code: "CN", dial: "+86", name: "China" },
  { code: "PH", dial: "+63", name: "Philippines" },
  { code: "NG", dial: "+234", name: "Nigeria" },
  { code: "ZA", dial: "+27", name: "South Africa" },
];
