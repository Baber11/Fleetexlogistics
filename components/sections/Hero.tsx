import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Float, HeroText, LineDraw, Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-ink">
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src={images.hero}
          alt="Container ship at international port"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 image-overlay-hero" />

      {/* Floating decorative accents */}
      <Float className="pointer-events-none absolute right-[8%] top-[18%] hidden h-20 w-20 rounded-full border border-champagne/30 lg:block" duration={6} />
      <Float className="pointer-events-none absolute bottom-[30%] right-[20%] hidden h-3 w-3 rounded-full bg-champagne/60 lg:block animate-pulse-glow" distance={10} duration={4} />
      <div className="pointer-events-none absolute left-[6%] top-[40%] hidden h-px w-32 bg-gradient-to-r from-champagne/50 to-transparent lg:block animate-drift" />
      <div className="pointer-events-none absolute bottom-[22%] left-[12%] hidden h-16 w-16 border border-accent/25 lg:block animate-drift-reverse" />

      <Container className="relative flex min-h-[92vh] flex-col justify-end pb-16 pt-28 lg:pb-24">
        <HeroText>
          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-champagne">
            Pakistan-Based · Global Operations
          </p>
        </HeroText>

        <HeroText delay={0.15}>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Precision logistics
            <span className="block text-white/90">for world trade.</span>
          </h1>
        </HeroText>

        <LineDraw className="mt-6 h-px w-24 bg-champagne" delay={0.45} />

        <HeroText delay={0.3}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {company.name} delivers disciplined air, ocean, and road freight
            from {company.headquarters} to destinations worldwide — with the
            composure and clarity international shippers expect.
          </p>
        </HeroText>

        <HeroText delay={0.45}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="secondary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="!border-white/35 !text-white hover:!border-champagne hover:!text-champagne"
            >
              View Services
            </Button>
          </div>
        </HeroText>

        <Reveal delay={600} duration={1}>
          <div className="mt-16 grid grid-cols-2 border border-white/10 sm:grid-cols-4 lg:mt-24">
            {[
              { value: "50+", label: "Countries" },
              { value: "10K+", label: "Shipments / Year" },
              { value: "98%", label: "On-Time Rate" },
              { value: "24/7", label: "Coordination" },
            ].map((stat, i) => (
              <Float key={stat.label} distance={6} duration={4 + i * 0.5}>
                <div className="border-white/10 bg-ink/75 px-5 py-6 text-center sm:border-l sm:px-6 first:sm:border-l-0">
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-champagne/80">
                    {stat.label}
                  </p>
                </div>
              </Float>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
