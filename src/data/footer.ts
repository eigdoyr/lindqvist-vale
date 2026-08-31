export interface OfficeLocation {
  city: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const FOOTER_DATA = {
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
    { label: "Selected Works", href: "#works" },
    { label: "Studio Profile", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Are.na", href: "https://are.na" },
  ],
};
