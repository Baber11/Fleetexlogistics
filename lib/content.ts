import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  Package,
  FileCheck,
  Zap,
  DoorOpen,
  Network,
  Container,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Shipments Annually" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Operations Support" },
] as const;

export const services: Service[] = [
  {
    slug: "air-freight",
    title: "Air Freight",
    icon: Plane,
    description:
      "Time-critical air cargo solutions with priority routing, consolidated shipments, and end-to-end visibility for urgent international deliveries.",
    benefits: [
      "Express and standard air options",
      "Door-to-airport and door-to-door",
      "Temperature-controlled handling",
      "Real-time shipment tracking",
    ],
  },
  {
    slug: "ocean-freight",
    title: "Ocean Freight",
    icon: Ship,
    description:
      "Cost-efficient FCL and LCL ocean freight services connecting major ports worldwide with dependable transit schedules and competitive rates.",
    benefits: [
      "Full container (FCL) and LCL",
      "Global port-to-port coverage",
      "Flexible sailing schedules",
      "Cargo insurance coordination",
    ],
  },
  {
    slug: "road-freight",
    title: "Road Freight",
    icon: Truck,
    description:
      "Reliable overland transport across regional corridors with dedicated and shared trucking solutions for domestic and cross-border distribution.",
    benefits: [
      "FTL and LTL road transport",
      "Cross-border logistics expertise",
      "GPS-enabled fleet tracking",
      "Last-mile delivery capability",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    icon: Warehouse,
    description:
      "Secure storage and inventory management facilities designed to support distribution, fulfillment, and supply chain optimization.",
    benefits: [
      "Climate-controlled storage options",
      "Inventory management systems",
      "Pick, pack, and dispatch services",
      "Short and long-term storage",
    ],
  },
  {
    slug: "distribution",
    title: "Distribution",
    icon: Package,
    description:
      "Streamlined distribution networks that connect suppliers to end customers with optimized routing and reliable delivery performance.",
    benefits: [
      "Multi-channel fulfillment",
      "Regional distribution hubs",
      "Scheduled delivery programs",
      "Returns management support",
    ],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    icon: FileCheck,
    description:
      "Expert customs brokerage and compliance support to ensure smooth border crossings and regulatory adherence across international trade lanes.",
    benefits: [
      "Import and export documentation",
      "Duty and tax advisory",
      "Regulatory compliance support",
      "Reduced clearance delays",
    ],
  },
  {
    slug: "express-logistics",
    title: "Express Logistics",
    icon: Zap,
    description:
      "Accelerated logistics for time-sensitive shipments requiring priority handling, dedicated routing, and guaranteed delivery windows.",
    benefits: [
      "Same-day and next-day options",
      "Priority handling protocols",
      "Dedicated account coordination",
      "Proactive exception management",
    ],
  },
  {
    slug: "door-to-door",
    title: "Door-to-Door Delivery",
    icon: DoorOpen,
    description:
      "Complete end-to-end logistics from origin pickup to final destination delivery, managed by a single point of contact.",
    benefits: [
      "Single-provider accountability",
      "Simplified documentation",
      "End-to-end tracking",
      "Reduced handoff complexity",
    ],
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Solutions",
    icon: Network,
    description:
      "Integrated supply chain design and management that optimizes cost, speed, and reliability across your entire logistics operation.",
    benefits: [
      "End-to-end process optimization",
      "Vendor and carrier management",
      "Performance analytics",
      "Scalable logistics architecture",
    ],
  },
  {
    slug: "project-cargo",
    title: "Project Cargo",
    icon: Container,
    description:
      "Specialized handling for oversized, heavy-lift, and complex project shipments requiring custom planning and execution.",
    benefits: [
      "Route and feasibility surveys",
      "Specialized equipment coordination",
      "Multi-modal project planning",
      "On-site logistics supervision",
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description:
      "Fulfillment and distribution solutions that keep pace with consumer demand, seasonal peaks, and omnichannel delivery expectations.",
    highlights: ["Omnichannel fulfillment", "Peak season scaling", "Returns logistics"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Inbound raw material logistics and outbound finished goods distribution designed to support lean production and just-in-time operations.",
    highlights: ["JIT delivery programs", "Production line support", "Vendor-managed inventory"],
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Precision logistics for automotive parts, assemblies, and finished vehicles with strict sequencing and quality control requirements.",
    highlights: ["Parts sequencing", "Line-side delivery", "Quality-controlled handling"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Compliant transport for pharmaceuticals, medical devices, and healthcare supplies with temperature monitoring and chain-of-custody protocols.",
    highlights: ["Cold chain logistics", "Regulatory compliance", "Priority handling"],
  },
  {
    slug: "electronics",
    title: "Electronics",
    description:
      "Secure, high-value cargo handling for consumer electronics, components, and technology products with anti-theft and ESD protocols.",
    highlights: ["High-value security", "ESD-safe handling", "Express global routing"],
  },
  {
    slug: "consumer-goods",
    title: "Consumer Goods",
    description:
      "Efficient distribution for FMCG and consumer products with optimized warehousing, replenishment, and retail delivery programs.",
    highlights: ["Retail distribution", "Promotional logistics", "Shelf-ready delivery"],
  },
  {
    slug: "industrial-equipment",
    title: "Industrial Equipment",
    description:
      "Heavy and oversized equipment logistics with specialized rigging, crating, and multi-modal transport planning.",
    highlights: ["Heavy-lift coordination", "Custom crating", "Site delivery planning"],
  },
  {
    slug: "energy-sector",
    title: "Energy Sector",
    description:
      "Project logistics for oil, gas, renewable energy, and power generation equipment to remote and challenging destinations.",
    highlights: ["Remote site delivery", "Project cargo expertise", "Multi-modal planning"],
  },
];

export const whyChooseUsFeatures = [
  {
    title: "Fast Delivery",
    description:
      "Optimized routing and priority handling ensure your cargo moves on the fastest available lanes without compromising safety.",
    icon: Zap,
  },
  {
    title: "Reliable Operations",
    description:
      "Proven processes, contingency planning, and experienced coordinators deliver consistent results shipment after shipment.",
    icon: FileCheck,
  },
  {
    title: "Global Network",
    description:
      "Strategic partnerships across 50+ countries provide seamless coverage for import, export, and cross-trade movements.",
    icon: Network,
  },
  {
    title: "Experienced Team",
    description:
      "Seasoned logistics professionals bring deep freight forwarding expertise to every engagement, from quote to delivery.",
    icon: Package,
  },
  {
    title: "Real-Time Coordination",
    description:
      "Proactive communication and shipment visibility keep you informed at every milestone throughout the logistics journey.",
    icon: Plane,
  },
  {
    title: "Cost Efficiency",
    description:
      "Consolidation, carrier negotiation, and route optimization help reduce total landed cost without sacrificing service quality.",
    icon: Truck,
  },
  {
    title: "Customer Support",
    description:
      "Dedicated account management and responsive support teams are available to resolve issues and answer inquiries promptly.",
    icon: DoorOpen,
  },
  {
    title: "Secure Handling",
    description:
      "Rigorous cargo security protocols, insurance coordination, and compliant handling protect your goods throughout transit.",
    icon: Warehouse,
  },
] as const;

export const coreValues = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every client interaction, building relationships founded on trust.",
  },
  {
    title: "Excellence",
    description:
      "We pursue operational excellence in every shipment, continuously improving processes and service delivery.",
  },
  {
    title: "Reliability",
    description:
      "Our clients depend on us to deliver on commitments. We take that responsibility seriously, every day.",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern logistics technology and smarter processes to deliver better outcomes for our partners.",
  },
] as const;

export const globalNetworkRegions = [
  { region: "South Asia", hubs: "Karachi, Lahore, Mumbai, Dhaka", coverage: "Port gateway and regional distribution" },
  { region: "Middle East", hubs: "Dubai, Jeddah, Doha", coverage: "Air and ocean freight consolidation" },
  { region: "Europe", hubs: "Rotterdam, Hamburg, London", coverage: "Import/export and cross-trade logistics" },
  { region: "Asia-Pacific", hubs: "Singapore, Shanghai, Hong Kong", coverage: "Manufacturing supply chain support" },
  { region: "Americas", hubs: "New York, Houston, São Paulo", coverage: "Transatlantic and transpacific trade lanes" },
  { region: "Africa", hubs: "Lagos, Nairobi, Johannesburg", coverage: "Emerging market freight corridors" },
] as const;
