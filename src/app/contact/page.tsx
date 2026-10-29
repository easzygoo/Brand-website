import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { inquiryCategories } from "@/components/contact/categories";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { contactConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  socialTitle: "Contact EaszyGoo",
  description:
    "Get in touch with EaszyGoo for general enquiries, customer support, vendor partnerships, or becoming a delivery partner.",
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    contactConfig.email && { icon: Mail, label: "Email", value: contactConfig.email, href: `mailto:${contactConfig.email}` },
    contactConfig.phone && { icon: Phone, label: "Phone", value: contactConfig.phone, href: `tel:${contactConfig.phone.replace(/\s/g, "")}` },
    contactConfig.address && { icon: MapPin, label: "Address", value: contactConfig.address, href: null },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string | null }[];

  return (
    <>
      <PageHero eyebrow="Contact us" title="We'd love to hear from you.">
        <p>
          Whether you&apos;re a customer with a question, a store owner interested in partnering, or someone who&apos;d like to
          deliver with EaszyGoo — tell us a little about it and choose the right category.
        </p>
      </PageHero>

      <section aria-label="Contact options" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy">How can we help?</h2>
            <ul className="mt-6 space-y-4">
              {inquiryCategories.map(({ value, label, description, icon: Icon }) => (
                <li key={value} className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-line">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-navy">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-brand-navy">{label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-dashed border-line bg-cream p-5">
              <h2 className="font-bold text-brand-navy">Direct contact</h2>
              {details.length > 0 ? (
                <ul className="mt-3 space-y-3">
                  {details.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3 text-sm">
                      <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 text-brand-green" />
                      <span>
                        <span className="sr-only">{label}: </span>
                        {href ? (
                          <a href={href} className="font-semibold text-brand-navy underline-offset-4 hover:underline">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Official email and phone details will be listed here once they&apos;re published.
                </p>
              )}
            </div>
          </div>

          <div id="contact-form">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
