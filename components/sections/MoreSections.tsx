import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionCard, Parallax, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { stats, industries, whyChooseUsFeatures } from "@/lib/content";
import { images } from "@/lib/images";

export function StatsBar() {
  return (
    <section className="border-y border-border-brand bg-ink py-16">
      <Container>
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" stagger={0.1}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-semibold text-white lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-champagne/80">
                {stat.label}
              </p>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export function WhyFleetEx() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal direction="scale">
          <SectionHeading
            number="03"
            eyebrow="Distinction"
            title="Why discerning shippers choose FleetEx"
            description="Reliability is not a feature — it is the foundation of every engagement we undertake."
          />
        </Reveal>
        <Stagger className="grid gap-px bg-border-brand sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {whyChooseUsFeatures.slice(0, 4).map((feature) => {
            const Icon = feature.icon;
            return (
              <MotionCard key={feature.title} className="bg-background p-8">
                <Icon className="mb-5 h-5 w-5 text-accent" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </MotionCard>
            );
          })}
        </Stagger>
        <Reveal delay={250}>
          <div className="mt-10 text-center">
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
            >
              Full advantages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function IndustriesServed() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <Image
        src={images.globalNetwork}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <Container className="relative">
        <Reveal direction="up" duration={1}>
          <SectionHeading
            number="04"
            eyebrow="Industries"
            title="Sector expertise across global commerce"
            description="Tailored logistics for the compliance, handling, and delivery standards your industry demands."
            light
          />
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {industries.map((industry) => (
            <MotionCard
              key={industry.slug}
              className="border border-white/15 p-6 transition-colors hover:border-champagne/50"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 line-clamp-3">
                {industry.description}
              </p>
            </MotionCard>
          ))}
        </Stagger>
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-champagne hover:text-white"
            >
              Industry solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ServiceCoverage() {
  const regions = [
    "South Asia",
    "Middle East",
    "Europe",
    "Asia-Pacific",
    "Americas",
    "Africa",
  ];

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal direction="left" duration={1}>
            <Parallax className="relative aspect-[4/3]" speed={50}>
              <Image
                src={images.oceanFreight}
                alt="Ocean freight vessel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Parallax>
          </Reveal>
          <Reveal direction="right" delay={200} duration={1}>
            <div>
              <SectionHeading
                number="05"
                eyebrow="Global Reach"
                title="Connected corridors, coordinated with care"
                description=""
                align="left"
              />
              <p className="mb-8 text-muted leading-relaxed">
                From Pakistan, we manage freight across South Asia, the Middle
                East, Europe, Asia-Pacific, the Americas, and Africa — through
                established carrier relationships and trusted agent
                partnerships worldwide.
              </p>
              <Stagger className="space-y-3" stagger={0.08}>
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center justify-between border-b border-border-brand py-3"
                  >
                    <span className="text-sm font-medium text-ink">{region}</span>
                    <ArrowRight className="h-4 w-4 text-champagne" />
                  </div>
                ))}
              </Stagger>
              <Link
                href="/global-network"
                className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
              >
                Global network <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function CustomerBenefits() {
  const benefits = [
    "Single point of contact for all shipments",
    "Transparent pricing with no hidden fees",
    "Proactive status updates at every milestone",
    "Customized solutions for your cargo type",
    "Compliance support for customs and regulations",
    "Flexible service levels from economy to express",
  ];

  return (
    <section className="bg-surface-warm py-24 lg:py-32">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <SectionHeading
              number="06"
              eyebrow="Client Experience"
              title="Logistics designed around your outcomes"
              description="Every engagement is structured to reduce friction, improve visibility, and protect your cargo."
              align="left"
            />
          </Reveal>
          <Stagger className="space-y-4 border-l border-champagne pl-8" stagger={0.1} direction="right">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-ink">{benefit}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="border-t border-border-brand bg-background py-24 lg:py-28">
      <Container>
        <Reveal direction="scale" duration={1}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
              Begin the conversation
            </p>
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Ready to move your cargo?
            </h2>
            <div className="editorial-rule mx-auto mt-6 w-20" />
            <p className="mx-auto mt-5 max-w-lg text-muted">
              Speak with our team in {company.headquarters} about air, ocean, or
              road freight to destinations worldwide.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <a
                href={`tel:${company.phoneTel}`}
                className="text-[0.75rem] uppercase tracking-[0.14em] text-muted hover:text-accent"
              >
                {company.phoneLabel}: {company.phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
