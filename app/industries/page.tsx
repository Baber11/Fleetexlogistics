import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { industries } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries",
  description: `${company.name} serves diverse industries including retail, manufacturing, healthcare, automotive, electronics, and more.`,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        description="Specialized logistics expertise tailored to the unique requirements of each sector we support."
        image={images.warehouse}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal direction="scale">
            <SectionHeading
              eyebrow="Sectors"
              title="Logistics built for your industry"
              description="Every sector carries distinct cargo handling, compliance, and delivery requirements. FleetEx brings sector-specific knowledge to every engagement."
            />
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.12}>
            {industries.map((industry, i) => (
              <MotionCard
                key={industry.slug}
                className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden border border-border-brand bg-ink"
              >
                <Image
                  src={i % 2 === 0 ? images.roadFreight : images.oceanFreight}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 image-overlay-bottom" />
                <div className="relative p-8">
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-white/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionCard>
            ))}
          </Stagger>

          <Reveal delay={300}>
            <div className="mt-16 border border-border-brand bg-surface-warm p-10 text-center">
              <h3 className="font-display text-2xl font-semibold text-ink">
                Don&apos;t see your industry?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-muted">
                We work with businesses across many sectors. Contact us to discuss
                your specific logistics requirements.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
