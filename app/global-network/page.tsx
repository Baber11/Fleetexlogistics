import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionCard, Parallax, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { globalNetworkRegions } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Global Network",
  description: `${company.name} operates across 50+ countries through strategic partnerships, delivering worldwide logistics solutions from ${company.headquarters}.`,
};

export default function GlobalNetworkPage() {
  return (
    <>
      <PageHero
        title="Global Network"
        description="Strategic partnerships and established trade lanes connecting Pakistan to markets across the world."
        image={images.globalNetwork}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="left" duration={1}>
              <Parallax className="relative aspect-[4/3]" speed={50}>
                <Image
                  src={images.globalNetwork}
                  alt="Global logistics network"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </Parallax>
            </Reveal>
            <Reveal direction="right" delay={200} duration={1}>
              <div>
                <SectionHeading
                  eyebrow="Reach"
                  title="Connected to every major trade lane"
                  description=""
                  align="left"
                />
                <p className="text-muted leading-relaxed">
                  From our base in {company.headquarters}, FleetEx Logistics coordinates
                  shipments through trusted agents, carriers, and partners spanning
                  six regions — offering competitive rates, reliable transit
                  times, and seamless door-to-door service.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-warm py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Regions"
              title="Strategic hubs worldwide"
              description="Key logistics corridors and partner locations that power our global operations."
            />
          </Reveal>
          <Stagger className="grid gap-px bg-border-brand sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {globalNetworkRegions.map((region) => (
              <MotionCard key={region.region} className="bg-surface p-8">
                <h3 className="font-display text-2xl font-semibold text-ink">{region.region}</h3>
                <p className="mt-2 text-sm font-medium text-accent">Hubs: {region.hubs}</p>
                <p className="mt-3 text-sm text-muted">{region.coverage}</p>
              </MotionCard>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.15}>
            {[
              {
                title: "International Reach",
                text: "Coverage across 50+ countries through established carrier and agent partnerships on every major continent.",
                img: images.oceanFreight,
              },
              {
                title: "Strategic Partnerships",
                text: "Long-standing relationships with airlines, shipping lines, and local agents ensure reliable capacity and competitive pricing.",
                img: images.airFreight,
              },
              {
                title: "Worldwide Solutions",
                text: "Multi-modal routing combining air, ocean, and road transport for optimal cost and transit time balance.",
                img: images.roadFreight,
              },
            ].map((item) => (
              <MotionCard
                key={item.title}
                className="overflow-hidden border border-border-brand bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.img} alt="" fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </MotionCard>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ink py-20">
        <Container className="text-center">
          <Reveal direction="scale">
            <h2 className="font-display text-4xl font-semibold text-white">
              Expand your reach with FleetEx
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Whether entering new markets or optimizing existing supply chains, our
              global network is ready to support your growth.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="light">
                Discuss Your Requirements
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
