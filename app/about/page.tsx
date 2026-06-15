import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard, Parallax, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { coreValues } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our mission, vision, values, and commitment to operational excellence in international freight forwarding.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About FleetEx"
        description="A Pakistan-based freight forwarding company committed to connecting businesses to global markets with composure and precision."
        image={images.warehouse}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal direction="scale" duration={1}>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Introduction"
                title="Moving business forward, worldwide"
                description={`${company.legalName} provides businesses with a dependable partner for international trade logistics — coordinating air, ocean, and road freight from our base in ${company.headquarters}.`}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-warm py-24 lg:py-32">
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.15}>
            <MotionCard className="border border-border-brand bg-surface p-10 lg:p-12">
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-accent">Mission</p>
              <h2 className="font-display text-3xl font-semibold text-ink">Our purpose</h2>
              <p className="mt-5 leading-relaxed text-muted">
                To deliver world-class logistics solutions that empower businesses
                to compete in global markets — through reliable freight
                coordination, transparent communication, and a relentless focus
                on customer success.
              </p>
            </MotionCard>
            <MotionCard className="border border-border-brand bg-surface p-10 lg:p-12">
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-accent">Vision</p>
              <h2 className="font-display text-3xl font-semibold text-ink">Our ambition</h2>
              <p className="mt-5 leading-relaxed text-muted">
                To be the most trusted logistics partner for businesses across
                Pakistan and beyond — recognized for operational excellence,
                innovation in supply chain management, and unwavering commitment
                to our clients&apos; growth.
              </p>
            </MotionCard>
          </Stagger>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="Principles that guide every shipment"
              description="Our values are not aspirational statements — they are operational standards."
            />
          </Reveal>
          <Stagger className="grid gap-px bg-border-brand sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {coreValues.map((value) => (
              <MotionCard key={value.title} className="bg-background p-8 text-center">
                <h3 className="font-display text-2xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
              </MotionCard>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <Image src={images.airFreight} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-ink/85" />
        <Container className="relative">
          <Reveal direction="scale">
            <SectionHeading
              eyebrow="Strengths"
              title="What distinguishes FleetEx"
              description="Capabilities built through experience, relationships, and disciplined execution."
              light
            />
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {[
              { title: "Global Carrier Network", text: "Established relationships with leading airlines, shipping lines, and trucking partners worldwide." },
              { title: "Dedicated Account Teams", text: "Experienced coordinators who understand your business and manage shipments proactively." },
              { title: "Compliance Expertise", text: "Knowledge of customs regulations, documentation requirements, and trade compliance standards." },
              { title: "Scalable Solutions", text: "Logistics programs that grow with your business — from occasional shipments to high-volume operations." },
              { title: "Competitive Pricing", text: "Rate negotiation and route optimization to deliver value without compromising service quality." },
              { title: "Shipment Visibility", text: "Proactive updates and milestone tracking so you always know where your cargo stands." },
            ].map((item) => (
              <MotionCard key={item.title} className="border border-white/10 p-8">
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
              </MotionCard>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal direction="left" duration={1}>
              <Parallax className="relative aspect-[4/3]" speed={45}>
                <Image src={images.oceanFreight} alt="Ocean freight operations" fill className="object-cover" sizes="50vw" />
              </Parallax>
            </Reveal>
            <Reveal direction="right" delay={200} duration={1}>
              <div>
                <SectionHeading
                  eyebrow="Excellence"
                  title="Precision in every shipment"
                  description=""
                  align="left"
                />
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    Operational excellence is embedded in our processes. From initial
                    quotation through final delivery, every stage is managed with
                    attention to detail, clear accountability, and proactive
                    problem-solving.
                  </p>
                  <p>
                    We invest in structured workflows, carrier performance monitoring,
                    and continuous improvement to ensure consistent, dependable service.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
