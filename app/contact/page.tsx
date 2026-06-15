import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Globe, IdCard } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/company";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} for freight forwarding quotes and logistics inquiries. ${company.address.full}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Reach our team for freight quotes, logistics consultations, and general inquiries."
        image={images.roadFreight}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            <Reveal direction="left" className="lg:col-span-2">
              <SectionHeading
                eyebrow="Reach Us"
                title="We are here to help"
                description="Our team typically responds within one business day."
                align="left"
              />
              <div className="space-y-8">
                <ContactItem
                  icon={MapPin}
                  title="Office Address"
                  content={
                    <>
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                      <br />
                      {company.address.city}, {company.address.country}
                    </>
                  }
                />
                <ContactItem
                  icon={Phone}
                  title={company.phoneLabel}
                  content={
                    <>
                      <a href={`tel:${company.phoneTel}`} className="hover:text-accent">
                        {company.phones[0]}
                      </a>
                      <span className="mt-1 block text-muted">
                        <a
                          href={company.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          Message on WhatsApp →
                        </a>
                      </span>
                    </>
                  }
                />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content={
                    <a href={`mailto:${company.email}`} className="hover:text-accent">
                      {company.email}
                    </a>
                  }
                />
                <ContactItem
                  icon={IdCard}
                  title="NTN"
                  content={company.ntn}
                />
                <ContactItem
                  icon={Globe}
                  title="Website"
                  content={
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {company.website}
                    </a>
                  }
                />
                <ContactItem
                  icon={Clock}
                  title="Business Hours"
                  content={company.businessHoursNote}
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={200} className="border border-border-brand bg-surface p-8 lg:col-span-3 lg:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Send an inquiry</h2>
              <p className="mt-2 text-sm text-muted">
                Complete the form and our coordination team will be in touch.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-warm py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title={`Find us in ${company.address.city}`}
              description={company.address.full}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[21/9] overflow-hidden border border-border-brand">
              <Image
                src={images.globalNetwork}
                alt={`${company.address.city} operations`}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 image-overlay-bottom" />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-champagne" />
                  <p className="font-display text-xl text-white sm:text-2xl">
                    {company.address.line2}, {company.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-champagne hover:text-white"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-border-brand pb-6">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <div>
        <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
          {title}
        </h3>
        <div className="mt-2 text-sm leading-relaxed text-ink">{content}</div>
      </div>
    </div>
  );
}
