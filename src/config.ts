import type { CSSProperties } from "react";

/**
 * =============================================================================
 * PROFESSIONAL SITE CONFIG
 * -----------------------------------------------------------------------------
 * Swap this object to generate a new site for a different professional.
 * Every visible string, list, colour, photo and contact method is driven
 * from here — no hunting through components required.
 *
 * Quick-start for a new professional:
 *   1. Replace identity, copy, lists and contact details below.
 *   2. Drop new photos into /public/images and update `photos`.
 *   3. Adjust `brand` hex values (or pick a preset from BRAND_PRESETS).
 *   4. Set `cta` labels to match the profession (e.g. "Book Appointment"
 *      for a doctor, "Schedule a Call" for a consultant).
 * =============================================================================
 */

export type ServiceIcon =
  | "calculator"
  | "fileSearch"
  | "landmark"
  | "lineChart"
  | "scrollText"
  | "users"
  | "stethoscope"
  | "scale"
  | "briefcase"
  | "building"
  | "heartPulse"
  | "compass";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Qualification {
  title: string;
  issuer: string;
  year: string;
}

export interface WorkingHours {
  days: string;
  hours: string;
}

export interface BrandColors {
  /** Near-black page chrome / footer */
  forest950: string;
  /** Header, hero, dark bands */
  forest900: string;
  forest800: string;
  forest700: string;
  forest600: string;
  forest100: string;
  forest50: string;
  /** Primary CTA / accent */
  gold600: string;
  gold500: string;
  gold400: string;
  gold300: string;
  gold100: string;
  /** Page background */
  ivory: string;
  ivoryDark: string;
}

export interface SiteConfig {
  professionName: string;
  firstName: string;
  practiceName: string;
  professionType: string;
  professionBadge: string;
  credentialsLine: string;
  tagline: string;
  valueProposition: string;
  bio: string;
  philosophy: string;
  philosophyAttribution: string;
  yearsExperience: number;
  clientsServed: string;
  location: string;
  specializations: string[];
  qualifications: Qualification[];
  certifications: string[];
  affiliations: string[];
  awards: string[];
  services: Service[];
  stats: { value: string; label: string }[];
  testimonials: Testimonial[];
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    whatsapp: string;
    whatsappMessage: string;
    addressLines: string[];
    mapEmbedUrl: string;
    mapLink: string;
    workingHours: WorkingHours[];
  };
  social: {
    linkedin: string;
    registrationLabel: string;
    registrationNumber: string;
  };
  cta: {
    primary: string;
    secondary: string;
    stickyBook: string;
    formSubmit: string;
    formSuccess: string;
    complimentaryNote: string;
  };
  photos: {
    profile: string;
    profileAlt: string;
    office: string;
    officeAlt: string;
    consultation: string;
    consultationAlt: string;
  };
  brand: BrandColors;
  nav: { label: string; href: string }[];
  seo: {
    title: string;
    description: string;
  };
}

/** Optional palettes — copy one into `siteConfig.brand` when switching profession. */
export const BRAND_PRESETS: Record<string, BrandColors> = {
  /** Forest + gold — CA, lawyers, family offices */
  ca: {
    forest950: "#061510",
    forest900: "#0B241C",
    forest800: "#12382C",
    forest700: "#1A4D3C",
    forest600: "#246B52",
    forest100: "#DCEDE6",
    forest50: "#EEF6F2",
    gold600: "#8F7214",
    gold500: "#C4A035",
    gold400: "#D4B44A",
    gold300: "#E2C96A",
    gold100: "#F5EDD0",
    ivory: "#F6F3EB",
    ivoryDark: "#EDE8DC",
  },
  /** Deep navy + teal — doctors, clinics */
  doctor: {
    forest950: "#07111F",
    forest900: "#0C1B33",
    forest800: "#132A4A",
    forest700: "#1B3C63",
    forest600: "#215A7A",
    forest100: "#D7E8F0",
    forest50: "#EEF5F8",
    gold600: "#0F6B6B",
    gold500: "#1A9A9A",
    gold400: "#3BB8B8",
    gold300: "#7AD4D4",
    gold100: "#D4F1F1",
    ivory: "#F4F7F8",
    ivoryDark: "#E6ECEF",
  },
  /** Ink + burgundy — consultants, coaches */
  consultant: {
    forest950: "#140B0D",
    forest900: "#241114",
    forest800: "#3A1C22",
    forest700: "#5C2B34",
    forest600: "#7A3A46",
    forest100: "#F0E4E6",
    forest50: "#F8F1F2",
    gold600: "#8A6A2B",
    gold500: "#C4A05A",
    gold400: "#D4B56E",
    gold300: "#E2C98A",
    gold100: "#F6EDD8",
    ivory: "#F7F4EE",
    ivoryDark: "#EDE8DC",
  },
};

