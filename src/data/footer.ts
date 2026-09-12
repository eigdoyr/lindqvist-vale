import type { NavItem } from "../types";

export interface OfficeLocation {
  city: string;
  address: string;
}

export interface Author {
  name: string;
  url: string;
  links: NavItem[];
}

export const AUTHOR: Author = {
  name: "Ryodgie Barnatia",
  url: "https://ryodgie.com",
  links: [
    { label: "ryodgie.com", href: "https://ryodgie.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ryodgie" },
    { label: "Dribbble", href: "https://dribbble.com/ryodgie" },
    { label: "GitHub", href: "https://github.com/eigdoyr" },
  ],
};

export interface FooterData {
  heading: string;
  subtext: string;
  email: string;
  phone: string;
  offices: OfficeLocation[];
  sitemap: NavItem[];
  socials: NavItem[];
}

export const FOOTER_DATA: FooterData = {
  heading: "Start a Dialogue",
  subtext:
    "We are currently accepting select architectural and interior commissions for 2026/2027.",
  email: "inquiries@lindqvistvale.com",
  phone: "+41 44 211 8800",
  offices: [
    { city: "ZÜRICH", address: "Gottfried-Keller-Strasse 7, 8001" },
    { city: "NEW YORK", address: "180 Varick St, Suite 902, NY 10014" },
    { city: "TOKYO", address: "5-7-2 Minami-Aoyama, Minato-ku 107-0062" },
  ],
  sitemap: [
    { label: "Selected Works", href: "/#works" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Are.na", href: "https://are.na" },
  ],
};
