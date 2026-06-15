import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard, Parallax, Reveal, Stagger } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { services } from "@/lib/content";
import { images, serviceImages } from "@/lib/images";

export function CompanyOverview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal direction="left" duration={1}>
            <Parallax className="relative aspect-[4/5]" speed={40}>
              <Image
                src={images.warehouse}
                alt="Modern warehouse operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 image-overlay-bottom" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-2xl text-white">{company.headquarters}</p>
                <p className="text-sm text-champagne/90">Headquarters &amp; coordination hub</p>
              </div>
            </Parallax>
          </Reveal>

          <Reveal direction="right" delay={200} duration={1}>
            <div>
              <SectionHeading
                number="01"
                eyebrow="About FleetEx"
                title="A disciplined partner for international freight"
                description=""
                align="left"
              />
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  {company.legalName} is a Pakistan-based freight forwarding firm
                  serving importers, exporters, and enterprises engaged in
                  international trade across Asia, the Middle East, Europe, and
                  beyond.
                </p>
                <p>
                  From {company.headquarters}, we orchestrate air, ocean, and road
                  movements with clear accountability — so your supply chain
                  performs with consistency, not uncertainty.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
              >
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function KeyServices() {
  const featured = services.slice(0, 3);

  return (
    <section className="bg-surface-warm py-24 lg:py-32">
      <Container>
        <Reveal direction="scale">
          <SectionHeading
            number="02"
            eyebrow="Capabilities"
            title="Freight services, thoughtfully delivered"
            description="Integrated solutions across air, ocean, and land — each managed with the same standard of care."
          />
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.15}>
          {featured.map((service, i) => {
            const Icon = service.icon;
            const img = serviceImages[service.slug] ?? images.globalNetwork;
            return (
              <MotionCard
                key={service.slug}
                className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-ink"
              >
                <Image
                  src={img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 image-overlay-bottom" />
                <div className="relative p-8">
                  <Icon className="mb-4 h-6 w-6 text-champagne" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-block text-[0.7rem] uppercase tracking-[0.14em] text-champagne">
                    0{i + 1} — Explore
                  </span>
                </div>
              </MotionCard>
            );
          })}
        </Stagger>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
