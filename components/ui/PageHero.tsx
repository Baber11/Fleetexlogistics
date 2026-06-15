import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { HeroText, LineDraw, Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";

interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  description,
  image = images.hero,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 image-overlay-bottom" />
      <Container className="relative pb-16 pt-32 lg:pb-20 lg:pt-40">
        <HeroText>
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
            FleetEx Logistics · Pakistan to the World
          </p>
        </HeroText>
        <HeroText delay={0.12}>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </HeroText>
        <LineDraw className="mt-5 h-px w-16 bg-champagne" delay={0.35} />
        <HeroText delay={0.25}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        </HeroText>
        {children && (
          <Reveal delay={400} direction="up">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
