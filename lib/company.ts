export const company = {
  name: "FleetEx Logistics",
  legalName: "FleetEx Logistics Ltd",
  tagline: "Moving Business Forward, Worldwide",
  description:
    "FleetEx Logistics is a Pakistan-based international freight forwarding and supply chain partner, delivering reliable air, ocean, and road freight solutions to clients across global trade lanes.",
  headquarters: "Karachi, Pakistan",
  address: {
    line1: "Suit # R-11, Ground Floor",
    line2: "Shaban Town, Malir City",
    city: "Karachi",
    country: "Pakistan",
    full: "Suit # R-11, Ground Floor, Shaban Town, Malir City, Karachi, Pakistan",
  },
  phones: ["0315 0299799"],
  phoneLabel: "Cell & WhatsApp",
  phoneTel: "+923150299799",
  whatsappUrl: "https://wa.me/923150299799",
  email: "info@fleetexlogistics.com",
  ntn: "8328771-1",
  website: "www.fleetexlogistics.com",
  websiteUrl: "https://www.fleetexlogistics.com",
  businessHoursNote:
    "Please contact us by phone or email for current office hours.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/global-network", label: "Global Network" },
  { href: "/contact", label: "Contact Us" },
] as const;
