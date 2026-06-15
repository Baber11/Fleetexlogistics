import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionCard, Parallax, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { whyChooseUsFeatures } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: `Discover why businesses choose ${company.name} for reliable international freight forwarding, global network coverage, and dedicated customer support.`,
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        description="The advantages that make FleetEx a preferred partner for businesses requiring dependable, professional logistics services."
        image={images.roadFreight}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Advantages"
              title="Logistics excellence you can count on"
              description="Choosing a logistics partner is a strategic decision. Here is what FleetEx delivers."
            />
          </Reveal>
          <Stagger className="grid gap-px bg-border-brand sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {whyChooseUsFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <MotionCard key={feature.title} className="bg-background p-8">
                  <Icon className="mb-5 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </MotionCard>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-warm py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="left" duration={1}>
              <Parallax className="relative aspect-[4/3]" speed={45}>
                <Image src={images.hero} alt="Port logistics" fill className="object-cover" sizes="50vw" />
              </Parallax>
            </Reveal>
            <Reveal direction="right" delay={200} duration={1}>
              <div>
                <SectionHeading
                  eyebrow="Partnership"
                  title="More than transportation"
                  description=""
                  align="left"
                />
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    Many logistics providers treat shipments as transactions. At
                    FleetEx, we approach every engagement as a partnership —
                    understanding your supply chain, anticipating challenges, and
                    delivering solutions aligned with your business objectives.
                  </p>
                  <p>
                    From your first inquiry to ongoing account management, you work
                    with experienced professionals accountable for your cargo.
                  </p>
                </div>
                <Stagger className="mt-10 grid grid-cols-2 gap-px bg-border-brand" stagger={0.1}>
                  {[
                    { value: "98%", label: "On-Time Delivery" },
                    { value: "24/7", label: "Support" },
                    { value: "50+", label: "Countries" },
                    { value: "10K+", label: "Shipments / Year" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-surface p-6">
                      <p className="font-display text-3xl font-semibold text-ink">{stat.value}</p>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <Reveal direction="scale">
            <h2 className="font-display text-4xl font-semibold text-ink">
              Experience the FleetEx difference
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Join businesses that trust FleetEx Logistics for international freight
              and supply chain coordination.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
