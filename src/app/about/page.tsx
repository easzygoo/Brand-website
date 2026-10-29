import { Bike, Eye, HeartHandshake, Leaf, Rocket, ShieldCheck, ShoppingBag, Store, Target, Timer } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import produce from "../../../public/images/fresh-produce.webp";

export const metadata: Metadata = pageMetadata({
  title: "About",
  socialTitle: "About EaszyGoo",
  description:
    "Learn about EaszyGoo's mission to make fresh-produce shopping more convenient by connecting customers, local vendors, and delivery partners.",
  path: "/about",
});

const problems = [
  {
    title: "Fresh food takes time",
    text: "Buying vegetables and fruits often means a dedicated trip, comparing stalls, and carrying heavy bags home.",
  },
  {
    title: "Local stores are hard to reach online",
    text: "Many neighbourhood vendors have loyal customers but no simple way to take and manage orders digitally.",
  },
  {
    title: "Orders lack visibility",
    text: "Without clear updates, it can be hard to know whether an order is being prepared or is already on its way.",
  },
];

const connections = [
  {
    icon: ShoppingBag,
    who: "Customers",
    app: "EaszyGoo Customer",
    text: "Discover nearby stores, browse fresh produce and essentials, place orders, and follow them to the door.",
    tint: "bg-brand-green-soft text-brand-green",
  },
  {
    icon: Store,
    who: "Vendors",
    app: "EaszyGoo Vendor",
    text: "Manage products and availability, receive orders, and update preparation status as each order is packed.",
    tint: "bg-brand-yellow-soft text-[#8a6d00]",
  },
  {
    icon: Bike,
    who: "Riders",
    app: "EaszyGoo Rider",
    text: "Receive assigned deliveries, see pickup and drop details, update delivery status, and review earnings.",
    tint: "bg-brand-navy-50 text-brand-navy",
  },
];

const values = [
  { icon: Leaf, title: "Freshness", text: "Fresh produce is the heart of what we do, and every part of the experience is built around it." },
  { icon: Timer, title: "Convenience", text: "Everyday shopping should take less effort — simple to browse, easy to order." },
  { icon: HeartHandshake, title: "Local connections", text: "We want neighbourhood vendors to grow alongside the communities they serve." },
  { icon: Eye, title: "Transparency", text: "Clear information and honest updates at each step of an order." },
  { icon: ShieldCheck, title: "Reliability", text: "Dependable tools for customers, vendors, and delivery partners alike." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About EaszyGoo" title="Bringing the freshness of local markets to your doorstep.">
        <p>
          EaszyGoo is a hyperlocal platform for fresh vegetables, fruits, and everyday essentials. We connect customers with
          the local vendors they already trust, and with delivery partners who bring orders home.
        </p>
      </PageHero>

      {/* Mission & vision */}
      <section aria-labelledby="mission-title" className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading id="mission-title" eyebrow="Why we exist" title="Our mission and vision" />
            <div className="mt-8 space-y-5">
              <div className="flex gap-5 rounded-[var(--radius-card)] bg-white p-6 shadow-soft ring-1 ring-line">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                  <Target aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">Mission</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    To make fresh-produce shopping more convenient by connecting customers, local vendors, and delivery
                    partners through simple, dependable technology.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-[var(--radius-card)] bg-white p-6 shadow-soft ring-1 ring-line">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow">
                  <Rocket aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">Vision</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    A future where every neighbourhood&apos;s fresh produce is easy to reach — and where local stores thrive
                    in a digital-first world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-brand-yellow-soft" />
            <Image
              src={produce}
              alt="Fresh vegetables including tomatoes, carrots, leafy greens and a yellow bell pepper."
              sizes="(min-width: 1024px) 512px, 90vw"
              className="relative h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="problem-title"
            eyebrow="The problem"
            title="Everyday fresh shopping deserves to be easier."
            description="Fresh produce is something households buy often, yet the experience has changed little. EaszyGoo aims to address a few common gaps."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((p, i) => (
              <li key={p.title} className="rounded-[var(--radius-card)] bg-cream p-7 ring-1 ring-line">
                <span aria-hidden="true" className="text-sm font-extrabold text-brand-green">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* How it connects */}
      <section aria-labelledby="connect-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="connect-title"
            align="center"
            eyebrow="One platform, three apps"
            title="How customers, vendors, and riders connect"
            description="Each participant has a dedicated app, and every order moves smoothly between them."
          />
          <ol className="mt-14 grid gap-5 lg:grid-cols-3">
            {connections.map(({ icon: Icon, who, app, text, tint }, i) => (
              <li key={who} className="relative rounded-[var(--radius-card)] bg-white p-7 shadow-soft ring-1 ring-line">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tint}`}>
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{who}</h3>
                    <p className="text-sm font-semibold text-muted">{app}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-muted">{text}</p>
                {i < connections.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-4 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-soft lg:flex"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="surface-dark bg-brand-navy py-20 sm:py-28">
        <Container>
          <SectionHeading id="values-title" tone="dark" eyebrow="What we stand for" title="Our brand values" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-[var(--radius-card)] bg-white/5 p-6 ring-1 ring-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="pt-20 sm:pt-28">
        <FinalCta
          title="Let's talk fresh."
          text="Have a question, want to partner as a vendor, or interested in delivering with EaszyGoo? We'd love to hear from you."
        />
      </div>
    </>
  );
}
