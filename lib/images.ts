export const images = {
  hero: "/assets/images/hero-port.jpg",
  airFreight: "/assets/images/air-freight.jpg",
  oceanFreight: "/assets/images/ocean-freight.jpg",
  roadFreight: "/assets/images/road-freight.jpg",
  warehouse: "/assets/images/warehouse.jpg",
  globalNetwork: "/assets/images/global-network.jpg",
} as const;

export const serviceImages: Record<string, string> = {
  "air-freight": images.airFreight,
  "ocean-freight": images.oceanFreight,
  "road-freight": images.roadFreight,
  warehousing: images.warehouse,
  distribution: images.warehouse,
  "customs-clearance": images.globalNetwork,
  "express-logistics": images.airFreight,
  "door-to-door": images.roadFreight,
  "supply-chain": images.globalNetwork,
  "project-cargo": images.oceanFreight,
};
