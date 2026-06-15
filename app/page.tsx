import { Hero } from "@/components/sections/Hero";
import { CompanyOverview, KeyServices } from "@/components/sections/HomeSections";
import {
  StatsBar,
  WhyFleetEx,
  IndustriesServed,
  ServiceCoverage,
  CustomerBenefits,
  ContactCTA,
} from "@/components/sections/MoreSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <KeyServices />
      <StatsBar />
      <WhyFleetEx />
      <IndustriesServed />
      <ServiceCoverage />
      <CustomerBenefits />
      <ContactCTA />
    </>
  );
}
