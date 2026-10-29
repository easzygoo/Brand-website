import { ArrowUpRight, Check, Clock } from "lucide-react";
import type { ComponentType } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appsConfig, type AppId } from "@/config/site";

import { CustomerMockup, RiderMockup, VendorMockup } from "./AppMockups";

type AppCard = {
  id: AppId;
  anchor: string;
  audience: string;
  description: string;
  features: string[];
  Mockup: ComponentType;
  panel: string;
  accent: string;
  check: string;
};

const apps: AppCard[] = [
  {
    id: "customer",
    anchor: "customer-app",
    audience: "For shoppers",
    description: "Find nearby stores and get fresh vegetables, fruits, and essentials without the market run.",
    features: [
      "Discover nearby stores and products",
      "Browse vegetables, fruits, and essentials",
      "Manage carts, addresses, and orders",
      "Track orders and view order history",
    ],
    Mockup: CustomerMockup,
    panel: "bg-gradient-to-b from-brand-green-soft to-[#f3faf5]",
    accent: "text-brand-green",
    check: "bg-brand-green-soft text-brand-green",
  },
  {
    id: "vendor",
    anchor: "vendor-app",
    audience: "For local stores",
    description: "Give your store a digital counter: list products, accept orders, and keep customers updated.",
    features: [
      "Manage store availability and products",
      "Receive and process customer orders",
      "Update preparation status",
      "Review store and sales information",
    ],
    Mockup: VendorMockup,
    panel: "bg-gradient-to-b from-brand-yellow-soft to-[#fffbea]",
    accent: "text-[#8a6d00]",
    check: "bg-brand-yellow-soft text-[#8a6d00]",
  },
  {
    id: "rider",
    anchor: "rider-app",
    audience: "For delivery partners",
    description: "Everything a delivery partner needs on the road, from pickup details to completed drops.",
    features: [
      "View assigned deliveries",
      "Access pickup and delivery details",
      "Update delivery status",
      "View earnings and delivery history",
    ],
    Mockup: RiderMockup,
    panel: "bg-gradient-to-b from-brand-navy-50 to-[#f5f7fc]",
    accent: "text-brand-navy-700",
    check: "bg-brand-navy-50 text-brand-navy",
  },
];

function Availability({ id }: { id: AppId }) {
  const { android, ios } = appsConfig[id].storeLinks;
  const links = [
    { label: "Get it on Google Play", href: android },
    { label: "Download on the App Store", href: ios },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  if (links.length === 0) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-muted ring-1 ring-line">
        <Clock aria-hidden="true" className="h-4 w-4" />
        Public download coming soon
      </p>
    );
  }
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy-700"
          >
            {l.label}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function AppShowcase() {
  return (
    <section id="apps" aria-labelledby="apps-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="apps-title"
          align="center"
          eyebrow="Our apps"
          title="Three apps. One fresh experience."
          description="Every side of a fresh-produce order gets a dedicated app — designed around what shoppers, store owners, and delivery partners actually need."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {apps.map(({ id, anchor, audience, description, features, Mockup, panel, accent, check }) => (
            <article
              key={id}
              id={anchor}
              aria-labelledby={`${anchor}-title`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`relative flex h-80 justify-center overflow-hidden ${panel}`}>
                <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold tracking-wide text-muted ring-1 ring-line">
                  Design preview
                </span>
                <div className="mt-12 transition-transform duration-500 group-hover:-translate-y-2">
                  <Mockup />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className={`text-xs font-bold tracking-[0.16em] uppercase ${accent}`}>{audience}</p>
                <h3 id={`${anchor}-title`} className="mt-2 text-2xl font-extrabold tracking-tight text-brand-navy">
                  {appsConfig[id].name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
                <ul className="mt-6 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${check}`}>
                        <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Availability id={id} />
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          App visuals are illustrative design previews with sample content, not screenshots of released apps.
        </p>
      </Container>
    </section>
  );
}
