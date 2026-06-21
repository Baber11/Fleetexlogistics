"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/lib/company";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

function FooterPrelude() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 border-t border-border-brand bg-surface-warm"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
              Global Freight Partner
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Pakistan-based. Globally connected.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              From {company.headquarters}, FleetEx coordinates international
              shipments across 50+ countries with disciplined execution and
              dedicated account support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-border-brand bg-surface px-7 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              {company.phones[0]}
            </a>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterPrelude />
      <footer className="relative z-20 bg-ink text-white">
        <div className="h-1 bg-champagne" />
        <Container>
          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="lg:col-span-4">
              <Link href="/" className="mb-6 inline-flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt={`${company.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <span className="font-display text-2xl font-semibold leading-none">
                    FleetEx
                  </span>
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-champagne">
                    Logistics
                  </span>
                </div>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/65">
                {company.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-champagne">
                HQ — {company.headquarters}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
                Company
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
                Services
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href="/services"
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
                Contact
              </h3>
              <ul className="space-y-4 text-sm text-white/65">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                  <span>
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city}, {company.address.country}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-champagne" />
                  <a href={`tel:${company.phoneTel}`} className="hover:text-white">
                    {company.phoneLabel}: {company.phones[0]}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-champagne" />
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                </li>
                <li className="text-xs text-white/50">NTN: {company.ntn}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/45 sm:flex-row">
            <p>
              &copy; {currentYear} {company.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                aria-label="Follow FleetEx on Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                aria-label="Follow FleetEx on Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
