import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Parallax, Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { services } from "@/lib/content";
import { images, serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${company.name} freight forwarding services including air freight, ocean freight, road freight, warehousing, customs clearance, and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive freight forwarding and supply chain solutions across air, ocean, and land."
        image={images.airFreight}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal direction="scale">
            <SectionHeading
              eyebrow="Capabilities"
              title="End-to-end freight solutions"
              description="From origin to destination, every movement is managed with the same standard of professionalism."
            />
          </Reveal>

          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const img = serviceImages[service.slug] ?? images.globalNetwork;
              const reversed = index % 2 === 1;

              return (
                <Reveal
                  key={service.slug}
                  direction={reversed ? "right" : "left"}
                  duration={1}
                  delay={100}
                >
                  <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <Parallax
                      className={`relative aspect-[4/3] ${reversed ? "lg:order-2" : ""}`}
                      speed={40}
                    >
                      <Image src={img} alt={service.title} fill className="object-cover" sizes="50vw" />
                    </Parallax>
                    <div className={reversed ? "lg:order-1" : ""}>
                      <div className="mb-4 flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
                      <ul className="mt-6 space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-sm text-ink">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink hover:text-accent"
                      >
                        Request quote <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20">
        <Container className="text-center">
          <Reveal direction="scale">
            <h2 className="font-display text-4xl font-semibold text-white">
              Need a custom solution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Our team designs tailored logistics programs for specific cargo types,
              trade lanes, and delivery requirements.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="light">
                Request Consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