export const siteConfig: SiteConfig = {
  professionName: "CA Ananya R. Desai",
  firstName: "Ananya",
  practiceName: "Desai & Associates",
  professionType: "Chartered Accountant",
  professionBadge: "FCA, ICAI",
  credentialsLine: "FCA  ·  ICAI M. No. 048291  ·  DISA",
  tagline: "Numbers that make sense. Advice you can act on.",
  valueProposition:
    "Independent tax, audit and CFO counsel for founders, family businesses and professionals who still want a practice that picks up the phone.",

  bio: "Ananya founded Desai & Associates in 2012 after six years with a Big Four firm in Mumbai, where she led statutory audits and tax due diligence for listed companies and private-equity portfolio businesses. She returned to Pune to build a practice that gives growing companies the same rigour — without the revolving door of junior staff.\n\nToday she advises more than 450 clients: manufacturing SMEs in Pimpri-Chinchwad, technology startups in Baner and Kharadi, doctors and consultants running their own practices, and a handful of HNI families on structuring and succession. She appears regularly before the CIT(A) and the ITAT, and is empanelled as a GST facilitator with the Pune Commissionerate.",

  philosophy:
    "A good CA should reduce your anxiety, not add to it. I would rather explain a provision twice than let a client sign something they do not understand.",
  philosophyAttribution: "Ananya Desai, on how the practice is run",

  yearsExperience: 20,
  clientsServed: "450+",
  location: "Koregaon Park, Pune",

  specializations: [
    "Direct Tax Planning",
    "GST & Indirect Tax",
    "SME / Virtual CFO",
    "Statutory Audit",
    "Start-up Structuring",
    "Estate & Succession",
  ],

  qualifications: [
    {
      title: "Fellow Chartered Accountant (FCA)",
      issuer: "Institute of Chartered Accountants of India",
      year: "2011",
    },
    {
      title: "Associate Chartered Accountant (ACA)",
      issuer: "ICAI — Membership No. 048291",
      year: "2006",
    },
    {
      title: "B.Com (Honours)",
      issuer: "Symbiosis College of Arts & Commerce, Pune",
      year: "2003",
    },
    {
      title: "Diploma in Information Systems Audit (DISA)",
      issuer: "ICAI",
      year: "2014",
    },
    {
      title: "Certified Independent Director",
      issuer: "Indian Institute of Corporate Affairs (IICA)",
      year: "2020",
    },
    {
      title: "GST Certified Professional",
      issuer: "National Academy of Customs, Indirect Taxes (NACIN)",
      year: "2018",
    },
  ],

  certifications: [
    "Fellow, Institute of Chartered Accountants of India",
    "DISA — Information Systems Audit",
    "IICA Certified Independent Director",
    "NACIN GST Certified",
    "Empanelled GST Facilitator, Pune Commissionerate",
  ],

  affiliations: [
    "ICAI — Western India Regional Council, Pune Branch",
    "Mahratta Chamber of Commerce, Industries & Agriculture (taxation committee)",
    "Pune International Centre — member",
    "TiE Pune — charter member",
  ],

  awards: [
    "ICAI Pune Branch — Certificate of Appreciation, Tax Outreach (2023)",
    "MCCIA — Recognised SME Advisor (2021)",
  ],

  services: [
    {
      title: "Direct Tax Advisory & Planning",
      description:
        "Advance tax, assessments, search & survey support, and structuring for promoters and closely-held companies. Representation before CIT(A) and ITAT.",
      icon: "calculator",
    },
    {
      title: "GST Compliance & Litigation",
      description:
        "Registrations, monthly returns, annual reconciliation, refunds, and replies to notices. Hands-on help when a department letter arrives.",
      icon: "fileSearch",
    },
    {
      title: "Statutory & Internal Audit",
      description:
        "Companies Act audits, tax audits under 44AB, and internal reviews designed to catch issues before the banker or the investor does.",
      icon: "scrollText",
    },
    {
      title: "Incorporation & ROC",
      description:
        "Private limited, LLP and OPC set-up, director KYC, annual filings, and share transfers — done once, done correctly.",
      icon: "landmark",
    },
    {
      title: "Virtual CFO for SMEs",
      description:
        "Monthly MIS, cash-flow forecasts, bank-covenant tracking and board packs for founders who have outgrown a bookkeeper but are not ready for a full-time CFO.",
      icon: "lineChart",
    },
    {
      title: "Estate & Succession Planning",
      description:
        "Wills, family settlements, holding-company structures and the tax work that follows a death in the family — handled with discretion.",
      icon: "users",
    },
  ],

  stats: [
    { value: "20", label: "Years as a Chartered Accountant" },
    { value: "450+", label: "Active business & HNI clients" },
    { value: "14", label: "Years leading this practice" },
    { value: "98%", label: "Returns filed on or before due date" },
  ],

  testimonials: [
    {
      name: "Rohan Kulkarni",
      role: "Founder, Kulkarni Precision Tools, Pimpri",
      quote:
        "Ananya restructured our group in 2019 before we took PE money. The diligence team had almost nothing to ask. That is rare — and it paid for a decade of fees in a single round.",
      rating: 5,
    },
    {
      name: "Dr. Smita Joshi",
      role: "Orthopaedic surgeon, practising in Kalyani Nagar",
      quote:
        "I used to dread March. Now the books are closed by the 10th and I actually understand my GST. She treats a clinic like a business, which it is, and never talks down to me.",
      rating: 5,
    },
    {
      name: "Meera & Ajay Shah",
      role: "Promoters, Shah Textiles, Solapur",
      quote:
        "When my father passed, she handled the succession, the wills and the firm reconstitution with a patience I will not forget. We have been with her for eleven years. There is no one else I would call.",
      rating: 5,
    },
    {
      name: "Nikhil Rao",
      role: "CEO, Northbeam Analytics (SaaS, Baner)",
      quote:
        "Start-up CAs often disappear after incorporation. Ananya sat with our ESOP plan, the Q2 fundraising and a GST notice in the same fortnight. Calm, precise, always reachable on WhatsApp.",
      rating: 5,
    },
  ],

  contact: {
    phone: "+91 98221 45678",
    phoneHref: "tel:+919822145678",
    email: "ananya@desaiassociates.in",
    whatsapp: "919822145678",
    whatsappMessage:
      "Hello CA Ananya, I would like to book a consultation with Desai & Associates.",
    addressLines: [
      "Desai & Associates",
      "12, Lane 7, North Main Road",
      "Koregaon Park, Pune 411001",
      "Maharashtra, India",
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Lane%207%20North%20Main%20Road%20Koregaon%20Park%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://maps.google.com/?q=Lane+7+North+Main+Road+Koregaon+Park+Pune",
    workingHours: [
      { days: "Monday – Friday", hours: "10:00 AM – 6:30 PM" },
      { days: "Saturday", hours: "10:00 AM – 2:00 PM" },
      { days: "Sunday", hours: "Closed · by appointment only" },
    ],
  },

  social: {
    linkedin: "https://www.linkedin.com/in/ananyadesai-ca",
    registrationLabel: "ICAI Membership",
    registrationNumber: "M. No. 048291",
  },

  cta: {
    primary: "Book a Consultation",
    secondary: "Call the Office",
    stickyBook: "Book",
    formSubmit: "Send Enquiry",
    formSuccess:
      "Thank you. Ananya or a member of the team will reply within one business day. For urgent tax notices, please call or WhatsApp.",
    complimentaryNote:
      "First conversations are 45 minutes and complimentary for new clients. Bring notices, last-year returns, or just a question.",
  },

  photos: {
    profile: "/images/portrait.jpg",
    profileAlt:
      "Portrait of CA Ananya R. Desai, Fellow Chartered Accountant, in her Pune office",
    office: "/images/office.jpg",
    officeAlt:
      "The consultation room at Desai & Associates, Koregaon Park, Pune",
    consultation: "/images/consultation.jpg",
    consultationAlt:
      "CA Ananya Desai reviewing financial documents with a client",
  },

  brand: BRAND_PRESETS.ca,

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Credentials", href: "#credentials" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "CA Ananya Desai, FCA | Chartered Accountant in Pune",
    description:
      "Desai & Associates — independent tax, GST, audit and virtual-CFO counsel in Koregaon Park, Pune. FCA, ICAI M. No. 048291. 20 years in practice.",
  },
};

/** WhatsApp click-to-chat URL, encoded from config. */
export function whatsappUrl(cfg: SiteConfig = siteConfig): string {
  return `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(cfg.contact.whatsappMessage)}`;
}

/** Inline style object that overrides the Tailwind brand tokens at runtime. */
export function brandStyle(brand: BrandColors): CSSProperties {
  return {
    ["--color-forest-950" as string]: brand.forest950,
    ["--color-forest-900" as string]: brand.forest900,
    ["--color-forest-800" as string]: brand.forest800,
    ["--color-forest-700" as string]: brand.forest700,
    ["--color-forest-600" as string]: brand.forest600,
    ["--color-forest-100" as string]: brand.forest100,
    ["--color-forest-50" as string]: brand.forest50,
    ["--color-gold-600" as string]: brand.gold600,
    ["--color-gold-500" as string]: brand.gold500,
    ["--color-gold-400" as string]: brand.gold400,
    ["--color-gold-300" as string]: brand.gold300,
    ["--color-gold-100" as string]: brand.gold100,
    ["--color-ivory" as string]: brand.ivory,
    ["--color-ivory-dark" as string]: brand.ivoryDark,
  };
}
